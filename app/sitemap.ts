import { MetadataRoute } from 'next'
import { getAllPosts } from './blog/posts'

// Standalone blog pages (created as static pages, not in posts.ts)
const standaloneBlogSlugs = [
  'best-ai-sermon-transcription-software',
  'best-sermon-transcription-services',
  'best-sermon-transcription-services-2026',
  'church-transcription-services',
  'complete-guide-sermon-transcription',
  'diy-sermon-transcription',
  'easter-sermon-ideas-reach',
  'free-vs-paid-sermon-transcription',
  'how-to-transcribe-sermons-2026',
  'human-vs-ai-sermon-transcription',
  'otter-ai-sermon-transcription',
  'otter-ai-vs-sermon-transcription',
  'repurposing-sermon-transcripts',
  'rev-com-vs-sermon-transcription',
  'sermon-to-blog-post',
  'sermon-transcription-with-timestamps',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sermon-transcription.com'
  const posts = getAllPosts()
  
  // Posts from posts.ts (dynamic [slug] route)
  const dynamicBlogPages = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Standalone blog pages
  const staticBlogPages = standaloneBlogSlugs
    .filter(slug => !posts.some(p => p.slug === slug))
    .map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date('2026-02-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/transcribe`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...dynamicBlogPages,
    ...staticBlogPages,
  ]
}
