import type { Metadata } from 'next'
import { getBlogBySlug } from '@/lib/blog-data'
import BlogPostTemplate from '@/components/blog/BlogPostTemplate'

const blog = getBlogBySlug('graphic-design-builds-brand-identity')!

export const metadata: Metadata = {
  title: `${blog.title} – Dribblu Blog`,
  description: blog.excerpt,
  alternates: { canonical: 'https://dribblu.com/blog/graphic-design-builds-brand-identity' },
  openGraph: {
    title: blog.title,
    description: blog.excerpt,
    type: 'article',
    siteName: 'Dribblu',
  },
}

export default function GraphicDesignBrandIdentityPage() {
  return <BlogPostTemplate blog={blog} />
}
