import { useState } from 'react';
import { 
  X, 
  QrCode, 
  Copy, 
  Check, 
  ShieldCheck, 
  Zap, 
  Download, 
  Smartphone, 
  ExternalLink, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProducerSettings } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  producerSettings: ProducerSettings;
}

export function CheckoutModal({ isOpen, onClose, producerSettings }: CheckoutModalProps) {
  const [copiedPix, setCopiedPix] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success'>('pending');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  if (!isOpen) return null;

  const simulatedPixCode = `00020126580014BR.GOV.BCB.PIX0136megaanalise-kiwify-8990-checkout520400005303986540589.905802BR5925MEGA ANALISE INTELIGENTE6009SAO PAULO62070503***6304E8F2`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleSimulatePaymentConfirmation = () => {
    setPaymentStatus('success');
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleGoToKiwify = () => {
    if (producerSettings.kiwifyCheckoutUrl) {
      window.open(producerSettings.kiwifyCheckoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div id="kiwify-checkout-modal-overlay" className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-lg w-full p-5 sm:p-7 text-white relative shadow-2xl my-auto animate-in fade-in duration-200">
        
        {/* Close Button */}
        <button
          id="checkout-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {paymentStatus === 'pending' ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">Checkout Oficial Kiwify</h3>
                  <span className="text-[10px] bg-emerald-500 text-zinc-950 font-black px-2 py-0.5 rounded-full uppercase">
                    Pix R$ 89,90
                  </span>
                </div>
                <p className="text-xs text-zinc-400">Planilha Inteligente & App Mega Análise (Acesso Vitalício)</p>
              </div>
            </div>

            {/* Quick Buyer Data Inputs */}
            <div className="space-y-3 mb-5 text-left">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  placeholder="Ex: João da Silva"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                  Seu Melhor E-mail (Onde você receberá o acesso):
                </label>
                <input
                  type="email"
                  placeholder="Ex: seuemail@gmail.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Pix QR Code Box */}
            <div className="bg-zinc-950/90 border border-emerald-500/40 rounded-2xl p-4 text-center mb-5">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-400 mb-3">
                <QrCode className="w-4 h-4" />
                Pague com Pix para Liberação em 10 Segundos
              </div>

              {/* Simulated QR Code SVG */}
              <div className="w-40 h-40 bg-white p-2.5 rounded-xl mx-auto flex items-center justify-center shadow-inner">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" fill="white" />
                  {/* Outer corner anchors */}
                  <rect x="10" y="10" width="25" height="25" fill="black" />
                  <rect x="15" y="15" width="15" height="15" fill="white" />
                  <rect x="18" y="18" width="9" height="9" fill="black" />

                  <rect x="65" y="10" width="25" height="25" fill="black" />
                  <rect x="70" y="15" width="15" height="15" fill="white" />
                  <rect x="73" y="18" width="9" height="9" fill="black" />

                  <rect x="10" y="65" width="25" height="25" fill="black" />
                  <rect x="15" y="70" width="15" height="15" fill="white" />
                  <rect x="18" y="73" width="9" height="9" fill="black" />

                  {/* Random simulated data matrix blocks */}
                  <rect x="42" y="12" width="6" height="12" fill="black" />
                  <rect x="52" y="18" width="8" height="6" fill="black" />
                  <rect x="42" y="30" width="16" height="6" fill="black" />
                  <rect x="15" y="42" width="10" height="8" fill="black" />
                  <rect x="30" y="42" width="8" height="16" fill="black" />
                  <rect x="44" y="44" width="12" height="12" fill="#00d084" />
                  <rect x="62" y="42" width="10" height="8" fill="black" />
                  <rect x="78" y="42" width="12" height="14" fill="black" />
                  <rect x="42" y="62" width="8" height="16" fill="black" />
                  <rect x="56" y="62" width="14" height="6" fill="black" />
                  <rect x="56" y="74" width="10" height="14" fill="black" />
                  <rect x="74" y="68" width="14" height="18" fill="black" />
                </svg>
              </div>

              <div className="mt-3 text-xs text-zinc-400">
                Valor: <span className="text-white font-extrabold text-sm">R$ 89,90</span> (Pagamento Único)
              </div>

              {/* Pix Copy and Paste Button */}
              <button
                id="copy-pix-code-btn"
                onClick={handleCopyPix}
                className="mt-3 w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border border-zinc-600"
              >
                {copiedPix ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    Código Pix Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-emerald-400" />
                    Copiar Código Pix (Copia e Cola)
                  </>
                )}
              </button>
            </div>

            {/* Test Simulation Button & Kiwify Link */}
            <div className="space-y-2.5">
              <button
                id="btn-simulate-pix-paid"
                onClick={handleSimulatePaymentConfirmation}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simular Pagamento Confirmado (Ver Entrega)</span>
              </button>

              <button
                id="btn-open-real-kiwify-checkout"
                onClick={handleGoToKiwify}
                className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Ir para a Página da Kiwify ({producerSettings.kiwifyCheckoutUrl.replace('https://', '').slice(0, 24)}...)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Security note */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Transação protegida com criptografia SSL 256 bits</span>
            </div>
          </div>
        ) : (
          /* PAYMENT SUCCESS SCREEN */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Pagamento Confirmado no Pix!
            </span>

            <h3 className="text-2xl font-black text-white mt-3">
              Parabéns! Seu Acesso Está Liberado 🎉
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-sm mx-auto">
              Enviamos os dados de acesso para {customerEmail ? <strong>{customerEmail}</strong> : 'seu e-mail'}. Você já pode baixar os arquivos e instalar o App Mega Análise:
            </p>

            {/* Delivery Links Box */}
            <div className="mt-6 space-y-3 text-left">
              {/* Link 1: Download Planilha */}
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Planilha Inteligente (Sheets & XLSX)</h4>
                    <p className="text-[10px] text-zinc-400">Versão Automatizada 2026</p>
                  </div>
                </div>
                <button
                  onClick={() => alert('Download demonstrativo iniciado com sucesso!')}
                  className="px-3 py-1.5 bg-emerald-500 text-zinc-950 font-bold text-xs rounded-lg hover:bg-emerald-400 transition-colors"
                >
                  Baixar
                </button>
              </div>

              {/* Link 2: App Mega Análise PWA */}
              <div className="p-3.5 rounded-xl bg-zinc-950 border border-emerald-500/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">App Mega Análise (PWA Mobile)</h4>
                    <p className="text-[10px] text-emerald-400">Instale na tela de início em 1 clique</p>
                  </div>
                </div>
                <button
                  onClick={() => alert('Abrindo instalador PWA no seu navegador...')}
                  className="px-3 py-1.5 bg-cyan-500 text-zinc-950 font-bold text-xs rounded-lg hover:bg-cyan-400 transition-colors"
                >
                  Abrir App
                </button>
              </div>
            </div>

            <button
              id="success-close-modal-btn"
              onClick={onClose}
              className="mt-6 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Concluir e Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
