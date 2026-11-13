import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, FileText, Check, Menu, X, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onOpenTerminal: () => void;
  onShowToast: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    
    // Trigger subtle celebratory confetti
    confetti({
      particleCount: 28,
      spread: 45,
      origin: { y: 0.1, x: 0.85 },
      colors: ['#FF6600', '#10B981', '#ffffff']
    });

    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#08090d]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Left: Brand Identity & Status */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF6600] font-mono text-sm font-black text-black shadow-lg shadow-[#FF6600]/25 transition-transform group-hover:scale-105">
              PA
            </span>
            <div className="hidden sm:block">
              <span className="font-semibold tracking-tight text-white group-hover:text-[#FF6600] transition-colors">
                parth.amburle
              </span>
              <span className="font-mono text-xs text-zinc-500 block leading-none">
                aiml builder
              </span>
            </div>
          </a>

          {/* Active Status Pill */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px]">Open to AI / Founding Roles</span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-zinc-900/60 p-1 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 rounded-full bg-[#FF6600]/10 px-3 py-1.5 font-mono text-[11px] text-[#FF6600] border border-[#FF6600]/30 hover:bg-[#FF6600]/20 transition-all cursor-pointer"
            title="Open Interactive CLI Terminal"
          >
            <Terminal className="h-3 w-3" />
            <span>cli</span>
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:border-[#FF6600]/40 hover:text-white transition-all cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="h-3.5 w-3.5 text-[#FF6600]" />
                <span>parthamburle123</span>
              </>
            )}
          </button>

          {/* Resume Download */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-[#FF6600] px-3 py-1.5 text-xs font-semibold text-black shadow-md shadow-[#FF6600]/20 hover:bg-[#ff771a] transition-all cursor-pointer"
          >
            <FileText className="h-3.5 w-3.5" />
            <span className="hidden xs:inline">Resume</span>
          </a>

          {/* Social Links */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-zinc-900/70 p-1.5 text-zinc-400 hover:border-white/20 hover:text-white transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-zinc-900/70 p-1.5 text-zinc-400 hover:border-white/20 hover:text-white transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg border border-white/10 bg-zinc-900/70 p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0e14] px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400 font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to AI / Founding Roles</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border border-white/5 bg-zinc-900/50 px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#FF6600]/30 bg-[#FF6600]/10 py-2 font-mono text-xs text-[#FF6600]"
            >
              <Terminal className="h-3.5 w-3.5" />
              <span>Launch Interactive Terminal</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-zinc-900 py-2 text-xs font-mono text-zinc-300"
            >
              <Mail className="h-3.5 w-3.5 text-[#FF6600]" />
              <span>Copy {PERSONAL_INFO.email}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
