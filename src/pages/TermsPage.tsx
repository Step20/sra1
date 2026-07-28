import PageWrapper from '../components/PageWrapper'

export default function TermsPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="section-label">Legal</span>
          <h1 className="text-brand-black font-black tracking-tight mt-1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Terms & Conditions
          </h1>
          <p className="text-sm text-neutral-400 mt-3">Last updated: July 27, 2026</p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-neutral-50 border border-neutral-200/70 rounded-3xl p-6 sm:p-8 md:p-10 text-neutral-600 leading-relaxed space-y-6">
            <p>
              By accessing or using SUN RZE Academy websites, programs, and services, you agree to these Terms & Conditions.
            </p>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Use of Site</h2>
              <p>
                You agree to use this website lawfully and respectfully. You must not use the site in ways that could damage services, interfere with operations, or violate applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Content and Intellectual Property</h2>
              <p>
                All content on this site, including text, graphics, branding, and media, is owned by SUN RZE Academy or used with permission. Unauthorized reproduction or distribution is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Program Information</h2>
              <p>
                Program details, schedules, and availability may change. We aim for accuracy but do not guarantee that all information is always current or complete.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Limitation of Liability</h2>
              <p>
                SUN RZE Academy is not liable for indirect or consequential damages arising from use of this website. Use of the site is at your own discretion.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Contact</h2>
              <p>
                For questions about these Terms & Conditions, contact sunrzecademy@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
