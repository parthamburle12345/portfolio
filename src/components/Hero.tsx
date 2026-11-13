import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ArrowUpRight, Copy, Check, Shield, Sparkles, MapPin, Cpu, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenTerminal: () => void;
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6, x: 0.3 },
      colors: ['#FF6600', '#10B981', '#38BDF8']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-20 bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF6600]/8 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-3.5 py-1.5 text-xs font-mono text-zinc-300 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-[#FF6600]" />
            <span>Bangalore & Mumbai</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">C-DAC PG-DAI & SIES AIML</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-mono text-[#FF6600]">
            <Shield className="h-3.5 w-3.5" />
            <span>Former NCC Cadet (Discipline & Command)</span>
          </div>
        </div>

        {/* Main Grid: Info + Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (8 cols): Pitch & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block text-xs font-mono uppercase tracking-widest text-[#FF6600] font-semibold mb-2">
                Engineering Autonomous Intelligence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Parth Prashant <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                  Amburle
                </span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-[#FF6600] font-mono">
                AI/ML Engineer & Systems Builder
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl">
              I specialize in <strong className="text-white font-semibold">autonomous multi-agent frameworks</strong>, 
              few-shot <strong className="text-white font-semibold">vision-language remote sensing</strong>, and 
              scalable full-stack AI infrastructure. Engineered <span className="text-[#FF6600] font-mono font-medium">SigLIP-LPFormer</span> to 
              surpass SOTA benchmarks with 30-shot sample constraints.
            </p>

            {/* Quick Action Dock */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-[#FF6600] px-5 py-3 text-sm font-bold text-black shadow-lg shadow-[#FF6600]/25 hover:bg-[#ff771a] transition-all cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-3 text-sm font-mono text-zinc-200 hover:border-[#FF6600]/40 hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <Terminal className="h-4 w-4 text-[#FF6600]" />
                <span>$ launch-cli</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                title="Click to copy email"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-zinc-400" />}
                <span className="text-xs">parthamburle123@gmail.com</span>
              </button>
            </div>

            {/* Micro Tech Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500 font-semibold uppercase text-[10px]">Core Stack:</span>
              <span className="rounded-md border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-zinc-300">PyTorch</span>
              <span className="rounded-md border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-zinc-300">SigLIP / ViT</span>
              <span className="rounded-md border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-zinc-300">CrewAI</span>
              <span className="rounded-md border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-zinc-300">FastAPI</span>
              <span className="rounded-md border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-zinc-300">React 19 / Leaflet</span>
              <span className="rounded-md border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-zinc-300">Python OOP</span>
            </div>
          </div>

          {/* Right Column (5 cols): Visual Profile Bento Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-[#0e1118]/80 p-6 backdrop-blur-xl shadow-2xl glass-panel-hover">
              
              {/* Corner badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Builder</span>
              </div>

              {/* Avatar + Main Identity */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border-2 border-[#FF6600]/40 shadow-lg shadow-[#FF6600]/15 bg-zinc-900">
                    <img
                      src={PERSONAL_INFO.photoUrl}
                      alt="Parth Prashant Amburle"
                      className="h-full w-full object-cover object-top"
                      onError={(e) => {
                        // Fallback in case image format is unavailable
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-lg bg-[#FF6600] text-black font-mono font-bold text-xs shadow-md">
                    AI
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl">Parth Amburle</h3>
                  <p className="font-mono text-xs text-[#FF6600]">@parthamburle12345</p>
                  <p className="mt-1 text-xs text-zinc-400 leading-tight">
                    PG-DAI @ C-DAC Bangalore <br />
                    B.E. AIML @ SIES GST ('26)
                  </p>
                </div>
              </div>

              {/* YC Pitch Highlights Card */}
              <div className="mt-5 space-y-2.5 rounded-xl border border-white/5 bg-zinc-900/50 p-3.5 text-xs">
                <div className="flex items-start gap-2">
                  <Cpu className="h-4 w-4 text-[#FF6600] shrink-0 mt-0.5" />
                  <p className="text-zinc-300">
                    <strong className="text-white">Research Breakthrough:</strong> Engineered 311 spectral bands for SigLIP-LPFormer to beat SOTA MambaHSI in remote sensing.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300">
                    <strong className="text-white">Agentic Production:</strong> 4-agent CrewAI orchestration turning brand briefs into mastered audio in under 180s.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-zinc-300">
                    <strong className="text-white">NCC Foundation:</strong> Military-grade operational discipline applied to software and deep learning research.
                  </p>
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-zinc-800/60 py-2 text-zinc-300 hover:border-white/20 hover:text-white transition-all"
                >
                  <span>github/parth...</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-[#0A66C2]/30 bg-[#0A66C2]/10 py-2 text-blue-300 hover:bg-[#0A66C2]/20 transition-all"
                >
                  <span>linkedin/in...</span>
                  <ArrowUpRight className="h-3 w-3 text-blue-400" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Real Metrics Strip (YC Pitch Style) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/5 bg-[#0e1118]/60 p-4 backdrop-blur-sm hover:border-[#FF6600]/30 transition-all group"
            >
              <div className="text-xs font-mono uppercase text-zinc-400 group-hover:text-[#FF6600] transition-colors">
                {metric.label}
              </div>
              <div className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-zinc-400 leading-snug">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
