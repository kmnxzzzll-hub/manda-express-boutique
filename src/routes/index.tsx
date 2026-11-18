import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-composicao.jpg";
import { SiteHeader } from "@/components/store/SiteHeader";
import { Hero } from "@/components/store/Hero";
import { ProductCatalog } from "@/components/store/ProductCatalog";
import { AboutSection } from "@/components/store/AboutSection";
import { HowToReserve } from "@/components/store/HowToReserve";
import { FAQ } from "@/components/store/FAQ";
import { CallToAction } from "@/components/store/CallToAction";
import { SiteFooter } from "@/components/store/SiteFooter";
import { WhatsAppFloat } from "@/components/store/WhatsAppFloat";

const TITLE = "Manda Express | Relógios, Camisas e Sapatos";
const DESCRIPTION =
  "Descobre a seleção Manda Express de relógios, camisas e sapatos. Conhece as categorias e fala connosco pelo WhatsApp para informações e reservas.";

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
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductCatalog />
        <AboutSection />
        <HowToReserve />
        <FAQ />
        <CallToAction />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
