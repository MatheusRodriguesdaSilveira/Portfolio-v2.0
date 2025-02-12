import React from "react";
import Image from "next/image";
import Code from "/public/code.png";
import BlurFade from "@/components/ui/blur-fade";
import GradualSpacing from "../ui/gradual-spacing";
import ShimmerButton from "../ui/ButtonMotion";
import ButtonCv from "./components/ButtonCv";
import Counter from "../ui/TextCounter";

interface BodyProps {
  scrollToProjects: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToProjects }) => {
  return (
    <div className="flex flex-col mx-5 px-2 xl:flex-row-reverse xl:ml-20 xl:mt-36 items-center 2xl:mx-10 2xl:mt-0 2xl:p-20 2xl:h-screen">
      {/* Imagem Desktop */}
      <div className="hidden lg:flex xl:w-[1700px] 2xl:w-full xl:mb-10 2xl:mt-24">
        <BlurFade delay={0.25 * 5} inView>
          <Image src={Code} alt="code" className="img w-full h-full" />
        </BlurFade>
      </div>

      {/* Titulo Principal */}
      <div className="flex flex-col gap-5 xl:gap-1 2xl:gap-1 max-sm:gap-3 max-sm:mt-4">
        <div className="flex flex-col items-start max-sm:items-center max-sm:text-center">
          <BlurFade duration={0.6} delay={0.2} yOffset={10}>
            <div className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl 2xl:mt-24">
              <BlurFade delay={0.25 * 3.2} inView>
                <h1 className="text-indigo-600 font-semibold">Olá, sou</h1>
                <div className="flex flex-wrap justify-center xl:justify-start xl:flex-nowrap xl:-translate-x-7 2xl:-translate-x-10 mb-2 xl:gap-0 2xl:gap-1 text-white font-bold font-mono">
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
                    initialDelay={("FullStack ".length + 5) * 0.2}
                  />
                </div>
              </BlurFade>
            </div>
          </BlurFade>
        </div>

        {/* Descrição Breve */}
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
          <div className="flex items-center gap-4">
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

          {/* Status */}
          <BlurFade delay={0.25 * 5.6} inView>
            <div className="grid grid-cols-2 gap-1 mx-5 lg:flex xl:gap-1 xl:mx-0 2xl:gap-10">
              <div className="flex gap-1 items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  <Counter value={1} direction="up" />.
                  <Counter value={5} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Anos de Experiência
                </h1>
              </div>
              <div className="flex gap-1 items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  0<Counter value={9} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Projetos Realizados
                </h1>
              </div>
              <div className="flex gap-1 items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  +<Counter value={20} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Repositórios GitHub
                </h1>
              </div>
              <div className="flex gap-1 items-end">
                <div className="text-4xl xl:text-5xl 2xl:text-7xl font-semibold text-indigo-500">
                  +<Counter value={130} direction="up" />
                </div>
                <h1 className="text-xs lg:text-sm xl:text-sm 2xl:text-lg w-20 font-semibold text-zinc-400">
                  Commits Feitos
                </h1>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Imagem Mobile */}
        <div className="flex mt-32 w-[350px] md:hidden">
          <BlurFade delay={0.25 * 5.7} inView>
            <Image src={Code} alt="code" className="img" />
          </BlurFade>
        </div>
      </div>
    </div>
  );
};
