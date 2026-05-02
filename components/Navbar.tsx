'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/assets/home/logo.png'

const serviceLinks = [
  { label: 'Graphic Design', href: '/services/graphic-design' },
  { label: 'Web Design & Development', href: '/services/web-design' },
  { label: 'SEO', href: '/services/seo' },
  { label: 'App Development', href: '/services/app-development' },
]

const navLinks = [
  { label: 'Home', href: '/', dropdown: false },
  { label: 'About us', href: '/about', dropdown: false },
  { label: 'Our Services', href: '/services', dropdown: true },
  { label: 'Our Clients', href: '/clients', dropdown: false },
  { label: 'Contact', href: '/contact', dropdown: false },
  { label: 'Blogs', href: '/#blogs', dropdown: false },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname.startsWith(href)
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-xl backdrop-blur-sm' : 'bg-black'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Dribblu home">
          <Image
            src={logo}
            alt="Dribblu Logo"
            width={130}
            height={42}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, dropdown }, i) =>
            dropdown ? (
              <motion.li
                key={label}
                ref={servicesRef}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.45 }}
                className="relative"
              >
                <button
                  onClick={() => setServicesOpen((o) => !o)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`relative text-sm font-medium flex items-center gap-1 transition-colors duration-200 ${
                    isActive(href) ? 'text-[#F15A22]' : 'text-white hover:text-[#F15A22]'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  {label}
                  <svg className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#F15A22] transition-all duration-300 rounded-full ${isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-black border border-gray-700 rounded-lg shadow-xl py-2 z-50"
                      onMouseLeave={() => setServicesOpen(false)}
                      role="menu"
                    >
                      {serviceLinks.map((svc) => (
                        <li key={svc.href} role="none">
                          <Link
                            href={svc.href}
                            role="menuitem"
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                              pathname === svc.href
                                ? 'text-[#F15A22] bg-gray-900'
                                : 'text-gray-300 hover:text-[#F15A22] hover:bg-gray-900'
                            }`}
                            onClick={() => setServicesOpen(false)}
                          >
                            {svc.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            ) : (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.45 }}
              >
                <Link
                  href={href}
                  className={`relative text-sm font-medium group transition-colors duration-200 ${
                    isActive(href) ? 'text-[#F15A22]' : 'text-white hover:text-[#F15A22]'
                  }`}
                >
                  {label}
                  <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#F15A22] transition-all duration-300 rounded-full ${
                    isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </motion.li>
            )
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 px-6 pb-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map(({ label, href, dropdown }) =>
                dropdown ? (
                  <li key={label}>
                    <button
                      className="text-white text-sm font-medium hover:text-[#F15A22] transition-colors duration-200 w-full text-left flex items-center justify-between"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                    >
                      {label}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4 mt-2 flex flex-col gap-3 border-l border-gray-700"
                        >
                          {serviceLinks.map((svc) => (
                            <li key={svc.href}>
                              <Link
                                href={svc.href}
                                className={`text-sm font-medium transition-colors duration-200 block ${
                                  pathname === svc.href ? 'text-[#F15A22]' : 'text-gray-400 hover:text-[#F15A22]'
                                }`}
                                onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                              >
                                {svc.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white text-sm font-medium hover:text-[#F15A22] transition-colors duration-200 block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
