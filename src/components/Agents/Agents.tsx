import BlurFade from "@/components/ui/blur-fade";
import SpotlightCard from "@/components/ui/SpotlightCard ";

const agents = [
  {
    emoji: "🏘️",
    title: "Agente de Pré-vendas de Consórcio",
    description:
      "Agente conversacional via WhatsApp para qualificação de leads de consórcio (Imóvel e Veículo), com coleta fluida de dados, validação de regras comerciais e encaminhamento automático para especialista humano.",
    architecture: [
      "Arquitetura multiagente: Roteador + Qualificação + Dúvidas + Transbordo",
      "Coleta fluida de dados em qualquer ordem, com preenchimento parcial por mensagem",
      "Classificação dinâmica de temperatura do lead (Quente/Morno/Frio) a cada turno",
      "Validação de regra de negócio (idade mínima) com bloqueio automático do funil",
      "Criação automática de lead via Flow após confirmação do cliente",
      "Escalonamento (transbordo) para especialista humano via WhatsApp",
    ],
    stack: "Agentforce | Flows | WhatsApp",
    spotlightColor: "rgba(34, 197, 94, 0.2)",
  },
  {
    emoji: "🎪",
    title: "Agent Guigo — Agentforce World Tour SP",
    description:
      "Agente desenvolvido para o Agentforce World Tour São Paulo: triagem personalizada, quizzes interativos, diagnóstico de perfil e portfólio de agentes.",
    architecture: [
      "Triagem personalizada por perfil do visitante",
      "Quizzes interativos via Prompt Builder",
      "IA Generativa para diagnóstico de perfil em tempo real",
    ],
    stack: "Agentforce | IA Generativa | Data Cloud",
    spotlightColor: "rgba(255, 226, 0, 0.31)",
    highlight: "+500 visitantes no stand",
  },
  {
    emoji: "🛠️",
    title: "Agente de Suporte Técnico (IT)",
    description:
      "Agente de IA integrado ao Google Chat para diagnóstico e resolução de problemas técnicos, com automação de abertura de chamados e gestão de escalonamento.",
    architecture: [
      "Diagnóstico automatizado via Topics e Actions no Google Chat",
      "Abertura e escalonamento automático de chamados",
      "Arquitetura multiagente para controle do ciclo de vida de dispositivos",
      "Logística e notificações via WhatsApp",
    ],
    stack: "Agentforce | Apex | Flows | Google Chat | WhatsApp",
    spotlightColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    emoji: "📈",
    title: "Agente SDR de Vendas",
    description:
      "Agente de qualificação de leads usando a metodologia BANT, com validação de CNPJ via API e agendamento automático de reuniões — aumentando a escalabilidade do funil de vendas.",
    architecture: [
      "Qualificação de leads com metodologia BANT",
      "Validação de CNPJ via integração REST",
      "Agendamento automático de reuniões via Flow + Prompt Builder",
    ],
    stack: "Agentforce | Prompt Builder | REST APIs | Flows",
    spotlightColor: "rgba(0, 229, 255, 0.2)",
  },
];

export function AgentsSection() {
  return (
    <section className="mt-10 px-4">
      <BlurFade delay={0.25 * 2} inView>
        <div className="text-center mb-10">
          <h2 className="text-zinc-300 text-3xl xl:text-4xl 2xl:text-5xl">
            <span className="text-white">{"<"}</span>
            Agentes <span className="text-brand">Agentforce.</span>
            <span className="text-white">{"/>"}</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-2xl mx-auto">
            Agentes de IA reais que arquitetei e coloquei em produção na
            Gentrop. Como envolvem sistemas e dados de clientes, não têm deploy
            público — os cards abaixo detalham a arquitetura de cada um.
          </p>
        </div>
      </BlurFade>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map((agent, index) => (
          <BlurFade key={agent.title} delay={0.25 * (2.5 + index * 0.5)} inView>
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
                    {agent.title}
                  </h3>
                  {agent.highlight && (
                    <span className="text-xs font-bold text-brand">
                      {agent.highlight}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-zinc-200 text-sm leading-relaxed">
                {agent.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-brand uppercase tracking-wide mb-2">
                  Arquitetura
                </h4>
                <ul className="space-y-1.5">
                  {agent.architecture.map((step) => (
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
