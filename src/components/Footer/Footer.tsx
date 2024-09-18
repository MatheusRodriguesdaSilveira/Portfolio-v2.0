import Image from "next/image";
import House from "/public/house-main.png";
import { GithubIcon, Linkedin, AtSign } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <div
        className="p-4 sm:p-10 m-10 sm:m-10 max-sm:flex gap flex-col items-center pc:h-screen flex"
        id="copyright"
      >
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl max-sm:text-lg mb-8 max-sm:m-12">
              <span className="text-nowrap bg-gradient-to-r from-sky-500 via-sky-300 to-sky-800 bg-clip-text text-transparent block">
                © 2024 Copyright Matheus Rodrigues
              </span>
            </h2>

            <div className="flex items-center justify-center gap-3">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                <span className="relative p-2 transition-all ease-in duration-300 bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  <a
                    href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                </span>
              </button>

              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                <span className="relative p-2 transition-all ease-in duration-300 bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  <a
                    href="https://github.com/MatheusRodriguesdaSilveira"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </span>
              </button>

              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-cyan-400 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 duration-300">
                <span className="relative p-2 transition-all ease-in duration-300 bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=matheussilveira2005@gmail.com&body=Olá,+Matheus,+tudo+bem?"
                    target="_blank"
                  >
                    <AtSign />
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
