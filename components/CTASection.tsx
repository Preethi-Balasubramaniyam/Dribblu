'use client'

import AnimateOnScroll from './ui/AnimateOnScroll'

export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-20 bg-white text-center"
      aria-label="Call to action"
    >
      <div className="max-w-3xl mx-auto px-6">
        <AnimateOnScroll>
          <p className="font-heading text-[#F15A22] text-3xl md:text-4xl mb-4">
            Let&apos;s Work With Us!
          </p>
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl font-bold mb-6">
            Start Your Digital Transformation
            <br />
            With Dribblu
          </h2>
          <p className="font-body text-gray-600 text-base mb-2">
            Ready to take your business to the next level?
          </p>
          <p className="font-body text-gray-600 text-base mb-2">
            Partner with DRIBBLU for expert web design and development services.
          </p>
          <p className="font-body text-gray-600 text-base">
            Contact us today to get started and watch your online presence grow.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
