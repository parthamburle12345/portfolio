import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ResearchSpotlight } from './components/ResearchSpotlight';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { TerminalModal } from './components/Terminal';
import { Toast } from './components/Toast';
import { Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Keyboard shortcut: Cmd/Ctrl + K opens terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onShowToast={handleShowToast}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onShowToast={handleShowToast}
        />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ResearchSpotlight />

        <Skills />

        <Experience />

        <Certifications />

        <Contact
          onShowToast={handleShowToast}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
