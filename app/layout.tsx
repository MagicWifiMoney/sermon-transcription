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
  "@type": "SoftwareApplication",
  "name": "Sermon Transcription",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0.006",
    "priceCurrency": "USD",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://sermon-transcription.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "description": "Professional AI-powered sermon transcription service. Upload audio or video sermons and get perfectly formatted transcripts with speaker identification, timestamps, and multiple export formats in minutes. Starting at $0.006 per minute - 250x cheaper than competitors.",
  "featureList": [
    "Automatic speech recognition for sermons",
    "Speaker identification and labeling",
    "Timestamp generation",
    "Multiple export formats (TXT, SRT, VTT, DOCX)",
    "High accuracy with church terminology",
    "Fast processing (60-minute sermon in ~5 minutes)",
    "Affordable pricing ($0.006/min)",
    "Web-based platform",
    "No software installation required"
  ],
  "applicationSubCategory": "Transcription Software",
  "keywords": "sermon transcription, church transcription, audio to text, video transcription, speech to text, automated transcription, AI transcription",
  "provider": {
    "@type": "Organization",
    "name": "Sermon Transcription",
    "url": "https://sermon-transcription.com"
  }
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
