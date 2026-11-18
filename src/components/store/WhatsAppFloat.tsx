import { generalReservationLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={generalReservationLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Manda Express no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1DA851] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
