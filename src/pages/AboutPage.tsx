import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import aboutImg from '../assets/about.png'
import about2Img from '../assets/about2.png'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.jpeg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'

const gallery = [a1, a2, a3, a4, a5, a6]

const mottos = [
  {
    quote: 'Exposure = Expansion',
    desc: 'Every new experience opens a door to growth and possibility.',
  },
  {
    quote: 'The Future of Our Future',
    desc: "Investing in today's students is investing in the world we all share.",
  },
  {
    quote: "Building the future we won't see",
    desc: 'Creating opportunities and innovations that will outlast us all.',
  },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 lg:pb-32 bg-brand-black overflow-hidden">
        <div className="absolute inset-0">
          <img src={about2Img} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <span className="section-label text-neutral-500">Our Story</span>
            <h1
              className="font-black text-white leading-none tracking-tight mt-2"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              About<br />
              <span style={{ color: '#cdeeb9' }}>SUN RZE</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <span className="section-label">Who We Are</span>
                <h2 className="text-4xl sm:text-5xl font-black text-brand-black mb-6 leading-tight mt-1">
                  A STEAM Academy<br />Built for the Future
                </h2>
                <p className="text-neutral-500 text-[15px] leading-relaxed mb-5">
                  SUN RZE Academy is a STEAM academy focused on the development of the next leaders and innovators by equipping them with resources and futurist learning techniques. Our curriculum is project-based, instructed based on each student's interest and skills, which promotes ideation, prototyping, and real-world implementation.
                </p>
                <p className="text-neutral-500 text-[15px] leading-relaxed mb-8">
                  Our staff has an uncompromised passion for creating lifelong learners and imagineers. We work to engage and educate the whole student — mind, body, and spirit.
                </p>
                <Link to="/learning" className="btn-primary">
                  Explore Our Curriculum <FiArrowUpRight size={15} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.12}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-100">
                <img src={aboutImg} alt="SUN RZE Academy students" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-24 bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <span className="section-label text-brand-green-text">Our Purpose</span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-black mb-6 mt-2 leading-tight">Our Mission</h2>
              <p className="text-brand-black/75 text-lg leading-relaxed">
                Our mission is to cultivate the next generation of leaders, futurists, and innovators by providing them with a world-class learning experience which includes a curriculum that emphasizes sustainability, creativity, critical thinking, and problem solving.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mottos */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <span className="section-label">What We Stand For</span>
            <h2 className="text-3xl font-black text-brand-black mb-10 mt-2">Our Guiding Principles</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mottos.map(({ quote, desc }, i) => (
              <FadeIn key={quote} delay={i * 0.08}>
                <div className="bg-neutral-50 border border-neutral-200/70 rounded-3xl p-7 h-full">
                  <div className="w-8 h-1 bg-brand-green rounded-full mb-5" />
                  <h3 className="text-lg font-black text-brand-black mb-3 leading-tight">"{quote}"</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <span className="section-label">Student Work</span>
            <h2 className="text-3xl font-black text-brand-black mb-8 mt-2">Learning in Action</h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {gallery.map((img, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="aspect-square overflow-hidden rounded-2xl bg-neutral-100">
                  <img
                    src={img}
                    alt={`Student activity ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
