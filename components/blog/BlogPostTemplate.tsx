import Link from 'next/link'
import Image from 'next/image'
import type { Blog } from '@/lib/blog-data'
import { blogs } from '@/lib/blog-data'

const categoryColors: Record<string, string> = {
  'Web Design': 'bg-orange-100 text-orange-700',
  SEO: 'bg-blue-100 text-blue-700',
  'App Development': 'bg-purple-100 text-purple-700',
  'Graphic Design': 'bg-pink-100 text-pink-700',
}

export default function BlogPostTemplate({ blog }: { blog: Blog }) {
  const related = blogs
    .filter((b) => b.slug !== blog.slug && b.category === blog.category)
    .slice(0, 2)

  const others =
    related.length < 2
      ? [
          ...related,
          ...blogs
            .filter((b) => b.slug !== blog.slug && !related.includes(b))
            .slice(0, 2 - related.length),
        ]
      : related

  return (
    <>
      {/* ── Hero banner ── */}
      <div className={`bg-gradient-to-br ${blog.coverColor} pt-36 pb-16 px-6`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm font-body transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M13 8H3M7 4L3 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All Articles
            </Link>
            <span className="text-white/40">·</span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                categoryColors[blog.category] ?? 'bg-white text-gray-700'
              }`}
            >
              {blog.category}
            </span>
          </div>

          <h1 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
            {blog.title}
          </h1>

          <p className="font-body text-white/70 text-sm">
            {blog.date}&nbsp;·&nbsp;{blog.readTime}
          </p>
        </div>
      </div>

      {/* ── Cover Image ── */}
      <section className="bg-white pt-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Article excerpt lead ── */}
      <section className="bg-white pt-12 pb-4">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-body text-lg text-gray-500 italic border-l-4 border-[#F15A22] pl-5 leading-8">
            {blog.excerpt}
          </p>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="bg-white py-10">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="
              font-body text-gray-700 text-base leading-8
              prose prose-headings:font-heading prose-headings:text-gray-900
              prose-h2:text-xl prose-h2:md:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:mb-5 prose-a:text-[#F15A22] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
              max-w-none
            "
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </div>
      </section>

      {/* ── Related Posts ── */}
      {others.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-8">
              More from Our Blog
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {others.map((b) => (
                <Link
                  key={b.slug}
                  href={`/blog/${b.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={b.coverImage}
                      alt={b.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          categoryColors[b.category] ?? 'bg-white text-gray-700'
                        }`}
                      >
                        {b.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <p className="font-body text-gray-400 text-xs mb-2">
                      {b.date}&nbsp;·&nbsp;{b.readTime}
                    </p>
                    <h3 className="font-heading text-gray-900 text-lg leading-snug group-hover:text-[#F15A22] transition-colors duration-200 mb-2">
                      {b.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {b.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-4">
            Want results like these for your business?
          </h2>
          <p className="font-body text-gray-600 text-base mb-8">
            Dribblu delivers custom web design, SEO, app development, and graphic
            design — all under one roof.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
