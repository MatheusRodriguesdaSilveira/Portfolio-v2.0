"use client";
import BlurFade from "@/components/ui/blur-fade";
import { VscVscode } from "react-icons/vsc";
import {
  BadgeCheck,
  CheckCircle,
  Figma,
  HandMetal,
  Rocket,
  Settings,
  Zap,
} from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaGithub,
  FaGitAlt,
  FaCss3,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiExpress,
  SiInsomnia,
  SiBeekeeperstudio,
  SiCss3,
  SiCsswizardry,
} from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";

export function ActionsGrid() {
  return (
    <div className="p-5 sm:p-10 m-4 sm:m-10 xl:mx-20 xl:my-28 2xl:mx-28 2xl:my-32 max-sm:flex flex-col items-center">
      <BlurFade delay={0.25 * 3.5} inView>
        <h2 className="text-4xl max-sm:text-3xl text-zinc-100 text-nowrap items-center justify-center flex py-10 xl:py-10 2xl:py-12">
          <span className="text-zinc-300 font-semibold block">
            <span className="text-white">{"{ "}</span>
            proficiência
            <span className="text-indigo-600">.</span>
            <span className="text-white">{" }"}</span>
          </span>
        </h2>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 xl:gap-2 2xl:gap-5 mb-20">
        {/* Front-end */}
        <BlurFade delay={0.25 * 4} inView>
          <div className="group flex flex-col gap-2 items-center border border-zinc-500 rounded-xl xl:px-24 py-10 xl:py-9 2xl:py-14 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/80 hover:-translate-y-2 duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-1 mb-5">
              <Zap className="size-7 xl:size-8 text-sky-400 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg] group-hover:scale-110" />
              <span className="text-xl md:text-3xl font-semibold text-white">
                Front-end
              </span>
            </div>
            <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 px-20 gap-5 xl:gap-4">
              <div className="flex flex-col items-center gap-1">
                <SiJavascript className="size-9 xl:size-10 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">JavaScript</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaReact className="size-9 xl:size-10 text-blue-700 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">React</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiNextdotjs className="size-9 xl:size-10 text-white transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Next.Js</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaHtml5 className="size-9 xl:size-10 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Html</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaCss3Alt className="size-9 xl:size-10 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Css</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiTailwindcss className="size-9 xl:size-10 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">TailwindCss</p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Back-end */}
        <BlurFade delay={0.25 * 5} inView>
          <div className="group flex flex-col gap-2 items-center border border-zinc-500 rounded-xl xl:px-24 py-10 xl:py-9 2xl:py-14 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/80 hover:-translate-y-2 duration-300 ease-in-out">
            <div className="flex items-center justify-center gap-1 mb-5">
              <Rocket className="size-7 xl:size-8 text-rose-700 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg] group-hover:scale-110" />
              <span className="text-xl md:text-3xl font-semibold text-white">
                Back-end
              </span>
            </div>
            <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-5 xl:gap-4">
              <div className="flex flex-col items-center gap-1">
                <SiNodedotjs className="size-9 xl:size-10 text-green-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Node.Js</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiExpress className="size-9 xl:size-10 text-lime-600 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Express</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiTypescript className="size-9 xl:size-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">TypeScript</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiPrisma className="size-9 xl:size-10 text-cyan-900 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Prisma</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <PiFileSqlBold className="size-9 xl:size-10 text-sky-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">SQL</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiPostgresql className="size-9 xl:size-10 text-sky-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">PostgreSQL</p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Other Technologies*/}
        <BlurFade delay={0.25 * 6} inView>
          <div className="group flex flex-col gap-2 items-center border border-zinc-500 rounded-xl xl:px-24 py-10 xl:py-9 2xl:py-14 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/80 hover:-translate-y-2 duration-300 ease-in-out">
            <h2 className="md:text-3xl font-semibold text-white flex items-center justify-center gap-2 mb-5">
              <Settings className="size-7 text-pink-500 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl md:text-3xl font-semibold text-white">
                Other Technologies
              </span>
            </h2>
            <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 gap-5 xl:gap-4">
              <div className="flex flex-col items-center gap-1">
                <FaGithub className="size-9 xl:size-10 text-purple-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">GitHub</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaGitAlt className="size-9 xl:size-10 text-orange-400 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Git</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Figma className="size-9 xl:size-10 text-pink-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Figma</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <VscVscode className="size-9 xl:size-10 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">VsCode</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiInsomnia className="size-9 xl:size-10 text-indigo-700 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Insomnia</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiBeekeeperstudio className="size-9 xl:size-10 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-white text-xs font-semibold">Beekeeper</p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Soft Skills*/}
        <BlurFade delay={0.25 * 7} inView>
          <div className="group flex flex-col gap-2 items-center border border-zinc-500 rounded-xl py-10 xl:px-5 xl:py-4 2xl:py-14 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/80 hover:-translate-y-2 duration-300 ease-in-out">
            <h2 className="text-lg xl:text-3xl 2xl:mb-1 font-semibold text-white flex items-center justify-center gap-1">
              <BadgeCheck className="size-6 xl:size-7 text-yellow-300 transition-transform duration-300 group-hover:rotate-12" />
              Soft Skills
            </h2>
            <div className="grid grid-flow-col grid-rows-10 md:grid-rows-3 gap-1 px-5 xl:px-0 xl:gap-0 2xl:gap-2 text-xs xl:text-sm text-white font-bold text-balance md:text-balance">
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Trabalho em equipe
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Proatividade
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Capacidade autodidata
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Organização
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Criatividade
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Versionamento de Código
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  APIs
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Estrutura de Dados
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 md:size-5 text-green-500" />
                  Lógica de Programação
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
