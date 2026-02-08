import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const tier = formData.get('tier') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Save file temporarily
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const tempPath = join(tmpdir(), `upload-${Date.now()}-${file.name}`);
    await writeFile(tempPath, buffer);

    let result;

    if (tier === 'premium') {
      // ElevenLabs Audio Intelligence
      // Note: This requires the ElevenLabs API key and SDK setup
      // For now, we'll fall back to Whisper with a note
      result = await transcribeWithWhisper(tempPath);
      result.note = 'Premium tier (ElevenLabs) coming soon. Used Whisper for this transcription.';
    } else {
      // Standard: OpenAI Whisper
      result = await transcribeWithWhisper(tempPath);
    }

    // Clean up temp file
    await unlink(tempPath);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { error: 'Transcription failed' },
      { status: 500 }
    );
  }
}

async function transcribeWithWhisper(filePath: string) {
  try {
    // First, get the full transcription with timestamps
    const transcription = await openai.audio.transcriptions.create({
      file: await createReadStream(filePath),
      model: 'whisper-1',
      response_format: 'verbose_json',
      timestamp_granularities: ['segment'],
    });

    // Extract plain text
    const text = transcription.text;

    // Generate SRT and VTT from segments
    const segments = (transcription as any).segments || [];
    const srt = segments.length > 0 ? generateSRT(segments) : '';
    const vtt = segments.length > 0 ? generateVTT(segments) : '';

    return {
      text,
      srt,
      vtt,
      duration: (transcription as any).duration || 0,
      language: (transcription as any).language || 'en',
      segments: segments.map((s: any) => ({
        start: s.start,
        end: s.end,
        text: s.text,
      })),
    };
  } catch (error) {
    console.error('Whisper transcription error:', error);
    throw error;
  }
}

// Helper to create a readable stream from file path
async function createReadStream(filePath: string): Promise<File> {
  const fs = await import('fs');
  const path = await import('path');
  const buffer = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);
  return new File([buffer], fileName);
}
