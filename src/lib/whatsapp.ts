/** Official Manda Express WhatsApp number (digits only, with country code). */
export const WHATSAPP_NUMBER = "244921810795";
export const WHATSAPP_DISPLAY = "+244 921 810 795";

const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildProductReservationMessage(productName: string, categoryName: string) {
  return [
    "Olá, Manda Express! Gostaria de reservar o seguinte produto:",
    "",
    `Produto: ${productName}`,
    "",
    `Categoria: ${categoryName}`,
    "",
    "Gostaria de receber mais informações sobre a disponibilidade e a reserva. Obrigado!",
  ].join("\n");
}

export const GENERAL_RESERVATION_MESSAGE =
  "Olá, Manda Express! Gostaria de fazer uma reserva e receber mais informações sobre os produtos disponíveis.";

export function whatsappLink(message?: string) {
  return message ? `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}` : WHATSAPP_BASE;
}

export function productReservationLink(productName: string, categoryName: string) {
  return whatsappLink(buildProductReservationMessage(productName, categoryName));
}

export const generalReservationLink = whatsappLink(GENERAL_RESERVATION_MESSAGE);
