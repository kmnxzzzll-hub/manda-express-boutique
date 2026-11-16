import { categorias, type CategoriaId } from "@/data/catalogo";
import { cn } from "@/lib/utils";
import { buildProductReservationMessage, whatsappLink } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

type FiltroCategoria = CategoriaId | "todos";

interface ProductCatalogProps {
  categoriaAtiva: FiltroCategoria;
  onSelectCategoria: (id: FiltroCategoria) => void;
}

const descricoes: Record<CategoriaId, string> = {
  relogios: "Descobre as opções de relógios disponíveis e pede informações diretamente à equipa.",
  tenis: "Conhece os modelos disponíveis e confirma detalhes através do WhatsApp.",
  roupas: "Fala connosco para saber mais sobre as peças disponíveis nesta categoria.",
};

export function ProductCatalog({ categoriaAtiva, onSelectCategoria }: ProductCatalogProps) {
  const categoriasVisiveis =
    categoriaAtiva === "todos"
      ? categorias
      : categorias.filter((categoria) => categoria.id === categoriaAtiva);

  return (
    <section id="produtos" aria-labelledby="produtos-titulo" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Explora a boutique</p>
          <h2 id="produtos-titulo" className="mt-4 text-3xl font-semibold md:text-4xl">
            Encontra a tua categoria
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Consulta as categorias e contacta a Manda Express para conhecer os artigos reais e a respetiva disponibilidade.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Filtrar categorias">
          <button
            type="button"
            aria-pressed={categoriaAtiva === "todos"}
            onClick={() => onSelectCategoria("todos")}
            className={cn("rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", categoriaAtiva === "todos" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground")}
          >
            Todas
          </button>
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              type="button"
              aria-pressed={categoriaAtiva === categoria.id}
              onClick={() => onSelectCategoria(categoria.id)}
              className={cn("rounded-full border px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", categoriaAtiva === categoria.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground")}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {categoriasVisiveis.map((categoria, index) => (
            <li key={categoria.id}>
              <Reveal delay={index * 90}>
                <article className="flex h-full min-h-64 flex-col border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft md:p-8">
                  <span className="font-display text-xs tracking-[0.22em] text-muted-foreground">0{categorias.findIndex((item) => item.id === categoria.id) + 1}</span>
                  <h3 className="mt-9 text-2xl font-semibold">{categoria.nome}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{descricoes[categoria.id]}</p>
                  <a
                    href={whatsappLink(buildProductReservationMessage("Informações sobre artigos disponíveis", categoria.nome))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Consultar pelo WhatsApp <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
