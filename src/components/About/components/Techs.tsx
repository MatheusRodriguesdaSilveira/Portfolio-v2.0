"use client";
import HyperText from "@/components/magicui/hyper-text";
import { FaReact, FaHtml5, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
} from "react-icons/si";

const logos = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML", icon: FaHtml5 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Prisma", icon: SiPrisma },
];

export function ActionsGrid() {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-20 mt-[-40px] p-6 rounded-lg">
      <div className="flex justify-center items-center mt-2 space-x-2 leading-height ">
        <HyperText className="text-xl md:text-3xl text-white" text="Skills" />
        <span className="text-white font-bold text-lg max-sm:text-sm">|</span>
        <HyperText
          className="text-xl md:text-3xl text-white"
          text="Technologies"
        />
      </div>

      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-5 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 10%, black 50%, black 50%, transparent 90%)",
          }}
        >
          {Array(7)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => {
                  const IconComponent = logo.icon;

                  const colorClass = (() => {
                    switch (logo.name) {
                      case "Node.js":
                        return "text-green-500 shadow-green-500/80";
                      case "React":
                        return "text-cyan-500 shadow-cyan-500/80";
                      case "JavaScript":
                        return "text-yellow-500 shadow-yellow-500/80";
                      case "Tailwind CSS":
                        return "text-teal-400 shadow-teal-400/80";
                      case "TypeScript":
                        return "text-blue-600 shadow-blue-600/80";
                      case "HTML":
                        return "text-orange-600 shadow-orange-600/80";
                      case "Next.js":
                        return "text-gray-100 shadow-gray-100/80";
                      case "Git":
                        return "text-orange-600 shadow-orange-600/80";
                      case "GitHub":
                        return "text-purple-500 shadow-purple-500/80";
                      default:
                        return "text-gray-400 shadow-gray-400/80";
                    }
                  })();

                  return (
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center"
                    >
                      <IconComponent
                        className={`h-14 w-14 ${colorClass} px-[11px] border-2 border-indigo-300 rounded-2xl shadow-md transition duration-300 ease-in-out transform hover:scale-105`}
                        aria-label={logo.name}
                        title={logo.name}
                      />
                      <span className="text-sm text-gray-300 mt-2">
                        {logo.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
