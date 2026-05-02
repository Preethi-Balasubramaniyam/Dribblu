import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import ServiceHero from '@/components/services/ServiceHero'
import AppDevServices from '@/components/services/AppDevServices'
import bnr4 from '@/assets/services/bnr-4.jpg'

export const metadata: Metadata = {
  title: 'App Development | Dribblu – Web Design & Digital Agency',
  description:
    'At Dribblu Design Studio, we create custom mobile applications that deliver seamless user experiences, high performance, and real business impact.',
}

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          title="App Development"
          bgImage={bnr4}
          description={
            <>
              At <span className="text-[#F15A22] font-semibold">Dribblu Design Studio</span>, we
              create custom mobile applications that deliver seamless user experiences, high
              performance, and real business impact. Whether you&apos;re launching a new product,
              extending your digital presence, or streamlining internal operations, our app
              development solutions are designed to bring your ideas to life.
            </>
          }
        />
        <AppDevServices />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
