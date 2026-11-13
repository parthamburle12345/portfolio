import React from 'react';
import { Cpu, Award, Zap, Layers, CheckCircle2, ArrowUpRight, TrendingUp } from 'lucide-react';

export const ResearchSpotlight: React.FC = () => {
  return (
    <section id="research" className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden bg-[#090b11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-400 font-semibold mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>Core Research Contribution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hyperspectral Remote Sensing & SigLIP-LPFormer
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-3xl">
            Surpassing the state-of-the-art MambaHSI benchmark (95.80% OA) on the Pavia University dataset under extreme few-shot sample constraints. Mentored by Dr. Arundhati Das.
          </p>
        </div>

        {/* Big Spotlight Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: The Problem & The Solution (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#0d1017] p-6 sm:p-8 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF6600] font-bold">
                01. The Challenge
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Extreme Data Scarcity in 100+ Band Spectral Cubes
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                While typical RGB sensors capture only 3 broad spectral bands (Red, Green, Blue), airborne hyperspectral sensors capture hundreds of contiguous narrow bands. Pavia University contains <strong className="text-white">103 spectral channels</strong> per pixel. In real-world defense and mining applications, labeled ground truth is exceptionally expensive. Our benchmark constrained training to only <strong className="text-[#FF6600]">30 labeled samples per class (270 total pixels)</strong> — an extreme scarcity regime where conventional deep neural networks catastrophically overfit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-white/5 bg-zinc-900/60 p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase">
                  <Zap className="h-4 w-4" /> Feature Engineering (311 Bands)
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Engineered 311 total spectral channels from 103 raw bands:
                  <br />• 102 continuous spectral derivative gradient bands (rate of chemical absorption change)
                  <br />• 3 Vegetation Indices: NDVI, SAVI, Iron Oxide
                  <br />• L2-normalized spectral radiance view
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/60 p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase">
                  <Layers className="h-4 w-4" /> Vision-Language Adaptation
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Instead of naive training from scratch, adapted SigLIP & ViT backbones pretrained on billions of images. Introduced a learnable prompt adapter to map continuous spectral physics directly into multi-modal semantic latent space.
                </p>
              </div>
            </div>

            {/* Benchmark Comparison Table */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase text-zinc-400 font-bold">
                Pavia University Benchmark Comparison (Few-Shot 30 Samples/Class):
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-400">
                      <th className="pb-2">Model Architecture</th>
                      <th className="pb-2">Paradigm</th>
                      <th className="pb-2">Samples / Class</th>
                      <th className="pb-2 text-right">Overall Accuracy (OA)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-300">
                    <tr>
                      <td className="py-2.5 text-zinc-400">Standard 3D-CNN</td>
                      <td className="py-2.5">Supervised from scratch</td>
                      <td className="py-2.5">30</td>
                      <td className="py-2.5 text-right text-rose-400">~82.4%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-zinc-400">Vision Transformer (ViT)</td>
                      <td className="py-2.5">Spatial Attention</td>
                      <td className="py-2.5">30</td>
                      <td className="py-2.5 text-right text-amber-400">~88.9%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-zinc-300 font-medium">MambaHSI (SOTA Benchmark)</td>
                      <td className="py-2.5">Selective State Space</td>
                      <td className="py-2.5">30</td>
                      <td className="py-2.5 text-right font-semibold text-zinc-200">95.80%</td>
                    </tr>
                    <tr className="bg-[#FF6600]/10 text-white font-bold border-l-2 border-[#FF6600]">
                      <td className="py-2.5 pl-2 text-[#FF6600]">SigLIP-LPFormer (Our Model)</td>
                      <td className="py-2.5">VL Pretrained + 311 Spectral Grad</td>
                      <td className="py-2.5">30</td>
                      <td className="py-2.5 text-right text-emerald-400 font-black">96.2%+ (Beats SOTA)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Card 2: Applications & Real-World Impact (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#0d1017] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                02. Real-World Applications
              </span>
              <h3 className="text-lg font-bold text-white">
                Where Hyperspectral AI Transforms Industries
              </h3>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="rounded-lg border border-white/5 bg-zinc-900/40 p-3">
                  <div className="font-bold text-white mb-1">🌾 Precision Agriculture</div>
                  <p className="text-zinc-400 leading-relaxed">
                    Detects microscopic fungal infections and moisture deficits weeks before foliage shows visible discoloration to human or RGB cameras.
                  </p>
                </div>

                <div className="rounded-lg border border-white/5 bg-zinc-900/40 p-3">
                  <div className="font-bold text-white mb-1">⛏️ Mineral & Lithium Prospecting</div>
                  <p className="text-zinc-400 leading-relaxed">
                    Identifies exposed copper, lithium, and rare-earth mineral signatures directly from satellite reflectance without destructive exploratory drilling.
                  </p>
                </div>

                <div className="rounded-lg border border-white/5 bg-zinc-900/40 p-3">
                  <div className="font-bold text-white mb-1">🛰️ Defense & Camouflage Defeat</div>
                  <p className="text-zinc-400 leading-relaxed">
                    Distinguishes artificial camouflage pigments from natural chlorophyll canopy based on infrared spectral curve gradients.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Mentorship:</span>
                <span className="text-white font-semibold">Dr. Arundhati Das</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mt-1">
                <span>Team Size:</span>
                <span className="text-white">4 Engineers</span>
              </div>
              <a
                href="https://github.com/parthamburle12345"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 text-xs font-mono text-zinc-200 transition-colors"
              >
                <span>Inspect Notebooks on GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#FF6600]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
