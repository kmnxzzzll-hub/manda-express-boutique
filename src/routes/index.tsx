import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import type { CategoriaId } from "@/data/catalogo";
import heroImage from "@/assets/hero-composicao.jpg";
import { SiteHeader } from "@/components/store/SiteHeader";
import { Hero } from "@/components/store/Hero";
import { ProductCatalog } from "@/components/store/ProductCatalog";
import { HowToReserve } from "@/components/store/HowToReserve";
import { CallToAction } from "@/components/store/CallToAction";
import { SiteFooter } from "@/components/store/SiteFooter";
import { WhatsAppFloat } from "@/components/store/WhatsAppFloat";

type FiltroCategoria = CategoriaId | "todos";

const TITLE = "Manda Express | Boutique de Relógios, Tênis e Roupas";
const DESCRIPTION =
  "Descobre uma seleção de relógios, tênis e roupas na Manda Express. Explora o catálogo e faz a tua reserva diretamente pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      {
        property: "og:image:alt",
        content: "Composição de moda da Manda Express com relógio, tênis e roupa",
      },
      { property: "og:locale", content: "pt_AO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: heroImage },
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
        <ProductCatalog
          categoriaAtiva={categoriaAtiva}
          onSelectCategoria={(id) => setCategoriaAtiva(id)}
        />
        <HowToReserve />
        <CallToAction />
      </main>
      <SiteFooter onSelectCategoria={irParaCategoria} />
      <WhatsAppFloat />
    </>
  );
}
