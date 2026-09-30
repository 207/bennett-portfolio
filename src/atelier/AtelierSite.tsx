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

export function AtelierSite() {
  return (
    <div className="at">
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
        <nav className="at-nav__links" aria-label="Page">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
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
