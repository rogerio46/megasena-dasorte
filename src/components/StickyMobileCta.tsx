import { Zap, ShieldCheck } from 'lucide-react';

interface StickyMobileCtaProps {
  onBuyClick: () => void;
  pricePix: number;
}

export function StickyMobileCta({ onBuyClick, pricePix }: StickyMobileCtaProps) {
  return (
    <div id="sticky-mobile-cta-bar" className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-zinc-950/95 border-t border-emerald-500/40 p-3 backdrop-blur-lg shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-zinc-400 block line-through">De R$ 197,00</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xs font-bold text-emerald-400">Pix:</span>
            <span className="text-lg font-black text-white">R$ {pricePix.toFixed(2).replace('.', ',')}</span>
          </div>
          <span className="text-[9px] text-zinc-400 flex items-center gap-1">
            <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
            7 Dias Garantia
          </span>
        </div>

        <button
          id="sticky-mobile-buy-btn"
          onClick={onBuyClick}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
        >
          <Zap className="w-4 h-4 fill-zinc-950" />
          <span>Comprar no Pix</span>
        </button>
      </div>
    </div>
  );
}
