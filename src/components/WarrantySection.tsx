import { ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface WarrantySectionProps {
  onBuyClick: () => void;
}

export function WarrantySection({ onBuyClick }: WarrantySectionProps) {
  return (
    <section id="warranty-section" className="py-14 px-4 bg-zinc-950/60 border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-emerald-950/40 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
          {/* Badge Visual Seal */}
          <div className="shrink-0 flex flex-col items-center justify-center w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-400 to-teal-300 text-zinc-950 p-2 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full rounded-full border-2 border-dashed border-zinc-950/40 flex flex-col items-center justify-center text-center p-2">
              <ShieldCheck className="w-8 h-8 text-zinc-950 stroke-[2.5]" />
              <span className="text-xl font-black leading-none mt-1">7 DIAS</span>
              <span className="text-[9px] font-black uppercase tracking-wider">GARANTIA BLINDADA</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-block px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Compromisso Incondicional Kiwify
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Seu Risco é 100% Zero. O Risco Fica Todo Conosco.
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              Você tem <strong>7 dias inteiros</strong> a partir da data de compra para testar a Planilha Inteligente e instalar o App Mega Análise no seu celular. Se você não amar a experiência ou achar que não valeu pelo menos 10x o valor de <strong>R$ 89,90</strong>, basta um simples clique na Kiwify para receber todo o seu dinheiro de volta na sua conta, sem perguntas e sem ressentimentos.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="warranty-cta-btn"
                onClick={onBuyClick}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
              >
                <span>Testar Sem Risco por R$ 89,90</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Reembolso 100% automático via Kiwify
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
