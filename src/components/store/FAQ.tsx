import { useId } from "react";
import { Reveal } from "./Reveal";

const perguntas = [
  {
    pergunta: "Como faço uma reserva?",
    resposta:
      "Escolhe a categoria que procuras e clica no botão de WhatsApp. A mensagem será preparada com o nome do artigo e a respetiva referência para facilitar o atendimento.",
  },
  {
    pergunta: "A reserva fica confirmada ao clicar no botão?",
    resposta:
      "Não. O botão abre uma conversa no WhatsApp. A reserva só fica combinada depois de a equipa da Manda Express confirmar os detalhes diretamente contigo.",
  },
  {
    id: "entregas",
    pergunta: "Como funcionam as entregas?",
    resposta:
      "As opções, os prazos e os custos de entrega são confirmados diretamente com a equipa pelo WhatsApp, antes de a reserva ser concluída. Assim, recebes informações adequadas à tua localização e ao artigo pretendido.",
  },
  {
    id: "privacidade",
    pergunta: "Como é tratada a minha privacidade?",
    resposta:
      "Este website não pede criação de conta nem dados de pagamento. Ao iniciar uma conversa, serás encaminhado para o WhatsApp, onde a comunicação passa a estar sujeita às condições e à política de privacidade desse serviço. Partilha apenas os dados necessários para tratar do teu pedido.",
  },
  {
    pergunta: "Como posso confirmar os detalhes de um artigo?",
    resposta:
      "Envia uma mensagem pelo WhatsApp e indica a referência apresentada na mensagem automática. A equipa poderá esclarecer as tuas dúvidas e confirmar as informações disponíveis.",
  },
];

export function FAQ() {
  const headingId = useId();

  return (
    <section
      id="perguntas"
      aria-labelledby={headingId}
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Informações úteis</p>
          <h2 id={headingId} className="mt-4 text-3xl font-semibold md:text-4xl">
            Reservas, entregas e privacidade.
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            Consulta como funciona o contacto com a loja e esclarece as principais
            dúvidas antes de fazeres uma reserva.
          </p>
        </Reveal>
        <div className="divide-y divide-border border-t border-border lg:col-span-8">
          {perguntas.map((item, index) => (
            <Reveal key={item.pergunta} delay={index * 60}>
              <details
                id={item.id}
                className="group py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-1 text-left text-base font-medium marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {item.pergunta}
                  <span
                    aria-hidden="true"
                    className="text-xl font-light text-muted-foreground transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
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
