import type { Metadata } from 'next'
import { Bigshot_One, Inter } from 'next/font/google'
import './globals.css'

const bigshotOne = Bigshot_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bigshot',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dribblu – Creative Web Design & Digital Innovation',
  description:
    'Dribblu is a professional website design & development company delivering innovative digital solutions – SEO, UI/UX, app development, graphic design and brochure design at affordable cost.',
  keywords: [
    'web design company',
    'web development company',
    'SEO company',
    'UI/UX design',
    'app development',
    'digital marketing',
    'Dribblu',
  ],
  authors: [{ name: 'Dribblu Design' }],
  openGraph: {
    title: 'Dribblu – Creative Web Design & Digital Innovation',
    description:
      'Partner with Dribblu for expert web design, development and SEO services. Contact us today.',
    type: 'website',
    siteName: 'Dribblu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dribblu – Creative Web Design & Digital Innovation',
    description:
      'Partner with Dribblu for expert web design, development and SEO services.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bigshotOne.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
