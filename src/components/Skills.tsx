import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Code, Cpu, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIconForCategory = (name: string) => {
    switch (name) {
      case 'Agentic AI & LLMs':
        return <Terminal className="h-4 w-4 text-[#FF6600]" />;
      case 'Deep Learning & Vision':
        return <Cpu className="h-4 w-4 text-purple-400" />;
      case 'Full-Stack & WebGIS':
        return <Code className="h-4 w-4 text-cyan-400" />;
      default:
        return <Wrench className="h-4 w-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6600] font-semibold mb-2">
            <Code className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Toolchain & Tech Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            A battle-tested stack spanning deep learning research frameworks, agentic automation libraries, and scalable full-stack application servers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d1017] p-6 hover:border-[#FF6600]/30 transition-all duration-200"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/5">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/5">
                    {getIconForCategory(cat.category)}
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-zinc-900/40 px-3 py-2 text-xs"
                    >
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      <span className="font-mono text-[11px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                Production & Research Tested
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
