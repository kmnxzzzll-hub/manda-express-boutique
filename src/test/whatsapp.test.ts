import { describe, expect, it } from "vitest";

import { produtos, nomeCategoria } from "@/data/catalogo";
import { buildProductReservationMessage, productReservationLink } from "@/lib/whatsapp";

describe("Reserva pelo WhatsApp", () => {
  it("usa o número oficial +244 921 810 795", () => {
    expect(productReservationLink("X", "Y").startsWith("https://wa.me/244921810795?text=")).toBe(
      true,
    );
  });

  it("preenche a mensagem com o produto e a categoria escolhidos", () => {
    const msg = buildProductReservationMessage("Tênis Urbano Branco", "Tênis");
    expect(msg).toBe(
      "Olá, Manda Express! Gostaria de reservar o seguinte produto:\n\nProduto: Tênis Urbano Branco\n\nCategoria: Tênis\n\nGostaria de receber mais informações sobre a disponibilidade e a reserva. Obrigado!",
    );
  });

  it("codifica a mensagem no link para que o WhatsApp a receba intacta", () => {
    const link = productReservationLink("Relógio Clássico Prata", "Relógios");
    const text = new URL(link).searchParams.get("text");
    expect(text).toContain("Produto: Relógio Clássico Prata");
    expect(text).toContain("Categoria: Relógios");
  });
});

describe("Catálogo", () => {
  it("respeita o máximo inicial: 2 relógios, 3 tênis, 3 roupas", () => {
    const count = (id: string) => produtos.filter((p) => p.categoria === id).length;
    expect(count("relogios")).toBeLessThanOrEqual(2);
    expect(count("tenis")).toBeLessThanOrEqual(3);
    expect(count("roupas")).toBeLessThanOrEqual(3);
  });

  it("mostra o nome legível da categoria", () => {
    expect(nomeCategoria("tenis")).toBe("Tênis");
  });
});
