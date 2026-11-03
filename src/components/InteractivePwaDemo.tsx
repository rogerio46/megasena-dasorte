import { useState } from 'react';
import { 
  Smartphone, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  CheckCircle2, 
  Download, 
  Share2, 
  Layers, 
  ArrowUpRight, 
  Zap, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Music,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

interface InteractivePwaDemoProps {
  onBuyClick: () => void;
}

export function InteractivePwaDemo({ onBuyClick }: InteractivePwaDemoProps) {
  const [activeTab, setActiveTab] = useState<'app' | 'tiktok'>('app');
  const [appTab, setAppTab] = useState<'geral' | 'vendas' | 'lucro' | 'metas'>('geral');
  const [selectedPeriod, setSelectedPeriod] = useState<'30d' | '7d' | 'ano'>('30d');
  const [isPwaModalOpen, setIsPwaModalOpen] = useState(false);
  const [pwaPlatform, setPwaPlatform] = useState<'ios' | 'android'>('ios');
  const [tiktokLiked, setTiktokLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(38420);

  const handleLike = () => {
    if (!tiktokLiked) {
      setTiktokLiked(true);
      setLikeCount((prev) => prev + 1);
    } else {
      setTiktokLiked(false);
      setLikeCount((prev) => prev - 1);
    }
  };

  return (
    <div id="interactive-pwa-demo-section" className="relative py-12 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-cyan-500/5 to-transparent pointer-events-none blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            Diferencial que Mais Converte
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Veja o <span className="text-emerald-400">App Mega Análise</span> Rodando no Celular Agora
          </h2>
          <p className="mt-3 text-zinc-300 text-base sm:text-lg">
            A facilidade de comprar na Kiwify e já poder instalar o aplicativo direto no celular via <strong>PWA sem depender de App Store</strong> é o que faz as pessoas comprarem na hora!
          </p>

          {/* Toggle Button App vs TikTok */}
          <div className="mt-6 inline-flex p-1 bg-zinc-900/90 border border-zinc-700/80 rounded-xl shadow-inner">
            <button
              id="toggle-demo-app"
              onClick={() => setActiveTab('app')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'app'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Simulador do App PWA (Interativo)
            </button>
            <button
              id="toggle-demo-tiktok"
              onClick={() => setActiveTab('tiktok')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'tiktok'
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-600/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Music className="w-4 h-4" />
              Demonstração Estilo TikTok (Viral)
            </button>
          </div>
        </div>

        {/* Mockup Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Key Features & Sales Arguments */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                Por que o App PWA Vende Tanto?
              </h3>
              
              <ul className="mt-4 space-y-3.5">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm">Instalação em 5 segundos no celular:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      O cliente não precisa ir na Apple App Store ou Google Play, nem lembrar senha ou esperar download pesado. Basta 1 clique e o ícone fica na tela de início.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm">Perfeito para quem vê no TikTok ou Instagram:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      A pessoa clica no link da sua bio pelo celular, paga R$ 89,90 no Pix da Kiwify e em menos de 1 minuto já está usando o app no próprio aparelho. Zero atrito!
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm">Design elegante de fintech bilionária:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      Dashboards escuros em neon esmeralda com gráficos visuais, cálculos de lucratividade e projeção de crescimento calculados automaticamente.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm">Sincronizado com a Planilha Inteligente:</strong>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      Alimente os dados no Excel ou Google Planilhas quando estiver no computador e visualize os resultados consolidados no celular onde estiver.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Action Button inside explanation */}
              <div className="mt-6 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                <button
                  id="btn-open-pwa-guide"
                  onClick={() => setIsPwaModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-pointer border border-zinc-700"
                >
                  <Info className="w-4 h-4 text-emerald-400" />
                  Como Funciona a Instalação PWA?
                </button>

                <button
                  id="btn-buy-from-demo"
                  onClick={onBuyClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  Garantir por R$ 89,90 no Pix
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick stats box */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
                <p className="text-emerald-400 font-extrabold text-xl sm:text-2xl">0 MB</p>
                <p className="text-zinc-400 text-[11px] mt-0.5">Não ocupa espaço no celular</p>
              </div>
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
                <p className="text-cyan-400 font-extrabold text-xl sm:text-2xl">100%</p>
                <p className="text-zinc-400 text-[11px] mt-0.5">Compatível iOS & Android</p>
              </div>
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3">
                <p className="text-amber-400 font-extrabold text-xl sm:text-2xl">1 Clique</p>
                <p className="text-zinc-400 text-[11px] mt-0.5">Instalação direta</p>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Phone Frame Decoration */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-pink-500/30 rounded-[44px] blur-xl opacity-70"></div>
              
              {/* Actual Phone Shell */}
              <div className="relative rounded-[40px] bg-zinc-950 p-3 border-[3px] border-zinc-700 shadow-2xl shadow-black">
                {/* Dynamic Island / Speaker Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 mr-2"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
                </div>

                {/* Inner Screen */}
                <div className="rounded-[32px] overflow-hidden bg-[#0a0f1d] border border-zinc-800 text-white min-h-[580px] flex flex-col relative">
                  
                  {/* Status Bar */}
                  <div className="pt-3 px-5 flex justify-between items-center text-[10px] text-zinc-400 font-medium z-20">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px]">5G</span>
                      <div className="w-4 h-2 border border-zinc-400 rounded-sm p-[1px]">
                        <div className="w-full h-full bg-emerald-400"></div>
                      </div>
                    </div>
                  </div>

                  {activeTab === 'app' ? (
                    /* APP PWA LIVE SIMULATION */
                    <div className="flex-1 flex flex-col pt-5 pb-4 px-4 overflow-y-auto">
                      {/* App Header */}
                      <div className="flex items-center justify-between mt-1 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-zinc-950 font-black text-xs shadow-md">
                            MA
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white tracking-wide">Mega Análise PWA</h4>
                            <p className="text-[10px] text-emerald-400 font-medium">● Conectado à Planilha</p>
                          </div>
                        </div>

                        {/* PWA Install Button inside Phone */}
                        <button
                          onClick={() => setIsPwaModalOpen(true)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                        >
                          <Download className="w-3 h-3" />
                          Instalar
                        </button>
                      </div>

                      {/* Period Filter */}
                      <div className="flex gap-1.5 p-1 bg-zinc-900/90 rounded-lg border border-zinc-800 mb-3 text-[10px]">
                        <button
                          onClick={() => setSelectedPeriod('7d')}
                          className={`flex-1 py-1 rounded font-medium transition-colors ${
                            selectedPeriod === '7d' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-400'
                          }`}
                        >
                          7 dias
                        </button>
                        <button
                          onClick={() => setSelectedPeriod('30d')}
                          className={`flex-1 py-1 rounded font-medium transition-colors ${
                            selectedPeriod === '30d' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-400'
                          }`}
                        >
                          30 dias
                        </button>
                        <button
                          onClick={() => setSelectedPeriod('ano')}
                          className={`flex-1 py-1 rounded font-medium transition-colors ${
                            selectedPeriod === 'ano' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-400'
                          }`}
                        >
                          2026
                        </button>
                      </div>

                      {/* Main Metric Highlight Card */}
                      <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/90 border border-emerald-500/30 rounded-xl p-3 mb-3 relative overflow-hidden shadow-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">Faturamento Bruto</span>
                            <div className="text-xl font-extrabold text-white mt-0.5">
                              {selectedPeriod === '7d' ? 'R$ 14.820,00' : selectedPeriod === '30d' ? 'R$ 68.450,00' : 'R$ 412.900,00'}
                            </div>
                          </div>
                          <span className="flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            <TrendingUp className="w-3 h-3 mr-0.5" />
                            +24.8%
                          </span>
                        </div>

                        {/* Interactive SVG Sparkline Chart */}
                        <div className="mt-3 pt-2 border-t border-zinc-800">
                          <div className="flex justify-between text-[9px] text-zinc-400 mb-1">
                            <span>Tendência de Vendas</span>
                            <span className="text-emerald-400 font-semibold">Alta Consistente</span>
                          </div>
                          <svg className="w-full h-10 overflow-visible" viewBox="0 0 100 30" fill="none">
                            <path
                              d="M0 24 Q 15 22, 25 18 T 50 12 T 75 14 T 100 4"
                              stroke="#10b981"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M0 24 Q 15 22, 25 18 T 50 12 T 75 14 T 100 4 L 100 30 L 0 30 Z"
                              fill="url(#emerald-grad)"
                              opacity="0.3"
                            />
                            <defs>
                              <linearGradient id="emerald-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* 2 Sub KPI Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5">
                          <span className="text-[9px] text-zinc-400 uppercase font-semibold">Lucro Líquido</span>
                          <div className="text-sm font-bold text-emerald-400 mt-0.5">
                            {selectedPeriod === '7d' ? 'R$ 6.740' : selectedPeriod === '30d' ? 'R$ 29.810' : 'R$ 178.400'}
                          </div>
                          <span className="text-[9px] text-zinc-500">Margem: 43.5%</span>
                        </div>

                        <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5">
                          <span className="text-[9px] text-zinc-400 uppercase font-semibold">Ticket Médio</span>
                          <div className="text-sm font-bold text-cyan-400 mt-0.5">
                            R$ 148,90
                          </div>
                          <span className="text-[9px] text-zinc-500">459 Pedidos</span>
                        </div>
                      </div>

                      {/* Goal Progress Bar */}
                      <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5 mb-3">
                        <div className="flex justify-between items-center text-[10px] mb-1">
                          <span className="text-zinc-300 font-semibold">Meta Mensal do Negócio</span>
                          <span className="text-emerald-400 font-bold">82% atingida</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full w-[82%]"></div>
                        </div>
                        <div className="flex justify-between text-[9px] text-zinc-500 mt-1">
                          <span>R$ 0</span>
                          <span>Falta: R$ 11.550</span>
                          <span>R$ 80.000</span>
                        </div>
                      </div>

                      {/* Bottom App Navigation inside phone */}
                      <div className="mt-auto pt-2 border-t border-zinc-800 grid grid-cols-4 gap-1 text-center">
                        <button
                          onClick={() => setAppTab('geral')}
                          className={`flex flex-col items-center py-1 transition-colors ${
                            appTab === 'geral' ? 'text-emerald-400' : 'text-zinc-500'
                          }`}
                        >
                          <BarChart3 className="w-3.5 h-3.5" />
                          <span className="text-[8px] font-medium mt-0.5">Resumo</span>
                        </button>
                        <button
                          onClick={() => setAppTab('lucro')}
                          className={`flex flex-col items-center py-1 transition-colors ${
                            appTab === 'lucro' ? 'text-emerald-400' : 'text-zinc-500'
                          }`}
                        >
                          <DollarSign className="w-3.5 h-3.5" />
                          <span className="text-[8px] font-medium mt-0.5">Finanças</span>
                        </button>
                        <button
                          onClick={() => setAppTab('vendas')}
                          className={`flex flex-col items-center py-1 transition-colors ${
                            appTab === 'vendas' ? 'text-emerald-400' : 'text-zinc-500'
                          }`}
                        >
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span className="text-[8px] font-medium mt-0.5">Vendas</span>
                        </button>
                        <button
                          onClick={() => setAppTab('metas')}
                          className={`flex flex-col items-center py-1 transition-colors ${
                            appTab === 'metas' ? 'text-emerald-400' : 'text-zinc-500'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span className="text-[8px] font-medium mt-0.5">Metas</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* TIKTOK VIDEO SIMULATION */
                    <div className="flex-1 flex flex-col relative bg-zinc-950 overflow-hidden">
                      {/* Video background simulation */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/60 to-zinc-950 z-0">
                        {/* Mock video content graphic */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mb-3 shadow-lg shadow-emerald-500/30">
                            <Smartphone className="w-8 h-8 text-emerald-400 animate-bounce" />
                          </div>
                          <span className="px-3 py-1 bg-red-600 text-white font-extrabold text-xs rounded-full uppercase tracking-wider mb-2">
                            🚨 VIRAL NO TIKTOK
                          </span>
                          <p className="text-xs font-bold text-white max-w-[220px]">
                            "O App que tá substituindo planilhas chatas do Excel em 2026..."
                          </p>
                          <div className="mt-3 flex items-center gap-1.5 text-[11px] bg-black/60 px-3 py-1.5 rounded-xl border border-emerald-500/30 text-emerald-300">
                            <span>Instalação PWA em 1 clique</span>
                          </div>
                        </div>
                      </div>

                      {/* TikTok Right Actions */}
                      <div className="absolute right-2 bottom-20 z-20 flex flex-col items-center gap-4 text-white">
                        {/* Profile Avatar */}
                        <div className="w-9 h-9 rounded-full bg-emerald-400 p-[1.5px] relative">
                          <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-black text-emerald-400">
                            MA
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold">
                            +
                          </div>
                        </div>

                        {/* Like Button */}
                        <button onClick={handleLike} className="flex flex-col items-center">
                          <Heart className={`w-6 h-6 transition-colors ${tiktokLiked ? 'fill-red-500 text-red-500 scale-125' : 'text-white'}`} />
                          <span className="text-[9px] font-semibold mt-0.5">{(likeCount / 1000).toFixed(1)}k</span>
                        </button>

                        {/* Comments */}
                        <div className="flex flex-col items-center">
                          <MessageCircle className="w-6 h-6 text-white" />
                          <span className="text-[9px] font-semibold mt-0.5">1.2k</span>
                        </div>

                        {/* Bookmark */}
                        <div className="flex flex-col items-center">
                          <Bookmark className="w-6 h-6 text-white" />
                          <span className="text-[9px] font-semibold mt-0.5">8.9k</span>
                        </div>

                        {/* Share */}
                        <div className="flex flex-col items-center">
                          <Share2 className="w-6 h-6 text-white" />
                          <span className="text-[9px] font-semibold mt-0.5">Share</span>
                        </div>
                      </div>

                      {/* TikTok Bottom Caption & Link In Bio Indicator */}
                      <div className="absolute bottom-3 left-3 right-14 z-20 text-left">
                        <span className="text-xs font-bold text-white">@megaanalise.oficial</span>
                        <p className="text-[10px] text-zinc-200 line-clamp-2 mt-0.5">
                          Como eu controlo tudo no celular em 1 minuto sem fórmulas do Excel! 📱🚀
                        </p>
                        <div className="flex items-center gap-1.5 mt-1 text-[9px] text-zinc-300">
                          <Music className="w-3 h-3 animate-spin" />
                          <span className="truncate">Som Original - Empreendedor Moderno</span>
                        </div>

                        {/* Clickable Link In Bio Sticky Banner */}
                        <button
                          onClick={onBuyClick}
                          className="mt-2.5 w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-2.5 py-1.5 rounded-lg text-[10px] font-black flex items-center justify-between shadow-lg shadow-emerald-500/30 transition-transform active:scale-95"
                        >
                          <span className="flex items-center gap-1 truncate">
                            <ExternalLink className="w-3 h-3 shrink-0" />
                            LINK NA BIO: Combo por R$ 89,90 Pix
                          </span>
                          <ChevronRight className="w-3 h-3 shrink-0" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Home Indicator Bar */}
                  <div className="w-32 h-1 bg-zinc-600 rounded-full mx-auto my-2 z-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PWA INSTALLATION MODAL GUIDE */}
      {isPwaModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-md w-full p-6 text-white relative shadow-2xl">
            <button
              onClick={() => setIsPwaModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Como Funciona a Instalação PWA?</h3>
                <p className="text-xs text-zinc-400">Zero App Store. Zero complicação. Instantâneo.</p>
              </div>
            </div>

            {/* Platform Selector */}
            <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800 mb-4 text-xs font-semibold">
              <button
                onClick={() => setPwaPlatform('ios')}
                className={`flex-1 py-2 rounded-lg transition-colors cursor-pointer ${
                  pwaPlatform === 'ios' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                iPhone (iOS / Safari)
              </button>
              <button
                onClick={() => setPwaPlatform('android')}
                className={`flex-1 py-2 rounded-lg transition-colors cursor-pointer ${
                  pwaPlatform === 'android' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Android (Google Chrome)
              </button>
            </div>

            {/* Instructions */}
            {pwaPlatform === 'ios' ? (
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">1</span>
                  <p>Abra o link exclusivo do App que você recebe no e-mail pelo navegador <strong>Safari</strong> no seu iPhone.</p>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">2</span>
                  <p>Toque no ícone de <strong>Compartilhar</strong> (o quadrado com uma seta para cima na barra inferior do Safari).</p>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">3</span>
                  <p>Role um pouco e selecione <strong>"Adicionar à Tela de Início"</strong>. Pronto! O ícone do Mega Análise estará na tela inicial igual a qualquer app nativo.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">1</span>
                  <p>Abra o link do App recebido pelo e-mail no navegador <strong>Google Chrome</strong> do seu Android.</p>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">2</span>
                  <p>O próprio Chrome exibirá um botão: <strong>"Instalar aplicativo"</strong> ou toque nos 3 pontinhos no canto superior direito.</p>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">3</span>
                  <p>Confirme em <strong>"Instalar"</strong>. O app abre em tela cheia, sem barra de URL e com carregamento instantâneo!</p>
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setIsPwaModalOpen(false);
                onBuyClick();
              }}
              className="mt-5 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-sm transition-colors cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Entendi! Quero Comprar por R$ 89,90
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
