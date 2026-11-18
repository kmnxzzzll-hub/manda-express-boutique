import { describe, expect, it } from "vitest";

import { produtos, nomeCategoria } from "@/data/catalogo";
import {
  buildProductReservationMessage,
  productReservationLink,
} from "@/lib/whatsapp";

describe("Reserva pelo WhatsApp", () => {
  it("usa o número oficial +244 921 810 795", () => {
    expect(
      productReservationLink("Relógio clássico", "Relógios", "ME-001").startsWith(
        "https://wa.me/244921810795?text=",
      ),
    ).toBe(true);
  });

  it("inclui o nome, a categoria e a referência única na mensagem", () => {
    const msg = buildProductReservationMessage(
      "Relógio clássico",
      "Relógios",
      "ME-001",
    );
    expect(msg).toContain("Produto: Relógio clássico");
    expect(msg).toContain("Categoria: Relógios");
    expect(msg).toContain("Referência: ME-001");
  });

  it("codifica a mensagem no link para que o WhatsApp a receba intacta", () => {
    const link = productReservationLink(
      "Sapatos brancos",
      "Sapatos",
      "ME-003",
    );
    const text = new URL(link).searchParams.get("text");
    expect(text).toContain("Produto: Sapatos brancos");
    expect(text).toContain("Categoria: Sapatos");
    expect(text).toContain("Referência: ME-003");
  });
});

describe("Catálogo editorial", () => {
  it("apresenta apenas relógios, camisas e sapatos", () => {
    expect(produtos).toHaveLength(3);
    expect(produtos.map((produto) => produto.categoria)).toEqual([
      "relogios",
      "camisas",
      "sapatos",
    ]);
  });

  it("mantém uma referência única para cada categoria", () => {
    const codes = produtos.map((produto) => produto.codigo);
    expect(new Set(codes).size).toBe(codes.length);
    expect(codes).toEqual(["ME-001", "ME-002", "ME-003"]);
  });

  it("mantém as fotografias identificadas como ilustrativas", () => {
    expect(produtos.every((produto) => produto.demonstrativa)).toBe(true);
  });

  it("mostra o nome legível das categorias", () => {
    expect(nomeCategoria("camisas")).toBe("Camisas");
    expect(nomeCategoria("sapatos")).toBe("Sapatos");
  });
});
