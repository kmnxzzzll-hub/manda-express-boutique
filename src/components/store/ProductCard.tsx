import { nomeCategoria, type Produto } from "@/data/catalogo";
import { Button } from "@/components/ui/button";
import { productReservationLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ produto }: { produto: Produto }) {
  const categoria = nomeCategoria(produto.categoria);

  return (
    <article
      id={"produto-" + produto.id}
      aria-labelledby={"titulo-" + produto.id}
      className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20"
    >
      <div className="group relative overflow-hidden rounded-md bg-beige">
        <img
          src={produto.imagem}
          alt={produto.alt}
          width={800}
          height={1008}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
        {produto.demonstrativa && (
          <span className="absolute left-4 top-4 rounded-sm bg-background/95 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-foreground shadow-sm">
            Imagem ilustrativa
          </span>
        )}
      </div>

      <div className="flex min-h-[320px] flex-col justify-center py-2 md:py-8">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs font-semibold tracking-[0.16em] text-muted-foreground">
            {produto.codigo}
          </span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#25D366]" />
          <p className="eyebrow">{categoria}</p>
        </div>

        <h3
          id={"titulo-" + produto.id}
          className="mt-5 max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.04em] md:text-4xl lg:text-5xl"
        >
          {produto.headline}
        </h3>
        <p className="mt-6 max-w-xl text-base leading-[1.85] text-muted-foreground">
          {produto.descricao}
        </p>
        <p className="mt-5 text-sm font-medium text-foreground">
          Descobre a seleção de {categoria.toLowerCase()} da Manda Express.
        </p>

        <Button asChild variant="store" size="store" className="mt-8 w-fit rounded-md px-6">
          <a
            href={productReservationLink(produto.referencia, categoria, produto.codigo)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"Consultar " + categoria.toLowerCase() + " pelo WhatsApp"}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            Consultar pelo WhatsApp
          </a>
        </Button>
      </div>
    </article>
  );
}
