import { ArrowRight, Scissors } from "lucide-react";
import Link from "next/link";

export default function Servicos() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-dark flex flex-col items-start pt-20 px-8 pb-16 shrink-0 self-stretch">
        <div className="flex flex-col items-start w-full max-w-367.75 py-0 px-[111.5px] shrink-0">
          <span className="text-brand-gold font-body text-sm font-bold mb-8 tracking-normal uppercase">
            Serviços
          </span>
          <h1 className="text-brand-cream font-heading text-6xl font-medium leading-tight tracking-normal">
            O cuidado masculino,
            <br /> elevado ao seu melhor.
          </h1>
          <p className="text-white/65 font-body text-[15px] font-normal leading-7 mt-5">
            Rituais de corte e barba desenvolvidos para respeitar o seu tempo,
            <br />
            seu estilo e sua rotina.
          </p>
        </div>
      </section>

      <section className="w-full bg-brand-cream">
        <div className="flex flex-col items-center w-full max-w-screen-2xl mx-auto py-24 px-43.875">
          <div className="flex flex-col md:grid md:grid-cols-3 border-l border-t border-brand-border">
            {/* corte */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <div className="flex flex-col items-start">
                <Scissors className="w-4 h-4 text-brand-gold" />
                <h3 className="text-brand-dark font-heading text-2xl font-medium mt-12">
                  Corte
                </h3>
              </div>
              <div className="flex flex-col items-start pt-3 min-h-12 shrink-0">
                <p className="text-[#5D625D] font-body text-sm font-normal">
                  Corte sob medida, finalização e orientação de estilo.
                </p>
              </div>
              <div className="flex flex-col items-start pt-7 shrink-0">
                <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px]">
                  R$ 75
                </p>
              </div>
            </div>

            {/* barba */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <div className="flex flex-col items-start">
                <Scissors className="w-4 h-4 text-brand-gold" />
                <h3 className="text-brand-dark font-heading text-2xl font-medium mt-12">
                  Barba
                </h3>
              </div>
              <div className="flex flex-col items-start pt-3 min-h-12 shrink-0">
                <p className="text-[#5D625D] font-body text-sm font-normal">
                  Toalha quente, navalha e desenho preciso.
                </p>
              </div>
              <div className="flex flex-col items-start pt-7 shrink-0">
                <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px]">
                  R$ 55
                </p>
              </div>
            </div>

            {/* corte + barba */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <div className="flex flex-col items-start">
                <Scissors className="w-4 h-4 text-brand-gold" />
                <h3 className="text-brand-dark font-heading text-2xl font-medium mt-12">
                  Corte + Barba
                </h3>
              </div>
              <div className="flex flex-col items-start pt-3 min-h-12 shrink-0">
                <p className="text-[#5D625D] font-body text-sm font-normal">
                  O ritual completo para a sua melhor versão.
                </p>
              </div>
              <div className="flex flex-col items-start pt-7 shrink-0">
                <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px]">
                  R$ 115
                </p>
              </div>
            </div>

            {/* pézinho */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <div className="flex flex-col items-start">
                <Scissors className="w-4 h-4 text-brand-gold" />
                <h3 className="text-brand-dark font-heading text-2xl font-medium mt-12">
                  Pézinho
                </h3>
              </div>
              <div className="flex flex-col items-start pt-3 min-h-12 shrink-0">
                <p className="text-[#5D625D] font-body text-sm font-normal">
                  Contorno de cabelo e barba para manter o desenho.
                </p>
              </div>
              <div className="flex flex-col items-start pt-7 shrink-0">
                <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px]">
                  R$ 30
                </p>
              </div>
            </div>

            {/* sobrancelha */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <div className="flex flex-col items-start">
                <Scissors className="w-4 h-4 text-brand-gold" />
                <h3 className="text-brand-dark font-heading text-2xl font-medium mt-12">
                  Sobrancelha
                </h3>
              </div>
              <div className="flex flex-col items-start pt-3 min-h-12 shrink-0">
                <p className="text-[#5D625D] font-body text-sm font-normal">
                  Limpeza discreta para valorizar a expressão.
                </p>
              </div>
              <div className="flex flex-col items-start pt-7 shrink-0">
                <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px]">
                  R$ 25
                </p>
              </div>
            </div>

            {/* tratamentos */}
            <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
              <div className="flex flex-col items-start">
                <Scissors className="w-4 h-4 text-brand-gold" />
                <h3 className="text-brand-dark font-heading text-2xl font-medium mt-12">
                  Tratamentos
                </h3>
              </div>
              <div className="flex flex-col items-start pt-3 min-h-12 shrink-0">
                <p className="text-[#5D625D] font-body text-sm font-normal">
                  Cuidado para fios e couro cabeludo saudáveis.
                </p>
              </div>
              <div className="flex flex-col items-start pt-7 shrink-0">
                <p className="text-brand-dark font-body text-[11px] font-bold leading-[16.5px] tracking-[0.77px]">
                  R$ 75
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-dark">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-367.75 mx-auto py-16 px-8 md:px-55.875">
          <div className="flex flex-col items-start w-full md:w-auto">
            <span className="text-brand-gold font-body text-xs font-bold uppercase tracking-[2px]">
              Clube do Victor
            </span>

            <h3 className="text-brand-cream font-heading text-3xl font-medium mt-3">
              Vantagens para membros.
            </h3>

            <p className="text-white/65 font-body text-sm font-normal mt-3">
              Entre na sua conta para visualizar planos e benefícios exclusivos.
            </p>
          </div>

          <Link
            className="inline-flex items-center gap-2 py-3 px-5 mt-8 md:mt-0 border border-brand-gold text-brand-gold font-body text-xs font-bold uppercase hover:bg-brand-gold hover:text-brand-dark transition-colors shrink-0"
            href="/planos"
          >
            Entrar para ver planos
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>
      </section>
    </div>
  );
}
