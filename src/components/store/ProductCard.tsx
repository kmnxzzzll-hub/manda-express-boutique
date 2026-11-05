import { nomeCategoria, type Produto } from "@/data/catalogo";
import { Button } from "@/components/ui/button";
import { productReservationLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ produto }: { produto: Produto }) {
  const categoria = nomeCategoria(produto.categoria);

  return (
    <article className="group flex h-full flex-col">
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
      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow">{categoria}</p>
        <h3 className="mt-2 text-lg font-semibold">{produto.nome}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {produto.descricao}
        </p>
        <Button asChild variant="storeOutline" size="storeSm" className="mt-5 w-full">
          <a
            href={productReservationLink(produto.nome, categoria)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Reservar ${produto.nome} pelo WhatsApp`}
          >
            <WhatsAppIcon />
            Reservar agora
          </a>
        </Button>
      </div>
    </article>
  );
}
