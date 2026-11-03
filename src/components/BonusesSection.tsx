import { Video, FileText, MessageCircle, Gift, Check, Sparkles } from 'lucide-react';
import { BONUSES } from '../data/productData';

interface BonusesSectionProps {
  onBuyClick: () => void;
}

export function BonusesSection({ onBuyClick }: BonusesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-pink-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-cyan-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-emerald-400" />;
      default:
        return <Gift className="w-6 h-6 text-emerald-400" />;
    }
  };

  const totalBonusesValue = BONUSES.reduce((acc, curr) => acc + curr.originalPrice, 0);

  return (
    <section id="bonuses-section" className="py-14 px-4 bg-zinc-950/40 border-y border-zinc-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            Presentes Especiais de Lançamento
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mais de <span className="text-amber-400">R$ {totalBonusesValue.toFixed(2).replace('.', ',')}</span> em Bônus Exclusivos 100% Grátis
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Se você garantir seu acesso hoje pelo Pix de R$ 89,90 na Kiwify, você leva todos estes 3 bônus premium sem pagar nem um centavo a mais:
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all shadow-lg"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                    {getIcon(bonus.iconName)}
                  </div>
                  <span className="text-xs font-bold text-zinc-500 line-through">
                    R$ {bonus.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider">
                  {bonus.tag}
                </span>

                <h3 className="text-base font-bold text-white mt-1 mb-2 leading-snug">
                  {bonus.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Check className="w-4 h-4" />
                  Incluso Gratuitamente
                </span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-black text-[10px]">
                  R$ 0,00
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Recap Box */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-zinc-900 via-emerald-950/40 to-zinc-900 border border-emerald-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs text-zinc-400">Valor Total do Combo com Bônus:</span>
            <div className="text-lg font-bold text-zinc-300 line-through">
              R$ 408,00
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-center sm:text-right">
              <span className="text-xs text-emerald-400 font-semibold uppercase">Preço Promocional Pix Hoje:</span>
              <div className="text-2xl font-black text-white">
                R$ 89,90 <span className="text-xs font-normal text-zinc-400">único</span>
              </div>
            </div>

            <button
              id="bonuses-claim-btn"
              onClick={onBuyClick}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-emerald-500/20"
            >
              Resgatar Meus Bônus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
