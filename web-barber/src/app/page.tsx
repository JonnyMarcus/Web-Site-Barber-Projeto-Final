import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen">
        <Image
          src="/Home.jpg"
          alt="Interior da barbearia"
          fill
          priority
          className="object-cover -z-20"
        />

        <div className="absolute inset-0 bg-linear-to-r from-brand-dark/96 via-brand-dark/70 to-brand-dark/18" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-brand-dark to-transparent pointer-events-none" />

        <div className="ml-9 relative flex flex-col justify-center items-start w-full max-w-full min-h-screen pt-0 px-12 pb-20">
          <div className="flex flex-col gap-2">
            <span className="text-brand-gold font-heading text-xs font-bold leading-4 tracking-widest uppercase">
              São Paulo · Desde 2014
            </span>
            <p className="text-brand-cream font-heading text-2xl font-normal leading-8">
              Barbearia do Victor
            </p>
          </div>

          <div>
            <h1 className="text-brand-cream text-6xl mt-4 font-medium leading-none tracking-tighter font-heading">
              Tradição no corte.
              <br />
              Estilo em cada detalhe.
            </h1>
            <p className="text-white/75 font-body text-sm mt-6 font-normal leading-7">
              Uma experiência clássica de barbearia, com técnica, cuidado e
              <br />
              personalidade.
            </p>
          </div>

          <button className="inline-flex justify-center items-center mt-8 gap-3 py-4 px-6 bg-brand-gold hover:opacity-90 transition-opacity">
            Agendar Horario <ChevronRight />
          </button>
        </div>
      </section>

      {/* Sobre */}
      <section className="relative min-h-screen bg-brand-cream-light flex flex-col items-start w-full px-6 md:px-44 py-28 shrink-0">
        <h1 className="flex text-brand-gold font-heading text-lg uppercase mb-7 font-bold leading-tight justify-center items-center">
          Sobre nós
        </h1>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-20 items-center">
          <div className="relative aspect-square justify-self-start w-full">
            <Image
              src="/Sobre.jpg"
              alt="Barbeiro aparando a barba"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-brand-dark font-heading text-5xl font-medium leading-tight tracking-tight mb-6">
              Onde tradição e estilo se encontram.
            </h2>
            <p className="text-brand-gray font-body text-sm font-normal leading-7">
              Uma casa para homens que entendem o cuidado como uma forma de
              presença. Cada atendimento começa com escuta, passa por técnica e
              termina diante do espelho.
            </p>
            <Link
              href="/servicos"
              className="inline-flex gap-2 mt-8 uppercase text-xs text-brand-dark items-center border-b font-bold border-brand-gold hover:text-brand-gold hover:border-brand-dark transition-colors"
            >
              Conhecer serviços <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
