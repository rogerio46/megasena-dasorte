import { Sparkles, ArrowRight, ShieldCheck, Zap, Smartphone, Check, Star } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative pt-8 pb-14 px-4 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-950/50 mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Lançamento Oficial Kiwify • Preço Promocional Pix</span>
        </div>

        {/* Magnetic Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          O Fim das Planilhas Chatas: Tenha o Poder dos Dados e o{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            App Mega Análise
          </span>{' '}
          Instalado Direto no Seu Celular
        </h1>

        {/* High-Impact Subtitle */}
        <p className="mt-5 text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
          O único combo do mercado que une uma <strong className="text-white">Planilha Inteligente Automatizada</strong> a um{' '}
          <strong className="text-emerald-400">App Web PWA exclusivo</strong> que você instala na tela inicial do seu celular em 5 segundos, sem depender de App Store.
        </p>

        {/* Price Tag Highlight */}
        <div className="mt-6 inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-zinc-900/90 border border-emerald-500/40 px-5 py-3 rounded-2xl shadow-xl backdrop-blur-sm">
          <span className="text-xs sm:text-sm text-zinc-400 line-through">De R$ 197,00</span>
          <span className="text-xs sm:text-sm text-emerald-400 font-semibold uppercase tracking-wider">Por Apenas:</span>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-zinc-300">R$</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-white">89</span>
            <span className="text-lg font-bold text-emerald-400">,90</span>
          </div>
          <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
            PAGAMENTO ÚNICO VIA PIX
          </span>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-7 flex flex-col items-center gap-3">
          <button
            id="hero-cta-button"
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[320px] sm:min-w-[420px] group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-extrabold text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-2xl shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:shadow-[0_0_50px_rgba(16,185,129,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-zinc-950" />
            <span>QUERO MEU ACESSO NO PIX - R$ 89,90</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Micro Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-zinc-400 mt-2">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Checkout Blindado Kiwify
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Zap className="w-4 h-4 text-emerald-400" />
              Acesso Imediato no E-mail
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              Instalação PWA em 1 Clique
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Check className="w-4 h-4 text-emerald-400" />
              Garantia 7 Dias
            </span>
          </div>
        </div>

        {/* Social Proof Header Bar */}
        <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2 mr-2">
              <img className="w-7 h-7 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="Cliente" />
              <img className="w-7 h-7 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="Cliente" />
              <img className="w-7 h-7 rounded-full border-2 border-zinc-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80" alt="Cliente" />
            </div>
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <p className="text-zinc-300 font-medium">
            <strong className="text-white">+1.420 pessoas</strong> já ativaram o combo nesta semana
          </p>
        </div>
      </div>
    </section>
  );
}
