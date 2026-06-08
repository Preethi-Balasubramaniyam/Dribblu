'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import heroImage from '@/assets/about/image-1.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[300px] flex items-end overflow-hidden"
      aria-label="About us hero"
    >
      <Image
        src={heroImage}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        priority
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 pt-28 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: bezier }}
          className="font-body text-[#F15A22] text-xs font-bold tracking-widest uppercase mb-4"
        >
          About Dribblu Technologies
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: bezier, delay: 0.1 }}
          className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mb-5 max-w-3xl leading-tight"
        >
          Where Creative Vision Meets{' '}
          <span className="text-[#F15A22]">Technical Excellence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: bezier, delay: 0.2 }}
          className="font-body text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed mb-8"
        >
          Dribblu Technologies is a full-service digital agency helping businesses
          build high-performing websites, apps, and brand experiences. We partner with
          ambitious teams who want more than a vendor — they want a growth-focused
          technology partner.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: bezier, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start Your Digital Transformation &raquo;
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
