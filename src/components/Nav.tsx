const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="nav">
      <a className="nav__mark" href="#top">
        <span className="nav__glyph" aria-hidden="true" />
        Bennett Smolen
      </a>
      <p className="nav__live">
        <span className="nav__pulse" />
        Arlington
      </p>
      <nav className="nav__links" aria-label="Page">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
