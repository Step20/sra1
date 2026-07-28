import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import aboutImg from '../assets/about.png'
import { scrollToSection } from '../lib/scrollTo'

export default function AboutSection() {
  return (
    <section id="about-section" className="py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — image + cards */}
          <FadeIn direction="right">
            <div>
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] bg-neutral-100 ring-1 ring-black/5 card-shadow card-shadow-hover">
                <img
                  src={aboutImg}
                  alt="SUN RZE Academy students"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="group bg-brand-pink rounded-2xl p-4 sm:p-5 card-shadow card-shadow-hover">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-bold text-brand-black">Project-based</span>
                    <div className="bg-brand-black rounded-full p-1 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <FiArrowUpRight size={11} className="text-white" />
                    </div>
                  </div>
                  <p className="text-xs text-brand-black/65 leading-relaxed">
                    Our project-based approach ensures students actively apply their knowledge to real-world challenges.
                  </p>
                </div>
                <div className="group bg-brand-blue rounded-2xl p-4 sm:p-5 card-shadow card-shadow-hover">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-bold text-brand-black">Personalized</span>
                    <div className="bg-brand-black rounded-full p-1 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <FiArrowUpRight size={11} className="text-white" />
                    </div>
                  </div>
                  <p className="text-xs text-brand-black/65 leading-relaxed">
                    Every student receives a tailored learning experience that nurtures their unique interests.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — text */}
          <FadeIn direction="left" delay={0.12}>
            <div className="lg:pt-6">
              <span className="section-label">Who We Are</span>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-black mb-5 leading-tight tracking-tight mt-1">About Us</h2>
              <p className="text-neutral-500 text-[15px] leading-relaxed mb-8">
                SUN RZE Academy is committed to developing the leaders and innovators of tomorrow through personalized, project-based learning. Our passionate staff ensures each student receives a unique educational experience, engaging the whole student — mind, body, and spirit.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/about" className="btn-primary">Learn our Mission</Link>
                <button type="button" onClick={() => scrollToSection('curriculum-section')} className="btn-secondary">
                  View More <FiArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
