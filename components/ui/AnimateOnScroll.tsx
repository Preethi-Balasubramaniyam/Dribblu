'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
}

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: bezier },
  },
}

export default function AnimateOnScroll({
  children,
  className,
  variants = defaultVariants,
  delay = 0,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
