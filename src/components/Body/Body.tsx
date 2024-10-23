import React from "react";
import Image from "next/image";
import Code from "/public/code.png";
import { Linkedin, MoveRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { IconColumn } from "./components/IconColumn";

interface BodyProps {
  scrollToProjects: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToProjects }) => {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center h-auto mx-5 xl:px-14 2xl:m-12 2xl:p-20 max-sm:mx-20">
        <IconColumn />
        <div className="flex flex-col gap-5 xl:px-10 2xl:px-12 2xl:mb-10 max-sm:gap-3 max-sm:mt-4">
          <div className="flex flex-col items-start">
            <BlurFade delay={0.25 * 2.5} inView>
              <div className="text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl max-sm:text-3xl">
                <h1 className="text-indigo-600 font-semibold">Olá, sou</h1>
                <div className="text-white font-bold xl:-translate-x-9 2xl:-translate-x-12">
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
                <p className="text-zinc-200 text-left leading-loose mb-4 text-sm lg:text-lg xl:text-base 2xl:text-lg max-sm:text-xs max-sm:leading-relaxed max-sm:text-left">
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
                    <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 text-white duration-300">
                      <a
                        href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                        target="_blank"
                        className="flex text-nowrap relative xl:px-10 xl:py-3.5 px-6 py-2.5 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0"
                      >
                        My Contact
                      </a>
                    </button>
                  </div>
                  <div className="flex">
                    <button
                      onClick={scrollToProjects}
                      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 text-white duration-300"
                    >
                      <span className="group/button relative inline-flex h-10 w-10 xl:px-[26px] xl:py-[26px] md:h-[50px] md:w-[50px] lg:h-10 lg:w-10 items-center justify-center overflow-hidden ease-in bg-gray-950 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white transition-all hover:w-[135px]">
                        <span className="justify-center items-center flex">
                          <a className="flex gap-2 items-center whitespace-nowrap text-sm opacity-0 transition-all duration-150 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                            See my works!
                          </a>
                          <div className="absolute right-2.5 lg:right-5 xl:right-3">
                            <MoveRight className="size-5 xl:size-6" />
                          </div>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="flex mt-32 w-[250px] md:w-[400px] xl:w-[2000px] xl:mt-5 2xl:w-screen 2xl:mt-3">
          <BlurFade delay={0.25 * 3.2} inView>
            <Image src={Code} alt="code" className="img rounded-lg" />
          </BlurFade>
        </div>
      </div>
    </>
  );
};
