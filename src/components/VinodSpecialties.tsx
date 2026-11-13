import React from 'react';

export const VinodSpecialties: React.FC = () => {
  const specialties = [
    {
      icon: 'fa-solid fa-microchip',
      iconColor: 'color-pink',
      title: 'Agentic AI & Multi-Agent Frameworks',
      description: 'Designing autonomous agentic pipelines with CrewAI, LangChain, and structured LLM tool orchestration. Built the AI Creative Director ad studio that produces finished broadcast audio ads in under 3 minutes.',
    },
    {
      icon: 'fa-solid fa-satellite',
      iconColor: 'color-pink',
      title: 'Hyperspectral Remote Sensing (HSI)',
      description: 'Novel Vision-Language deep learning pipeline (SigLIP-LPFormer) with 311 engineered spectral channels beating SOTA MambaHSI on Pavia University dataset under extreme 30-shot scarcity.',
    },
    {
      icon: 'fa-solid fa-map-location-dot',
      iconColor: 'color-purple',
      title: 'WebGIS & Decision Support Systems',
      description: 'Full-stack spatial monitoring platform for India\'s Forest Rights Act (FRA) integrating Leaflet mapping, Tesseract OCR document extraction, and AI scheme matching algorithms.',
    },
    {
      icon: 'fa-solid fa-gears',
      iconColor: 'color-yellow',
      title: 'Industrial Optimization & ML Pipelines',
      description: 'Algorithmic constraint satisfaction scheduling in PharmaScheduler and end-to-end exploratory data analysis & regression predictive engines for academic performance.',
    },
  ];

  return (
    <section id="specialties" className="section specialties-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">AI & Engineering Focus</h2>
          <p className="section-subtitle">
            Bridging foundational deep learning research with production-grade agentic architectures.
          </p>
        </div>

        <div className="grid-cards">
          {specialties.map((item, idx) => (
            <div key={idx} className="feature-card glass-card hover-glow">
              <div className={`feature-icon ${item.iconColor}`}>
                <i className={item.icon}></i>
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
