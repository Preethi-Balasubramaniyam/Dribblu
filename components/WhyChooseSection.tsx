'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import bgImage from '@/assets/home/image-3.png'
import AnimateOnScroll from './ui/AnimateOnScroll'

const features = [
  {
    title: 'Planning',
    description:
      'We first understand your business objectives and goals in order to design and our SEO strategies around them.',
  },
  {
    title: 'Maintenance',
    description:
      'We never stop holding your hand. After the launch, we stay in touch to ensure that all our efforts are bearing fruits.',
  },
  {
    title: 'Support',
    description:
      'Our team specializes in creating innovative web designs and executing effective ensuring your business stands out in the competitive market.',
  },
]

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function WhyChooseSection() {
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px 0px' })

  return (
    <section
      className="relative pt-24 pb-0 overflow-hidden"
      aria-label="Why choose Dribblu Technologies"
    >
      {/* Background – phone mockups */}
      <Image
        src={bgImage}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
        sizes="100vw"
        quality={80}
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section header */}
        <AnimateOnScroll className="text-center mb-14">
          <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-[44px] mb-5">
            Why Choose Dribblu Technologies?
          </h2>
          <p className="font-body text-white text-base md:text-lg font-bold">
            A Full-Service Digital Agency With Real
            <br className="hidden md:block" />
            Value For Your Business
          </p>
        </AnimateOnScroll>

        {/* Feature cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
          {features.map(({ title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.65, ease: bezier, delay: i * 0.13 }}
              className="bg-white rounded-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-heading text-[#F15A22] text-xl mb-3">{title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
