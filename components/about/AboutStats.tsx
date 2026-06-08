'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '8+', label: 'Years of Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Brands Partnered' },
]

export default function AboutStats() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Dribblu Technologies at a glance">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-12">
          <p className="font-body text-[#F15A22] text-xs font-bold tracking-widest uppercase mb-3">
            Trusted by Growing Businesses
          </p>
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl">
            Results That Speak for Themselves
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-heading text-[#F15A22] text-4xl md:text-5xl mb-2">{stat.value}</p>
              <p className="font-body text-gray-600 text-sm">{stat.label}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
