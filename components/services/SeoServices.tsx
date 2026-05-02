import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import img7 from '@/assets/services/img-7.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const seoServices = [
  {
    title: 'Website SEO Audit',
    description:
      'Comprehensive analysis to identify technical issues, on-page optimization opportunities, and performance gaps.',
  },
  {
    title: 'On-Page SEO',
    description:
      'Optimization of meta tags, headers, content, internal linking, and URL structure for better search engine indexing.',
  },
  {
    title: 'SEO Content Creation',
    description:
      'SEO-friendly blog posts, landing pages, and web copy that improve relevance and engagement.',
  },
]

const whyPoints = [
  {
    text: 'White-Hat Techniques – Ethical, long-term SEO strategies aligned with search engine guidelines.',
  },
  {
    text: 'Data-Driven Approach – SEO backed by in-depth analytics and performance tracking.',
  },
  {
    text: 'Custom SEO Plans – Strategies tailored to your industry, competition, and business objectives.',
  },
  {
    text: 'Transparent Reporting – Monthly reports with clear metrics on rankings, traffic, and performance.',
  },
]

function SearchIcon() {
  return (
    <svg
      className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  )
}

export default function SeoServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Basic service items – full width text */}
        {seoServices.map((svc, i) => (
          <AnimateOnScroll
            key={svc.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: bezier, delay: i * 0.05 },
              },
            }}
          >
            <h2 className="font-heading text-[#F15A22] text-2xl md:text-3xl mb-3">{svc.title}</h2>
            <p className="font-body text-gray-600 text-sm leading-7">{svc.description}</p>
          </AnimateOnScroll>
        ))}

        {/* Why SEO with Dribblu – text left + image right */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start pt-4">
          {/* Left: text + bullet list */}
          <AnimateOnScroll
            className="flex-1"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier } },
            }}
          >
            <h2 className="font-heading text-[#F15A22] text-2xl md:text-3xl mb-6">
              Why SEO with Dribblu Design Studio?
            </h2>
            <ul className="space-y-5">
              {whyPoints.map((pt) => (
                <li key={pt.text} className="flex items-start gap-3">
                  <SearchIcon />
                  <p className="font-body text-gray-600 text-sm leading-7">{pt.text}</p>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Right: image with decorative blobs */}
          <AnimateOnScroll
            className="flex-1 relative flex items-center justify-center min-h-[300px]"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier, delay: 0.1 } },
            }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gray-200 rounded-full opacity-60" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-gray-200 rounded-full opacity-40" aria-hidden="true" />
            <div className="relative z-10 w-full max-w-[340px] border border-gray-300 p-2">
              <Image
                src={img7}
                alt="SEO strategy illustration"
                width={340}
                height={260}
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 340px"
              />
            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </section>
  )
}
