import type { Metadata } from 'next'
import { getBlogBySlug } from '@/lib/blog-data'
import BlogPostTemplate from '@/components/blog/BlogPostTemplate'

const blog = getBlogBySlug('seo-backbone-digital-strategy')!

export const metadata: Metadata = {
  title: `${blog.title} – Dribblu Blog`,
  description: blog.excerpt,
  alternates: { canonical: 'https://dribblu.com/blog/seo-backbone-digital-strategy' },
  openGraph: {
    title: blog.title,
    description: blog.excerpt,
    type: 'article',
    siteName: 'Dribblu',
  },
}

export default function SeoBackbonePage() {
  return <BlogPostTemplate blog={blog} />
}
