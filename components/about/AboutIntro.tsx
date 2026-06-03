'use client'

import Image from 'next/image'
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

export default function AboutIntro() {
  return (
    <section className="py-20 bg-white" aria-label="About Dribblu">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <AnimateOnScroll variants={slideLeft}>
            <h2 className="font-heading text-[#F15A22] text-3xl md:text-4xl mb-6">
              About&nbsp;Dribblu
            </h2>
            <p className="font-body text-gray-700 text-sm leading-8">
              Dribblu Designs is a dynamic custom web development services company that goes
              beyond the boundaries of coding, offering a comprehensive suite of services
              including logo design, captivating website design, impactful branding, and
              effective digital marketing strategies. From pixel-perfect websites to cohesive
              brand identities, they are your one-stop solution for all your online presence
              needs.
            </p>
          </AnimateOnScroll>

          {/* Overlapping image stack */}
          <AnimateOnScroll variants={slideRight}>
            <div className="relative w-full max-w-lg mx-auto" style={{ height: '380px' }}>
              {/* Back card */}
              {/* <div className="absolute top-5 left-0 right-10 bottom-0 rounded-2xl overflow-hidden border-4 border-white shadow-lg z-0">
                <Image
                  src={teamImage}
                  alt="Dribblu team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 450px"
                />
              </div> */}
              {/* Front card */}
              <div className="absolute top-0 left-10 right-0 bottom-5 rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-10">
                <Image
                  src={teamImage}
                  alt="Dribblu creative work"
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
