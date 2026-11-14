import React from 'react';

export const VinodPublications: React.FC = () => {
  const credentials = [
    {
      badgeIcon: 'fa-solid fa-certificate',
      badgeText: 'Udemy Certified',
      title: 'Machine Learning Specialization',
      text: 'Comprehensive mastery covering Supervised Learning, Unsupervised Clustering, Optimization, Loss Formulations, and production Data Science workflows.',
      stats: [
        { val: 'Verified', lbl: 'Credential Status' },
        { val: 'Mastery', lbl: 'Coursework Scope' },
      ],
    },
    {
      badgeIcon: 'fa-solid fa-award',
      badgeText: 'IIT Kanpur — NPTEL',
      title: 'AI in Industrial & Management Engineering',
      text: 'Rigorous engineering examination evaluated by IIT Kanpur, focused on Operations Management, Decision Support Systems, Heuristic Search, and Industrial Optimization.',
      stats: [
        { val: 'Elite Grade', lbl: 'Classification' },
        { val: 'IIT Kanpur', lbl: 'Evaluating Institute' },
      ],
    },
    {
      badgeIcon: 'fa-solid fa-graduation-cap',
      badgeText: 'IIT Roorkee — NPTEL',
      title: 'Data Analytics with Python',
      text: 'Rigorous analytical examination evaluated by IIT Roorkee, covering Descriptive Statistics, Statistical Inference, Probability Distributions, and numerical libraries.',
      stats: [
        { val: 'Certified', lbl: 'Classification' },
        { val: 'IIT Roorkee', lbl: 'Evaluating Institute' },
      ],
    },
    {
      badgeIcon: 'fa-solid fa-building-columns',
      badgeText: 'University Degree',
      title: 'B.E. in Artificial Intelligence & Machine Learning',
      text: 'SIES Graduate School of Technology, with strong preparatory foundations from Mahatma Phule College and Changu Kana Thakur.',
      stats: [
        { val: 'B.E. AIML', lbl: 'Degree Specialization' },
        { val: 'Graduating 2026', lbl: 'Academic Status' },
      ],
    },
  ];

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Credentials & Academic Rigor</h2>
          <p className="section-subtitle">
            Formal certifications evaluated by premier Indian Institutes of Technology (IITs) and university milestones.
          </p>
        </div>

        <div className="publications-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {credentials.map((item, idx) => (
            <div key={idx} className="pub-card glass-card hover-glow">
              <div className="pub-badge">
                <i className={item.badgeIcon}></i> {item.badgeText}
              </div>

              <h3 className="pub-title">{item.title}</h3>
              <p className="pub-text">{item.text}</p>

              <div className="pub-stats">
                {item.stats.map((s, sIdx) => (
                  <div key={sIdx} className="pub-stat-item">
                    <span className="stat-val">{s.val}</span>
                    <span className="stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
