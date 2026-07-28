import { useState, useRef } from 'react'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const contactEndpoint = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT || 'https://formspree.io/f/xeeynqgr'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    if (!contactEndpoint) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const formData = new FormData(formRef.current)
      formData.set('_subject', 'New contact form submission')
      formData.set('_source', 'sun-rze-contact-page')

      const res = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!res.ok) {
        throw new Error('Form submission failed')
      }

      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageWrapper>
      {/* Hero */}
     <section className="relative pt-32 pb-24 lg:pb-32 bg-brand-black overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
              <FadeIn>
                <span className="section-label text-neutral-500">
                    Get in Touch</span>
                <h1
                  className="font-black text-white leading-none tracking-tight mt-2"
                  style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                >
                 Contact 
                  <span style={{ color: '#cdeeb9' }}> Us</span>
                </h1>
              </FadeIn>
            </div>
          </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-black text-brand-black mb-6">We'd love to hear from you</h2>
              <p className="text-neutral-600 leading-relaxed mb-10">
                Have questions about our programs, enrollment, or ways to get involved? Reach out — our team is here to help.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Phone', value: '(863) 438-1107', href: 'tel:+18006902024' },
                  { label: 'Email', value: 'sunrzecademy@gmail.com', href: 'mailto:sunrzecademy@gmail.com' },
                  { label: 'Location', value: 'Orlando, FL', href: null },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">{label}</span>
                    {href ? (
                      <a href={href} className="text-brand-black font-medium hover:underline">{value}</a>
                    ) : (
                      <span className="text-brand-black font-medium">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left" delay={0.1}>
            <div className="bg-brand-gray rounded-3xl p-8 border border-neutral-200/60">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <FiCheckCircle size={48} className="text-brand-green-text mb-4" />
                  <h3 className="text-xl font-black text-brand-black mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 text-sm">We'll get back to you shortly.</p>
                  <button onClick={() => setStatus('idle')} className="btn-primary mt-6 text-sm">Send Another</button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  action={contactEndpoint}
                  method="POST"
                  className="space-y-4"
                >
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5 block">First Name</label>
                      <input
                        name="first_name"
                        type="text"
                        required
                        placeholder="Jane"
                        className="w-full bg-white border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5 block">Last Name</label>
                      <input
                        name="last_name"
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full bg-white border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5 block">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5 block">Subject</label>
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="Program inquiry"
                      className="w-full bg-white border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5 block">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-white border border-neutral-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">
                      <FiAlertCircle size={16} /> Something went wrong. Please try again.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center py-3 disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Sending...' : (<><FiSend size={15} /> Send Message</>)}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
