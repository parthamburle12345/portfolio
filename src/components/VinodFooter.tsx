import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const VinodFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>

        <div className="footer-links">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <i className="fa-solid fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

