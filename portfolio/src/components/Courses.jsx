function Courses({ courses }) {
  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-head">
          <h2>Coursework on record</h2>
          <span className="section-index mono-tag">Courses</span>
        </div>
        <div className="courses__table" role="table">
          <div className="courses__row courses__row--head" role="row">
            <span role="columnheader">Code</span>
            <span role="columnheader">Course</span>
            <span role="columnheader">Term</span>
            <span role="columnheader">Grade</span>
          </div>
          {courses.map((course) => (
            <div className="courses__row" role="row" key={course.id}>
              <span className="mono-tag" role="cell">{course.code}</span>
              <span role="cell" className="courses__title">{course.title}</span>
              <span role="cell" className="courses__term">{course.term}</span>
              <span role="cell" className="tag tag--accent">{course.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Courses