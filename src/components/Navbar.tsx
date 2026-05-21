'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/data/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-mono text-sm font-bold text-neutral-800 tracking-wide">
          faiz<span className="text-brand-600">.</span>dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === id
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-neutral-500 hover:text-brand-700 hover:bg-brand-50'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-brand-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-brand-50 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-neutral-700 mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-neutral-700 mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-neutral-700 transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2 px-3 text-sm font-medium text-neutral-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-2 px-3 text-sm font-medium text-white bg-neutral-900 hover:bg-brand-600 rounded-lg text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
