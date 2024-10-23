import { AtSign, GithubIcon, Linkedin } from "lucide-react";

export const IconColumn = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-3 mb-3 max-sm:flex-row max-sm:mb-10 text-white duration-300">
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=matheussilveira2005@gmail.com&body=Olá,+Matheus,+tudo+bem?"
          target="_blank"
        >
          <AtSign className="hover:text-indigo-600 size-5 max-sm:text-3xl" />
        </a>
        <a href="https://github.com/MatheusRodriguesdaSilveira" target="_blank">
          <GithubIcon className="hover:text-indigo-600 size-5 max-sm:text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
          target="_blank"
        >
          <Linkedin className="hover:text-indigo-600 size-5 max-sm:text-3xl" />
        </a>
      </div>
    </>
  );
};
