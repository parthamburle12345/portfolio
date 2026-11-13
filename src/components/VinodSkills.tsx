import React, { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: 'ai' | 'vision' | 'languages' | 'fullstack' | 'tools';
}

export const VinodSkills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const skills: Skill[] = [
    // AI & Deep Learning
    { name: 'CrewAI Multi-Agent', icon: 'fa-solid fa-robot', category: 'ai' },
    { name: 'PyTorch', icon: 'fa-solid fa-fire', category: 'ai' },
    { name: 'ElevenLabs API', icon: 'fa-solid fa-wave-square', category: 'ai' },
    { name: 'Prompt Engineering', icon: 'fa-solid fa-wand-magic-sparkles', category: 'ai' },
    { name: 'LangChain & LLMs', icon: 'fa-solid fa-link', category: 'ai' },
    { name: 'Scikit-Learn', icon: 'fa-solid fa-chart-line', category: 'ai' },

    // Vision & Remote Sensing
    { name: 'SigLIP Foundation Model', icon: 'fa-solid fa-eye', category: 'vision' },
    { name: 'Vision Transformers (ViT)', icon: 'fa-solid fa-braille', category: 'vision' },
    { name: 'Hyperspectral (HSI)', icon: 'fa-solid fa-satellite', category: 'vision' },
    { name: 'OpenAI CLIP', icon: 'fa-solid fa-images', category: 'vision' },
    { name: 'Semantic Segmentation', icon: 'fa-solid fa-draw-polygon', category: 'vision' },
    { name: 'Few-Shot Learning', icon: 'fa-solid fa-bullseye', category: 'vision' },

    // Languages
    { name: 'Python 3', icon: 'fa-brands fa-python', category: 'languages' },
    { name: 'Java', icon: 'fa-brands fa-java', category: 'languages' },
    { name: 'C / C++', icon: 'fa-solid fa-code', category: 'languages' },
    { name: 'SQL', icon: 'fa-solid fa-database', category: 'languages' },
    { name: 'JavaScript / TypeScript', icon: 'fa-brands fa-js', category: 'languages' },

    // Full-Stack & WebGIS
    { name: 'React 19 & Vite', icon: 'fa-brands fa-react', category: 'fullstack' },
    { name: 'Leaflet WebGIS', icon: 'fa-solid fa-map-location-dot', category: 'fullstack' },
    { name: 'Node.js & Express', icon: 'fa-brands fa-node-js', category: 'fullstack' },
    { name: 'Django', icon: 'fa-solid fa-cube', category: 'fullstack' },
    { name: 'FastAPI', icon: 'fa-solid fa-bolt', category: 'fullstack' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf', category: 'fullstack' },

    // Tools & Systems
    { name: 'Git & GitHub', icon: 'fa-brands fa-github', category: 'tools' },
    { name: 'Docker', icon: 'fa-brands fa-docker', category: 'tools' },
    { name: 'Google Colab Pro', icon: 'fa-solid fa-laptop-code', category: 'tools' },
    { name: 'Tkinter GUI', icon: 'fa-solid fa-window-maximize', category: 'tools' },
    { name: 'Java Swing', icon: 'fa-solid fa-desktop', category: 'tools' },
  ];

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI & Deep Learning' },
    { id: 'vision', label: 'Vision & Remote Sensing' },
    { id: 'languages', label: 'Languages' },
    { id: 'fullstack', label: 'Full-Stack & WebGIS' },
    { id: 'tools', label: 'Tools & Systems' },
  ];

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Click categories to filter the technology landscape I build and research on.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              className={`filter-btn ${activeFilter === btn.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-item glass-card" data-category={skill.category}>
              <span className="skill-icon">
                <i className={skill.icon}></i>
              </span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
