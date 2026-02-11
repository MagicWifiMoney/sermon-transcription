'use client';

import Link from "next/link";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Clock, FileText, Play, Timer, HelpCircle, ChevronDown, ChevronUp, Youtube, Subtitles, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What timestamp format should I use for sermon transcripts?",
    answer: "For video captions, use SRT or VTT format (e.g., 00:01:23,456 --> 00:01:27,890). For general transcripts, [MM:SS] or [HH:MM:SS] at paragraph breaks is standard. Match your format to how you'll use the transcript—SRT for YouTube, simpler timestamps for study guides."
  },
  {
    question: "How often should timestamps appear in a sermon transcript?",
    answer: "For captions/subtitles, every 1-4 seconds. For readable transcripts, every 30-60 seconds at natural paragraph breaks works well. Too many timestamps clutter the text; too few make navigation difficult."
  },
  {
    question: "Can I add timestamps to an existing transcript?",
    answer: "Yes, but it's time-consuming. You'd need to listen to the audio while matching text sections to timecodes. It's easier to regenerate the transcript using AI tools that include timestamps automatically."
  },
  {
    question: "Do YouTube and Facebook use the same caption format?",
    answer: "YouTube accepts SRT and VTT files. Facebook prefers SRT. Both formats are similar—most transcription tools export to both. VTT offers slightly more styling options if needed."
  },
  {
    question: "How do timestamps help with sermon SEO?",
    answer: "Timestamps enable YouTube chapters (appearing in search results), help Google index specific sermon moments, and improve user engagement metrics by allowing viewers to jump to relevant sections. All of these signals can improve search rankings."
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

export default function SermonTranscriptionTimestamps() {
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
        <title>Sermon Transcription with Timestamps: Why It Matters | Sermon Transcription</title>
        <meta name="description" content="Learn why timestamps in sermon transcripts are essential for YouTube captions, Bible study navigation, and accessibility. Guide to timestamp formats and best practices." />
        <meta property="og:title" content="Sermon Transcription with Timestamps: Why It Matters" />
        <meta property="og:description" content="Essential guide to timestamps in sermon transcripts for captions, navigation, and accessibility." />
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
            <span className="text-[#2D2D2D]">Sermon Transcription with Timestamps</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <Timer className="w-4 h-4" />
              <span>Timestamps Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Sermon Transcription with Timestamps: Why It Matters
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              Timestamps transform a transcript from a wall of text into a navigable, accessible resource. Whether you're creating YouTube captions, building a searchable archive, or helping congregation members study, timestamps unlock powerful use cases for your sermon content.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#5c5c5c]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
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
                "What Are Timestamps?",
                "5 Reasons Timestamps Matter",
                "Timestamp Formats Explained",
                "Creating YouTube Captions",
                "Navigation & Study Use",
                "Getting Timestamps Automatically",
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
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">What Are Timestamps in Sermon Transcripts?</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Timestamps are time markers that indicate when specific words or passages occur in the original audio or video. They synchronize your text transcript with the media file, enabling everything from video captions to clickable navigation.
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Example: Transcript Without vs. With Timestamps</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h5 className="font-semibold text-red-800 mb-2">❌ Without Timestamps</h5>
                    <p className="text-sm text-red-700 font-mono">
                      Good morning, church family. Today we're going to look at Matthew chapter 5, verses 1 through 12. This passage is commonly called the Beatitudes...
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-2">✅ With Timestamps</h5>
                    <p className="text-sm text-green-700 font-mono">
                      [00:00:00] Good morning, church family.<br/>
                      [00:00:08] Today we're going to look at Matthew chapter 5, verses 1 through 12.<br/>
                      [00:00:15] This passage is commonly called the Beatitudes...
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                The second version might seem cluttered when reading, but those timestamps unlock powerful capabilities: jumping to any point in the video, generating captions, creating chapter markers, and enabling precise search across your sermon archive.
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">5 Reasons Timestamps Matter for Sermon Transcripts</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Subtitles className="w-6 h-6" />,
                    title: "1. Video Captions & Subtitles",
                    description: "Timestamps are required for closed captions. YouTube, Facebook, and streaming platforms use timestamped text (SRT/VTT files) to display synchronized subtitles. Without timestamps, you can't create proper captions.",
                    stat: "80%+ of Facebook videos are watched with sound off"
                  },
                  {
                    icon: <Search className="w-6 h-6" />,
                    title: "2. Searchable Sermon Archives",
                    description: "When congregants search for 'what did Pastor say about forgiveness?', timestamps let them jump directly to that moment in the video rather than scrubbing through 45 minutes of content.",
                    stat: "Members find specific moments 10x faster"
                  },
                  {
                    icon: <Play className="w-6 h-6" />,
                    title: "3. YouTube Chapters",
                    description: "YouTube uses timestamps to create chapter markers that appear in the progress bar and search results. This improves discoverability and user engagement—viewers can jump to the sections most relevant to them.",
                    stat: "Chaptered videos get 3x more engagement"
                  },
                  {
                    icon: <CheckCircle2 className="w-6 h-6" />,
                    title: "4. Accessibility Compliance",
                    description: "The ADA and web accessibility guidelines (WCAG) require video content to have synchronized captions. Timestamps make your sermon videos accessible to deaf and hard-of-hearing members.",
                    stat: "15% of Americans have hearing difficulty"
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "5. Bible Study & Reference",
                    description: "Study group leaders can share links to specific moments: 'Watch 23:45 to 26:30 where Pastor explains the Greek word for love.' Timestamps turn long sermons into quotable, shareable clips.",
                    stat: "Small group engagement increases 40%"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-[#E8E4DC]">
                    <div className="w-14 h-14 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0 text-[#E8725A]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                      <p className="text-[#5c5c5c] mb-3">{item.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium">
                        📊 {item.stat}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Timestamp Formats Explained</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Different use cases require different timestamp formats. Here are the most common formats you'll encounter:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">SRT (SubRip Subtitle)</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">The most widely supported caption format. Works with YouTube, Facebook, Vimeo, and most video players.</p>
                  <div className="bg-[#2D2D2D] rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
                    <pre>{`1
00:00:00,000 --> 00:00:04,500
Good morning, church family.

2
00:00:04,500 --> 00:00:08,200
Today we're looking at Matthew 5.`}</pre>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">VTT (WebVTT)</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">Web-native format with support for styling. Used by HTML5 video players and modern streaming platforms.</p>
                  <div className="bg-[#2D2D2D] rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
                    <pre>{`WEBVTT

00:00:00.000 --> 00:00:04.500
Good morning, church family.

00:00:04.500 --> 00:00:08.200
Today we're looking at Matthew 5.`}</pre>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Simple Timestamps (for readable transcripts)</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">Human-readable format for study guides, blog posts, and printed transcripts.</p>
                  <div className="bg-[#2D2D2D] rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
                    <pre>{`[00:00] Good morning, church family.

[00:15] Today we're looking at Matthew 5, 
verses 1 through 12—the Beatitudes.

[01:30] Let's start by understanding 
the historical context...`}</pre>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">YouTube Chapters Format</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">Paste into YouTube description to create clickable chapters in the video timeline.</p>
                  <div className="bg-[#2D2D2D] rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
                    <pre>{`0:00 Introduction
2:15 Scripture Reading: Matthew 5:1-12
5:30 What are the Beatitudes?
12:45 "Blessed are the poor in spirit"
18:20 "Blessed are those who mourn"
25:00 Application for today
32:15 Prayer`}</pre>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#E8725A]/10 rounded-xl border border-[#E8725A]/30">
                <p className="text-[#5c5c5c]">
                  <strong className="text-[#E8725A]">💡 Pro Tip:</strong> Export your transcript in multiple formats. Use SRT for YouTube captions, simple timestamps for your website, and chapter format for video descriptions. Most AI transcription tools can export all formats from a single transcription.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Creating YouTube Captions from Timestamped Transcripts</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                YouTube is likely your church's primary video platform. Here's how to maximize your timestamped transcripts for YouTube:
              </p>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Step-by-Step: Adding Captions to YouTube</h4>
                <div className="space-y-3">
                  {[
                    "Export your transcript as an SRT file from your transcription tool",
                    "Go to YouTube Studio → Content → Select your sermon video",
                    "Click 'Subtitles' in the left sidebar",
                    "Click 'Add Language' and select your language (e.g., English)",
                    "Click 'Add' next to Subtitles, then 'Upload file'",
                    "Select 'With timing' and upload your SRT file",
                    "Review the captions, make any edits, and publish"
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#E8725A] flex items-center justify-center flex-shrink-0 text-white text-sm font-medium">
                        {i + 1}
                      </div>
                      <p className="text-[#5c5c5c]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Adding YouTube Chapters</h3>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                YouTube chapters appear as segments in the video progress bar and in search results. They dramatically improve viewer experience and can boost your video's discoverability.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">✅ Chapter Requirements</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• First chapter must start at 0:00</li>
                    <li>• Minimum 3 chapters required</li>
                    <li>• Each chapter must be 10+ seconds</li>
                    <li>• Place in video description</li>
                  </ul>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-800 mb-2">⚠️ Best Practices</h5>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Use descriptive chapter titles</li>
                    <li>• 5-10 chapters for 45-min sermon</li>
                    <li>• Include scripture references</li>
                    <li>• Mark main teaching points</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Example: Sermon Chapter Structure</h4>
                <div className="font-mono text-sm text-[#5c5c5c] bg-[#F5F1EB] p-4 rounded-lg">
                  <pre>{`0:00 Welcome & Opening Prayer
2:30 Scripture: Romans 8:28-39
5:15 Context: Who wrote Romans and why?
10:45 Point 1: God works ALL things
18:20 Point 2: For the GOOD of those who love Him
26:00 Point 3: Called according to His PURPOSE
34:30 Application: What does this mean for you?
40:15 Closing prayer & benediction`}</pre>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Using Timestamps for Navigation & Study</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Beyond video captions, timestamps enable powerful navigation features for your congregation:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">🔍 Searchable Archives</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    When you store timestamped transcripts in a database, search results can link directly to the relevant video moment.
                  </p>
                  <div className="text-sm bg-[#F5F1EB] p-3 rounded-lg">
                    <p className="text-[#5c5c5c]">
                      Search: "prodigal son"<br/>
                      Result: <span className="text-[#E8725A]">"The Father's Love" - Dec 3, 2025 [14:32]</span><br/>
                      <span className="text-xs">Click to jump to that moment →</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">📚 Study Guide Links</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Small group materials can reference specific sermon moments for discussion.
                  </p>
                  <div className="text-sm bg-[#F5F1EB] p-3 rounded-lg">
                    <p className="text-[#5c5c5c]">
                      Discussion Question 3:<br/>
                      Watch <span className="text-[#E8725A]">23:15 - 25:30</span> where Pastor explains the cultural context of foot-washing. How does this change your understanding?
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">✂️ Clip Creation</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Timestamps make it easy to identify shareable moments for social media clips.
                  </p>
                  <div className="text-sm bg-[#F5F1EB] p-3 rounded-lg">
                    <p className="text-[#5c5c5c]">
                      Clip-worthy moment at <span className="text-[#E8725A]">18:42 - 19:55</span>:<br/>
                      "Grace isn't getting what you deserve. It's getting what you could never earn..."
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-[#E8E4DC]">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">📖 Scripture Index</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Build a verse-by-verse index linking to every time a scripture is mentioned.
                  </p>
                  <div className="text-sm bg-[#F5F1EB] p-3 rounded-lg">
                    <p className="text-[#5c5c5c]">
                      John 3:16 mentioned in:<br/>
                      • "Amazing Grace" <span className="text-[#E8725A]">[8:22]</span><br/>
                      • "The Heart of God" <span className="text-[#E8725A]">[32:15]</span><br/>
                      • "Easter 2025" <span className="text-[#E8725A]">[12:48]</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                These features transform your sermon archive from a chronological list of videos into an interactive, searchable knowledge base. Learn more in our guide to <Link href="/blog/searchable-sermon-archive" className="text-[#E8725A] hover:underline">creating a searchable sermon archive</Link>.
              </p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Getting Timestamps Automatically</h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Manual timestamping is tedious—you'd need to listen to the entire sermon while noting times. Fortunately, modern AI transcription tools generate timestamps automatically.
              </p>

              <div className="p-6 bg-[#E8725A]/5 rounded-2xl border-2 border-[#E8725A]/30 mb-8">
                <h3 className="font-bold text-xl text-[#2D2D2D] mb-4">How AI Transcription Handles Timestamps</h3>
                <p className="text-[#5c5c5c] mb-4">
                  AI transcription tools like <Link href="/transcribe" className="text-[#E8725A] hover:underline">Sermon Transcription</Link> process your audio and automatically:
                </p>
                <ul className="space-y-2 text-[#5c5c5c]">
                  {[
                    "Generate word-level timestamps (accurate to ~0.1 seconds)",
                    "Export in multiple formats (SRT, VTT, TXT with timestamps)",
                    "Create chapter suggestions based on topic changes",
                    "Identify speaker changes with timestamps"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-[#E8E4DC] p-6 mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-4">Quick Process Overview</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-3 text-[#E8725A] font-bold">1</div>
                    <h5 className="font-semibold text-[#2D2D2D] mb-1">Upload</h5>
                    <p className="text-sm text-[#5c5c5c]">Drop your sermon audio/video file</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-3 text-[#E8725A] font-bold">2</div>
                    <h5 className="font-semibold text-[#2D2D2D] mb-1">Process</h5>
                    <p className="text-sm text-[#5c5c5c]">AI transcribes with timestamps in minutes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-3 text-[#E8725A] font-bold">3</div>
                    <h5 className="font-semibold text-[#2D2D2D] mb-1">Export</h5>
                    <p className="text-sm text-[#5c5c5c]">Download SRT, VTT, or timestamped text</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
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
              Get timestamped transcripts in minutes
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Upload your sermon audio and get accurate transcripts with timestamps, ready for YouTube captions and study resources.
            </p>
            <Link 
              href="/transcribe" 
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
            >
              Try Free — Transcribe Up to 5 Minutes
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/50 text-sm mt-4">No credit card required. SRT & VTT export included.</p>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-transcribe-a-sermon" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">How to Transcribe a Sermon: Complete Guide</h4>
                <p className="text-sm text-[#5c5c5c]">Step-by-step methods for converting sermons to text.</p>
              </Link>
              <Link href="/blog/searchable-sermon-archive" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">How to Create a Searchable Sermon Archive</h4>
                <p className="text-sm text-[#5c5c5c]">Build a congregation-friendly sermon library with search.</p>
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
