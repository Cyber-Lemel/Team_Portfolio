function Hero({ team, teamInfo }) {
  return (
    <section id="profile" className="hero">
      <div className="container hero__layout">
        <div className="hero__intro hero__intro--centered">
          <h1 className="hero__title">
            We build things<br />in class and out of it.
          </h1>  
        </div>
        
        <div className="hero__roster hero__roster--row" role="list" aria-label="Team roster">
          {team.map((member) => (
            <div className="id-card id-card--straight" role="listitem" key={member.id}>
              <div className="id-card__photo-frame id-card__photo-frame--center">
                  <img src={member.photo} alt={`${member.name}, ${member.role}`} />
              </div>
              <div className="id-card__info">
                <h3>{member.name}</h3>
                <p className="id-card__role mono-tag">{member.role}</p>
                <p className="id-card__desc">{member.focus}</p>

                <div className="id-card__socials">
                  <a href={member.socials?.facebook || '#'} target="_blank" rel="noreferrer" aria-label="Facebook">
                    {/* Facebook Logo */}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href={member.socials?.instagram || '#'} target="_blank" rel="noreferrer" aria-label="Instagram">
                    {/* Instagram Logo */}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="hero__bio">{teamInfo.bio}</p>
      </div>
    </section>
  )
}
export default Hero