import { useState } from 'react'
import { teamInfo } from '../data/portfolioData'

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
      next.email = 'That email address doesn’t look right.'
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
        
        <div className="contact__card">
          {/* LEFT SIDE: Typography & Info (Inspired by download 6 & Contact Page) */}
          <div className="contact__info-side">
            <div className="contact__hello-graphic">
              <span className="hello-text hello-text--outline">HELLO</span>
              <span className="hello-text hello-text--solid">HELLO</span>
              <div className="hello-waves">
                <span></span><span></span><span></span>
              </div>
            </div>

            <h3 className="contact__title">Get in touch</h3>
            <p className="contact__blurb">
              Have a project, an internship opening, or just want to compare notes on a class? Drop us a line.
            </p>

            <div className="contact__details">
              <div className="contact__detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{teamInfo.location}</span>
              </div>
              <div className="contact__detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{teamInfo.email}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Minimalist Form (Inspired by Contact Page) */}
          <div className="contact__form-side">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              
              {submitStatus === 'success' && (
                <div className="alert alert--success">
                  <span>Message sent — thanks for reaching out. We'll reply soon.</span>
                  <button type="button" onClick={dismissAlert} aria-label="Dismiss">×</button>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert--error">
                  <span>Please fix the highlighted fields before sending.</span>
                  <button type="button" onClick={dismissAlert} aria-label="Dismiss">×</button>
                </div>
              )}

              <div className="form-row">
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
                  rows={4}
                  maxLength={MAX_MESSAGE}
                  value={formData.message}
                  onChange={handleChange}
                />
                <div className="field__meta">
                  <span>{errors.message && <span className="field__error">{errors.message}</span>}</span>
                  <span className="mono-tag">{formData.message.length}/{MAX_MESSAGE}</span>
                </div>
              </div>

              <button type="submit" className="btn btn--primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact