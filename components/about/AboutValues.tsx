'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const values = [
  {
    title: 'Strategy-Led Delivery',
    description:
      'Every project starts with your business goals. We align design, development, and marketing around outcomes — not just deliverables.',
  },
  {
    title: 'Transparent Partnership',
    description:
      'Clear timelines, honest communication, and regular progress updates. You always know where your project stands and what comes next.',
  },
  {
    title: 'Quality Without Compromise',
    description:
      'From pixel-perfect UI to clean, performant code, we hold every detail to a high standard so your brand looks and works its best.',
  },
  {
    title: 'Long-Term Growth Focus',
    description:
      'We build digital assets designed to scale — SEO-ready architecture, maintainable codebases, and brand systems that evolve with you.',
  },
]

export default function AboutValues() {
  return (
    <section className="py-20 bg-white" aria-label="What sets Dribblu Technologies apart">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-14">
          <p className="font-body text-[#F15A22] text-xs font-bold tracking-widest uppercase mb-3">
            Why Clients Choose Us
          </p>
          <h2 className="font-heading text-gray-900 text-3xl md:text-4xl mb-4">
            Built on Trust, Driven by Results
          </h2>
          <p className="font-body text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Dribblu Technologies combines creative excellence with technical depth —
            helping businesses launch, grow, and lead in competitive digital markets.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <AnimateOnScroll
              key={item.title}
              delay={i * 0.1}
              className="bg-gray-50 rounded-xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-heading text-[#F15A22] text-lg mb-3">{item.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
