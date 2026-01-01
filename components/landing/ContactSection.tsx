'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.opstack.uk/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'track',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-track-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-track-foreground mb-4">
            Get Started with Track
          </h2>
          <p className="text-xl text-track-muted-foreground">
            Tell us about your asset management challenges and we will show you how Track can help
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-track-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-track-card border border-track-border text-track-foreground placeholder-track-muted-foreground focus:border-track-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-track-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-track-card border border-track-border text-track-foreground placeholder-track-muted-foreground focus:border-track-accent focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-track-foreground mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 bg-track-card border border-track-border text-track-foreground placeholder-track-muted-foreground focus:border-track-accent focus:outline-none transition-colors"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-track-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-track-card border border-track-border text-track-foreground placeholder-track-muted-foreground focus:border-track-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your asset management needs..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-8 py-4 bg-track-accent text-white font-semibold text-lg hover:bg-track-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-green-600">
              Thank you for your message. We will be in touch soon.
            </p>
          )}

          {status === 'error' && (
            <p className="text-center text-red-600">
              Something went wrong. Please email us directly at track@opstack.uk
            </p>
          )}
        </form>

        <div className="mt-12 text-center">
          <p className="text-track-muted-foreground">
            Prefer email? Contact us at{' '}
            <a href="mailto:track@opstack.uk" className="text-track-accent hover:text-track-accent-dark transition-colors">
              track@opstack.uk
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
