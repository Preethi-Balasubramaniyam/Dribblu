import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import img7 from '@/assets/services/img-7.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const seoServices = [
  {
    title: 'Website SEO Audit',
    description:
      'We start every engagement with a comprehensive technical and content audit — crawling your site to uncover indexation issues, broken links, duplicate content, slow load times, and missed optimisation opportunities. You receive a prioritised action plan with clear explanations and estimated impact for every recommendation.',
  },
  {
    title: 'Keyword Research & Strategy',
    description:
      'Ranking for the wrong keywords wastes budget and effort. Our research process identifies the search terms your ideal customers actually use at every stage of the buying journey — from awareness to purchase intent — and maps them to a content and landing-page strategy designed to capture and convert that traffic.',
  },
  {
    title: 'On-Page SEO',
    description:
      'We optimise title tags, meta descriptions, heading hierarchy, image alt text, internal linking, URL structure, and schema markup across every key page on your site. On-page work ensures that search engines understand your content and present it to the right audience at the right time.',
  },
  {
    title: 'Technical SEO',
    description:
      'From Core Web Vitals and mobile usability to XML sitemaps, robots.txt, canonical tags, and hreflang — we handle the full technical foundation that allows your content to be properly crawled, indexed, and ranked. Technical health is the bedrock of any successful SEO strategy.',
  },
  {
    title: 'Link Building & Off-Page SEO',
    description:
      'Domain authority is built through quality backlinks from relevant, trustworthy sources. We run outreach-based link-building campaigns, digital PR placements, guest posting, and brand mention monitoring to steadily increase your site\'s authority in your niche — using only white-hat techniques that stand the test of time.',
  },
  {
    title: 'SEO Content Creation',
    description:
      'Content that ranks must satisfy both search intent and human readers. Our SEO writers produce blog posts, pillar pages, service pages, and landing pages that are thoroughly researched, expertly structured, and written to establish your brand as the authority in your space.',
  },
  {
    title: 'Local SEO',
    description:
      'For businesses serving a specific geography, we optimise your Google Business Profile, build local citations, target location-specific keywords, and manage reviews to ensure you appear prominently in local map packs and "near me" searches.',
  },
  {
    title: 'E-Commerce SEO',
    description:
      'Online stores present unique SEO challenges — duplicate product descriptions, faceted navigation, large crawl budgets, and category architecture. We specialise in optimising e-commerce sites to increase organic product visibility and drive high-intent traffic that converts.',
  },
]

const whyPoints = [
  {
    title: 'White-Hat Only',
    text: 'Ethical, long-term SEO strategies that follow search engine guidelines — no shortcuts that put your site at risk of penalties.',
  },
  {
    title: 'Data-Driven Decisions',
    text: 'Every strategy is backed by search volume data, competitor analysis, and performance tracking. No guessing.',
  },
  {
    title: 'Fully Custom Strategies',
    text: 'No copy-paste plans. We build strategies specific to your industry, competitive landscape, and business objectives.',
  },
  {
    title: 'Transparent Monthly Reporting',
    text: 'You get clear, jargon-free monthly reports showing keyword rankings, organic traffic trends, conversions, and what we did this month.',
  },
  {
    title: 'Integrated with Your Web Presence',
    text: 'Because we also build websites, we can implement technical SEO at the code level — not just as an afterthought.',
  },
  {
    title: 'Long-Term Partnership Mindset',
    text: 'SEO compounds over time. We build relationships with clients and strategies that keep improving month after month.',
  },
]

export default function SeoServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Intro */}
        <AnimateOnScroll
          className="max-w-3xl"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <p className="font-body text-gray-600 text-sm leading-7">
            At <span className="text-[#F15A22] font-semibold">Dribblu Design Studio</span>, SEO is not a one-time task — it&apos;s an ongoing investment in long-term organic growth. We combine technical expertise, content strategy, and authoritative link building to improve your search engine visibility, drive qualified traffic, and ultimately grow your revenue without relying entirely on paid advertising.
          </p>
        </AnimateOnScroll>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {seoServices.map((svc, i) => (
            <AnimateOnScroll
              key={svc.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: bezier, delay: (i % 2) * 0.08 },
                },
              }}
            >
              <h2 className="font-heading text-[#F15A22] text-xl md:text-2xl mb-3">{svc.title}</h2>
              <p className="font-body text-gray-600 text-sm leading-7">{svc.description}</p>
            </AnimateOnScroll>
          ))}
        </div>

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
            <ul className="space-y-6">
              {whyPoints.map((pt) => (
                <li key={pt.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F15A22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#F15A22]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-heading text-gray-900 text-sm">{pt.title}</span>
                    <span className="font-body text-gray-600 text-sm leading-7"> — {pt.text}</span>
                  </div>
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
