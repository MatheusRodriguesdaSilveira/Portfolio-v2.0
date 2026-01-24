import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import SpotlightCard from "../ui/SpotlightCard ";

export function Experience() {
  const data = [
    {
      id: "2022/2023",
      content: (
        <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
          {/* Título e Data */}
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
                    Ensino Técnico
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                    Formado
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white font-bold">
                Jan. de 2022 - Jul. de 2023
              </p>
            </div>

            {/* Conteúdo Principal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Durante o curso técnico em Informática para Internet na Etec
                Lauro Gomes, desenvolvi habilidades em desenvolvimento web,
                banco de dados, redes e marketing digital, utilizando
                tecnologias como HTML, CSS, JavaScript, PHP e SQL. A formação me
                proporcionou experiência prática na criação de sistemas
                dinâmicos, design responsivo e estratégias para web. Como TCC,
                desenvolvi uma plataforma para academias, consolidando meus
                conhecimentos em desenvolvimento full stack.
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

            {/* Tecnologias e Status */}
            <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                HTML5 | CSS3 | JavaScript | PHP | MySQL
              </span>
              <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-green-500 px-3 py-1 rounded-full text-center">
                Concluído
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
          {/* Bloco 1 */}

          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              {/* Título e Data */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Universidade Metodista de Sao Paulo 👨‍🎓🎓
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      Ensino Superior
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      Tecnológo
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      Graduando
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  Jan. de 2024 - Jul. de 2026
                </p>
              </div>

              {/* Conteúdo Principal */}
              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Atualmente, curso Análise e Desenvolvimento de Sistemas,
                  focando na criação de soluções tecnológicas eficientes.
                  Durante a graduação, estou desenvolvendo habilidades em
                  estruturas de dados e algoritmos, aprimorando a capacidade de
                  resolver problemas de forma otimizada. Tenho experiência em
                  Java, C# e Python, aplicando esses conhecimentos no
                  desenvolvimento de aplicações orientadas a objetos, sistemas
                  web e automação. Além disso, participo de apresentações e
                  compartilhamento de conhecimento, contribuindo para um
                  ambiente de aprendizado colaborativo e contínuo.
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

              {/* Tecnologias e Status */}
              <div className="flex pt-2 flex-col sm:flex-row justify-between gap-2">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  Java | C# | Python | Banco de Dados | Redes | Gestão de
                  Progetos
                </span>
                <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
                  Em andamento
                </span>
              </div>
            </SpotlightCard>
          </div>

          {/* Bloco 2 */}
          {/* <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            > */}
          {/* Título e Data */}
          {/* <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    B7Web Full Stack 👨‍💻💻
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                      Curso extracurricular
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                      Autônomo
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  Jul. de 2024 - 2025
                </p>
              </div> */}

          {/* Conteúdo Principal */}
          {/* <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  O curso B7Web, criado por Bonieky Lacerda, é uma formação
                  prática em Desenvolvimento Web Full Stack, abordando HTML/CSS,
                  Git/GitHub, TailwindCss, JavaScript, TypeScript React,
                  Node.js, PHP, MySQL. Com foco em projetos reais, ensina desde
                  os fundamentos básicos até as tecnologias avançadas, incluindo
                  APIs REST, autenticação, versionamento e deploy, sendo ideal
                  para iniciantes e profissionais que desejam se aprofundar na
                  área. 🚀
                </p>
                <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
                  <Image
                    src={"/b7Icon.jpeg"}
                    alt={"B7Web"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div> */}

          {/* Tecnologias e Status */}
          {/* <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  HTML/CSS | Git/GitHub | JavaScript | TypeScript | React |
                  Node.js | PHP | MySQL
                </span>
                <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
                  Em andamento
                </span>
              </div> */}
          {/* </SpotlightCard> */}
          {/* </div> */}
        </div>
      ),
    },
    {
      id: "2025",
      content: (
        <div className="flex flex-col gap-2">
          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(255, 226, 0, 0.31)"
            >
              {/* Título e Data */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="pb-2 flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white px-1 pb-1">
                    Gentrop Cloud Brasil 📊☁
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      Estágio
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      Desenvolvimento de Software
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Salesforce
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agentforce
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  Abril de 2025 - Abril de 2026
                </p>
              </div>

              {/* Conteúdo Principal */}
              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Atualmente, atuo no desenvolvimento e implementação de
                  soluções avançadas em Agentforce, contribuindo ativamente para
                  projetos de Inteligência Artificial em ambiente de produção.
                  Minha rotina foca na arquitetura de agentes inteligentes
                  através da criação de Flows complexos, Actions, Instruções e
                  Tópicos, além da utilização estratégica do Prompt Builder. Sou
                  responsável por integrar essas soluções a canais como
                  WhatsApp, Google Chat e Slack, incluindo a criação e o disparo
                  de templates via Meta para otimizar a comunicação. Unindo o
                  core do Agentforce a automações robustas, busco constantemente
                  aplicar tecnologias de ponta para entregar aplicações
                  escaláveis e inovadoras. 🚀
                </p>
                <div className="bg-[#FED11A] w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
                  <Image
                    src={"/gentrop_logo.png"}
                    alt={"Metodista de Sao Paulo"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Tecnologias e Status */}
              {/* Mobile */}
              <div className="md:hidden flex pt-2 flex-col sm:flex-row justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                    Salesforce | Apex | Agentforce | PromptBuilder | Flows | IA
                    (LLMs)
                  </span>
                  <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                      Apis | Arquitetura de Soluções | Gestão de Projetos
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
                      Em andamento
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div className="max-sm:hidden flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="pb-2 flex flex-col">
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                      Salesforce | Apex | Agentforce | PromptBuilder | Flows |
                      IA(LLMs)
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                      Apis | Arquitetura de Soluções | Gestão de Projetos
                    </span>
                  </div>
                </div>
                <span className="text-nowrap text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full w-auto items-center text-center">
                  Em andamento
                </span>
              </div>
            </SpotlightCard>
          </div>

          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              {/* Título e Data */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Salesforce Trailhead & Certificação ☁️🤖
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agentforce Specialist
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Especialista em IA
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Trailhead Academy
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  Concluído em Jun. de 2025
                </p>
              </div>

              {/* Conteúdo Principal */}
              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Em 2025, aprofundei meus conhecimentos na vanguarda da
                  Inteligência Artificial do ecossistema Salesforce. Concluí a
                  trilha oficial de capacitação na Trailhead Academy e obtive a
                  certificação Salesforce Certified Agentforce Specialist.
                  Durante essa jornada, dominei a arquitetura de agentes
                  autônomos, focando na criação de soluções que integram
                  raciocínio lógico, automação e IA generativa para resolver
                  problemas complexos de negócio, consolidando minha
                  especialização em Agentforce.
                </p>
                <div className="bg-white w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
                  <Image
                    src={"/certified_Agentforce-Specialist.png"}
                    alt={"Salesforce Certified Agentforce Specialist"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Tecnologias e Status */}
              <div className="flex pt-2 flex-col sm:flex-row justify-between gap-2">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  Agentforce | Prompt Builder | AI Agents | Flows | Apex | GenAI
                </span>
                <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-green-500 px-3 py-1 rounded-full text-center">
                  Certificado
                </span>
              </div>
            </SpotlightCard>
          </div>

          <div className="w-full min-h-52 rounded-2xl flex flex-col text-primary gap-4">
            <SpotlightCard
              className="py-6 px-6"
              spotlightColor="rgba(0, 24, 255, 0.3)"
            >
              {/* Título e Data */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    🚀 Analista Agentforce & Finalista ADS
                  </h3>
                  <div className="py-2 flex gap-1 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-white bg-blue-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agentblazer Legend 2025
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-purple-600/40 rounded-full px-2 py-1 text-nowrap">
                      Agentblazer 2026 Journey
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white font-bold">
                  Jan. de 2025 - Presente
                </p>
              </div>

              {/* Conteúdo Principal */}
              <div className="flex flex-col sm:flex-row gap-3">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Atualmente, atuo como Analista Agentforce, liderando o
                  desenvolvimento de agentes inteligentes e automações complexas
                  em Salesforce. Sigo aprimorando minha expertise através da
                  trilha Agentblazer 2026, explorando novos conceitos de
                  Champion, Innovator e Legend para projetar estratégias de IA
                  ainda mais avançadas. Minha rotina envolve a integração do
                  Agentforce com WhatsApp, Google Chat e Slack, além do domínio
                  de Prompt Builder e disparos via Meta. Paralelamente, estou na
                  reta final da graduação em Análise e Desenvolvimento de
                  Sistemas, com conclusão prevista para Julho de 2026, unindo a
                  base acadêmica sólida à inovação prática da IA generativa.
                </p>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
                  <Image
                    src={"/favicon.png"}
                    alt={"Trajetória Matheus"}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Tecnologias e Status */}
              <div className="pt-2 flex flex-col sm:flex-row justify-between gap-2">
                <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                  Agentforce Specialist | Salesforce | Meta API | AI Strategy |
                  ADS 🎓
                </span>
                <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
                  Em andamento (Finalista 2026)
                </span>
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
