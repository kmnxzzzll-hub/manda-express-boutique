import { ArrowDown } from "lucide-react";

import heroImg from "@/assets/hero-composicao.jpg";
import { Button } from "@/components/ui/button";
import { generalReservationLink } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-beige pt-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-12 lg:gap-14 lg:pb-24">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Relógios · Tênis · Roupas</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
              O teu estilo começa aqui.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Relógios, tênis e roupas selecionados para quem valoriza estilo, qualidade e
              simplicidade.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="store" size="store">
                <a href="#produtos">
                  Explorar produtos
                  <ArrowDown />
                </a>
              </Button>
              <Button asChild variant="storeOutline" size="store">
                <a href={generalReservationLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Reservar pelo WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="overflow-hidden rounded-lg bg-stone">
            <img
              src={heroImg}
              alt="Composição de moda com relógio, tênis brancos, malha creme e calça escura"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
