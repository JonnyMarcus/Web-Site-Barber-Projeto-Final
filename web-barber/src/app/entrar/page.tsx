import Image from "next/image";

export default function Entrar() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#E9D9BC] p-4 md:p-8">
      <div className="grid w-full max-w-[1024px] grid-cols-1 overflow-hidden md:aspect-[1024/582] md:grid-cols-[45.91%_54.09%]">

        {/* LADO ESQUERDO */}
        <section className="relative h-[360px] overflow-hidden sm:h-[420px] md:h-full">

          <Image
            src="/Entrar.jpg"
            alt="Interior da Barbearia do Victor"
            fill
            priority
            className="object-cover blur-[1px]"
          />

          {/* Sobreposição */}
          <div className="absolute inset-0 bg-emerald-950/30" />

          {/* Logo */}
          <div className="absolute left-[8.5%] top-[6%] flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Logo Barbearia do Victor"
              width={52}
              height={52}
              className="h-[52px] w-[52px]"
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

          {/* Chamada */}
          <div className="absolute left-[8.5%] top-[53%]">
            <span className="text-[13px] font-bold uppercase tracking-[2px] text-[#B4945A]">
              Seu tempo, bem cuidado
            </span>

            <h1 className="mt-4 max-w-[391px] font-[Cambria] text-[36px] font-medium leading-[45px] text-[#F2E7D2]">
              Uma casa para voltar sempre.
            </h1>
          </div>
        </section>

        {/* LADO DIREITO */}
        <section className="h-full w-full bg-[#FDF7EC] px-7 pt-10 sm:px-10 sm:pt-12 md:px-[9%] md:pt-[9%]">

          {/* Cabeçalho */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#B4945A] sm:text-[13px]">
              Área do cliente
            </span>

            <h2 className="mt-5 font-[Cambria] text-[30px] font-medium leading-[38px] text-[#163F36] sm:text-[36px] sm:leading-[45px]">
              Bem-vindo de volta.
            </h2>

            <p className="mt-3 text-[16px] text-[#666666] sm:text-[18px]">
              Entre para agendar de maneira simples.
            </p>
          </div>

          {/* Abas */}
          <div className="mt-7 grid grid-cols-2 border-b border-[#D4C7B3] sm:mt-8">
            <button
              type="button"
              className="border-b-[3px] border-[#8B2E2E] pb-3 text-[11px] font-bold uppercase tracking-[2px] text-[#163F36] sm:pb-4 sm:text-[13px]"
            >
              Entrar
            </button>

            <button
              type="button"
              className="pb-3 text-[11px] font-bold uppercase tracking-[2px] text-[#666666] sm:pb-4 sm:text-[13px]"
            >
              Cadastrar
            </button>
          </div>

          {/* Formulário */}
          <form className="mt-6 sm:mt-7">

            {/* E-mail */}
            <div>
              <label
                htmlFor="email"
                className="text-[11px] font-bold uppercase tracking-[2px] text-[#666666] sm:text-[13px]"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="voce@email.com"
                className="mt-2 h-14 w-full border border-[#D4C7B3] bg-transparent px-5 text-[15px] tracking-[2px] text-[#163F36] outline-none transition-colors placeholder:text-[#B5B2AB] focus:border-[#163F36] sm:h-[60px] sm:text-[17px]"
              />
            </div>

            {/* Senha */}
            <div className="mt-4 sm:mt-5">
              <label
                htmlFor="password"
                className="text-[11px] font-bold uppercase tracking-[2px] text-[#666666] sm:text-[13px]"
              >
                Senha
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="mt-2 h-14 w-full border border-[#D4C7B3] bg-transparent px-5 text-[15px] tracking-[4px] text-[#163F36] outline-none transition-colors placeholder:text-[#B5B2AB] focus:border-[#163F36] sm:h-[60px] sm:text-[17px]"
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="mt-4 flex h-14 w-full items-center justify-center gap-3 bg-[#163F36] text-[11px] font-bold uppercase tracking-[2px] text-[#FDF7EC] transition-opacity hover:opacity-90 sm:mt-5 sm:h-[62px] sm:text-[13px]"
            >
              Entrar e agendar

              <span
                aria-hidden="true"
                className="text-xl leading-none sm:text-[22px]"
              >
                →
              </span>
            </button>

          </form>
        </section>
      </div>
    </main>
  );
}