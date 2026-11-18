import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import brandMark from "@/assets/manda-express-wordmark.svg";
import { Button } from "@/components/ui/button";
import { generalReservationLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { navLinks } from "./navigation";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const whatsappMark = (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
      <WhatsAppIcon className="h-4 w-4" />
    </span>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        open
          ? "border-b border-border bg-background"
          : scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-md"
            : "border-b border-transparent bg-beige/95",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="Manda Express — início" onClick={() => setOpen(false)}>
          <img
            src={brandMark}
            alt="Manda Express"
            width="210"
            height="38"
            className="h-auto w-40 md:w-48"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-sm font-display text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="store" size="storeSm" className="hidden rounded-md sm:inline-flex">
            <a href={generalReservationLink} target="_blank" rel="noopener noreferrer">
              {whatsappMark}
              Falar connosco
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav aria-label="Navegação móvel" className="px-5 pb-6">
          <ul className="flex flex-col divide-y divide-border border-t border-border">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-sm font-medium uppercase tracking-[0.16em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="store" size="store" className="mt-4 w-full rounded-md">
            <a
              href={generalReservationLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              {whatsappMark}
              Falar connosco pelo WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
