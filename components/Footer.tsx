'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/home/logo.png'
import AnimateOnScroll from './ui/AnimateOnScroll'

function FooterScrollTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="w-9 h-9 bg-[#F15A22] text-white flex items-center justify-center rounded hover:bg-orange-600 transition-colors duration-200"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

const companyLinks = ['Home', 'About us', 'Portfolio', 'Products', 'Blogs']
const tagLinks = ['Web Design Company', 'Web Development Company', 'SEO Company']

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', icon: <FacebookIcon />, href: '#' },
  { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
  { label: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
  { label: 'X (Twitter)', icon: <XIcon />, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white" aria-label="Site footer">

      {/* Main footer content */}
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 – Logo & socials */}
          <div>
            <Link href="/" aria-label="Dribblu home">
              <Image
                src={logo}
                alt="Dribblu Logo"
                width={130}
                height={42}
                className="h-10 w-auto mb-6"
              />
            </Link>
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-[#F15A22] transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Company */}
          <div>
            <h3 className="font-body font-bold text-base mb-3 footer-heading">Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-body text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Tags */}
          <div>
            <h3 className="font-body font-bold text-base mb-3 footer-heading">Tags</h3>
            <ul className="mt-5 space-y-3">
              {tagLinks.map((tag) => (
                <li key={tag}>
                  <Link
                    href="#"
                    className="font-body text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h3 className="font-body font-bold text-base mb-3 footer-heading">
              Get in Touch With us
            </h3>
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <p className="font-body font-semibold text-white mb-2 pb-1 border-b-2 border-[#F15A22] inline-block">Call us:</p>
                <a
                  href="tel:+918124921163"
                  className="font-body text-gray-400 hover:text-white transition-colors duration-200 block mt-2"
                >
                  +91 8124921163
                </a>
              </div>
              <div>
                <p className="font-body font-semibold text-white mb-2 pb-1 border-b-2 border-[#F15A22] inline-block">Email us:</p>
                <a
                  href="mailto:dribblutech@gmail.com"
                  className="font-body text-gray-400 hover:text-white transition-colors duration-200 block mt-2"
                >
                  dribblu
                </a>
                <a
                  href="mailto:dribblutech@gmail.com"
                  className="font-body text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  technology@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </AnimateOnScroll>

      {/* Bottom bar — orange trapezoid left, black right */}
      <div className="relative overflow-hidden bg-black">
        {/* Orange bg: covers ~58% from left with diagonal right edge */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 bg-[#F15A22]"
          style={{
            width: '58%',
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)',
          }}
        />
        {/* Diagonal stripes — angle matches trapezoid edge (arctan(24/44) ≈ 29°) */}
        <div
          className="absolute inset-y-0 flex gap-[6px] items-center"
          aria-hidden="true"
          style={{ left: 'calc(58% - 18px)' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block bg-[#F15A22]"
              style={{ width: '16px', height: '100%', transform: 'skewX(-29deg)' }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-3 flex items-center">
          <p className="font-body text-white text-sm font-medium">
            &copy; 2025 Dribblu Design All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
