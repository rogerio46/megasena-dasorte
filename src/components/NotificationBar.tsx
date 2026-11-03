import { useState, useEffect } from 'react';
import { Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface NotificationBarProps {
  onCtaClick: () => void;
}

export function NotificationBar({ onCtaClick }: NotificationBarProps) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (n: number) => n.toString().padStart(2, '0');

  return (
    <div id="top-notification-bar" className="sticky top-0 z-50 bg-gradient-to-r from-emerald-950 via-[#0a1b15] to-emerald-950 border-b border-emerald-500/30 text-xs sm:text-sm py-2.5 px-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Lançamento Oficial Kiwify:
          </span>
          <span className="text-zinc-300 hidden sm:inline">
            Combo Planilha Inteligente + App Mega Análise liberado por R$ 89,90 no Pix
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black/40 border border-emerald-500/30 px-2.5 py-1 rounded-full text-emerald-300 font-mono text-xs">
            <Clock className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Oferta encerra em:</span>
            <span className="font-bold text-white bg-emerald-600/50 px-1 rounded">
              {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </span>
          </div>

          <button
            id="notification-bar-cta"
            onClick={onCtaClick}
            className="hidden md:inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black px-3 py-1 rounded-full transition-colors cursor-pointer"
          >
            Garantir Vaga
          </button>
        </div>
      </div>
    </div>
  );
}
