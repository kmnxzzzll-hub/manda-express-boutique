import { ArrowRight } from "lucide-react";

import { categorias, type CategoriaId } from "@/data/catalogo";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Categories({ onSelect }: { onSelect: (id: CategoriaId) => void }) {
  return (
    <section aria-labelledby="categorias-titulo" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Categorias</p>
            <h2 id="categorias-titulo" className="mt-4 text-3xl font-semibold md:text-4xl">
              Escolhe por onde começar
            </h2>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categorias.map((c, i) => (
            <li key={c.id} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : undefined}>
              <Reveal delay={i * 120}>
                <article className="group relative overflow-hidden rounded-lg bg-beige">
                  <img
                    src={c.imagem}
                    alt={c.alt}
                    width={912}
                    height={1104}
                    loading="lazy"
                    decoding="async"
                    className="zoom-on-hover aspect-[4/5] w-full object-cover sm:aspect-[4/5] lg:aspect-[4/5]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent p-6 pt-24">
                    <h3 className="text-2xl font-semibold text-ink-foreground">{c.nome}</h3>
                    <Button
                      variant="storeLight"
                      size="storeSm"
                      onClick={() => onSelect(c.id)}
                      aria-label={`Ver produtos de ${c.nome}`}
                    >
                      Ver produtos
                      <ArrowRight />
                    </Button>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
