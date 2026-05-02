import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import img5 from '@/assets/services/img-5.png'
import img6 from '@/assets/services/img-6.png'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const webDesignSubs = [
  {
    title: 'UI/UX Design',
    description:
      'Seamless and intuitive user interfaces designed to enhance user experience and increase conversions.',
  },
  {
    title: 'Custom Website Design',
    description:
      'Tailored designs that reflect your brand identity, engage users, and support your business objectives.',
  },
  {
    title: 'Website Redesign',
    description:
      'Refresh your outdated website with a modern, professional look and improved functionality.',
  },
]

const webDevSubs = [
  {
    title: 'Custom Website Development',
    description:
      'Fully customized websites built from the ground up crafted to match your specific requirements and brand goals.',
  },
  {
    title: 'Web Application Development',
    description:
      'Fully customized web applications built from the ground up crafted to match your specific requirements and brand goals.',
  },
  {
    title: 'Website Maintenance & Support',
    description:
      'Ongoing technical support, updates, and security monitoring to keep your site running smoothly.',
  },
  {
    title: 'API Integration & Backend Development',
    description:
      'Seamless integration with third-party tools and services, with robust backend architecture to power your website or app.',
  },
]

export default function WebDesignServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

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
              specialize in creating visually stunning, user-friendly, and strategically designed
              websites that leave a lasting impression. We believe your website is more than just a
              digital space — it&apos;s a powerful tool to tell your story, connect with your
              audience, and drive business growth.
            </p>
            <div className="space-y-6">
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
            {/* Decorative gray ovals */}
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
              turn ideas into powerful digital solutions through robust, scalable, and
              high-performance web development. Our development team builds websites that are not
              only visually appealing but also secure, fast, and fully functional — designed to meet
              your business goals and enhance user experience.
            </p>
            <div className="space-y-6">
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

      </div>
    </section>
  )
}
