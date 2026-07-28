import { FiArrowUpRight } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'

const subjects = ['Science', 'Engineering', 'Technology', 'Math', 'Arts', 'Innovation']

export default function FeaturesSection() {
  return (
    <section id="features-section" className="py-6 pb-24 lg:pb-32 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Dark card */}
          <FadeIn direction="right">
            <div className="group relative overflow-hidden bg-brand-black rounded-[28px] p-8 lg:p-12 h-full flex flex-col justify-between min-h-[260px] card-shadow card-shadow-hover">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.08), transparent 55%)' }}
              />
              <div className="relative flex items-start justify-between">
                <h3 className="text-white text-xl lg:text-2xl font-black leading-tight tracking-tight max-w-[200px]">
                  Hands-On Learning Experience
                </h3>
                <div className="shrink-0 bg-white/10 rounded-full p-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <FiArrowUpRight size={18} className="text-white" />
                </div>
              </div>
              <p className="relative text-neutral-400 text-[13px] sm:text-sm leading-relaxed mt-6">
                We prioritize hands-on learning experiences that engage students in real-world applications. Our goal is to grow problem-solving and critical thinking skills.
              </p>
            </div>
          </FadeIn>

          {/* Light card — subjects */}
          <FadeIn direction="left" delay={0.1}>
            <div className="bg-white rounded-[28px] p-8 lg:p-12 h-full flex flex-col justify-between min-h-[260px] border border-neutral-100 ring-1 ring-black/5 card-shadow card-shadow-hover">
              <div className="flex flex-wrap gap-2">
                {subjects.map(s => (
                  <span key={s} className="bg-neutral-50 border border-neutral-200/70 text-brand-black text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:bg-brand-green/40 hover:border-brand-green">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-neutral-500 text-[13px] sm:text-sm leading-relaxed mt-6">
                Our interdisciplinary approach equips students with the skills needed to thrive in today's dynamic world. We connect core subjects to real-world problem solving, fueling curiosity and creativity.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
