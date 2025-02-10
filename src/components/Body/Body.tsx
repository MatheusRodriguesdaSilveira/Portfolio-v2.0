import React from "react";
import Image from "next/image";
import Code from "/public/code.png";
import BlurFade from "@/components/ui/blur-fade";
import { IconColumn } from "./components/IconColumn";
import GradualSpacing from "../ui/gradual-spacing";
import ShimmerButton from "../ui/ButtonMotion";
import ButtonContact from "./components/ButtonContact";
import ArrowDown from "./components/ArrowDown";

interface BodyProps {
  scrollToProjects: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToProjects }) => {
  return (
    <div className="flex flex-col xl:flex-row items-center mx-5 xl:px-16 xl:pt-[200px] 2xl:mx-0 2xl:p-20 max-sm:mx-4 max-sm:px-2 xl:h-screen">
      <BlurFade duration={0.6} delay={0.2} yOffset={10}>
        <div className="flex flex-col items-center justify-center xl:mb-10 gap-1">
          <ArrowDown />
          <IconColumn />
        </div>
      </BlurFade>
      <div className="flex flex-col gap-5 xl:px-10 xl:mt-5 2xl:px-10 2xl:mb-20 max-sm:gap-3 max-sm:mt-4">
        <div className="flex flex-col items-start max-sm:items-center max-sm:text-center">
          <BlurFade duration={0.6} delay={0.2} yOffset={10}>
            <div className="text-2xl lg:text-6xl xl:text-5xl 2xl:text-7xl 2xl:mt-24">
              <BlurFade delay={0.25 * 3.2} inView>
                <h1 className="text-indigo-600 font-semibold">Olá, sou</h1>
                <div className="flex flex-wrap justify-center xl:justify-start xl:flex-nowrap xl:-translate-x-7 2xl:-translate-x-10 mb-2 xl:gap-0 2xl:gap-1 text-white font-bold font-mono">
                  <span>{"<"}</span>

                  {/* GradualSpacing para "Desenvolvedor" */}
                  <GradualSpacing
                    className="px-0.5"
                    text="Desenvolvedor"
                    duration={1}
                    delayMultiple={0.2}
                  />

                  {/* GradualSpacing para "FullStack" com atraso baseado na duração total de "Desenvolvedor" */}
                  <GradualSpacing
                    className="text-indigo-600"
                    text="FullStack"
                    duration={1}
                    delayMultiple={0.2}
                    framerProps={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initialDelay={("Desenvolvedor".length + 1) * 0.2}
                  />

                  <GradualSpacing
                    text="/>"
                    duration={2}
                    delayMultiple={0.2}
                    framerProps={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initialDelay={("FullStack ".length + 5) * 0.2}
                  />
                </div>
              </BlurFade>
            </div>
          </BlurFade>
        </div>

        <div className="xl:pr-[150px] xl:mb-28 max-sm:mb-6">
          <BlurFade duration={0.6} delay={0.8} yOffset={10}>
            <div className="flex items-center max-sm:flex-col">
              <BlurFade delay={0.25 * 4} inView>
                <p className="text-zinc-200 text-left leading-loose mb-4 text-sm lg:text-lg xl:text-base 2xl:text-lg max-sm:text-base max-sm:leading-relaxed max-sm:text-left">
                  👋 Meu nome é{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    Matheus
                  </span>{" "}
                  e tenho 19 anos e sou{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    Desenvolvedor FullStack
                  </span>
                  . Estou em busca de novas oportunidades na{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    área de tecnologia
                  </span>
                  , onde possa aplicar minhas habilidades técnicas e continuar
                  aprimorando-as, enquanto contribuo para o{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    sucesso
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    inovação
                  </span>{" "}
                  dos projetos. Tenho{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    experiência prática
                  </span>{" "}
                  na criação de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    APIs
                  </span>
                  ,{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    desenvolvimento de sites responsivos
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    e-commerces
                  </span>{" "}
                  otimizados, sempre focado em proporcionar experiências de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    alta qualidade
                  </span>{" "}
                  para os{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    usuários
                  </span>
                  .{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600 ">
                    Fique à vontade para explorar meus projetos e conhecer mais
                    sobre meu trabalho!
                  </span>{" "}
                  🚀
                </p>
              </BlurFade>
            </div>
          </BlurFade>

          <BlurFade duration={0.6} delay={1} yOffset={10}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-5 max-sm:gap-5 max-sm:mr-9 lg:gap-4 xl:gap-5">
                <BlurFade delay={0.25 * 5} inView>
                  <div className="flex">
                    <ButtonContact />
                  </div>
                </BlurFade>
                <BlurFade delay={0.25 * 5.5} inView>
                  <div className="flex">
                    <ShimmerButton scrollToProjects={scrollToProjects} />
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Ajuste de responsividade da imagem */}
      <div className="flex mt-32 w-[250px] md:w-[400px] xl:w-[4000px] xl:mt-1 2xl:w-screen 2xl:mt-3">
        <BlurFade delay={0.25 * 6} inView>
          <Image src={Code} alt="code" className="img rounded-lg" />
        </BlurFade>
      </div>
    </div>
  );
};
