import groupPic from '../assets/tatlo.jpg'

function About({ education, bio, team }) {
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
            <p><br></br></p>
            <h3 className="education">Academic Background</h3>

            <p><b>Jomer:</b><br></br> 
            JHS: Cuyapo National High School (2022)<br></br>
            SHS: Accountancy and Business Management Graduate @ Cuyapo National High School(2024)<br></br></p>
                <p><br></br></p>

            <p><b>Mel:</b><br></br> 
            JHS: Cadaclan National High School (2022)<br></br>
            SHS: General Academics Strand @ Cadaclan National High School(2024)<br></br></p>
                <p><br></br></p>

            <p><b>Janus:</b><br></br> 
            JHS: St. John's Academy (2022)<br></br>
            SHS: Accountancy and Business Management Graduate @ PHINMA Araullo University (2024)<br></br></p>
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