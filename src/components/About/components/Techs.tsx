"use client";

import BlurFade from "@/components/ui/blur-fade";
import { VscVscode } from "react-icons/vsc";
import { BadgeCheck, Figma, Rocket, Settings, Zap } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaGithub,
  FaGitAlt,
  FaCss3Alt,
  FaDocker,
  FaUsers,
  FaBolt,
  FaGraduationCap,
  FaCalendarCheck,
  FaPaintBrush,
  FaCodeBranch,
  FaServer,
  FaDatabase,
  FaBrain,
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
  SiRedis,
  SiZod,
  SiSwagger,
  SiJest,
  SiFastify,
  SiVercel,
} from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";
import SpotlightCard from "@/components/ui/SpotlightCard ";

export function ActionsGrid() {
  return (
    <div className="p-5 sm:p-10 m-4 sm:m-10 xl:mx-20 xl:my-28 2xl:mx-28 2xl:my-32 max-sm:flex flex-col items-center">
      <BlurFade delay={0.25 * 3.5} inView>
        <h2 className="text-4xl max-sm:text-3xl text-zinc-100 text-nowrap items-center justify-center flex py-10 xl:py-10 2xl:py-12">
          <span className="text-zinc-300 font-semibold block">
            <span className="text-white">{"{ "}</span>
            proficiência
            <span className="text-yellow-300">.</span>
            <span className="text-white">{" }"}</span>
          </span>
        </h2>
      </BlurFade>
      <div className="grid md:grid-cols-2 items-center justify-center gap-5 xl:gap-2 2xl:gap-2 mb-20">
        {/* Front-end */}
        <BlurFade delay={0.25 * 4} inView>
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
            <div className="group flex flex-col gap-2 items-center rounded-xl xl:px-24 py-10 xl:py-10 2xl:py-14 hover:-translate-y-2 duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-1 mb-5">
                <Zap className="size-7 xl:size-8 text-sky-400 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg] group-hover:scale-110" />
                <span className="text-xl md:text-3xl font-semibold text-white">
                  Front-end
                </span>
              </div>
              <div className="grid grid-flow-col grid-rows-2 md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 2xl:grid-rows-1 px-5 gap-3 xl:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <SiJavascript className="size-7 xl:size-10 text-yellow-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">JavaScript</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaReact className="size-7 xl:size-10 text-blue-700 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">React</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiNextdotjs className="size-7 xl:size-10 text-white transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Next.Js</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaHtml5 className="size-7 xl:size-10 text-orange-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Html</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaCss3Alt className="size-7 xl:size-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Css</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiTailwindcss className="size-7 xl:size-10 text-sky-400 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">
                    TailwindCss
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </BlurFade>

        {/* Back-end */}
        <BlurFade delay={0.25 * 5} inView>
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
            <div className="group flex flex-col gap-2 items-center rounded-xl xl:px-24 py-10 xl:py-10 2xl:py-14 hover:-translate-y-2 duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-1 mb-5">
                <Rocket className="size-7 xl:size-8 text-rose-700 transition-transform duration-300 ease-in-out group-hover:rotate-[20deg] group-hover:scale-110" />
                <span className="text-xl md:text-3xl font-semibold text-white">
                  Back-end
                </span>
              </div>
              <div className="grid grid-flow-col grid-rows-2 md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 2xl:grid-rows-1 px-5 gap-3 xl:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <SiNodedotjs className="size-7 xl:size-10 text-green-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Node.Js</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiExpress className="size-7 xl:size-10 text-green-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Express</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiSwagger className="size-7 xl:size-10 text-lime-600 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Swagger</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiTypescript className="size-7 xl:size-10 text-blue-600 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">TypeScript</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiJest className="size-7 xl:size-10 text-red-600 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Jest</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiRedis className="size-7 xl:size-10 text-red-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Redis</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiFastify className="size-7 xl:size-10 text-zinc-950 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Fastify</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiZod className="size-7 xl:size-10 text-sky-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Zod</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiPrisma className="size-7 xl:size-10 text-cyan-900 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Prisma</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <PiFileSqlBold className="size-7 xl:size-10 text-sky-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">SQL</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiPostgresql className="size-7 xl:size-10 text-sky-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">PostgreSQL</p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </BlurFade>

        {/* Other Technologies*/}
        <BlurFade delay={0.25 * 6} inView>
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
            <div className="group flex flex-col gap-2 items-center rounded-xl xl:px-24 py-10 xl:py-10 2xl:py-14 hover:-translate-y-2 duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-1 mb-5">
                <h2 className="md:text-3xl font-semibold text-white flex items-center justify-center gap-2 mb-5">
                  <Settings className="size-7 text-pink-500 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-xl md:text-3xl font-semibold text-white">
                    Other Technologies
                  </span>
                </h2>
              </div>
              <div className="grid grid-flow-col grid-rows-2 md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 2xl:grid-rows-1 px-5 gap-3 xl:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <FaGithub className="size-7 xl:size-10 text-purple-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">GitHub</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaGitAlt className="size-7 xl:size-10 text-orange-400 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Git</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Figma className="size-7 xl:size-10 text-pink-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Figma</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <VscVscode className="size-7 xl:size-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">VsCode</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiInsomnia className="size-7 xl:size-10 text-indigo-700 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Insomnia</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiBeekeeperstudio className="size-7 xl:size-10 text-yellow-300 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Beekeeper</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaDocker className="size-7 xl:size-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Docker</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <SiVercel className="size-7 xl:size-10 text-zinc-200 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Vercel</p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </BlurFade>

        {/* Soft Skills*/}
        <BlurFade delay={0.25 * 7} inView>
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
            <div className="group flex flex-col gap-2 items-center rounded-xl xl:px-24 py-10 xl:py-10 2xl:py-14 hover:-translate-y-2 duration-300 ease-in-out">
              <div className="flex items-center justify-center gap-1 mb-5">
                <h2 className="md:text-3xl font-semibold text-white flex items-center justify-center gap-2 mb-5">
                  <BadgeCheck className="size-7 text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-xl md:text-3xl font-semibold text-white">
                    Soft Skills
                  </span>
                </h2>
              </div>
              <div className="grid grid-flow-col grid-rows-2 md:grid-rows-2 lg:grid-rows-2 xl:grid-rows-2 2xl:grid-rows-1 px-5 gap-3 xl:gap-4">
                <div className="flex flex-col items-center gap-1">
                  <FaUsers className="size-7 xl:size-10 text-green-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold text-wrap">
                    Colaboração
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaBolt className="size-7 xl:size-10 text-yellow-300 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">
                    Proatividade
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaGraduationCap className="size-7 xl:size-10 text-lime-600 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">Autodidata</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaCalendarCheck className="size-7 xl:size-10 text-blue-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">
                    Organização
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaPaintBrush className="size-7 xl:size-10 text-pink-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">
                    Criatividade
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaCodeBranch className="size-7 xl:size-10 text-red-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold text-wrap">
                    Versionamento
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaServer className="size-7 xl:size-10 text-zinc-400 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold">APIs</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaDatabase className="size-7 xl:size-10 text-sky-500 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold text-wrap">
                    Dados
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaBrain className="size-7 xl:size-10 text-cyan-700 transition-transform duration-300 group-hover:scale-110 ease-in-out group-hover:rotate-[5deg]" />
                  <p className="text-white text-xs font-semibold text-wrap">
                    Lógica
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </BlurFade>
      </div>
    </div>
  );
}
