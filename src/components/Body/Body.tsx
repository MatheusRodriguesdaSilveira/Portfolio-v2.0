import React from "react";
import Image from "next/image";
import Code from "/public/code.png";
import BlurFade from "@/components/ui/blur-fade";
import GradualSpacing from "../ui/gradual-spacing";
import ShimmerButton from "../ui/ButtonMotion";
import ButtonCv from "./components/ButtonCv";
import Counter from "../ui/TextCounter";
import { IconColumn } from "./components/IconColumn";
import ArrowDown from "./components/ArrowDown";

interface BodyProps {
  scrollToProjects: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToProjects }) => {
  return (
    <div className="flex flex-col items-center mx-10 md:m-20 md:mt-36 md:h-screen lg:mt-20 lg:h-screen xl:flex-row-reverse xl:ml-16 xl:mt-20 2xl:mx-16 2xl:mt-0 2xl:p-20 2xl:h-screen">
      {/* Imagem Desktop */}
      <div className="hidden w-[1500px] xl:flex xl:w-[1500px] 2xl:max-w-[2000px] xl:mb-12 2xl:mt-24">
        <BlurFade delay={0.25 * 5} inView>
          <Image src={Code} alt="code" className="img w-full h-full" />
        </BlurFade>
      </div>

      {/* Conteudo */}
      <div className="flex flex-col gap-5 xl:gap-1 2xl:gap-1 max-sm:gap-3 max-sm:mt-4">
        <div className="flex flex-col items-start max-sm:items-center max-sm:text-center">
          <BlurFade duration={0.6} delay={0.2} yOffset={10}>
            {/* Titulo Principal */}
            <div className="text-2xl lg:text-4xl xl:text-5xl xl:mt-16 2xl:text-7xl 2xl:mt-24">
              <BlurFade delay={0.25 * 3.2} inView>
                <h1 className="text-indigo-600 font-semibold">Olá, sou</h1>
                <div className="flex flex-wrap justify-center xl:justify-start xl:flex-nowrap xl:-translate-x-6 2xl:-translate-x-10 mb-2 xl:gap-0 2xl:gap-1 text-white font-bold font-mono">
                  <span>{"<"}</span>

                  <GradualSpacing
                    className="px-0.5"
                    text="Desenvolvedor"
                    duration={1}
                    delayMultiple={0.2}
                  />

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
                    initialDelay={("FullStack".length + 5) * 0.2}
                  />
                </div>
              </BlurFade>
            </div>
          </BlurFade>
        </div>

        {/* Descrição Breve */}
        <div className="px-5 2xl:pr-20 xl:px-0 xl:pr-[50px] xl:mb-28 max-sm:mb-6">
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
                  , onde possa aplicar minhas{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    habilidades técnicas
                  </span>{" "}
                  e continuar aprimorando-as, enquanto contribuo para o{" "}
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
                  otimizados, sempre{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    focado
                  </span>{" "}
                  em proporcionar experiências de{" "}
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

          {/* Botões */}
          <div className="flex items-center gap-4 max-sm:justify-center max-sm:items-center">
            <div className="flex mb-10 items-center gap-5 max-sm:gap-5 max-sm:mr-9 lg:gap-4 xl:gap-5">
              <BlurFade delay={0.25 * 5.6} inView>
                <div className="flex">
                  <ButtonCv />
                </div>
              </BlurFade>

              <BlurFade delay={0.25 * 5.6} inView>
                <div className="flex">
                  <ShimmerButton scrollToProjects={scrollToProjects} />
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Status Desktop */}
          <BlurFade delay={0.25 * 5.6} inView>
            <div className="hidden md:flex xl:gap-1 xl:mx-1 2xl:gap-10">
              <div className="flex gap-1 lg:items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  <Counter value={1} direction="up" />.
                  <Counter value={5} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Anos de Experiência
                </h1>
              </div>
              <div className="flex gap-1 lg:items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  0<Counter value={9} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Projetos Realizados
                </h1>
              </div>
              <div className="flex gap-1 lg:items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  +<Counter value={20} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Repositórios GitHub
                </h1>
              </div>
              <div className="flex gap-1 lg:items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  +<Counter value={130} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Commits Feitos
                </h1>
              </div>
            </div>
          </BlurFade>

          {/* Status Mobile */}
          <BlurFade delay={0.25 * 5.6} inView>
            <div className="md:hidden grid grid-flow-col grid-rows-2 gap-3 md:grid-cols-4 md:gap-6 lg:gap-10 items-center justify-center">
              <div className="flex gap-1 items-center text-right">
                <h1 className="text-xs sm:text-sm md:text-base xl:text-lg w-16 sm:w-20 font-semibold text-zinc-400">
                  Anos de Experiência
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-indigo-500">
                  <Counter value={1} direction="up" />.
                  <Counter value={5} direction="up" />
                </div>
              </div>

              <div className="flex gap-1 items-center text-right">
                <h1 className="text-xs sm:text-sm md:text-base xl:text-lg w-16 sm:w-20 font-semibold text-zinc-400">
                  Projetos Realizados
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-indigo-500">
                  0<Counter value={9} direction="up" />
                </div>
              </div>

              <div className="flex gap-1 items-center text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-indigo-500">
                  +<Counter value={20} direction="up" />
                </div>
                <h1 className="text-xs sm:text-sm md:text-base xl:text-lg w-16 sm:w-20 font-semibold text-zinc-400">
                  Repositórios GitHub
                </h1>
              </div>

              <div className="flex gap-1 items-center text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-indigo-500">
                  +<Counter value={130} direction="up" />
                </div>
                <h1 className="text-xs sm:text-sm md:text-base xl:text-lg w-16 sm:w-20 font-semibold text-zinc-400">
                  Commits Feitos
                </h1>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      <BlurFade duration={0.6} delay={0.2} yOffset={10}>
        <div className="mr-5 lg:mt-10 xl:mt-0 xl:mr-3 2xl:mr-5 xl:mb-[120px] 2xl:mb-16">
          <ArrowDown />
          <IconColumn />
        </div>
      </BlurFade>

      <div className="xl:hidden flex mt-32 w-[250px] md:w-[400px] lg:w-[500px]">
        <BlurFade delay={0.25 * 6} inView>
          <Image src={Code} alt="code" className="img" />
        </BlurFade>
      </div>
    </div>
  );
};
