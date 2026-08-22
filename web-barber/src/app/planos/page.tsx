import { Check } from "lucide-react";

export default function Planos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero escuro */}
      <section className="bg-brand-dark flex flex-col items-start pt-20 px-8 pb-16 shrink-0">
        <div className="flex flex-col items-start w-full max-w-367.75 mx-auto">
          <span className="text-brand-gold font-body text-xs font-bold tracking-[2.2px] uppercase mb-4">
            Assinatura
          </span>
          <h1 className="text-brand-cream font-heading text-6xl font-medium leading-tight tracking-tighter">
            Planos para membros.
          </h1>
          <p className="text-white/65 font-body text-sm font-normal leading-7 mt-5">
            Escolha o plano que combina com sua rotina e aproveite benefícios
            exclusivos em cada visita.
          </p>
        </div>
      </section>

      {/* Grid de planos */}
      <section className="w-full bg-brand-cream">
        <div className="flex flex-col items-center w-full max-w-screen-2xl mx-auto py-24 px-43.875">
          <div className="flex flex-col md:grid md:grid-cols-3 border-l border-t border-brand-border">
            {/* Bronze */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <h3 className="text-brand-dark font-heading text-2xl font-medium">
                Bronze
              </h3>
              <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px] mt-2">
                R$ 49/mês
              </p>

              <ul className="flex flex-col gap-3 mt-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    1 corte por mês
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    10% de desconto em produtos
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    Agendamento prioritário
                  </span>
                </li>
              </ul>

              <button
                type="button"
                className="inline-flex items-center justify-center py-3 px-5 mt-24 border border-brand-gold text-brand-gold font-body text-xs font-bold uppercase hover:bg-brand-gold hover:text-brand-dark transition-colors w-full"
              >
                Assinar Bronze
              </button>
            </div>

            {/* Prata */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <h3 className="text-brand-dark font-heading text-2xl font-medium">
                Prata
              </h3>
              <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px] mt-2">
                R$ 89/mês
              </p>

              <ul className="flex flex-col gap-3 mt-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    2 cortes por mês
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    15% de desconto em produtos
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    Brinde de aniversário
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    Agendamento prioritário
                  </span>
                </li>
              </ul>

              <button
                type="button"
                className="inline-flex items-center justify-center py-3 px-5 mt-16 border border-brand-gold text-brand-gold font-body text-xs font-bold uppercase hover:bg-brand-gold hover:text-brand-dark transition-colors w-full"
              >
                Assinar Prata
              </button>
            </div>

            {/* Ouro */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <h3 className="text-brand-dark font-heading text-2xl font-medium">
                Ouro
              </h3>
              <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px] mt-2">
                R$ 139/mês
              </p>

              <ul className="flex flex-col gap-3 mt-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    Cortes ilimitados
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    20% de desconto em produtos
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    Brinde de aniversário
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    Sessão de barba grátis por mês
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span className="text-[#5D625D] font-body text-sm">
                    Atendimento VIP
                  </span>
                </li>
              </ul>

              <button
                type="button"
                className="inline-flex items-center justify-center py-3 px-5 mt-8 border border-brand-gold text-brand-gold font-body text-xs font-bold uppercase hover:bg-brand-gold hover:text-brand-dark transition-colors w-full"
              >
                Assinar Ouro
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
