import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-[#121620] px-4 py-3 shadow-2xl backdrop-blur-md">
        <CheckCircle2 className="h-4 w-4 text-[#FF6600]" />
        <span className="font-mono text-xs text-white">{message}</span>
        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-white p-0.5 rounded transition-colors ml-2"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
