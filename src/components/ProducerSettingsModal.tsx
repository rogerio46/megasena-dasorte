import { useState } from 'react';
import { Settings, X, Save, Copy, Check, ExternalLink, Video, Link, Sparkles } from 'lucide-react';
import { ProducerSettings } from '../types';

interface ProducerSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ProducerSettings;
  onSaveSettings: (newSettings: ProducerSettings) => void;
}

export function ProducerSettingsModal({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
}: ProducerSettingsModalProps) {
  const [formData, setFormData] = useState<ProducerSettings>({ ...settings });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedBio, setCopiedBio] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const bioSuggestion = `📊 Planilha Inteligente + App Mega Análise (PWA) no Celular\n⚡ Instalação em 5 segundos no iPhone/Android\n🔥 Apenas R$ 89,90 no Pix (Acesso Vitalício)\n👇 Toque no link abaixo para garantir o seu:`;

  const copyBioText = () => {
    navigator.clipboard.writeText(bioSuggestion);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <div id="producer-settings-modal-overlay" className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-lg w-full p-6 text-white relative shadow-2xl my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-xl bg-zinc-800 hover:bg-zinc-750 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Painel do Produtor Kiwify</h3>
            <p className="text-xs text-zinc-400">Personalize seu link de checkout e textos do TikTok</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Link Real do seu Checkout na Kiwify:
            </label>
            <div className="relative">
              <input
                type="url"
                value={formData.kiwifyCheckoutUrl}
                onChange={(e) => setFormData({ ...formData, kiwifyCheckoutUrl: e.target.value })}
                placeholder="https://pay.kiwify.com.br/seu-codigo"
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
            <p className="text-[10px] text-zinc-500 mt-1">
              Quando você colar seu link aqui, todos os botões de compra da página apontarão para sua Kiwify!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Preço Pix (R$):
              </label>
              <input
                type="number"
                step="0.1"
                value={formData.pricePix}
                onChange={(e) => setFormData({ ...formData, pricePix: parseFloat(e.target.value) || 89.9 })}
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                WhatsApp de Suporte:
              </label>
              <input
                type="text"
                value={formData.supportWhatsapp}
                onChange={(e) => setFormData({ ...formData, supportWhatsapp: e.target.value })}
                placeholder="5511999999999"
                className="w-full px-3.5 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          {/* TikTok Bio Suggestion Card */}
          <div className="p-3 bg-zinc-950 rounded-xl border border-pink-500/30">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-pink-400 flex items-center gap-1">
                <Video className="w-3.5 h-3.5" />
                Texto Sugerido para Bio do TikTok / Instagram:
              </span>
              <button
                type="button"
                onClick={copyBioText}
                className="text-[10px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                {copiedBio ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copiedBio ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <pre className="text-[10px] text-zinc-300 font-sans whitespace-pre-wrap bg-zinc-900/80 p-2 rounded border border-zinc-800">
              {bioSuggestion}
            </pre>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              {savedSuccess ? 'Configurações Salvas!' : 'Salvar Alterações'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
