import { useState } from "react";
import { track } from "@vercel/analytics";
import { Loader2, MessageCircle, Send } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import SpotlightCard from "@/components/ui/SpotlightCard ";
import { useLanguage } from "@/contexts/LanguageContext";
import { openAgentChat, type AgentScenario } from "@/components/EmbeddedMessaging";

type ChatStatus = "idle" | "loading" | "error";

function useAgentChat(scenario?: AgentScenario) {
  const { language } = useLanguage();
  const [status, setStatus] = useState<ChatStatus>("idle");
  // Which control started the current request: a suggestion's text, or ""
  // for the plain "Try this agent" button. Drives the per-control spinner.
  const [pending, setPending] = useState<string | null>(null);

  const open = async (message?: string, source = "button") => {
    setStatus("loading");
    setPending(message ?? "");
    // Which agent, from where: never anything the visitor types.
    const agent = scenario ?? "geral";
    track("agent_chat_open", { agent, source });
    try {
      await openAgentChat(language, scenario, message);
      setStatus("idle");
    } catch (err) {
      console.error("Agent chat unavailable:", err);
      track("agent_chat_error", { agent, source });
      setStatus("error");
    } finally {
      setPending(null);
    }
  };

  return { status, pending, open };
}

type Suggestions = { pt: string[]; en: string[] };

/**
 * Card footer: one-click suggestions that open the chat with this card's agent
 * and send the message for the visitor, plus the stack and the plain
 * "Try this agent" button for anyone who'd rather type.
 */
