import { useState } from 'react'

function ProjectCard({ project, onSelect }) {
  const [likes, setLikes] = useState(project.initialLikes)
  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    setIsLiked((prev) => !prev)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      {project.featured && <span className="tag tag--accent project-card__featured">Featured</span>}
      <h3>{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <ul className="project-card__tech">
        {project.technologies.map((t) => (
          <li key={t} className="tag tag--muted">
            {t}
          </li>
        ))}
      </ul>

      <div className="project-card__footer">
        <button
          className={`like-btn ${isLiked ? 'like-btn--active' : ''}`}
          onClick={toggleLike}
          aria-pressed={isLiked}
        >
          ★ {likes}
        </button>
        <div className="project-card__links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            Code
          </a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <button className="link-btn" onClick={() => onSelect(project)}>
            Details
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
