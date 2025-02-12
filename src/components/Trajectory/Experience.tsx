import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      id: "2022/2023",
      content: (
        <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col py-3 px-4 text-primary gap-4">
          <div className="flex flex-row justify-between gap-2 items-center">
            <div className="flex flex-col">
              <h3 className="text-2xl text-left font-bold text-white">
                Etec Lauro Gomes 👨‍🎓🎓
              </h3>
              <div className="flex gap-1">
                <span className="text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1">
                  Ensino Técnico
                </span>
                <span className="text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1">
                  Formado
                </span>
              </div>
            </div>
            <p className="text-sm text-white font-bold">
              Jan. de 2022 - Jul. de 2023
            </p>
          </div>
          <div className="flex flex-row gap-3 h-full">
            <p className="max-w-[80%] text-white text-foreground">
              Durante o curso técnico em Informática para Internet na Etec Lauro
              Gomes, desenvolvi habilidades em desenvolvimento web, banco de
              dados, redes e marketing digital, utilizando tecnologias como
              HTML, CSS, JavaScript, PHP e SQL. A formação me proporcionou
              experiência prática na criação de sistemas dinâmicos, design
              responsivo e estratégias para web. Como TCC, desenvolvi uma
              plataforma para academias, consolidando meus conhecimentos em
              desenvolvimento full stack e integração de banco de dados.
            </p>
            <div className="bg-white max-w-[20%] h-min rounded-md p-4 aspect-square">
              <Image
                src={"/etecIcon.jpeg"}
                alt={"Etec Lauro Gomes"}
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
              HTML5 | CSS3 | JavaScript | PHP | MySQL
            </span>
            <span className="justify-end items-end text-sm text-zinc-900 font-bold bg-green-500 px-3 py-1 rounded-full">
              Concluido
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
          <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col py-3 px-4 text-primary gap-4">
            <div className="flex flex-row justify-between gap-2 items-center">
              <div className="flex flex-col">
                <h3 className="text-2xl text-left font-bold text-white">
                  Universidade Metodista de Sao Paulo 👨‍🎓🎓
                </h3>
                <div className="flex gap-1">
                  <span className="text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1">
                    Ensino Superior
                  </span>
                  <span className="text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1">
                    Tecnológo
                  </span>
                  <span className="text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1">
                    Graduando
                  </span>
                </div>
              </div>
              <p className="text-sm text-white font-bold">
                Jan. de 2024 - Jul. de 2026
              </p>
            </div>
            <div className="flex flex-row gap-3 h-full">
              <p className="max-w-[80%] text-white text-foreground">
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
              <div className="bg-white max-w-[20%] h-min rounded-md p-4 aspect-square">
                <Image
                  src={"/metoIcon.jpeg"}
                  alt={"Universidade Metodista de Sao Paulo"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                Java | C# | Python | Banco de Dados | Redes
              </span>

              <span className="text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full">
                Em andamento
              </span>
            </div>
          </div>

          {/* Bloco 2 */}
          <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col py-3 px-4 text-primary gap-4">
            <div className="flex flex-row justify-between gap-2 items-center">
              <div className="flex flex-col">
                <h3 className="text-2xl text-left font-bold text-white">
                  B7Web Full Stack 👨‍💻💻
                </h3>
                <div className="flex gap-1">
                  <span className="text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1">
                    Curso extracurricular
                  </span>
                  <span className="text-sm font-bold text-white bg-slate-400/40 rounded-full px-2 py-1">
                    Autônomo
                  </span>
                </div>
              </div>
              <p className="text-sm text-white font-bold">
                Julho. de 2024 - Indeterminado
              </p>
            </div>
            <div className="flex flex-row gap-3 h-full">
              <p className="max-w-[80%] text-white text-foreground">
                O curso B7Web, criado por Bonieky Lacerda, é uma formação
                prática em Desenvolvimento Web Full Stack, abordando HTML/CSS,
                Git/GitHub, TailwindCss, JavaScript, TypeScript React, Node.js,
                PHP, MySQL. Com foco em projetos reais, ensina desde os
                fundamentos básicos até as tecnologias avançadas, incluindo APIs
                REST, autenticação, versionamento e deploy, sendo ideal para
                iniciantes e profissionais que desejam se aprofundar na área. 🚀
              </p>
              <div className="bg-white max-w-[20%] h-min rounded-md p-4 aspect-square">
                <Image
                  src={"/b7Icon.jpeg"}
                  alt={"Universidade Metodista de Sao Paulo"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-white font-bold bg-zinc-500/40 px-3 py-1 rounded-full">
                HTML/CSS | Git/GitHub | JavaScript | TypeScript | React |
                Node.js | PHP | MySQL
              </span>

              <span className="text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full">
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
        <div className="flex flex-col gap-2">
          <div className="bg-clip-border bg-gradient-to-r bg-zinc-800/50 from-slate-500/20 to-zinc-900/20 w-full min-h-52 rounded-2xl flex flex-col py-3 px-4 text-primary gap-4">
            <div className="flex flex-row justify-between gap-2 items-center">
              <h3 className="text-2xl text-left font-bold text-white">
                💻 Atualmente
              </h3>
              <p className="text-sm text-white font-bold">
                Jan. de 2025 - Dec. de 2025
              </p>
            </div>
            <div className="flex flex-row gap-3 h-full">
              <p className="max-w-[80%] text-white text-foreground">
                Atualmente, continuo estudando na Universidade Metodista de São
                Paulo, cursando Análise e Desenvolvimento de Sistemas, também
                continuo estudando programação, desenvolvendo projetos pessoais
                e me desenvolvendo profissionalmente. Estou sempre buscando
                novos desafios e oportunidades para aprimorar minhas
                habilidades.
              </p>
              <div className="bg-white flex-1 max-w-[20%] h-min rounded-md p-4 aspect-square">
                <Image
                  src={"/metoIcon.jpeg"}
                  alt={"Universidade Metodista de Sao Paulo"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-zinc-900 font-bold bg-yellow-500 px-3 py-1 rounded-full">
                Em andamento
              </span>
            </div>
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
