import React from "react";
import Image from "next/image";
import Code2 from "/public/imageCode.png";
import BlurFade from "@/components/ui/blur-fade";
import ShimmerButton from "../ui/ButtonMotion";
import ButtonCv from "./components/ButtonCv";
import Counter from "../ui/TextCounter";
import { IconColumn } from "./components/IconColumn";
import ArrowDown from "./components/ArrowDown";
import RotatingText from "../ui/RotatingText";

interface BodyProps {
  scrollToProjects: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToProjects }) => {
  return (
    <div className="flex flex-col items-center mx-5 md:m-20 md:mt-36 md:h-screen lg:mt-20 lg:h-screen xl:flex-row-reverse xl:ml-16 xl:mt-5 2xl:mx-16 2xl:mt-0 2xl:p-20 2xl:h-screen">
      {/* Imagem Desktop */}
      <div className="hidden xl:flex xl:mt-16 2xl:mt-24">
        <BlurFade delay={0.25 * 5} inView>
          <Image src={Code2} alt="code" className="w-screen h-full" />
        </BlurFade>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-5 xl:gap-1 2xl:gap-1 max-sm:gap-3 max-sm:mt-4">
        {/* Título */}
        <div className="flex flex-col items-start max-sm:items-center">
          <BlurFade duration={0.6} delay={0.2} yOffset={10}>
            <div className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl xl:mt-16 2xl:mt-24">
              <h1 className="text-cyan-600 font-semibold">Olá, eu sou</h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white font-bold font-mono">
                <h2 className="text-zinc-100 font-semibold whitespace-nowrap">
                  Desenvolvedor
                </h2>

                <RotatingText
                  texts={["Salesforce", "Agentforce", "de Software"]}
                  mainClassName="
                      mt-1
                      inline-flex
                      items-center
                      h-[1.3em]
                      text-xl
                      md:text-4xl
                      xl:text-5xl
                      2xl:text-7xl
                      px-3
                      bg-cyan-600
                      text-zinc-900
                      rounded-lg
                    "
                  rotationInterval={2200}
                />
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Descrição */}
        <div className="px-10 xl:px-0 xl:pr-[50px] xl:mb-28 max-sm:mb-6">
          <BlurFade delay={0.8} yOffset={10}>
            <p className="text-zinc-200 leading-loose text-sm lg:text-lg">
              👋 Meu nome é{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                Matheus
              </span>
              , tenho{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                20 anos
              </span>{" "}
              e sou{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                Desenvolvedor de Software
              </span>{" "}
              com foco em{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                Salesforce e Agentforce
              </span>
              .
            </p>

            <p className="text-zinc-200 leading-loose text-sm lg:text-lg">
              Atualmente atuo como{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                estagiário na área de desenvolvimento
              </span>
              , onde aplico minhas habilidades técnicas na criação de{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                soluções inteligentes e automações escaláveis
              </span>
              . Trabalho com a construção de agentes inteligentes utilizando{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                Prompt Templates, Instructions e Actions
              </span>{" "}
              integrados a{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-cyan-600 text-white">
                Flows
              </span>
              , automatizando processos e melhorando a eficiência operacional.
            </p>
          </BlurFade>

          {/* Botões */}
          <div className="flex justify-start mt-6">
            <div className="flex items-center gap-5">
              <BlurFade delay={0.25 * 5.6} inView>
                <ButtonCv />
              </BlurFade>

              <BlurFade delay={0.25 * 5.6} inView>
                <ShimmerButton scrollToProjects={scrollToProjects} />
              </BlurFade>
            </div>
          </div>

          {/* Stats com Counter */}
          <BlurFade delay={1} inView>
            <div className="hidden md:flex gap-1 mt-10">
              <div className="flex text-4xl xl:text-6xl font-semibold text-cyan-600">
                +<Stat value={2} label="Anos de Experiência" />
              </div>
              <div className="flex text-4xl xl:text-6xl font-semibold text-cyan-600">
                +<Stat value={10} label="Projetos Realizados" />
              </div>
              <div className="flex text-4xl xl:text-6xl font-semibold text-cyan-600">
                +<Stat value={20} label="Repositórios GitHub" />
              </div>
              <div className="flex text-4xl xl:text-6xl font-semibold text-cyan-600">
                +<Stat value={500} label="Commits Feitos" />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Lateral */}
      <BlurFade delay={0.6}>
        <div className="mr-5 xl:mb-[90px]">
          <ArrowDown />
          <IconColumn />
        </div>
      </BlurFade>

      {/* Imagem Mobile */}
      <div className="xl:hidden flex mt-10 w-[250px] md:w-[300px]">
        <Image src={Code2} alt="code" />
      </div>
    </div>
  );
};

const Stat = ({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) => {
  const isDecimal = !Number.isInteger(value);

  return (
    <div className="flex gap-1 items-end min-w-[150px]">
      <div className="flex items-end font-semibold text-cyan-600">
        <span className="text-4xl xl:text-6xl tabular-nums">
          {isDecimal ? value : <Counter value={value} direction="up" />}
        </span>
      </div>

      <h1 className="text-xs xl:text-sm 2xl:text-base w-24 font-semibold text-zinc-400">
        {label}
      </h1>
    </div>
  );
};
