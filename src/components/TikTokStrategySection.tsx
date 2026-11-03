import { useState } from 'react';
import { Video, Copy, Check, Sparkles, TrendingUp, Smartphone, ExternalLink, Play } from 'lucide-react';
import { TIKTOK_VIRAL_SCRIPT } from '../data/productData';

export function TikTokStrategySection() {
  const [copied, setCopied] = useState(false);

  const fullScript = `ROTEIRO VIRAL DE 30 SEGUNDOS (TIKTOK / REELS):\n\n[0-3s - GANCHO]: ${TIKTOK_VIRAL_SCRIPT.hook}\n[3-10s - O PROBLEMA]: ${TIKTOK_VIRAL_SCRIPT.problem}\n[10-20s - A SOLUÇÃO]: ${TIKTOK_VIRAL_SCRIPT.solution}\n[20-25s - DEMONSTRAÇÃO]: ${TIKTOK_VIRAL_SCRIPT.demoAction}\n[25-30s - CHAMADA]: ${TIKTOK_VIRAL_SCRIPT.callToAction}`;

  const copyScript = () => {
    navigator.clipboard.writeText(fullScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="tiktok-strategy-section" className="py-14 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900/60 to-zinc-950 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-pink-400 text-xs font-bold uppercase tracking-wider bg-pink-500/10 px-3.5 py-1.5 rounded-full border border-pink-500/30 inline-flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5" />
            Estratégia de Ouro Revelada
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O Segredo do Funil: <span className="text-pink-400">Vídeo no TikTok</span> +{' '}
            <span className="text-emerald-400">PWA na Bio</span> = Vendas Diárias
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Descubra por que este modelo é considerado uma verdadeira máquina de vendas orgânicas sem gastar 1 centavo com anúncios:
          </p>
        </div>

        {/* 3 Step Funnel Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Step 1 */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-sm mb-4">
              01
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              1. Vídeo Curto de Demonstração
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Você grava a tela do seu celular mostrando o ícone do <strong>Mega Análise</strong> abrindo em tela cheia e os gráficos dinâmicos. O formato visual do PWA gera curiosidade imediata nos comentários.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm mb-4">
              02
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              2. Link na Bio por R$ 89,90 no Pix
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              O preço de R$ 89,90 no Pix é uma "compra por impulso" (ticket acessível). O cliente não precisa pensar durante dias: ele clica no link da sua bio e fecha a compra pelo checkout seguro da Kiwify.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-sm mb-4">
              03
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              3. Instalação Imediata no PWA
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              O grande diferencial: o cliente já está com o celular na mão! Ele abre o link de confirmação e adiciona o app à tela de início em 5 segundos. O êxtase de entrega imediata reduz pedidos de reembolso a quase zero.
            </p>
          </div>
        </div>

        {/* Ready-to-use Viral Script Box */}
        <div className="bg-zinc-900 border border-pink-500/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
            <div>
              <span className="text-[11px] font-bold text-pink-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Roteiro Validadíssimo de 30 Segundos
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">
                Script de TikTok Pronto para Gravar e Vender Hoje
              </h4>
            </div>

            <button
              id="copy-tiktok-script-btn"
              onClick={copyScript}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-colors cursor-pointer shrink-0 shadow-md shadow-pink-600/20"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  Roteiro Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar Roteiro Completo
                </>
              )}
            </button>
          </div>

          {/* Script Steps Display */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-3 bg-zinc-950/70 rounded-xl border border-zinc-800">
              <span className="font-mono text-pink-400 font-bold block text-[11px] mb-1">
                [0s a 3s] O Gancho Que Prende a Atenção:
              </span>
              <p className="text-zinc-200">{TIKTOK_VIRAL_SCRIPT.hook}</p>
            </div>

            <div className="p-3 bg-zinc-950/70 rounded-xl border border-zinc-800">
              <span className="font-mono text-cyan-400 font-bold block text-[11px] mb-1">
                [3s a 10s] O Problema Que Todos Sofrem:
              </span>
              <p className="text-zinc-200">{TIKTOK_VIRAL_SCRIPT.problem}</p>
            </div>

            <div className="p-3 bg-zinc-950/70 rounded-xl border border-zinc-800">
              <span className="font-mono text-emerald-400 font-bold block text-[11px] mb-1">
                [10s a 20s] A Solução Visual (Mostre o App PWA):
              </span>
              <p className="text-zinc-200">{TIKTOK_VIRAL_SCRIPT.solution}</p>
            </div>

            <div className="p-3 bg-zinc-950/70 rounded-xl border border-zinc-800">
              <span className="font-mono text-amber-400 font-bold block text-[11px] mb-1">
                [20s a 25s] A Mágica Acontecendo na Tela:
              </span>
              <p className="text-zinc-200">{TIKTOK_VIRAL_SCRIPT.demoAction}</p>
            </div>

            <div className="p-3 bg-zinc-950/70 rounded-xl border border-zinc-800">
              <span className="font-mono text-emerald-400 font-bold block text-[11px] mb-1">
                [25s a 30s] Chamada Irresistível de R$ 89,90 no Pix:
              </span>
              <p className="text-zinc-200">{TIKTOK_VIRAL_SCRIPT.callToAction}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
