import { Check, X, ShieldAlert, Sparkles, Zap } from 'lucide-react';

interface ComparisonTableProps {
  onBuyClick: () => void;
}

export function ComparisonTable({ onBuyClick }: ComparisonTableProps) {
  const comparisonRows = [
    {
      feature: 'Preço / Modelo de Cobrança',
      softwares: 'R$ 199 a R$ 450 TODO MÊS',
      planilhasGratis: 'Grátis (mas cheia de vírus/erros)',
      nossoCombo: 'Apenas R$ 89,90 ÚNICO no Pix',
      isWinner: true,
    },
    {
      feature: 'App Direto no Celular (PWA)',
      softwares: 'Pesado ou requer login complexo',
      planilhasGratis: 'Horrível de abrir no celular',
      nossoCombo: 'App PWA leve em 1 clique',
      isWinner: true,
    },
    {
      feature: 'Facilidade de Uso',
      softwares: 'Exige semanas de treinamento',
      planilhasGratis: 'Fórmulas quebram com qualquer clique',
      nossoCombo: '100% intuitivo e protegido',
      isWinner: true,
    },
    {
      feature: 'Ocupa Espaço no Aparelho?',
      softwares: 'Gasta 200MB a 500MB de espaço',
      planilhasGratis: 'Depende do app do Excel móvel',
      nossoCombo: '0 MB (Roda em Nuvem PWA)',
      isWinner: true,
    },
    {
      feature: 'Garantia Incondicional',
      softwares: 'Fidelidade de 12 meses com multa',
      planilhasGratis: 'Sem qualquer garantia',
      nossoCombo: '7 Dias Blindados na Kiwify',
      isWinner: true,
    },
    {
      feature: 'Bônus: Como Vender no TikTok',
      softwares: 'Não ensina a vender',
      planilhasGratis: 'Nenhum suporte',
      nossoCombo: 'Roteiros Prontos de Alta Conversão',
      isWinner: true,
    },
  ];

  return (
    <section id="comparison-section" className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Comparativo Definitivo
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que o Combo Mega Análise é a Escolha Mais Inteligente?
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Veja a diferença entre continuar no sofrimento manual, pagar mensalidades abusivas ou ter nossa solução completa por menos de R$ 50.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl backdrop-blur-sm">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/80">
                <th className="p-4 text-xs font-bold text-zinc-400 uppercase tracking-wider w-2/5">
                  Recurso & Benefício
                </th>
                <th className="p-4 text-xs font-semibold text-zinc-400 w-1/5 text-center">
                  Softwares Caros (SaaS)
                </th>
                <th className="p-4 text-xs font-semibold text-zinc-400 w-1/5 text-center">
                  Planilhas da Internet
                </th>
                <th className="p-4 text-xs font-black text-emerald-400 bg-emerald-500/15 border-x border-emerald-500/30 w-1/5 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] bg-emerald-500 text-zinc-950 px-2 py-0.5 rounded-full font-black mb-1">
                      RECOMENDADO
                    </span>
                    Combo Mega Análise
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-xs sm:text-sm">
              {comparisonRows.map((row, index) => (
                <tr key={index} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center text-zinc-400 bg-zinc-950/30">
                    <div className="flex flex-col items-center gap-1">
                      <X className="w-4 h-4 text-red-400" />
                      <span className="text-xs">{row.softwares}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-zinc-400 bg-zinc-950/30">
                    <div className="flex flex-col items-center gap-1">
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                      <span className="text-xs">{row.planilhasGratis}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center font-bold text-white bg-emerald-500/10 border-x border-emerald-500/30">
                    <div className="flex flex-col items-center gap-1">
                      <Check className="w-5 h-5 text-emerald-400 font-black" />
                      <span className="text-xs text-emerald-300">{row.nossoCombo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Callout below table */}
        <div className="mt-6 text-center">
          <button
            id="comparison-cta-btn"
            onClick={onBuyClick}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            Economize milhares de reais em assinaturas e garanta o seu acesso por R$ 89,90
          </button>
        </div>
      </div>
    </section>
  );
}
