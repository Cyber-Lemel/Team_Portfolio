function Footer({ teamInfo, socialLinks }) {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__row">
        <div>
          <p className="footer__brand">{teamInfo.name}</p>
          <p className="mono-tag">
            © {year} · Mel Joseph Velasco, Janus Franada & Jomer Dellosa
          </p>
        </div>

        <nav className="footer__links" aria-label="Social">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>

        <button className="footer__top" onClick={scrollToTop} aria-label="Back to top">
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer
