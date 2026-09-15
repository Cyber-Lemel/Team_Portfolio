import { useState } from 'react'

// Map your sketch's tab labels to the exact strings used in your portfolioData.js
const TERM_TABS = [
  { id: '1.1', label: '1st Yr, Sem 1' },
  { id: '1.2', label: '1st Yr, Sem 2' },
  { id: '2.1', label: '2nd Yr, Sem 1' },
  { id: '2.2', label: '2nd Yr, Sem 2' },
  { id: '3.1', label: '3rd Yr, Sem 1' },
  { id: '3.2', label: '3rd Yr, Sem 2' },
  { id: '4.1', label: '4th Yr, Sem 1' },
  { id: '4.2', label: '4th Yr, Sem 2' },
]

function Courses({ courses }) {
  // Default to 2.1 since your current data starts there
  const [activeTab, setActiveTab] = useState('2.1') 

  const currentTermLabel = TERM_TABS.find(t => t.id === activeTab)?.label
  const filteredCourses = courses.filter(course => course.term === currentTermLabel)

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-head">
          <h2>Coursework on record</h2>
          <span className="section-index mono-tag">Courses</span>
        </div>

        {/* Display the active semester above the table */}
        <h3 className="courses__semester-title">{currentTermLabel}</h3>

        <div className="courses__table-wrapper">
          <table className="courses__table">
            <thead>
              <tr>
                <th>CODE <span className="sort-icon">⇕</span></th>
                <th>COURSE <span className="sort-icon">⇕</span></th>
                <th>GRADE <span className="sort-icon">⇕</span></th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <tr key={course.id}>
                    <td className="mono-tag">{course.code}</td>
                    <td className="courses__title">{course.title}</td>
                    <td>
                      <span className="tag tag--accent">{course.grade}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="courses__empty">
                    No courses recorded for this term yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination / Semester Tabs */}
        <div className="courses__pagination">
          <span className="courses__pagination-label">Year/Sem</span>
          <div className="courses__pagination-group">
            {TERM_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`courses__page-btn ${
                  activeTab === tab.id ? 'courses__page-btn--active' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.id}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Courses