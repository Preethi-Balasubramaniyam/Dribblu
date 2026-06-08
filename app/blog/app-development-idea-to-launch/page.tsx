import type { Metadata } from 'next'
import { getBlogBySlug } from '@/lib/blog-data'
import BlogPostTemplate from '@/components/blog/BlogPostTemplate'

const blog = getBlogBySlug('app-development-idea-to-launch')!

export const metadata: Metadata = {
  title: `${blog.title} – Dribblu Technologies Blog`,
  description: blog.excerpt,
  alternates: { canonical: 'https://dribblu.com/blog/app-development-idea-to-launch' },
  openGraph: {
    title: blog.title,
    description: blog.excerpt,
    type: 'article',
    siteName: 'Dribblu Technologies',
  },
}

export default function AppDevelopmentIdeaToLaunchPage() {
  return <BlogPostTemplate blog={blog} />
}
