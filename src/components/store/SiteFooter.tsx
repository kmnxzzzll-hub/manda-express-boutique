import brandMark from "@/assets/manda-express-wordmark.svg";
import { produtos } from "@/data/catalogo";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import { navLinks } from "./navigation";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SiteFooter() {
  return (
    <footer id="contactos" className="bg-beige">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <a href="#inicio" aria-label="Manda Express — início">
            <img
              src={brandMark}
              alt="Manda Express"
              width="210"
              height="38"
              className="h-auto w-44"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Uma seleção de relógios, camisas e sapatos. Para informações sobre os
            artigos e reservas, fala diretamente connosco.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé" className="md:col-span-2">
          <h2 className="eyebrow">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="eyebrow">A seleção</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {produtos.map((produto) => (
              <li key={produto.id}>
                <a
                  href={"#produto-" + produto.id}
                  className="rounded-sm transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {produto.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="eyebrow">Informações e contacto</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#como-reservar" className="hover:text-muted-foreground">Como reservar</a></li>
            <li><a href="#entregas" className="hover:text-muted-foreground">Entregas</a></li>
            <li><a href="#privacidade" className="hover:text-muted-foreground">Privacidade</a></li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-muted-foreground"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
          </ul>
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
