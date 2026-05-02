'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RADIUS = 18
const CIRCUMFERENCE = 2 * Math.PI * RADIUS // ≈ 113.1

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0)
      setVisible(scrollTop > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A22]"
        >
          {/* Circular progress ring — starts from 12 o'clock (-rotate-90) */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
            aria-hidden="true"
          >
            {/* Track */}
            <circle
              cx="22" cy="22" r="18"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2.5"
            />
            {/* Progress arc */}
            <circle
              cx="22" cy="22" r="18"
              fill="none"
              stroke="#F15A22"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>

          {/* Orange button face — smaller than container so ring is clearly visible */}
          <div className="relative z-10 w-9 h-9 bg-[#F15A22] rounded-lg flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

