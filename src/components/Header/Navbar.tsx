import React, { useEffect, useState } from "react";
import {
  AlignJustify,
  ChartNoAxesCombined,
  Linkedin,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

interface NavBarProps {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToTechs: () => void;
}

export const NavBar = ({
  scrollToAbout,
  scrollToProjects,
  scrollToTechs,
}: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }} // Animação de entrada
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`max-sm:hidden border border-zinc-600 ${
          scrolled ? `backdrop-blur-md` : `bg-zinc-900`
        } py-3 flex justify-between items-center rounded-full mx-32 fixed top-0 left-0 right-0 z-50 my-5 transition-all duration-500`}
      >
        <div className="px-5 font-bold items-center text-2xl cursor-context-menu">
          <span className="text-white text-xl">{"<"}</span>
          <span className="text-indigo-600">matheus</span>
          <span className="text-white">-silveira</span>
          <span className="text-white text-xl pl-0.5">{"/>"}</span>
        </div>

        <nav className="nav hidden md:block">
          <ul className="flex text-center items-center rounded-full text-zinc-400">
            {[
              {
                label: "About me",
                icon: <User className="size-5" />,
                action: scrollToAbout,
              },
              {
                label: "Skills",
                icon: <Sparkles className="size-5" />,
                action: scrollToTechs,
              },
              {
                label: "Projects",
                icon: <ChartNoAxesCombined className="size-5" />,
                action: scrollToProjects,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {index !== 0 && <div className="w-0.5 h-5 bg-zinc-500"></div>}
                <motion.li
                  whileHover={{ color: "#818cf8" }}
                  whileTap={{ scale: 0.9, opacity: 0.7 }} // Clique efeito de opacidade
                >
                  <a
                    className="flex relative gap-1 cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-200 before:transition-all before:duration-300 hover:before:w-full"
                    onClick={item.action}
                  >
                    {item.label}
                    {item.icon}
                  </a>
                </motion.li>
              </div>
            ))}
            <div className="w-0.5 h-5 bg-zinc-500"></div>

            <li>
              <motion.button
                whileHover={{
                  backgroundColor: "#6366f1",
                  boxShadow: "0px 0px 10px #6366f1",
                }}
                className="relative flex items-center px-2 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group"
              >
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-100 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
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
              </motion.button>
            </li>
          </ul>
        </nav>
      </motion.header>

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
                    scrollToTechs();
                    handleOpenMenu();
                  }}
                  className="text-white text-2xl hover:text-indigo-400 flex gap-2"
                >
                  Skills <Sparkles className="size-7" />
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
