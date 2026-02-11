import Link from "next/link";
import { ArrowRight, ArrowLeft, FileText, Clock, CheckCircle2 } from "lucide-react";
import { getPostBySlug, getAllPosts } from "../posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FAQSection from "./FAQSection";
import ShareButton from "./ShareButton";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Sermon Transcription`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sermon-transcription.com/blog/${post.slug}`,
      siteName: "Sermon Transcription",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://sermon-transcription.com/blog/${post.slug}`,
    },
  };
}

// Markdown-like content renderer (server component)
function ContentRenderer({ content }: { content: string }) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    
    if (line.trim() === '') {
      i++;
      continue;
    }

    // H2 headers
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mt-12 mb-6">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3 headers
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-[#2D2D2D] mt-8 mb-4">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Code blocks
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={key++} className="bg-[#2D2D2D] text-white p-4 rounded-xl overflow-x-auto my-6 text-sm font-mono">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      i++;
      continue;
    }

    // Blockquotes
    if (line.startsWith('> ')) {
      const quoteLines: string[] = [line.slice(2)];
      i++;
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++} className="border-l-4 border-[#E8725A] pl-6 py-2 my-6 italic text-[#5c5c5c]">
          {quoteLines.map((q, idx) => (
            <p key={idx}>{renderInlineFormatting(q)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Tables
    if (line.includes('|') && lines[i + 1]?.includes('---')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      
      const headers = tableLines[0].split('|').map(h => h.trim()).filter(Boolean);
      const rows = tableLines.slice(2).map(row => 
        row.split('|').map(cell => cell.trim()).filter(Boolean)
      );

      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full border border-[#E8E4DC] rounded-xl overflow-hidden">
            <thead className="bg-[#2D2D2D] text-white">
              <tr>
                {headers.map((h, idx) => (
                  <th key={idx} className="py-3 px-4 text-left text-sm font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#F5F1EB]'}>
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="py-3 px-4 text-sm text-[#5c5c5c] border-t border-[#E8E4DC]">
                      {renderInlineFormatting(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 my-4 ml-6">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-[#5c5c5c]">
              <CheckCircle2 className="w-5 h-5 text-[#E8725A] flex-shrink-0 mt-0.5" />
              <span>{renderInlineFormatting(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered lists
    if (/^\d+\. /.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={key++} className="space-y-2 my-4 ml-6 list-decimal list-inside">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-[#5c5c5c]">
              <span className="ml-2">{renderInlineFormatting(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Bold section headers (like **Title**)
    if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-bold text-[#2D2D2D] mt-6 mb-2">
          {line.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (line === '---') {
      elements.push(<hr key={key++} className="my-8 border-[#E8E4DC]" />);
      i++;
      continue;
    }

    // Regular paragraphs
    elements.push(
      <p key={key++} className="text-[#5c5c5c] leading-relaxed mb-4">
        {renderInlineFormatting(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

// Inline formatting helper
function renderInlineFormatting(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let partKey = 0;

  while (remaining.length > 0) {
    // Check for links [text](/url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch && linkMatch.index === 0) {
      parts.push(
        <Link key={partKey++} href={linkMatch[2]} className="text-[#E8725A] hover:underline font-medium">
          {linkMatch[1]}
        </Link>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Check for bold **text**
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    if (boldMatch && boldMatch.index === 0) {
      parts.push(
        <strong key={partKey++} className="font-semibold text-[#2D2D2D]">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Check for inline code `text`
    const codeMatch = remaining.match(/`([^`]+)`/);
    if (codeMatch && codeMatch.index === 0) {
      parts.push(
        <code key={partKey++} className="bg-[#E8E4DC] px-1.5 py-0.5 rounded text-sm font-mono text-[#2D2D2D]">
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Find the next special character or end
    const nextSpecial = remaining.search(/\[|\*\*|`/);
    if (nextSpecial === -1) {
      parts.push(<span key={partKey++}>{remaining}</span>);
      break;
    } else if (nextSpecial === 0) {
      // No match at start but special char found - take one char and continue
      parts.push(<span key={partKey++}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    } else {
      parts.push(<span key={partKey++}>{remaining.slice(0, nextSpecial)}</span>);
      remaining = remaining.slice(nextSpecial);
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

  // Generate FAQ Schema
  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Sermon Transcription"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sermon Transcription",
      "url": "https://sermon-transcription.com"
    }
  };

  // Get related posts (other posts, max 3)
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Schema.org JSON-LD */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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

      {/* Article */}
      <article className="pt-28 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-[#5c5c5c]">
            <Link href="/" className="hover:text-[#E8725A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#E8725A]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2D2D2D]">{post.title}</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium">
                <FileText className="w-4 h-4" />
                <span>{post.category}</span>
              </span>
              <span className="flex items-center gap-1 text-sm text-[#5c5c5c]">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-[#5c5c5c] leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-[#5c5c5c]">
                Updated {new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <ShareButton title={post.title} description={post.description} slug={post.slug} />
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom">
            <ContentRenderer content={post.content} />
          </div>

          {/* FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <FAQSection faqs={post.faqs} />
          )}

          {/* CTA Box */}
          <div className="mt-16 p-8 md:p-12 bg-[#2D2D2D] rounded-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transcribe your sermons?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Try it free — transcribe up to 5 minutes at no cost. See the quality for yourself.
            </p>
            <Link 
              href="/transcribe" 
              className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
            >
              Start Free Transcription
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/50 text-sm mt-4">No credit card required</p>
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#5c5c5c] hover:text-[#E8725A] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 lg:px-8 bg-white border-t border-[#E8E4DC]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <article key={relPost.slug} className="group">
                  <Link href={`/blog/${relPost.slug}`}>
                    <span className="text-xs text-[#E8725A] font-medium">{relPost.category}</span>
                    <h3 className="font-bold text-[#2D2D2D] mt-1 group-hover:text-[#E8725A] transition-colors line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-sm text-[#5c5c5c] mt-2 line-clamp-2">{relPost.description}</p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6">
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
