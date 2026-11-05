import { Button } from "@/components/ui/button";
import { generalReservationLink } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-titulo" className="bg-ink py-24 text-ink-foreground md:py-32">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center md:px-8">
        <h2 id="cta-titulo" className="text-4xl font-semibold leading-tight md:text-5xl">
          Encontraste o teu próximo estilo?
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-foreground/70 md:text-lg">
          Escolhe o teu produto favorito e faz a tua reserva diretamente connosco.
        </p>
        <Button asChild variant="storeLight" size="store" className="mt-10">
          <a href={generalReservationLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Reservar pelo WhatsApp
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
