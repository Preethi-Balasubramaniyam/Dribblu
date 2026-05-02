'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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
    <section id="about" className="py-20 bg-white" aria-label="About Dribblu">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <AnimateOnScroll className="text-center mb-16" variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-[#F15A22] leading-tight mb-5">
            Unlock the potential of your business
            <br />
            with our creative design
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Are you looking for Trusted UI/UX Company&nbsp; for your Business,
            also providing Web Designing &amp; Development.
          </p>
        </AnimateOnScroll>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left – team photo slides in from left */}
          <AnimateOnScroll className="flex justify-center" variants={slideLeft}>
            <Image
              src={teamImage}
              alt="Dribblu team collaborating on web design projects"
              width={450}
              height={380}
              className="object-contain w-full max-w-md hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 90vw, 450px"
            />
          </AnimateOnScroll>

          {/* Right – text slides in from right */}
          <AnimateOnScroll variants={slideRight}>
            <p className="font-body text-gray-700 text-base leading-8 mb-8">
              <span className="text-[#F15A22] font-semibold">Dribblu</span> is
              a Professional&nbsp;
              <span className="text-[#F15A22] font-semibold">
                Website Design &amp; Development Company
              </span>
              , Dedicated to Delivering Innovative Digital Solutions. Web
              Development and Digital Marketing Services including Search Engine
              Optimization (SEO), Graphics &amp; Banner, Brochure Design, etc.
              Our aim to make it more best customers with satisfaction. We
              Provide Premium Quality IT services to Our Clients Through Latest
              Technologies @&nbsp;
              <span className="text-[#F15A22] font-semibold">
                Affordable Cost
              </span>
              .
            </p>
            <a
              href="#about"
              className="inline-block bg-[#F15A22] text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Read More &raquo;
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
