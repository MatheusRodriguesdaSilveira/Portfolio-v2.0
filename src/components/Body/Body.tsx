import React from "react";
import Image from "next/image";
import Code from "/public/imageDev.svg";
import Code1 from "/public/imageCode.svg";
import Code2 from "/public/imageCode2.svg";
import BlurFade from "@/components/ui/blur-fade";
import GradualSpacing from "../ui/gradual-spacing";
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

      {/* Conteudo */}
      <div className="flex flex-col gap-5 xl:gap-1 2xl:gap-1 max-sm:gap-3 max-sm:mt-4">
        <div className="flex text-nowrap flex-col items-start max-sm:items-center max-sm:text-center">
          <BlurFade duration={0.6} delay={0.2} yOffset={10}>
            {/* Titulo Principal */}
            <div className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl xl:mt-16 2xl:mt-24">
              <BlurFade delay={0.25 * 3.2} inView>
                <div className="px-1">
                  <h1 className="text-yellow-300 font-semibold">Olá, sou</h1>
                  <div className="flex flex-wrap justify-center xl:justify-start xl:flex-nowrap text-white font-bold font-mono">
                    <div className="flex gap-2 items-center flex-nowrap text-nowrap">
                      <h2 className="text-zinc-100 font-semibold">
                        Desenvolvedor
                      </h2>
                      <RotatingText
                        texts={[
                          "JavaScript",
                          "FullStack",
                          "Backend",
                          "Frontend",
                          "de Software",
                        ]}
                        mainClassName="text-base md:text-6xl px-2 sm:px-2 md:px-3 bg-yellow-300 text-zinc-900 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-0.5"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={2000}
                      />
                    </div>
                  </div>
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
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    Matheus
                  </span>{" "}
                  e tenho 19 anos e sou{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    Desenvolvedor de Software
                  </span>
                  . Atualmente, estou{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    estagiando
                  </span>{" "}
                  na área de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    desenvolvimento de software
                  </span>
                  , onde aplico as minhas{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    habilidades técnicas
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    minha experiência
                  </span>{" "}
                  como desenvolvedor. Busco continuar aprimorando minhas skills,
                  enquanto contribuo para o{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    sucesso
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    inovação
                  </span>{" "}
                  dos projetos. Tenho{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    experiência prática
                  </span>{" "}
                  na criação de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    APIs
                  </span>
                  ,{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    desenvolvimento de sites responsivos
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    e-commerces
                  </span>{" "}
                  otimizados, sempre{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    focado
                  </span>{" "}
                  em proporcionar experiências de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    alta qualidade
                  </span>{" "}
                  para os{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    usuários
                  </span>
                  .{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
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
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-yellow-300">
                  <Counter value={1} direction="up" />.
                  <Counter value={5} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Anos de Experiência
                </h1>
              </div>
              <div className="flex gap-1 lg:items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-yellow-300">
                  0<Counter value={9} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Projetos Realizados
                </h1>
              </div>
              <div className="flex gap-1 lg:items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-yellow-300">
                  +<Counter value={20} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Repositórios GitHub
                </h1>
              </div>
              <div className="flex gap-1 lg:items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-yellow-300">
                  +<Counter value={300} direction="up" />
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
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-yellow-300">
                  <Counter value={1} direction="up" />.
                  <Counter value={5} direction="up" />
                </div>
              </div>

              <div className="flex gap-1 items-center text-right">
                <h1 className="text-xs sm:text-sm md:text-base xl:text-lg w-16 sm:w-20 font-semibold text-zinc-400">
                  Projetos Realizados
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-yellow-300">
                  0<Counter value={9} direction="up" />
                </div>
              </div>

              <div className="flex gap-1 items-center text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-yellow-300">
                  +<Counter value={20} direction="up" />
                </div>
                <h1 className="text-xs sm:text-sm md:text-base xl:text-lg w-16 sm:w-20 font-semibold text-zinc-400">
                  Repositórios GitHub
                </h1>
              </div>

              <div className="flex gap-1 items-center text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-yellow-300">
                  +<Counter value={300} direction="up" />
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
        <div className="mr-5 lg:mt-10 xl:mt-2 xl:mr-3 2xl:mr-5 xl:mb-[130px] 2xl:mb-16">
          <ArrowDown />
          <IconColumn />
        </div>
      </BlurFade>

      <div className="xl:hidden flex mt-32 w-[250px] md:w-[400px] lg:w-[500px]">
        <BlurFade delay={0.25 * 6} inView>
          <Image src={Code2} alt="code" className="w-screen h-full" />
        </BlurFade>
      </div>
    </div>
  );
};
