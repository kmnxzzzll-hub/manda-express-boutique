import { categorias, produtos, type CategoriaId } from "@/data/catalogo";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export type Filtro = CategoriaId | "todos";

interface ProductCatalogProps {
  filtro: Filtro;
  onFiltroChange: (f: Filtro) => void;
}

const filtros: { id: Filtro; nome: string }[] = [
  { id: "todos", nome: "Todos" },
  ...categorias.map((c) => ({ id: c.id as Filtro, nome: c.nome })),
];

export function ProductCatalog({ filtro, onFiltroChange }: ProductCatalogProps) {
  const visiveis = filtro === "todos" ? produtos : produtos.filter((p) => p.categoria === filtro);
  const temDemonstrativas = visiveis.some((p) => p.demonstrativa);

  return (
    <section id="produtos" aria-labelledby="produtos-titulo" className="bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl border-t border-border px-5 pt-20 md:px-8 md:pt-28">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Seleção</p>
            <h2 id="produtos-titulo" className="mt-4 text-3xl font-semibold md:text-4xl">
              Produtos em destaque
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Um catálogo pequeno e escolhido com cuidado. Encontra o teu e reserva em segundos.
            </p>
          </div>

          <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
            {filtros.map((f) => {
              const ativo = filtro === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={ativo}
                  onClick={() => onFiltroChange(f.id)}
                  className={cn(
                    "h-10 rounded-full border px-5 font-display text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300",
                    ativo
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {f.nome}
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul
          key={filtro}
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 animate-in fade-in duration-500 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visiveis.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={(i % 4) * 90} className="h-full">
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
