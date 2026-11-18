/** Official Manda Express WhatsApp number (digits only, with country code). */
export const WHATSAPP_NUMBER = "244921810795";
export const WHATSAPP_DISPLAY = "+244 921 810 795";

const WHATSAPP_BASE = "https://wa.me/" + WHATSAPP_NUMBER;

export function buildProductReservationMessage(
  productName: string,
  categoryName: string,
  productCode: string,
) {
  return [
    "Olá, Manda Express! Tenho interesse neste artigo:",
    "",
    "Produto: " + productName,
    "Categoria: " + categoryName,
    "Referência: " + productCode,
    "",
    "Gostaria de confirmar os detalhes e saber como posso fazer a reserva. Obrigado!",
  ].join("\n");
}

export const GENERAL_RESERVATION_MESSAGE =
  "Olá, Manda Express! Gostaria de receber informações sobre a seleção e as condições de reserva.";

export function whatsappLink(message?: string) {
  return message ? WHATSAPP_BASE + "?text=" + encodeURIComponent(message) : WHATSAPP_BASE;
}

export function productReservationLink(
  productName: string,
  categoryName: string,
  productCode: string,
) {
  return whatsappLink(
    buildProductReservationMessage(productName, categoryName, productCode),
  );
}

export const generalReservationLink = whatsappLink(GENERAL_RESERVATION_MESSAGE);
