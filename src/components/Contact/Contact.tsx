import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";
import BlurFade from "../ui/blur-fade";
import { CircleUser } from "lucide-react";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_v6fo0xz",
          "template_wfs56lk",
          form.current!,
          "9-ZvQjrAuHrx21zdA"
        )
        .then(
          () => {
            console.log("Email enviado com sucesso!");
            setShowToast(true); // Mostra o toast
            form.current?.reset(); // Limpa o formulário

            // Oculta o toast após 3 segundos
            setTimeout(() => setShowToast(false), 3000);
          },
          (error) => {
            console.error("Falha ao enviar o e-mail:", error);
          }
        );
    }
  };

  return (
    <BlurFade delay={0.25 * 5} inView>
      <div className="h-auto xl:min-h-screen flex items-center justify-center m-10">
        <div className="border border-yellow-300 p-10 rounded-3xl shadow-yellow-700/50 shadow-2xl max-w-md xl:max-w-xl xl:h-[500px] 2xl:h-[600px] w-full">
          <div className="text-center 2xl:mb-12 xl:mb-0 ">
            <div className="flex items-center gap-1 justify-center">
              <CircleUser className="text-yellow-300 size-6 xl:size-12" />
              <h2 className="text-zinc-300 text-2xl md:text-5xl">
                Contact <span className="text-yellow-400">me.</span>
              </h2>
            </div>
          </div>

          {/* Toast de sucesso */}
          {showToast && (
            <div className="bg-green-500 text-white px-4 py-2 rounded-md mb-4 text-center">
              E-mail enviado com sucesso!
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-yellow-300">
                Nome
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 p-2 w-full text-white bg-transparent border border-yellow-400 rounded-md focus:ring-yellow-300 focus:border-yellow-300"
                placeholder="Deixe seu nome aqui..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 p-2 w-full text-white bg-transparent border border-yellow-400 rounded-md focus:ring-yellow-300 focus:border-yellow-300"
                placeholder="Insira o seu email aqui.."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-300">
                Mensagem
              </label>
              <textarea
                name="message"
                className="h-[100px] xl:h-[90px] 2xl:h-[120px] mt-1 p-2 w-full text-white bg-transparent border border-yellow-400 rounded-md focus:ring-yellow-300 focus:border-yellow-300"
                placeholder="Como posso te ajudar?"
              ></textarea>
            </div>
            <div className="justify-center items-center flex">
              <Button />
            </div>
          </form>

          <div className="xl:mt-2 2xl:mt-6 mt-5 text-center">
            <p className="text-sm text-gray-600">Outros</p>
            <div className="flex justify-center space-x-4 2xl:mt-2 xl:mt-0 mt-2">
              <a
                href="https://www.linkedin.com/in/matheus-rodrigues-da-silveira/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:scale-110 duration-500"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/MatheusRodriguesdaSilveira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:scale-110 duration-500"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default ContactPage;
