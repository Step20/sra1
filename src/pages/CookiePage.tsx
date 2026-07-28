import PageWrapper from '../components/PageWrapper'

export default function CookiePage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="section-label">Legal</span>
          <h1 className="text-brand-black font-black tracking-tight mt-1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Cookie Policy
          </h1>
          <p className="text-sm text-neutral-400 mt-3">Last updated: July 27, 2026</p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-neutral-50 border border-neutral-200/70 rounded-3xl p-6 sm:p-8 md:p-10 text-neutral-600 leading-relaxed space-y-6">
            <p>
              This Cookie Policy explains how SUN RZE Academy uses cookies and similar technologies to improve your experience on our website.
            </p>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help websites remember preferences and improve functionality.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">How We Use Cookies</h2>
              <p>
                We use cookies for essential site functionality, performance measurement, and understanding how visitors use our content so we can improve it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Third-Party Cookies</h2>
              <p>
                Some cookies may be set by third-party services we use, such as analytics and communication tools. Those services are governed by their own policies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Managing Cookies</h2>
              <p>
                Most browsers allow you to review, block, or delete cookies through settings. Disabling certain cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Contact</h2>
              <p>
                For questions about our cookie use, contact sunrzecademy@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
