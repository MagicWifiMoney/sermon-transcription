'use client';

import { useState } from "react";
import { Share2 } from "lucide-react";

export default function ShareButton({ title, description, slug }: { title: string; description: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `https://sermon-transcription.com/blog/${slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center gap-2 text-sm text-[#5c5c5c] hover:text-[#E8725A] transition-colors"
    >
      <Share2 className="w-4 h-4" />
      {copied ? 'Link Copied!' : 'Share'}
    </button>
  );
}
