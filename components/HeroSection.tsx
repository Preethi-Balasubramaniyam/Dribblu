'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import heroImage from '@/assets/home/image-1.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Creative web design and digital innovation background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: bezier, delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-[52px] text-white leading-tight mb-6"
          >
            Bringing Your Vision to Life with Creative, Custom Web Design and
            Digital Innovation!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: bezier, delay: 0.5 }}
            className="font-body text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          >
            We provide an all-in-one web solution that combines seamless
            performance, advanced caching, and tailored web design to ensure
            your site runs fast and efficiently. From responsive design to
            robust SEO and smooth user experiences, our comprehensive services
            cover every aspect of web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: bezier, delay: 0.75 }}
          >
            <a
              href="#contact"
              className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F15A22]"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
