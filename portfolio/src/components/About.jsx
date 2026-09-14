import groupPic from '../assets/GroupPic.jpg'

function About({ education, bio }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <h2>About the crew</h2>
          <span className="section-index mono-tag">About</span>
        </div>
        <div className="about__grid">
          <div >
            <p className="mono-tag about__label">Program</p>
            <h3>{education.degree}</h3>
            <p>{education.institution} • Expected {education.graduation}</p>
            <p className="about__note">{bio}</p>
          </div>
          <div className="about__photo-container">
            <img src={groupPic} alt="The JakcoolTo-gether Crew" className="about__photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default About