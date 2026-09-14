import { useEffect } from 'react'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close details">
          ×
        </button>
        <span className="mono-tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <h4 className="modal__subhead">Highlights</h4>
        <ul className="modal__highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <ul className="project-card__tech">
          {project.technologies.map((t) => (
            <li key={t} className="tag tag--muted">
              {t}
            </li>
          ))}
        </ul>

        <div className="modal__actions">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
            View code
          </a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
            Live demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
