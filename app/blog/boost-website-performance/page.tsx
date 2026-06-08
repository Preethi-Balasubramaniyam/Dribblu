import type { Metadata } from 'next'
import { getBlogBySlug } from '@/lib/blog-data'
import BlogPostTemplate from '@/components/blog/BlogPostTemplate'

const blog = getBlogBySlug('boost-website-performance')!

export const metadata: Metadata = {
  title: `${blog.title} – Dribblu Technologies Blog`,
  description: blog.excerpt,
  alternates: { canonical: 'https://dribblu.com/blog/boost-website-performance' },
  openGraph: {
    title: blog.title,
    description: blog.excerpt,
    type: 'article',
    siteName: 'Dribblu Technologies',
  },
}

export default function BoostWebsitePerformancePage() {
  return <BlogPostTemplate blog={blog} />
}
