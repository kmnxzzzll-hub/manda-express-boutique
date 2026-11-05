import { nomeCategoria, type Produto } from "@/data/catalogo";
import { Button } from "@/components/ui/button";
import { productReservationLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ produto }: { produto: Produto }) {
  const categoria = nomeCategoria(produto.categoria);

  return (
    <article id={`produto-${produto.categoria}`} className="group flex h-full scroll-mt-24 flex-col">
      <div className="overflow-hidden rounded-lg bg-beige transition-shadow duration-500 group-hover:shadow-soft">
        <img
          src={produto.imagem}
          alt={produto.alt}
          width={800}
          height={1008}
          loading="lazy"
          decoding="async"
          className="zoom-on-hover aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <h3 className="text-xl font-semibold">{produto.titulo}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {produto.descricao}
        </p>
        <Button asChild variant="store" size="store" className="mt-6 w-full">
          <a
            href={productReservationLink(produto.referencia, categoria)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Reservar ${produto.titulo.toLowerCase()} pelo WhatsApp`}
          >
            <WhatsAppIcon />
            Reservar agora
          </a>
        </Button>
      </div>
    </article>
  );
}
