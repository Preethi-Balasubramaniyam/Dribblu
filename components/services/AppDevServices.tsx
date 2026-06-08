import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const appServices = [
  {
    title: 'iOS App Development',
    description:
      'We build native iOS applications using Swift and SwiftUI, following Apple Human Interface Guidelines to deliver polished experiences on iPhone and iPad. Our iOS apps are optimised for the latest OS versions, App Store approval, and long-term maintainability.',
  },
  {
    title: 'Android App Development',
    description:
      'From Kotlin-based native builds to responsive layouts that work across the entire Android device ecosystem, our Android apps are engineered for performance, battery efficiency, and seamless integration with Google services.',
  },
  {
    title: 'Cross-Platform App Development',
    description:
      'Using React Native and Flutter, we develop apps that run natively on both iOS and Android from a single codebase — reducing development time and cost without sacrificing quality or platform-specific feel.',
  },
  {
    title: 'UI/UX Design for Mobile Apps',
    description:
      'User research, information architecture, interactive prototypes, and pixel-perfect UI — our designers create mobile experiences that are intuitive, accessible, and built to drive retention and engagement.',
  },
  {
    title: 'App Testing & Quality Assurance',
    description:
      'Rigorous manual and automated testing across a wide matrix of devices, OS versions, and network conditions. We test functionality, performance, security, and accessibility before every release.',
  },
  {
    title: 'Backend Development & API Integration',
    description:
      'Cloud-ready backend systems built on Node.js, with RESTful and GraphQL APIs, real-time capabilities, and integrations with payment gateways, CRMs, analytics platforms, and more.',
  },
  {
    title: 'App Store Optimisation (ASO)',
    description:
      'We optimise your app listing with keyword-rich titles and descriptions, compelling screenshots, and preview videos to maximise visibility and organic downloads in the App Store and Google Play.',
  },
  {
    title: 'App Maintenance & Continuous Improvement',
    description:
      'Post-launch support including OS compatibility updates, performance monitoring, crash analytics, user feedback integration, and iterative feature releases to keep your app competitive.',
  },
]

const processSteps = [
  { step: '01', title: 'Discovery & Scoping', desc: 'Define goals, target users, feature set, and technical requirements.' },
  { step: '02', title: 'UX Design', desc: 'Wireframes, user flows, and interactive prototypes reviewed with you before development begins.' },
  { step: '03', title: 'Development Sprints', desc: 'Agile two-week sprints with working demos at the end of each cycle.' },
  { step: '04', title: 'QA & Testing', desc: 'Full regression, performance, and security testing on real devices.' },
  { step: '05', title: 'Launch & Store Submission', desc: 'We handle the full App Store and Google Play submission process.' },
  { step: '06', title: 'Post-Launch Support', desc: 'Ongoing maintenance, monitoring, and feature development after go-live.' },
]

const techStack = [
  'React Native', 'Flutter', 'Swift / SwiftUI', 'Kotlin', 'Node.js',
  'Firebase', 'AWS', 'PostgreSQL', 'GraphQL', 'Stripe / PayPal',
]

export default function AppDevServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Intro paragraph */}
        <AnimateOnScroll
          className="max-w-3xl"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <p className="font-body text-gray-600 text-sm leading-7">
            At <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span>, we build mobile and web applications that people actually want to use. Every app we create starts with a deep understanding of your users — their needs, behaviours, and pain points — then translates that understanding into a product that is fast, intuitive, and reliable. We work with startups, established businesses, and enterprises across a wide range of industries.
          </p>
        </AnimateOnScroll>

        {/* Services grid */}
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
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#F15A22]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#F15A22]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading text-[#F15A22] text-xl md:text-2xl mb-3">
                    {svc.title}
                  </h2>
                  <p className="font-body text-gray-600 text-sm leading-7">{svc.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Process section */}
        <AnimateOnScroll
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-2 text-center">
            Our App Development Process
          </h2>
          <p className="font-body text-gray-500 text-sm text-center mb-12">
            Structured, transparent, and built around your timeline.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((p) => (
              <div key={p.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F15A22] text-white font-heading text-sm flex items-center justify-center flex-shrink-0">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-heading text-gray-900 text-base mb-1">{p.title}</h3>
                  <p className="font-body text-gray-500 text-xs leading-6">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Tech stack */}
        <AnimateOnScroll
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: bezier } },
          }}
        >
          <h2 className="font-heading text-gray-900 text-2xl md:text-3xl mb-2 text-center">
            Technologies & Platforms
          </h2>
          <p className="font-body text-gray-500 text-sm text-center mb-8">
            We choose the right stack for your project requirements — not just the popular one.
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

      </div>
    </section>
  )
}
