import React from "react";
import Image from "next/image";
import Code from "/public/code.png";
import { MoveRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { IconColumn } from "./components/IconColumn";

interface BodyProps {
  scrollToProjects: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToProjects }) => {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center h-auto mx-5 xl:m-12 xl:p-20 max-sm:mx-20">
        <IconColumn />
        <div className="flex flex-col gap-5 xl:px-12 xl:mb-10 max-sm:gap-3 max-sm:mt-4">
          <div className="flex flex-col items-start">
            <BlurFade delay={0.25 * 2.5} inView>
              <div className="text-4xl lg:text-6xl xl:text-7xl max-sm:text-2xl">
                <h1 className="text-indigo-600 font-semibold">Olá, sou</h1>
                <div className="text-white font-bold xl:-translate-x-12">
                  <span className="text-white">{"<"}</span>
                  <span>Desenvolvedor</span>{" "}
                  <span className="text-indigo-600">FullStack</span>{" "}
                  <span className="text-white">{"/>"}</span>
                </div>
              </div>
            </BlurFade>
          </div>

          <div className="xl:pr-[150px]  mb-12 max-sm:mb-6">
            <BlurFade delay={0.25 * 2.6} inView>
              <div className="flex items-center max-sm:flex-col">
                <p className="text-zinc-200 text-left leading-loose mb-4 text-sm lg:text-lg max-sm:text-xs max-sm:leading-relaxed max-sm:text-left">
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
              </div>
            </BlurFade>

            <BlurFade delay={0.25 * 3.2} inView>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-5 max-sm:gap-5 max-sm:mr-9 lg:gap-4 xl:gap-5">
                  <div className="flex">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 max-sm:mb-1 overflow-hidden text-base max-sm:text-xs font-medium rounded-3xl max-sm:rounded-lg group bg-gradient-to-br from-purple-400 to-indigo-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300 lg:mb-1 xl:mb-2">
                      <span className="relative px-10 py-2.5 max-sm:px-3 max-sm:py-2.5 transition-all ease-in duration-300 bg-gray-950 rounded-3xl max-sm:rounded-lg group-hover:bg-opacity-0 lg:px-8 xl:px-10">
                        <a
                          href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                          target="_blank"
                          className="m-1 text-nowrap"
                        >
                          My Contact
                        </a>
                      </span>
                    </button>
                  </div>

                  <div className="flex justify-center items-center rounded-full p-0.5 mb-1 max-sm:mb-0 max-sm:justify-center bg-gradient-to-br from-purple-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                    <button
                      className="group/button relative inline-flex h-10 w-10 items-center justify-center overflow-hidden px-2 py-1.5 ease-in bg-gray-950 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white transition-all hover:w-[140px] lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                      onClick={scrollToProjects}
                    >
                      <span className="justify-center items-center flex">
                        <p className="inline-flex whitespace-nowrap text-sm opacity-0 transition-all duration-150 group-hover/button:-translate-x-3 group-hover/button:opacity-100">
                          See my works!
                        </p>

                        <div className="absolute right-2 lg:right-2 xl:right-3.5">
                          <MoveRight className="size-5" />
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="flex mt-32 w-[250px] md:w-[400px] xl:w-screen xl:mt-3">
          <BlurFade delay={0.25 * 3.2} inView>
            <Image src={Code} alt="code" className="img rounded-lg" />
          </BlurFade>
        </div>
      </div>
    </>
  );
};
