import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import SpotlightCard from "../ui/SpotlightCard ";
import { useLanguage } from "@/contexts/LanguageContext";

// Componente de destaque reutilizável para manter o código limpo
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold underline-offset-2 decoration-2 underline text-white decoration-brand">
    {children}
  </span>
);

export function Experience() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const data = [
    {
      id: "2022/2023",
      content: (
        <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
          <SpotlightCard
            className="py-6 px-6"
            spotlightColor="rgba(8, 255, 0, 0.2)"
          >
            <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Etec Lauro Gomes 👨‍🎓🎓
                </h3>
                <div className="py-2 flex gap-1 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                    {pt ? "Ensino Técnico" : "Technical Education"}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                    {pt ? "Formado" : "Graduated"}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white font-bold">
                {pt ? "Jan. de 2022 - Jul. de 2023" : "Jan. 2022 - Jul. 2023"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {pt ? (
                  <>
                    Durante o curso técnico em Informática para Internet na
                    Etec Lauro Gomes, desenvolvi habilidades em
                    desenvolvimento web, banco de dados, redes e marketing
                    digital, utilizando tecnologias como HTML, CSS,
                    JavaScript, PHP e SQL. A formação me proporcionou
                    experiência prática na criação de sistemas dinâmicos,
                    design responsivo e estratégias para web. Como TCC,
                    desenvolvi uma plataforma para academias, consolidando
                    meus conhecimentos em{" "}
                    <Highlight>desenvolvimento full stack</Highlight>.
                  </>
                ) : (
                  <>
                    During my technical program in Internet Computing at Etec
                    Lauro Gomes, I developed skills in web development,
                    databases, networking and digital marketing, using
                    technologies like HTML, CSS, JavaScript, PHP and SQL. The
                    program gave me hands-on experience building dynamic
                    systems, responsive design and web strategies. For my
                    capstone project, I built a platform for gyms,
                    consolidating my knowledge of{" "}
                    <Highlight>full stack development</Highlight>.
                  </>
                )}
              </p>
              <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
                <Image
                  src={"/etecIcon.jpeg"}
                  alt={"Etec Lauro Gomes"}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                HTML5 | CSS3 | JavaScript | PHP | MySQL
              </span>
              <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-green-500 px-3 py-1 rounded-full text-center">
                {pt ? "Concluído" : "Completed"}
              </span>
            </div>
          </SpotlightCard>
        </div>
      ),
    },
    {
      id: "2024",
      content: (
        <div className="flex flex-col gap-2">
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Universidade Metodista de São Paulo 👨‍🎓🎓
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      {pt ? "Ensino Superior" : "Higher Education"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      {pt ? "Tecnólogo" : "Technology Degree"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      {pt ? "Formado" : "Graduated"}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {pt ? "Fev. de 2024 - Jun. de 2026" : "Feb. 2024 - Jun. 2026"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Em 3 de junho de 2026, concluí a graduação em Análise e
                      Desenvolvimento de Sistemas, com foco na criação de
                      soluções tecnológicas eficientes. Durante a graduação,
                      desenvolvi habilidades em estruturas de dados e
                      algoritmos, aprimorando a capacidade de resolver
                      problemas de forma otimizada. Tenho experiência em
                      Java, C# e Python, aplicando esses conhecimentos no
                      desenvolvimento de aplicações orientadas a objetos,
                      sistemas web e automação. Além disso, participei de
                      apresentações e compartilhamento de conhecimento,
                      contribuindo para um ambiente de aprendizado
                      colaborativo e contínuo.
                    </>
                  ) : (
                    <>
                      On June 3, 2026, I completed my degree in Systems
                      Analysis and Development, focused on building
                      efficient technology solutions. During the program, I
                      developed skills in data structures and algorithms,
                      sharpening my ability to solve problems efficiently. I
                      have experience in Java, C# and Python, applying this
                      knowledge to object-oriented applications, web systems
                      and automation. I also took part in presentations and
                      knowledge-sharing sessions, contributing to a
                      collaborative, continuous learning environment.
                    </>
                  )}
                </p>
                <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
                  <Image
                    src={"/metoIcon.jpeg"}
                    alt={"Metodista de Sao Paulo"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex pt-2 flex-col sm:flex-row justify-between gap-2">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  {pt
                    ? "Java | C# | Python | Banco de Dados | Redes | Gestão de Projetos"
                    : "Java | C# | Python | Databases | Networking | Project Management"}
                </span>
                <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-green-500 px-3 py-1 rounded-full text-center">
                  {pt ? "Concluído" : "Completed"}
                </span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      ),
    },
    {
      id: "2025",
      content: (
        <div className="flex flex-col gap-4">
          {/* Salesforce Certification */}
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {pt
                      ? "Salesforce Trailhead & Certificação ☁️🤖"
                      : "Salesforce Trailhead & Certification ☁️🤖"}
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agentforce Specialist
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      {pt ? "Especialista em IA" : "AI Specialist"}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {pt ? "Concluído em Jun. de 2025" : "Completed in Jun. 2025"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Em 2025, aprofundei meus conhecimentos na vanguarda da
                      Inteligência Artificial do ecossistema Salesforce.
                      Concluí a trilha oficial de capacitação na Trailhead
                      Academy e obtive a certificação{" "}
                      <Highlight>
                        Salesforce Certified Agentforce Specialist
                      </Highlight>
                      . Durante essa jornada, dominei a arquitetura de
                      agentes autônomos, focando na criação de soluções que
                      integram raciocínio lógico, automação e IA generativa
                      para resolver problemas complexos de negócio,
                      consolidando minha especialização em{" "}
                      <Highlight>Agentforce</Highlight>.
                    </>
                  ) : (
                    <>
                      In 2025, I deepened my knowledge at the forefront of AI
                      within the Salesforce ecosystem. I completed the
                      official training track on Trailhead Academy and
                      earned the{" "}
                      <Highlight>
                        Salesforce Certified Agentforce Specialist
                      </Highlight>{" "}
                      certification. Along the way, I mastered autonomous
                      agent architecture, focusing on building solutions
                      that combine logical reasoning, automation and
                      generative AI to solve complex business problems,
                      consolidating my specialization in{" "}
                      <Highlight>Agentforce</Highlight>.
                    </>
                  )}
                </p>
                <div className="w-20 h-20 sm:w-24 sm:h-24 aspect-square mx-auto sm:mx-0 shrink-0">
                  <Image
                    src={"/certified_Agentforce-Specialist.png"}
                    alt={"Salesforce Certified Agentforce Specialist"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex pt-2 flex-col sm:flex-row justify-between gap-2">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  Agentforce | Prompt Builder | AI Agents | Flows | Apex | GenAI
                </span>
                <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-green-500 px-3 py-1 rounded-full text-center">
                  {pt ? "Certificado" : "Certified"}
                </span>
              </div>
            </SpotlightCard>
          </div>

          {/* Workshop */}
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(147, 51, 234, 0.2)"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    🌟 Partner Enablement: Build Better Agents
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      Workshop Salesforce
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      São Paulo
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {pt ? "Agosto de 2025" : "August 2025"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Participei do workshop presencial conduzido por Adolfo
                      Sanches, focado em elevar o nível de construção de
                      agentes de IA com <Highlight>Agentforce</Highlight>.
                      Durante a imersão, aprofundamos em tópicos críticos
                      como a redução de{" "}
                      <Highlight>alta latência</Highlight> através da
                      otimização de instruções e a importância de evitar{" "}
                      <Highlight>tópicos sobrepostos</Highlight> para
                      garantir a precisão do agente. Refinei técnicas de{" "}
                      <Highlight>Lógica Determinística</Highlight> para
                      substituir termos absolutos por filtros e variáveis,
                      além de dominar melhores práticas de{" "}
                      <Highlight>RAG (Retrieval-Augmented Generation)</Highlight>{" "}
                      e estruturação de bases de conhecimento confiáveis
                      para mitigar respostas inesperadas ou alucinações. 🚀
                    </>
                  ) : (
                    <>
                      I attended an in-person workshop led by Adolfo
                      Sanches, focused on leveling up AI agent building with{" "}
                      <Highlight>Agentforce</Highlight>. During the
                      immersion, we dove into critical topics like reducing{" "}
                      <Highlight>high latency</Highlight> through
                      instruction optimization and the importance of
                      avoiding <Highlight>overlapping topics</Highlight> to
                      ensure agent accuracy. I refined{" "}
                      <Highlight>Deterministic Logic</Highlight> techniques
                      to replace absolute terms with filters and variables,
                      and mastered best practices for{" "}
                      <Highlight>RAG (Retrieval-Augmented Generation)</Highlight>{" "}
                      and structuring reliable knowledge bases to mitigate
                      unexpected responses or hallucinations. 🚀
                    </>
                  )}
                </p>
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-purple-500 p-1 aspect-square mx-auto sm:mx-0 shrink-0">
                  <Image
                    src={"/better-agents-workshop-badge.jpg"}
                    alt={"Agentforce Workshop Badge"}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2 items-center">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  {pt
                    ? "RAG | Lógica Determinística | Prompt Engineering | IA Generativa"
                    : "RAG | Deterministic Logic | Prompt Engineering | Generative AI"}
                </span>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7363585565373464578/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-zinc-900 font-bold bg-purple-500 hover:bg-purple-400 px-4 py-1 rounded-full transition-colors"
                >
                  {pt ? "Ver no LinkedIn" : "View on LinkedIn"}
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Agentblazer Legend */}
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(59, 130, 246, 0.2)" // Tom azul para combinar com Salesforce
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    🏆 Agentblazer Legend 2025
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Salesforce Ecosystem
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-indigo-600/40 rounded-full px-2 py-1 text-nowrap">
                      {pt ? "Nível Máximo" : "Max Level"}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {pt ? "Concluído em 2025" : "Completed in 2025"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Alcancei o status de{" "}
                      <Highlight>Agentblazer Legend</Highlight>, o nível mais
                      alto de especialização na trilha de IA da Salesforce.
                      Durante essa jornada, dominei o{" "}
                      <Highlight>ciclo de vida completo do agente</Highlight>{" "}
                      e a criação de{" "}
                      <Highlight>personalizações avançadas</Highlight>. Essa
                      trilha foi fundamental para consolidar meus
                      conhecimentos técnicos que culminaram na obtenção da
                      certificação{" "}
                      <Highlight>
                        Salesforce Certified Agentforce Specialist
                      </Highlight>
                      , capacitando-me a projetar estratégias complexas e
                      integrar IA generativa a fluxos de trabalho reais. 🚀
                    </>
                  ) : (
                    <>
                      I reached <Highlight>Agentblazer Legend</Highlight>{" "}
                      status, the highest level of specialization on
                      Salesforce's AI track. Along this journey, I mastered
                      the <Highlight>full agent lifecycle</Highlight> and
                      building{" "}
                      <Highlight>advanced customizations</Highlight>. This
                      track was key to consolidating the technical knowledge
                      that led me to the{" "}
                      <Highlight>
                        Salesforce Certified Agentforce Specialist
                      </Highlight>{" "}
                      certification, equipping me to design complex
                      strategies and integrate generative AI into real
                      workflows. 🚀
                    </>
                  )}
                </p>
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-blue-500 p-1 aspect-square mx-auto sm:mx-0 shrink-0 bg-white/10">
                  <Image
                    src={"/agentblazer.png"}
                    alt={"Agentblazer Legend Badge"}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2 items-center">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  {pt
                    ? "Agentforce | Prompt Builder | LLMs | Estratégia de IA"
                    : "Agentforce | Prompt Builder | LLMs | AI Strategy"}
                </span>
                <a
                  href="https://www.salesforce.com/trailblazer/sl5u6l8v3asxo4p7d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-zinc-900 font-bold bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded-full transition-colors"
                >
                  {pt ? "Ver Perfil Trailblazer" : "View Trailblazer Profile"}
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      ),
    },
    {
      id: "2026",
      content: (
        <div className="flex flex-col gap-4">
          {/* Agentblazer Legend 2026 */}
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    🏆 Agentblazer Legend 2026
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agent Builder
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Data 360
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {pt ? "Concluído em 07/04/2026" : "Completed on April 7, 2026"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Completei as trilhas atualizadas do ecossistema 2026 e
                      conquistei o status{" "}
                      <Highlight>Agentblazer Legend 2026</Highlight> em 7 de
                      abril de 2026. Nas semanas anteriores, aprofundei o
                      domínio do novo <Highlight>Agent Builder</Highlight>,
                      orquestrando ações autônomas multi-etapas com
                      precisão, e da evolução do{" "}
                      <Highlight>Data 360</Highlight>, aproveitando dados
                      unificados e em tempo real para manter os agentes
                      fundamentados (grounded) e precisos. Avancei também em
                      raciocínio avançado, indo além de bots simples para
                      agentes que planejam, executam e aprendem dentro de
                      fluxos de trabalho complexos. Como{" "}
                      <Highlight>Salesforce Developer</Highlight>, aplico
                      essas capacidades de ponta para construir soluções que
                      não apenas automatizam tarefas, mas verdadeiramente
                      ampliam o potencial humano — a era da{" "}
                      <Highlight>Agentic Enterprise</Highlight> está apenas
                      começando. 🚀
                    </>
                  ) : (
                    <>
                      I completed the updated 2026 ecosystem tracks and
                      earned <Highlight>Agentblazer Legend 2026</Highlight>{" "}
                      status on April 7, 2026. In the weeks before, I
                      deepened my mastery of the new{" "}
                      <Highlight>Agent Builder</Highlight>, orchestrating
                      precise multi-step autonomous actions, and of the
                      evolved <Highlight>Data 360</Highlight>, leveraging
                      unified, real-time data to keep agents grounded and
                      accurate. I also advanced in advanced reasoning,
                      moving beyond simple bots to agents that plan, execute
                      and learn within complex workflows. As a{" "}
                      <Highlight>Salesforce Developer</Highlight>, I apply
                      these cutting-edge capabilities to build solutions
                      that don't just automate tasks, but truly amplify
                      human potential — the era of the{" "}
                      <Highlight>Agentic Enterprise</Highlight> is just
                      beginning. 🚀
                    </>
                  )}
                </p>
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-blue-500 p-1 aspect-square mx-auto sm:mx-0 shrink-0 bg-white/10">
                  <Image
                    src={"/agentblazer.png"}
                    alt={"Agentblazer Legend 2026 Badge"}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2 items-center">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  {pt
                    ? "Agent Builder | Data 360 | Raciocínio Avançado | Agentic Enterprise"
                    : "Agent Builder | Data 360 | Advanced Reasoning | Agentic Enterprise"}
                </span>
                <a
                  href="https://www.salesforce.com/trailblazer/sl5u6l8v3asxo4p7d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-zinc-900 font-bold bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded-full transition-colors"
                >
                  {pt ? "Ver Perfil Trailblazer" : "View Trailblazer Profile"}
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Gentrop — Efetivado Analista Agentforce Jr */}
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(255, 226, 0, 0.31)"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="pb-2 flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white px-1 pb-1">
                    {pt
                      ? "Gentrop — Efetivado Analista Agentforce Jr 🚀☁"
                      : "Gentrop — Promoted to Agentforce Jr Analyst 🚀☁"}
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-green-600/40 rounded-full px-2 py-1 text-nowrap">
                      {pt
                        ? "Efetivado em 15/04/2026"
                        : "Promoted on April 15, 2026"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      {pt ? "Analista Agentforce Jr" : "Agentforce Jr Analyst"}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Salesforce
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agentforce
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold text-nowrap">
                  {pt ? "Abril de 2025 - Presente" : "April 2025 - Present"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Iniciei minha trajetória na Gentrop em abril de 2025
                      como estagiário na área de desenvolvimento, atuando na
                      criação de agentes inteligentes com Agentforce. Em{" "}
                      <Highlight>15 de abril de 2026</Highlight>, fui{" "}
                      <Highlight>
                        efetivado como Analista Agentforce Jr
                      </Highlight>
                      , dando início a um novo capítulo totalmente focado na
                      revolução da IA na Salesforce. Hoje sou responsável
                      por arquitetar agentes autônomos usando o{" "}
                      <Highlight>Agent Builder</Highlight>, utilizar o{" "}
                      <Highlight>Data 360</Highlight> para fundamentar a IA
                      com dados unificados e em tempo real, e entregar
                      automação inteligente que gera impacto real nos
                      negócios — integrando essas soluções a canais como
                      WhatsApp, Google Chat e Slack, além do disparo de
                      templates via Meta. 🚀
                    </>
                  ) : (
                    <>
                      I started my journey at Gentrop in April 2025 as a
                      development intern, building intelligent agents with
                      Agentforce. On{" "}
                      <Highlight>April 15, 2026</Highlight>, I was{" "}
                      <Highlight>promoted to Agentforce Jr Analyst</Highlight>
                      , kicking off a new chapter fully focused on the AI
                      revolution within Salesforce. Today I'm responsible
                      for architecting autonomous agents using the{" "}
                      <Highlight>Agent Builder</Highlight>, leveraging{" "}
                      <Highlight>Data 360</Highlight> to ground AI with
                      unified, real-time data, and delivering intelligent
                      automation that drives real business impact —
                      integrating these solutions with channels like
                      WhatsApp, Google Chat and Slack, plus sending
                      templates via Meta. 🚀
                    </>
                  )}
                </p>
                <div className="bg-[#FED11A] w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
                  <Image
                    src={"/gentrop_logo.png"}
                    alt={"Gentrop Cloud Brasil"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  Salesforce | Apex | Agentforce | Agent Builder | Data 360 |
                  Flows
                </span>
                <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
                  {pt ? "Em andamento" : "In progress"}
                </span>
              </div>
            </SpotlightCard>
          </div>

          {/* Trailhead - Implementation Ready Curricula */}
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    🎖️ Implementation Ready Curricula
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Data 360
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agentforce
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {pt ? "Mai. de 2026" : "May 2026"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Concluí duas curriculas completas no Trailhead:{" "}
                      <Highlight>Data 360 Implementation Ready</Highlight> em
                      14 de maio de 2026 e{" "}
                      <Highlight>Agentforce Implementation Ready</Highlight>{" "}
                      em 28 de maio de 2026 — 100% de conclusão em todos os
                      cursos (incluindo módulos práticos de Deploy, Monitor
                      e avaliação final), reforçando a base técnica para
                      implementar Data Cloud e Agentforce em produção.
                    </>
                  ) : (
                    <>
                      I completed two full Trailhead curricula:{" "}
                      <Highlight>Data 360 Implementation Ready</Highlight> on
                      May 14, 2026 and{" "}
                      <Highlight>Agentforce Implementation Ready</Highlight>{" "}
                      on May 28, 2026 — 100% completion across all courses
                      (including hands-on Deploy, Monitor and final
                      assessment modules), reinforcing the technical
                      foundation to implement Data Cloud and Agentforce in
                      production.
                    </>
                  )}
                </p>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0 bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-4xl">🎖️</span>
                </div>
              </div>
              <div className="flex pt-2 flex-col sm:flex-row justify-between gap-2 items-center">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  Data Cloud | Agentforce | Deploy | Monitor
                </span>
                <a
                  href="https://www.salesforce.com/trailblazer/sl5u6l8v3asxo4p7d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-zinc-900 font-bold bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded-full transition-colors"
                >
                  {pt ? "Ver Perfil Trailblazer" : "View Trailblazer Profile"}
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Salesforce Certification - Data 360 */}
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Salesforce Certified Data 360 Consultant ☁️📊
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Data 360 Consultant
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Data Cloud
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {pt ? "Concluído em Jul. de 2026" : "Completed in Jul. 2026"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {pt ? (
                    <>
                      Conquistei minha segunda certificação Salesforce:{" "}
                      <Highlight>
                        Salesforce Certified Data 360 Consultant
                      </Highlight>
                      . Aprofundei meus conhecimentos em{" "}
                      <Highlight>Data Cloud</Highlight>, Customer 360,
                      Identity Resolution, Data Modeling, Segmentation,
                      Activation e Governança de Dados, aprendendo a
                      transformar dados brutos em uma base unificada de
                      clientes. Essa certificação consolida a camada de
                      dados que fundamenta ({" "}
                      <Highlight>grounding</Highlight>) os agentes de IA que
                      construo com Agentforce, unindo dados confiáveis a
                      automações inteligentes.
                    </>
                  ) : (
                    <>
                      I earned my second Salesforce certification:{" "}
                      <Highlight>
                        Salesforce Certified Data 360 Consultant
                      </Highlight>
                      . I deepened my knowledge of{" "}
                      <Highlight>Data Cloud</Highlight>, Customer 360,
                      Identity Resolution, Data Modeling, Segmentation,
                      Activation and Data Governance, learning how to turn
                      raw data into a unified customer profile. This
                      certification strengthens the data layer that{" "}
                      <Highlight>grounds</Highlight> the AI agents I build
                      with Agentforce, pairing reliable data with
                      intelligent automation.
                    </>
                  )}
                </p>
                <div className="w-20 h-20 sm:w-24 sm:h-24 aspect-square mx-auto sm:mx-0 shrink-0">
                  <Image
                    src={"/2026-01_Badge_SF-Certified_D360-Con_High-Res.png"}
                    alt={"Salesforce Certified Data 360 Consultant"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex pt-2 flex-col sm:flex-row justify-between gap-2 items-center">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  Data Cloud | Customer 360 | Identity Resolution | Segmentation
                  | Activation
                </span>
                <a
                  href="https://sforce.co/verifycerts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-zinc-900 font-bold bg-green-500 hover:bg-green-400 px-4 py-1 rounded-full transition-colors text-center"
                >
                  {pt ? "Verificar (ID 7905614)" : "Verify (ID 7905614)"}
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
