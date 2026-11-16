import { categorias, produtos, type CategoriaId } from "@/data/catalogo";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

type FiltroCategoria = CategoriaId | "todos";

interface ProductCatalogProps {
  categoriaAtiva: FiltroCategoria;
  onSelectCategoria: (id: FiltroCategoria) => void;
}

export function ProductCatalog({
  categoriaAtiva,
  onSelectCategoria,
}: ProductCatalogProps) {
  const produtosVisiveis =
    categoriaAtiva === "todos"
      ? produtos
      : produtos.filter((produto) => produto.categoria === categoriaAtiva);
  const temDemonstrativas = produtosVisiveis.some((produto) => produto.demonstrativa);
  const filtros: { id: FiltroCategoria; nome: string }[] = [
    { id: "todos", nome: "Todos" },
    ...categorias.map((categoria) => ({ id: categoria.id, nome: categoria.nome })),
  ];

  return (
    <section id="produtos" aria-labelledby="produtos-titulo" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">A seleção Manda Express</p>
          <h2 id="produtos-titulo" className="mt-4 text-3xl font-semibold md:text-4xl">
            Produtos em destaque
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Peças selecionadas para completar o teu estilo. Escolhe uma categoria e encontra o
            artigo que procuras.
          </p>
        </Reveal>

        <div
          className="mt-9 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar produtos por categoria"
        >
          {filtros.map((filtro) => {
            const ativo = categoriaAtiva === filtro.id;

            return (
              <button
                key={filtro.id}
                type="button"
                aria-pressed={ativo}
                aria-controls="lista-produtos"
                onClick={() => onSelectCategoria(filtro.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  ativo
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                {filtro.nome}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-muted-foreground" role="status" aria-live="polite">
          {produtosVisiveis.length}{" "}
          {produtosVisiveis.length === 1 ? "produto nesta seleção" : "produtos nesta seleção"}
        </p>

        <ul
          id="lista-produtos"
          className="mt-8 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
        >
          {produtosVisiveis.map((produto, index) => (
            <li
              key={produto.id}
              className={
                produtosVisiveis.length === 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-3 lg:w-1/3"
                  : undefined
              }
            >
              <Reveal delay={index * 100} className="h-full">
                <ProductCard produto={produto} />
              </Reveal>
            </li>
          ))}
        </ul>

        {temDemonstrativas && (
          <p className="mt-12 border-t border-border pt-5 text-center text-xs leading-relaxed text-muted-foreground">
            As fotografias assinaladas são ilustrativas. Confirma a disponibilidade e os detalhes
            de cada artigo diretamente com a Manda Express pelo WhatsApp.
          </p>
        )}
      </div>
    </section>
  );
}
