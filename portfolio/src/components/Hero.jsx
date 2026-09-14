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