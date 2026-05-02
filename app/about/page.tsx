import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import AboutHero from '@/components/about/AboutHero'
import AboutIntro from '@/components/about/AboutIntro'
import AboutVision from '@/components/about/AboutVision'
import AboutClientsStrip from '@/components/about/AboutClientsStrip'

export const metadata: Metadata = {
  title: 'About Us | Dribblu – Web Design & Digital Agency',
  description:
    'Learn about Dribblu Designs — a dynamic custom web development company offering logo design, website design, branding and digital marketing solutions.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutVision />
        <AboutClientsStrip />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
