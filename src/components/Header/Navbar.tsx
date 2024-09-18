import Logo from "/public/logo1.png";
import Image from "next/image";

export const NavBar = () => {
  return (
    <header className="flex justify-center items-center m-12 rounded-full w-auto h-20 ">
      <div className="flex justify-center items-center">
        <Image
          src={Logo}
          alt="Logo"
          className="gap-1 mt-3 animate-none"
          width={200}
        />
      </div>

      <nav className="nav hidden md:block">
        <ul className="flex gap-3 text-center items-center rounded-full text-zinc-400">
          <li className="nav-link">
            <a href="#about-me">About me</a>
          </li>
          <li className="nav-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link">
            <a
              href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
