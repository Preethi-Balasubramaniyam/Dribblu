'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import heroImage from '@/assets/home/image-1.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '8+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
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

      {/* Floating decorative shapes */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[18%] right-[8%] w-72 h-72 rounded-full border-2 border-[#F15A22]/20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-[22%] right-[11%] w-48 h-48 rounded-full border border-white/10 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[20%] left-[5%] w-32 h-32 rounded-full bg-[#F15A22]/10 pointer-events-none"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-[40%] right-[3%] w-5 h-5 rounded-full bg-[#F15A22] pointer-events-none"
        animate={{ y: [0, -24, 0], opacity: [1, 0.4, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-[30%] left-[2%] w-3 h-3 rounded-full bg-white/40 pointer-events-none"
        animate={{ y: [0, 20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-4xl">

          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: bezier, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#F15A22] animate-pulse" />
            Award-Winning Digital Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: bezier, delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-[52px] text-white leading-tight mb-6"
          >
            Bringing Your Vision to Life with{' '}
            <motion.span
              className="text-[#F15A22]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Creative,
            </motion.span>{' '}
            Custom Web Design and Digital Innovation!
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
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F15A22]"
            >
              Get Started Today
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-[#F15A22] transition-colors duration-200"
            >
              Explore Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: bezier, delay: 1.0 }}
            className="flex flex-wrap gap-8 mt-14"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: bezier, delay: 1.1 + i * 0.15 }}
                className="flex flex-col"
              >
                <span className="font-heading text-3xl text-[#F15A22] font-bold">{stat.value}</span>
                <span className="font-body text-gray-400 text-xs mt-0.5">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#services"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors duration-200"
      >
        <span className="text-[10px] font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.a>
    </section>
  )
}
