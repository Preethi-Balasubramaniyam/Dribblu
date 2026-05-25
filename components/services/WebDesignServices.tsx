import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import img5 from '@/assets/services/img-5.png'
import img6 from '@/assets/services/img-6.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const webDesignSubs = [
  {
    title: 'UI/UX Design',
    description:
      'We map user journeys, create wireframes, and prototype interactions before a single line of code is written. The result is an interface that feels effortless to navigate and keeps visitors engaged from the first click.',
  },
  {
    title: 'Custom Website Design',
    description:
      'No templates — every design is built around your brand, your audience, and your goals. We combine strategic thinking with visual craft to produce sites that are both beautiful and purposeful.',
  },
  {
    title: 'Website Redesign',
    description:
      'If your current site feels dated or underperforms, we deliver a full redesign that modernises the look, improves usability, and aligns your digital presence with where your business is today.',
  },
  {
    title: 'Landing Page Design',
    description:
      'High-converting landing pages designed with persuasion principles — clear hierarchy, compelling CTAs, and minimal distractions — to turn paid or organic traffic into leads and sales.',
  },
]

const webDevSubs = [
  {
    title: 'Custom Website Development',
    description:
      'Fully custom-coded websites built on modern frameworks (Next.js, React, WordPress) for speed, security, and scalability. We own every line of code so there are no black-box plugin dependencies.',
  },
  {
    title: 'Web Application Development',
    description:
      'Complex web apps with authentication, dashboards, real-time data, and rich interactions — engineered for reliability and built to scale as your user base grows.',
  },
  {
    title: 'E-Commerce Development',
    description:
      'Full-featured online stores with smooth checkout flows, inventory management, payment gateway integration, and mobile-first design to maximise conversions and reduce cart abandonment.',
  },
  {
    title: 'Website Maintenance & Support',
    description:
      'Proactive maintenance plans that cover security patches, plugin updates, performance monitoring, uptime tracking, and priority bug fixes — so your site never lets you down.',
  },
  {
    title: 'API Integration & Backend Development',
    description:
      'Seamless third-party integrations (CRMs, payment processors, marketing tools, data feeds) backed by a robust, secure server-side architecture designed for performance under load.',
  },
]

const techStack = [
  'React / Next.js', 'TypeScript', 'Node.js', 'WordPress', 'Shopify',
  'Tailwind CSS', 'PostgreSQL / MySQL', 'AWS / Vercel', 'REST & GraphQL APIs',
]

export default function WebDesignServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* ── Web Design ── */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: text */}
          <AnimateOnScroll
            className="flex-1"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier } },
            }}
          >
            <h2 className="font-heading text-[#F15A22] text-3xl md:text-4xl mb-4">Web Design</h2>
            <p className="font-body text-gray-600 text-sm leading-7 mb-8">
              At <span className="text-[#F15A22] font-semibold">Dribblu Design Studio</span>, we
              specialise in creating visually stunning, user-friendly, and strategically designed
              websites that leave a lasting impression. Your website is more than a digital
              brochure — it&apos;s your most powerful sales tool, working for you around the clock.
              Every design decision we make is rooted in user psychology, brand strategy, and
              conversion optimisation.
            </p>
            <div className="space-y-7">
              {webDesignSubs.map((sub) => (
                <div key={sub.title}>
                  <h3 className="font-heading text-[#F15A22] text-xl mb-2">{sub.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-7">{sub.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right: device mockup with decorative blobs */}
          <AnimateOnScroll
            className="flex-1 relative flex items-center justify-center min-h-[320px]"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier, delay: 0.1 } },
            }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gray-200 rounded-full opacity-60" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-200 rounded-full opacity-50" aria-hidden="true" />
            <div className="relative z-10 w-full max-w-[380px]">
              <Image
                src={img5}
                alt="Web design shown on multiple devices"
                width={380}
                height={280}
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 90vw, 380px"
                style={{ height: 'auto' }}
              />
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Web Development ── */}
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-start">
          {/* Right: text */}
          <AnimateOnScroll
            className="flex-1"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier } },
            }}
          >
            <h2 className="font-heading text-[#F15A22] text-3xl md:text-4xl mb-4">
              Web Development
            </h2>
            <p className="font-body text-gray-600 text-sm leading-7 mb-8">
              At <span className="text-[#F15A22] font-semibold">Dribblu Design Studio</span>, we
              turn ideas into powerful digital products. Our development team builds websites that
              are not only visually compelling but also secure, fast, and engineered to scale. We
              follow clean coding standards, conduct rigorous testing, and optimise for Core Web
              Vitals — because performance is part of the product.
            </p>
            <div className="space-y-7">
              {webDevSubs.map((sub) => (
                <div key={sub.title}>
                  <h3 className="font-heading text-[#F15A22] text-xl mb-2">{sub.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-7">{sub.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Left: coding image with blobs */}
          <AnimateOnScroll
            className="flex-1 relative flex items-center justify-center min-h-[320px]"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: bezier, delay: 0.1 } },
            }}
          >
            <div className="absolute top-4 left-4 w-36 h-36 bg-gray-200 rounded-full opacity-50" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-gray-200 rounded-full opacity-40" aria-hidden="true" />
            <div className="relative z-10 w-full max-w-[360px] border border-gray-300 p-2">
              <Image
                src={img6}
                alt="Web development coding screen"
                width={360}
                height={260}
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 360px"
              />
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Technology Stack ── */}
        <AnimateOnScroll
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-2 text-center">
            Technologies We Use
          </h2>
          <p className="font-body text-gray-500 text-sm text-center mb-10">
            We select the right tool for each project — not just the fashionable one.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-gray-200 rounded-full text-sm font-body text-gray-700 hover:border-[#F15A22] hover:text-[#F15A22] transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        {/* ── Why Dribblu ── */}
        <AnimateOnScroll
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <h2 className="font-heading text-[#F15A22] text-2xl md:text-3xl mb-6">
            Why Choose Dribblu for Web Design & Development?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Design + Development Under One Roof', desc: 'No handoff friction. Our designers and developers collaborate from day one, ensuring the final build perfectly matches the approved design.' },
              { title: 'Mobile-First, Performance-Obsessed', desc: 'All our builds score in the green on Google PageSpeed. We optimise images, lazy-load assets, and use CDN delivery as standard.' },
              { title: 'SEO-Ready Architecture', desc: 'Clean semantic HTML, structured data, proper heading hierarchy, and fast load times give your new site the foundation to rank from day one.' },
              { title: 'Transparent Process & Fixed Timelines', desc: 'You get a clear project timeline, weekly progress updates, and a dedicated point of contact throughout the entire engagement.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-5 h-5 rounded-full bg-[#F15A22] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-gray-900 text-base mb-1">{item.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
