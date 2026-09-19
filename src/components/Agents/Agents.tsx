import BlurFade from "@/components/ui/blur-fade";
import SpotlightCard from "@/components/ui/SpotlightCard ";
import { useLanguage } from "@/contexts/LanguageContext";

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
  },
];

export function AgentsSection() {
  const { language } = useLanguage();

  return (
    <section className="mt-10 px-4">
      <BlurFade delay={0.25 * 2} inView>
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
              ? "Agentes de IA reais que arquitetei e coloquei em produção na Gentrop. Como envolvem sistemas e dados de clientes, não têm deploy público — os cards abaixo detalham a arquitetura de cada um."
              : "Real AI agents I architected and shipped to production at Gentrop. Since they involve client systems and data, they don't have a public deploy — the cards below detail each one's architecture."}
          </p>
        </div>
      </BlurFade>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map((agent, index) => (
          <BlurFade
            key={agent.title.pt}
            delay={0.25 * (2.5 + index * 0.5)}
            inView
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

              <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full self-start mt-auto">
                {agent.stack}
              </span>
            </SpotlightCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
