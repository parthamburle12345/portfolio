import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Cpu, Layers, Sparkles, Filter, BookOpen } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'vision', label: 'Vision & Remote Sensing' },
    { id: 'agentic', label: 'Agentic & LLMs' },
    { id: 'fullstack', label: 'WebGIS & Full-Stack' },
    { id: 'ml', label: 'Data Science & Optimization' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6600] font-semibold mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Production & Research Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Research
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
              From beating state-of-the-art vision benchmarks under extreme few-shot data scarcity to autonomous agentic production pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-white/10 bg-[#0f121a]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF6600] text-black font-semibold shadow'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0f16]/90 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#FF6600]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6600]/10"
            >
              <div>
                {/* Card Top: Category & Metric Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-md border border-white/10 bg-zinc-900/80 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                    {project.categoryLabel}
                  </span>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                    {project.highlightMetric}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF6600] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-zinc-400">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 rounded-lg bg-zinc-900 hover:bg-[#FF6600]/15 hover:text-[#FF6600] hover:border-[#FF6600]/30 border border-white/10 px-3 py-1.5 text-xs font-mono font-medium text-zinc-300 transition-colors cursor-pointer"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Deep Dive</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-lg border border-white/10 bg-zinc-900/50 p-2 text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                  </a>

                  <span
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 px-2 py-1 bg-white/[0.02] rounded border border-white/5"
                    title="Interactive live deployment hyperlink will be attached upon container publishing"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span>
                    <span>Ready to deploy</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footnote on project deployments */}
        <div className="mt-8 rounded-xl border border-white/5 bg-[#0f121a] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#FF6600] animate-ping"></span>
            <span>All source code repositories, research notebooks, and dataset artifacts are cataloged on GitHub.</span>
          </div>
          <a
            href="https://github.com/parthamburle12345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6600] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Visit @parthamburle12345</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
