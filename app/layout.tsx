import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sermon Transcription - AI-Powered Audio to Text for Churches",
  description: "Professional sermon transcription in minutes. Upload audio or video, get perfectly formatted transcripts with speaker identification and timestamps. Starting at $0.006/min - 250x cheaper than competitors.",
  keywords: "sermon transcription, church transcription, audio to text, video transcription, speech to text, automated transcription, AI transcription",
  openGraph: {
    title: "Sermon Transcription - AI-Powered Audio to Text",
    description: "Professional sermon transcription in minutes. Starting at $0.006/min.",
    url: "https://sermon-transcription.com",
    siteName: "Sermon Transcription",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermon Transcription - AI-Powered Audio to Text",
    description: "Professional sermon transcription in minutes. Starting at $0.006/min.",
  },
};

const schemaOrgJSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sermon-transcription.com/#organization",
      "name": "Sermon Transcription",
      "url": "https://sermon-transcription.com",
      "description": "AI-powered sermon transcription for churches and ministries. Convert audio to text in under 5 minutes at $0.006/min — 250× cheaper than Rev.com.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://sermon-transcription.com"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sermon-transcription.com/#website",
      "name": "Sermon Transcription",
      "url": "https://sermon-transcription.com",
      "description": "AI-powered sermon transcription for churches — 250× cheaper than Rev.com",
      "publisher": { "@id": "https://sermon-transcription.com/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://sermon-transcription.com/#software",
      "name": "Sermon Transcription",
      "url": "https://sermon-transcription.com",
      "applicationCategory": "UtilitiesApplication",
      "applicationSubCategory": "Transcription Software",
      "operatingSystem": "Web",
      "inLanguage": "en",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free — First 10 Minutes",
          "description": "First 10 minutes free with no credit card required.",
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Standard — OpenAI Whisper",
          "description": "99% accurate transcription with timestamps. TXT, SRT, VTT formats. 90+ languages. Fast processing 3-5 minutes.",
          "price": "0.006",
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://sermon-transcription.com"
        },
        {
          "@type": "Offer",
          "name": "Premium — ElevenLabs (Speaker ID)",
          "description": "99.5% accuracy with speaker diarization, entity detection, and word-level timestamps. Ideal for panel discussions and multi-speaker Q&A.",
          "price": "0.02",
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://sermon-transcription.com"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Pastor M.T." },
          "reviewBody": "Our church admin used to spend 3 hours on transcription every Sunday. Now it takes 5 minutes. The accuracy is remarkable.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Church Admin K.R." },
          "reviewBody": "I was paying Rev.com $90 per sermon. Switched to Sermon Transcription and it costs me $0.27. I genuinely can't believe this is real.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Media Director J.P." },
          "reviewBody": "We upload the SRT directly to YouTube for captions. Dead simple — upload, download, done. Huge win for our accessibility mission.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ],
      "description": "AI-powered audio-to-text transcription built for churches and ministries. Upload sermon audio, get a perfect transcript in under 5 minutes. 99.5% accuracy, multiple output formats (TXT, SRT, VTT), starting at $0.27 per 45-minute sermon — 250× cheaper than Rev.com.",
      "featureList": [
        "Lightning fast — most sermons transcribed in under 5 minutes",
        "99.5% accuracy powered by OpenAI Whisper and ElevenLabs",
        "Speaker identification with Premium tier",
        "Download as TXT, SRT, VTT, or JSON",
        "90+ languages supported",
        "Word-level timestamps",
        "No subscription required — pay as you go",
        "First 10 minutes free, no credit card required"
      ],
      "provider": { "@id": "https://sermon-transcription.com/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://sermon-transcription.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What audio formats does Sermon Transcription support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sermon Transcription supports all major audio and video formats: MP3, MP4, WAV, M4A, MOV, AAC, FLAC, OGG, and more. If you can play it, we can transcribe it."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is sermon transcription?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard tier (OpenAI Whisper) achieves 99% accuracy on clear audio. Premium tier (ElevenLabs) reaches 99.5% with better handling of accents, background noise, and multiple speakers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Standard and Premium transcription?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard uses OpenAI Whisper at $0.006/minute for fast, accurate transcription. Premium uses ElevenLabs Audio Intelligence at $0.02/minute for speaker identification (diarization), entity detection, and higher accuracy in noisy environments."
          }
        },
        {
          "@type": "Question",
          "name": "How long does sermon transcription take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most sermons process in under 5 minutes. A 45-minute sermon typically takes 3-4 minutes to transcribe."
          }
        },
        {
          "@type": "Question",
          "name": "What output formats are available for sermon transcripts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All transcripts are available in TXT (plain text), SRT (subtitles for YouTube and video), and VTT (web captions) formats. Premium tier also includes JSON with detailed metadata and word-level timestamps."
          }
        },
        {
          "@type": "Question",
          "name": "How much does sermon transcription cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sermon Transcription costs $0.006 per minute for Standard and $0.02 per minute for Premium. A typical 45-minute sermon costs $0.27 on Standard — vs $67.50 at Rev.com. First 10 minutes are free, no credit card required."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sermon Transcription cheaper than Rev.com?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Sermon Transcription is 250× cheaper than Rev.com. Rev.com charges $1.50/minute (human) or $0.25/minute (AI). Sermon Transcription charges $0.006/minute. A 45-minute sermon costs $0.27 vs $67.50 at Rev.com."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use sermon transcripts for YouTube captions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Sermon Transcription exports SRT and VTT subtitle files that upload directly to YouTube, Vimeo, or any video platform for closed captions — supporting your church's accessibility mission at no extra cost."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://sermon-transcription.com/#howto",
      "name": "How to Transcribe a Sermon with AI",
      "description": "Turn your sermon audio into a perfect transcript in under 5 minutes using AI-powered transcription.",
      "totalTime": "PT5M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0.27"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Sermon audio or video file (MP3, MP4, WAV, M4A, or similar)"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Sermon Transcription (sermon-transcription.com)"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Upload Your Sermon",
          "text": "Drag and drop your sermon audio or video file. Supports MP3, MP4, WAV, M4A, MOV, AAC, FLAC, OGG, and more.",
          "url": "https://sermon-transcription.com"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "AI Processes the Audio",
          "text": "Our AI analyzes the audio using OpenAI Whisper (Standard) or ElevenLabs (Premium), identifies speakers, generates accurate text with timestamps.",
          "url": "https://sermon-transcription.com"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Download and Use Your Transcript",
          "text": "Download your transcript in TXT, SRT, or VTT format. Use it for sermon notes, church bulletin, YouTube captions, blog posts, or ministry resources.",
          "url": "https://sermon-transcription.com"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
