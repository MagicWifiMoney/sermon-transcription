'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText, Mic, Upload, Zap, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to transcribe a sermon?",
    answer: "Manual transcription typically takes 4-6 hours for a 45-minute sermon. AI-powered tools like Sermon Transcription can process the same audio in under 5 minutes with 99%+ accuracy."
  },
  {
    question: "What's the best audio format for sermon transcription?",
    answer: "WAV and FLAC offer the highest quality, but MP3 and M4A work excellently for transcription. The key is clear audio with minimal background noise rather than the specific format."
  },
  {
    question: "Can AI transcription handle multiple speakers?",
    answer: "Yes! Premium AI transcription services include speaker diarization, which automatically identifies and labels different speakers (pastor, worship leader, guest speaker) throughout the transcript."
  },
  {
    question: "How accurate is automated sermon transcription?",
    answer: "Modern AI transcription achieves 99-99.5% accuracy on clear audio. Religious terminology, Bible verses, and proper nouns are handled well by specialized sermon transcription tools."
  },
  {
    question: "What output formats are available for sermon transcripts?",
    answer: "Most services provide TXT (plain text), SRT and VTT (subtitles/captions), and JSON (with timestamps and metadata). These formats work for websites, study guides, and video captions."
  },
  {
    question: "Is my sermon audio kept private?",
    answer: "Reputable transcription services process audio securely and delete files after transcription. Always check the privacy policy, especially for sensitive sermon content."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-[#E8E4DC] rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-[#E8E4DC]/30 transition-colors"
      >
        <span className="font-semibold text-[#2D2D2D] pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#E8725A] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#5c5c5c] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-[#5c5c5c] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function HowToTranscribeSermon() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50">
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

          <Link href="/transcribe" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
            Start Transcribing
          </Link>
        </nav>
      </header>

      {/* Article */}
      <article className="pt-28 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-[#5c5c5c]">
            <Link href="/" className="hover:text-[#E8725A]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2D2D2D]">Blog</span>
            <span className="mx-2">/</span>
            <span className="text-[#2D2D2D]">How to Transcribe a Sermon</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>Complete Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              How to Transcribe a Sermon: The Complete 2025 Guide
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              Learn how to transcribe a sermon quickly and accurately using AI-powered tools, manual methods, or professional services. This comprehensive guide covers everything from recording tips to formatting your final transcript.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#5c5c5c]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Updated February 2025</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-[#E8E4DC]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">📋 In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-3">
              {[
                "Why Transcribe Sermons?",
                "Method 1: AI-Powered Transcription",
                "Method 2: Manual Transcription",
                "Method 3: Professional Services",
                "Recording Tips for Better Transcription",
                "Formatting Your Transcript",
                "Common Challenges & Solutions",
                "Frequently Asked Questions"
              ].map((item, i) => (
                <a key={i} href={`#section-${i+1}`} className="flex items-center gap-2 text-[#5c5c5c] hover:text-[#E8725A] transition-colors">
                  <span className="w-6 h-6 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-xs flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <section id="section-1" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Why Transcribe Sermons?</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Transcribing sermons has become essential for modern churches and ministries. Whether you're a pastor looking to repurpose content, a church administrator building an archive, or a congregation member wanting to study deeper, sermon transcription unlocks incredible value from your spoken messages.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Accessibility", desc: "Deaf and hard-of-hearing members can fully participate in your ministry" },
                  { title: "SEO & Discovery", desc: "Transcripts make your sermons searchable on Google, bringing new visitors" },
                  { title: "Content Repurposing", desc: "Turn one sermon into blog posts, social media quotes, and study guides" },
                  { title: "Bible Study", desc: "Members can search for specific verses, topics, or quotes" },
                  { title: "Legal Record", desc: "Create official documentation of teachings for church records" },
                  { title: "Translation", desc: "Text is far easier to translate than audio for multilingual ministries" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-[#E8E4DC]">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2D2D2D]">{item.title}:</span>
                      <span className="text-[#5c5c5c]"> {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The average 45-minute sermon contains approximately 6,000-8,000 words. That's the equivalent of a substantial blog post or book chapter—content that would take hours to write from scratch but already exists in your audio recordings.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Method 1: AI-Powered Transcription (Recommended)</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                AI transcription has revolutionized how churches convert sermons to text. Modern speech recognition technology achieves 99%+ accuracy on clear audio, processes files in minutes, and costs a fraction of human transcription.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">How AI Sermon Transcription Works</h3>
              
              <div className="bg-white rounded-2xl p-8 mb-8 border border-[#E8E4DC]">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-7 h-7 text-[#E8725A]" />
                    </div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-2">1. Upload Audio</h4>
                    <p className="text-sm text-[#5c5c5c]">Upload MP3, WAV, M4A, or even video files directly to the transcription service</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-7 h-7 text-[#E8725A]" />
                    </div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-2">2. AI Processing</h4>
                    <p className="text-sm text-[#5c5c5c]">Advanced speech recognition analyzes the audio in minutes, not hours</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-7 h-7 text-[#E8725A]" />
                    </div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-2">3. Download Transcript</h4>
                    <p className="text-sm text-[#5c5c5c]">Get formatted text with timestamps, ready to edit and publish</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Best AI Transcription Tools for Sermons</h3>
              
              <div className="space-y-4 mb-8">
                <div className="p-6 bg-[#E8725A]/5 rounded-xl border-2 border-[#E8725A]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8725A] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">ST</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D2D2D] mb-1">Sermon Transcription (sermon-transcription.com)</h4>
                      <p className="text-[#5c5c5c] text-sm mb-2">Purpose-built for churches. 99.5% accuracy, speaker identification, timestamps, and support for Bible verse recognition. Pricing starts at $0.006/minute.</p>
                      <Link href="/transcribe" className="text-[#E8725A] font-medium text-sm hover:underline">Try Free →</Link>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-1">OpenAI Whisper</h4>
                  <p className="text-[#5c5c5c] text-sm">Open-source model that powers many transcription services. Excellent accuracy but requires technical setup. Free to use if you have the infrastructure.</p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-1">Otter.ai / Rev.ai</h4>
                  <p className="text-[#5c5c5c] text-sm">General-purpose transcription tools. Good accuracy but not optimized for religious content or scripture references.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Pros and Cons of AI Transcription</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">✅ Advantages</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Incredibly fast (5 min vs 4-6 hours)</li>
                    <li>• Very affordable ($3-10 for a 45-min sermon)</li>
                    <li>• 24/7 availability—no scheduling</li>
                    <li>• Consistent quality output</li>
                    <li>• Timestamps included automatically</li>
                  </ul>
                </div>
                <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-3">⚠️ Considerations</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Requires light editing (1-5% error rate)</li>
                    <li>• May struggle with heavy accents</li>
                    <li>• Background noise affects accuracy</li>
                    <li>• Unusual proper nouns may need correction</li>
                    <li>• No interpretation—just transcription</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Method 2: Manual Transcription</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Manual transcription means listening to the audio and typing every word yourself. While time-intensive, it's free and gives you complete control over formatting and accuracy.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Step-by-Step Manual Transcription Process</h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { step: 1, title: "Prepare Your Workspace", desc: "Use a quality audio player that allows speed adjustment. Software like VLC, Express Scribe, or oTranscribe works well. Get a comfortable headset." },
                  { step: 2, title: "First Pass (Rough Draft)", desc: "Listen at 0.75x speed and type everything you hear. Don't stop to correct mistakes—just get the words down. Mark unclear sections with [UNCLEAR]." },
                  { step: 3, title: "Second Pass (Corrections)", desc: "Read through while listening at normal speed. Fix typos, unclear sections, and punctuation. Add speaker labels if multiple people talk." },
                  { step: 4, title: "Third Pass (Polish)", desc: "Review without audio. Fix grammar, add paragraph breaks, format Bible verses, and ensure readability." },
                  { step: 5, title: "Final Review", desc: "Have someone else proofread if possible. Check proper nouns, Bible references, and speaker attributions." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-5 bg-white rounded-xl border border-[#E8E4DC]">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-1">{item.title}</h4>
                      <p className="text-[#5c5c5c] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Time Estimates for Manual Transcription</h3>
              
              <div className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-[#2D2D2D] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Sermon Length</th>
                      <th className="py-3 px-4 text-left">Beginner</th>
                      <th className="py-3 px-4 text-left">Experienced</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">20 minutes</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">2-3 hours</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">1-1.5 hours</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">45 minutes</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">4-6 hours</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">2.5-3.5 hours</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">60+ minutes</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">6-8+ hours</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">4-5 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed p-4 bg-amber-50 rounded-xl border border-amber-200">
                <strong className="text-amber-800">Pro Tip:</strong> Use keyboard shortcuts extensively. In oTranscribe, F1 rewinds 2 seconds, which saves significant time when catching missed words.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Method 3: Professional Transcription Services</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Professional services employ human transcriptionists who specialize in sermon and religious content. They offer the highest accuracy but at premium prices.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">When to Use Professional Services</h3>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Archiving historically significant sermons that require 100% accuracy",
                  "Legal or official documentation needs",
                  "Complex audio with multiple overlapping speakers",
                  "Sermons in multiple languages or heavy dialects",
                  "When you have budget but zero time for editing"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#5c5c5c]">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Typical Pricing</h3>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Human transcription services typically charge $1.00-$3.00 per minute of audio. A 45-minute sermon would cost $45-$135 with 2-5 business day turnaround. Rush services cost more.
              </p>

              <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Cost Comparison: 45-Minute Sermon</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[#E8E4DC]">
                    <span className="text-[#5c5c5c]">Manual (DIY)</span>
                    <span className="font-semibold text-[#2D2D2D]">Free (4-6 hours of your time)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#E8E4DC]">
                    <span className="text-[#5c5c5c]">AI Transcription</span>
                    <span className="font-semibold text-[#E8725A]">$3-10 (5 minutes processing)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#5c5c5c]">Human Professional</span>
                    <span className="font-semibold text-[#2D2D2D]">$45-135 (2-5 days)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Recording Tips for Better Transcription</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The quality of your transcription depends heavily on your audio quality. Here's how to optimize recording for accurate transcription results.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center mb-4">
                    <Mic className="w-6 h-6 text-[#E8725A]" />
                  </div>
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Microphone Setup</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li>• Use a lapel mic or headset for speakers</li>
                    <li>• Position 6-12 inches from mouth</li>
                    <li>• Avoid wireless if signal is unreliable</li>
                    <li>• Test recording levels before service</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🔇</span>
                  </div>
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Minimize Background Noise</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li>• Turn off HVAC during recording if possible</li>
                    <li>• Use directional microphones</li>
                    <li>• Avoid rooms with hard echo surfaces</li>
                    <li>• Manage congregation noise during recording</li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🎚️</span>
                  </div>
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Recording Settings</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li>• Record at 44.1kHz or higher</li>
                    <li>• Use WAV/FLAC for archival, MP3 for sharing</li>
                    <li>• Keep levels at -12dB to -6dB peak</li>
                    <li>• Always record a backup if possible</li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🗣️</span>
                  </div>
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Speaking Habits</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li>• Speak at a consistent pace</li>
                    <li>• Pause between major points</li>
                    <li>• Spell out unusual names when introduced</li>
                    <li>• Cite chapter/verse clearly when quoting</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Formatting Your Transcript</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                A well-formatted transcript is easier to read, search, and repurpose. Here are formatting best practices for sermon transcripts.
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Example Sermon Transcript Format</h4>
                <div className="font-mono text-sm bg-[#2D2D2D] text-white p-4 rounded-lg overflow-x-auto">
                  <pre>{`SERMON TITLE: Walking in Grace
SPEAKER: Pastor John Smith
DATE: February 9, 2025
SCRIPTURE: Ephesians 2:8-10

[00:00:00] Good morning, church family. Today we're 
exploring a topic that's at the very heart of our 
faith: God's amazing grace.

[00:00:15] Turn with me to Ephesians chapter 2, 
verses 8 through 10:

[00:00:22] "For it is by grace you have been saved, 
through faith—and this is not from yourselves, it 
is the gift of God—not by works, so that no one 
can boast."

[00:00:35] Three points I want to make today...`}</pre>
                </div>
              </div>

              <h4 className="font-bold text-[#2D2D2D] mb-3">Key Formatting Elements</h4>
              <ul className="space-y-3 mb-8">
                {[
                  "Header with title, speaker, date, and primary scripture reference",
                  "Timestamps at natural paragraph breaks (every 15-30 seconds)",
                  "Scripture quotes clearly marked and properly cited",
                  "Paragraph breaks at topic transitions",
                  "Speaker labels if multiple people speak",
                  "Optional: [MUSIC], [PRAYER], [CONGREGATION RESPONSE] notations"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#5c5c5c]">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Common Challenges & Solutions</h2>
              
              <div className="space-y-4">
                {[
                  { 
                    challenge: "Multiple speakers talking over each other",
                    solution: "Use premium AI tools with speaker diarization, or mark overlapping sections as [CROSSTALK]. Focus on capturing the primary speaker."
                  },
                  {
                    challenge: "Poor audio quality or background noise",
                    solution: "Pre-process audio with noise reduction tools like Audacity (free) before transcription. Consider investing in better recording equipment for future sermons."
                  },
                  {
                    challenge: "Unfamiliar theological terms or Hebrew/Greek words",
                    solution: "Create a custom dictionary of commonly used terms in your church. Most AI tools allow you to add custom vocabulary."
                  },
                  {
                    challenge: "Very long sermons (60+ minutes)",
                    solution: "Split into logical sections before transcribing. Process 15-20 minute chunks and combine afterward."
                  },
                  {
                    challenge: "Heavy accents or fast speech",
                    solution: "AI tools handle accents better than expected. If accuracy suffers, try slowing audio to 0.9x speed before processing, or use premium human transcription."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                    <h4 className="font-bold text-[#2D2D2D] mb-2">❓ {item.challenge}</h4>
                    <p className="text-[#5c5c5c]">✅ <strong>Solution:</strong> {item.solution}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: FAQ */}
            <section id="section-8" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-12 bg-[#2D2D2D] rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to transcribe your sermons?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Try Sermon Transcription free—upload your first sermon and get an accurate transcript in minutes, not hours.
            </p>
            <Link 
              href="/transcribe" 
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
            >
              Start Free Transcription
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/50 text-sm mt-4">First 10 minutes free. No credit card required.</p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <path d="M15 0h10v15h15v10h-15v15h-10v-15h-15v-10h15z" fill="white" />
                <path d="M18 16 L26 20 L18 24 Z" fill="#E8725A" />
              </svg>
            </div>
            <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Transcription</span></span>
          </Link>
          <p className="text-sm mb-4">AI-powered sermon transcription for churches and ministries.</p>
          <p className="text-sm">&copy; 2025 Sermon Transcription. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
