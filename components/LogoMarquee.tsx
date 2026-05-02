'use client'

import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface Logo {
  src: StaticImageData
  alt: string
}

export default function LogoMarquee({ logos }: { logos: Logo[] }) {
  const doubled = [...logos, ...logos]

  return (
    <div className="marquee-wrapper overflow-hidden py-2">
      <div className="marquee-track gap-6">
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-3 w-44 h-28 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={72}
              className="object-contain max-h-16 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
