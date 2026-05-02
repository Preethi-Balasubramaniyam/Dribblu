import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const appServices = [
  {
    title: 'iOS App Development',
    description:
      'Native iOS applications designed for iPhone and iPad using Swift and the latest Apple technologies.',
  },
  {
    title: 'Android App Development',
    description:
      'Custom Android apps built for performance and compatibility across a wide range of devices.',
  },
  {
    title: 'UI/UX Design for Mobile Apps',
    description:
      'User-first designs that are clean, functional, and engaging to keep users coming back.',
  },
  {
    title: 'App Testing & QA',
    description:
      'Rigorous testing for performance, security, and usability across multiple devices and platforms.',
  },
  {
    title: 'Backend Development & API Integration',
    description:
      "Secure, cloud-ready backend systems with third-party API integration to power your app's functionality.",
  },
  {
    title: 'App Maintenance & Support',
    description:
      'Continuous support, updates, and feature enhancements to keep your app running smoothly post-launch.',
  },
]

export default function AppDevServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {appServices.map((svc, i) => (
            <AnimateOnScroll
              key={svc.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: bezier, delay: (i % 2) * 0.1 },
                },
              }}
            >
              <h2 className="font-heading text-[#F15A22] text-xl md:text-2xl mb-3">
                {svc.title}
              </h2>
              <p className="font-body text-gray-600 text-sm leading-7">{svc.description}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
