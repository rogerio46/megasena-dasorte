import { ShieldCheck, Settings, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSettings: () => void;
  supportWhatsapp: string;
}

export function Footer({ onOpenSettings, supportWhatsapp }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-zinc-950 border-t border-zinc-800/80 pt-12 pb-24 sm:pb-12 px-4 text-xs text-zinc-400">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-black text-xs text-zinc-950 shadow-md">
              MA
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Planilha Inteligente & App Mega Análise</h4>
              <p className="text-[11px] text-zinc-400">Combo Oficial de Alta Conversão na Kiwify</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              id="footer-producer-settings-btn"
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors cursor-pointer text-xs"
            >
              <Settings className="w-3.5 h-3.5 text-emerald-400" />
              <span>Configurar Meu Link Kiwify</span>
            </button>

            {supportWhatsapp && (
              <a
                href={`https://wa.me/${supportWhatsapp}?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20Combo%20Mega%20An%C3%A1lise`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Suporte WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Kiwify Official Legal Notice */}
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-[10px] text-zinc-400 leading-relaxed text-justify sm:text-left space-y-2">
          <p>
            <strong>Aviso Legal & Termos da Plataforma:</strong> Este produto é comercializado com o apoio da Kiwify. A Kiwify não faz controle editorial prévio dos produtos comercializados, tampouco avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, através da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente dessas informações.
          </p>
          <p>
            Os resultados podem variar de pessoa para pessoa e dependem da correta inserção de dados e dedicação individual. Todas as marcas mencionadas (Excel, Google Sheets, iPhone, Android, TikTok, Kiwify) são propriedades de seus respectivos detentores.
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <p>© 2026 Mega Análise. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Pagamento Seguro via</span>
            <span className="font-bold text-emerald-400">Kiwify & Pix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
