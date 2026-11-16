import { useId } from "react";
import { Reveal } from "./Reveal";

const perguntas = [
  {
    pergunta: "Como faço uma reserva?",
    resposta: "Escolhe a categoria que procuras e entra em contacto pelo WhatsApp. A equipa da Manda Express poderá ajudar-te com os detalhes.",
  },
  {
    pergunta: "A reserva fica confirmada ao clicar no botão?",
    resposta: "Não. O botão abre uma conversa no WhatsApp com uma mensagem preparada. A reserva só fica combinada depois da confirmação diretamente com a loja.",
  },
  {
    pergunta: "Como posso confirmar a disponibilidade?",
    resposta: "Envia uma mensagem pelo WhatsApp para confirmar quais os artigos disponíveis e receber informações atualizadas.",
  },
];

export function FAQ() {
  const headingId = useId();

  return (
    <section id="perguntas" aria-labelledby={headingId} className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Informações úteis</p>
          <h2 id={headingId} className="mt-4 text-3xl font-semibold md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            Respostas simples para saberes como entrar em contacto e fazer uma reserva.
          </p>
        </Reveal>
        <div className="divide-y divide-border border-t border-border lg:col-span-8">
          {perguntas.map((item, index) => (
            <Reveal key={item.pergunta} delay={index * 70}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-1 text-left text-base font-medium marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {item.pergunta}
                  <span aria-hidden="true" className="text-xl font-light text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-3 pr-8 text-sm leading-relaxed text-muted-foreground">
                  {item.resposta}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
