import React, { forwardRef } from "react";
import Image from "next/image";
import Me from "/public/minhafoto.png";
import { File, GithubIcon, Linkedin, MoveRight } from "lucide-react";

interface AboutProps {
  // Props, se necessárias
}

export const AboutPage = forwardRef<HTMLDivElement, AboutProps>(
  (props, ref) => {
    return (
      <>
        <div className="p-4 sm:p-10 m-4 sm:m-10 max-sm:flex flex-col items-center">
          <div className="text-center mb-5">
            <h2 className="text-zinc-300 text-3xl md:text-5xl ">
              About <span className=" text-indigo-600">me.</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="mx-12 p-10">
              <Image
                src={Me}
                alt="Me"
                className=" p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 brightness-90 shadow-2xl shadow-indigo-500/50"
                width={850}
              />
            </div>

            <div className="txt-about-me text-center lg:text-left max-sm:m-5">
              <h2 className="text-4xl max-sm:text-3xl text-zinc-100 mb-8 max-sm:m-10 text-nowrap">
                <span className="text-indigo-600 font-semibold block">
                  <span className="text-white">{"<"}</span>
                  Hello!
                </span>{" "}
                I'm Matheus Rodrigues
                <span className="text-white">{"/>"}</span>
              </h2>

              <p className="text-zinc-200 max-sm:m-10 mb-5">
                Sou estudante de Análise e Desenvolvimento de Sistemas e estou à
                procura de oportunidades na área da Tecnologia. Meu foco é
                colocar minhas habilidades técnicas em prática, buscando
                aprimorá-las em um ambiente colaborativo e inovador. Estou
                empenhado em desenvolver minhas habilidades profissionais e
                contribuir de forma significativa para o sucesso da equipe e dos
                projetos da empresa 👨🏻‍💻.
              </p>

              <div className="flex items-center gap-3 max-sm:mb-10 max-sm:justify-center max-lg:justify-center">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                  <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0">
                    <a
                      href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                      target="_blank"
                    >
                      <Linkedin />
                    </a>
                  </span>
                </button>

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                  <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0">
                    <a
                      href="https://github.com/MatheusRodriguesdaSilveira"
                      target="_blank"
                    >
                      <GithubIcon />
                    </a>
                  </span>
                </button>

                <div className="flex justify-center items-center rounded-full p-0.5 mb-1 max-sm:mb-1.5 max-sm:justify-center bg-gradient-to-br from-indigo-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                  <button className="group/button relative inline-flex h-[54px] w-[54px] px-4 py-3.5 md:h-[50px] md:w-[50px] lg:h-10 lg:w-10 xl:h-12 xl:w-12 items-center justify-center overflow-hidden ease-in bg-gray-950 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white transition-all hover:w-[175px]">
                    <span className="justify-center items-center flex">
                      <p className="flex gap-1 whitespace-nowrap text-sm opacity-0 transition-all duration-150 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                        <a
                          href="/CV-MatheusRodrigues.pdf"
                          download="CV-MatheusRodrigues.pdf"
                          target="_blank"
                        >
                          Meu currículo
                        </a>
                        <File className="size-4 mb-1" />
                      </p>
                      <div className="absolute right-4 lg:right-2 xl:right-3.5">
                        <MoveRight className="size-5" />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

AboutPage.displayName = "About";
export default AboutPage;
