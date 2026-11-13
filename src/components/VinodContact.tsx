import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface VinodContactProps {
  onShowToast: (msg: string) => void;
}

export const VinodContact: React.FC<VinodContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7, x: 0.3 },
      colors: ['#f472b6', '#fda4af', '#ffffff']
    });
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#f472b6', '#fb7185', '#38bdf8']
    });
    onShowToast("Opening your default email client...");

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in discussing an AI research role, building autonomous multi-agent pipelines, or technical consultation? Drop a line.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left: Contact Info Panel */}
          <div className="contact-info-panel glass-card">
            <h3 className="panel-title">Contact Details</h3>
            <p className="panel-text">
              Feel free to reach out via phone, email, or connect across professional networks.
            </p>

            <div className="panel-links">
              <a href={`mailto:${PERSONAL_INFO.email}`} onClick={handleCopyEmail} className="panel-link-item" title="Click to copy email">
                <div className="link-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="link-detail">
                  <span className="link-lbl">{copied ? 'Copied to Clipboard!' : 'Email me (click to copy)'}</span>
                  <span className="link-val">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone}`} className="panel-link-item">
                <div className="link-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="link-detail">
                  <span className="link-lbl">Call directly</span>
                  <span className="link-val">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              <div className="panel-link-item">
                <div className="link-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="link-detail">
                  <span className="link-lbl">Location</span>
                  <span className="link-val">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="panel-cv-block">
              <h4>Need an offline copy?</h4>
              <p>
                Download the formatted PDF version of my profile, updated with AI research specialties and technical project history.
              </p>
              <a href={PERSONAL_INFO.resumeUrl} className="btn btn-primary" download style={{ marginTop: 12 }}>
                <i className="fa-solid fa-file-pdf"></i> Download PDF Resume
              </a>
            </div>

          </div>

          {/* Right: Contact Form Panel */}
          <div className="contact-form-panel glass-card">
            <form id="profile-contact-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label htmlFor="contact-name">Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="contact-email">Email Address</label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="contact-subject"
                  required
                  placeholder=" "
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                <label htmlFor="contact-subject">Subject / Project Discussion</label>
              </div>

              <div className="form-group">
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <label htmlFor="contact-message">Message details...</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <i className="fa-solid fa-paper-plane"></i>
                <span>{submitted ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
