import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-cream px-8 py-12">
      <div className="flex flex-col gap-8 md:grid md:grid-cols-4 md:justify-between">
        {/* coluna marca */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo Barbearia do Victor"
              width={56}
              height={56}
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col leading-tight gap-1">
              <span className="text-sm leading-tight tracking-tight font-normal font-body">
                Barbearia
              </span>
              <span className="text-xs font-bold uppercase leading-none tracking-widest font-heading">
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
        <div className="flex flex-col gap-2">
          <h4 className="text-brand-gold text-xs font-bold uppercase">
            endereço
          </h4>
          <div className="flex flex-col text-brand-footer text-sm font-normal">
            <div className="flex gap-1 items-center">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Rua Harmonia, 427</span>
            </div>
            <span className="px-5">Vila Madalena · SP</span>
          </div>
        </div>

        {/* coluna contato */}
        <div className="flex flex-col gap-2">
          <h4 className="text-brand-gold text-xs font-bold uppercase">
            contato
          </h4>
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
        <div className="flex flex-col gap-2">
          <h4 className="text-brand-gold text-xs font-bold uppercase">
            acompanhe
          </h4>
          <div className="flex text-brand-footer text-sm font-normal  items-center gap-1">
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
