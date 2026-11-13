import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, CornerDownLeft, Maximize2, Minimize2, Sparkles } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: string;
  timestamp: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: `Parth Amburle [CLI Kernel v2.4]\nType 'help' to inspect commands or click the shortcut chips below.`,
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      command: 'whoami',
      output: TERMINAL_COMMANDS['whoami'],
      timestamp: new Date().toLocaleTimeString(),
    }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = TERMINAL_COMMANDS[trimmed] || `Command not found: '${trimmed}'. Type 'help' to see valid commands.`;

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        output,
        timestamp: new Date().toLocaleTimeString(),
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    }
  };

  const shortcutChips = ['skills', 'research', 'projects', 'agentic', 'experience', 'ncc', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Outer Window */}
      <div 
        className={`w-full flex flex-col rounded-2xl border border-white/15 bg-[#090b10] shadow-2xl transition-all duration-200 overflow-hidden ${
          isExpanded ? 'h-[94vh] max-w-6xl' : 'h-[620px] max-w-3xl'
        }`}
      >
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1017] px-4 py-3 select-none">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} title="Close"></span>
            <span className="h-3 w-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Toggle expand"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1.5">
              <TerminalIcon className="h-3.5 w-3.5 text-[#FF6600]" />
              <span>parth@bangalore:~ (zsh)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-zinc-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-rose-400 p-1 rounded hover:bg-white/5 transition-colors"
              title="Close terminal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Suggestion shortcut chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/5 bg-[#0b0e14] px-4 py-2 text-xs font-mono scrollbar-none">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-[#FF6600]" /> Shortcuts:
          </span>
          {shortcutChips.map((chip) => (
            <button
              key={chip}
              onClick={() => runCommand(chip)}
              className="shrink-0 rounded-md border border-white/10 bg-zinc-900/80 px-2 py-0.5 text-zinc-300 hover:border-[#FF6600]/40 hover:text-[#FF6600] transition-colors cursor-pointer"
            >
              ${chip}
            </button>
          ))}
        </div>

        {/* Console logs */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm text-zinc-300 space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#FF6600] font-bold">parth@aiml:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
                <span className="text-[10px] text-zinc-600 ml-auto">{item.timestamp}</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-zinc-300 bg-white/[0.02] p-3 rounded-lg border border-white/5 font-mono text-xs sm:text-sm">
                {item.output}
              </pre>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Bar */}
        <div className="border-t border-white/10 bg-[#0d1017] p-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#090b10] px-3 py-2 focus-within:border-[#FF6600]/60">
            <span className="text-[#FF6600] font-mono text-sm font-bold">parth@aiml:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'research', 'agentic', 'projects'..."
              className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none"
            />
            <button
              onClick={() => runCommand(inputVal)}
              className="flex items-center gap-1 rounded bg-[#FF6600]/15 px-2 py-1 font-mono text-[11px] text-[#FF6600] hover:bg-[#FF6600]/25 transition-colors cursor-pointer"
            >
              <span>Run</span>
              <CornerDownLeft className="h-3 w-3" />
            </button>
          </div>
          <p className="mt-1.5 text-[11px] font-mono text-zinc-500 text-center">
            Tip: Press Enter to execute or tap any chip above.
          </p>
        </div>

      </div>
    </div>
  );
};
