import { useState } from 'react';
import { Calculator, Clock, DollarSign, ArrowRight, TrendingUp } from 'lucide-react';

interface RoiCalculatorProps {
  onBuyClick: () => void;
}

export function RoiCalculator({ onBuyClick }: RoiCalculatorProps) {
  const [weeklyHours, setWeeklyHours] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(40);

  const monthlyHoursSaved = Math.round(weeklyHours * 3.5); // economiza ~85% do tempo
  const monthlyMoneySaved = monthlyHoursSaved * hourlyRate;
  const comboPrice = 89.9;
  const roiPercentage = Math.round(((monthlyMoneySaved * 12) / comboPrice) * 100);

  return (
    <section id="roi-calculator-section" className="py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              Calculadora de Retorno
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Quanto Tempo e Dinheiro Você Vai Economizar?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Ajuste os controles abaixo para simular o impacto direto da automatização no seu bolso:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders Controls */}
            <div className="space-y-6 bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800">
              {/* Slider 1: Weekly Hours */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    Horas gastas montando relatórios/semana:
                  </span>
                  <span className="text-emerald-400 font-black text-sm bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {weeklyHours} horas/sem
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                  <span>1 hora</span>
                  <span>10 horas</span>
                  <span>20 horas</span>
                </div>
              </div>

              {/* Slider 2: Hourly Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300 mb-2">
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-cyan-400" />
                    Valor médio estimado da sua hora:
                  </span>
                  <span className="text-cyan-400 font-black text-sm bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    R$ {hourlyRate},00/h
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                  <span>R$ 20/h</span>
                  <span>R$ 80/h</span>
                  <span>R$ 150/h</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Box */}
            <div className="bg-zinc-950/80 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-4 shadow-xl">
              <div>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Horas Livres Recuperadas por Mês:
                </span>
                <div className="text-3xl font-black text-emerald-400 mt-0.5">
                  ~{monthlyHoursSaved} horas/mês
                </div>
                <p className="text-[11px] text-zinc-500 mt-0.5">Tempo que você pode focar em vender ou descansar</p>
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Economia Financeira Estimada no Ano:
                </span>
                <div className="text-2xl font-black text-white mt-0.5">
                  R$ {(monthlyMoneySaved * 12).toLocaleString('pt-BR')},00
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded mt-1 font-bold">
                  <TrendingUp className="w-3 h-3" />
                  ROI de +{roiPercentage}% sobre os R$ 89,90
                </span>
              </div>

              <button
                id="roi-calculator-cta"
                onClick={onBuyClick}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                Garantir Essa Economia Agora
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
