import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ClientsPortfolio from '@/components/clients/ClientsPortfolio'

export const metadata: Metadata = {
  title: 'Our Clients | Dribblu Technologies – Digital Agency',
  description:
    "Explore Dribblu Technologies' portfolio of clients spanning web development, UX/UI, logo design, and app development projects.",
}

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-white pt-28 pb-4">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="font-heading text-[#F15A22] text-4xl md:text-5xl">Our Clients</h1>
          </div>
        </section>
        <section className="bg-white py-10 pb-20">
          <ClientsPortfolio />
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
