/**
 * Catálogo central da Manda Express.
 *
 * Para atualizar produtos: edite, adicione ou remova entradas em `produtos`.
 * Para trocar uma fotografia: coloque a nova imagem em src/assets e altere o import.
 * As fotografias atuais são demonstrativas (`demonstrativa: true`) — substitua-as
 * pelas fotografias reais dos artigos e mude o campo para `false`.
 */
import relogioImg from "@/assets/produto-relogio-classico.jpg";
import tenisImg from "@/assets/produto-tenis-branco.jpg";
import roupaImg from "@/assets/produto-camisa-linho.jpg";

export type CategoriaId = "relogios" | "tenis" | "roupas";

export interface Categoria {
  id: CategoriaId;
  nome: string;
}

export interface Produto {
  id: string;
  categoria: CategoriaId;
  /** Título visível no cartão */
  titulo: string;
  descricao: string;
  /** Identificação do artigo enviada na mensagem do WhatsApp (não aparece no site) */
  referencia: string;
  imagem: string;
  alt: string;
  /** true enquanto a fotografia não for do artigo real em stock */
  demonstrativa: boolean;
}

export const categorias: Categoria[] = [
  { id: "relogios", nome: "Relógios" },
  { id: "tenis", nome: "Tênis" },
  { id: "roupas", nome: "Roupas" },
];

export const produtos: Produto[] = [
  {
    id: "relogio",
    categoria: "relogios",
    titulo: "Relógio",
    descricao: "Mostrador branco e bracelete preta. Um clássico discreto para todos os dias.",
    referencia: "Relógio prateado de mostrador branco e bracelete preta",
    imagem: relogioImg,
    alt: "Relógio prateado com mostrador branco e bracelete de couro preta",
    demonstrativa: true,
  },
  {
    id: "tenis",
    categoria: "tenis",
    titulo: "Tênis",
    descricao: "Silhueta limpa, toda em branco. Combina com qualquer visual.",
    referencia: "Tênis branco de cano baixo",
    imagem: tenisImg,
    alt: "Par de tênis brancos de cano baixo",
    demonstrativa: true,
  },
  {
    id: "roupa",
    categoria: "roupas",
    titulo: "Roupa",
    descricao: "Camisa de corte descontraído em tom creme, ideal para dias quentes.",
    referencia: "Camisa creme de manga comprida",
    imagem: roupaImg,
    alt: "Camisa creme pendurada num cabide de madeira",
    demonstrativa: true,
  },
];

export function nomeCategoria(id: CategoriaId) {
  return categorias.find((c) => c.id === id)?.nome ?? id;
}
