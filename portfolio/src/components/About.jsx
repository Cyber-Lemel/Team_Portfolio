import groupPic from '../assets/dagroup.jpg'

function About({ education, bio }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <h2>About the crew</h2>
        </div>
        <div className="about__grid">
          <div>
            <p className="mono-tag about__label">Program</p>
            <h3>{education.degree}</h3>
            <p>{education.institution} • Expected {education.graduation}</p>
            <p className="about__note">{bio}</p>
          </div>
          
          {/* --- NEW STRIPE COLLAGE LAYOUT --- */}
          <div className="about__collage-container">
            <div className="collage-layer collage-layer--1" style={{ backgroundImage: `url(${groupPic})` }}></div>
            <div className="collage-layer collage-layer--2" style={{ backgroundImage: `url(${groupPic})` }}></div>
            <div className="collage-layer collage-layer--3" style={{ backgroundImage: `url(${groupPic})` }}></div>
            <div className="collage-layer collage-layer--4" style={{ backgroundImage: `url(${groupPic})` }}></div>
            <div className="collage-layer collage-layer--5" style={{ backgroundImage: `url(${groupPic})` }}></div>
          </div>
          {/* --------------------------------- */}

        </div>
      </div>
    </section>
  )
}

export default About