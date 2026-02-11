import Link from "next/link";
import { ArrowRight, FileText, Clock } from "lucide-react";
import { getAllPosts } from "./posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermon Transcription Blog | Guides, Tips & Resources",
  description: "Expert guides on sermon transcription for churches. Learn how to transcribe sermons, compare free tools, understand pricing, and make your messages accessible.",
  openGraph: {
    title: "Sermon Transcription Blog | Guides, Tips & Resources",
    description: "Expert guides on sermon transcription for churches. Learn how to transcribe sermons, compare free tools, understand pricing, and make your messages accessible.",
    url: "https://sermon-transcription.com/blog",
    siteName: "Sermon Transcription",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermon Transcription Blog",
    description: "Expert guides on sermon transcription for churches.",
  },
  alternates: {
    canonical: "https://sermon-transcription.com/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
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

          <div className="hidden md:flex items-center gap-10">
            <Link href="/#how-it-works" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">How It Works</Link>
            <Link href="/#pricing" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Pricing</Link>
            <Link href="/blog" className="text-sm text-[#2D2D2D] font-medium">Blog</Link>
          </div>

          <Link href="/transcribe" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
            Start Transcribing
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            <span>Resources for Churches</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon Transcription Blog
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed max-w-2xl mx-auto">
            Expert guides on transcription methods, tools, accessibility, and making the most of your sermon content.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden hover:shadow-xl hover:shadow-[#2D2D2D]/5 transition-all hover:border-[#E8725A]/30 group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#5c5c5c]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#E8725A] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-[#5c5c5c] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#E8725A] font-medium text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transcribe your sermons?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Try it free — transcribe up to 5 minutes at no cost. See the quality for yourself.
          </p>
          <Link 
            href="/transcribe" 
            className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
          >
            Start Free Transcription
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/50 text-sm mt-4">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M15 0h10v15h15v10h-15v15h-10v-15h-15v-10h15z" fill="white" />
                  <path d="M18 16 L26 20 L18 24 Z" fill="#E8725A" />
                </svg>
              </div>
              <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Transcription</span></span>
            </Link>
            
            <div className="flex items-center gap-8 text-sm">
              <Link href="/transcribe" className="hover:text-white transition-colors">Transcribe</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
            
            <p className="text-sm">&copy; 2026 Sermon Transcription</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
