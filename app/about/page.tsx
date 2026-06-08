import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import AboutHero from '@/components/about/AboutHero'
import AboutIntro from '@/components/about/AboutIntro'
import AboutStats from '@/components/about/AboutStats'
import AboutValues from '@/components/about/AboutValues'
import AboutVision from '@/components/about/AboutVision'
import AboutClientsStrip from '@/components/about/AboutClientsStrip'

export const metadata: Metadata = {
  title: 'About Us | Dribblu Technologies – Web Design & Digital Agency',
  description:
    'Discover Dribblu Technologies — a full-service digital agency delivering web design, development, SEO, app development, and branding solutions that drive measurable growth for ambitious businesses.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutStats />
        <AboutValues />
        <AboutVision />
        <AboutClientsStrip />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
