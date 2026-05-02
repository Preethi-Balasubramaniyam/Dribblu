'use client'

import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import visionBg from '@/assets/about/image-3.png'

export default function AboutVision() {
  return (
    <section className="relative py-24 overflow-hidden" aria-label="Our vision">
      <Image
        src={visionBg}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        sizes="100vw"
        quality={80}
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <AnimateOnScroll className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="font-body text-white text-xs font-bold tracking-widest uppercase mb-5">
          Let&apos;s Work With Us!
        </p>
        <h2 className="font-heading text-[#F15A22] text-3xl md:text-4xl mb-6">
          Our Vision
        </h2>
        <p className="font-body text-white text-sm leading-8 max-w-2xl">
          At <span className="text-[#F15A22] font-semibold">DRIBBLU</span>, our vision is to
          empower businesses across the globe to achieve remarkable digital growth. We strive
          to be the leading force in SEO shaping a future where brands can seamlessly connect
          with their audiences through cutting-edge strategies and measurable success.
        </p>
      </AnimateOnScroll>
    </section>
  )
}
