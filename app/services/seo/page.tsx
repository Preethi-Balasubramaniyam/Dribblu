import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ServiceHero from '@/components/services/ServiceHero'
import SeoServices from '@/components/services/SeoServices'
import bnr3 from '@/assets/services/bnr-3.png'

export const metadata: Metadata = {
  title: 'SEO Services | Dribblu – Web Design & Digital Agency',
  description:
    'At Dribblu Design Studio, we help businesses grow their online presence and drive organic traffic through powerful, results-driven SEO strategies.',
}

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          title="Search Engine Optimization (SEO)"
          bgImage={bnr3}
          description={
            <>
              At <span className="text-[#F15A22] font-semibold">Dribblu Design Studio</span>, we
              help businesses grow their online presence and drive organic traffic through powerful,
              results-driven SEO strategies. Our expert team focuses on improving your website&apos;s
              visibility in search engines, increasing your rankings, and ultimately bringing you
              more qualified leads and conversions.
            </>
          }
        />
        <SeoServices />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
