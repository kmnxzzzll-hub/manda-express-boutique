import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import type { CategoriaId } from "@/data/catalogo";
import { SiteHeader } from "@/components/store/SiteHeader";
import { Hero } from "@/components/store/Hero";
import { ProductCatalog } from "@/components/store/ProductCatalog";
import { HowToReserve } from "@/components/store/HowToReserve";
import { FAQ } from "@/components/store/FAQ";
import { CallToAction } from "@/components/store/CallToAction";
import { SiteFooter } from "@/components/store/SiteFooter";
import { WhatsAppFloat } from "@/components/store/WhatsAppFloat";

type FiltroCategoria = CategoriaId | "todos";

const TITLE = "Manda Express | Boutique";
const DESCRIPTION =
  "Manda Express: uma seleção de relógios, tênis e roupas. Consulta as categorias e fala connosco pelo WhatsApp para conhecer os artigos disponíveis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "Manda Express" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_AO" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<FiltroCategoria>("todos");

  const irParaCategoria = useCallback((id: CategoriaId) => {
    setCategoriaAtiva(id);
    document.getElementById("produtos")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductCatalog categoriaAtiva={categoriaAtiva} onSelectCategoria={setCategoriaAtiva} />
        <HowToReserve />
        <FAQ />
        <CallToAction />
      </main>
      <SiteFooter onSelectCategoria={irParaCategoria} />
      <WhatsAppFloat />
    </>
  );
}
