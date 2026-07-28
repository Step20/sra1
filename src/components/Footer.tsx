import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'
import logoWhite from '../assets/logow.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const newsletterEndpoint =
    import.meta.env.VITE_FORMSPREE_NEWSLETTER_ENDPOINT ||
    import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT ||
    'https://formspree.io/f/xbdnwjpv'

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    if (!newsletterEndpoint) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const formData = new FormData()
      formData.set('email', email)
      formData.set('_subject', 'New newsletter signup')
      formData.set('_source', 'sun-rze-footer-newsletter')

      const res = await fetch(newsletterEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <img src={logoWhite} alt="SUN RZE Academy" className="h-10 w-auto object-contain mb-5" />
            <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-widest mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="tel:+18006902024" className="hover:text-white transition-colors">(863) 438-1107</a></li>
              <li><a href="mailto:sunrzecademy@gmail.com" className="hover:text-white transition-colors">sunrzecademy@gmail.com</a></li>
              <li className="text-neutral-500">Orlando, FL</li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: FaFacebook, href: '#' },
                { icon: FaInstagram, href: 'https://www.instagram.com/sunrzeacademy/' },
                { icon: FaTiktok, href: '#' },
                { icon: FaYoutube, href: '#' },
                { icon: FaTwitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-neutral-300 hover:text-white"
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              {[
                { label: 'Terms & Conditions', to: '/terms' },
                { label: 'Privacy Policy', to: '/privacy' },
                { label: 'Cookie Policy', to: '/cookies' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              {[
                { label: 'Resources', to: '/resources' },
                { label: 'Support', to: '/support' },
                { label: 'Contact', to: '/contact' },
                { label: 'Learning', to: '/learning' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-sm text-neutral-400 mb-4">Sign up for the latest news and offers from the SRA.</p>
            <form onSubmit={handleSubscribe} action={newsletterEndpoint} method="POST" className="flex gap-2">
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  if (status !== 'idle') setStatus('idle')
                }}
                placeholder="Enter email address"
                className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-green transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="shrink-0 bg-brand-green text-brand-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-brand-green-dark transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? '...' : 'Join'}
              </button>
            </form>
            {status === 'success' && <p className="text-xs text-brand-green mt-2">You're subscribed!</p>}
            {status === 'error' && <p className="text-xs text-red-400 mt-2">Something went wrong. Try again.</p>}
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-xs text-neutral-600">
            © Copyright {new Date().getFullYear()} SUN RZE Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
