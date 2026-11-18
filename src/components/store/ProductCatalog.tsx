import { produtos } from "@/data/catalogo";
import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";

export function ProductCatalog() {
  return (
    <section
      id="produtos"
      aria-labelledby="produtos-titulo"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">A seleção Manda Express</p>
          <h2
            id="produtos-titulo"
            className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"
          >
            Peças escolhidas para o teu estilo.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Três categorias essenciais, apresentadas com simplicidade. Conhece a
            seleção e fala connosco para receber informações sobre cada artigo.
          </p>
        </Reveal>

        <ol className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {produtos.map((produto, index) => (
            <li key={produto.id}>
              <Reveal delay={index * 90}>
                <ProductCard produto={produto} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
