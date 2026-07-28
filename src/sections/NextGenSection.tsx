import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import { scrollToSection } from '../lib/scrollTo'

export default function NextGenSection() {
  return (
    <section id="nextgen-section" className="py-6 lg:py-8 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[32px] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 card-shadow"
            style={{ background: 'linear-gradient(135deg, #d7f3c3 0%, #cdeeb9 55%, #bfe8a5 100%)' }}
          >
            {/* Decorative blurred orbs for depth */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="section-label !text-brand-black/50">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-brand-black leading-tight tracking-tight max-w-2xl mb-7 mt-1">
                Creating the Next Generation of Innovators
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/about" className="btn-primary">Learn our Mission</Link>
                <button
                  type="button"
                  onClick={() => scrollToSection('features-section')}
                  className="inline-flex items-center gap-2 border border-brand-black/25 text-brand-black px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/40 active:scale-95"
                >
                  View More <FiArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
