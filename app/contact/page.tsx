import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'
import ContactMap from '@/components/contact/ContactMap'

export const metadata: Metadata = {
  title: 'Contact Us | Dribblu – Web Design & Digital Agency',
  description:
    'Get in touch with Dribblu Designs. We are available Mon–Sat 9:30 am – 6:30 pm. Drop us a line and we will get back to you within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Contact info + form */}
        <section className="bg-gray-50 pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map */}
        <ContactMap />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
