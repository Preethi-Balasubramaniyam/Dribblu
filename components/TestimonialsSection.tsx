'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import peopleImage from '@/assets/home/image-4.png'
import worldMapImage from '@/assets/home/dotted-world-map-grey-vector-600nw-2497845621 1.jpg'
import reviewImage from '@/assets/home/review.png'

const testimonials = [
  {
    text: 'Thankyou very much for your support. We have successfully updated site in live with your Support. In journey also you gave your services to clients. Really you did Great job. Thanks alot',
    rating: 5,
  },
  {
    text: 'Working with Dribblu Technologies has been an exceptional experience. Their team is professional, creative, and always delivers on time. Highly recommend!',
    rating: 5,
  },
  {
    text: 'Dribblu Technologies transformed our online presence completely. The website they built is fast, beautiful, and ranks well on search engines.',
    rating: 5,
  },
  {
    text: 'The team at Dribblu Technologies understood our vision and brought it to life. Outstanding design and seamless development execution.',
    rating: 5,
  },
]

function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleDot = (i: number) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

  return (
    <section
      id="clients"
      className="relative py-20 bg-white overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Dotted world map background */}
      <Image
        src={worldMapImage}
        alt=""
        fill
        className="object-cover object-center opacity-60"
        aria-hidden="true"
        sizes="100vw"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[500px]">

          {/* People collage – full width */}
          <div className="absolute inset-0">
            <Image
              src={peopleImage}
              alt="Happy Dribblu Technologies clients"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Testimonial content – centered over collage */}
          <div className="relative z-10 text-center max-w-sm mx-auto px-4 py-8">

            {/* Reviewer profile image */}
            <div className="w-16 h-16 rounded-full mx-auto mb-5 shadow-md ring-2 ring-[#F15A22] overflow-hidden relative">
              <Image
                src={reviewImage}
                alt="Reviewer"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>

            {/* Animated testimonial text */}
            <div className="min-h-[100px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.5, ease: bezier }}
                  className="font-body text-gray-700 text-sm md:text-base leading-relaxed"
                >
                  {testimonials[current].text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Stars */}
            <div
              className="flex justify-center gap-1 mt-4 mb-5"
              aria-label={`Rating: ${testimonials[current].rating} out of 5 stars`}
            >
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.07, type: 'spring', stiffness: 400 }}
                >
                  <StarIcon />
                </motion.span>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => handleDot(i)}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <motion.span
                    animate={{
                      width: i === current ? 24 : 12,
                      backgroundColor: i === current ? '#F15A22' : '#9CA3AF',
                    }}
                    transition={{ duration: 0.3 }}
                    className="block h-3 rounded-full"
                    style={{ display: 'block' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
