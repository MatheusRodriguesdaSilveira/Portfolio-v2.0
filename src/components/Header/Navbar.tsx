import { ChartNoAxesCombined, Linkedin, User } from "lucide-react";

interface NavBarProps {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
}

export const NavBar = ({ scrollToAbout, scrollToProjects }: NavBarProps) => {
  return (
    <header className="flex justify-between items-center rounded-full w-auto font-semibold m-28">
      <div className="flex justify-center items-center text-4xl cursor-context-menu hover:scale-105 duration-300">
        <span className="text-white">{"<"}</span>
        <span className="text-white">M</span>
        <span className="text-indigo-600 ">atheusR</span>
        <span className="text-white">{"/>"}</span>
      </div>

      <nav className="nav hidden md:block">
        <ul className="flex gap-3 text-center items-center rounded-full text-zinc-400">
          <li className="nav-link">
            <a className="cursor-pointer flex gap-1" onClick={scrollToAbout}>
              About me
              <User className="size-5" />
            </a>{" "}
          </li>
          <li className="nav-link">
            <a className="cursor-pointer flex gap-1" onClick={scrollToProjects}>
              Projects
              <ChartNoAxesCombined className="size-5" />
            </a>{" "}
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
  );
};
