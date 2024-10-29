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
      <header className="flex justify-between items-center rounded-full w-auto font-semibold xl:m-10 2xl:m-28 max-lg:hidden">
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
            <button className="nav-link hover:scale-105 duration-300 rounded-lg">
              <a
                className="cursor-pointer flex gap-1 bg-indigo-700 rounded-xl px-5 py-2 text-white"
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
              className="text-white"
            >
              <AlignJustify className="size-6" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="top-0 right-0 w-2/2 h-full transition-transform duration-300 ease-in-out md:hidden">
              <div className="flex justify-end p-4">
                <button onClick={handleOpenMenu} className="text-white">
                  <X className="size-6" />
                </button>
              </div>
              <ul className="font-medium flex flex-col p-4 border border-gray-600 rounded-lg">
                <li>
                  <a
                    className="cursor-pointer flex gap-1 py-2 hover:bg-gray-700 rounded transition"
                    onClick={() => {
                      scrollToAbout();
                      handleOpenMenu();
                    }}
                  >
                    About me
                    <User className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer flex gap-1 py-2 hover:bg-gray-700 rounded transition"
                    onClick={() => {
                      scrollToProjects();
                      handleOpenMenu();
                    }}
                  >
                    Projects
                    <ChartNoAxesCombined className="size-5" />
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer flex gap-1 py-2 hover:bg-gray-700 rounded transition"
                    href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                    <Linkedin className="size-5" />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
