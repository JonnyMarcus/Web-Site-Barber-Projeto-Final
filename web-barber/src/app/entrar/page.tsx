import Image from "next/image";
import LoginCadastro from "../../components/loginCadastro";

export default function Entrar() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#E9D9BC] p-4 md:p-8">
      <div className="grid w-full max-w-[1024px] grid-cols-1 overflow-hidden md:h-[582px] md:grid-cols-[45.91%_54.09%]">
        <section className="relative h-[360px] overflow-hidden sm:h-[420px] md:h-full">
          <Image
            src="/Entrar.jpg"
            alt="Interior da Barbearia do Victor"
            fill
            priority
            className="object-cover blur-[1px]"
          />

          <div className="absolute inset-0 bg-emerald-950/30" />

          <div className="absolute left-[8.5%] top-[6%] flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Logo Barbearia do Victor"
              width={52}
              height={52}
            />

            <div className="text-[#F2E7D2]">
              <p className="font-[Cambria] text-[15px]">
                Barbearia
              </p>

              <p className="font-[Inter] text-sm font-bold uppercase tracking-wide">
                Do Victor
              </p>
            </div>
          </div>

          <div className="absolute left-[8.5%] top-[53%]">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#B4945A]">
              Seu tempo, bem cuidado
            </span>

            <h1 className="mt-4 max-w-[391px] font-[Cambria] text-[36px] font-medium leading-[45px] text-[#F2E7D2]">
              Uma casa para voltar sempre.
            </h1>
          </div>
        </section>

        <section className="min-h-0 h-full bg-[#FDF7EC]">
            <LoginCadastro />
        </section>
      </div>
    </main>
  );
}