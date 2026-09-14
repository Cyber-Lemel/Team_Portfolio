import { useState } from 'react'

const MAX_MESSAGE = 500
const MIN_MESSAGE = 20

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const next = { name: '', email: '', message: '' }
    if (!formData.name.trim()) next.name = 'Please tell us your name.'
    if (!formData.email.trim()) {
      next.email = 'An email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'That email address doesn\u2019t look right.'
    }
    if (formData.message.trim().length < MIN_MESSAGE) {
      next.message = `Message needs at least ${MIN_MESSAGE} characters.`
    }
    setErrors(next)
    return !next.name && !next.email && !next.message
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      setSubmitStatus('error')
      return
    }
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 900)
  }

  const dismissAlert = () => setSubmitStatus('idle')

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <h2>Get in touch</h2>
          <span className="section-index mono-tag">Contact</span>
        </div>

        <div className="contact__grid">
          <p className="contact__intro">
            Have a project, an internship opening, or just want to compare notes on a class?
            Send us a message — one of the three of us will get back to you.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitStatus === 'success' && (
              <div className="alert alert--success">
                <span>Message sent — thanks for reaching out. We&apos;ll reply soon.</span>
                <button type="button" onClick={dismissAlert} aria-label="Dismiss">
                  ×
                </button>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert--error">
                <span>Please fix the highlighted fields before sending.</span>
                <button type="button" onClick={dismissAlert} aria-label="Dismiss">
                  ×
                </button>
              </div>
            )}

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={formData.subject} onChange={handleChange} />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={MAX_MESSAGE}
                value={formData.message}
                onChange={handleChange}
              />
              <div className="field__meta">
                <span>{errors.message && <span className="field__error">{errors.message}</span>}</span>
                <span className="mono-tag">{formData.message.length}/{MAX_MESSAGE}</span>
              </div>
            </div>

            <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
