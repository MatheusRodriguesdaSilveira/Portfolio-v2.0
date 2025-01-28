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
import { FaReact, FaHtml5, FaGithub, FaGitAlt } from "react-icons/fa";
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
} from "react-icons/si";

export function ActionsGrid() {
  return (
    <div className="p-5 sm:p-10 m-4 sm:m-10 xl:mx-20 xl:my-28 2xl:mx-28 2xl:my-28 max-sm:flex flex-col items-center">
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
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mb-20">
        {/* Front-end */}
        <BlurFade delay={0.25 * 4} inView>
          <h2 className="md:text-3xl font-semibold text-white flex items-center justify-center gap-2 mb-5">
            <Zap className="size-8 text-sky-400" /> Front-end
          </h2>
          <div className="flex flex-col gap-2 items-center border border-zinc-500 rounded-xl px-24 py-10 xl:py-14 2xl:py-14 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/70 duration-500">
            <div className="flex gap-5">
              <div className="flex flex-col items-center gap-1">
                <SiJavascript className="size-10 text-yellow-500" />
                <p className="text-white text-xs font-semibold">JavaScript</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaReact className="size-10 text-blue-700" />
                <p className="text-white text-xs font-semibold">React</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiNextdotjs className="size-10 text-white" />
                <p className="text-white text-xs font-semibold">Next.Js</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaHtml5 className="size-10 text-orange-500" />
                <p className="text-white text-xs font-semibold">Html</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiTailwindcss className="size-10 text-sky-400" />
                <p className="text-white text-xs font-semibold">TailwindCss</p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Back-end */}
        <BlurFade delay={0.25 * 5} inView>
          <h2 className="md:text-3xl font-semibold text-white flex items-center justify-center gap-2 mb-5">
            <Rocket className="size-8 text-rose-700" /> Back-end
          </h2>
          <div className="flex flex-col gap-2 items-center border border-zinc-500 rounded-xl px-24 py-10 xl:py-14 2xl:py-14 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/70 duration-500">
            <div className="flex gap-5">
              <div className="flex flex-col items-center gap-1">
                <SiNodedotjs className="size-10 text-green-500" />
                <p className="text-white text-xs font-semibold">Node.Js</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiExpress className="size-10 text-lime-600" />
                <p className="text-white text-xs font-semibold">Express</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiTypescript className="size-10 text-blue-600" />
                <p className="text-white text-xs font-semibold">TypeScript</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiPrisma className="size-10 text-cyan-900" />
                <p className="text-white text-xs font-semibold">Prisma</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiPostgresql className="size-10 text-sky-500" />
                <p className="text-white text-xs font-semibold">PostgreSQL</p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Other Technologies*/}
        <BlurFade delay={0.25 * 6} inView>
          <h2 className="md:text-3xl font-semibold text-white flex items-center justify-center gap-2 mb-5">
            <Settings className="size-7 text-pink-500" /> Other Technologies
          </h2>
          <div className="flex flex-col gap-2 items-center border border-zinc-500 rounded-xl px-24 py-10 xl:py-14 2xl:py-14 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/70 duration-500">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <FaGithub className="size-10 text-purple-500" />
                <p className="text-white text-xs font-semibold">GitHub</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <FaGitAlt className="size-10 text-orange-400" />
                <p className="text-white text-xs font-semibold">Git</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Figma className="size-10 text-pink-500" />
                <p className="text-white text-xs font-semibold">Figma</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <VscVscode className="size-10 text-blue-500" />
                <p className="text-white text-xs font-semibold">VsCode</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiInsomnia className="size-10 text-indigo-700" />
                <p className="text-white text-xs font-semibold">Insomnia</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <SiBeekeeperstudio className="size-10 text-yellow-300" />
                <p className="text-white text-xs font-semibold">Beekeeper</p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Soft Skills*/}
        <BlurFade delay={0.25 * 7} inView>
          <h2 className="md:text-3xl font-semibold text-white flex items-center justify-center gap-2 mb-5">
            <BadgeCheck className="sm:size-5 md:size-7 text-yellow-300" />
            Soft Skills
          </h2>
          <div className="flex flex-col gap-2 items-center border border-zinc-500 rounded-xl px-24 py-10 xl:px-3 xl:py-4 2xl:py-10 shadow-lg shadow-indigo-500/40 hover:scale-95 hover:shadow-indigo-500/70 duration-700">
            <div className="grid grid-flow-col grid-rows-3 gap-2 xl:px-0 xl:gap-3 2xl:gap-4 text-xs xl:text-sm text-white font-bold">
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  Trabalho em equipe
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  Proatividade
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  Capacidade autodidata
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  Organização
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  Criatividade
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  Versionamento de Código
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  APIs
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
                  Estrutura de Dados
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="flex gap-1">
                  <CheckCircle className="size-4 text-green-500" />
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
