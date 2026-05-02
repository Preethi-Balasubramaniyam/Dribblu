import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import LogoMarquee from '@/components/LogoMarquee'
import logo1 from '@/assets/about/logo-1.png'
import logo2 from '@/assets/about/logo-2.png'
import logo3 from '@/assets/about/logo-3.png'
import logo4 from '@/assets/about/logo-4.png'
import logo5 from '@/assets/about/logo-5.png'
import logo6 from '@/assets/about/logo-6.png'

const logos = [
  { src: logo1, alt: 'Batch 1 Healthcare' },
  { src: logo2, alt: "KaVi's" },
  { src: logo3, alt: 'College Step' },
  { src: logo4, alt: 'Kasturi Mart' },
  { src: logo5, alt: 'Zebra Sign World' },
  { src: logo6, alt: 'Red Carpet Events' },
]

export default function AboutClientsStrip() {
  return (
    <section className="py-20 bg-white overflow-hidden" aria-label="Our clients">
      <AnimateOnScroll className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-heading text-[#F15A22] text-3xl md:text-4xl">
          Our Valuable Clients
        </h2>
      </AnimateOnScroll>
      <LogoMarquee logos={logos} />
    </section>
  )
}
