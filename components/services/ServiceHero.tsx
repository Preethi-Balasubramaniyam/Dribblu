import Image, { StaticImageData } from 'next/image'

interface ServiceHeroProps {
  title: string
  description: React.ReactNode
  bgImage: StaticImageData | string
}

export default function ServiceHero({ title, description, bgImage }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[42vh] flex items-center overflow-hidden pt-20">
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
        sizes="100vw"
        quality={80}
      />
      {/* Hard-stop gradient: dark left → transparent right */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.30) 100%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <h1 className="font-heading text-[#F15A22] text-4xl md:text-5xl mb-5">{title}</h1>
        <div className="font-body text-gray-200 text-sm md:text-base leading-7 max-w-xl">
          {description}
        </div>
      </div>
    </section>
  )
}
