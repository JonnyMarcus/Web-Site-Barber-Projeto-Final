import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-cream px-8 py-12 ">
      <div className="grid grid-cols-4 gap-8 justify-between">
        {/* coluna marca */}
        <div className="items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo Barbearia do Victor"
              width={56}
              height={56}
              className="w-16 h-16 object-contain "
            />
            <div className="flex flex-col leading-tight gap-1">
              <span className="text-sm leading-tight tracking-tight font-normal font-heading">
                Barbearia
              </span>
              <span className="text-xs font-bold uppercase leading-none tracking-widest font-body">
                Do Victor
              </span>
            </div>
          </div>
          <div className="flex flex-col font-body text-brand-footer text-sm mt-5">
            <span>Técnica, conversa e cuidado</span>
            <span>masculino no centro de São Paulo.</span>
          </div>
        </div>
        {/* coluna endereço */}
        <div className="py-2 flex flex-col gap-2">
          <h1 className="text-brand-gold text-xs text-bold uppercase">
            endereço
          </h1>
          <div className="flex flex-col text-brand-footer text-sm font-normal">
            <div className="flex gap-1 items-center">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Rua Harmonia, 427</span>
            </div>
            <span className="px-5">Vila Madalena · SP</span>
          </div>
        </div>
        {/* coluna contato */}
        <div className="flex flex-col py-2 gap-2">
          <h1 className="text-brand-gold text-xs text-bold uppercase">
            contato
          </h1>
          <div className="flex flex-col text-brand-footer text-sm font-normal">
            <div className="flex gap-1">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>(11) 99876-4321</span>
            </div>
            <div className="flex gap-1">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Ter–Sex 10h–20h · Sáb 9h–18h</span>
            </div>
          </div>
        </div>
        {/* coluna acompanhe */}
        <div className="flex flex-col py-2 gap-2">
          <h1 className="text-brand-gold text-xs text-bold uppercase">
            acompanhe
          </h1>
          <div className="flex  text-brand-footer text-sm font-normal gap-1">
            <MessageCircle className="w-4 h-4 text-brand-gold" />
            <span>@barbeariadovictor</span>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-4 text-xs text-start font-body text-brand-footer">
        Barbearia do Victor — Tradição, técnica e estilo.
      </div>
    </footer>
  );
}
