import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6600] font-semibold mb-2">
            <Award className="h-3.5 w-3.5" />
            <span>Academic Rigor & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications & Benchmarks
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
            Formal examinations and specialized coursework evaluated by premier institutes including IIT Kanpur and IIT Roorkee.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0d1017] p-6 hover:border-white/20 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-zinc-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <span className={`rounded-full border px-2.5 py-0.5 font-mono text-xs font-bold ${cert.badgeColor}`}>
                    {cert.score}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF6600] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="h-3.5 w-3.5" /> Verified Completion
                </span>
                <span className="text-zinc-400">IIT / Industry Validated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

