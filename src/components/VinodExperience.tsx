import React from 'react';

export const VinodExperience: React.FC = () => {
  const experiences = [
    {
      date: 'Aug 2024 - Present',
      role: 'Post Graduate Diploma in AI (PG-DAI)',
      company: 'C-DAC Bangalore (Centre for Development of Advanced Computing)',
      location: 'Bangalore, Karnataka, India',
      badge: 'CCAT AIR: 1365',
      bullets: [
        'Secured prestigious admission into C-DAC Bangalore with an All-India Rank (AIR) of 1365 in CCAT.',
        'Undergoing advanced post-graduate specializations in Deep Learning, Generative AI, NLP, and Distributed Computing.',
        'Actively conducting research into Multi-Agent pipelines, parameter-efficient fine-tuning, and scalable deep learning architectures.',
        'Investigating Vision-Language models, prompt adaptation, and model quantization for low-latency inference.',
      ],
    },
    {
      date: 'Aug 2024 - Sep 2024',
      role: 'Machine Learning & Data Science Intern',
      company: 'DARPin Dynamics',
      location: 'Remote / India',
      badge: 'Industry Internship',
      bullets: [
        'Conducted technical research and algorithmic data extraction to scrape, mine, and curate domain-specific corpora.',
        'Executed end-to-end data engineering workflows including anomaly detection, feature extraction, and automated preprocessing for ML model readiness.',
        'Collaborated on data pipeline throughput optimization and exploratory predictive modeling.',
      ],
    },
    {
      date: '2022 - 2026',
      role: 'B.E. in Artificial Intelligence & Machine Learning',
      company: 'SIES Graduate School of Technology',
      location: 'Navi Mumbai, Maharashtra, India',
      badge: 'CGPA: 7.40 / 10',
      bullets: [
        'Specialized in Artificial Intelligence, Deep Learning, Vision Transformers, and Multi-Agent Architectures.',
        'Mentored by Dr. Arundhati Das on groundbreaking Hyperspectral Image Classification research using SigLIP-LPFormer.',
        'Engineered complete production-grade systems including the AI Creative Director, PharmaScheduler, and interactive software tools.',
      ],
    },
    {
      date: 'Disciplined Leadership Training',
      role: 'Former Cadet — National Cadet Corps (NCC)',
      company: 'National Cadet Corps (NCC)',
      location: 'Maharashtra, India',
      badge: 'Discipline & Command',
      bullets: [
        'Instilled peak operational discipline, high-stakes decision making, and standard operating procedure (SOP) compliance.',
        'Carried forward military-grade mental stamina, strategic planning, and team leadership directly into engineering execution and research rigor.',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            A timeline showcasing postgraduate AI research, industrial internships, and leadership training.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
              
              <div className="timeline-content glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <h3 className="job-role">{exp.role}</h3>
                    <h4 className="job-company">{exp.company}</h4>
                  </div>
                  {exp.badge && (
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: 'var(--border-radius-full)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--accent-glow)',
                        color: 'var(--primary)',
                        border: '1px solid var(--primary)',
                      }}
                    >
                      {exp.badge}
                    </span>
                  )}
                </div>

                <p className="job-location">
                  <i className="fa-solid fa-location-dot"></i> {exp.location}
                </p>

                <ul className="job-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

