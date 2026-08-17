"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex w-full bg-brand-dark/95 justify-between items-center px-8 py-4 text-brand-cream">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/Logo.png"
          alt="Logo Barbearia do Victor"
          width={56}
          height={56}
          className="w-16 h-16 object-contain"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm leading-tight tracking-tight font-normal font-body">
            Barbearia
          </span>
          <span className="text-xs font-bold uppercase leading-none tracking-widest font-heading">
            Do Victor
          </span>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm">
        <Link
          href="/"
          className="hover:text-brand-gold hover:underline transition-colors"
        >
          Início
        </Link>
        <Link
          href="/servicos"
          className="hover:text-brand-gold hover:underline transition-colors"
        >
          Serviços
        </Link>
        <Link
          href="/agenda"
          className="hover:text-brand-gold hover:underline transition-colors"
        >
          Agendar
        </Link>
      </nav>

      <Link
        href="/login"
        className="hidden md:inline-flex bg-brand-gold text-brand-black text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Entrar
      </Link>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="md:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {menuOpen && (
        <>
          {/* overlay desfocado atrás do drawer */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* drawer deslizando da direita */}
          <nav className="fixed top-0 right-0 h-full w-72 bg-brand-dark flex flex-col items-start gap-6 px-8 py-8 z-50 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="self-end"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
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
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-gold text-brand-black text-sm font-medium px-5 py-2 rounded-full"
            >
              Entrar
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
