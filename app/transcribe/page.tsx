'use client';

import { useState, useCallback } from 'react';
import { Upload, FileAudio, X, Loader2, Download, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function TranscribePage() {
  const [file, setFile] = useState<File | null>(null);
  const [tier, setTier] = useState<'standard' | 'premium'>('standard');
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      setError(null);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleTranscribe = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setProcessing(true);
    setProgress(0);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tier', tier);

    try {
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Transcription failed');
      }

      const data = await response.json();
      setResult(data);
      setProgress(100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setProcessing(false);
    }
  };

  const downloadTranscript = (format: 'txt' | 'srt' | 'vtt') => {
    if (!result) return;

    let content = '';
    let mimeType = 'text/plain';
    let extension = format;

    if (format === 'txt') {
      content = result.text;
    } else if (format === 'srt' && result.srt) {
      content = result.srt;
      mimeType = 'application/x-subrip';
    } else if (format === 'vtt' && result.vtt) {
      content = result.vtt;
      mimeType = 'text/vtt';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcript.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#E8E4DC]">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <path d="M15 0h10v15h15v10h-15v15h-10v-15h-15v-10h15z" fill="#2D2D2D" />
                <path d="M18 16 L26 20 L18 24 Z" fill="#E8725A" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl text-[#2D2D2D] tracking-tight">Sermon</span>
              <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Transcription</span>
            </div>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              Transcribe Your Sermon
            </h1>
            <p className="text-lg text-[#5c5c5c]">
              Upload your audio or video file and get a perfect transcript in minutes
            </p>
          </div>

          {/* Tier Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-[#2D2D2D] mb-3">
              Select Quality Tier
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setTier('standard')}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  tier === 'standard'
                    ? 'border-[#E8725A] bg-[#E8725A]/5'
                    : 'border-[#E8E4DC] bg-white hover:border-[#E8725A]/30'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#2D2D2D]">Standard</h3>
                  <span className="text-2xl font-bold text-[#E8725A]">$0.006<span className="text-sm text-[#5c5c5c]">/min</span></span>
                </div>
                <p className="text-sm text-[#5c5c5c] mb-4">OpenAI Whisper • 99% accuracy</p>
                <ul className="space-y-2">
                  {['Fast processing', '90+ languages', 'Timestamps included'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#2D2D2D]">
                      <CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </button>

              <button
                onClick={() => setTier('premium')}
                className={`p-6 rounded-2xl border-2 transition-all text-left relative ${
                  tier === 'premium'
                    ? 'border-[#E8725A] bg-[#E8725A]/5'
                    : 'border-[#E8E4DC] bg-white hover:border-[#E8725A]/30'
                }`}
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#E8725A] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Best Quality
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#2D2D2D]">Premium</h3>
                  <span className="text-2xl font-bold text-[#E8725A]">$0.02<span className="text-sm text-[#5c5c5c]">/min</span></span>
                </div>
                <p className="text-sm text-[#5c5c5c] mb-4">ElevenLabs • 99.5% accuracy</p>
                <ul className="space-y-2">
                  {['Speaker identification', 'Word-level timestamps', 'Entity detection'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#2D2D2D]">
                      <CheckCircle2 className="w-4 h-4 text-[#E8725A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </button>
            </div>
          </div>

          {/* Upload Area */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative rounded-3xl border-2 border-dashed transition-all ${
              dragActive
                ? 'border-[#E8725A] bg-[#E8725A]/5'
                : 'border-[#E8E4DC] bg-white'
            }`}
          >
            {!file ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E8725A]/10 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-[#E8725A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">
                  Upload your sermon
                </h3>
                <p className="text-[#5c5c5c] mb-6">
                  Drag and drop your audio or video file, or click to browse
                </p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="audio/*,video/*"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8725A] hover:bg-[#d4654f] text-white rounded-full font-medium cursor-pointer transition-all"
                >
                  Select File
                </label>
                <p className="text-sm text-[#5c5c5c] mt-4">
                  Supports MP3, MP4, WAV, M4A, and more
                </p>
              </div>
            ) : (
              <div className="p-8">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#F5F1EB]">
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0">
                    <FileAudio className="w-6 h-6 text-[#E8725A]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#2D2D2D] truncate">{file.name}</p>
                    <p className="text-sm text-[#5c5c5c]">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="w-8 h-8 rounded-full hover:bg-[#2D2D2D]/5 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-[#5c5c5c]" />
                  </button>
                </div>

                {!processing && !result && (
                  <button
                    onClick={handleTranscribe}
                    className="w-full mt-6 py-4 bg-[#E8725A] hover:bg-[#d4654f] text-white rounded-full font-medium transition-all hover:shadow-lg"
                  >
                    Start Transcription
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Processing State */}
          {processing && (
            <div className="mt-8 p-8 rounded-3xl bg-white border border-[#E8E4DC]">
              <div className="flex items-center gap-4 mb-4">
                <Loader2 className="w-6 h-6 text-[#E8725A] animate-spin" />
                <div>
                  <h3 className="font-bold text-[#2D2D2D]">Processing your sermon...</h3>
                  <p className="text-sm text-[#5c5c5c]">This usually takes 3-5 minutes</p>
                </div>
              </div>
              <div className="w-full h-2 bg-[#E8E4DC] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E8725A] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mt-8 p-6 rounded-2xl bg-red-50 border border-red-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Transcription Failed</h3>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Result State */}
          {result && (
            <div className="mt-8 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC]">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8E4DC]">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-bold text-[#2D2D2D]">Transcription Complete!</h3>
                    <p className="text-sm text-[#5c5c5c]">
                      {result.duration ? `${Math.floor(result.duration / 60)}:${String(Math.floor(result.duration % 60)).padStart(2, '0')}` : 'Ready to download'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Transcript Preview
                    </label>
                    <div className="p-4 rounded-xl bg-[#F5F1EB] max-h-64 overflow-y-auto">
                      <p className="text-sm text-[#2D2D2D] leading-relaxed whitespace-pre-wrap">
                        {result.text?.substring(0, 500)}...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => downloadTranscript('txt')}
                    className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-[#E8725A] hover:bg-[#d4654f] text-white font-medium transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download TXT
                  </button>
                  <button
                    onClick={() => downloadTranscript('srt')}
                    className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-[#2D2D2D] hover:bg-[#3a3a3a] text-white font-medium transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download SRT
                  </button>
                  <button
                    onClick={() => downloadTranscript('vtt')}
                    className="flex-1 min-w-[140px] py-3 px-4 rounded-xl border-2 border-[#2D2D2D] hover:bg-[#2D2D2D]/5 text-[#2D2D2D] font-medium transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download VTT
                  </button>
                </div>

                <button
                  onClick={() => {
                    setFile(null);
                    setResult(null);
                    setError(null);
                  }}
                  className="w-full mt-4 py-3 text-[#5c5c5c] hover:text-[#2D2D2D] font-medium transition-colors"
                >
                  Transcribe Another File
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
