import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import logoImg from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/learning', label: 'Learning' },
  { to: '/support', label: 'Support' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const logoFilter = transparent ? 'brightness-0 invert' : ''

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4">
        <div className="min-w-0 mx-auto flex justify-center px-3 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between h-14 md:h-[64px] rounded-full px-3 sm:px-4 transition-all duration-500 ease-out ${
              transparent
                ? 'bg-black/20 backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)]'
                : 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)]'
            }`}
          >
            {/* Logo */}
           

            {/* Desktop Links — pill with sliding active indicator */}
            <div className="hidden md:flex items-center gap-0.5">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className="relative px-4 py-2 text-sm font-medium whitespace-nowrap group"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          className={`absolute inset-0 rounded-full ${
                            transparent ? 'bg-white' : 'bg-brand-black'
                          }`}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-colors duration-200 ${
                          isActive
                            ? transparent ? 'text-brand-black' : 'text-white'
                            : transparent
                              ? 'text-white/85 group-hover:text-white'
                              : 'text-neutral-500 group-hover:text-brand-black'
                        }`}
                      >
                        {label}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className={`md:hidden p-2  flex gap-2 rounded-full transition-colors ${transparent ? 'text-white' : 'text-brand-black'}`}
              aria-label="Toggle menu"
            >
              Menu {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-80 bg-white/95 backdrop-blur-xl z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="w-2 flex items-center justify-between p-5 border-b border-neutral-100" >
                {/* <img src={logoImg} alt="SUN RZE Academy" style={{width: '2px', height: '2px'}}/> */}
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Close menu">
                  <HiX size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {links.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.08 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                          isActive ? 'bg-brand-black text-white' : 'text-brand-black hover:bg-neutral-50'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="p-5 border-t border-neutral-100">
                <p className="text-xs text-neutral-400 text-center tracking-wide">"Exposure = Expansion"</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
