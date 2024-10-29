import React, { forwardRef } from "react";
import Image from "next/image";
import Me from "/public/minhafoto.png";
import { File, GithubIcon, Linkedin, MoveRight } from "lucide-react";
import BlurFade from "../ui/blur-fade";
import { ActionsGrid } from "./components/Techs";

interface AboutProps {
  // Props, se necessárias
}

export const AboutPage = forwardRef<HTMLDivElement, AboutProps>(
  (props, ref) => {
    return (
      <>
        <div className="p-4 sm:p-10 m-4 sm:m-10 max-sm:flex flex-col items-center">
          <BlurFade delay={0.25 * 2} inView>
            <div className="text-center mb-5">
              <h2 className="text-zinc-300 text-3xl md:text-5xl ">
                About <span className=" text-indigo-600">me.</span>
              </h2>
            </div>
          </BlurFade>

          <div className="flex flex-col lg:flex-row items-center">
            <BlurFade delay={0.25 * 5} inView>
              <div className="mx-12 p-10 xl:my-20 xl:p-5">
                <Image
                  src={Me}
                  alt="Me"
                  className=" p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 brightness-90 shadow-2xl shadow-indigo-500/50"
                  width={1200}
                />
              </div>
            </BlurFade>

            <div className="txt-about-me text-center lg:text-left max-sm:m-5">
              <BlurFade delay={0.25 * 3.5} inView>
                <h2 className="text-4xl max-sm:text-3xl text-zinc-100 mb-8 max-sm:m-10 text-nowrap">
                  <span className="text-indigo-600 font-semibold block">
                    <span className="text-white">{"<"}</span>
                    Hello!
                  </span>{" "}
                  I'm Matheus Rodrigues
                  <span className="text-white">{" />"}</span>
                </h2>
              </BlurFade>
              <BlurFade delay={0.25 * 4.5} inView>
                <p className="text-zinc-200 max-sm:m-10 mb-5">
                  Sou estudante de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    Análise e Desenvolvimento de Sistemas
                  </span>
                  , com mais de um ano de experiência em{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    desenvolvimento frontend
                  </span>{" "}
                  e criação de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    APIs
                  </span>
                  . Tenho sólidos conhecimentos em{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    HTML, CSS, Tailwind, JavaScript, React
                  </span>
                  , além de experiência com{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    Node.js
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    Prisma
                  </span>{" "}
                  para desenvolvimento de APIs robustas e eficientes. Já
                  participei de diversos projetos completos, desde a criação de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    interfaces intuitivas
                  </span>{" "}
                  até a {""}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    implementação de backends
                  </span>{" "}
                  escaláveis. Estou em busca de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    oportunidades
                  </span>{" "}
                  para aplicar e expandir minhas{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    habilidades
                  </span>{" "}
                  em{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    programação
                  </span>{" "}
                  em um ambiente{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    colaborativo
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-indigo-600">
                    inovador
                  </span>
                  .
                </p>
              </BlurFade>
              <div className="flex items-center gap-3 max-sm:mb-10 max-sm:justify-center max-lg:justify-center">
                <BlurFade delay={0.25 * 5.5} inView>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 text-white focus:ring-4 focus:outline-none duration-300">
                    <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0">
                      <a
                        href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                        target="_blank"
                      >
                        <Linkedin />
                      </a>
                    </span>
                  </button>
                </BlurFade>
                <BlurFade delay={0.25 * 6.5} inView>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 text-white focus:ring-4 focus:outline-none duration-300">
                    <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0">
                      <a
                        href="https://github.com/MatheusRodriguesdaSilveira"
                        target="_blank"
                      >
                        <GithubIcon />
                      </a>
                    </span>
                  </button>
                </BlurFade>
                <BlurFade delay={0.25 * 7.5} inView>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-indigo-400 to-blue-900 text-white focus:ring-4 focus:outline-none duration-300">
                    <span className="group/button relative inline-flex px-[26px] py-[26px] h-[54px] w-[54px] md:h-[50px] md:w-[50px] lg:h-10 lg:w-10 items-center justify-center overflow-hidden ease-in bg-gray-950 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white transition-all hover:w-[175px]">
                      <span className="justify-center items-center flex">
                        <a
                          href="/CV-MatheusRodrigues.pdf"
                          download="CV-MatheusRodrigues.pdf"
                          target="_blank"
                          className="flex gap-2 items-center whitespace-nowrap text-sm opacity-0 transition-all duration-150 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100"
                        >
                          Meu currículo
                          <File className="size-5 mb-1 mr-2" />
                        </a>
                        <div className="absolute right-4 lg:right-5 xl:right-3">
                          <MoveRight className="size-6" />
                        </div>
                      </span>
                    </span>
                  </button>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
        <BlurFade delay={0.25 * 1.5} inView>
          <ActionsGrid />
        </BlurFade>
      </>
    );
  }
);

AboutPage.displayName = "About";
export default AboutPage;
