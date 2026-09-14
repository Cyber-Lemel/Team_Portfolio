function Skills({ skills }) {
  // Grouping skills into 3 columns based on your data categories
  const frontendSkills = skills.filter(s => s.category === 'Frontend')
  const backendSkills = skills.filter(s => s.category === 'Backend')
  const otherSkills = skills.filter(s => s.category !== 'Frontend' && s.category !== 'Backend')

  const renderColumn = (title, skillList) => (
    <div className="skills__column">
      <h3 className="skills__col-title">{title}</h3>
      <div className="skills__list">
        {skillList.map(skill => (
          <div key={skill.id} className="skill-item">
            <div className="skill-item__box">
               <span className="mono-tag">{skill.icon && <img src={skill.icon} alt={skill.name} />}</span>
            </div>
            <span className="skill-item__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head">
          <h2>Skills directory</h2>
          <span className="section-index mono-tag">Skills</span>
        </div>
        <div className="skills__columns">
          {renderColumn('Jomer', frontendSkills)}
          {renderColumn('Mel', backendSkills)}
          {renderColumn('Janus', otherSkills)}
        </div>
      </div>
    </section>
  )
}
export default Skills