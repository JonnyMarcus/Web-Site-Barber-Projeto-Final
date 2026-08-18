"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex w-full items-center justify-between bg-brand-dark/95 px-8 py-4 text-brand-cream">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/Logo.png"
          alt="Logo Barbearia do Victor"
          width={56}
          height={56}
          className="h-16 w-16 object-contain"
        />

        <div className="flex flex-col leading-tight">
          <span className="font-body text-sm font-normal leading-tight tracking-tight">
            Barbearia
          </span>

          <span className="font-heading text-xs font-bold uppercase leading-none tracking-widest">
            Do Victor
          </span>
        </div>
      </Link>

      <nav className="hidden items-center gap-8 text-sm md:flex">
        <Link
          href="/"
          className="transition-colors hover:text-brand-gold hover:underline"
        >
          Início
        </Link>

        <Link
          href="/servicos"
          className="transition-colors hover:text-brand-gold hover:underline"
        >
          Serviços
        </Link>

        <Link
          href="/agenda"
          className="transition-colors hover:text-brand-gold hover:underline"
        >
          Agendar
        </Link>
      </nav>

      <Link
        href="/entrar"
        className="bg-brand-gold px-6 py-2 text-sm font-medium text-brand-black transition-opacity hover:opacity-90"
      >
        Entrar
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="md:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col items-start gap-6 bg-brand-dark px-8 py-8 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="self-end"
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" />
            </button>

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Início
            </Link>

            <Link href="/servicos" onClick={() => setMenuOpen(false)}>
              Serviços
            </Link>

            <Link href="/agenda" onClick={() => setMenuOpen(false)}>
              Agendar
            </Link>

            <Link
              href="/entrar"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-gold px-12 py-2 text-sm font-medium text-brand-black"
            >
              Entrar
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}