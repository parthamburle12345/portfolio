import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const VinodHero: React.FC = () => {
  return (
    <section id="about" className="section hero-section">
      <div className="container hero-container">
        
        {/* Left: Profile Image Card with Lite Pink Border Glow */}
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src={PERSONAL_INFO.photoUrl}
              alt={PERSONAL_INFO.name}
              className="hero-profile-img"
              onError={(e) => {
                // If parth-photo.jpg has issues, fallback to parth-avatar.png
                (e.target as HTMLImageElement).src = '/parth-avatar.png';
              }}
            />
            <div className="image-border-glow"></div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="hero-text-content">
          <div className="hero-badge">
            <i className="fa-solid fa-bolt-lightning"></i>
            <span>Bridging Agentic AI & Hyperspectral Remote Sensing</span>
          </div>

          <h1 className="hero-title">{PERSONAL_INFO.name}</h1>
          <p className="hero-subtitle">{PERSONAL_INFO.role}</p>

          <p className="hero-description">
            Pursuing <strong>Post Graduate Diploma in AI (PG-DAI)</strong> at <strong>C-DAC Bangalore</strong> (All-India Rank 1365) and <strong>B.E. in Artificial Intelligence & Machine Learning</strong> from <strong>SIES GST</strong>. Specialized in orchestrating autonomous multi-agent systems, few-shot Vision-Language models, and full-stack spatial platforms. Engineered <strong>SigLIP-LPFormer</strong> to beat the state-of-the-art MambaHSI benchmark with 30-shot sample constraints, backed by the operational discipline of a former <strong>National Cadet Corps (NCC)</strong> cadet.
          </p>

          <div className="hero-contact-info">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <i className="fa-solid fa-paper-plane"></i>
              <span>Get In Touch</span>
            </a>
            <a href={PERSONAL_INFO.resumeUrl} className="btn btn-secondary" download>
              <i className="fa-solid fa-file-pdf"></i>
              <span>Download PDF CV</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="social-link"
              title="Send Direct Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
