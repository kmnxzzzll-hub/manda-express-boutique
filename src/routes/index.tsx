import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import type { CategoriaId } from "@/data/catalogo";
import { SiteHeader } from "@/components/store/SiteHeader";
import { Hero } from "@/components/store/Hero";
import { Categories } from "@/components/store/Categories";
import { ProductCatalog, type Filtro } from "@/components/store/ProductCatalog";
import { HowToReserve } from "@/components/store/HowToReserve";
import { CallToAction } from "@/components/store/CallToAction";
import { SiteFooter } from "@/components/store/SiteFooter";
import { WhatsAppFloat } from "@/components/store/WhatsAppFloat";

const TITLE = "Manda Express — Relógios, Tênis e Roupas selecionados";
const DESCRIPTION =
  "Relógios, tênis e roupas selecionados para quem valoriza estilo, qualidade e simplicidade. Reserva o teu produto diretamente pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const selecionarCategoria = useCallback((id: CategoriaId) => {
    setFiltro(id);
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Categories onSelect={selecionarCategoria} />
        <ProductCatalog filtro={filtro} onFiltroChange={setFiltro} />
        <HowToReserve />
        <CallToAction />
      </main>
      <SiteFooter onSelectCategoria={selecionarCategoria} />
      <WhatsAppFloat />
    </>
  );
}
