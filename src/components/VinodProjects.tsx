import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';

interface VinodProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const VinodProjects: React.FC<VinodProjectsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'research' | 'systems'>('research');

  const researchProjects = PROJECTS.filter((p) => p.id === 'siglip-lpformer' || p.id === 'pharmascheduler');
  const systemProjects = PROJECTS.filter((p) => p.id === 'ai-creative-director' || p.id === 'systems-2048');

  const currentList = activeTab === 'research' ? researchProjects : systemProjects;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            Toggle between foundational AI research benchmarks and autonomous agentic systems.
          </p>
        </div>

        {/* Tab Buttons matching vinod.co */}
        <div className="tabs-wrapper">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
              onClick={() => setActiveTab('research')}
            >
              Research & SOTA Benchmarks
            </button>
            <button
              className={`tab-btn ${activeTab === 'systems' ? 'active' : ''}`}
              onClick={() => setActiveTab('systems')}
            >
              Agentic AI & Systems
            </button>
          </div>
        </div>

        {/* Grid Projects */}
        <div className="grid-projects" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {currentList.map((project) => (
            <div key={project.id} className="project-card glass-card hover-glow">
              <div className="project-info">
                <span className="project-period">
                  ★ {project.highlightMetric}
                </span>

                <h3 className="project-name">{project.title}</h3>

                <p className="project-client">
                  <i className="fa-solid fa-code-branch" style={{ color: 'var(--primary)', marginRight: 6 }}></i>
                  {project.categoryLabel}
                </p>

                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Project Card Action Row */}
                <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1, padding: '8px 12px', fontSize: '0.8rem' }}
                  >
                    <i className="fa-solid fa-book-open"></i> Deep Dive
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '8px 12px', fontSize: '0.8rem' }}
                    title="View Source on GitHub"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