function AgentCardFooter({
  scenario,
  suggestions,
  stack,
}: {
  scenario: AgentScenario;
  suggestions: Suggestions;
  stack: string;
}) {
  const { language } = useLanguage();
  const pt = language === "pt";
  const { status, pending, open } = useAgentChat(scenario);
  const busy = status === "loading";

  return (
    <div className="mt-auto flex flex-col gap-4">
      <div>
        <h4 className="text-xs font-bold text-brand uppercase tracking-wide mb-2">
          {pt ? "Comece com uma pergunta" : "Start with a question"}
        </h4>
        <div className="flex flex-wrap gap-2">
          {suggestions[language].map((text, i) => (
            <button
              key={text}
              type="button"
              onClick={() => open(text, `suggestion_${i + 1}`)}
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-left text-xs sm:text-sm text-zinc-100 transition hover:border-brand hover:text-white disabled:opacity-60"
            >
              {pending === text ? (
                <Loader2
                  className="size-3.5 shrink-0 animate-spin text-brand"
                  aria-hidden="true"
                />
              ) : (
                <Send className="size-3.5 shrink-0 text-brand" aria-hidden="true" />
              )}
              {text}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
          {stack}
        </span>
        <button
          type="button"
          onClick={() => open()}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-1.5 text-xs sm:text-sm font-bold text-brand transition hover:bg-brand hover:text-zinc-900 disabled:opacity-70"
        >
          {pending === "" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <MessageCircle className="size-4" aria-hidden="true" />
          )}
          {pending === ""
            ? pt
              ? "Conectando..."
              : "Connecting..."
            : pt
              ? "Testar este agente"
              : "Try this agent"}
        </button>
      </div>
      {status === "error" && (
        <span className="text-xs text-zinc-500">
          {pt
            ? "Chat indisponível agora. Tente de novo em alguns minutos."
            : "Chat unavailable right now. Try again in a few minutes."}
        </span>
      )}
    </div>
  );
}

const howToSteps = {
  pt: [
    "Escolha um agente abaixo",
    "Toque numa sugestão e o chat já começa",
    "Converse à vontade, com dados fictícios",
  ],
  en: [
    "Pick an agent below",
    "Tap a suggestion and the chat starts",
    "Chat freely, using made-up data",
  ],
};

function HowToTry() {
  const { language } = useLanguage();

  return (
    <ol className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3">
      {howToSteps[language].map((step, i) => (
        <li
          key={step}
          className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-zinc-900/60 px-4 py-3"
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-zinc-900">
            {i + 1}
          </span>
          <span className="text-sm text-zinc-200">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function AgentChatButton() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const { status, open: handleClick } = useAgentChat();

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <button
        type="button"
        onClick={() => handleClick()}
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm sm:text-base font-bold text-zinc-900 transition hover:brightness-110 disabled:opacity-70"
      >
        {status === "loading" ? (
          <Loader2 className="size-5 animate-spin" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-5" aria-hidden="true" />
        )}
        {status === "loading"
          ? pt
            ? "Conectando ao agente..."
            : "Connecting to the agent..."
          : pt
            ? "Converse com meu agente Agentforce"
            : "Chat with my Agentforce agent"}
      </button>
      <p className="text-xs text-zinc-500 max-w-md text-center">
        {status === "error"
          ? pt
            ? "O chat está indisponível agora. Tente de novo em alguns minutos."
            : "The chat is unavailable right now. Please try again in a few minutes."
          : pt
            ? "Agente real rodando no meu org Salesforce. Demo com dados fictícios: não envie dados pessoais."
            : "A real agent running in my Salesforce org. Demo with fictitious data: please don't share personal information."}
      </p>
    </div>
  );
}

const agents = [
  {
    emoji: "🏘️",
    title: {
      pt: "Agente de Pré-vendas de Consórcio",
      en: "Consortium Pre-Sales Agent",
    },
    description: {
      pt: "Agente conversacional via WhatsApp para qualificação de leads de consórcio (Imóvel e Veículo), com coleta fluida de dados, validação de regras comerciais e encaminhamento automático para especialista humano.",
      en: "WhatsApp conversational agent for consortium lead qualification (Real Estate and Vehicle), with fluid data collection, business rule validation, and automatic handoff to a human specialist.",
    },
    architecture: {
      pt: [
        "Arquitetura multiagente: Roteador + Qualificação + Dúvidas + Transbordo",
        "Coleta fluida de dados em qualquer ordem, com preenchimento parcial por mensagem",
        "Classificação dinâmica de temperatura do lead (Quente/Morno/Frio) a cada turno",
        "Validação de regra de negócio (idade mínima) com bloqueio automático do funil",
        "Criação automática de lead via Flow após confirmação do cliente",
        "Escalonamento (transbordo) para especialista humano via WhatsApp",
      ],
      en: [
        "Multi-agent architecture: Router + Qualification + FAQ + Handoff",
        "Fluid data collection in any order, with partial fill-in per message",
        "Dynamic lead temperature classification (Hot/Warm/Cold) on every turn",
        "Business rule validation (minimum age) with automatic funnel blocking",
        "Automatic lead creation via Flow after customer confirmation",
        "Escalation (handoff) to a human specialist via WhatsApp",
      ],
    },
    stack: "Agentforce | Flows | WhatsApp",
    spotlightColor: "rgba(34, 197, 94, 0.2)",
    scenario: "consorcio" as AgentScenario,
    suggestions: {
      pt: ["Quero simular um consórcio de imóvel", "Como funciona o consórcio?"],
      en: ["I want to simulate a real estate consortium", "How does a consortium work?"],
    },
  },
  {
    emoji: "💳",
    title: {
      pt: "Agente de Recuperação de Crédito",
      en: "Credit Recovery Agent",
    },
    description: {
      pt: "Agente financeiro para atendimento em larga escala via WhatsApp: renegociação de dívidas, simulação de parcelamento e escolha da forma de pagamento, com regras de negócio e explicação de conceitos financeiros.",
      en: "Financial agent for high-volume customer service over WhatsApp: debt renegotiation, installment simulation and payment-method selection, with business rules and plain-language explanations of financial terms.",
    },
    architecture: {
      pt: [
        "Atendimento em larga escala via WhatsApp",
        "Renegociação de dívidas com regras de negócio financeiras",
        "Simulação de parcelamento dentro da conversa",
        "Escolha de pagamento via Pix ou Boleto",
        "Explicação de conceitos financeiros para aumentar a taxa de acordos",
      ],
      en: [
        "High-volume customer service over WhatsApp",
        "Debt renegotiation driven by financial business rules",
        "In-conversation installment simulation",
        "Payment choice: Pix or bank slip",
        "Plain-language financial explanations to raise agreement rates",
      ],
    },
    stack: "Agentforce | Flows | WhatsApp",
    spotlightColor: "rgba(168, 85, 247, 0.2)",
    scenario: "credito" as AgentScenario,
    suggestions: {
      pt: ["Quero negociar a dívida DEMO-101", "O que acontece se eu atrasar?"],
      en: ["I want to renegotiate debt DEMO-101", "What happens if I pay late?"],
    },
  },
  {
    emoji: "🎪",
    title: {
      pt: "Agent Guigo — Agentforce World Tour SP",
      en: "Agent Guigo — Agentforce World Tour SP",
    },
    description: {
      pt: "Agente desenvolvido para o Agentforce World Tour São Paulo: triagem personalizada, quizzes interativos, diagnóstico de perfil e portfólio de agentes.",
      en: "Agent built for the Agentforce World Tour São Paulo: personalized triage, interactive quizzes, profile diagnostics, and an agent portfolio.",
    },
    architecture: {
      pt: [
        "Triagem personalizada por perfil do visitante",
        "Quizzes interativos via Prompt Builder",
        "IA Generativa para diagnóstico de perfil em tempo real",
      ],
      en: [
        "Personalized triage by visitor profile",
        "Interactive quizzes via Prompt Builder",
        "Generative AI for real-time profile diagnostics",
      ],
    },
    stack: "Agentforce | IA Generativa | Data Cloud",
    spotlightColor: "rgba(255, 226, 0, 0.31)",
    scenario: "evento" as AgentScenario,
    suggestions: {
      pt: ["Sou a Ana Souza e quero fazer o quiz", "Sou o Bruno Lima: qual agente combina comigo?"],
      en: ["I'm Ana Souza and I want to take the quiz", "I'm Bruno Lima: which agent fits me?"],
    },
    highlight: {
      pt: "+500 visitantes no stand",
      en: "+500 visitors at the booth",
    },
  },
  {
    emoji: "🛠️",
    title: {
      pt: "Agente de Suporte Técnico (IT)",
      en: "IT Technical Support Agent",
    },
    description: {
      pt: "Agente de IA integrado ao Google Chat para diagnóstico e resolução de problemas técnicos, com automação de abertura de chamados e gestão de escalonamento.",
      en: "AI agent integrated with Google Chat for technical troubleshooting and issue resolution, with automated ticket creation and escalation management.",
    },
    architecture: {
      pt: [
        "Diagnóstico automatizado via Topics e Actions no Google Chat",
        "Abertura e escalonamento automático de chamados",
        "Arquitetura multiagente para controle do ciclo de vida de dispositivos",
        "Logística e notificações via WhatsApp",
      ],
      en: [
        "Automated diagnostics via Topics and Actions in Google Chat",
        "Automatic ticket creation and escalation",
        "Multi-agent architecture for device lifecycle management",
        "Logistics and notifications via WhatsApp",
      ],
    },
    stack: "Agentforce | Apex | Flows | Google Chat | WhatsApp",
    spotlightColor: "rgba(59, 130, 246, 0.2)",
    scenario: "ti" as AgentScenario,
    suggestions: {
      pt: ["Meu notebook não liga", "Quero abrir um chamado"],
      en: ["My laptop won't turn on", "I want to open a ticket"],
    },
  },
  {
    emoji: "📈",
    title: {
      pt: "Agente SDR de Vendas",
      en: "Sales SDR Agent",
    },
    description: {
      pt: "Agente de qualificação de leads usando a metodologia BANT, com validação de CNPJ via API e agendamento automático de reuniões — aumentando a escalabilidade do funil de vendas.",
      en: "Lead qualification agent using the BANT methodology, with tax ID (CNPJ) validation via API and automatic meeting scheduling — increasing sales funnel scalability.",
    },
    architecture: {
      pt: [
        "Qualificação de leads com metodologia BANT",
        "Validação de CNPJ via integração REST",
        "Agendamento automático de reuniões via Flow + Prompt Builder",
      ],
      en: [
        "Lead qualification using the BANT methodology",
        "Tax ID (CNPJ) validation via REST integration",
        "Automatic meeting scheduling via Flow + Prompt Builder",
      ],
    },
    stack: "Agentforce | Prompt Builder | REST APIs | Flows",
    spotlightColor: "rgba(0, 229, 255, 0.2)",
    scenario: "sdr" as AgentScenario,
    suggestions: {
      pt: ["Sou a Ana, da Empresa Demo: quero benefícios para 50 pessoas", "Sou o Bruno, da Loja Teste: quero agendar uma reunião"],
      en: ["I'm Ana from Demo Corp: we need benefits for 50 people", "I'm Bruno from Test Store: I want to book a meeting"],
    },
  },
  {
    emoji: "🍽️",
    title: {
      pt: "Agente Consultivo de Food Service",
      en: "Food Service Advisory Agent",
    },
    description: {
      pt: "Agente consultivo via WhatsApp para a indústria de alimentos: mapeia a principal dor do restaurante, recomenda produtos do catálogo conforme o histórico de compras e encaminha o lead qualificado ao distribuidor.",
      en: "Consultative WhatsApp agent for the food industry: maps the restaurant's main pain point, recommends catalog products based on purchase history, and routes the qualified lead to the distributor.",
    },
    architecture: {
      pt: [
        "Abordagem consultiva: ouve a dor antes de recomendar",
        "Recomendação cruzando dor e compras recentes com o catálogo",
        "Protocolo de objeção com uma única tentativa de reengajamento",
        "Subagente de confiança e segurança para dúvidas sobre o canal",
        "Registro de interesse e resumo da conversa no CRM",
      ],
      en: [
        "Consultative approach: listens to the pain point before recommending",
        "Recommendations cross pain point and recent purchases with the catalog",
        "Objection protocol with a single re-engagement attempt",
        "Trust and security subagent for doubts about the channel",
        "Interest and conversation summary recorded in the CRM",
      ],
    },
    stack: "Agentforce | Flows | Knowledge | WhatsApp",
    spotlightColor: "rgba(249, 115, 22, 0.2)",
    scenario: "food" as AgentScenario,
    suggestions: {
      pt: ["Sou a Ana, do Restaurante Sabor: meu custo está alto", "Sou o Bruno, da Pizzaria Demo: o que vocês recomendam?"],
      en: ["I'm Ana from Sabor Restaurant: my costs are too high", "I'm Bruno from Demo Pizzeria: what do you recommend?"],
    },
  },
];

export function AgentsSection() {
  const { language } = useLanguage();

  return (
    <section className="mt-10 px-4">
      <BlurFade delay={0.1} inView>
        <div className="text-center mb-10">
          <h2 className="text-zinc-300 text-3xl xl:text-4xl 2xl:text-5xl">
            <span className="text-white">{"<"}</span>
            {language === "pt" ? "Agentes" : "Agentforce"}{" "}
            <span className="text-brand">
              {language === "pt" ? "Agentforce." : "Agents."}
            </span>
            <span className="text-white">{"/>"}</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-2xl mx-auto">
            {language === "pt"
              ? "Agentes de IA reais que arquitetei e coloquei em produção na Gentrop. Os originais rodam com dados de clientes, então recriei versões de demonstração no meu próprio org Salesforce: clique em \"Testar este agente\" e veja os registros sendo criados de verdade, com dados fictícios."
              : "Real AI agents I architected and shipped to production at Gentrop. The originals run on client data, so I rebuilt demo versions in my own Salesforce org: click \"Try this agent\" and watch real records get created, with fictitious data."}
          </p>
          <AgentChatButton />
        </div>
      </BlurFade>

      <BlurFade delay={0.15} inView>
        <HowToTry />
      </BlurFade>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map((agent, index) => (
          <BlurFade
            key={agent.title.pt}
            delay={0.15 + (index % 2) * 0.1}
            inView
            className={
              index === agents.length - 1 && agents.length % 2 === 1
                ? "md:col-span-2"
                : ""
            }
          >
            <SpotlightCard
              spotlightColor={
                agent.spotlightColor as `rgba(${number}, ${number}, ${number}, ${number})`
              }
              className="p-6 flex flex-col gap-4 h-full"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-3xl shrink-0">
                  {agent.emoji}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {agent.title[language]}
                  </h3>
                  {agent.highlight && (
                    <span className="text-xs font-bold text-brand">
                      {agent.highlight[language]}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-zinc-200 text-sm leading-relaxed">
                {agent.description[language]}
              </p>

              <div>
                <h4 className="text-xs font-bold text-brand uppercase tracking-wide mb-2">
                  {language === "pt" ? "Arquitetura" : "Architecture"}
                </h4>
                <ul className="space-y-1.5">
                  {agent.architecture[language].map((step) => (
                    <li
                      key={step}
                      className="text-zinc-300 text-sm flex gap-2 leading-snug"
                    >
                      <span className="text-brand shrink-0">›</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <AgentCardFooter
                scenario={agent.scenario}
                suggestions={agent.suggestions}
                stack={agent.stack}
              />
            </SpotlightCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
