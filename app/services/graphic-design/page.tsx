import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ServiceHero from '@/components/services/ServiceHero'
import GraphicDesignServices from '@/components/services/GraphicDesignServices'
import bnr from '@/assets/services/bnr.png'

export const metadata: Metadata = {
  title: 'Graphic Design Services | Dribblu Technologies – Digital Agency',
  description:
    'At Dribblu Technologies, we bring your brand to life through creative, impactful, and visually stunning graphic design solutions.',
}

export default function GraphicDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          title="Graphic Design"
          bgImage={bnr}
          description={
            <>
              At <span className="text-[#F15A22] font-semibold">Dribblu Technologies</span>, we
              bring your brand to life through creative, impactful, and visually stunning graphic
              design solutions. Our team of skilled designers combines strategy, creativity, and
              technology to craft compelling visuals that communicate your message and elevate your
              brand identity.
            </>
          }
        />
        <GraphicDesignServices />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
