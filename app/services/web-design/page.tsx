import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ServiceHero from '@/components/services/ServiceHero'
import WebDesignServices from '@/components/services/WebDesignServices'
import bnr2 from '@/assets/services/bnr-2.png'

export const metadata: Metadata = {
  title: 'Web Design & Development | Dribblu Technologies – Digital Agency',
  description:
    'At Dribblu Technologies, we build modern, responsive, and user-centric websites that help your business stand out in the digital world.',
}

export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          title="Web Design & Development"
          bgImage={bnr2}
          description={
            <>
              At <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span>, we
              build modern, responsive, and user-centric websites that help your business stand out
              in the digital world. Our web design and development services are tailored to deliver
              seamless user experiences, strong functionality, and visually captivating designs.
            </>
          }
        />
        <WebDesignServices />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
