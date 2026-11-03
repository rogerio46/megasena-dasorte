import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/productData';

export function TestimonialsSection() {
  return (
    <section id="testimonials-section" className="py-14 px-4 bg-zinc-950/70 border-y border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Resultados Comprovados
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Quem Já Comprou Não Fica Mais Sem o <span className="text-emerald-400">Mega Análise</span>
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            Veja o que clientes reais que compraram pelo link da bio na Kiwify estão falando sobre a experiência:
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-zinc-700 transition-all shadow-lg"
            >
              <div>
                {/* Header with avatar, name & stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-bold text-white">{t.name}</h3>
                        {t.verifiedKiwify && (
                          <span className="flex items-center text-[10px] text-emerald-400 font-medium gap-0.5 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                            <CheckCircle className="w-2.5 h-2.5" />
                            Comprador Kiwify
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400">{t.role} • {t.city}</p>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-md text-xs font-bold">
                    “{t.highlight}”
                  </span>
                </div>

                {/* Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Footer Date */}
              <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between items-center text-[11px] text-zinc-500">
                <span>Avaliação verificada</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Whatsapp Screenshot Simulation Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Quote className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-zinc-200">
              <strong>98.4% de satisfação:</strong> Mais de 1.400 cópias entregues com menos de 0.8% de taxa de reembolso. Você tem 7 dias de garantia incondicional diretamente pela plataforma da Kiwify.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
