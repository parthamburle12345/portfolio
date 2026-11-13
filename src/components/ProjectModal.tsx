import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 'var(--border-radius-lg)',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-surface-opaque)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '24px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  backgroundColor: 'var(--accent-glow)',
                  padding: '3px 8px',
                  borderRadius: 'var(--border-radius-sm)',
                }}
              >
                {project.categoryLabel}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-pink)', fontWeight: 600 }}>
                ★ {project.highlightMetric}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 4 }}>
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="icon-btn"
            style={{ width: 36, height: 36, borderRadius: 'var(--border-radius-sm)' }}
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          {/* Architecture Overview */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="fa-solid fa-microchip"></i> System & Mathematical Architecture
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, padding: '12px 16px', background: 'var(--bg-surface)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)' }}>
              {project.architecture.overview}
            </p>
          </div>

          {/* Key Innovations */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-pink)', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="fa-solid fa-bolt"></i> Core Innovations & Technical Highlights
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {project.architecture.keyInnovations.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    padding: '10px 14px',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <i className="fa-solid fa-check" style={{ color: 'var(--primary)', marginTop: 3 }}></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline Flow */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-purple)', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="fa-solid fa-diagram-project"></i> Pipeline Sequence
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {project.architecture.flow.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 12px',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-glow)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                    }}
                  >
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantitative Impact */}
          <div
            style={{
              padding: '14px 18px',
              borderRadius: 'var(--border-radius-md)',
              border: '1px solid rgba(244, 114, 182, 0.3)',
              backgroundColor: 'var(--accent-glow)',
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 4 }}>
              ★ Quantitative Benchmark / Real-World Impact
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
              {project.architecture.benchmarkOrImpact}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 8 }}>
              Technologies Utilized:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.architecture.technicalStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--border-radius-sm)',
                    fontSize: '0.75rem',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--bg-surface)',
          }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <i className="fa-brands fa-github"></i> View GitHub Repo
          </a>

          <button onClick={onClose} className="btn btn-primary btn-sm">
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
