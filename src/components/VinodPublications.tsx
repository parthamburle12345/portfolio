import React from 'react';

export const VinodPublications: React.FC = () => {
  const credentials = [
    {
      badgeIcon: 'fa-solid fa-certificate',
      badgeText: 'Udemy Certified',
      title: 'Machine Learning Masterclass',
      text: 'Comprehensive mastery covering Supervised Learning, Unsupervised Clustering, Optimization, Loss Formulations, and production Data Science workflows.',
      stats: [
        { val: '100 / 100', lbl: 'Examination Score' },
        { val: 'Verified', lbl: 'Credential Status' },
      ],
    },
    {
      badgeIcon: 'fa-solid fa-award',
      badgeText: 'IIT Kanpur — NPTEL',
      title: 'AI in Industrial & Management Engineering',
      text: 'Rigorous examination focused on Operations Management, Decision Support Systems, Heuristic Search, and Industrial Optimization.',
      stats: [
        { val: '69 / 100', lbl: 'NPTEL Score' },
        { val: 'Elite Grade', lbl: 'Classification' },
      ],
    },
    {
      badgeIcon: 'fa-solid fa-graduation-cap',
      badgeText: 'IIT Roorkee — NPTEL',
      title: 'Data Analytics with Python',
      text: 'Covered Descriptive Statistics, Statistical Inference, Probability Distributions, and numerical libraries (NumPy, Pandas, Matplotlib).',
      stats: [
        { val: '51 / 100', lbl: 'NPTEL Score' },
        { val: 'Certified', lbl: 'Classification' },
      ],
    },
    {
      badgeIcon: 'fa-solid fa-building-columns',
      badgeText: 'SIES GST & Pre-Eng',
      title: 'Academic Degrees & Honors',
      text: 'SIES GST B.E. in AIML (CGPA: 7.40/10). Higher Secondary Certificate (HSC) at Mahatma Phule (74.00%). Secondary School Certificate (SSC) at Changu Kana Thakur (84.00%).',
      stats: [
        { val: '7.40 / 10', lbl: 'B.E. CGPA' },
        { val: '84% / 74%', lbl: 'SSC / HSC' },
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
