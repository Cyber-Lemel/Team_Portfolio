import { useState } from 'react'

const LINKS = [
  { href: '#profile', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#courses', label: 'Coursework' },
  { href: '#contact', label: 'Contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__row">
        <a href="#profile" className="navbar__brand" onClick={closeMenu}>
          JakcoolTo-gether<span className="navbar__brand-dot">.</span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☾' : '☀'}
          </button>
          <button
            className="navbar__burger"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="navbar__drawer" aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
