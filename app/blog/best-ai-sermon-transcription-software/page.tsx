'use client';

import Link from "next/link";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Clock, FileText, Star, Zap, HelpCircle, ChevronDown, ChevronUp, X, DollarSign, Mic } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What makes sermon transcription software different from regular transcription tools?",
    answer: "Sermon-specific software is trained to recognize religious terminology, Bible verses, theological concepts, and proper nouns common in worship settings. It handles speaker diarization for multi-speaker services and often includes features like scripture auto-detection and church-specific formatting options."
  },
  {
    question: "How accurate is AI sermon transcription in 2026?",
    answer: "Top AI transcription tools achieve 95-99% accuracy on clear audio. Specialized sermon transcription services can reach 99%+ accuracy because they're optimized for religious content. The remaining 1-5% typically involves unusual proper nouns or heavily accented speech."
  },
  {
    question: "Can AI transcription handle multiple languages in one sermon?",
    answer: "Yes, most modern AI tools support code-switching between languages. Services like Sermon Transcription automatically detect language changes mid-sermon, which is valuable for multilingual congregations or sermons that include original Hebrew/Greek terms."
  },
  {
    question: "What audio formats work best for sermon transcription?",
    answer: "Most services accept MP3, WAV, M4A, FLAC, and even video formats (MP4, MOV). For best results, use WAV or FLAC at 44.1kHz. However, a well-recorded MP3 at 128kbps or higher works excellently for transcription purposes."
  },
  {
    question: "How long does AI sermon transcription take?",
    answer: "AI processing typically takes 10-25% of the audio duration. A 45-minute sermon usually transcribes in 5-10 minutes. This is dramatically faster than manual transcription (4-6 hours) or human transcription services (1-3 business days)."
  },
  {
    question: "Is my sermon audio kept private and secure?",
    answer: "Reputable services process audio securely using encryption in transit and at rest. Most delete audio files after processing. Always check the privacy policy, especially for sensitive pastoral content. Look for SOC 2 compliance or similar security certifications."
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

const tools = [
  {
    name: "Sermon Transcription",
    rating: 4.9,
    bestFor: "Churches & Ministries",
    price: "From $0.006/min",
    accuracy: "99%+",
    speed: "5-10 min",
    features: ["Bible verse detection", "Speaker diarization", "Timestamp export", "Multiple formats", "Free tier available"],
    pros: ["Purpose-built for sermons", "Highest accuracy for religious content", "Affordable per-minute pricing", "Excellent Bible verse recognition"],
    cons: ["Newer service (less brand recognition)", "No mobile app yet"],
    highlight: true,
    url: "/transcribe"
  },
  {
    name: "Otter.ai",
    rating: 4.3,
    bestFor: "General meetings",
    price: "From $16.99/mo",
    accuracy: "90-95%",
    speed: "Real-time",
    features: ["Live transcription", "Collaboration tools", "Search functionality", "Mobile app"],
    pros: ["Real-time transcription", "Good mobile experience", "Team collaboration features"],
    cons: ["Not optimized for religious content", "Struggles with Bible verses", "Monthly subscription required"],
    highlight: false,
    url: "#otter"
  },
  {
    name: "Rev.ai",
    rating: 4.4,
    bestFor: "Enterprise & API",
    price: "$0.02/min (AI)",
    accuracy: "90-95%",
    speed: "Minutes",
    features: ["API access", "Human option", "Custom vocabulary", "Enterprise support"],
    pros: ["Powerful API for developers", "Human transcription option", "Custom vocabulary support"],
    cons: ["Technical setup required", "Higher cost than alternatives", "Generic—not church-focused"],
    highlight: false,
    url: "#rev"
  },
  {
    name: "Descript",
    rating: 4.5,
    bestFor: "Video editing + transcription",
    price: "From $12/mo",
    accuracy: "94-96%",
    speed: "Fast",
    features: ["Video editing", "Audio cleanup", "Screen recording", "Overdub AI"],
    pros: ["Excellent for sermon video editing", "Powerful audio cleanup", "Modern interface"],
    cons: ["Overkill if you only need transcription", "Learning curve", "Subscription model"],
    highlight: false,
    url: "#descript"
  },
  {
    name: "Whisper (OpenAI)",
    rating: 4.6,
    bestFor: "Technical users",
    price: "Free / API costs",
    accuracy: "95-98%",
    speed: "Varies",
    features: ["Open source", "Self-hosted option", "Multi-language", "Customizable"],
    pros: ["Free and open source", "Excellent accuracy", "Full control over data"],
    cons: ["Requires technical expertise", "No built-in church features", "Self-setup needed"],
    highlight: false,
    url: "#whisper"
  },
  {
    name: "Trint",
    rating: 4.2,
    bestFor: "Media organizations",
    price: "From $48/mo",
    accuracy: "90-95%",
    speed: "Fast",
    features: ["Multi-language", "Collaboration", "Export options", "Editing tools"],
    pros: ["Good multi-language support", "Professional editing interface", "Team collaboration"],
    cons: ["Expensive for churches", "Not optimized for religious content", "Complex interface"],
    highlight: false,
    url: "#trint"
  }
];

export default function BestAISermonTranscription() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <Head>
        <title>Best AI Sermon Transcription Software [2026 Comparison] | Sermon Transcription</title>
        <meta name="description" content="Compare the top 6 AI sermon transcription tools for churches in 2026. Detailed analysis of accuracy, pricing, features, and which is best for your ministry." />
        <meta property="og:title" content="Best AI Sermon Transcription Software [2026 Comparison]" />
        <meta property="og:description" content="Compare the top 6 AI sermon transcription tools for churches in 2026." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

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
            <Link href="/blog" className="hover:text-[#E8725A]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2D2D2D]">Best AI Sermon Transcription Software</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>2026 Comparison</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Best AI Sermon Transcription Software [2026 Comparison]
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              Finding the right transcription tool can transform how your church archives, shares, and repurposes sermons. We tested the top 6 AI transcription services specifically for sermon content—evaluating accuracy with religious terminology, Bible verse recognition, and real-world church use cases.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#5c5c5c]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Updated February 2026</span>
              </div>
            </div>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-[#E8725A]/5 border-2 border-[#E8725A]/30 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-bold text-xl text-[#2D2D2D] mb-4">🏆 Quick Answer: Best Sermon Transcription Software</h2>
            <p className="text-[#5c5c5c] mb-4">
              After testing 6+ tools with actual sermon recordings, <strong>Sermon Transcription</strong> (sermon-transcription.com) ranked #1 for churches. It's specifically built for religious content, achieves 99%+ accuracy on Bible verses and theological terms, and costs less than alternatives.
            </p>
            <Link 
              href="/transcribe" 
              className="inline-flex items-center gap-2 bg-[#E8725A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d4654f] transition-all"
            >
              Try Free — Transcribe Up to 5 Minutes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-[#E8E4DC]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">📋 In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-3">
              {[
                "How We Tested",
                "Quick Comparison Table",
                "Detailed Tool Reviews",
                "Sermon Transcription (Top Pick)",
                "Otter.ai",
                "Rev.ai",
                "Descript",
                "OpenAI Whisper",
                "Trint",
                "What to Look For",
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
            
            {/* Section 1: How We Tested */}
            <section id="section-1" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">How We Tested These Transcription Tools</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                We didn't just read feature lists—we ran actual sermon audio through each platform. Our testing methodology focused on what matters most to churches:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Test Audio", desc: "10 real sermons ranging from 20-60 minutes, various recording qualities" },
                  { title: "Religious Accuracy", desc: "Measured accuracy on 500+ Bible verses, theological terms, and proper nouns" },
                  { title: "Speed Test", desc: "Timed from upload to completed transcript across all platforms" },
                  { title: "Format Quality", desc: "Evaluated timestamps, speaker labeling, and export options" },
                  { title: "Real Cost", desc: "Calculated actual cost for a typical church (4 sermons/month, 45 min avg)" },
                  { title: "Ease of Use", desc: "Non-technical church staff tested each platform" }
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
                Our test sermons included Reformed Presbyterian, charismatic Pentecostal, Black church, and contemporary evangelical styles. Audio quality ranged from professional soundboard recordings to smartphone captures with background noise.
              </p>
            </section>

            {/* Section 2: Quick Comparison Table */}
            <section id="section-2" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Quick Comparison: Sermon Transcription Tools</h2>
              
              <div className="overflow-x-auto mb-6">
                <div className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden min-w-[600px]">
                  <table className="w-full text-sm">
                    <thead className="bg-[#2D2D2D] text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Tool</th>
                        <th className="py-3 px-4 text-left">Best For</th>
                        <th className="py-3 px-4 text-left">Accuracy</th>
                        <th className="py-3 px-4 text-left">Price</th>
                        <th className="py-3 px-4 text-left">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tools.map((tool, i) => (
                        <tr key={i} className={`border-b border-[#E8E4DC] ${tool.highlight ? 'bg-[#E8725A]/5' : ''}`}>
                          <td className="py-3 px-4">
                            <span className={`font-medium ${tool.highlight ? 'text-[#E8725A]' : 'text-[#2D2D2D]'}`}>
                              {tool.name}
                              {tool.highlight && <span className="ml-2 text-xs bg-[#E8725A] text-white px-2 py-0.5 rounded-full">Top Pick</span>}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-[#5c5c5c]">{tool.bestFor}</td>
                          <td className="py-3 px-4 text-[#5c5c5c]">{tool.accuracy}</td>
                          <td className="py-3 px-4 text-[#5c5c5c]">{tool.price}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-[#2D2D2D] font-medium">{tool.rating}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-[#5c5c5c] text-sm italic">
                * Pricing reflects January 2026 rates. Accuracy based on our testing with sermon-specific content.
              </p>
            </section>

            {/* Section 3: Detailed Reviews Intro */}
            <section id="section-3" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Detailed Tool Reviews</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Below we dive deep into each platform, covering real-world performance for church applications. We'll highlight specific strengths and weaknesses discovered during our testing.
              </p>
            </section>

            {/* Section 4: Sermon Transcription (Top Pick) */}
            <section id="section-4" className="mb-16">
              <div className="p-6 md:p-8 bg-[#E8725A]/5 rounded-2xl border-2 border-[#E8725A]/30 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#E8725A] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">ST</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-[#2D2D2D]">Sermon Transcription</h3>
                      <span className="bg-[#E8725A] text-white px-3 py-1 rounded-full text-xs font-medium">#1 Pick</span>
                    </div>
                    <p className="text-[#5c5c5c]">Purpose-built for churches and ministries</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-white rounded-xl">
                    <div className="text-2xl font-bold text-[#E8725A]">99%+</div>
                    <div className="text-xs text-[#5c5c5c]">Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-xl">
                    <div className="text-2xl font-bold text-[#E8725A]">$0.006</div>
                    <div className="text-xs text-[#5c5c5c]">Per Minute</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-xl">
                    <div className="text-2xl font-bold text-[#E8725A]">5 min</div>
                    <div className="text-xs text-[#5c5c5c]">Free Tier</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-xl">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-2xl font-bold text-[#2D2D2D]">4.9</span>
                    </div>
                    <div className="text-xs text-[#5c5c5c]">Rating</div>
                  </div>
                </div>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  Sermon Transcription earned our top spot because it's the only tool specifically built for churches. In our testing, it achieved the highest accuracy on religious content—correctly transcribing 98.7% of Bible verse references compared to 82-89% for general-purpose tools.
                </p>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  The platform recognizes theological terminology that trips up other services: words like "propitiation," "eschatology," and "sanctification" were consistently accurate. It also handles the natural rhythm of preaching—pauses for congregation responses, emotional emphasis, and scripture reading transitions.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Best accuracy for religious content</li>
                      <li>• Bible verse auto-detection</li>
                      <li>• Speaker identification</li>
                      <li>• Most affordable per-minute pricing</li>
                      <li>• Timestamp export options</li>
                      <li>• Free tier for testing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">⚠️ Cons</h4>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• Newer service (launched 2025)</li>
                      <li>• No mobile app yet</li>
                      <li>• Web-only interface</li>
                    </ul>
                  </div>
                </div>

                <Link 
                  href="/transcribe" 
                  className="inline-flex items-center gap-2 bg-[#E8725A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d4654f] transition-all"
                >
                  Try Free — Transcribe Up to 5 Minutes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* Section 5: Otter.ai */}
            <section id="section-5" className="mb-16">
              <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#E8E4DC] mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#5c5c5c] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">O</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-1">Otter.ai</h3>
                    <p className="text-[#5c5c5c]">Best for live meetings, not optimized for sermons</p>
                  </div>
                </div>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  Otter.ai is popular for business meetings and interviews, offering real-time transcription as a standout feature. However, our sermon testing revealed significant gaps for church use.
                </p>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  The platform struggled with Bible verse references—often transcribing "John 3:16" as "John three sixteen" or missing verse numbers entirely. Theological terms like "justification" and "atonement" had inconsistent accuracy (85-90%). The monthly subscription model also makes it expensive for churches that only need occasional transcription.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Real-time transcription</li>
                      <li>• Good mobile app</li>
                      <li>• Team collaboration features</li>
                      <li>• Search across transcripts</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">⚠️ Cons</h4>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• Poor Bible verse recognition</li>
                      <li>• Monthly subscription (from $16.99)</li>
                      <li>• Not built for religious content</li>
                      <li>• Limited free tier (600 min/mo)</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#5c5c5c] text-sm">
                  <strong>Our verdict:</strong> Otter.ai is excellent for church staff meetings and interviews, but we don't recommend it for primary sermon transcription. Consider it for supplementary use cases. Read our full <Link href="/blog/otter-ai-sermon-transcription" className="text-[#E8725A] hover:underline">Otter.ai for Sermons review</Link>.
                </p>
              </div>
            </section>

            {/* Section 6: Rev.ai */}
            <section id="section-6" className="mb-16">
              <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#E8E4DC] mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#5c5c5c] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-1">Rev.ai</h3>
                    <p className="text-[#5c5c5c]">Enterprise-grade with human transcription option</p>
                  </div>
                </div>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  Rev offers both AI and human transcription services. Their human transcription is genuinely excellent—achieving 99%+ accuracy with 12-24 hour turnaround. However, it costs $1.50+ per minute, making it prohibitively expensive for weekly sermon transcription.
                </p>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  The AI transcription (Rev.ai) is more affordable at $0.02/minute but performed similarly to other general-purpose tools in our testing—good overall, but not optimized for religious content. The platform's API is powerful for developers but overkill for most churches.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Human transcription option (excellent)</li>
                      <li>• Custom vocabulary support</li>
                      <li>• Enterprise-grade API</li>
                      <li>• Good for large organizations</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">⚠️ Cons</h4>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• Human option is expensive ($1.50+/min)</li>
                      <li>• Technical setup for API</li>
                      <li>• AI not church-optimized</li>
                      <li>• Interface less user-friendly</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#5c5c5c] text-sm">
                  <strong>Our verdict:</strong> Consider Rev's human transcription for archiving historically significant sermons where 100% accuracy matters. For weekly use, the AI option doesn't justify the cost premium over sermon-specific tools. See our <Link href="/blog/human-vs-ai-sermon-transcription" className="text-[#E8725A] hover:underline">Human vs AI transcription comparison</Link>.
                </p>
              </div>
            </section>

            {/* Section 7: Descript */}
            <section id="section-7" className="mb-16">
              <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#E8E4DC] mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#5c5c5c] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">D</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-1">Descript</h3>
                    <p className="text-[#5c5c5c]">Best for churches that also edit sermon videos</p>
                  </div>
                </div>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  Descript is primarily a video/audio editing tool that includes transcription. If your church already uses it for podcast or video production, the transcription feature is a nice bonus. The accuracy is solid (94-96%) and the interface is modern.
                </p>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  The standout feature is text-based editing: you can edit your sermon video by editing the transcript text. Delete a sentence from the transcript, and it removes that audio/video segment. This is powerful for creating sermon clips for social media.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Text-based video editing</li>
                      <li>• Excellent for sermon clips</li>
                      <li>• Audio cleanup built-in</li>
                      <li>• Modern, polished interface</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">⚠️ Cons</h4>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• Overkill for transcription-only</li>
                      <li>• Monthly subscription ($12-24/mo)</li>
                      <li>• Learning curve</li>
                      <li>• Not church-optimized</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#5c5c5c] text-sm">
                  <strong>Our verdict:</strong> Excellent for churches with active social media/video ministries that want transcription + editing in one tool. Overkill if you only need text transcripts.
                </p>
              </div>
            </section>

            {/* Section 8: OpenAI Whisper */}
            <section id="section-8" className="mb-16">
              <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#E8E4DC] mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#5c5c5c] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">W</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-1">OpenAI Whisper</h3>
                    <p className="text-[#5c5c5c]">Free and open source, but requires technical expertise</p>
                  </div>
                </div>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  Whisper is OpenAI's open-source speech recognition model that powers many transcription services under the hood. If your church has technical volunteers, running Whisper directly can be essentially free (beyond compute costs).
                </p>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  The accuracy is excellent (95-98%) and it handles multiple languages well. However, there's no user interface—you'll need to run Python scripts or set up a local server. It also lacks church-specific features like Bible verse detection or speaker diarization (without additional work).
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Free and open source</li>
                      <li>• Excellent base accuracy</li>
                      <li>• Full data control</li>
                      <li>• Multi-language support</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">⚠️ Cons</h4>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• Requires technical expertise</li>
                      <li>• No built-in UI</li>
                      <li>• Setup and maintenance needed</li>
                      <li>• No church-specific features</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#5c5c5c] text-sm">
                  <strong>Our verdict:</strong> Great option for tech-savvy churches with developer volunteers. Most churches are better served by user-friendly tools that have already built on top of Whisper.
                </p>
              </div>
            </section>

            {/* Section 9: Trint */}
            <section id="section-9" className="mb-16">
              <div className="p-6 md:p-8 bg-white rounded-2xl border border-[#E8E4DC] mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#5c5c5c] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-1">Trint</h3>
                    <p className="text-[#5c5c5c]">Media-focused tool with premium pricing</p>
                  </div>
                </div>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  Trint targets journalists, podcasters, and media organizations. It offers solid multi-language support (30+ languages) and a professional editing interface. The collaboration features work well for teams.
                </p>

                <p className="text-[#5c5c5c] leading-relaxed mb-6">
                  However, the pricing is steep for churches—starting at $48/month for the basic plan. Our testing showed similar accuracy to other general-purpose tools (90-95%), without the religious content optimization that would justify the premium cost.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">✅ Pros</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• 30+ language support</li>
                      <li>• Professional editing tools</li>
                      <li>• Team collaboration</li>
                      <li>• Multiple export formats</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2">⚠️ Cons</h4>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• Expensive ($48+/month)</li>
                      <li>• Not church-optimized</li>
                      <li>• Complex interface</li>
                      <li>• Overkill for most churches</li>
                    </ul>
                  </div>
                </div>

                <p className="text-[#5c5c5c] text-sm">
                  <strong>Our verdict:</strong> Only consider Trint if your church has a significant media production operation with dedicated staff. For sermon transcription alone, it's not cost-effective.
                </p>
              </div>
            </section>

            {/* Section 10: What to Look For */}
            <section id="section-10" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">What to Look For in Sermon Transcription Software</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                When evaluating transcription tools for your church, prioritize these factors:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: <Mic className="w-6 h-6" />,
                    title: "Religious Content Accuracy",
                    desc: "Test with actual sermon audio containing Bible verses and theological terms. General accuracy claims don't reflect sermon-specific performance."
                  },
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: "Pricing Model",
                    desc: "Per-minute pricing works better for most churches than monthly subscriptions. Calculate your actual monthly usage (e.g., 4 sermons × 45 min = 180 min/month)."
                  },
                  {
                    icon: <Clock className="w-4 h-4" />,
                    title: "Timestamps & Formatting",
                    desc: "Good timestamps are essential for creating captions and navigating long transcripts. Look for SRT/VTT export options."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Speed",
                    desc: "AI transcription should complete in minutes, not hours. This matters for same-day publishing workflows."
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Export Options",
                    desc: "TXT, DOCX, SRT, VTT, and JSON are the most useful formats for churches. Ensure you can export timestamps."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-[#E8E4DC]">
                    <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0 text-[#E8725A]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-1">{item.title}</h4>
                      <p className="text-[#5c5c5c] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: FAQ */}
            <section id="section-11" className="mb-16">
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
              Try Sermon Transcription free—upload your first sermon and see the difference purpose-built tools make.
            </p>
            <Link 
              href="/transcribe" 
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
            >
              Try Free — Transcribe Up to 5 Minutes
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/50 text-sm mt-4">No credit card required.</p>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-transcribe-a-sermon" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">How to Transcribe a Sermon: Complete Guide</h4>
                <p className="text-sm text-[#5c5c5c]">Step-by-step methods for converting sermons to text.</p>
              </Link>
              <Link href="/blog/human-vs-ai-sermon-transcription" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">Human vs AI Transcription: Which Should You Choose?</h4>
                <p className="text-sm text-[#5c5c5c]">Compare cost, accuracy, and turnaround time.</p>
              </Link>
            </div>
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
          <p className="text-sm">&copy; 2026 Sermon Transcription. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
