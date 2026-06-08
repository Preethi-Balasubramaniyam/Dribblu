'use client'

import Image from 'next/image'
import Link from 'next/link'
import teamImage from '@/assets/home/image-2.png'
import AnimateOnScroll from './ui/AnimateOnScroll'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: bezier } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: bezier } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: bezier } },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" aria-label="About Dribblu Technologies">
      <div className="max-w-7xl mx-auto px-6">

        <AnimateOnScroll className="text-center mb-16" variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-[#F15A22] leading-tight mb-5">
            Unlock Your Business Potential
            <br />
            with Creative Digital Solutions
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Trusted UI/UX, web design, and development partner for businesses
            ready to grow their digital presence.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          <AnimateOnScroll className="flex justify-center" variants={slideLeft}>
            <Image
              src={teamImage}
              alt="Dribblu Technologies team collaborating on web design projects"
              width={450}
              height={380}
              className="object-contain w-full max-w-md hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 90vw, 450px"
            />
          </AnimateOnScroll>

          <AnimateOnScroll variants={slideRight}>
            <p className="font-body text-gray-700 text-base leading-8 mb-8">
              <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span> is
              a professional{' '}
              <span className="text-[#F15A22] font-semibold">
                Website Design &amp; Development Company
              </span>{' '}
              dedicated to delivering innovative digital solutions. From web development
              and SEO to graphic design, UI/UX, and app development — we help brands
              stand out online with premium-quality work at{' '}
              <span className="text-[#F15A22] font-semibold">
                competitive value
              </span>
              .
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Read More &raquo;
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
