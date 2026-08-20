"use client";

import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Agenda() {
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectButton, setSelectButton] = useState(false);
  const [selectData, setSelectData] = useState<string | null>(null);
  const [selectTime, setSelectTime] = useState<string | null>(null);
  const [selectContinue, setSelectContinue] = useState(false);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero escuro */}
      <section className="bg-brand-dark flex flex-col items-start pt-20 px-8 pb-16 shrink-0">
        <div className="flex flex-col items-start w-full px-20 max-w-367.75 mx-auto">
          <span className="text-brand-gold font-body text-xs font-bold tracking-[2.2px] uppercase mb-4">
            Agendar horário
          </span>

          <h1 className="text-brand-cream font-heading text-6xl font-medium leading-tight tracking-tighter">
            Reserve o seu momento.
          </h1>

          <p className="text-white/65 font-body text-sm font-normal leading-7 mt-5">
            Escolha profissional, data e horário. O seu atendimento está a
            poucos toques de distância.
          </p>
        </div>
      </section>

      {/* Área bege com o wizard */}
      <section className="w-full bg-brand-cream flex-1">
        <div className="flex flex-col items-center w-full max-w-367.75 mx-auto py-16 px-8">
          {/* Indicador dos passos */}
          <div className="flex items-center gap-4 mb-10 w-full max-w-2xl justify-between">
            {/* PASSO 1 */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                <span className="text-white font-body text-xs font-bold">
                  1
                </span>
              </div>

              <span className="text-brand-gold font-body text-xs font-bold tracking-[1.2px] uppercase">
                Profissional
              </span>
            </div>

            <div className="w-10 h-px bg-brand-border" />

            {/* PASSO 2 */}
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  selectButton
                    ? "bg-brand-dark text-white"
                    : "border border-brand-border text-[#5D625D]"
                }`}
              >
                <span className="font-body text-xs font-bold">2</span>
              </div>

              <span
                className={`font-body text-xs font-bold tracking-[1.2px] uppercase ${
                  selectButton ? "text-brand-gold" : "text-[#5D625D]"
                }`}
              >
                Data e hora
              </span>
            </div>

            <div className="w-10 h-px bg-brand-border" />

            {/* PASSO 3 */}
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  selectContinue
                    ? "bg-brand-dark text-white"
                    : "border border-brand-border text-[#5D625D]"
                }`}
              >
                <span className="font-body text-xs font-bold">3</span>
              </div>

              <span
                className={`font-body text-xs font-bold tracking-[1.2px] uppercase ${
                  selectContinue ? "text-brand-gold" : "text-[#5D625D]"
                }`}
              >
                Confirmar
              </span>
            </div>
          </div>
          {/* PASSO 1 - BARBEIRO */}
          {!selectButton ? (
            <div className="flex flex-col items-start p-8 border border-brand-border bg-brand-cream-light w-full max-w-2xl">
              <span className="text-brand-gold font-body text-xs font-bold tracking-[1.2px] uppercase mb-4">
                1. Escolha o barbeiro
              </span>

              <div className="flex gap-4 mt-6 w-full justify-between">
                {/* Victor */}
                <button
                  type="button"
                  onClick={() => setSelectedBarber("victor")}
                  className={`flex items-center gap-3 p-3 flex-1 relative text-left border transition-colors ${
                    selectedBarber === "victor"
                      ? "bg-brand-border border-brand-gray"
                      : "bg-brand-cream-light border-brand-gold hover:bg-brand-cream"
                  }`}
                >
                  <div className="relative w-12 h-12 shrink-0 overflow-hidden">
                    <Image
                      src="/barbeiroVitor.jpg"
                      alt="Victor Ramos"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-brand-dark font-heading text-base font-medium">
                      Victor Ramos
                    </span>

                    <span className="text-[#5D625D] font-body text-xs">
                      Cortes clássicos & tesoura
                    </span>
                  </div>

                  {selectedBarber === "victor" && (
                    <Check className="w-4 h-4 text-brand-gold absolute top-3 right-3" />
                  )}
                </button>

                {/* Caio */}
                <button
                  type="button"
                  onClick={() => setSelectedBarber("caio")}
                  className={`flex items-center gap-3 p-3 border flex-1 text-left relative transition-colors ${
                    selectedBarber === "caio"
                      ? "bg-brand-cream border-brand-gray"
                      : "bg-brand-cream-light border-brand-gold hover:bg-brand-cream"
                  }`}
                >
                  <div className="relative w-12 h-12 shrink-0 overflow-hidden">
                    <Image
                      src="/barbeiroCaio.jpg"
                      alt="Caio Martins"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-brand-dark font-heading text-base font-medium">
                      Caio Martins
                    </span>

                    <span className="text-[#5D625D] font-body text-xs">
                      Barba & acabamento
                    </span>
                  </div>

                  {selectedBarber === "caio" && (
                    <Check className="w-4 h-4 text-brand-gold absolute top-3 right-3" />
                  )}
                </button>
              </div>

              {/* Continuar */}
              <button
                type="button"
                disabled={selectedBarber === null}
                onClick={() => setSelectButton(true)}
                className="disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2 py-3 px-5 mt-6 bg-brand-dark text-white font-body text-xs font-bold uppercase self-end hover:opacity-90 transition-opacity"
              >
                Continuar
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : !selectContinue ? (
            /* PASSO 2 - DATA E HORÁRIO */

            <div className="flex flex-col items-start p-8 border border-brand-border bg-brand-cream-light w-full max-w-2xl">
              <span className="text-brand-gold font-body text-xs font-bold tracking-[1.2px] uppercase mb-4">
                2. Data e horário
              </span>

              {/* Grade de dias */}
              <div className="grid grid-cols-3 gap-3 w-full">
                <button
                  type="button"
                  onClick={() => setSelectData("terça, 19")}
                  className={`border border-brand-border font-body text-sm transition-colors ${
                    selectData === "terça, 19"
                      ? "bg-brand-dark p-3 text-white"
                      : "bg-brand-cream-light p-3 text-brand-dark hover:bg-brand-cream"
                  }`}
                >
                  Ter, 19
                </button>

                <button
                  type="button"
                  onClick={() => setSelectData("Quarta, 20")}
                  className={`border border-brand-border font-body text-sm transition-colors ${
                    selectData === "Quarta, 20"
                      ? "bg-brand-dark p-3 text-white"
                      : "bg-brand-cream-light p-3 text-brand-dark hover:bg-brand-cream"
                  }`}
                >
                  Qua, 20
                </button>

                <button
                  type="button"
                  onClick={() => setSelectData("Quinta, 21")}
                  className={`border border-brand-border font-body text-sm transition-colors ${
                    selectData === "Quinta, 21"
                      ? "bg-brand-dark p-3 text-white"
                      : "bg-brand-cream-light p-3 text-brand-dark hover:bg-brand-cream"
                  }`}
                >
                  Qui, 21
                </button>

                <button
                  type="button"
                  onClick={() => setSelectData("Sexta, 22")}
                  className={`border border-brand-border font-body text-sm transition-colors ${
                    selectData === "Sexta, 22"
                      ? "bg-brand-dark p-3 text-white"
                      : "bg-brand-cream-light p-3 text-brand-dark hover:bg-brand-cream"
                  }`}
                >
                  Sex, 22
                </button>

                <button
                  type="button"
                  onClick={() => setSelectData("Sabado, 23")}
                  className={`border border-brand-border font-body text-sm transition-colors ${
                    selectData === "Sabado, 23"
                      ? "bg-brand-dark p-3 text-white"
                      : "bg-brand-cream-light p-3 text-brand-dark hover:bg-brand-cream"
                  }`}
                >
                  Sáb, 23
                </button>

                <button
                  type="button"
                  onClick={() => setSelectData("Terça, 26")}
                  className={`border border-brand-border font-body text-sm transition-colors ${
                    selectData === "Terça, 26"
                      ? "bg-brand-dark p-3 text-white"
                      : "bg-brand-cream-light p-3 text-brand-dark hover:bg-brand-cream"
                  }`}
                >
                  Ter, 26
                </button>
              </div>

              {/* Horários disponíveis */}
              <span className="text-brand-gold font-body text-xs font-bold tracking-[1.2px] uppercase mt-6 mb-4">
                Horários disponíveis
              </span>

              <div className="grid grid-cols-3 gap-3 w-full">
                {["10:00", "11:30", "13:00", "14:30", "16:00", "18:00"].map(
                  (time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectTime(time)}
                      className={`border border-brand-border text-sm transition-colors ${
                        selectTime === time
                          ? "bg-brand-dark p-3 text-white font-body"
                          : "bg-brand-cream-light p-3 text-brand-dark font-body hover:bg-brand-cream hover:border-brand-gold"
                      }`}
                    >
                      {time}
                    </button>
                  ),
                )}
              </div>

              {/* Navegação */}
              <div className="flex justify-between items-center w-full mt-6">
                <button
                  type="button"
                  onClick={() => setSelectButton(false)}
                  className="inline-flex items-center gap-2 text-brand-dark font-body text-xs font-bold uppercase hover:text-brand-gold transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Voltar
                </button>

                <button
                  type="button"
                  disabled={selectData === null || selectTime === null}
                  onClick={() => setSelectContinue(true)}
                  className="disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2 py-3 px-5 mt-6 bg-brand-dark text-white font-body text-xs font-bold uppercase hover:opacity-90 transition-opacity"
                >
                  Continuar
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : !appointmentConfirmed ? (
            /* PASSO 3 - REVISAR */

            <div className="flex flex-col items-start p-8 border border-brand-border bg-brand-cream-light w-full max-w-2xl">
              <span className="text-brand-gold font-body text-xs font-bold tracking-[1.2px] uppercase mb-4">
                3. Revisar horário
              </span>

              <h2 className="text-brand-dark font-heading text-3xl font-medium">
                Tudo certo para o seu ritual.
              </h2>

              <div className="flex flex-col gap-4 mt-8 w-full">
                <div className="flex justify-between border-b border-brand-border pb-3">
                  <span className="text-[#5D625D] font-body text-sm">
                    Profissional
                  </span>

                  <span className="text-brand-dark font-body text-sm font-bold">
                    {selectedBarber === "victor"
                      ? "Victor Ramos"
                      : "Caio Martins"}
                  </span>
                </div>

                <div className="flex justify-between border-b border-brand-border pb-3">
                  <span className="text-[#5D625D] font-body text-sm">Data</span>

                  <span className="text-brand-dark font-body text-sm font-bold">
                    {selectData}
                  </span>
                </div>

                <div className="flex justify-between border-b border-brand-border pb-3">
                  <span className="text-[#5D625D] font-body text-sm">
                    Horário
                  </span>

                  <span className="text-brand-dark font-body text-sm font-bold">
                    {selectTime}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center w-full mt-8">
                <button
                  type="button"
                  onClick={() => setSelectContinue(false)}
                  className="inline-flex items-center gap-2 text-brand-dark font-body text-xs font-bold uppercase hover:text-brand-gold transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Voltar
                </button>

                <button
                  type="button"
                  onClick={() => setAppointmentConfirmed(true)}
                  className="inline-flex items-center gap-2 py-3 px-5 bg-brand-gold text-brand-dark font-body text-xs font-bold uppercase hover:bg-brand-dark hover:text-white transition-colors"
                >
                  Confirmar
                  <CalendarCheck className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* AGENDAMENTO CONFIRMADO */

            <div className="flex flex-col items-center text-center p-10 border border-brand-border bg-brand-cream-light w-full max-w-2xl">
              {/* Ícone de sucesso */}
              <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center mb-6">
                <ShieldCheck
                  className="w-8 h-8 text-brand-gold"
                  strokeWidth={1.8}
                />
              </div>
              <span className="text-brand-gold font-body text-xs font-bold tracking-[1.5px] uppercase mb-4">
                Agendamento confirmado
              </span>

              <h2 className="text-brand-dark font-heading text-4xl font-medium">
                Seu horário está reservado.
              </h2>

              <p className="text-[#5D625D] font-body text-sm leading-6 mt-4 max-w-md">
                Tudo certo! Seu atendimento foi confirmado. Esperamos você no
                horário marcado para aproveitar o seu momento.
              </p>

              {/* Resumo do agendamento */}
              <div className="flex flex-col gap-4 mt-8 w-full border border-brand-border p-6">
                <div className="flex justify-between items-center">
                  <span className="text-[#5D625D] font-body text-sm">
                    Profissional
                  </span>

                  <span className="text-brand-dark font-body text-sm font-bold">
                    {selectedBarber === "victor"
                      ? "Victor Ramos"
                      : "Caio Martins"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#5D625D] font-body text-sm">Data</span>

                  <span className="text-brand-dark font-body text-sm font-bold">
                    {selectData}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#5D625D] font-body text-sm">
                    Horário
                  </span>

                  <span className="text-brand-dark font-body text-sm font-bold">
                    {selectTime}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedBarber(null);
                  setSelectButton(false);
                  setSelectData(null);
                  setSelectTime(null);
                  setSelectContinue(false);
                  setAppointmentConfirmed(false);
                }}
                className="inline-flex items-center gap-2 py-3 px-5 mt-8 bg-brand-dark text-white font-body text-xs font-bold uppercase hover:opacity-90 transition-opacity"
              >
                Fazer novo agendamento
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
