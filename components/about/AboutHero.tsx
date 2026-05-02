'use client'

import Image from 'next/image'
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: bezier }}
          className="font-heading text-[#F15A22] text-5xl md:text-6xl mb-4"
        >
          About us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: bezier, delay: 0.15 }}
          className="font-body text-white text-sm md:text-base max-w-xl leading-relaxed"
        >
          Enhance your digital presence with our website development solutions, designed to
          facilitate seamless online interactions and elevate user engagement.
        </motion.p>
      </div>
    </section>
  )
}
