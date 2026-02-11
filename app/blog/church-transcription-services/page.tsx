'use client';

import Link from "next/link";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Clock, FileText, Users, BookOpen, Music, Heart, Video, ChevronDown, ChevronUp, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of church content can be transcribed?",
    answer: "Beyond sermons, churches commonly transcribe Bible studies, prayer meetings, testimony recordings, leadership meetings, worship lyrics, interviews with missionaries, counseling session summaries (with consent), podcasts, and special events like baptisms or weddings for archival purposes."
  },
  {
    question: "How much does church transcription typically cost?",
    answer: "AI transcription services cost $0.006-0.02 per minute, making a 45-minute sermon $0.27-0.90. Human transcription costs $1-3 per minute ($45-135 for the same sermon). Most churches find AI transcription provides the best balance of cost and quality for regular use."
  },
  {
    question: "Can transcription services handle multiple languages used in our church?",
    answer: "Yes, most AI transcription services support 50+ languages and can handle code-switching (multiple languages in one recording). This is valuable for multilingual congregations or sermons that include Hebrew/Greek terms."
  },
  {
    question: "How do we handle confidential content like counseling or elder meetings?",
    answer: "Choose transcription services with strong privacy policies, encryption, and data deletion options. For highly sensitive content, consider self-hosted solutions like OpenAI Whisper. Always obtain consent before transcribing personal conversations."
  },
  {
    question: "Is transcription necessary if we already have video recordings?",
    answer: "Text transcripts offer unique benefits: searchability (find specific topics across years of content), accessibility (deaf/hard-of-hearing members), SEO (search engines can't index video audio), and content repurposing (quotes, blog posts, study guides). Video and transcription complement each other."
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

const transcriptionUseCases = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Bible Study Groups",
    description: "Transcribe weekly Bible study discussions for members who missed sessions or want to review key insights.",
    benefits: ["Study guides for small groups", "Searchable discussion archive", "Share insights across groups"],
    example: "Wednesday night study on Romans becomes a searchable resource for all small groups."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Testimonies & Baptisms",
    description: "Preserve powerful personal testimonies and milestone moments for the church archive.",
    benefits: ["Permanent archive of stories", "Encourage new believers", "Membership documentation"],
    example: "New member testimonies become part of your church's living history."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Leadership & Elder Meetings",
    description: "Create accurate records of decisions, vision discussions, and important church governance matters.",
    benefits: ["Official meeting minutes", "Decision documentation", "Accountability records"],
    example: "Annual planning retreat discussions captured for implementation follow-up."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Missionary & Ministry Reports",
    description: "Transcribe updates from missionaries and ministry leaders for congregation-wide sharing.",
    benefits: ["Prayer letter content", "Mission trip reports", "Newsletter material"],
    example: "Missionary video call becomes a written report for the mission committee."
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Worship & Special Events",
    description: "Document special services, conferences, and worship experiences for future reference.",
    benefits: ["Event archives", "Training materials", "Historical documentation"],
    example: "Guest speaker series preserved as a curriculum resource."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Podcast & Media Ministry",
    description: "Transcribe church podcasts for accessibility, SEO, and content repurposing.",
    benefits: ["Podcast show notes", "Blog post content", "Social media quotes"],
    example: "Weekly pastor's podcast becomes 52 blog posts per year."
  }
];

