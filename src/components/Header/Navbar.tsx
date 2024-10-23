import React, { useState } from "react";
import {
  AlignJustify,
  ChartNoAxesCombined,
  Linkedin,
  User,
  X,
} from "lucide-react";

interface NavBarProps {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
}

export const NavBar = ({ scrollToAbout, scrollToProjects }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center rounded-full w-auto font-semibold xl:m-28">
        <div className="max-sm:hidden flex justify-center font-bold items-center text-4xl cursor-context-menu hover:scale-105 duration-300">
          <div className="items-center flex-col">
            <span className="text-white">{"<"}</span>
            <span className="text-indigo-600">matheus</span>
            <span className="text-white pr-2">-silveira</span>
            <span className="text-white">{"/>"}</span>
          </div>
        </div>

        <nav className="nav hidden md:block">
          <ul className="flex gap-3 text-center items-center rounded-full text-zinc-400">
            <li className="nav-link">
              <a className="cursor-pointer flex gap-1" onClick={scrollToAbout}>
                About me
                <User className="size-5" />
              </a>
            </li>
            <li className="nav-link">
              <a
                className="cursor-pointer flex gap-1"
                onClick={scrollToProjects}
              >
                Projects
                <ChartNoAxesCombined className="size-5" />
              </a>
            </li>
            <button className="nav-link hover:scale-105 duration-300">
              <a
                className="cursor-pointer flex gap-1 bg-indigo-700 rounded-xl px-5 py-2"
                href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                target="_blank"
              >
                Contact
                <Linkedin className="size-5" />
              </a>
            </button>
          </ul>
        </nav>
      </header>

      <header className="m-10 h-full">
        {/* Botão para abrir menu mobile */}
        <div className="mt-10 flex justify-end text-zinc-100 px-3">
          <button onClick={handleOpenMenu}>
            <AlignJustify className="xl:hidden text-white size-6" />
          </button>
        </div>
        <div className="flex justify-center font-bold items-center text-xl cursor-context-menu">
          <div className="items-center flex-col">
            <span className="text-white">{"<"}</span>
            <span className="text-indigo-600">matheus</span>
            <span className="text-white pr-2">-silveira</span>
            <span className="text-white">{"/>"}</span>
          </div>
        </div>
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="xl:hidden mb-10 h-full fixed top-0 right-0 z-50 w-3/5 bg-zinc-950/50 ease-in-out duration-300">
            <div className="mt-10 flex justify-end text-zinc-100 px-3">
              <button onClick={handleOpenMenu}>
                <X className="text-white size-6" />
              </button>
            </div>

            <nav className="mx-4">
              <ul className="flex-col text-right items-center text-zinc-100 flex gap-3">
                <li className="nav-link">
                  <a
                    className="cursor-pointer flex gap-1"
                    onClick={() => {
                      scrollToAbout();
                      handleOpenMenu();
                    }}
                  >
                    About me
                    <User className="size-5" />
                  </a>
                </li>
                <li className="nav-link">
                  <a
                    className="cursor-pointer flex gap-1"
                    onClick={() => {
                      scrollToProjects();
                      handleOpenMenu();
                    }}
                  >
                    Projects
                    <ChartNoAxesCombined className="size-5" />
                  </a>
                </li>
                <li className="nav-link hover:scale-105 duration-300">
                  <a
                    className="cursor-pointer flex gap-1"
                    href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                    target="_blank"
                  >
                    Contact
                    <Linkedin className="size-5" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Overlay para fechar o menu clicando fora */}
        {isMenuOpen && (
          <div
            className="bg-transparent z-40 w-full h-full fixed top-0 left-0 ease-in-out duration-30"
            onClick={handleOpenMenu}
          ></div>
        )}
      </header>
    </>
  );
};
