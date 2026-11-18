import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="bg-beige py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Sobre a Manda Express</p>
          <h2
            id="sobre-titulo"
            className="mt-4 max-w-lg text-3xl font-semibold leading-tight md:text-5xl"
          >
            Escolhas cuidadas. Estilo sem complicações.
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <p className="text-base leading-[1.9] text-muted-foreground md:text-lg">
            A Manda Express reúne uma seleção de relógios, camisas e sapatos para
            quem procura completar o seu estilo com peças simples e versáteis.
          </p>
          <p className="mt-5 text-base leading-[1.9] text-muted-foreground md:text-lg">
            A experiência é direta: explora a seleção, escolhe a categoria que
            mais combina contigo e fala connosco pelo WhatsApp para esclarecer
            dúvidas e tratar da tua reserva.
          </p>
          <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
            Relógios <span className="px-2">·</span> Camisas <span className="px-2">·</span> Sapatos
          </p>
        </Reveal>
      </div>
    </section>
  );
}
