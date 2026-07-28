import PageWrapper from '../components/PageWrapper'

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <span className="section-label">Legal</span>
          <h1 className="text-brand-black font-black tracking-tight mt-1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-400 mt-3">Last updated: July 27, 2026</p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-neutral-50 border border-neutral-200/70 rounded-3xl p-6 sm:p-8 md:p-10 text-neutral-600 leading-relaxed space-y-6">
            <p>
              SUN RZE Academy respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and the choices available to you.
            </p>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Information We Collect</h2>
              <p>
                We may collect information you provide directly, such as your name, email address, and phone number when you submit forms, subscribe to updates, or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">How We Use Information</h2>
              <p>
                We use collected information to respond to inquiries, provide educational updates, improve our services, and share relevant program information. We do not sell personal data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Data Sharing</h2>
              <p>
                We may share information with trusted service providers that help operate our website and communications, such as email and analytics tools, under appropriate safeguards.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Your Choices</h2>
              <p>
                You may opt out of marketing communications at any time. To request updates or deletion of your personal information, contact us at sunrzecademy@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-black mb-2">Contact</h2>
              <p>
                Questions about this Privacy Policy can be sent to sunrzecademy@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
