import type { Metadata } from 'next'
import Link from 'next/link'
import { blogs } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog – Dribblu Design',
  description:
    'Insights on web design, SEO, app development, and graphic design from the Dribblu team.',
  alternates: { canonical: 'https://dribblu.com/blog' },
}

const categoryColors: Record<string, string> = {
  'Web Design': 'bg-orange-100 text-orange-700',
  SEO: 'bg-blue-100 text-blue-700',
  'App Development': 'bg-purple-100 text-purple-700',
  'Graphic Design': 'bg-pink-100 text-pink-700',
}

export default function BlogListingPage() {
  const [featured, ...rest] = blogs

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative bg-gray-950 pt-36 pb-20 overflow-hidden">
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #F15A22 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="font-heading text-[#F15A22] text-sm md:text-base tracking-widest uppercase mb-3">
            Our Blog
          </p>
          <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
            Ideas, Insights &amp; Inspiration
          </h1>
          <p className="font-body text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Stay ahead with expert articles on web design, SEO, app development,
            and visual storytelling.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Colourful cover */}
            <div
              className={`bg-gradient-to-br ${featured.coverColor} h-64 md:h-80 flex items-end p-8`}
            >
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  categoryColors[featured.category] ?? 'bg-white text-gray-700'
                }`}
              >
                {featured.category}
              </span>
            </div>
            <div className="p-8 md:p-10 bg-gray-50 group-hover:bg-white transition-colors duration-300">
              <p className="font-body text-gray-500 text-sm mb-3">
                {featured.date} &nbsp;·&nbsp; {featured.readTime}
              </p>
              <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-3 group-hover:text-[#F15A22] transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="font-body text-gray-600 text-base leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-body font-semibold text-[#F15A22] text-sm">
                Read Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── All Posts Grid ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-10">
            More Articles
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
              >
                {/* Cover swatch */}
                <div className={`bg-gradient-to-br ${blog.coverColor} h-44 flex items-end p-5`}>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[blog.category] ?? 'bg-white text-gray-700'
                    }`}
                  >
                    {blog.category}
                  </span>
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
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-4">
            Ready to grow your digital presence?
          </h2>
          <p className="font-body text-gray-600 text-base mb-8">
            Let Dribblu handle your web design, SEO, app development, and brand
            identity — so you can focus on what you do best.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
