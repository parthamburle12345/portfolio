import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const VinodNavbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'AI Focus', href: '#specialties' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo in vinod.co bracket style */}
          <a href="#about" className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            Parth
            <span className="logo-dot">.ai</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons (Theme Toggle, Social Links & Mobile menu) */}
          <div className="nav-actions">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="GitHub Profile (parthamburle12345)"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="LinkedIn Profile (Parth Amburle)"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="icon-btn"
              title="Email (parthamburle123@gmail.com)"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            <button
              id="theme-toggle"
              className="icon-btn"
              onClick={onToggleTheme}
              aria-label="Toggle light/dark theme"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <button
              className="mobile-nav-toggle icon-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open mobile menu"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            Parth
            <span className="logo-dot">.ai</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <button
            className="mobile-nav-toggle icon-btn"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close mobile menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="drawer-link"
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-link"
            style={{ color: 'var(--primary)', fontWeight: 700 }}
            onClick={() => setDrawerOpen(false)}
          >
            <i className="fa-solid fa-file-pdf" style={{ marginRight: 8 }}></i>
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
};

