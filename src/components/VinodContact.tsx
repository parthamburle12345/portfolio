import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface VinodContactProps {
  onShowToast: (msg: string) => void;
}

export const VinodContact: React.FC<VinodContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSending(true);

    try {
      // Send directly to Parth's email via FormSubmit AJAX service
      const res = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject || "Portfolio Contact Inquiry",
          Message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      if (res.ok) {
        setSendSuccess(true);
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.6, x: 0.5 },
          colors: ['#f472b6', '#fb7185', '#38bdf8']
        });
        onShowToast(`Message sent successfully to ${PERSONAL_INFO.email}!`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error("Direct send failed");
      }
    } catch (err) {
      // Fallback: Launch mail client with prefilled details
      onShowToast("Opening your email client as fallback...");
      const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    } finally {
      setIsSending(false);
      setTimeout(() => setSendSuccess(false), 6000);
    }
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
              Feel free to reach out via phone, email, or connect directly across professional networks.
            </p>

            <div className="panel-links">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="panel-link-item"
                title="Send email directly"
              >
                <div className="link-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="link-detail">
                  <span className="link-lbl">Email me</span>
                  <span className="link-val">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 8, padding: '8px 12px', fontSize: '0.85rem' }}
              >
                <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-link-item"
                title="Open LinkedIn Profile in new tab"
              >
                <div className="link-icon">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="link-detail">
                  <span className="link-lbl">LinkedIn</span>
                  <span className="link-val">parth-amburle</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-link-item"
                title="Open GitHub Profile in new tab"
              >
                <div className="link-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="link-detail">
                  <span className="link-lbl">GitHub</span>
                  <span className="link-val">parthamburle12345</span>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${PERSONAL_INFO.phone}`} className="panel-link-item">
                <div className="link-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="link-detail">
                  <span className="link-lbl">Call / WhatsApp</span>
                  <span className="link-val">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              {/* Location */}
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
              
              {sendSuccess && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--border-radius-sm)',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    color: '#22c55e',
                    fontSize: '0.9rem',
                    marginBottom: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}
                >
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Message delivered directly to {PERSONAL_INFO.email}! I will get back to you shortly.</span>
                </div>
              )}

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

              <button
                type="submit"
                disabled={isSending}
                className="btn btn-primary btn-block"
                style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? 'wait' : 'pointer' }}
              >
                <i className={`fa-solid ${isSending ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                <span>{isSending ? 'Sending to Parth\'s Email...' : 'Send Message'}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
