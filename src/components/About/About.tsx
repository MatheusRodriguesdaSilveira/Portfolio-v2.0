import Image from "next/image";
import Me from "/public/minhafoto.png";
import { File, GithubIcon, Linkedin, MoveRight } from "lucide-react";

export const Step = () => {
  return (
    <>
      <div className="p-4 sm:p-10 m-4 sm:m-10 max-sm:flex flex-col items-center">
        <div className="text-center mb-5">
          <h2 className="text-zinc-400 text-3xl md:text-5xl ">
            About{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-400 to-sky-800 bg-clip-text text-transparent">
              me.
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="m-10 p-8">
            <Image
              src={Me}
              alt="Me"
              className="brightness-90 rounded-3xl max-w-sm max-sm:max-w-[300px] animate-none"
            />
          </div>

          <div className="txt-about-me text-center lg:text-left max-sm:m-5">
            <h2 className="text-4xl max-sm:text-3xl text-zinc-400 mb-8 max-sm:m-10 text-nowrap">
              <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-800 bg-clip-text text-transparent block">
                Hello!
              </span>{" "}
              I'm Matheus Rodrigues
            </h2>

            <p className="text-zinc-400 max-sm:m-10 mb-5">
              Sou estudante de Análise e Desenvolvimento de Sistemas e estou à
              procura de oportunidades na área da Tecnologia. Meu foco é colocar
              minhas habilidades técnicas em prática, buscando aprimorá-las em
              um ambiente colaborativo e inovador. Estou empenhado em
              desenvolver minhas habilidades profissionais e contribuir de forma
              significativa para o sucesso da equipe e dos projetos da
              empresa.👨🏻‍💻.
            </p>

            <div className="flex items-center gap-3 max-sm:mb-10 max-sm:justify-center max-lg:justify-center">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  <a
                    href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                </span>
              </button>

              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                <span className="relative px-4 py-3.5 transition-all ease-in duration-300 bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  <a
                    href="https://github.com/MatheusRodriguesdaSilveira"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </span>
              </button>

              <div className="flex justify-center items-center rounded-full p-0.5 mb-1 max-sm:mb-1.5 max-sm:justify-center bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                <button className="group/button relative inline-flex max-sm:h-[54px] max-sm:w-[54px] max-sm:px-4 max-sm:py-3.5 lg:h-10 lg:w-10 xl:h-12 xl:w-12 items-center justify-center overflow-hidden ease-in bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-150 font-medium text-white transition-all hover:w-[175px]">
                  <span className="justify-center items-center flex">
                    <p className="flex gap-1 whitespace-nowrap text-sm opacity-0 transition-all duration-150 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                      <a href="/.pdf" download="CV-Matheus.pdf" target="_blank">
                        Link to my CV
                      </a>
                      <File className="size-4 mb-1" />
                    </p>
                    <div className="absolute right-3.5 max-sm:right-4 lg:right-2 xl:right-3.5">
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
};
