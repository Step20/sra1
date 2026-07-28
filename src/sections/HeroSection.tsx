import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import heroImg from '../assets/home.jpg'
import { scrollToSection } from '../lib/scrollTo'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full flex items-end overflow-hidden" style={{ height: '100svh', minHeight: 640 }}>
 
     
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Students at SUN RZE Academy"
          className="w-full h-full object-cover object-top"
        />
        {/* Strong gradient at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* Subtle left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Top-right floating glass card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-20 md:top-24 right-3 sm:right-6 lg:right-8 rounded-2xl p-4 w-[170px] sm:w-[200px] shadow-2xl
        bg-white/50 backdrop-blur-xl backdrop-saturate-150 border border-white/40 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)]
        "
       
      >
        <p className="text-brand-black text-xs font-black leading-tight mb-1.5">Next generation of Innovators</p>
        <p className="text-brand-black/70 text-[10px] sm:text-[11px] leading-relaxed">
          Cultivating future leaders through immersive, hands-on learning focused on creativity, critical thinking, and sustainability. Join us to shape a brighter future.
        </p>
      </motion.div>
     {/* <NavLink to="/" className="absolute top-10 left-10 flex items-center gap-2 shrink-0 pl-1.5">
              <img
                src={logoImg}
                alt="SUN RZE Academy"
                className={`h-2 md:h-[1.2vw] ml-2.5 w-auto object-contain transition-transform duration-300 `}
              />
            </NavLink> */}
      {/* Bottom hero content — badge above heading */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-[20%] sm:pb-[8%]">

        {/* Badge row — sits right above the heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="flex items-center gap-2.5 mb-4 sm:mb-5"
        >
          <span className="bg-white text-brand-black text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow">
            Learn
          </span>
          <span className="text-white/75 text-xs sm:text-sm font-medium tracking-wide">
            The Future Our Future
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-black leading-[0.92] tracking-tight text-white"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          Exposure<br />
          <span style={{ color: '#cdeeb9' }}>Equals</span><br />
          Expansion
        </motion.h1>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="mt-7 sm:mt-8 flex items-center gap-3"
        >
          <button
            type="button"
            onClick={() => scrollToSection('about-section')}
            className="inline-flex items-center gap-2 bg-white text-brand-black text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-neutral-100 active:scale-95 shadow-lg"
          >
            View More
            <FiChevronDown size={16} />
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/60"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
