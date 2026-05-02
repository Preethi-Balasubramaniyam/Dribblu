import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl">
      <div className="flex-shrink-0 w-10 h-10 bg-[#F15A22] rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <p className="font-body font-bold text-gray-900 text-sm mb-1">{title}</p>
        {children}
      </div>
    </div>
  )
}

export default function ContactInfo() {
  return (
    <AnimateOnScroll
      className="bg-white rounded-2xl shadow-sm p-8 h-full"
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: bezier } },
      }}
    >
      <h2 className="font-heading text-[#F15A22] text-2xl md:text-3xl mb-8">
        Get in Touch With us
      </h2>

      <div className="flex flex-col gap-4">
        <InfoCard icon={<ClockIcon />} title="Working Hours:">
          <p className="font-body text-gray-500 text-sm">Mon-Sat 9.30 am-6.30pm</p>
        </InfoCard>

        <InfoCard icon={<PhoneIcon />} title="Phone numbers">
          <p className="font-body text-gray-500 text-sm">+91 81249 21163</p>
          <p className="font-body text-gray-500 text-sm">+91 93614 50776</p>
        </InfoCard>

        <InfoCard icon={<MailIcon />} title="E mail Address">
          <p className="font-body text-gray-500 text-sm">dribblu technology@gmail.com</p>
        </InfoCard>
      </div>
    </AnimateOnScroll>
  )
}
