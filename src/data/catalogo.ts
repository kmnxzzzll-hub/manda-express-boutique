/**
 * Catálogo central da Manda Express.
 *
 * Para atualizar produtos: edite, adicione ou remova entradas em `produtos`.
 * Para trocar uma fotografia: coloque a nova imagem em src/assets e altere o import.
 * As fotografias atuais são demonstrativas (`demonstrativa: true`) — substitua-as
 * pelas fotografias reais dos artigos e mude o campo para `false`.
 */
import relogiosImg from "@/assets/categoria-relogios.jpg";
import tenisImg from "@/assets/categoria-tenis.jpg";
import roupasImg from "@/assets/categoria-roupas.jpg";

import relogioClassico from "@/assets/produto-relogio-classico.jpg";
import relogioMinimal from "@/assets/produto-relogio-minimal.jpg";
import tenisBranco from "@/assets/produto-tenis-branco.jpg";
import tenisRunner from "@/assets/produto-tenis-runner.jpg";
import tenisCamurca from "@/assets/produto-tenis-camurca.jpg";
import camisaLinho from "@/assets/produto-camisa-linho.jpg";
import sweaterMalha from "@/assets/produto-sweater-malha.jpg";
import calcaAlfaiataria from "@/assets/produto-calca-alfaiataria.jpg";

export type CategoriaId = "relogios" | "tenis" | "roupas";

export interface Categoria {
  id: CategoriaId;
  nome: string;
  imagem: string;
  alt: string;
}

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  categoria: CategoriaId;
  imagem: string;
  alt: string;
  /** true enquanto a fotografia não for do artigo real em stock */
  demonstrativa: boolean;
}

export const categorias: Categoria[] = [
  {
    id: "relogios",
    nome: "Relógios",
    imagem: relogiosImg,
    alt: "Relógio minimalista com bracelete bege pousado sobre pedra clara",
  },
  {
    id: "tenis",
    nome: "Tênis",
    imagem: tenisImg,
    alt: "Par de tênis brancos e cinzentos sobre um bloco de betão claro",
  },
  {
    id: "roupas",
    nome: "Roupas",
    imagem: roupasImg,
    alt: "Camisas e malha em tons neutros penduradas num cabide de madeira",
  },
];

export const produtos: Produto[] = [
  {
    id: "relogio-classico-prata",
    nome: "Relógio Clássico Prata",
    descricao: "Mostrador branco e bracelete preta. Um clássico discreto para todos os dias.",
    categoria: "relogios",
    imagem: relogioClassico,
    alt: "Relógio prateado com mostrador branco e bracelete de couro preta",
    demonstrativa: true,
  },
  {
    id: "relogio-minimal-preto",
    nome: "Relógio Minimal Preto",
    descricao: "Design totalmente preto com bracelete em malha. Sóbrio e moderno.",
    categoria: "relogios",
    imagem: relogioMinimal,
    alt: "Relógio preto com mostrador preto e bracelete em malha metálica",
    demonstrativa: true,
  },
  {
    id: "tenis-urbano-branco",
    nome: "Tênis Urbano Branco",
    descricao: "Silhueta limpa, toda em branco. Combina com qualquer visual.",
    categoria: "tenis",
    imagem: tenisBranco,
    alt: "Par de tênis brancos de cano baixo",
    demonstrativa: true,
  },
  {
    id: "tenis-runner-cinza",
    nome: "Tênis Runner Cinza",
    descricao: "Leve e confortável, em tecido respirável cinza claro.",
    categoria: "tenis",
    imagem: tenisRunner,
    alt: "Par de tênis de corrida cinzentos com sola branca",
    demonstrativa: true,
  },
  {
    id: "tenis-camurca-areia",
    nome: "Tênis Camurça Areia",
    descricao: "Tom areia com sola em borracha natural. Casual e elegante.",
    categoria: "tenis",
    imagem: tenisCamurca,
    alt: "Par de tênis em camurça cor de areia com sola castanha",
    demonstrativa: true,
  },
  {
    id: "camisa-linho-creme",
    nome: "Camisa de Linho Creme",
    descricao: "Corte descontraído em tom creme, ideal para dias quentes.",
    categoria: "roupas",
    imagem: camisaLinho,
    alt: "Camisa de linho creme pendurada num cabide de madeira",
    demonstrativa: true,
  },
  {
    id: "sweater-malha-grafite",
    nome: "Sweater de Malha Grafite",
    descricao: "Malha de gola redonda em cinza grafite. Essencial e versátil.",
    categoria: "roupas",
    imagem: sweaterMalha,
    alt: "Sweater de malha cinza grafite dobrado",
    demonstrativa: true,
  },
  {
    id: "calca-alfaiataria-bege",
    nome: "Calça de Alfaiataria Bege",
    descricao: "Pregas frontais e caimento direito. Elegância sem esforço.",
    categoria: "roupas",
    imagem: calcaAlfaiataria,
    alt: "Calça de alfaiataria bege pendurada num cabide",
    demonstrativa: true,
  },
];

export function nomeCategoria(id: CategoriaId) {
  return categorias.find((c) => c.id === id)?.nome ?? id;
}
