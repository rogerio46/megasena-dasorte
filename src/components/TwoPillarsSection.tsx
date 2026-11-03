import { FileSpreadsheet, Smartphone, Check, Sparkles, Database, Layers, ArrowRight } from 'lucide-react';

interface TwoPillarsSectionProps {
  onBuyClick: () => void;
}

export function TwoPillarsSection({ onBuyClick }: TwoPillarsSectionProps) {
  return (
    <section id="two-pillars-section" className="py-14 px-4 bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            A Combinação Perfeita
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            2 Ferramentas Poderosas em um Único Combo de <span className="text-emerald-400">R$ 89,90</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Você não precisa escolher entre a praticidade de registrar no computador ou a liberdade de consultar tudo na palma da mão pelo celular.
          </p>
        </div>

        {/* The 2 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Smart Spreadsheet */}
          <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-all shadow-xl">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 shadow-inner">
                <FileSpreadsheet className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Pilar 01 • O Motor dos Dados</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                Planilha Inteligente Automatizada
              </h3>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                Construída por especialistas em análise de dados, ela faz o trabalho pesado de compilação sem que você precise saber nenhuma fórmula complexa de Excel.
              </p>

              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Compatível com <strong>Google Planilhas</strong> e <strong>Microsoft Excel</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fórmulas automáticas travadas contra erros e exclusões</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cálculos de Lucro Líquido, Margem, ROI e Ponto de Equilíbrio</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Importação rápida de extratos e relatórios de vendas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Exportação instantânea para relatórios em PDF de alta qualidade</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Database className="w-4 h-4" />
                Estrutura 100% Pronta
              </span>
              <span className="bg-zinc-800 px-2 py-1 rounded text-zinc-300 font-mono">
                Sheets & XLSX
              </span>
            </div>
          </div>

          {/* Pillar 2: PWA Mobile App */}
          <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-emerald-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-emerald-950/40">
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-6 shadow-inner">
                <Smartphone className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Pilar 02 • A Experiência Mobile</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3 flex items-center gap-2">
                App Web PWA "Mega Análise"
                <span className="text-[10px] bg-emerald-500 text-zinc-950 font-black px-2 py-0.5 rounded-full uppercase">
                  Exclusivo
                </span>
              </h3>
              
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                O diferencial revolucionário que faz as pessoas comprarem na hora: um aplicativo moderno que fica na tela inicial do seu celular sem gastar espaço de memória.
              </p>

              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Instalação instantânea em 1 clique no iPhone e Android</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Não precisa de login em lojas (Google Play ou App Store)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Abre em tela cheia idêntico a um aplicativo de R$ 50.000</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dashboards dinâmicos com gráficos interativos e metas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Acesso vitalício sem mensalidades ou taxas escondidas</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                <Layers className="w-4 h-4" />
                Tecnologia PWA de Alta Velocidade
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-1 rounded font-bold">
                Incluso no Pix R$ 89,90
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-emerald-950/60 border border-emerald-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Você recebe ambos os pilares pelo valor único de R$ 89,90
            </h4>
            <p className="text-zinc-400 text-xs mt-1">
              Liberação automática no seu e-mail em menos de 60 segundos após o Pix na Kiwify.
            </p>
          </div>

          <button
            id="pillars-cta-button"
            onClick={onBuyClick}
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
          >
            Quero o Combo Completo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
