'use client';

import Link from "next/link";
import Head from "next/head";
import { ArrowRight, CheckCircle2, Clock, FileText, Share2, BookOpen, Mail, MessageSquare, ChevronDown, ChevronUp, Sparkles, Instagram, Youtube, Headphones, Newspaper, Users } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How many pieces of content can I create from one sermon?",
    answer: "A single 45-minute sermon can realistically generate 10-20+ pieces of content: 1 blog post, 5-10 social media quotes, 1 podcast episode, 1 email devotional, 1 small group guide, YouTube chapters, and potentially a mini ebook if combined with related sermons."
  },
  {
    question: "Do I need to write everything from scratch?",
    answer: "No! The transcript is your foundation. Most repurposing involves extracting, reformatting, and lightly editing existing content rather than creating new material. A 6,000-word transcript contains enough material for weeks of content."
  },
  {
    question: "How do I turn a sermon into a blog post?",
    answer: "Start with your transcript, then: 1) Add a compelling headline, 2) Write a 2-3 sentence introduction, 3) Break into H2/H3 sections from main points, 4) Clean up spoken language for written flow, 5) Add a conclusion and CTA. This takes 30-60 minutes with a good transcript."
  },
  {
    question: "What's the best social media content from sermons?",
    answer: "Quote graphics perform best—pull memorable one-liners and overlay on branded templates. Short video clips (30-60 seconds) of powerful moments also work well. Both require timestamps in your transcript to find the best moments quickly."
  },
  {
    question: "How do I create small group questions from a sermon?",
    answer: "Review the transcript's main points and create 2-3 discussion questions per point: one 'comprehension' question (what did Pastor say?), one 'application' question (how does this apply?), and one 'going deeper' question (what are the implications?)."
  },
  {
    question: "Can AI help with sermon repurposing?",
    answer: "Absolutely. AI tools can summarize transcripts, suggest social media quotes, generate discussion questions, and even draft blog posts based on your transcript. The transcript becomes the raw material for AI-assisted content creation."
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

const contentIdeas = [
  {
    number: 1,
    title: "Blog Posts",
    icon: <FileText className="w-6 h-6" />,
    effort: "Medium",
    impact: "High",
    description: "Transform your sermon into a searchable, shareable blog post. This is the highest-ROI repurposing because blog posts live forever on your website, attract search traffic, and can be shared indefinitely.",
    howTo: [
      "Start with your full transcript",
      "Add a headline optimized for search (include the topic/scripture)",
      "Write a 2-3 sentence introduction summarizing the main point",
      "Use sermon's main points as H2 headers",
      "Clean up spoken language for written flow",
      "Add scripture references as formatted quotes",
      "End with a conclusion and call to action"
    ],
    example: "Sermon 'Walking in Grace' → Blog post 'What Does Grace Mean in Everyday Life? 5 Lessons from Ephesians 2'"
  },
  {
    number: 2,
    title: "Social Media Quote Graphics",
    icon: <Instagram className="w-6 h-6" />,
    effort: "Low",
    impact: "High",
    description: "Pull memorable one-liners from your sermon and turn them into shareable graphics. These are your highest-engagement social content and take minutes to create with the right transcript.",
    howTo: [
      "Scan transcript for quotable moments (short, punchy, complete thoughts)",
      "Select 5-10 best quotes per sermon",
      "Create branded templates in Canva or similar tool",
      "Add the quote, pastor's name, and church branding",
      "Schedule throughout the week for consistent posting"
    ],
    example: "'Grace isn't getting what you deserve—it's getting what you could never earn.' — Pastor John"
  },
  {
    number: 3,
    title: "Video Clips for Reels/Shorts",
    icon: <Youtube className="w-6 h-6" />,
    effort: "Medium",
    impact: "Very High",
    description: "Short video clips (30-90 seconds) are the highest-performing content on most platforms. Timestamps in your transcript help you find the best moments without scrubbing through the full video.",
    howTo: [
      "Review transcript with timestamps to identify powerful 30-90 second segments",
      "Look for complete thoughts with emotional impact",
      "Export just that clip from your video editor",
      "Add captions (critical for social—80% watch without sound)",
      "Post to YouTube Shorts, Instagram Reels, TikTok, Facebook Reels"
    ],
    example: "Timestamp [23:45-25:15]: Pastor's illustration about forgiveness → 90-second clip with captions"
  },
  {
    number: 4,
    title: "Email Devotionals",
    icon: <Mail className="w-6 h-6" />,
    effort: "Low",
    impact: "High",
    description: "Weekly email devotionals based on Sunday's sermon keep your congregation engaged mid-week and extend the sermon's impact beyond Sunday morning.",
    howTo: [
      "Extract one main point from the sermon",
      "Write 200-300 word reflection expanding that point",
      "Include the relevant scripture passage",
      "Add 2-3 reflection questions",
      "Link to full sermon video/transcript for those who want more"
    ],
    example: "Subject: 'Monday Reflection: The Grace That Meets You Where You Are'"
  },
  {
    number: 5,
    title: "Small Group Discussion Guides",
    icon: <Users className="w-6 h-6" />,
    effort: "Medium",
    impact: "Very High",
    description: "Transcripts make it easy to create discussion guides that small groups can use the same week. This dramatically increases sermon retention and application.",
    howTo: [
      "List sermon's 3-5 main points from transcript",
      "Create 2-3 discussion questions per point",
      "Include relevant scripture references",
      "Add one 'going deeper' section with additional study",
      "Include the sermon quote that resonates most",
      "Distribute to group leaders by Saturday"
    ],
    example: "Small Group Guide: 'Walking in Grace' — Week of Feb 9, 2026"
  },
  {
    number: 6,
    title: "Podcast Episodes",
    icon: <Headphones className="w-6 h-6" />,
    effort: "Low",
    impact: "High",
    description: "If you record audio, you already have podcast content. Clean up the audio, add an intro/outro, and publish. The transcript provides show notes and enables accessibility.",
    howTo: [
      "Extract audio from your sermon video (or use separate recording)",
      "Add branded intro and outro",
      "Use transcript to write show notes and description",
      "Include timestamps for major sections",
      "Publish to Apple Podcasts, Spotify, Google Podcasts"
    ],
    example: "Podcast: 'Grace Community Church — Weekly Sermons' (Episode 47: Walking in Grace)"
  },
  {
    number: 7,
    title: "Newsletter Content",
    icon: <Newspaper className="w-6 h-6" />,
    effort: "Low",
    impact: "Medium",
    description: "Your church newsletter needs content. Sermon summaries, key quotes, and application points fill space with valuable content you've already created.",
    howTo: [
      "Write a 100-150 word sermon summary from transcript",
      "Pull 2-3 key quotes",
      "Note upcoming sermon series or themes",
      "Include link to full sermon"
    ],
    example: "Newsletter section: 'Last Sunday: What We Learned About Grace'"
  },
  {
    number: 8,
    title: "Twitter/X Thread",
    icon: <MessageSquare className="w-6 h-6" />,
    effort: "Low",
    impact: "Medium",
    description: "Break sermon main points into a thread format. Each tweet covers one point. Great for reaching people outside your normal audience.",
    howTo: [
      "Write a hook tweet with the main theme",
      "Turn each main point into 1-2 tweets",
      "Include scripture references",
      "End with call to action (watch full sermon, visit church)",
      "Post as thread Monday morning"
    ],
    example: "🧵 Yesterday I preached about grace. Here are 5 things I learned preparing this sermon..."
  },
  {
    number: 9,
    title: "Sermon Transcripts for Website",
    icon: <FileText className="w-6 h-6" />,
    effort: "Low",
    impact: "High",
    description: "The simplest repurpose: publish the full transcript alongside your video. This serves accessibility, SEO, and members who prefer reading.",
    howTo: [
      "Upload transcript to your sermon archive page",
      "Format with clear headers for sections",
      "Include metadata (date, speaker, scripture, series)",
      "Ensure it's searchable on your site"
    ],
    example: "Sermon page includes video + 'Read Transcript' toggle below"
  },
  {
    number: 10,
    title: "Sermon Series Ebook",
    icon: <BookOpen className="w-6 h-6" />,
    effort: "High",
    impact: "Very High",
    description: "Compile transcripts from a sermon series into a free ebook. This creates a valuable lead magnet and resource for deeper study.",
    howTo: [
      "Gather transcripts from completed sermon series (4-8 sermons)",
      "Edit each for written format (remove verbal tics, improve flow)",
      "Add introduction explaining the series theme",
      "Include discussion questions after each chapter",
      "Design simple cover and format as PDF",
      "Offer as free download in exchange for email"
    ],
    example: "Free ebook: 'Living in Grace: A 6-Week Journey Through Ephesians'"
  },
  {
    number: 11,
    title: "YouTube Chapters & Description",
    icon: <Youtube className="w-6 h-6" />,
    effort: "Low",
    impact: "High",
    description: "Use timestamps from your transcript to create YouTube chapters. This dramatically improves viewer experience and search discoverability.",
    howTo: [
      "Review transcript timestamps for major transitions",
      "Create chapter list starting at 0:00",
      "Write descriptive chapter titles",
      "Paste into YouTube video description",
      "YouTube automatically creates chapter markers"
    ],
    example: "0:00 Welcome, 2:30 Scripture Reading, 5:15 What is Grace?, 15:00 Grace in Daily Life..."
  },
  {
    number: 12,
    title: "Staff Training Materials",
    icon: <Users className="w-6 h-6" />,
    effort: "Medium",
    impact: "Medium",
    description: "Teaching sermons on leadership, ministry philosophy, or church values become training resources for staff and volunteers.",
    howTo: [
      "Identify sermons with training value",
      "Extract key principles and teachings",
      "Create summary document with main points",
      "Add reflection questions for team discussion",
      "Use in staff meetings or onboarding"
    ],
    example: "Volunteer training module based on 'Servant Leadership' sermon series"
  },
  {
    number: 13,
    title: "Social Media Carousels",
    icon: <Instagram className="w-6 h-6" />,
    effort: "Medium",
    impact: "High",
    description: "Multi-slide carousel posts perform well on Instagram and LinkedIn. Turn sermon outline into swipeable content.",
    howTo: [
      "Pull 5-7 main points or quotes from transcript",
      "Design each point as one carousel slide",
      "First slide: attention-grabbing title",
      "Middle slides: one point each with supporting quote/verse",
      "Last slide: call to action (watch sermon, visit church)"
    ],
    example: "Carousel: '5 Ways Grace Changes Everything' (7 slides)"
  },
  {
    number: 14,
    title: "Scripture Index & Topical Reference",
    icon: <BookOpen className="w-6 h-6" />,
    effort: "Medium (upfront), Low (ongoing)",
    impact: "High",
    description: "Build a searchable index linking scriptures and topics to specific sermons. Over time, this becomes an invaluable study resource.",
    howTo: [
      "Tag each transcript with scriptures mentioned",
      "Tag with topics/themes covered",
      "Build database or spreadsheet linking these",
      "Make searchable on your website",
      "Update weekly after each sermon"
    ],
    example: "Search 'forgiveness' → Shows all sermons that addressed forgiveness with timestamps"
  },
  {
    number: 15,
    title: "Guest Post & Collaboration Content",
    icon: <Share2 className="w-6 h-6" />,
    effort: "Medium",
    impact: "Medium",
    description: "Adapt sermon content for guest posts on Christian blogs, denominational publications, or collaborative content with other churches.",
    howTo: [
      "Identify sermons with broad appeal beyond your congregation",
      "Rewrite as standalone article (remove church-specific references)",
      "Pitch to relevant publications or partner churches",
      "Include bio linking back to your church"
    ],
    example: "Sermon on marriage → Guest post for Focus on the Family blog"
  }
];

export default function RepurposingSermonTranscripts() {
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
        <title>Repurposing Sermon Transcripts: 15 Content Ideas | Sermon Transcription</title>
        <meta name="description" content="Turn one sermon into 15+ pieces of content. Blog posts, social media, podcasts, ebooks, and more. Complete guide to maximizing your sermon content." />
        <meta property="og:title" content="Repurposing Sermon Transcripts: 15 Content Ideas" />
        <meta property="og:description" content="Turn one sermon into 15+ pieces of content with these repurposing strategies." />
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
            <span className="text-[#2D2D2D]">Repurposing Sermon Transcripts</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Content Strategy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              Repurposing Sermon Transcripts: 15 Content Ideas
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              Your pastor spends 10-20 hours preparing each sermon. That sermon generates ~6,000 words of content. But most churches use it once and move on. With a transcript, you can turn that single sermon into weeks of content across every platform. Here are 15 proven ways to repurpose sermon transcripts.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#5c5c5c]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Updated February 2026</span>
              </div>
            </div>
          </header>

          {/* Value Proposition Box */}
          <div className="bg-[#E8725A]/5 border-2 border-[#E8725A]/30 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="font-bold text-xl text-[#2D2D2D] mb-4">📈 The Math: One Sermon → Weeks of Content</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-white rounded-xl">
                <p className="text-3xl font-bold text-[#E8725A]">1</p>
                <p className="text-xs text-[#5c5c5c]">Sermon</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <p className="text-3xl font-bold text-[#E8725A]">6,000+</p>
                <p className="text-xs text-[#5c5c5c]">Words</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <p className="text-3xl font-bold text-[#E8725A]">15+</p>
                <p className="text-xs text-[#5c5c5c]">Content pieces</p>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <p className="text-3xl font-bold text-[#E8725A]">∞</p>
                <p className="text-xs text-[#5c5c5c]">Reach potential</p>
              </div>
            </div>
            <p className="text-sm text-[#5c5c5c]">
              <strong>The key is the transcript.</strong> Without text to work from, repurposing means re-watching video repeatedly. With a transcript, you can scan, copy, and adapt content in minutes.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 border border-[#E8E4DC]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">📋 15 Content Ideas</h2>
            <nav className="grid md:grid-cols-3 gap-3 text-sm">
              {contentIdeas.map((item) => (
                <a key={item.number} href={`#idea-${item.number}`} className="flex items-center gap-2 text-[#5c5c5c] hover:text-[#E8725A] transition-colors">
                  <span className="w-5 h-5 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-xs flex items-center justify-center font-medium">
                    {item.number}
                  </span>
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Content Ideas */}
          <div className="space-y-8">
            {contentIdeas.map((idea) => (
              <section key={idea.number} id={`idea-${idea.number}`} className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8725A]/10 flex items-center justify-center flex-shrink-0 text-[#E8725A]">
                      {idea.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-sm font-bold text-[#E8725A]">#{idea.number}</span>
                        <h3 className="text-xl font-bold text-[#2D2D2D]">{idea.title}</h3>
                      </div>
                      <div className="flex gap-2 text-xs">
                        <span className={`px-2 py-0.5 rounded-full ${
                          idea.effort === 'Low' ? 'bg-green-100 text-green-700' :
                          idea.effort === 'Medium' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {idea.effort} effort
                        </span>
                        <span className={`px-2 py-0.5 rounded-full ${
                          idea.impact === 'Very High' ? 'bg-green-100 text-green-700' :
                          idea.impact === 'High' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {idea.impact} impact
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#5c5c5c] mb-4">
                    {idea.description}
                  </p>

                  <div className="bg-[#F5F1EB] rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-[#2D2D2D] mb-2 text-sm">How to do it:</h4>
                    <ol className="space-y-1">
                      {idea.howTo.map((step, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[#5c5c5c]">
                          <span className="text-[#E8725A] font-medium">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-[#E8725A] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#2D2D2D]">Example: </span>
                      <span className="text-[#5c5c5c]">{idea.example}</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Workflow Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Putting It Together: Weekly Workflow</h2>
            
            <p className="text-[#5c5c5c] leading-relaxed mb-6">
              You don't need to do all 15 every week. Here's a realistic workflow for a small team (or solo communications person):
            </p>

            <div className="bg-white rounded-2xl border border-[#E8E4DC] p-6 mb-8">
              <h3 className="font-bold text-[#2D2D2D] mb-4">Weekly Sermon Content Workflow</h3>
              <div className="space-y-4">
                {[
                  {
                    day: "Sunday PM",
                    tasks: ["Upload sermon for transcription", "Transcript ready in ~10 min"],
                    time: "15 min"
                  },
                  {
                    day: "Monday",
                    tasks: ["Publish transcript to website", "Create YouTube chapters from timestamps", "Schedule 5 social quote graphics"],
                    time: "45 min"
                  },
                  {
                    day: "Tuesday",
                    tasks: ["Write email devotional", "Schedule for Wednesday send"],
                    time: "20 min"
                  },
                  {
                    day: "Wednesday",
                    tasks: ["Create small group discussion guide", "Send to group leaders"],
                    time: "30 min"
                  },
                  {
                    day: "Thursday",
                    tasks: ["Create 1-2 video clips for Reels/Shorts", "Schedule for weekend"],
                    time: "30 min"
                  },
                  {
                    day: "Friday",
                    tasks: ["Review week's content performance", "Note what resonated for future"],
                    time: "15 min"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="font-bold text-[#E8725A]">{item.day}</span>
                    </div>
                    <div className="flex-1">
                      <ul className="text-sm text-[#5c5c5c] space-y-1">
                        {item.tasks.map((task, j) => (
                          <li key={j} className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-16 text-right">
                      <span className="text-xs bg-[#E8725A]/10 text-[#E8725A] px-2 py-1 rounded-full">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#E8E4DC]">
                <p className="text-sm text-[#5c5c5c]">
                  <strong className="text-[#2D2D2D]">Total time:</strong> ~2.5 hours/week for 10+ content pieces
                </p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Getting Started: First Step</h2>
            
            <p className="text-[#5c5c5c] leading-relaxed mb-6">
              All of this starts with having a transcript. If you're not transcribing sermons yet, that's your first step. AI transcription makes this affordable for any church—less than $0.50 per sermon.
            </p>

            <div className="text-center mb-8">
              <Link 
                href="/transcribe" 
                className="inline-flex items-center gap-2 bg-[#E8725A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d4654f] transition-all"
              >
                Try Free — Transcribe Up to 5 Minutes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-[#5c5c5c] leading-relaxed">
              For more on getting transcripts, see our guide to <Link href="/blog/how-to-transcribe-a-sermon" className="text-[#E8725A] hover:underline">how to transcribe a sermon</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-12 bg-[#2D2D2D] rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start repurposing your sermons today
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Get your first transcript in minutes. Then turn that one sermon into weeks of content.
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
              <Link href="/blog/sermon-seo" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">Sermon SEO: How Transcripts Boost Your Church Website</h4>
                <p className="text-sm text-[#5c5c5c]">Learn how sermon transcripts improve search visibility.</p>
              </Link>
              <Link href="/blog/searchable-sermon-archive" className="p-6 bg-white rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/50 transition-colors">
                <h4 className="font-semibold text-[#2D2D2D] mb-2">How to Create a Searchable Sermon Archive</h4>
                <p className="text-sm text-[#5c5c5c]">Build a congregation-friendly sermon library.</p>
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
