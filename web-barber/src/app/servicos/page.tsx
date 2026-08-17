import { ArrowRight, Scissors } from "lucide-react";

export default function Servicos() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-dark flex flex-col items-start pt-20 px-8 pb-16 shrink-0 self-stretch">
        <div className="flex flex-col items-start w-full max-w-367.75 py-0 px-[111.5px] shrink-0">
          <span className="text-brand-gold font-body text-sm font-bold leading-14 tracking-normal uppercase">
            Serviços
          </span>
          <h2 className="text-brand-cream font-heading text-6xl font-medium leading-tight tracking-normal">
            O cuidado masculino, elevado ao seu melhor.
          </h2>
          <p className="text-white/65 font-body text-[15px] font-normal leading-7">
            Rituais de corte e barba desenvolvidos para respeitar o seu tempo,
            <br />
            seu estilo e sua rotina.
          </p>
        </div>
      </section>

      <section>
        <div>
          <div>
            {/* corte */}
            <div>
              <Scissors />
              <h2>Corte</h2>
            </div>
            <div>
              <p>Corte sob medida, finalização e orientação de estilo.</p>
              <p>R$ 75</p>
            </div>
            {/* barba */}
            <div>
              <Scissors />
              <h2>Barba</h2>
            </div>
            <div>
              <p>Toalha quente, navalha e desenho preciso.</p>
              <p>R$ 55</p>
            </div>
            {/* corte + barba */}
            <div>
              <Scissors />
              <h2>Corte + Barba</h2>
            </div>
            <div>
              <p>O ritual completo para a sua melhor versão.</p>
              <p>R$ 115</p>
            </div>
            {/* pézinho */}
            <div>
              <Scissors />
              <h2>Pézinho</h2>
            </div>
            <div>
              <p>Contorno de cabelo e barba para manter o desenho.</p>
              <p>R$ 30</p>
            </div>
            {/* sombrancelha */}
            <div>
              <Scissors />
              <h2>Sombrancelha</h2>
            </div>
            <div>
              <p>CLimpeza discreta para valorizar a expressão.</p>
              <p>R$ 25</p>
            </div>
            {/* tratamento */}
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
      <section>
        <div>
          <span>Clube do Victor</span>
          <h3>Vantagens para membros.</h3>
          <p>
            Entre na sua conta para visualizar planos e benefícios exclusivos.
          </p>
        </div>
        <div>
          <button type="button">
            Entrar para ver planos <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
