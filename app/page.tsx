'use client';

import { CheckCircle2, Upload, FileText, Download, Play, ArrowRight, Quote, ChevronDown, Sparkles, Clock, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
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
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#how-it-works" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">FAQ</a>
          </div>

          <Link href="/transcribe" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
            Start Transcribing
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D2D2D]/5 mb-6">
                <Sparkles className="w-4 h-4 text-[#E8725A]" />
                <span className="text-sm text-[#2D2D2D]/70">AI-powered accuracy. Human-level quality.</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-[1.1] tracking-tight mb-6">
                Turn sermons into
                <span className="relative">
                  <span className="relative z-10 text-[#E8725A]"> searchable text</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E8725A]/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 6 Q 50 0, 100 6 T 200 6" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-[#5c5c5c] leading-relaxed mb-8">
                Professional sermon transcription in minutes. Upload audio or video, get perfectly formatted transcripts with speaker identification and timestamps.
              </p>

              {/* CTA + Features */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/transcribe" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2 text-base">
                    Start Free Transcription
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    See Demo
                  </button>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-[#5c5c5c]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    <span>99.5% accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    <span>Speaker ID included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    <span>Multiple formats</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Preview Card */}
            <div className="relative">
              {/* Main document card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2D2D2D]/10 bg-white p-8 max-w-[480px] mx-auto lg:ml-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-[#E8E4DC]">
                    <FileText className="w-6 h-6 text-[#E8725A]" />
                    <div>
                      <p className="font-semibold text-[#2D2D2D]">Sunday Sermon - Grace & Mercy</p>
                      <p className="text-sm text-[#5c5c5c]">Pastor John • 45:23</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-[#5c5c5c] font-mono">00:00</span>
                      <p className="text-[#2D2D2D] leading-relaxed">Good morning everyone. Today we're going to talk about God's amazing grace and how it transforms our lives...</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#5c5c5c] font-mono">00:15</span>
                      <p className="text-[#2D2D2D] leading-relaxed">I want to start by reading from Ephesians chapter 2, verses 8 through 9...</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-[#5c5c5c] font-mono">00:32</span>
                      <p className="text-[#2D2D2D] leading-relaxed">"For it is by grace you have been saved, through faith—and this is not from yourselves..."</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E4DC] flex gap-2">
                    <button className="flex-1 py-2 px-4 rounded-lg bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium hover:bg-[#E8725A]/20 transition-colors">
                      Download TXT
                    </button>
                    <button className="flex-1 py-2 px-4 rounded-lg bg-[#2D2D2D]/5 text-[#2D2D2D] text-sm font-medium hover:bg-[#2D2D2D]/10 transition-colors">
                      Download SRT
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-4 lg:-left-16 top-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#2D2D2D]/5 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#E8725A]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">5 min</p>
                    <p className="text-xs text-[#5c5c5c]">Avg. processing time</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-[#2D2D2D]/5 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2D2D2D]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#2D2D2D]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2D2D2D]">99.5%</p>
                    <p className="text-xs text-[#5c5c5c]">Accuracy rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#features" className="flex flex-col items-center gap-2 text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">
            <span className="text-xs uppercase tracking-wider">Learn More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Everything you need for professional transcription
            </h2>
            <p className="text-lg text-white/60">
              From upload to download, we make transcription effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Most sermons transcribed in under 5 minutes. No waiting around." },
              { icon: Users, title: "Speaker ID", desc: "Automatically identifies different speakers with Premium tier." },
              { icon: FileText, title: "Multiple Formats", desc: "Download as TXT, SRT, VTT, or JSON. Use anywhere." },
              { icon: Shield, title: "99.5% Accurate", desc: "Powered by OpenAI Whisper and ElevenLabs for unmatched accuracy." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E8725A]/30 transition-colors">
                <item.icon className="w-8 h-8 text-[#E8725A] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Three steps to perfect transcripts
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: Upload,
                title: "Upload Your Sermon",
                desc: "Drag and drop audio or video files. MP3, MP4, WAV, M4A—we support all major formats."
              },
              {
                num: "02",
                icon: Sparkles,
                title: "AI Processes",
                desc: "Our AI analyzes the audio, identifies speakers (Premium), and generates accurate text with timestamps."
              },
              {
                num: "03",
                icon: Download,
                title: "Download & Use",
                desc: "Get your transcript in TXT, SRT, or VTT format. Perfect for websites, notes, or captions."
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all hover:shadow-xl hover:shadow-[#E8725A]/5">
                  <span className="absolute -top-4 left-8 bg-[#F5F1EB] px-4 py-1 font-mono text-[#E8725A] text-sm font-bold">
                    {step.num}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-[#E8725A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{step.title}</h3>
                  <p className="text-[#5c5c5c] leading-relaxed">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-[#E8E4DC]">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#2D2D2D] px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/20 text-[#E8725A] text-sm font-medium mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Pay as you go. No subscriptions. No surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Standard */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-1">Standard</h3>
              <p className="text-white/50 text-sm mb-6">OpenAI Whisper</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$0.006</span>
                <span className="text-white/50">/minute</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["99% accuracy", "90+ languages", "Timestamps included", "TXT, SRT, VTT formats", "Fast processing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/transcribe" className="w-full py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors font-medium block text-center">
                Start Transcribing
              </Link>
            </div>

            {/* Premium - Featured */}
            <div className="p-8 rounded-3xl bg-[#E8725A] relative scale-105 shadow-2xl shadow-[#E8725A]/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#E8725A] text-xs font-bold rounded-full uppercase tracking-wider">
                Best Quality
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Premium</h3>
              <p className="text-white/70 text-sm mb-6">ElevenLabs Audio Intelligence</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$0.02</span>
                <span className="text-white/70">/minute</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["99.5% accuracy", "Speaker diarization (up to 32)", "Word-level timestamps", "Entity detection", "All Standard features"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/transcribe?tier=premium" className="w-full py-3 rounded-full bg-white text-[#E8725A] hover:bg-white/90 transition-colors font-bold block text-center">
                Try Premium
              </Link>
            </div>
          </div>

          <p className="text-center text-white/50 mt-10">
            🎁 <span className="text-white">First 10 minutes free</span> — no credit card required
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
              Questions? We've got answers.
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "What audio formats do you support?", a: "We support all major audio and video formats: MP3, MP4, WAV, M4A, MOV, AAC, FLAC, OGG, and more. If you can play it, we can transcribe it." },
              { q: "How accurate is the transcription?", a: "Standard tier (Whisper) achieves 99% accuracy on clear audio. Premium tier (ElevenLabs) reaches 99.5% with better handling of accents, background noise, and multiple speakers." },
              { q: "What's the difference between Standard and Premium?", a: "Standard uses OpenAI Whisper for fast, accurate transcription. Premium uses ElevenLabs Audio Intelligence for speaker identification (diarization), entity detection, and slightly higher accuracy." },
              { q: "How long does processing take?", a: "Most sermons process in under 5 minutes. A 45-minute sermon typically takes 3-4 minutes to transcribe." },
              { q: "What output formats do you provide?", a: "All transcripts are available in TXT (plain text), SRT (subtitles), and VTT (web captions) formats. Premium tier also includes JSON with detailed metadata." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
                <h3 className="font-semibold text-[#2D2D2D] mb-2">{faq.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <path d="M15 0h10v15h15v10h-15v15h-10v-15h-15v-10h15z" fill="#2D2D2D" />
                <path d="M18 16 L26 20 L18 24 Z" fill="#E8725A" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6 leading-tight">
            Turn your sermons into searchable text
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Professional transcription powered by AI. Start transcribing in seconds.
          </p>
          
          <Link href="/transcribe" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Start Free Transcription
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-[#5c5c5c] mt-6">First 10 minutes free. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <path d="M15 0h10v15h15v10h-15v15h-10v-15h-15v-10h15z" fill="white" />
                    <path d="M18 16 L26 20 L18 24 Z" fill="#E8725A" />
                  </svg>
                </div>
                <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Transcription</span></span>
              </div>
              <p className="text-sm">AI-powered sermon transcription.</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><Link href="/transcribe" className="hover:text-white transition-colors">Start Transcribing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="mailto:hello@sermon-transcription.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm">
            <p>&copy; 2026 Sermon Transcription. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
}
