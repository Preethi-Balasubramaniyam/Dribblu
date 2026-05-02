import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import VisionMissionSection from '@/components/VisionMissionSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://dribblu.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured data – Organisation schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Dribblu Design',
            url: 'https://dribblu.com',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-8124921163',
              contactType: 'customer service',
            },
            sameAs: [],
          }),
        }}
      />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <VisionMissionSection />
        <CTASection />
      </main>

      <Footer />

      {/* Fixed scroll-to-top with progress ring — appears after 300 px of scroll */}
      <ScrollToTopButton />
    </>
  )
}
