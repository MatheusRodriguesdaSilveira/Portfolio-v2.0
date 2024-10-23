import { GithubIcon, Linkedin, AtSign } from "lucide-react";

export const Footer = () => {
  return (
    <div
      className="p-4 sm:p-10 m-10 sm:m-10 max-sm:flex gap flex-col items-center pc:h-screen flex"
      id="copyright"
    >
      <div className="flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl max-sm:text-lg mb-8 max-sm:m-12">
            <span className="text-nowrap bg-gradient-to-r from-purple-700 via-indigo-600 to-indigo-800 bg-clip-text text-transparent block">
              © 2024 Copyright Matheus Rodrigues
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-400 to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none duration-300">
              <span className="relative p-2 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0">
                <a
                  href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                  target="_blank"
                >
                  <Linkedin className="px-1" />
                </a>
              </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-400 to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none duration-300">
              <span className="relative p-2 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0">
                <a
                  href="https://github.com/MatheusRodriguesdaSilveira"
                  target="_blank"
                >
                  <GithubIcon className="px-1" />
                </a>
              </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-400 to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none duration-300">
              <span className="relative p-2 transition-all ease-in duration-300 bg-gray-950 rounded-full group-hover:bg-opacity-0">
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=matheussilveira2005@gmail.com&body=Olá,+Matheus,+tudo+bem?"
                  target="_blank"
                >
                  <AtSign className="px-1" />
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
