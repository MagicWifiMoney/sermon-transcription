'use client';

import Link from "next/link";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Clock, FileText, Users, Zap, DollarSign, ChevronDown, ChevronUp, Scale, AlertTriangle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is AI transcription accurate enough for sermon archives?",
    answer: "Yes, for most churches. Modern AI sermon transcription achieves 98-99% accuracy on clear audio—far better than the 85-90% accuracy of general AI tools. The 1-2% error rate is easily corrected in 5-10 minutes of editing, making it practical for weekly use."
  },
  {
    question: "When should I use human transcription for sermons?",
    answer: "Consider human transcription for historically significant sermons (founder's messages, milestone celebrations), legal documentation needs, very poor audio quality that AI can't handle, or when you need verbatim accuracy including filler words and false starts."
  },
  {
    question: "How much does human sermon transcription cost?",
    answer: "Professional human transcription costs $1.00-$3.00 per audio minute. A 45-minute sermon costs $45-$135. Rush services cost more. Compare this to AI transcription at $0.006-$0.02 per minute ($0.27-$0.90 for the same sermon)."
  },
  {
    question: "Can I combine AI and human transcription?",
    answer: "Absolutely—this is a smart approach. Use AI for weekly transcription (fast and affordable), then have a volunteer or staff member do a quick review. Reserve professional human transcription for special occasions when 100% accuracy matters."
  },
  {
    question: "How long does each transcription method take?",
    answer: "AI transcription: 5-15 minutes for a 45-minute sermon. Human transcription services: 1-5 business days. Manual DIY transcription: 4-6 hours. The speed difference is dramatic and matters for same-day publishing."
  },
  {
    question: "What about accuracy for Bible verses and theological terms?",
    answer: "Sermon-specific AI tools achieve 97-99% accuracy on Bible verses and theological terms. General AI tools (like Otter.ai) often struggle here (60-85% accuracy). Human transcriptionists familiar with religious content are most accurate but cost 50-100x more."
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

export default function HumanVsAITranscription() {
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
        <title>Human vs AI Sermon Transcription: Which Should You Choose? | Sermon Transcription</title>
        <meta name="description" content="Compare human and AI sermon transcription: cost, accuracy, speed, and when to use each. Make the right choice for your church's transcription needs." />
        <meta property="og:title" content="Human vs AI Sermon Transcription: Which Should You Choose?" />
        <meta property="og:description" content="Compare cost, accuracy, and speed of human vs AI sermon transcription." />
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
            <span className="text-[#2D2D2D]">Human vs AI Sermon Transcription</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              <span>Comparison Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Human vs AI Sermon Transcription: Which Should You Choose?
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              The transcription landscape has changed dramatically. AI can now transcribe sermons in minutes with near-human accuracy—but is it good enough for your church? This guide compares cost, accuracy, turnaround time, and helps you decide when to use AI, when to use human transcription, and when to combine both.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#5c5c5c]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Updated February 2026</span>
              </div>
            </div>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-[#E8725A]/5 border-2 border-[#E8725A]/30 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-bold text-xl text-[#2D2D2D] mb-4">🎯 Quick Answer: Which Should You Choose?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl">
                <h3 className="font-bold text-[#E8725A] mb-2">Choose AI Transcription When:</h3>
                <ul className="text-sm text-[#5c5c5c] space-y-1">
                  <li>• Weekly/regular sermon transcription</li>
                  <li>• Budget is a concern</li>
                  <li>• Fast turnaround needed (same-day)</li>
                  <li>• Audio quality is good</li>
                  <li>• 98-99% accuracy is sufficient</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-xl">
                <h3 className="font-bold text-[#2D2D2D] mb-2">Choose Human Transcription When:</h3>
                <ul className="text-sm text-[#5c5c5c] space-y-1">
                  <li>• Archiving historically significant sermons</li>
                  <li>• Legal/official documentation needed</li>
                  <li>• Very poor audio quality</li>
                  <li>• 100% accuracy is required</li>
                  <li>• Complex multi-speaker scenarios</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-[#E8E4DC]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">📋 In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-3">
              {[
                "Cost Comparison",
                "Accuracy Comparison",
                "Speed & Turnaround",
                "When AI Wins",
                "When Human Wins",
                "Hybrid Approach",
                "Making Your Decision",
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
            
            {/* Section 1: Cost */}
            <section id="section-1" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Cost Comparison: AI vs Human Transcription</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The cost difference between AI and human transcription is dramatic—often 50-100x. Here's what you'll actually pay:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-[#2D2D2D] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Method</th>
                      <th className="py-3 px-4 text-left">Per Minute</th>
                      <th className="py-3 px-4 text-left">45-Min Sermon</th>
                      <th className="py-3 px-4 text-left">Monthly (4 sermons)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E8E4DC] bg-[#E8725A]/5">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">AI (Sermon-specific)</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$0.006</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$0.27</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">$1.08</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">AI (General tools)</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$0.01-0.02</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$0.45-0.90</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$1.80-3.60</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Human (Economy)</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$1.00</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$45.00</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$180.00</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Human (Premium)</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$2.00-3.00</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$90-135</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">$360-540</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">DIY (Your time)</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">4-6 hrs work</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">"Free"</td>
                      <td className="py-3 px-4 text-[#5c5c5c]">16-24 hrs work</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-[#F5F1EB] rounded-xl mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-3">💡 Annual Cost Comparison (52 sermons × 45 min)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-3xl font-bold text-green-600">$14</p>
                    <p className="text-sm text-[#5c5c5c]">AI (sermon-specific)</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-3xl font-bold text-[#2D2D2D]">$2,340</p>
                    <p className="text-sm text-[#5c5c5c]">Human (economy)</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-3xl font-bold text-[#2D2D2D]">$5,850</p>
                    <p className="text-sm text-[#5c5c5c]">Human (premium)</p>
                  </div>
                </div>
                <p className="text-sm text-[#5c5c5c] mt-3 text-center">
                  AI transcription costs <strong>99.4% less</strong> than human transcription annually.
                </p>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                For most churches, the math is clear: AI transcription enables weekly transcription that would be financially impossible with human services.
              </p>
            </section>

            {/* Section 2: Accuracy */}
            <section id="section-2" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Accuracy Comparison</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Accuracy is where human transcription traditionally had the edge—but that gap has narrowed significantly:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-[#2D2D2D] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Category</th>
                      <th className="py-3 px-4 text-left">Human</th>
                      <th className="py-3 px-4 text-left">AI (Sermon-specific)</th>
                      <th className="py-3 px-4 text-left">AI (General)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Overall Accuracy</td>
                      <td className="py-3 px-4 text-green-600">99%+</td>
                      <td className="py-3 px-4 text-green-600">98-99%</td>
                      <td className="py-3 px-4 text-amber-600">88-92%</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Bible Verses</td>
                      <td className="py-3 px-4 text-green-600">99%+</td>
                      <td className="py-3 px-4 text-green-600">97%</td>
                      <td className="py-3 px-4 text-red-600">62%</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Theological Terms</td>
                      <td className="py-3 px-4 text-green-600">99%+</td>
                      <td className="py-3 px-4 text-green-600">99%</td>
                      <td className="py-3 px-4 text-amber-600">85%</td>
                    </tr>
                    <tr className="border-b border-[#E8E4DC]">
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Poor Audio Quality</td>
                      <td className="py-3 px-4 text-green-600">95%+</td>
                      <td className="py-3 px-4 text-amber-600">85-90%</td>
                      <td className="py-3 px-4 text-red-600">70-80%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-[#2D2D2D] font-medium">Multiple Speakers</td>
                      <td className="py-3 px-4 text-green-600">99%+</td>
                      <td className="py-3 px-4 text-green-600">94%</td>
                      <td className="py-3 px-4 text-amber-600">78%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What Does 98% vs 99% Accuracy Mean?</h3>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                In practical terms, the difference is small but can matter for certain use cases:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">98% Accuracy (AI)</h4>
                  <p className="text-sm text-[#5c5c5c] mb-2">In a 6,000-word sermon:</p>
                  <ul className="text-sm text-[#5c5c5c] space-y-1">
                    <li>• ~120 words may have errors</li>
                    <li>• 5-10 min to review and correct</li>
                    <li>• Suitable for web, study guides, archives</li>
                  </ul>
                </div>
                <div className="p-5 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">99%+ Accuracy (Human)</h4>
                  <p className="text-sm text-[#5c5c5c] mb-2">In a 6,000-word sermon:</p>
                  <ul className="text-sm text-[#5c5c5c] space-y-1">
                    <li>• ~60 words may have errors (or fewer)</li>
                    <li>• Minimal review needed</li>
                    <li>• Suitable for legal, publication, archival</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-amber-800 text-sm">
                  <strong>Important:</strong> Not all AI transcription is equal. General tools like Otter.ai achieve only 88-92% on sermon content. Church-specific AI tools like <Link href="/transcribe" className="text-[#E8725A] hover:underline">Sermon Transcription</Link> achieve 98-99% because they're trained on religious content.
                </p>
              </div>
            </section>

            {/* Section 3: Speed */}
            <section id="section-3" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Speed & Turnaround Time</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This is where AI has an insurmountable advantage:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-8">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Time to Transcript: 45-Minute Sermon</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-medium text-[#2D2D2D]">AI</div>
                    <div className="flex-1 bg-green-100 rounded-full h-8 relative">
                      <div className="absolute inset-0 bg-green-500 rounded-full" style={{ width: '5%' }}></div>
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-sm font-medium">5-15 min</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-medium text-[#2D2D2D]">Human (Rush)</div>
                    <div className="flex-1 bg-amber-100 rounded-full h-8 relative">
                      <div className="absolute inset-0 bg-amber-500 rounded-full" style={{ width: '35%' }}></div>
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-sm font-medium">12-24 hours</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-medium text-[#2D2D2D]">Human (Standard)</div>
                    <div className="flex-1 bg-blue-100 rounded-full h-8 relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-sm font-medium">2-5 business days</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right font-medium text-[#2D2D2D]">DIY Manual</div>
                    <div className="flex-1 bg-red-100 rounded-full h-8 relative">
                      <div className="absolute inset-0 bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-sm font-medium">4-6+ hours of work</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Speed matters for several reasons:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Same-day publishing: Post transcript alongside video on Sunday afternoon",
                  "Quick turnaround for study groups: Small groups meet Sunday evening with transcript ready",
                  "Social media clips: Create quote graphics same day while engagement is highest",
                  "Accessibility compliance: Deaf members can read the sermon without waiting days"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#5c5c5c]">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4: When AI Wins */}
            <section id="section-4" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">When AI Transcription Wins</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                AI is the clear choice for most church transcription scenarios:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Weekly Sermon Transcription",
                    description: "The volume and budget requirements make AI essential. No church can afford $45-135/week for human transcription indefinitely."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Same-Day Publishing Needs",
                    description: "If you want transcripts available Sunday afternoon, AI is the only viable option."
                  },
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: "Limited Budget",
                    description: "Most churches operate on tight budgets. AI makes transcription financially viable."
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Good Audio Quality",
                    description: "With clear recordings, AI achieves near-human accuracy at a fraction of the cost."
                  },
                  {
                    icon: <CheckCircle2 className="w-6 h-6" />,
                    title: "98% Accuracy Is Sufficient",
                    description: "For web publishing, study guides, and searchable archives, 98% accuracy with quick editing works fine."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-1">{item.title}</h4>
                      <p className="text-green-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: When Human Wins */}
            <section id="section-5" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">When Human Transcription Wins</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                There are legitimate scenarios where human transcription is worth the premium:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Historically Significant Sermons",
                    description: "Founding pastor's messages, milestone anniversaries, or sermons that will be published in books deserve 100% accuracy."
                  },
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    title: "Very Poor Audio Quality",
                    description: "Old cassette recordings, outdoor events with wind noise, or equipment malfunctions. Humans can often understand context that AI misses."
                  },
                  {
                    icon: <Scale className="w-6 h-6" />,
                    title: "Legal or Official Documentation",
                    description: "Disciplinary proceedings, legal statements, or official church records may require certified accuracy."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Complex Multi-Speaker Scenarios",
                    description: "Panel discussions, Q&A sessions, or events with many overlapping speakers benefit from human interpretation."
                  },
                  {
                    icon: <CheckCircle2 className="w-6 h-6" />,
                    title: "Verbatim Requirements",
                    description: "When you need every 'um,' pause, and false start captured exactly (unusual for most church needs)."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-1">{item.title}</h4>
                      <p className="text-blue-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Hybrid Approach */}
            <section id="section-6" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">The Hybrid Approach: Best of Both Worlds</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Many churches find that combining AI and human review gives optimal results:
              </p>

              <div className="bg-[#E8725A]/5 border-2 border-[#E8725A]/30 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Recommended Workflow</h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "AI First Pass",
                      description: "Use sermon-specific AI transcription for speed and cost efficiency.",
                      time: "5-10 min"
                    },
                    {
                      step: "2",
                      title: "Quick Human Review",
                      description: "Volunteer or staff member scans for obvious errors, especially proper nouns and verses.",
                      time: "5-15 min"
                    },
                    {
                      step: "3",
                      title: "Publish",
                      description: "Post transcript alongside video. 98%+ accuracy achieved.",
                      time: "2 min"
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-[#2D2D2D]">{item.title}</h4>
                          <span className="text-xs bg-[#E8725A]/10 text-[#E8725A] px-2 py-1 rounded-full">{item.time}</span>
                        </div>
                        <p className="text-sm text-[#5c5c5c]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-white rounded-xl text-center">
                  <p className="text-sm text-[#5c5c5c]">
                    <strong>Total time:</strong> 12-27 minutes | <strong>Total cost:</strong> ~$0.30 + volunteer time
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">When to Upgrade to Human Transcription</h3>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Save your human transcription budget for special occasions:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Annual report sermon from senior pastor",
                  "Guest speaker series destined for publication",
                  "Historical archive restoration projects",
                  "Sermons cited in legal proceedings"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-[#5c5c5c]">
                    <div className="w-5 h-5 rounded-full bg-[#E8725A]/20 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: Decision Framework */}
            <section id="section-7" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Making Your Decision: Quick Framework</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Use this decision tree to choose the right approach:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-[#F5F1EB] rounded-lg">
                    <p className="font-medium text-[#2D2D2D] mb-2">❓ Is this a weekly/regular sermon?</p>
                    <p className="text-sm text-[#5c5c5c]">→ <strong className="text-green-600">Yes:</strong> Use AI transcription</p>
                  </div>
                  <div className="p-4 bg-[#F5F1EB] rounded-lg">
                    <p className="font-medium text-[#2D2D2D] mb-2">❓ Is 98% accuracy acceptable?</p>
                    <p className="text-sm text-[#5c5c5c]">→ <strong className="text-green-600">Yes:</strong> Use AI transcription with quick review</p>
                    <p className="text-sm text-[#5c5c5c]">→ <strong className="text-blue-600">No (need 100%):</strong> Use human transcription</p>
                  </div>
                  <div className="p-4 bg-[#F5F1EB] rounded-lg">
                    <p className="font-medium text-[#2D2D2D] mb-2">❓ Is audio quality very poor?</p>
                    <p className="text-sm text-[#5c5c5c]">→ <strong className="text-blue-600">Yes:</strong> Consider human transcription</p>
                    <p className="text-sm text-[#5c5c5c]">→ <strong className="text-green-600">No:</strong> AI handles it fine</p>
                  </div>
                  <div className="p-4 bg-[#F5F1EB] rounded-lg">
                    <p className="font-medium text-[#2D2D2D] mb-2">❓ Do you need it same-day?</p>
                    <p className="text-sm text-[#5c5c5c]">→ <strong className="text-green-600">Yes:</strong> AI is your only option</p>
                  </div>
                  <div className="p-4 bg-[#F5F1EB] rounded-lg">
                    <p className="font-medium text-[#2D2D2D] mb-2">❓ Is this for legal/archival documentation?</p>
                    <p className="text-sm text-[#5c5c5c]">→ <strong className="text-blue-600">Yes:</strong> Consider human transcription</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="/transcribe" 
                  className="inline-flex items-center gap-2 bg-[#E8725A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d4654f] transition-all"
                >
                  Try Free — Transcribe Up to 5 Minutes
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
              Try AI sermon transcription free
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              See why thousands of churches trust AI for weekly transcription. 98-99% accuracy at a fraction of the cost.
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
                <p className="text-sm text-[#5c5c5c]">Compare the top AI tools for church transcription.</p>
              </Link>
              <Link href="/blog/how-to-transcribe-a-sermon" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">How to Transcribe a Sermon: Complete Guide</h4>
                <p className="text-sm text-[#5c5c5c]">Step-by-step methods for all transcription approaches.</p>
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
