"use client";
import HyperText from "@/components/magicui/hyper-text";
import { CodeXml } from "lucide-react";
import { FaReact, FaHtml5, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";

const logos = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Code", icon: CodeXml },
];

export function ActionsGrid() {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-20 mt-[-40px]">
      <div className="flex justify-center items-center mt-2 space-x-2 leading-height ">
        <HyperText className="text-xl md:text-3xl text-white" text="Skills" />
        <span className="text-white text-lg max-sm:text-sm">|</span>
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
                        return "text-green-500";
                      case "React":
                        return "text-cyan-500";
                      case "JavaScript":
                        return "text-yellow-500";
                      case "Tailwind CSS":
                        return "text-teal-400";
                      case "TypeScript":
                        return "text-blue-500";
                      case "HTML5":
                        return "text-orange-400";
                      case "Next.js":
                        return "text-gray-100";
                      case "Git":
                        return "text-orange-500";
                      case "GitHub":
                        return "text-purple-500";
                      default:
                        return "text-gray-400";
                    }
                  })();

                  return (
                    <div key={key} className="flex items-center justify-center">
                      <IconComponent
                        className={`h-14 w-14 ${colorClass} px-3 border-2 rounded-xl`}
                        aria-label={logo.name}
                        title={logo.name}
                      />
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
