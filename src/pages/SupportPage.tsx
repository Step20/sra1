import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiHeart, FiUsers, FiBriefcase } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'
import sup2 from '../assets/sup2.jpg'
import sup3 from '../assets/sup3.jpg'
import supImg from '../assets/sup.png'

const ways = [
  {
    icon: FiHeart,
    title: 'Donate',
    color: 'bg-brand-pink',
    desc: 'Your financial contribution directly funds student programs, equipment, field experiences, and scholarship opportunities for our learners.',
    cta: 'Make a Donation',
  },
  {
    icon: FiUsers,
    title: 'Volunteer',
    color: 'bg-brand-green',
    desc: 'Share your expertise by mentoring students, leading workshops, or supporting events. Every skill has a place in our community.',
    cta: 'Become a Volunteer',
  },
  {
    icon: FiBriefcase,
    title: 'Partner',
    color: 'bg-brand-blue',
    desc: 'Organizations and businesses can partner with SUN RZE Academy to provide internships, sponsorships, and real-world learning experiences.',
    cta: 'Explore Partnerships',
  },
]

export default function SupportPage() {
  return (
    <PageWrapper>
      {/* Hero */}
            <section className="relative pt-32 pb-24 lg:pb-32 bg-brand-black overflow-hidden">
        <div className="absolute inset-0">
          <img src={sup2} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <span className="section-label text-neutral-500">Make a Difference</span>
            <h1
              className="font-black text-white leading-none tracking-tight mt-2"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Support<br />
              <span style={{ color: '#cdeeb9' }}>The Academy</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="right">
            <div>
              <h2 className="text-4xl font-black text-brand-black mb-6 leading-tight">
                Together We Build the Future
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-5">
                Your support helps SUN RZE Academy provide exceptional educational experiences and resources for our students. By contributing, you enable us to continue fostering innovation, creativity, and critical thinking in the next generation of leaders.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Together, we can create a brighter future — one student at a time.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              <img src={supImg} alt="Support" className="rounded-3xl object-cover aspect-square w-full" />
              <img src={sup3} alt="Support" className="rounded-3xl object-cover aspect-square w-full mt-8" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-black text-brand-black mb-8">Ways to Support</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ways.map(({ icon: Icon, title, color, desc, cta }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className={`${color} rounded-3xl p-8 flex flex-col h-full`}>
                <div className="w-12 h-12 bg-white/60 rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-brand-black" />
                </div>
                <h3 className="text-xl font-black text-brand-black mb-3">{title}</h3>
                <p className="text-brand-black/70 text-sm leading-relaxed flex-1 mb-6">{desc}</p>
                <Link to="/contact" className="btn-primary self-start text-xs px-4 py-2">
                  {cta} <FiArrowUpRight size={13} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
