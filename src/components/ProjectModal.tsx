import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Cpu, Layers, CheckCircle, ArrowRight, Zap, Award } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-white/15 bg-[#0b0e14] shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 bg-[#0f121a] p-5 sm:p-6">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-[#FF6600]/30 bg-[#FF6600]/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-[#FF6600]">
                {project.categoryLabel}
              </span>
              <span className="font-mono text-xs text-emerald-400 font-medium">
                ★ {project.highlightMetric}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-zinc-900 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* Architecture Overview */}
          <div className="space-y-2">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#FF6600] font-bold">
              <Cpu className="h-4 w-4" /> System & Mathematical Architecture
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
              {project.architecture.overview}
            </p>
          </div>

          {/* Key Innovations */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
              <Zap className="h-4 w-4" /> Core Innovations & Engineering Highlights
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.architecture.keyInnovations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-zinc-900/40 p-3 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Execution Pipeline Flow */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
              <Layers className="h-4 w-4" /> Pipeline Sequence
            </h3>
            <div className="space-y-2">
              {project.architecture.flow.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#12151f] px-3.5 py-2.5 text-xs sm:text-sm font-mono text-zinc-200"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6600]/20 text-[#FF6600] text-[11px] font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="flex-1">{step}</span>
                  {idx < project.architecture.flow.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-zinc-600 shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quantitative Impact / Benchmark */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
              <Award className="h-4 w-4" /> Quantitative Benchmark / Impact
            </div>
            <p className="text-xs sm:text-sm text-zinc-200">
              {project.architecture.benchmarkOrImpact}
            </p>
          </div>

          {/* Technical Stack Tags */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-zinc-500 font-semibold">
              Technologies & Frameworks Utilized:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.architecture.technicalStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-zinc-900/80 px-2.5 py-1 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#0d1017] p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>Author:</span>
            <span className="text-white font-medium">Parth Amburle</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-mono font-medium text-white hover:border-[#FF6600]/40 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Inspect on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="rounded-xl bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
