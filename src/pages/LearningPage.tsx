import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiX, FiArrowUpRight } from 'react-icons/fi'
import FadeIn from '../components/FadeIn'
import PageWrapper from '../components/PageWrapper'
import vrImg from '../assets/vr.jpg'
import l1 from '../assets/l1.jpeg'
import l2 from '../assets/l2.jpg'
import l3 from '../assets/l3.jpg'

const categories = [
  {
    name: 'Core Learning',
    dotColor: 'bg-blue-400',
    bgColor: 'bg-brand-blue',
    subjects: [
      { title: 'Mathematics', desc: 'Advanced math concepts applied through project-based challenges, coding, and engineering problems.' },
      { title: 'Science', desc: 'Hands-on experiments and exploration covering biology, chemistry, physics, and earth science.' },
      { title: 'Engineering', desc: 'Design thinking and engineering principles brought to life through prototyping and building.' },
      { title: 'Language Arts', desc: 'Communication, storytelling, and writing skills developed through creative and technical projects.' },
    ],
  },
  {
    name: 'Technology',
    dotColor: 'bg-brand-green-dark',
    bgColor: 'bg-brand-green',
    subjects: [
      { title: 'Coding & Programming', desc: 'From block coding to Python and JavaScript — students learn to build apps, games, and tools.' },
      { title: 'Robotics', desc: 'Designing, building, and programming robots that solve real-world problems.' },
      { title: 'Virtual Reality (VR)', desc: 'Exploring immersive environments and creating VR experiences using cutting-edge hardware.' },
      { title: 'Augmented Reality (AR)', desc: 'Overlaying digital content on the real world to enhance learning and creativity.' },
      { title: '3D Printing', desc: 'Turning digital designs into physical objects, from concept to creation.' },
      { title: 'Artificial Intelligence', desc: 'Understanding AI fundamentals and building simple models to solve problems.' },
    ],
  },
  {
    name: 'Philosophy & Mindset',
    dotColor: 'bg-pink-300',
    bgColor: 'bg-brand-pink',
    subjects: [
      { title: 'Critical Thinking', desc: 'Analyzing problems from multiple angles and developing logical, evidence-based solutions.' },
      { title: 'Problem Solving', desc: 'Structured approaches to tackling complex challenges — from ideation to implementation.' },
      { title: 'Entrepreneurship', desc: 'Building a business mindset through pitching ideas, budgeting, and product development.' },
      { title: 'Leadership', desc: 'Developing confidence, teamwork, and the skills to inspire and guide others.' },
    ],
  },
  {
    name: 'Arts & Media',
    dotColor: 'bg-neutral-400',
    bgColor: 'bg-neutral-100',
    subjects: [
      { title: 'Visual Arts & Design', desc: 'Creative expression through drawing, digital design, and visual storytelling.' },
      { title: 'Music Production', desc: 'Composing, recording, and producing music using digital audio workstations.' },
      { title: 'Film & Photography', desc: 'Capturing the world through a lens — cinematography, editing, and visual narratives.' },
      { title: 'Game Development', desc: 'Designing and building video games from concept to playable prototype.' },
    ],
  },
]

interface Subject {
  title: string
  desc: string
}

export default function LearningPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const [modal, setModal] = useState<Subject | null>(null)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pb-32 bg-brand-black overflow-hidden">
        <div className="absolute inset-0">
          <img src={vrImg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <span className="section-label text-neutral-500">What We Teach</span>
            <h1
              className="font-black text-white leading-none tracking-tight mt-2"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Our<br />
              <span style={{ color: '#cdeeb9' }}>Curriculum</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-neutral-500 text-[15px] leading-relaxed max-w-2xl mb-10">
              Our curriculum is built around three core stages: <strong className="text-brand-black">Ideation</strong> — generating creative ideas; <strong className="text-brand-black">Prototyping</strong> — building and testing solutions; and <strong className="text-brand-black">Implementation</strong> — deploying real-world projects.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { img: l1, label: 'Ideation', desc: 'Generating original, creative solutions to real-world challenges.' },
              { img: l2, label: 'Prototyping', desc: 'Building, testing, and refining ideas into tangible products.' },
              { img: l3, label: 'Implementation', desc: 'Launching projects that create real impact in communities.' },
            ].map(({ img, label, desc }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-neutral-100">
                  <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-white/90 text-brand-black text-xs font-bold px-3 py-1 rounded-full mb-2">{label}</span>
                    <p className="text-white/80 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Accordion */}
      <section className="pb-28 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16">
          <FadeIn>
            <span className="section-label">Explore</span>
            <h2 className="text-3xl font-black text-brand-black mb-10 mt-1">Curriculum Areas</h2>
          </FadeIn>
          <div className="space-y-3">
            {categories.map((cat, i) => (
              <FadeIn key={cat.name} delay={i * 0.06}>
                <div className="bg-white border border-neutral-200/80 rounded-3xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`} />
                      <span className="text-base sm:text-lg font-black text-brand-black">{cat.name}</span>
                      <span className="hidden sm:inline text-xs text-neutral-400 font-medium bg-neutral-100 px-2.5 py-1 rounded-full">
                        {cat.subjects.length} subjects
                      </span>
                    </div>
                    <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <FiChevronDown size={20} className="text-neutral-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`${cat.bgColor} p-5`}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {cat.subjects.map(subject => (
                              <button
                                key={subject.title}
                                onClick={() => setModal(subject)}
                                className="text-left bg-white/70 hover:bg-white rounded-2xl p-4 transition-all group hover:shadow-sm"
                              >
                                <div className="flex items-start justify-between mb-1.5">
                                  <h4 className="text-brand-black font-bold text-sm">{subject.title}</h4>
                                  <FiArrowUpRight size={13} className="text-neutral-400 group-hover:text-brand-black transition-colors shrink-0 mt-0.5" />
                                </div>
                                <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2">{subject.desc}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Modal */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-black text-brand-black">{modal.title}</h3>
                  <button onClick={() => setModal(null)} className="p-1 rounded-full hover:bg-neutral-100">
                    <FiX size={20} />
                  </button>
                </div>
                <p className="text-neutral-600 leading-relaxed">{modal.desc}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
