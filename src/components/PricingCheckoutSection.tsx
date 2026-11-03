import { Check, ShieldCheck, Zap, Lock, Sparkles, Smartphone, FileSpreadsheet, Gift, ArrowRight } from 'lucide-react';

interface PricingCheckoutSectionProps {
  onBuyClick: () => void;
}

export function PricingCheckoutSection({ onBuyClick }: PricingCheckoutSectionProps) {
  return (
    <section id="pricing-section" className="py-16 px-4 relative overflow-hidden">
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-emerald-400 text-xs font-black uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30 shadow-sm">
            ⚡ OFERTA DE LANÇAMENTO EXCLUSIVA
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tenha Acesso Completo Hoje Por Menos de R$ 2,99 Por Dia
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Sem mensalidades eternas. Sem taxas extras. Pague uma única vez no Pix e use para sempre no seu celular e computador.
          </p>
        </div>

        {/* Pricing Card with Golden Border */}
        <div className="bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-950 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(16,185,129,0.25)] relative overflow-hidden">
          
          {/* Top Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-400 text-zinc-950 font-black text-[11px] uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow-md">
            MELHOR CUSTO-BENEFÍCIO KIWIFY
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Included Items Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Combo Completo Oficial
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Planilha Inteligente & App Mega Análise
                </h3>
                <p className="text-zinc-400 text-xs mt-1">
                  Liberado na hora através da plataforma segura da <strong>Kiwify</strong>.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Planilha Inteligente Automatizada:</strong> compatível com Google Sheets e Excel.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>App Web PWA Mega Análise:</strong> instale na tela inicial do celular em 5 segundos.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-pink-300">Bônus #1:</strong> Guia de Vídeos Virais no TikTok para Vender na Bio (R$ 97).
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-cyan-300">Bônus #2:</strong> Pack de 10 Dashboards Executivos em PDF (R$ 67).
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="text-amber-300">Bônus #3:</strong> Suporte VIP no WhatsApp e Atualizações Vitalícias (R$ 47).
                  </span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>Garantia Incondicional de 7 Dias:</strong> Risco ZERO para você.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Price Tag & Checkout Button */}
            <div className="lg:col-span-5 bg-zinc-950/80 border border-emerald-500/40 rounded-2xl p-6 text-center relative flex flex-col justify-between">
              <div>
                <span className="text-xs text-zinc-400 line-through">De R$ 197,00</span>
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mt-0.5">
                  Preço Exclusivo de Lançamento
                </p>

                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-sm font-bold text-zinc-300">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">89</span>
                  <span className="text-2xl font-bold text-emerald-400">,90</span>
                </div>

                <p className="text-xs text-zinc-400 mt-1">
                  À vista no <strong>Pix</strong> (Pagamento Único)
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  ou 10x de R$ 10,25 no cartão de crédito
                </p>
              </div>

              {/* High-Converting CTA Button */}
              <div className="mt-6">
                <button
                  id="pricing-checkout-btn"
                  onClick={onBuyClick}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-black text-base uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5 fill-zinc-950" />
                  <span>COMPRAR AGORA NO PIX</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="mt-4 flex flex-col items-center gap-1.5 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ambiente 100% Criptografado Kiwify</span>
                  </div>
                  <span className="text-zinc-500">
                    Acesso enviado para o seu e-mail em segundos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security / Kiwify Badges Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-white">Checkout Kiwify</p>
            <p className="text-[10px] text-zinc-500">Plataforma Líder</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
            <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-white">Pix Automático</p>
            <p className="text-[10px] text-zinc-500">Liberação Imediata</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
            <Smartphone className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-white">Instalação PWA</p>
            <p className="text-[10px] text-zinc-500">iOS e Android</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
            <Sparkles className="w-5 h-5 text-pink-400 mx-auto mb-1" />
            <p className="text-xs font-bold text-white">7 Dias de Teste</p>
            <p className="text-[10px] text-zinc-500">Risco 100% Zero</p>
          </div>
        </div>
      </div>
    </section>
  );
}
