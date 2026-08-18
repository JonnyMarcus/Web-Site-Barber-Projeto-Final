"use client";

import { useState } from "react";

type Modo = "login" | "cadastro";

export default function LoginCadastro() {
  const [modo, setModo] = useState<Modo>("login");

  const login = modo === "login";

  return (
    <form
      className="
        grid h-full min-h-0
        grid-rows-[auto_auto_minmax(0,1fr)_auto]
        px-8 py-10
        sm:px-10 sm:py-12
        md:px-[9%] md:py-[8%]
      "
    >
      <div>
        <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#B4945A] sm:text-[13px]">
          Área do cliente
        </span>

        <h2 className="mt-5 font-[Cambria] text-[30px] font-medium leading-[38px] text-[#163F36] sm:text-[36px] sm:leading-[45px]">
          {login ? "Bem-vindo de volta." : "Crie sua conta."}
        </h2>

        <p className="mt-3 text-[16px] text-[#666666] sm:text-[18px]">
          {login
            ? "Entre para agendar de maneira simples."
            : "Cadastre-se para agendar seus horários."}
        </p>
      </div>

      <div className="mt-7 grid grid-cols-2 border-b border-[#D4C7B3] sm:mt-8">
        <button
          type="button"
          onClick={() => setModo("login")}
          className={`border-b-[3px] pb-3 text-[11px] font-bold uppercase tracking-[2px] sm:pb-4 sm:text-[13px] ${
            login
              ? "border-[#8B2E2E] text-[#163F36]"
              : "border-transparent text-[#666666]"
          }`}
        >
          Entrar
        </button>

        <button
          type="button"
          onClick={() => setModo("cadastro")}
          className={`border-b-[3px] pb-3 text-[11px] font-bold uppercase tracking-[2px] sm:pb-4 sm:text-[13px] ${
            !login
              ? "border-[#8B2E2E] text-[#163F36]"
              : "border-transparent text-[#666666]"
          }`}
        >
          Cadastrar
        </button>
      </div>

      <div className="min-h-0 overflow-y-auto pr-2">
        <div className="space-y-5 pt-6 sm:pt-7">

          {!login && (
            <div>
              <label
                htmlFor="name"
                className="text-[11px] font-bold uppercase tracking-[2px] text-[#666666] sm:text-[13px]"
              >
                Nome completo
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Seu nome"
                className="mt-2 h-14 w-full border border-[#D4C7B3] bg-transparent px-5 text-[15px] text-[#163F36] outline-none placeholder:text-[#B5B2AB] focus:border-[#163F36] sm:h-[60px] sm:text-[17px]"
              />
            </div>
          )}

          {!login && (
            <div>
              <label
                htmlFor="phone"
                className="text-[11px] font-bold uppercase tracking-[2px] text-[#666666] sm:text-[13px]"
              >
                Telefone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(11) 99999-9999"
                className="mt-2 h-14 w-full border border-[#D4C7B3] bg-transparent px-5 text-[15px] text-[#163F36] outline-none placeholder:text-[#B5B2AB] focus:border-[#163F36] sm:h-[60px] sm:text-[17px]"
              />
            </div>
          )}

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
              className="mt-2 h-14 w-full border border-[#D4C7B3] bg-transparent px-5 text-[15px] text-[#163F36] outline-none placeholder:text-[#B5B2AB] focus:border-[#163F36] sm:h-[60px] sm:text-[17px]"
            />
          </div>

          <div>
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
              autoComplete={login ? "current-password" : "new-password"}
              placeholder="••••••••"
              className="mt-2 h-14 w-full border border-[#D4C7B3] bg-transparent px-5 text-[15px] tracking-[4px] text-[#163F36] outline-none placeholder:text-[#B5B2AB] focus:border-[#163F36] sm:h-[60px] sm:text-[17px]"
            />
          </div>

          {!login && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-[11px] font-bold uppercase tracking-[2px] text-[#666666] sm:text-[13px]"
              >
                Confirmar senha
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="mt-2 h-14 w-full border border-[#D4C7B3] bg-transparent px-5 text-[15px] tracking-[4px] text-[#163F36] outline-none placeholder:text-[#B5B2AB] focus:border-[#163F36] sm:h-[60px] sm:text-[17px]"
              />
            </div>
          )}

          <div className="h-2" />
        </div>
      </div>

      <div className="pt-5">
        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-3 bg-[#163F36] text-[11px] font-bold uppercase tracking-[2px] text-[#FDF7EC] transition-opacity hover:opacity-90 sm:h-[62px] sm:text-[13px]"
        >
          {login ? "Entrar e agendar" : "Criar conta"}

          <span
            aria-hidden="true"
            className="text-xl leading-none sm:text-[22px]"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}