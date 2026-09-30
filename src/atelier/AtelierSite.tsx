import { useEffect, useLayoutEffect, useState } from 'react'
import { Field } from './Field'
import { Arrival } from './Arrival'
import { Mind } from './Mind'
import { Works } from './Works'
import { Craft } from './Craft'
import { Close } from './Close'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.6 3.4a7.6 7.6 0 1 0 5 13.4A6.7 6.7 0 0 1 15.6 3.4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const THEME_KEY = 'atelier-theme'

function preferredDark() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark' || saved === 'light') return saved === 'dark'
  } catch {
    /* storage can be blocked */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#14110e' : '#f4eee4')
}

export function AtelierSite() {
  const [booted, setBooted] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [dark, setDark] = useState(preferredDark)

  useLayoutEffect(() => {
    applyTheme(dark)
  }, [dark])

  useEffect(() => {
    if (booted) return
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setBooted(true))
    })
    return () => cancelAnimationFrame(frame)
  }, [booted])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    try {
      localStorage.setItem(THEME_KEY, next ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
  }

  return (
    <div className={`at${booted ? ' is-booted' : ''}`}>
      <Field />
      <div className="at-grain" aria-hidden="true" />
      <div className="at-cursor" aria-hidden="true" />
      <div className="at-progress" aria-hidden="true" />
      <a className="at-skip" href="#work">
        Skip to work
      </a>
      <header className="at-nav">
        <a className="at-nav__mark" href="#top">
          <span className="at-nav__seed" aria-hidden="true" />
          Bennett Smolen
        </a>
        <p className="at-nav__place">Arlington</p>
        <div className="at-nav__end">
          <nav className="at-nav__links" aria-label="Page">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="at-theme"
            aria-pressed={dark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>
      <main>
        <Arrival />
        <Mind />
        <Works />
        <Craft />
        <Close />
      </main>
    </div>
  )
}
