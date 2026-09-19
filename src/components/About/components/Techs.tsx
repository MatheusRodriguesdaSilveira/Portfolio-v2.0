import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJsSquare,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaGithub,
  FaCode,
  FaSalesforce,
  FaHtml5,
  FaPuzzlePiece,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFastify,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiInsomnia,
  SiSwagger,
} from "react-icons/si";

import SalesforceIcon from "/public/SalesforceIcon.png";
import AgentforceIcon from "/public/AgentforceIcon.png";
import FlowIcon from "/public/FlowIcon.png";
import DataCloudIcon from "/public/data_cloud.png";
import SpotlightCard from "@/components/ui/SpotlightCard ";
import BlurFade from "@/components/ui/blur-fade";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutTech() {
  const { language } = useLanguage();

  return (
    <section className="mt-20 px-4">
      <BlurFade delay={0.25 * 3.5} inView>
        <h2 className="text-4xl max-sm:text-3xl text-zinc-100 text-nowrap items-center justify-center flex py-10 xl:py-10 2xl:py-12">
          <span className="text-zinc-300 font-semibold block">
            <span className="text-white">{"{ "}</span>
            {language === "pt" ? "proficiência" : "proficiency"}
            <span className="text-brand">.</span>
            <span className="text-white">{" }"}</span>
          </span>
        </h2>
      </BlurFade>
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CARD 1 — Salesforce */}
        <SpotlightCard>
          <CardWrapper title="Salesforce & Agentforce">
            <TechIcon
              icon={FaSalesforce}
              color="text-blue-400"
              label="Salesforce"
            />
            <TechImage src={AgentforceIcon} label="Agentforce" />
            <TechImage src={DataCloudIcon} label="Data Cloud" />
            <TechImage src={FlowIcon} label="Flows" />
            <TechIcon icon={FaCloud} label="Prompt Builder" />
            <TechIcon icon={FaCode} label="Apex" />
            <TechIcon
              icon={FaPuzzlePiece}
              label="LWC"
              color="text-orange-400"
            />
            <TechIcon
              icon={FaTerminal}
              label="Salesforce CLI"
              color="text-emerald-400"
            />
          </CardWrapper>
        </SpotlightCard>

        {/* CARD 2 — Backend */}
        <SpotlightCard>
          <CardWrapper title="Backend & APIs">
            <TechIcon icon={FaNodeJs} label="Node.js" color="text-green-400" />
            <TechIcon
              icon={SiTypescript}
              label="TypeScript"
              color="text-blue-400"
            />
            <TechIcon icon={SiFastify} label="Fastify" color="text-zinc-300" />
            <TechIcon icon={SiSwagger} label="Swagger" color="text-green-400" />
            <TechIcon
              icon={FaDatabase}
              label="REST APIs"
              color="text-yellow-400"
            />
            <TechIcon
              icon={SiPostgresql}
              label="PostgreSQL"
              color="text-sky-400"
            />
          </CardWrapper>
        </SpotlightCard>

        {/* CARD 3 — Frontend */}
        <SpotlightCard>
          <CardWrapper title="Frontend">
            <TechIcon icon={FaReact} label="React" color="text-cyan-400" />
            <TechIcon
              icon={FaJsSquare}
              label="JavaScript"
              color="text-yellow-300"
            />
            <TechIcon icon={SiNextdotjs} label="Next.js" color="text-white" />
            <TechIcon icon={FaHtml5} label="HTML5" color="text-orange-400" />
            <TechIcon
              icon={SiTailwindcss}
              label="Tailwind CSS"
              color="text-cyan-300"
            />
            <TechIcon icon={FaCogs} label="UI/UX" color="text-pink-400" />
          </CardWrapper>
        </SpotlightCard>

        {/* CARD 4 — Workflow */}
        <SpotlightCard>
          <CardWrapper title="Dev Workflow">
            <TechIcon icon={FaGitAlt} label="Git" color="text-orange-500" />
            <TechIcon icon={FaGithub} label="GitHub" color="text-purple-400" />
            <TechIcon
              icon={SiInsomnia}
              label="Insomnia"
              color="text-indigo-400"
            />
            <TechIcon icon={FaDocker} label="Docker" color="text-blue-400" />
            <TechIcon icon={FaCloud} label="Deploy" color="text-indigo-400" />
            <TechIcon
              icon={FaCogs}
              label="Automations"
              color="text-emerald-400"
            />
          </CardWrapper>
        </SpotlightCard>
      </div>

      <BlurFade delay={0.25 * 5} inView>
        <p className="text-center text-sm sm:text-base text-zinc-400 mt-10">
          <span className="font-semibold text-white">
            {language === "pt" ? "Idiomas:" : "Languages:"}
          </span>{" "}
          {language === "pt"
            ? "Português (nativo) · Inglês (Professional Working)"
            : "Portuguese (native) · English (Professional Working)"}
        </p>
      </BlurFade>
    </section>
  );
}

function CardWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex flex-col items-center rounded-xl px-6 sm:px-10 py-8 sm:py-12 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">{children}</div>
    </div>
  );
}

function TechImage({ src, label }: { src: any; label: string }) {
  return (
    <div className="flex flex-col items-center mt-1 gap-2">
      <Image
        src={src}
        alt={label}
        width={45}
        height={45}
        className="object-contain group-hover:scale-110 transition"
      />
      <span className="text-xs sm:text-sm text-zinc-300">{label}</span>
    </div>
  );
}

function TechIcon({
  icon: Icon,
  label,
  color = "text-zinc-300",
}: {
  icon: any;
  label: string;
  color?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon
        className={`size-10 sm:size-12 ${color} group-hover:scale-110 transition`}
      />
      <span className="text-xs sm:text-sm text-zinc-300 cursor-pointer">
        {label}
      </span>
    </div>
  );
}
