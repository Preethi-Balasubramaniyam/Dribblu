'use client'

import Link from 'next/link'
import Image from 'next/image'
import { blogs } from '@/lib/blog-data'
import AnimateOnScroll from './ui/AnimateOnScroll'

const categoryColors: Record<string, string> = {
  'Web Design': 'bg-orange-100 text-orange-700',
  SEO: 'bg-blue-100 text-blue-700',
  'App Development': 'bg-purple-100 text-purple-700',
  'Graphic Design': 'bg-pink-100 text-pink-700',
}

const preview = blogs.slice(0, 3)

export default function BlogsSection() {
  return (
    <section id="blogs" className="bg-gray-50 py-20" aria-label="Blog preview">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll className="mb-12 text-center">
          <p className="font-heading text-[#F15A22] text-sm tracking-widest uppercase mb-2">
            From Our Blog
          </p>
          <h2 className="font-heading text-gray-900 text-3xl md:text-4xl mb-4">
            Ideas &amp; Insights
          </h2>
          <p className="font-body text-gray-500 text-base max-w-lg mx-auto">
            Expert articles on web design, SEO, app development, and graphic
            design — straight from the Dribblu team.
          </p>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((blog, i) => (
            <AnimateOnScroll key={blog.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${blog.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 h-full"
              >
                {/* Cover image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        categoryColors[blog.category] ?? 'bg-white text-gray-700'
                      }`}
                    >
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <p className="font-body text-gray-400 text-xs mb-2">
                    {blog.date} &nbsp;·&nbsp; {blog.readTime}
                  </p>
                  <h3 className="font-heading text-gray-900 text-lg leading-snug mb-3 group-hover:text-[#F15A22] transition-colors duration-200 flex-1">
                    {blog.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#F15A22] text-sm font-semibold font-body">
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View all */}
        <AnimateOnScroll className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block border-2 border-[#F15A22] text-[#F15A22] font-semibold px-8 py-3 rounded hover:bg-[#F15A22] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200"
          >
            View All Articles
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
