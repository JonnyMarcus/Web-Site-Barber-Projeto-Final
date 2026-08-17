import { ArrowRight, Scissors } from "lucide-react";

export default function Servicos() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-dark flex flex-col items-start pt-20 px-8 pb-16 shrink-0 self-stretch">
        <div className="flex flex-col items-start w-full max-w-367.75 py-0 px-[111.5px] shrink-0">
          <span className="text-brand-gold font-body text-sm font-bold mb-8 tracking-normal uppercase">
            Serviços
          </span>
          <h2 className="text-brand-cream font-heading text-6xl font-medium leading-tight tracking-normal">
            O cuidado masculino,
            <br /> elevado ao seu melhor.
          </h2>
          <p className="text-white/65 font-body text-[15px] font-normal leading-7 mt-5">
            Rituais de corte e barba desenvolvidos para respeitar o seu tempo,
            <br />
            seu estilo e sua rotina.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-start w-full max-w-screen-2xl py-24 px-43 bg-brand-cream ">
        <div className="flex flex-col md:grid md:grid-cols-3 border-l border-t border-brand-border">
          {/* corte */}
          <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
            <div className="flex flex-col items-start m-*8">
              <Scissors className="w-4 h-4 text-brand-gold items-start" />
              <h2>Corte</h2>
            </div>
            <div>
              <p>Corte sob medida, finalização e orientação de estilo.</p>
              <p>R$ 75</p>
            </div>
          </div>
          {/* barba */}
          <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
            <div>
              <Scissors />
              <h2>Barba</h2>
            </div>
            <div>
              <p>Toalha quente, navalha e desenho preciso.</p>
              <p>R$ 55</p>
            </div>
          </div>
          {/* corte + barba */}
          <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
            <div>
              <Scissors />
              <h2>Corte + Barba</h2>
            </div>
            <div>
              <p>O ritual completo para a sua melhor versão.</p>
              <p>R$ 115</p>
            </div>
          </div>
          {/* pézinho */}
          <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
            <div>
              <Scissors />
              <h2>Pézinho</h2>
            </div>
            <div>
              <p>Contorno de cabelo e barba para manter o desenho.</p>
              <p>R$ 30</p>
            </div>
          </div>
          {/* sombrancelha */}
          <div className="flex flex-col items-start p-8 border-r border-b border-brand-border bg-brand-cream-light">
            <div>
              <Scissors />
              <h2>Sombrancelha</h2>
            </div>
            <div>
              <p>CLimpeza discreta para valorizar a expressão.</p>
              <p>R$ 25</p>
            </div>
          </div>
          {/* tratamento */}
          <div className="flex flex-col items-start p-8 self-start justify-self-start border-r border-b border-brand-border bg-brand-cream-light">
            <div>
              <Scissors />
              <h2>Tratamentos</h2>
            </div>
            <div>
              <p>Cuidado para fios e couro cabeludo saudáveis.</p>
              <p>R$ 75</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-brand-dark">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-367 mx-auto py-16 px-8 md:px-55">
          <div className="flex flex-col items-start w-full md:w-auto">
            <span className="text-brand-gold font-body text-xs font-bold uppercase tracking-2">
              Clube do Victor
            </span>

            <h3 className="text-brand-cream font-heading text-3xl font-medium mt-3">
              Vantagens para membros.
            </h3>

            <p className="text-white/65 font-body text-sm font-normal mt-3">
              Entre na sua conta para visualizar planos e benefícios exclusivos.
            </p>
          </div>

          <button
            className="inline-flex items-center gap-2 py-3 px-5 mt-8 md:mt-0 border border-brand-gold text-brand-gold font-body text-xs font-bold uppercase hover:bg-brand-gold hover:text-brand-dark"
            type="button"
          >
            Entrar para ver planos
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </section>
    </div>
  );
}
