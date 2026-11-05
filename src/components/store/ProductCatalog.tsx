import { produtos } from "@/data/catalogo";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function ProductCatalog() {
  const temDemonstrativas = produtos.some((p) => p.demonstrativa);

  return (
    <section id="produtos" aria-labelledby="produtos-titulo" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Relógios · Tênis · Roupas</p>
          <h2 id="produtos-titulo" className="mt-4 text-3xl font-semibold md:text-4xl">
            Produtos em destaque
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção pequena e escolhida com cuidado. Encontra o teu e reserva em segundos.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {produtos.map((p, i) => (
            <li key={p.id} className={i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full" : undefined}>
              <Reveal delay={i * 120} className="h-full">
                <ProductCard produto={p} />
              </Reveal>
            </li>
          ))}
        </ul>

        {temDemonstrativas && (
          <p className="mt-14 text-center text-xs text-muted-foreground">
            Fotografias demonstrativas. Confirma a disponibilidade de cada artigo pelo WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
