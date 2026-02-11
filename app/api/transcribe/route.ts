import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { createReadStream, statSync } from 'fs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Supported audio/video formats
const SUPPORTED_FORMATS = [
  'audio/mpeg', 'audio/mp3', // MP3
  'audio/wav', 'audio/wave', 'audio/x-wav', // WAV
  'audio/mp4', 'audio/m4a', 'audio/x-m4a', // M4A
  'video/mp4', // MP4 video
  'audio/ogg', 'audio/flac', 'audio/webm', // Additional formats
];

// Maximum free tier duration in seconds (5 minutes = 300 seconds)
const FREE_TIER_SECONDS = 300;

// Helper to get audio duration (approximation based on file size for now)
// For production, you'd want to use a library like ffprobe
function estimateAudioDuration(fileSize: number, mimeType: string): number {
  // Rough estimates (in seconds per MB)
  const estimates: { [key: string]: number } = {
    'audio/mpeg': 480, // ~1MB per minute for 128kbps MP3
    'audio/mp3': 480,
    'audio/wav': 60, // ~10MB per minute for 16-bit 44.1kHz stereo
    'audio/mp4': 480,
    'audio/m4a': 480,
    'video/mp4': 120, // Video files are larger
  };
  
  const fileSizeMB = fileSize / (1024 * 1024);
  const secondsPerMB = estimates[mimeType] || 240; // Default fallback
  return fileSizeMB * (60 / (secondsPerMB / 60));
}

// Helper function to convert seconds to SRT timestamp
function secondsToSRT(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`;
}

// Helper function to convert seconds to VTT timestamp
function secondsToVTT(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
}

// Generate SRT format from segments
function generateSRT(segments: any[]): string {
  return segments.map((segment, index) => {
    return `${index + 1}\n${secondsToSRT(segment.start)} --> ${secondsToSRT(segment.end)}\n${segment.text.trim()}\n`;
  }).join('\n');
}

// Generate VTT format from segments
function generateVTT(segments: any[]): string {
  const header = 'WEBVTT\n\n';
  const body = segments.map((segment, index) => {
    return `${index + 1}\n${secondsToVTT(segment.start)} --> ${secondsToVTT(segment.end)}\n${segment.text.trim()}\n`;
  }).join('\n');
  return header + body;
}

export async function POST(request: NextRequest) {
  let tempPath: string | null = null;
  
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const tier = formData.get('tier') as string || 'standard';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!SUPPORTED_FORMATS.includes(file.type)) {
      return NextResponse.json(
        { 
          error: 'Unsupported file format',
          message: 'Please upload MP3, WAV, M4A, or MP4 files',
          receivedType: file.type
        },
        { status: 400 }
      );
    }

    // Check file size (OpenAI has 25MB limit)
    const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { 
          error: 'File too large',
          message: 'Maximum file size is 25MB. Please compress your audio or split into smaller files.'
        },
        { status: 400 }
      );
    }

    // Estimate duration for pricing gate
    const estimatedDuration = estimateAudioDuration(file.size, file.type);

    // Save file temporarily
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const safeFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    tempPath = join(tmpdir(), `sermon-${Date.now()}-${safeFilename}`);
    await writeFile(tempPath, buffer);

    console.log(`Processing file: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`);

    // Transcribe using OpenAI Whisper
    const result = await transcribeWithWhisper(tempPath, tier);

    // Check if exceeds free tier
    const actualDuration = result.duration || estimatedDuration;
    const exceedsFree = actualDuration > FREE_TIER_SECONDS;

    // Clean up temp file
    if (tempPath) {
      await unlink(tempPath);
      tempPath = null;
    }

    return NextResponse.json({
      ...result,
      pricing: {
        duration: actualDuration,
        durationFormatted: `${Math.floor(actualDuration / 60)}:${String(Math.floor(actualDuration % 60)).padStart(2, '0')}`,
        exceedsFree,
        freeMinutes: FREE_TIER_SECONDS / 60,
        tier,
      }
    });

  } catch (error: any) {
    console.error('Transcription error:', error);
    
    // Clean up temp file on error
    if (tempPath) {
      try {
        await unlink(tempPath);
      } catch (unlinkError) {
        console.error('Failed to cleanup temp file:', unlinkError);
      }
    }

    return NextResponse.json(
      { 
        error: 'Transcription failed',
        message: error?.message || 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? error?.toString() : undefined
      },
      { status: 500 }
    );
  }
}

async function transcribeWithWhisper(filePath: string, tier: string) {
  try {
    // Create a read stream for the file
    const fileStream = createReadStream(filePath) as any;
    
    // Get file stats for metadata
    const stats = statSync(filePath);
    console.log(`Transcribing file: ${stats.size} bytes`);

    // Call OpenAI Whisper API with verbose JSON to get timestamps
    const transcription = await openai.audio.transcriptions.create({
      file: fileStream,
      model: 'whisper-1',
      response_format: 'verbose_json',
      timestamp_granularities: ['segment'],
    });

    console.log('Transcription complete:', {
      duration: (transcription as any).duration,
      language: (transcription as any).language,
      segments: (transcription as any).segments?.length || 0
    });

    // Extract data
    const text = transcription.text;
    const segments = (transcription as any).segments || [];
    const duration = (transcription as any).duration || 0;
    const language = (transcription as any).language || 'en';

    // Generate subtitle formats
    const srt = segments.length > 0 ? generateSRT(segments) : '';
    const vtt = segments.length > 0 ? generateVTT(segments) : '';

    return {
      text,
      srt,
      vtt,
      duration,
      language,
      segments: segments.map((s: any) => ({
        start: s.start,
        end: s.end,
        text: s.text,
      })),
      tier,
      model: 'whisper-1',
    };
  } catch (error: any) {
    console.error('Whisper API error:', error);
    
    // Provide more specific error messages
    if (error?.code === 'insufficient_quota') {
      throw new Error('OpenAI API quota exceeded. Please contact support.');
    } else if (error?.code === 'invalid_api_key') {
      throw new Error('Invalid OpenAI API key configuration.');
    } else if (error?.message?.includes('audio')) {
      throw new Error('Failed to process audio file. Please ensure the file is a valid audio/video format.');
    }
    
    throw error;
  }
}
