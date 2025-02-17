import BlurFade from "@/components/ui/blur-fade";
import { AtSign, GithubIcon, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const IconColumn = () => {
  return (
    <>
      <div className="flex flex-row xl:flex-col items-center gap-3 mb-3 max-sm:flex-row max-sm:mb-5 text-white duration-300">
        <BlurFade delay={0.25 * 3.2} inView>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=matheussilveira2005@gmail.com&body=Olá,+Matheus,+tudo+bem?"
            target="_blank"
          >
            <AtSign className="hover:text-indigo-600 size-5 xl:size-4 2xl:size-5 max-sm:text-3xl duration-300 hover:scale-105" />
          </a>
        </BlurFade>
        <BlurFade delay={0.25 * 3.2} inView>
          <a
            href="https://api.whatsapp.com/send?phone=5511910346829"
            target="_blank"
          >
            <FaWhatsapp className="hover:text-indigo-600 size-5 xl:size-4 2xl:size-5 max-sm:text-3xl duration-300 hover:scale-105" />
          </a>
        </BlurFade>
        <BlurFade delay={0.25 * 4.2} inView>
          <a
            href="https://github.com/MatheusRodriguesdaSilveira"
            target="_blank"
          >
            <GithubIcon className="hover:text-indigo-600 size-5 xl:size-4 2xl:size-5 max-sm:text-3xl duration-300 hover:scale-105" />
          </a>
        </BlurFade>
        <BlurFade delay={0.25 * 5.2} inView>
          <a
            href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
            target="_blank"
          >
            <Linkedin className="hover:text-indigo-600 size-5 xl:size-4 2xl:size-5 max-sm:text-3xl duration-300 hover:scale-105" />
          </a>
        </BlurFade>
      </div>
    </>
  );
};
