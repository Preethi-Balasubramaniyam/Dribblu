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
  title: 'Dribblu Technologies – Creative Web Design & Digital Innovation',
  description:
    'Dribblu Technologies is a professional website design & development company delivering innovative digital solutions — SEO, UI/UX, app development, graphic design, and digital marketing at competitive value.',
  keywords: [
    'web design company',
    'web development company',
    'SEO company',
    'UI/UX design',
    'app development',
    'digital marketing',
    'Dribblu Technologies',
  ],
  authors: [{ name: 'Dribblu Technologies' }],
  openGraph: {
    title: 'Dribblu Technologies – Creative Web Design & Digital Innovation',
    description:
      'Partner with Dribblu Technologies for expert web design, development, and SEO services. Contact us today.',
    type: 'website',
    siteName: 'Dribblu Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dribblu Technologies – Creative Web Design & Digital Innovation',
    description:
      'Partner with Dribblu Technologies for expert web design, development, and SEO services.',
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
