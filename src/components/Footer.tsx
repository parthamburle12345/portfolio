import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#07080c] py-12 text-xs font-mono text-zinc-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF6600] font-mono text-xs font-black text-black">
              PA
            </span>
            <div>
              <span className="font-semibold text-white">Parth Prashant Amburle</span>
              <span className="block text-[11px] text-zinc-500">AI/ML Engineer & Systems Builder</span>
            </div>
          </div>

          {/* Socials & CLI trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-[#FF6600] transition-colors"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>terminal</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-[#FF6600] transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="rounded-lg border border-white/10 bg-zinc-900 p-2 text-zinc-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Hosting Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 Parth Amburle. Designed in Y Combinator builder aesthetic.
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>Optimized for Vercel Edge Deployment • React 19 + Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
