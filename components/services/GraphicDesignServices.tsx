import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import img1 from '@/assets/services/img-1.png'
import img2 from '@/assets/services/img-2.jpg'
import img3 from '@/assets/services/img-3.jpg'
import img4 from '@/assets/services/img-4.jpg'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const services = [
  {
    id: 1,
    title: 'Logo Design',
    description:
      "Your logo is the face of your brand — it needs to be unforgettable. At Dribblu Technologies, we craft unique, meaningful logos that encapsulate your brand's personality, values, and vision. Our logo design process involves in-depth research into your industry, target audience, and competitors to produce a mark that genuinely sets you apart. We deliver versatile logo packages in all required formats (SVG, PNG, EPS) with full brand ownership.",
    image: img1,
    imgAlt: 'Logo design mockup',
    imageRight: true,
    highlights: [
      'Multiple initial concept directions',
      'Unlimited revisions until perfect',
      'Full vector source files included',
      'Brand guidelines document',
    ],
  },
  {
    id: 2,
    title: 'Business Card & Stationery',
    description:
      "First impressions last. A professionally designed business card and stationery suite communicates credibility and attention to detail before a single word is spoken. We design cohesive stationery sets — business cards, letterheads, envelopes, and email signatures — that are consistent with your brand identity. Every element is crafted for both print production and digital use, ensuring sharp results across all media.",
    image: img2,
    imgAlt: 'Business card design mockup',
    imageRight: false,
    highlights: [
      'Business card (front & back)',
      'Letterhead & envelope design',
      'Email signature template',
      'Print-ready CMYK files',
    ],
  },
  {
    id: 3,
    title: 'Brochure & Flyer Design',
    description:
      "Whether you need a tri-fold brochure for a trade show or a digital flyer for a social campaign, we produce marketing collateral that informs, engages, and converts. Our designers combine strategic layout, compelling copy direction, and brand-consistent visuals to create materials that communicate your offer clearly and persuasively. We deliver print-ready files as well as optimised digital versions for web and email.",
    image: img3,
    imgAlt: 'Brochure and flyer design mockup',
    imageRight: true,
    highlights: [
      'Bi-fold, tri-fold & z-fold formats',
      'Digital & print-ready versions',
      'Strategic layout for readability',
      'High-resolution image sourcing',
    ],
  },
  {
    id: 4,
    title: 'Banner & Social Media Design',
    description:
      "Online visibility depends on visuals that stop the scroll. We design eye-catching web banners, display ads, and social media graphics tailored to each platform's specifications — Instagram, Facebook, LinkedIn, Twitter/X, and more. Our designs are built to reflect your brand voice, promote your message clearly, and drive engagement. We also create cohesive social media template kits so your team can post consistently.",
    image: img4,
    imgAlt: 'Banner and social media design mockup',
    imageRight: false,
    highlights: [
      'Platform-optimised dimensions',
      'Animated banner variants (GIF/MP4)',
      'Social media post template kits',
      'Story, reel cover & highlight icons',
    ],
  },
]

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We learn about your brand, goals, and audience through a detailed brief.' },
  { step: '02', title: 'Research & Mood Board', desc: 'We explore trends, competitors, and visual directions before putting pen to paper.' },
  { step: '03', title: 'Concept Design', desc: 'We present multiple initial concepts with clear rationale for each direction.' },
  { step: '04', title: 'Refinement', desc: 'You give feedback; we refine until every detail is exactly right.' },
  { step: '05', title: 'Final Delivery', desc: 'We hand over all source files, style guides, and usage documentation.' },
]

export default function GraphicDesignServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro */}
        <AnimateOnScroll
          className="max-w-3xl mb-20"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <p className="font-body text-gray-600 text-sm leading-7">
            At <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span>, graphic design is about far more than aesthetics. Every colour choice, typeface, and composition decision communicates something about your brand. Our design team blends creativity with strategic thinking to produce visuals that not only look exceptional but also reinforce your brand identity and support your business objectives.
          </p>
        </AnimateOnScroll>

        {/* Service rows */}
        <div className="flex flex-col gap-24">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`flex flex-col md:flex-row items-start gap-10 md:gap-16 ${
                svc.imageRight ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Text */}
              <AnimateOnScroll
                className="flex-1"
                variants={{
                  hidden: { opacity: 0, x: svc.imageRight ? -40 : 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier } },
                }}
              >
                <h2 className="font-heading text-[#F15A22] text-2xl md:text-3xl mb-4">
                  {svc.title}
                </h2>
                <p className="font-body text-gray-600 text-sm leading-7 mb-6">
                  {svc.description}
                </p>
                <ul className="space-y-2">
                  {svc.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 font-body text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#F15A22]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#F15A22]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>

              {/* Image */}
              <AnimateOnScroll
                className="flex-1 flex justify-center"
                variants={{
                  hidden: { opacity: 0, x: svc.imageRight ? 40 : -40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier, delay: 0.1 } },
                }}
              >
                <div className="border border-gray-300 p-3 w-full max-w-[340px]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.imgAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 340px"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>

        {/* Process section */}
        <AnimateOnScroll
          className="mt-28"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-2 text-center">
            Our Design Process
          </h2>
          <p className="font-body text-gray-500 text-sm text-center mb-12">
            A proven, collaborative workflow that keeps you involved at every stage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="flex flex-col items-center text-center px-2">
                <div className="w-12 h-12 rounded-full bg-[#F15A22] text-white font-heading text-lg flex items-center justify-center mb-4 flex-shrink-0">
                  {p.step}
                </div>
                <h3 className="font-heading text-gray-900 text-base mb-2">{p.title}</h3>
                <p className="font-body text-gray-500 text-xs leading-6">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
