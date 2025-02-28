import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      id: "2022/2023",
      content: (
        <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col p-4 text-primary gap-4">
          {/* Título e Data */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                Etec Lauro Gomes 👨‍🎓🎓
              </h3>
              <div className="flex gap-1 flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                  Ensino Técnico
                </span>
                <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
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
              Durante o curso técnico em Informática para Internet na Etec Lauro
              Gomes, desenvolvi habilidades em desenvolvimento web, banco de
              dados, redes e marketing digital, utilizando tecnologias como
              HTML, CSS, JavaScript, PHP e SQL. A formação me proporcionou
              experiência prática na criação de sistemas dinâmicos, design
              responsivo e estratégias para web. Como TCC, desenvolvi uma
              plataforma para academias, consolidando meus conhecimentos em
              desenvolvimento full stack.
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
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
              HTML5 | CSS3 | JavaScript | PHP | MySQL
            </span>
            <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-green-500 px-3 py-1 rounded-full text-center">
              Concluído
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "2024",
      content: (
        <div className="flex flex-col gap-2">
          {/* Bloco 1 */}
          <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col p-4 text-primary gap-4">
            {/* Título e Data */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Universidade Metodista de Sao Paulo 👨‍🎓🎓
                </h3>
                <div className="flex gap-1 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                    Ensino Superior
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                    Tecnológo
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
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
                Atualmente, curso Análise e Desenvolvimento de Sistemas, focando
                na criação de soluções tecnológicas eficientes. Durante a
                graduação, estou desenvolvendo habilidades em estruturas de
                dados e algoritmos, aprimorando a capacidade de resolver
                problemas de forma otimizada. Tenho experiência em Java, C# e
                Python, aplicando esses conhecimentos no desenvolvimento de
                aplicações orientadas a objetos, sistemas web e automação. Além
                disso, participo de apresentações e compartilhamento de
                conhecimento, contribuindo para um ambiente de aprendizado
                colaborativo e contínuo.
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
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                Java | C# | Python | Banco de Dados | Redes
              </span>
              <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
                Em andamento
              </span>
            </div>
          </div>

          {/* Bloco 2 */}
          <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col p-4 text-primary gap-4">
            {/* Título e Data */}
            <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  B7Web Full Stack 👨‍💻💻
                </h3>
                <div className="flex gap-1 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                    Curso extracurricular
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1 text-nowrap">
                    Autônomo
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white font-bold">
                Julho. de 2024 - Indeterminado
              </p>
            </div>

            {/* Conteúdo Principal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                O curso B7Web, criado por Bonieky Lacerda, é uma formação
                prática em Desenvolvimento Web Full Stack, abordando HTML/CSS,
                Git/GitHub, TailwindCss, JavaScript, TypeScript React, Node.js,
                PHP, MySQL. Com foco em projetos reais, ensina desde os
                fundamentos básicos até as tecnologias avançadas, incluindo APIs
                REST, autenticação, versionamento e deploy, sendo ideal para
                iniciantes e profissionais que desejam se aprofundar na área. 🚀
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
            </div>

            {/* Tecnologias e Status */}
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <span className="text-xs sm:text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                HTML/CSS | Git/GitHub | JavaScript | TypeScript | React |
                Node.js | PHP | MySQL
              </span>
              <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
                Em andamento
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "2025",
      content: (
        <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col p-4 text-primary gap-4">
          {/* Título e Data */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 items-start sm:items-center">
            <div className="flex flex-col">
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                💻 Atualmente
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white font-bold">
              Jan. de 2025 - Dec. de 2025
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex flex-col sm:flex-row gap-3">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Atualmente, continuo estudando na Universidade Metodista de São
              Paulo, cursando Análise e Desenvolvimento de Sistemas, também
              continuo estudando programação, desenvolvendo projetos pessoais e
              me desenvolvendo profissionalmente. Estou sempre buscando novos
              desafios e oportunidades para aprimorar minhas habilidades.
            </p>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md p-2 sm:p-4 aspect-square mx-auto sm:mx-0">
              <Image
                src={"/favicon.png"}
                alt={"Etec Lauro Gomes"}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Tecnologias e Status */}
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <span className="text-xs sm:text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full text-center">
              Em andamento
            </span>
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
