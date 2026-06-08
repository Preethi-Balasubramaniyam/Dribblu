'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import teamImage from '@/assets/about/image-2.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: bezier } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: bezier } },
}

const capabilities = [
  'Custom Web Design & Development',
  'Mobile & Web App Development',
  'Search Engine Optimisation (SEO)',
  'UI/UX Design & Brand Identity',
  'Graphic Design & Digital Marketing',
]

export default function AboutIntro() {
  return (
    <section className="py-20 bg-white" aria-label="About Dribblu Technologies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <AnimateOnScroll variants={slideLeft}>
            <p className="font-body text-[#F15A22] text-xs font-bold tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-gray-900 text-3xl md:text-4xl mb-6">
              Your Partner for End-to-End Digital Growth
            </h2>
            <p className="font-body text-gray-700 text-sm leading-8 mb-5">
              Founded on the belief that great digital products require both creative
              craft and engineering rigour,{' '}
              <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span>{' '}
              delivers solutions that look exceptional and perform flawlessly. We work
              with startups, SMEs, and established brands across industries to turn ideas
              into products that attract, engage, and convert.
            </p>
            <p className="font-body text-gray-700 text-sm leading-8 mb-6">
              Our team brings together designers, developers, and strategists under one
              roof — eliminating handoff friction and ensuring every pixel, line of code,
              and marketing decision supports your business objectives.
            </p>
            <ul className="space-y-2.5 mb-8">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-gray-700 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F15A22] mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Let&apos;s Work Together &raquo;
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll variants={slideRight}>
            <div className="relative w-full max-w-lg mx-auto" style={{ height: '380px' }}>
              <div className="absolute top-0 left-10 right-0 bottom-5 rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-10">
                <Image
                  src={teamImage}
                  alt="Dribblu Technologies creative team at work"
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}
