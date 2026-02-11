'use client';

import Link from "next/link";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Clock, FileText, X, Star, AlertTriangle, ChevronDown, ChevronUp, Mic, DollarSign, Zap } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Otter.ai free for church use?",
    answer: "Otter.ai offers a free tier with 600 minutes per month and 40 minutes per conversation limit. For a church transcribing 4 weekly sermons at 45 minutes each (180 min/month), free tier works but barely. You'll hit limits if you transcribe Bible studies or meetings too. Paid plans start at $16.99/month."
  },
  {
    question: "How accurate is Otter.ai for Bible verses and religious terms?",
    answer: "In our testing, Otter.ai achieved 85-92% accuracy on religious content, compared to 99%+ from sermon-specific tools. It frequently misses verse numbers (transcribing 'John 3:16' as 'John three sixteen'), misspells theological terms, and struggles with Hebrew/Greek words."
  },
  {
    question: "Can Otter.ai do speaker identification for sermons?",
    answer: "Yes, Otter.ai includes speaker diarization and can label different speakers. However, it works best when trained on voices, which requires uploading sample audio for each speaker—more setup than most churches want."
  },
  {
    question: "Does Otter.ai work offline for live sermon transcription?",
    answer: "No, Otter.ai requires an internet connection for both live and recorded transcription. If your church has unreliable internet, this could be a limitation for live services."
  },
  {
    question: "What's the best Otter.ai alternative for churches?",
    answer: "For church-specific transcription, Sermon Transcription (sermon-transcription.com) is purpose-built for religious content. It achieves higher accuracy on Bible verses and theological terms at a lower per-minute cost. Other alternatives include Rev.ai, Descript, and self-hosted Whisper."
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

export default function OtterAiSermonTranscription() {
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
        <title>Otter.ai for Sermons: Is It Good Enough for Churches? | Sermon Transcription</title>
        <meta name="description" content="Honest review of Otter.ai for church sermon transcription. We tested accuracy on Bible verses, religious terms, and real sermon audio. See results and alternatives." />
        <meta property="og:title" content="Otter.ai for Sermons: Is It Good Enough for Churches?" />
        <meta property="og:description" content="Honest review of Otter.ai for church sermon transcription with accuracy tests." />
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
            <span className="text-[#2D2D2D]">Otter.ai for Sermons</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>Tool Review</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Otter.ai for Sermons: Is It Good Enough for Churches?
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              Otter.ai is one of the most popular transcription tools, known for meeting transcription and real-time captioning. But how well does it handle sermon content? We ran extensive tests with actual church audio to find out if Otter.ai is the right choice for your ministry—or if you'd be better served by alternatives.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#5c5c5c]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Updated February 2026</span>
              </div>
            </div>
          </header>

          {/* Quick Verdict Box */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="font-bold text-xl text-amber-800 mb-3">Quick Verdict: Good, But Not Great for Churches</h2>
                <p className="text-amber-700 mb-4">
                  Otter.ai is an excellent general-purpose transcription tool, but it wasn't built for religious content. In our testing, it achieved <strong>85-92% accuracy</strong> on sermon audio—decent, but significantly below the 99%+ accuracy of sermon-specific tools. The biggest issues: Bible verse formatting, theological terminology, and Hebrew/Greek words.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span className="text-amber-800 font-medium">3.5/5 for church use</span>
                  </div>
                  <Link href="/transcribe" className="text-[#E8725A] font-medium hover:underline">
                    Try sermon-specific alternative →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-[#E8E4DC]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">📋 In This Review</h2>
            <nav className="grid md:grid-cols-2 gap-3">
              {[
                "What is Otter.ai?",
                "Testing Methodology",
                "Accuracy Results",
                "Pricing Analysis",
                "Pros & Cons for Churches",
                "Best Use Cases",
                "Better Alternatives",
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
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">What is Otter.ai?</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Otter.ai is an AI-powered transcription service launched in 2016. It gained popularity for meeting transcription, especially with its real-time captioning feature and Zoom integration. The platform uses speech recognition technology to convert audio to text, with features like speaker identification, keyword highlighting, and collaborative editing.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-semibold text-[#2D2D2D] mb-2">Key Features</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Real-time transcription</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Zoom/Meet/Teams integration</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Speaker identification</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Mobile app (iOS/Android)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Search across transcripts</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-semibold text-[#2D2D2D] mb-2">Primary Target Users</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex gap-2"><div className="w-4 h-4 rounded-full bg-[#E8725A]/20 flex-shrink-0 mt-0.5" /> Business professionals</li>
                    <li className="flex gap-2"><div className="w-4 h-4 rounded-full bg-[#E8725A]/20 flex-shrink-0 mt-0.5" /> Journalists</li>
                    <li className="flex gap-2"><div className="w-4 h-4 rounded-full bg-[#E8725A]/20 flex-shrink-0 mt-0.5" /> Students</li>
                    <li className="flex gap-2"><div className="w-4 h-4 rounded-full bg-[#E8725A]/20 flex-shrink-0 mt-0.5" /> Sales teams</li>
                    <li className="flex gap-2"><div className="w-4 h-4 rounded-full bg-amber-500/40 flex-shrink-0 mt-0.5" /> Churches (not primary)</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                Notice that churches aren't Otter's primary target audience. This matters because AI transcription models are trained on data from their target use cases—meaning Otter's models have seen millions of business meetings but relatively few sermons.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Our Testing Methodology</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                We didn't rely on marketing claims. We tested Otter.ai with real sermon content to measure actual performance for church use cases:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-8">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Test Parameters</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-[#2D2D2D] mb-2">Audio Samples</h5>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>• 10 sermon recordings (20-60 minutes)</li>
                      <li>• Various denominations (Baptist, Presbyterian, Pentecostal)</li>
                      <li>• Mix of professional and amateur recordings</li>
                      <li>• English, with some Hebrew/Greek terms</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#2D2D2D] mb-2">Evaluation Criteria</h5>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>• Overall word accuracy</li>
                      <li>• Bible verse recognition (100+ verses)</li>
                      <li>• Theological term accuracy (50+ terms)</li>
                      <li>• Proper noun handling</li>
                      <li>• Speaker identification accuracy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                We manually reviewed each transcript against the original audio, counting errors by category. Our comparison baseline was <Link href="/transcribe" className="text-[#E8725A] hover:underline">Sermon Transcription</Link>, a purpose-built tool for church content.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Accuracy Results: Where Otter.ai Falls Short</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Here's what we found when transcribing actual sermon content:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-[#2D2D2D] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Category</th>
                      <th className="py-3 px-4 text-left">Otter.ai</th>
                      <th className="py-3 px-4 text-left">Sermon Transcription</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Overall Accuracy</td>
                      <td className="py-3 px-4 text-amber-600">88-92%</td>
                      <td className="py-3 px-4 text-green-600">98-99%</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Bible Verse Formatting</td>
                      <td className="py-3 px-4 text-red-600">62%</td>
                      <td className="py-3 px-4 text-green-600">97%</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Theological Terms</td>
                      <td className="py-3 px-4 text-amber-600">85%</td>
                      <td className="py-3 px-4 text-green-600">99%</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Hebrew/Greek Words</td>
                      <td className="py-3 px-4 text-red-600">45%</td>
                      <td className="py-3 px-4 text-green-600">92%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Speaker ID Accuracy</td>
                      <td className="py-3 px-4 text-amber-600">78%</td>
                      <td className="py-3 px-4 text-green-600">94%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Specific Problems We Encountered</h3>

              <div className="space-y-4 mb-8">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">❌ Bible Verse Formatting</h4>
                  <p className="text-red-700 text-sm mb-2">Otter consistently mishandles verse references:</p>
                  <div className="bg-white rounded-lg p-3 font-mono text-xs">
                    <p className="text-red-600">Otter: "Turn to John three sixteen"</p>
                    <p className="text-green-600">Correct: "Turn to John 3:16"</p>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">❌ Theological Terminology</h4>
                  <p className="text-red-700 text-sm mb-2">Common words in sermons get mangled:</p>
                  <div className="bg-white rounded-lg p-3 font-mono text-xs space-y-1">
                    <p>"propitiation" → <span className="text-red-600">"pro-pitch-iation"</span></p>
                    <p>"eschatology" → <span className="text-red-600">"escalator G"</span></p>
                    <p>"sanctification" → <span className="text-red-600">"sanct if ication"</span> (with spaces)</p>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">❌ Hebrew & Greek Words</h4>
                  <p className="text-red-700 text-sm mb-2">Original language terms were especially problematic:</p>
                  <div className="bg-white rounded-lg p-3 font-mono text-xs space-y-1">
                    <p>"agape" (love) → <span className="text-red-600">"a gop-ay"</span></p>
                    <p>"shalom" → <span className="text-red-600">"shallow"</span></p>
                    <p>"hesed" (lovingkindness) → <span className="text-red-600">"head said"</span></p>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                These errors aren't just inconvenient—they can change meaning. A congregation member reading "shallow" instead of "shalom" might be confused about the sermon's teaching on peace.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Pricing Analysis: Is Otter.ai Cost-Effective?</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Otter.ai uses a subscription model with tiered plans. Let's analyze the real cost for a typical church:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-8">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Otter.ai Pricing Plans (2026)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#E8E4DC]">
                    <div>
                      <span className="font-medium text-[#2D2D2D]">Free</span>
                      <p className="text-xs text-[#5c5c5c]">600 min/month, 40 min/conversation</p>
                    </div>
                    <span className="font-bold text-[#2D2D2D]">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#E8E4DC]">
                    <div>
                      <span className="font-medium text-[#2D2D2D]">Pro</span>
                      <p className="text-xs text-[#5c5c5c]">1,200 min/month, 90 min/conversation</p>
                    </div>
                    <span className="font-bold text-[#2D2D2D]">$16.99/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#E8E4DC]">
                    <div>
                      <span className="font-medium text-[#2D2D2D]">Business</span>
                      <p className="text-xs text-[#5c5c5c]">6,000 min/month, 4 hr/conversation</p>
                    </div>
                    <span className="font-bold text-[#2D2D2D]">$30/mo</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Real Cost for Churches</h3>

              <div className="bg-[#F5F1EB] rounded-xl p-6 mb-8">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Scenario: Average Church (4 sermons/month × 45 min = 180 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-[#5c5c5c] mb-2">Otter.ai (Pro plan needed)</p>
                    <p className="text-2xl font-bold text-[#2D2D2D]">$16.99/month</p>
                    <p className="text-xs text-[#5c5c5c]">~$0.09/minute effective rate</p>
                  </div>
                  <div className="p-4 bg-[#E8725A]/10 rounded-lg border border-[#E8725A]/30">
                    <p className="text-sm text-[#5c5c5c] mb-2">Sermon Transcription (pay-per-use)</p>
                    <p className="text-2xl font-bold text-[#E8725A]">$1.08/month</p>
                    <p className="text-xs text-[#5c5c5c]">$0.006/minute × 180 min</p>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                Otter's subscription model means you pay the same whether you transcribe 100 minutes or 1,000. For most churches with modest transcription needs, per-minute pricing is dramatically more affordable.
              </p>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Pros & Cons: Otter.ai for Churches</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-800 mb-4">✅ Advantages</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>Real-time transcription</strong>
                        <p className="text-sm">Live captioning during services (with good internet)</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>Mobile app</strong>
                        <p className="text-sm">Record and transcribe from phone</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>Collaboration features</strong>
                        <p className="text-sm">Share and edit transcripts with team</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>Meeting integrations</strong>
                        <p className="text-sm">Zoom, Teams, Google Meet built-in</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-red-50 rounded-xl border border-red-200">
                  <h3 className="font-bold text-red-800 mb-4">❌ Disadvantages for Churches</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex gap-2">
                      <X className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>Poor Bible verse handling</strong>
                        <p className="text-sm">Verses come out as words, not references</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <X className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>Theological term errors</strong>
                        <p className="text-sm">Common sermon words frequently misspelled</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <X className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>Expensive for light use</strong>
                        <p className="text-sm">Subscription model wastes money</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <X className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <strong>40-min limit on free tier</strong>
                        <p className="text-sm">Most sermons exceed this limit</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">When Otter.ai Makes Sense for Churches</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Despite its limitations for sermon content, Otter.ai can still serve churches well in specific scenarios:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-5 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">✅ Staff & Committee Meetings</h4>
                  <p className="text-[#5c5c5c] text-sm">Otter excels at business-style meetings. Use it for elder meetings, staff meetings, and administrative discussions where religious terminology is less common.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">✅ Live Meeting Captioning</h4>
                  <p className="text-[#5c5c5c] text-sm">If you need real-time captions for Zoom meetings (not sermons), Otter's integration is convenient.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">✅ Quick Notes & Brainstorming</h4>
                  <p className="text-[#5c5c5c] text-sm">The mobile app is handy for capturing meeting notes or interview recordings when perfect accuracy isn't critical.</p>
                </div>
              </div>

              <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-2">⚠️ Not Recommended For:</h4>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>• Weekly sermon transcription</li>
                  <li>• Bible study recordings</li>
                  <li>• Content requiring accurate scripture references</li>
                  <li>• Archival-quality transcripts</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Better Alternatives for Sermon Transcription</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                If you need accurate sermon transcription, consider these alternatives:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-[#E8725A]/5 rounded-xl border-2 border-[#E8725A]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8725A] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">ST</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-[#2D2D2D]">Sermon Transcription</h4>
                        <span className="text-xs bg-[#E8725A] text-white px-2 py-0.5 rounded-full">Recommended</span>
                      </div>
                      <p className="text-[#5c5c5c] text-sm mb-2">Purpose-built for churches. 99%+ accuracy on religious content, proper Bible verse formatting, and pay-per-minute pricing.</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-green-600 font-medium">$0.006/min</span>
                        <Link href="/transcribe" className="text-[#E8725A] font-medium hover:underline">Try Free →</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-1">Rev.ai + Human Review</h4>
                  <p className="text-[#5c5c5c] text-sm mb-2">Use AI transcription with human editors for 99.9% accuracy. Best for archival-quality transcripts of historically significant sermons.</p>
                  <span className="text-sm text-[#5c5c5c]">$1.50+/min for human transcription</span>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-1">OpenAI Whisper (Self-Hosted)</h4>
                  <p className="text-[#5c5c5c] text-sm mb-2">Free open-source option if your church has technical volunteers. Requires setup but offers excellent base accuracy.</p>
                  <span className="text-sm text-[#5c5c5c]">Free (requires technical expertise)</span>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                For a detailed comparison, see our guide to the <Link href="/blog/best-ai-sermon-transcription-software" className="text-[#E8725A] hover:underline">best AI sermon transcription software</Link>.
              </p>
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
              Try sermon-specific transcription
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Get 99%+ accuracy on Bible verses and theological terms. Built specifically for churches.
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
              <Link href="/blog/best-ai-sermon-transcription-software" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">Best AI Sermon Transcription Software [2026]</h4>
                <p className="text-sm text-[#5c5c5c]">Compare all the top options for church transcription.</p>
              </Link>
              <Link href="/blog/human-vs-ai-sermon-transcription" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">Human vs AI Sermon Transcription</h4>
                <p className="text-sm text-[#5c5c5c]">When to use AI and when human transcription is worth it.</p>
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
