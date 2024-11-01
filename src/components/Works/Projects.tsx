import React, { forwardRef } from "react";
import { projects } from "@/lib/projects";
import { SquareArrowOutUpRight, Github } from "lucide-react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import { AnimatePresence } from "framer-motion";

interface ProjectsProps {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <div
      ref={ref}
      id="projects"
      className="p-5 sm:p-16 m-4 sm:m-16 flex flex-col items-center"
    >
      {/* Title */}
      <BlurFade delay={0.25 * 4.2} inView>
        <div className="text-5xl mb-12 max-sm:text-3xl flex gap-2 items-center">
          <span className="text-white">{"<"}</span>
          <h2 className="text-indigo-600">My</h2>
          <h2 className="text-zinc-300">Projects💻</h2>
          <span className="text-white">{"/>"}</span>
        </div>
      </BlurFade>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl h-full">
        {projects?.map((project) => (
          <BlurFade delay={0.25 * 4.2} inView>
            <div
              key={project.id}
              className="flex flex-col items-center p-5 max-h-[420px] bg-neutral-300/5 rounded-3xl shadow-lg shadow-indigo-300/30 overflow-hidden border border-indigo-300 transition-transform duration-500 transform hover:scale-95"
            >
              {/* Project Image */}
              <div className="w-full relative mx-5 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="rounded-3xl border border-zinc-800"
                  priority
                />
              </div>

              {/* Project Info */}
              <div className="p-3 text-left">
                <h5 className="text-sm xl:text-lg font-bold text-indigo-600 mb-1">
                  {project.title}
                </h5>
                <p className="text-sm text-white/70 font-light mb-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live preview of ${project.title}`}
                    className="text-white hover:text-indigo-600"
                  >
                    <SquareArrowOutUpRight className="size-4 xl:size-6 hover:scale-95 transition-transform duration-500" />
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-white hover:text-indigo-600"
                  >
                    <Github className="size-4 xl:size-6 hover:scale-95 transition-transform duration-500" />
                  </a>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Loading Spinner */}
      <div className="mt-12 flex justify-center items-center flex-col">
        <p className="text-2xl xl:text-3xl text-gray-400 mb-4 text-nowrap flex">
          Projects in progress
        </p>
        <div className="w-9 h-9 xl:w-12 xl:h-12 border-4 border-gray-400 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
