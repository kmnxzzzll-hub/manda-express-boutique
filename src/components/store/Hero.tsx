import { ArrowDown } from "lucide-react";

import heroImage from "@/assets/hero-composicao.jpg";
import { Button } from "@/components/ui/button";
import { generalReservationLink } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-beige pt-20 md:min-h-[720px]"
    >
      <img
        src={heroImage}
        alt="Composição ilustrativa de relógio, camisa e sapatos da Manda Express"
        width={512}
        height={384}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,242,236,0.98)_0%,rgba(245,242,236,0.9)_42%,rgba(245,242,236,0.28)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Manda Express · Boutique</p>
          </Reveal>
          <Reveal delay={90}>
            <h1
              id="hero-title"
              className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-7xl xl:text-8xl"
            >
              O essencial do teu estilo.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Relógios, camisas e sapatos selecionados para quem valoriza elegância,
              simplicidade e personalidade em cada escolha.
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="store" size="store" className="rounded-md">
                <a href="#produtos">
                  Explorar a seleção
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="storeOutline" size="store" className="rounded-md">
                <a href={generalReservationLink} target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-9 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Relógios <span className="px-2">·</span> Camisas <span className="px-2">·</span> Sapatos
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
