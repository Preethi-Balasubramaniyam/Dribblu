import type { Metadata } from 'next'
import { getBlogBySlug } from '@/lib/blog-data'
import BlogPostTemplate from '@/components/blog/BlogPostTemplate'

const blog = getBlogBySlug('custom-website-business-2026')!

export const metadata: Metadata = {
  title: `${blog.title} – Dribblu Blog`,
  description: blog.excerpt,
  alternates: { canonical: 'https://dribblu.com/blog/custom-website-business-2026' },
  openGraph: {
    title: blog.title,
    description: blog.excerpt,
    type: 'article',
    siteName: 'Dribblu',
  },
}

export default function CustomWebsiteBusiness2026Page() {
  return <BlogPostTemplate blog={blog} />
}
