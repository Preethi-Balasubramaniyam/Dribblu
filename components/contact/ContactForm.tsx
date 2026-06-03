'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#F15A22] focus:ring-1 focus:ring-[#F15A22] transition-colors duration-200'

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    orgName: '',
    phone: '',
    email: '',
    requirements: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Web3Forms endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'da470ede-d3d1-4a94-a2d0-780812416d8b', // Get free key from https://web3forms.com
          name: form.fullName,
          organization: form.orgName,
          phone: form.phone,
          email: form.email,
          message: form.requirements,
          subject: `New Contact Form Submission from ${form.fullName}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setForm({
          fullName: '',
          orgName: '',
          phone: '',
          email: '',
          requirements: '',
        })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimateOnScroll
      className="bg-white rounded-2xl shadow-sm p-8 h-full"
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: bezier, delay: 0.1 } },
      }}
    >
      <h2 className="font-heading text-[#F15A22] text-2xl md:text-3xl mb-2">
        Contact With us
      </h2>
      <p className="font-body font-bold text-gray-900 text-base mb-6">Drop us a line</p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <div className="w-16 h-16 bg-[#F15A22] rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading text-[#F15A22] text-2xl mb-2">Message Sent!</h3>
          <p className="font-body text-gray-600 text-sm mb-6">
            We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-[#F15A22] font-body font-semibold text-sm hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="text"
              name="orgName"
              placeholder="Organization Name"
              value={form.orgName}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <textarea
            name="requirements"
            placeholder="Requirements"
            rows={5}
            value={form.requirements}
            onChange={handleChange}
            className={`${inputClass} resize-none mb-6`}
          />

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm font-body">{error}</p>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
            className="bg-[#F15A22] text-white font-body font-semibold px-10 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A22] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit Now'}
          </motion.button>
        </form>
      )}
    </AnimateOnScroll>
  )
}
