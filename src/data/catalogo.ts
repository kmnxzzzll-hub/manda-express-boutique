/**
 * Conteúdo editorial da seleção Manda Express.
 * As fotografias atuais são demonstrativas e estão identificadas no site.
 */
import relogioImg from "@/assets/produto-relogio-classico.jpg";
import sapatosImg from "@/assets/produto-tenis-branco.jpg";
import camisasImg from "@/assets/produto-camisa-linho.jpg";

export type CategoriaId = "relogios" | "camisas" | "sapatos";

export interface Categoria {
  id: CategoriaId;
  nome: string;
}

export interface Produto {
  id: string;
  codigo: string;
  categoria: CategoriaId;
  titulo: string;
  headline: string;
  descricao: string;
  /** Nome descritivo usado na mensagem pré-preenchida do WhatsApp. */
  referencia: string;
  imagem: string;
  alt: string;
  /** Mantém visível o aviso enquanto a fotografia for apenas demonstrativa. */
  demonstrativa: boolean;
}

export const categorias: Categoria[] = [
  { id: "relogios", nome: "Relógios" },
  { id: "camisas", nome: "Camisas" },
  { id: "sapatos", nome: "Sapatos" },
];

export const produtos: Produto[] = [
  {
    id: "relogios",
    codigo: "ME-001",
    categoria: "relogios",
    titulo: "Relógios",
    headline: "O detalhe que acompanha o teu ritmo.",
    descricao:
      "Um relógio acrescenta presença sem precisar de exageros. Descobre uma seleção de modelos versáteis, pensados para acompanhar diferentes momentos e completar o teu visual com discrição e personalidade.",
    referencia: "Relógio de mostrador claro e bracelete escura",
    imagem: relogioImg,
    alt: "Imagem ilustrativa de um relógio clássico com mostrador claro e bracelete escura",
    demonstrativa: true,
  },
  {
    id: "camisas",
    codigo: "ME-002",
    categoria: "camisas",
    titulo: "Camisas",
    headline: "Simplicidade que se faz notar.",
    descricao:
      "Camisas de linhas simples e tons fáceis de combinar, para compor visuais cuidados no quotidiano ou em ocasiões especiais. Escolhas discretas que deixam o teu estilo falar por si.",
    referencia: "Camisa de tom creme",
    imagem: camisasImg,
    alt: "Imagem ilustrativa de uma camisa em tom creme",
    demonstrativa: true,
  },
  {
    id: "sapatos",
    codigo: "ME-003",
    categoria: "sapatos",
    titulo: "Sapatos",
    headline: "O passo final de um visual completo.",
    descricao:
      "Silhuetas limpas e versáteis que completam diferentes combinações. Conhece a seleção da Manda Express e fala connosco para receber mais informações sobre os modelos.",
    referencia: "Sapatos brancos de perfil baixo",
    imagem: sapatosImg,
    alt: "Imagem ilustrativa de um par de sapatos brancos de perfil baixo",
    demonstrativa: true,
  },
];

export function nomeCategoria(id: CategoriaId) {
  return categorias.find((categoria) => categoria.id === id)?.nome ?? id;
}
