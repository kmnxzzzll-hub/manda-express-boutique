import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { generalReservationLink } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-beige pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:px-8 md:pb-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="eyebrow">Boutique · Angola</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-7xl xl:text-8xl">
              O essencial do teu estilo.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Uma seleção de relógios, tênis e roupas. Descobre as categorias e fala connosco para conhecer os artigos disponíveis.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="store" size="store">
                <a href="#produtos">
                  Explorar categorias
                  <ArrowDown />
                </a>
              </Button>
              <Button asChild variant="storeOutline" size="store">
                <a href={generalReservationLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={180} className="hidden lg:col-span-4 lg:block">
          <div className="border-l border-primary/15 py-5 pl-8">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-muted-foreground">Manda Express</p>
            <p className="mt-5 text-2xl font-medium leading-snug">Escolhas simples. Estilo com intenção.</p>
            <div className="mt-8 h-px w-16 bg-primary/40" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Relógios <span className="px-1">·</span> Tênis <span className="px-1">·</span> Roupas</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
