import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermon Transcription Cost Calculator — How Much Is Your Church Spending?",
  description: "Find out how much your church overpays for sermon transcription. Compare Rev.com, Otter.ai, and Sermon Transcription side-by-side. Most churches save 98%+ by switching.",
  keywords: [
    "sermon transcription cost",
    "how much does sermon transcription cost",
    "sermon transcription pricing",
    "church transcription cost calculator",
    "rev.com alternatives church",
    "cheap sermon transcription",
    "sermon transcription comparison"
  ],
  openGraph: {
    title: "Sermon Transcription Cost Calculator — How Much Is Your Church Overpaying?",
    description: "Interactive calculator: see exactly how much you spend on sermon transcription per year — and how much you could save.",
    url: "https://sermon-transcription.com/cost-calculator",
    siteName: "Sermon Transcription",
    type: "website",
  },
  alternates: {
    canonical: "/cost-calculator",
  },
};

export default function CostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
