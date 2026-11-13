import React, { useState, useEffect } from 'react';
import { VinodNavbar } from './components/VinodNavbar';
import { VinodHero } from './components/VinodHero';
import { VinodSpecialties } from './components/VinodSpecialties';
import { VinodSkills } from './components/VinodSkills';
import { VinodExperience } from './components/VinodExperience';
import { VinodProjects } from './components/VinodProjects';
import { VinodPublications } from './components/VinodPublications';
import { VinodContact } from './components/VinodContact';
import { VinodFooter } from './components/VinodFooter';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { Project } from './data/portfolioData';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme attribute with document.documentElement
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <>
      {/* Ambient Background Accent Glows in Lite Pink */}
      <div className="glow-container">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Header & Navigation */}
      <VinodNavbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="main-content">
        <VinodHero />
        <VinodSpecialties />
        <VinodSkills />
        <VinodExperience />
        <VinodProjects onSelectProject={(project) => setSelectedProject(project)} />
        <VinodPublications />
        <VinodContact onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <VinodFooter />

      {/* Project Architecture Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Celebratory Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </>
  );
}

export default App;
