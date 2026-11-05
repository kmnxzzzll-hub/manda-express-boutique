import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { generalReservationLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { navLinks } from "./navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="logo-mark text-sm md:text-base" onClick={() => setOpen(false)}>
          Manda Express
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="store" size="storeSm" className="hidden sm:inline-flex">
            <a href={generalReservationLink} target="_blank" rel="noopener noreferrer">
              Reservar agora
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        className={cn(
          "overflow-hidden transition-[max-height] duration-500 md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav aria-label="Navegação móvel" className="px-5 pb-6">
          <ul className="flex flex-col divide-y divide-border border-t border-border">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-sm font-medium uppercase tracking-[0.18em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="store" size="store" className="mt-4 w-full">
            <a href={generalReservationLink} target="_blank" rel="noopener noreferrer">
              Reservar agora
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
