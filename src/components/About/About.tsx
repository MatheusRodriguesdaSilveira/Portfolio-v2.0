import React, { forwardRef } from "react";
import { File, GithubIcon, Linkedin, MoveRight } from "lucide-react";
import BlurFade from "../ui/blur-fade";
import { ImageBorder } from "./components/ImageBorder";

interface AboutProps {}

export const AboutPage = forwardRef<HTMLDivElement, AboutProps>(
  (props, ref) => {
    return (
      <>
        <div className="p-5 sm:p-10 m-4 sm:m-10 xl:mx-0 xl:my-0 2xl:mx-20 2xl:mb-32 max-sm:flex flex-col items-center">
          <BlurFade delay={0.25 * 2} inView>
            <div className="text-center mb-10 xl:mb-1 2xl:mb-10 xl:mt-28 2xl:mt-24">
              <h2 className="text-zinc-300 text-3xl xl:text-4xl 2xl:text-5xl">
                About <span className=" text-yellow-300">me.</span>
              </h2>
            </div>
          </BlurFade>

          <div className="flex flex-col lg:flex-row items-center">
            <BlurFade delay={0.25 * 5} inView>
              <ImageBorder />
            </BlurFade>

            <div className="text-center lg:text-left max-sm:m-5">
              <BlurFade delay={0.25 * 3.5} inView>
                <div className="2xl:text-4xl xl:text-3xl max-sm:text-3xl text-zinc-100 2xl:mb-3 xl:mb-2 max-sm:m-10 text-nowrap">
                  <div className="text-yellow-300 font-semibold block">
                    <span className="text-white font-thin">{"<"}</span>
                    Hello!
                  </div>{" "}
                  I'm Matheus Rodrigues
                  <span className="text-white">{" />"}</span>
                </div>
              </BlurFade>
              <BlurFade delay={0.25 * 4.5} inView>
                <p className="text-zinc-200 max-sm:m-10 mb-5 text-base xl:text-sm 2xl:text-base">
                  Sou estudante de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    Análise e Desenvolvimento de Sistemas
                  </span>
                  , com mais de um ano de experiência em{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    desenvolvimento frontend
                  </span>{" "}
                  e criação de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    APIs
                  </span>
                  . Tenho sólidos conhecimentos em{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    HTML, CSS, Tailwind, JavaScript, React
                  </span>
                  , além de experiência com{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    Node.js
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    Prisma
                  </span>{" "}
                  para desenvolvimento de APIs robustas e eficientes. Já
                  participei de diversos projetos completos, desde a criação de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    interfaces intuitivas
                  </span>{" "}
                  até a {""}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    implementação de backends
                  </span>{" "}
                  escaláveis. Estou em busca de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    oportunidades
                  </span>{" "}
                  para aplicar e expandir minhas{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    habilidades
                  </span>{" "}
                  em{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    programação
                  </span>{" "}
                  em um ambiente{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    colaborativo
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    inovador
                  </span>
                  .
                </p>
                <p className="text-zinc-200 max-sm:m-10 mb-5 text-base xl:text-sm 2xl:text-base">
                  Tenho um{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    interesse
                  </span>{" "}
                  genuíno em atuar tanto no{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    frontend
                  </span>{" "}
                  quanto no{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    backend
                  </span>
                  , com o objetivo de{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    contribuir
                  </span>{" "}
                  de forma{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    abrangente
                  </span>{" "}
                  para o{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    desenvolvimento de sistemas funcionais e escaláveis
                  </span>
                  . Estou{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    motivado
                  </span>{" "}
                  a integrar uma equipe onde possa{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    não apenas
                  </span>{" "}
                  aplicar meus conhecimentos, mas também{" "}
                  <span className="font-semibold underline-offset-2 decoration-2 underline max-sm:decoration-1 text-white decoration-yellow-300">
                    aprender e colaborar para o crescimento mútuo
                  </span>
                  .
                </p>
              </BlurFade>
              <div className="flex items-center gap-3 max-sm:mb-10 max-sm:justify-center max-lg:justify-center">
                <BlurFade delay={0.25 * 5.5} inView>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 text-white focus:ring-4 focus:outline-none duration-300">
                    <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-zinc-900 rounded-full group-hover:bg-opacity-0 group-hover:text-zinc-950">
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
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 text-white focus:ring-4 focus:outline-none duration-300">
                    <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-zinc-900 rounded-full group-hover:bg-opacity-0 group-hover:text-zinc-950">
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
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-400 text-white focus:ring-4 focus:outline-none duration-300">
                    <span className="group/button relative inline-flex px-[26px] py-[26px] h-[54px] w-[54px] md:h-[50px] md:w-[50px] lg:h-10 lg:w-10 items-center justify-center overflow-hidden ease-in bg-zinc-900 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white transition-all hover:w-[175px]  group-hover:text-zinc-950">
                      <span className="justify-center items-center flex">
                        <a
                          href="/CV MatheusSilveiraFullStack.pdf"
                          download="CV MatheusSilveiraFullStack.pdf"
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
      </>
    );
  }
);

AboutPage.displayName = "About";

export default AboutPage;
