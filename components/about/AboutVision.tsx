'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import visionBg from '@/assets/about/image-3.png'

export default function AboutVision() {
  return (
    <section className="relative py-24 overflow-hidden" aria-label="Our vision and mission">
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
        <p className="font-body text-[#F15A22] text-xs font-bold tracking-widest uppercase mb-5">
          Our Purpose
        </p>
        <h2 className="font-heading text-white text-3xl md:text-4xl mb-10">
          Vision &amp; Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="font-heading text-[#F15A22] text-xl mb-4">Our Vision</h3>
            <p className="font-body text-white text-sm leading-8">
              At{' '}
              <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span>,
              we envision a world where every business — regardless of size — has access
              to world-class digital experiences. We aim to be the trusted technology
              partner that empowers brands to connect authentically with their audiences
              and achieve sustained, measurable growth.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="font-heading text-[#F15A22] text-xl mb-4">Our Mission</h3>
            <p className="font-body text-white text-sm leading-8">
              Our mission is to deliver tailored digital solutions that drive traffic,
              strengthen brand presence, and increase conversions. Through innovation,
              craftsmanship, and a relentless client-first mindset, we exceed expectations
              on every web development, design, SEO, and app development engagement.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Start Your Digital Transformation &raquo;
        </Link>
      </AnimateOnScroll>
    </section>
  )
}
