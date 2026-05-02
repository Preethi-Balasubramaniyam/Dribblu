'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import p1 from '@/assets/clients/image-1.png'
import p2 from '@/assets/clients/image-2.png'
import p3 from '@/assets/clients/image-3.png'
import p4 from '@/assets/clients/image-4.png'
import p5 from '@/assets/clients/image-5.png'
import p6 from '@/assets/clients/image-6.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const filters = ['All', 'Logo', 'UX/UI', 'Web Development', 'App Development']

const projects = [
  { id: 1, name: "Kavi's Naturals",  category: 'Web Development', image: p1 },
  { id: 2, name: 'College Step',      category: 'Web Development', image: p2 },
  { id: 3, name: 'Kasturi Mart',      category: 'Web Development', image: p3 },
  { id: 4, name: 'Zebra Sign World',  category: 'UX/UI',           image: p4 },
  { id: 5, name: 'Red Carpet Events', category: 'Web Development', image: p5 },
  { id: 6, name: 'Gugan Dental Care', category: 'App Development', image: p6 },
]

export default function ClientsPortfolio() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="max-w-7xl mx-auto px-6">

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-6 mb-12 border-b border-gray-200 pb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`font-body text-sm font-medium pb-1 transition-colors duration-200 ${
              active === f
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: bezier }}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="px-5 py-4 border-t border-gray-100">
                <h3 className="font-body font-bold text-gray-900 text-base">{project.name}</h3>
                <p className="font-body text-gray-400 text-xs mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <p className="text-center text-gray-400 font-body py-16">
          No projects in this category yet.
        </p>
      )}
    </div>
  )
}
