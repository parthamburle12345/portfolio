import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, GraduationCap, Shield, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const getIconForType = (type: string) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="h-4 w-4 text-[#FF6600]" />;
      case 'education':
        return <GraduationCap className="h-4 w-4 text-cyan-400" />;
      case 'leadership':
        return <Shield className="h-4 w-4 text-emerald-400" />;
      default:
        return <Briefcase className="h-4 w-4 text-zinc-400" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6600] font-semibold mb-2">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Trajectory & Formation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience, Education & Discipline
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            A background combining advanced academic institutions, industrial data science internships, and military-grade leadership training.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
          {EXPERIENCES.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline marker icon */}
              <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0d1017] shadow-lg group-hover:border-[#FF6600] transition-colors">
                {getIconForType(item.type)}
              </div>

              {/* Main Card */}
              <div className="rounded-2xl border border-white/10 bg-[#0c0f16] p-6 backdrop-blur-sm group-hover:border-white/20 transition-all">
                
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FF6600] transition-colors">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="rounded-full border border-[#FF6600]/30 bg-[#FF6600]/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#FF6600]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-zinc-300 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-zinc-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5 text-zinc-400">
                      <MapPin className="h-3 w-3 text-zinc-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Key Points */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-300">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#FF6600] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-[11px] font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Academic Foundation Footnote */}
        <div className="mt-12 rounded-xl border border-white/5 bg-[#0f121a] p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 font-bold">12</span>
            <div>
              <div className="text-zinc-200 font-semibold">Mahatma Phule Arts, Science & Commerce College</div>
              <div className="text-zinc-400">Higher Secondary Certificate (HSC) • 74.00% (2022)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 font-bold">10</span>
            <div>
              <div className="text-zinc-200 font-semibold">Changu Kana Thakur Vidyalaya</div>
              <div className="text-zinc-400">Secondary School Certificate (SSC) • 84.00% (2020)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