export default function ChurchTranscriptionServices() {
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
        <title>Church Transcription Services: Beyond Just Sermons | Sermon Transcription</title>
        <meta name="description" content="Discover how churches use transcription for Bible studies, testimonies, meetings, podcasts, and more. Complete guide to church transcription services and use cases." />
        <meta property="og:title" content="Church Transcription Services: Beyond Just Sermons" />
        <meta property="og:description" content="How churches use transcription for Bible studies, testimonies, meetings, and more." />
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
            <span className="text-[#2D2D2D]">Church Transcription Services</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>Church Ministry</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Church Transcription Services: Beyond Just Sermons
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              When most churches think about transcription, sermons come to mind first. But transcription can serve your entire ministry—from Bible study archives to missionary reports to official meeting minutes. Discover how churches are using transcription to document, share, and preserve their ministry content.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#5c5c5c]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Updated February 2026</span>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-[#E8E4DC]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">📋 In This Guide</h2>
            <nav className="grid md:grid-cols-2 gap-3">
              {[
                "Why Transcription Matters for Churches",
                "6 Church Transcription Use Cases",
                "Building Your Church Content Library",
                "Choosing Transcription Services",
                "Privacy & Confidentiality",
                "Getting Started",
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
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Why Transcription Matters for Churches</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Churches produce an enormous amount of audio and video content each year. A mid-sized church might record 50+ sermons, dozens of Bible studies, committee meetings, special events, and more. Without transcription, this content remains locked in media files—difficult to search, reference, or repurpose.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Searchability", desc: "Find any topic, verse, or quote across years of content instantly" },
                  { title: "Accessibility", desc: "Serve deaf and hard-of-hearing members with full text access" },
                  { title: "Preservation", desc: "Text archives survive longer and are easier to migrate than media formats" },
                  { title: "Repurposing", desc: "Turn spoken content into blog posts, study guides, and newsletters" },
                  { title: "Documentation", desc: "Create official records of decisions, testimonies, and milestones" },
                  { title: "SEO & Discovery", desc: "Help new people find your church through searchable content" }
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
                Modern AI transcription makes this accessible to churches of any size. What once required hiring professional transcriptionists (at $1-3/minute) now costs pennies and takes minutes instead of days.
              </p>
            </section>

            {/* Section 2: Use Cases */}
            <section id="section-2" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">6 Church Transcription Use Cases Beyond Sermons</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                While sermon transcription is the most common use case, forward-thinking churches are transcribing all kinds of ministry content:
              </p>

              <div className="space-y-6">
                {transcriptionUseCases.map((useCase, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0 text-[#E8725A]">
                        {useCase.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D2D2D] mb-1">{useCase.title}</h3>
                        <p className="text-[#5c5c5c]">{useCase.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-[#2D2D2D] text-sm mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {useCase.benefits.map((benefit, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-[#5c5c5c]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#E8725A]" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 bg-[#F5F1EB] rounded-lg">
                        <h4 className="font-semibold text-[#2D2D2D] text-sm mb-1">💡 Example:</h4>
                        <p className="text-sm text-[#5c5c5c]">{useCase.example}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Building Content Library */}
            <section id="section-3" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Building Your Church Content Library</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Think of transcription as building a knowledge base for your church. Over time, you accumulate a searchable library of teaching, testimonies, decisions, and history that serves current and future members.
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Sample Church Content Library Structure</h3>
                <div className="bg-[#2D2D2D] rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
                  <pre>{`📁 Church Content Archive
├── 📁 Sermons (2020-2026)
│   ├── 2026-02-09_Walking-in-Grace.txt
│   └── 2026-02-02_The-Prodigal-Returns.txt
├── 📁 Bible Studies
│   ├── Romans-Study-Week-12.txt
│   └── Psalms-Deep-Dive-Week-8.txt
├── 📁 Testimonies
│   ├── 2026-01-15_Sarah-Johnson-Baptism.txt
│   └── 2025-12-24_Christmas-Eve-Stories.txt
├── 📁 Leadership
│   ├── 2026-01-Board-Meeting-Minutes.txt
│   └── 2025-Annual-Planning-Retreat.txt
├── 📁 Missions
│   ├── Smith-Family-Update-Jan-2026.txt
│   └── Mexico-Mission-Trip-Report.txt
└── 📁 Special Events
    ├── 2025-Easter-Sunrise-Service.txt
    └── 2025-Christmas-Concert.txt`}</pre>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Content Library Benefits Over Time</h3>
              
              <div className="space-y-4 mb-8">
                {[
                  {
                    year: "Year 1",
                    content: "~100 transcripts",
                    value: "Basic searchability, accessibility compliance for sermons"
                  },
                  {
                    year: "Year 3",
                    content: "~400 transcripts",
                    value: "Topic-based sermon series, small group curriculum library"
                  },
                  {
                    year: "Year 5",
                    content: "~800 transcripts",
                    value: "Comprehensive archive, AI-powered topic summaries, training materials"
                  },
                  {
                    year: "Year 10+",
                    content: "1,500+ transcripts",
                    value: "Church history archive, new member education, pastoral succession resource"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-[#E8E4DC]">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-[#E8725A] font-bold">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#2D2D2D] font-medium">{item.content}</span>
                      <p className="text-[#5c5c5c] text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The value compounds over time. After five years, you can answer questions like "What has our church taught about stewardship?" or "When did we discuss building expansion?" with searchable evidence.
              </p>
            </section>

            {/* Section 4: Choosing Services */}
            <section id="section-4" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Choosing Church Transcription Services</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Not all transcription services are equal for church use. Here's what to consider:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">✅ Essential Features</h3>
                  <ul className="space-y-3 text-[#5c5c5c]">
                    {[
                      "High accuracy on religious terminology",
                      "Bible verse recognition",
                      "Affordable per-minute pricing",
                      "Multiple export formats",
                      "Timestamp support",
                      "Speaker identification"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">🎯 Nice to Have</h3>
                  <ul className="space-y-3 text-[#5c5c5c]">
                    {[
                      "Custom vocabulary (church-specific terms)",
                      "Bulk upload for archives",
                      "API for automation",
                      "Team accounts",
                      "Caption export (SRT/VTT)",
                      "Multi-language support"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <div className="w-5 h-5 rounded-full border-2 border-[#E8725A] flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#E8725A]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-[#E8725A]/5 rounded-2xl border-2 border-[#E8725A]/30">
                <h3 className="font-bold text-xl text-[#2D2D2D] mb-4">Recommended: Sermon Transcription</h3>
                <p className="text-[#5c5c5c] mb-4">
                  Built specifically for churches, <Link href="/transcribe" className="text-[#E8725A] hover:underline">Sermon Transcription</Link> offers all the essential features plus church-specific optimizations. It's the most cost-effective option for ministry content.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 bg-white rounded-full text-[#2D2D2D]">99%+ accuracy</span>
                  <span className="px-3 py-1 bg-white rounded-full text-[#2D2D2D]">$0.006/minute</span>
                  <span className="px-3 py-1 bg-white rounded-full text-[#2D2D2D]">Bible verse detection</span>
                  <span className="px-3 py-1 bg-white rounded-full text-[#2D2D2D]">Free tier available</span>
                </div>
              </div>
            </section>

            {/* Section 5: Privacy */}
            <section id="section-5" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Privacy & Confidentiality Considerations</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Churches handle sensitive content—counseling discussions, personnel matters, confidential testimonies. Here's how to maintain appropriate privacy:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🔐 Public Content (Sermons, Bible Studies)</h4>
                  <p className="text-[#5c5c5c]">
                    Standard AI transcription services work well. These are already public—you're just making them more accessible. Ensure the service uses encryption and has reasonable data retention policies.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🔒 Semi-Private (Meeting Minutes, Internal Training)</h4>
                  <p className="text-[#5c5c5c]">
                    Choose services that delete audio after processing. Review who has access to transcripts within your organization. Consider whether you need a business-tier account with team management.
                  </p>
                </div>

                <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-2">⚠️ Confidential (Counseling, Personnel, Legal)</h4>
                  <p className="text-amber-700">
                    For highly sensitive content, consider self-hosted solutions like OpenAI Whisper (requires technical expertise) or enterprise transcription services with HIPAA compliance. Always obtain explicit consent before transcribing personal conversations.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F5F1EB] rounded-xl">
                <p className="text-[#5c5c5c]">
                  <strong className="text-[#2D2D2D]">Best Practice:</strong> Establish a church policy on what gets transcribed, who has access, and how long transcripts are retained. Document this in your data governance procedures.
                </p>
              </div>
            </section>

            {/* Section 6: Getting Started */}
            <section id="section-6" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Getting Started with Church Transcription</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Ready to expand your church's transcription beyond sermons? Here's a practical roadmap:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    phase: "Week 1-2: Start with Sermons",
                    tasks: [
                      "Set up your transcription workflow for weekly sermons",
                      "Decide on file naming and storage conventions",
                      "Train one or two staff members on the process"
                    ]
                  },
                  {
                    phase: "Month 1: Add Bible Studies",
                    tasks: [
                      "Transcribe your main weekly Bible study",
                      "Create a small group transcript sharing workflow",
                      "Gather feedback from study leaders"
                    ]
                  },
                  {
                    phase: "Month 2-3: Expand to Meetings",
                    tasks: [
                      "Transcribe board/elder meeting recordings",
                      "Establish confidentiality protocols",
                      "Create searchable meeting archive"
                    ]
                  },
                  {
                    phase: "Month 4+: Full Content Library",
                    tasks: [
                      "Add testimonies, special events, podcasts",
                      "Consider backlog transcription of key historical content",
                      "Explore content repurposing opportunities"
                    ]
                  }
                ].map((phase, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                    <h4 className="font-bold text-[#E8725A] mb-3">{phase.phase}</h4>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, j) => (
                        <li key={j} className="flex gap-2 text-[#5c5c5c]">
                          <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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

            {/* Section 7: FAQ */}
            <section id="section-7" className="mb-16">
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
              Start building your church content library
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Begin with sermons, expand to Bible studies and meetings. AI transcription makes it affordable for any church.
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
              <Link href="/blog/repurposing-sermon-transcripts" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">Repurposing Sermon Transcripts: 15 Content Ideas</h4>
                <p className="text-sm text-[#5c5c5c]">Turn one sermon into multiple pieces of ministry content.</p>
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
