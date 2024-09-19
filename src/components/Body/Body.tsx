import React from "react";
import Image from "next/image";
import Code from "/public/code.png";
import { AtSign, GithubIcon, Linkedin, MoveRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

interface BodyProps {
  scrollToProjects: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToProjects }) => {
  return (
    <>
      <div className="flex justify-between items-center mt-20 w-auto h-auto mx-24 px-6 py-20 max-sm:mx-10 max-sm:py-5 max-sm:flex-col">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex flex-col items-start">
            <BlurFade delay={0.25 * 1.5} inView>
              <h1 className="text-zinc-200 text-6xl font-medium max-sm:text-3xl lg:text-5xl xl:text-6xl flex gap-4 max-sm:gap-1 mb-1.5 px-1">
                FRONTEND
                <div className="flex mt-2 gap-2 max-sm:gap-0.5 max-sm:px-2 max-sm:mt-[-8px]">
                  <button
                    className="bounce-custom hover:text-blue-400 duration-300 "
                    style={{ animationDelay: "-0.3s" }}
                  >
                    <a
                      href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                      target="_blank"
                    >
                      <Linkedin className="max-sm:size-4" />
                    </a>
                  </button>
                  <button
                    className="bounce-custom hover:text-indigo-600 duration-300 "
                    style={{ animationDelay: "-0.13s" }}
                  >
                    <a
                      href="https://github.com/MatheusRodriguesdaSilveira"
                      target="_blank"
                    >
                      <GithubIcon className="max-sm:size-4" />
                    </a>
                  </button>
                  <button className="bounce-custom hover:text-red-400 duration-300 ">
                    <a
                      href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=matheussilveira2005@gmail.com&body=Olá,+Matheus,+tudo+bem?"
                      target="_blank"
                    >
                      <AtSign className="max-sm:size-4" />
                    </a>
                  </button>
                </div>
              </h1>
              <h1 className="max-sm:text-5xl mb-10 max-sm:mb-5 mt-[-20px] max-sm:mt-[-15px] bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-800 group-hover:from-cyan-800 group-hover:to-blue-900 focus:ring-4 focus:outline-none focus:ring-cyan-200 text-8xl font-bold lg:text-7xl xl:text-8xl">
                DEVELOPER
              </h1>
            </BlurFade>
          </div>
          <div>
            <BlurFade delay={0.25 * 1.2} inView>
              <p className="text-zinc-200 leading-loose text-xl mb-5 max-sm:text-sm lg:text-lg xl:text-xl">
                Olá 👋 meu nome é Matheus, tenho 19 anos e sou Desenvolvedor
                Frontend. Estou em busca de novas oportunidades na área de
                tecnologia, onde possa aplicar e expandir minhas habilidades
                técnicas, contribuindo para o desenvolvimento e sucesso dos
                projetos. Sinta-se à vontade para explorar meus trabalhos!
              </p>

              <div className="flex items-center gap-5 max-sm:gap-5 max-sm:mr-9 lg:gap-4 xl:gap-5">
                <div className="flex">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 max-sm:mb-1 overflow-hidden text-base max-sm:text-xs font-medium rounded-3xl max-sm:rounded-lg group bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300 lg:mb-1 xl:mb-2">
                    <span className="relative px-10 py-2.5 max-sm:px-3 max-sm:py-2.5 transition-all ease-in duration-300 bg-gray-900 rounded-3xl max-sm:rounded-lg group-hover:bg-opacity-0 lg:px-8 xl:px-10">
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

                <div className="flex justify-center items-center rounded-full p-0.5 mb-1 max-sm:mb-0 max-sm:justify-center bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                  <button
                    className="group/button relative inline-flex h-12 w-12 max-sm:h-9 max-sm:w-9  items-center justify-center overflow-hidden max-sm:px-2 max-sm:py-1.5 ease-in bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white transition-all hover:w-[165px] lg:h-10 lg:w-10 xl:h-12 xl:w-12"
                    onClick={scrollToProjects}
                  >
                    <span className="justify-center items-center flex">
                      <p className="inline-flex whitespace-nowrap text-sm opacity-0 transition-all duration-150 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                        See my works!
                      </p>

                      <div className="absolute right-3.5 max-sm:right-2 lg:right-2 xl:right-3.5">
                        <MoveRight className="size-5" />
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="flex w-[500px] max-sm:w-[200px] lg:w-[400px] xl:w-[500px] max-sm:mt-32">
          <BlurFade delay={0.25 * 1.6} inView>
            <Image src={Code} alt="code" className="rounded-lg" />
          </BlurFade>
        </div>
      </div>
    </>
  );
};
