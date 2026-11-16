import { categorias, type CategoriaId } from "@/data/catalogo";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import { navLinks } from "./navigation";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SiteFooter({ onSelectCategoria }: { onSelectCategoria: (id: CategoriaId) => void }) {
  return (
    <footer id="contactos" className="bg-beige">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <a href="#inicio" className="logo-mark text-base">
            Manda Express
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Relógios, tênis e roupas selecionados para quem valoriza estilo, qualidade e
            simplicidade. Reservas diretas pelo WhatsApp.
          </p>
        </div>

        <nav aria-label="Links do rodapé" className="md:col-span-2">
          <h2 className="eyebrow">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="eyebrow">Categorias</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <button
                  type="button"
                  onClick={() => onSelectCategoria(categoria.id)}
                  aria-label={`Ver produtos da categoria ${categoria.nome}`}
                  className="rounded-sm text-left transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {categoria.nome}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow">Contacto</h2>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <div className="border-t border-primary/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} Manda Express. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
