import { MessageCircleMore, MousePointerClick, Search } from "lucide-react";

import { Reveal } from "./Reveal";

const passos = [
  {
    icon: Search,
    titulo: "Escolhe o produto",
    texto: "Navega pelo catálogo e encontra o artigo que desejas.",
  },
  {
    icon: MousePointerClick,
    titulo: "Clica em reservar",
    texto: "O botão abre automaticamente uma conversa no WhatsApp.",
  },
  {
    icon: MessageCircleMore,
    titulo: "Confirma a reserva",
    texto: "Envia a mensagem e combina os detalhes diretamente com a loja.",
  },
];

export function HowToReserve() {
  return (
    <section id="como-reservar" aria-labelledby="reservar-titulo" className="bg-beige py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Como reservar</p>
          <h2 id="reservar-titulo" className="mt-4 text-3xl font-semibold md:text-4xl">
            Três passos simples
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {passos.map((p, i) => (
            <li key={p.titulo}>
              <Reveal delay={i * 140} className="border-t border-primary/15 pt-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground">
                    PASSO {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background">
                    <p.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold">{p.titulo}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{p.texto}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
