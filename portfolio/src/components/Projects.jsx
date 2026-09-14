import { useState } from 'react'
import ProjectModal from './ProjectModal'

function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-head">
          <h2>Projects</h2>
          <span className="section-index mono-tag">Projects</span>
        </div>

        <div className="carousel-container">
          <button className="carousel__arrow carousel__arrow--left" onClick={prevProject} aria-label="Previous Project">
            &#10094;
          </button>

          <div className="carousel__track">
            {projects.map((project, index) => {
              // Determine the position of the card relative to the active index
              let position = 'hidden'
              if (index === currentIndex) position = 'active'
              else if (index === (currentIndex === 0 ? projects.length - 1 : currentIndex - 1)) position = 'prev'
              else if (index === (currentIndex === projects.length - 1 ? 0 : currentIndex + 1)) position = 'next'

              return (
                <div
                  key={project.id}
                  className={`carousel__item carousel__item--${position}`}
                  onClick={() => position === 'active' ? setSelectedProject(project) : setCurrentIndex(index)}
                >
                  {/* Image Placeholder */}
                  <div className="carousel__image-placeholder">
                    {/* Add images to portfolioData.js and replace this span with an <img src={project.image} /> */}
                    <span>Project Image</span>
                  </div>
                  
                  <h3 className="carousel__project-name">{project.title}</h3>
                  <span className="mono-tag">{project.category}</span>
                  
                  {position === 'active' && (
                    <button 
                      className="btn btn--primary carousel__btn" 
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                    >
                      Details
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          <button className="carousel__arrow carousel__arrow--right" onClick={nextProject} aria-label="Next Project">
            &#10095;
          </button>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default Projects