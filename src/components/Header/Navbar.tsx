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
      <header className="flex justify-between items-center rounded-full w-auto font-semibold xl:m-16 xl:mx-20 2xl:m-24 max-lg:hidden">
        <div className="flex justify-center font-bold items-center xl:text-2xl 2xl:text-4xl cursor-context-menu hover:scale-105 duration-300">
          <div className="items-center flex-col">
            <span className="text-white">{"<"}</span>
            <span className="text-indigo-600">matheus</span>
            <span className="text-white pr-1">-silveira</span>
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

            <button className="relative flex items-center px-2 overflow-hidden font-medium transition-all bg-indigo-500 rounded-lg hover:scale-105 duration-300 group">
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
              <span className="flex gap-1 items-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                <a
                  className="cursor-pointer flex gap-1 rounded-xl px-5 py-2 text-white"
                  href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                  target="_blank"
                >
                  Contact
                  <Linkedin className="size-5" />
                </a>
              </span>
            </button>
          </ul>
        </nav>
      </header>

      <header className="xl:hidden mb-10">
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex justify-center font-bold items-center text-xl cursor-context-menu m-5">
              <span className="text-white">{"<"}</span>
              <span className="text-indigo-600">matheus</span>
              <span className="text-white">-silveira</span>
              <span className="text-white pl-0.5">{"/>"}</span>
            </div>
            <button
              onClick={handleOpenMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden"
            >
              {isMenuOpen ? "" : <AlignJustify className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-zinc-950/90 flex flex-col items-center z-50">
            <ul className="font-medium text-center space-y-6 flex flex-col items-start mt-40">
              <li>
                <a
                  onClick={() => {
                    scrollToAbout();
                    handleOpenMenu();
                  }}
                  className="text-white text-2xl hover:text-indigo-400 flex gap-2"
                >
                  About me <User className="size-7" />
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToProjects();
                    handleOpenMenu();
                  }}
                  className="text-white text-2xl hover:text-indigo-400 flex gap-2"
                >
                  Projects <ChartNoAxesCombined className="size-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-indigo-400 flex gap-2"
                >
                  Contact <Linkedin className="size-7" />
                </a>
              </li>
            </ul>
            <button
              onClick={handleOpenMenu}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        )}
      </header>
    </>
  );
};
