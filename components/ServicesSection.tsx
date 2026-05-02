'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import iconImage from '@/assets/home/icon-1.png'
import bgImage from '@/assets/home/image-3.png'
import AnimateOnScroll from './ui/AnimateOnScroll'

const services = [
  {
    title: 'Graphic Design',
    description:
      "We value them most since they are your Brand's bearer We give you the relative design for your brand or Business..",
  },
  {
    title: 'Web Design & Development',
    description:
      "We're web design company, our web design team creates custom designs that are UI/UX focused..",
  },
  {
    title: 'App Development',
    description:
      'We provide rich and Interactive experience by our Advanced Standards..',
  },
  {
    title: 'Search Engine Optimization ( SEO )',
    description:
      'Search engine optimization (SEO) drives targeted traffic to your site by ..',
  },
  {
    title: 'E com Web Development',
    description:
      'Redias a trusted name for providing assistants. Initially their main objective was to ensure service..',
  },
]

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

function ServiceCard({
  title,
  description,
  index,
  inView,
}: {
  title: string
  description: string
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      className="relative pt-7"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: bezier, delay: index * 0.12 }}
    >
      {/* Icon badge — centered at top of card */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#F15A22] rounded-xl flex items-center justify-center shadow-lg z-10"
        aria-hidden="true"
      >
        <Image src={iconImage} alt="" width={28} height={28} className="brightness-0 invert" />
      </div>

      {/* Card body */}
      <div className="bg-white rounded-xl pt-10 pb-6 px-6 h-full flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <h3 className="font-heading text-[#F15A22] text-lg mb-3">{title}</h3>
        <p className="font-body text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
        <a
          href="#services"
          className="inline-block mt-4 text-gray-800 text-sm font-medium hover:text-[#F15A22] transition-colors duration-200"
        >
          View More &rarr;
        </a>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const topRef = useRef(null)
  const bottomRef = useRef(null)
  const topInView = useInView(topRef, { once: true, margin: '-60px 0px' })
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px 0px' })

  return (
    <section id="services" className="relative overflow-hidden" aria-label="Our services">

      {/* Full-section background — image-3 */}
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        sizes="100vw"
        quality={80}
      />

      {/*
        Split overlay:
        – top 25 % → solid white  (covers image → clean white header zone)
        – bottom 75 % → dark semi-transparent overlay (image shows through)
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, #ffffff 25%, rgba(0,0,0,0.82) 25%, rgba(0,0,0,0.82) 100%)',
        }}
        aria-hidden="true"
      />

      {/* All content sits above both bg layers */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20">

        {/* Section header — sits in the white zone */}
        <AnimateOnScroll className="text-center mb-20">
          <p className="font-heading text-[#F15A22] text-2xl mb-3">What We Do</p>
          <h2 className="font-heading text-gray-900 text-3xl md:text-4xl lg:text-[40px]">
            Start Your Creative Business
            <br />
            With Dribblu
          </h2>
        </AnimateOnScroll>

        {/* Row 1 — 3 cards (icon badges sit in white zone, bodies straddle into dark zone) */}
        <div
          ref={topRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-10"
        >
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} inView={topInView} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered, fully in dark zone */}
        <div
          ref={bottomRef}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          {services.slice(3).map((s, i) => (
            <div key={s.title} className="w-full sm:w-[340px]">
              <ServiceCard {...s} index={i} inView={bottomInView} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block bg-[#F15A22] text-white font-semibold px-12 py-3 rounded hover:bg-orange-600 transition-colors duration-200"
          >
            Request&nbsp;Call
          </motion.a>
        </div>
      </div>
    </section>
  )
}
