import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import vrImg from '../assets/vr.jpg'
import { scrollToSection } from '../lib/scrollTo'

export default function CurriculumSection() {
  return (
    <section id="curriculum-section" className="py-24 lg:py-32 relative overflow-hidden scroll-mt-24">
      {/* Subtle radial backdrop for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <FadeIn direction="right">
            <div>
              <span className="section-label">What We Teach</span>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-black mb-5 leading-tight tracking-tight mt-1">Curriculum</h2>
              <p className="text-neutral-500 text-[15px] leading-relaxed mb-8">
                Our curriculum is designed to inspire and challenge students with a focus on hands-on, project-based learning in technology, engineering, art, and critical thinking. We emphasize creativity and innovation, ensuring each student can explore their passions and develop their skills.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/learning" className="btn-primary">View Curriculum</Link>
                <button type="button" onClick={() => scrollToSection('nextgen-section')} className="btn-secondary">
                  View More <FiArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Right — image */}
          <FadeIn direction="left" delay={0.12}>
            <div className="relative group">
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] bg-neutral-200 ring-1 ring-black/5 card-shadow card-shadow-hover">
                <img
                  src={vrImg}
                  alt="Student learning new tech skills"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Label overlay */}
              <div className="absolute top-4 left-4 right-14 bg-white/85 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-sm border border-white/60">
                <p className="text-brand-black font-bold text-sm leading-tight">Learning new<br />Tech skills</p>
              </div>
              {/* Arrow button */}
              <div className="absolute bottom-4 right-4 bg-brand-black text-white rounded-full p-2.5 shadow-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <FiArrowUpRight size={18} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
