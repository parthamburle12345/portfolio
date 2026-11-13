import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7, x: 0.3 },
      colors: ['#FF6600', '#10B981', '#ffffff']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#FF6600', '#38BDF8', '#10B981']
    });
    onShowToast("Message prepared! Opening your mail client...");

    // Construct mailto link
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/5 relative bg-grid-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6600] font-semibold mb-2">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Autonomous Systems
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Open to AI Research Engineer, Founding ML Engineer, and High-Impact Software Engineering roles.
          </p>
        </div>

        {/* Contact Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0d1017] p-6 space-y-4 hover:border-[#FF6600]/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 uppercase font-semibold">Direct Email</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-lg font-mono font-bold text-white hover:text-[#FF6600] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-zinc-400 mt-1">
                  Guaranteed response within 24 hours.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#FF6600] hover:bg-[#ff771a] py-2.5 text-xs font-mono font-bold text-black transition-all cursor-pointer"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="rounded-xl border border-white/10 bg-zinc-900 hover:bg-zinc-800 p-2.5 text-zinc-300 hover:text-white transition-colors"
                  title="Open mail application"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Details Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d1017] p-4 hover:border-white/20 transition-all group"
              >
                <GithubIcon className="h-5 w-5 text-zinc-400 group-hover:text-white" />
                <div>
                  <div className="text-zinc-400 text-[10px]">GitHub</div>
                  <div className="text-white font-medium">@parthamburle12345</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d1017] p-4 hover:border-blue-500/40 transition-all group"
              >
                <LinkedinIcon className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-zinc-400 text-[10px]">LinkedIn</div>
                  <div className="text-white font-medium">Parth Amburle</div>
                </div>
              </a>
            </div>

            {/* Location & Phone Card */}
            <div className="rounded-xl border border-white/5 bg-[#0b0e14] p-4 space-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FF6600]" />
                <span>Base: Bangalore & Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>Phone: {PERSONAL_INFO.phone}</span>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Message Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0d1017] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Direct Dispatch
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Drop an idea, invite to an interview, or inquire about SigLIP-LPFormer research.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sam Altman"
                    className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6600]/60 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                    Your Email <span className="text-[#FF6600]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sam@openai.com"
                    className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6600]/60 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                  Message / Role Scope <span className="text-[#FF6600]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hey Parth, saw your SigLIP-LPFormer research and CrewAI work. We'd love to chat about..."
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF6600]/60 font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF6600] hover:bg-[#ff771a] py-3 text-xs sm:text-sm font-bold text-black shadow-lg shadow-[#FF6600]/20 transition-all cursor-pointer disabled:opacity-75"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message via Mail Client</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
