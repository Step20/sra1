import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import supImg from '../assets/sup.png'

export default function SupportSection() {
  return (
    <section id="support-section" className="py-24 lg:py-32 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — image */}
          <FadeIn direction="right">
            <div className="group relative">
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] bg-neutral-200 ring-1 ring-black/5 card-shadow card-shadow-hover">
                <img
                  src={supImg}
                  alt="Student at SUN RZE Academy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-brand-black text-white rounded-full p-2.5 shadow-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <FiArrowUpRight size={18} />
              </div>
            </div>
          </FadeIn>

          {/* Right — text */}
          <FadeIn direction="left" delay={0.12}>
            <div>
              <span className="section-label">Make a Difference</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-black mb-5 leading-tight tracking-tight mt-1">Support Us</h2>
              <p className="text-neutral-500 text-[15px] leading-relaxed mb-8">
                Your support helps SUN RZE Academy provide exceptional educational experiences and resources for our students. By contributing, you enable us to continue fostering innovation, creativity, and critical thinking in the next generation of leaders. Together, we can create a brighter future.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/support" className="btn-primary">Ways to Support</Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us <FiArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
