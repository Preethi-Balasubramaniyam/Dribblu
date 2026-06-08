'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import bgImage from '@/assets/home/image-3.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function VisionMissionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section className="relative pb-24 overflow-hidden" aria-label="Our vision and mission">
      {/* Same phone-mockup bg — visually continues the WhyChoose dark section */}
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        sizes="100vw"
        quality={80}
      />
      {/* Slightly lighter overlay than WhyChoose (black/70) to create subtle depth */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: bezier }}
            className="bg-white rounded-xl p-8 lg:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="font-heading text-[#F15A22] text-2xl mb-5">Our Vision</h2>
            <p className="font-body text-gray-700 text-sm leading-8">
              At <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span>, our vision is to
              empower businesses across the globe to achieve remarkable digital growth. We strive
              to be the leading force in SEO shaping a future where brands can seamlessly connect
              with their audiences through cutting-edge strategies and measurable success.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: bezier, delay: 0.12 }}
            className="bg-white rounded-xl p-8 lg:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="font-heading text-[#F15A22] text-2xl mb-5">Our Mission</h2>
            <p className="font-body text-gray-700 text-sm leading-8">
              Our mission is to provide tailored digital solutions that drive traffic, enhance
              online visibility, and boost conversion rates. Through innovation, dedication, and
              a client-first approach, we aim to deliver impactful results in SEO and web
              development services that exceed client expectations.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
