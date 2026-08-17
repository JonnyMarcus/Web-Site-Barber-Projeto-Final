import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full bg-brand-dark/95 justify-between items-center px-8 py-4 text-brand-cream border-b border-brand-black drop-shadow-xl">
      <Link href="/" className="flex items-center gap-2 ">
        <Image
          src="/Logo.png"
          alt="Logo Barbearia do Victor"
          width={56}
          height={56}
          className="w-16 h-16 object-contain"
        />
        <div className="flex flex-col leading-tight gap-1">
          <span className="text-sm leading-tight tracking-tight font-normal font-heading">
            Barbearia
          </span>
          <span className="text-xs font-bold uppercase leading-none tracking-widest font-body">
            Do Victor
          </span>
        </div>
      </Link>

      <nav className="flex items-center gap-8 text-sm">
        <Link href="/" className="hover:text-brand-gold transition-colors ">
          Início
        </Link>
        <Link
          href="/servicos"
          className="hover:text-brand-gold transition-colors "
        >
          Serviços
        </Link>
        <Link
          href="/agenda"
          className="hover:text-brand-gold transition-colors "
        >
          Agendar
        </Link>
      </nav>

      <Link
        href="/login"
        className="bg-brand-gold text-brand-black text-sm font-medium px-6 py-2  hover:opacity-90 transition-opacity"
      >
        Entrar
      </Link>
    </header>
  );
}
