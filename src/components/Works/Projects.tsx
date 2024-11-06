import React, { forwardRef } from "react";
import { projects } from "@/lib/projects";
import { SquareArrowOutUpRight, Github } from "lucide-react";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";

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
        <div className="text-5xl mb-20 max-sm:text-3xl flex gap-2 items-center">
          <span className="text-white">{"<"}</span>
          <h2 className="text-indigo-600">My</h2>
          <h2 className="text-zinc-300">Projects💻</h2>
          <span className="text-white">{"/>"}</span>
        </div>
      </BlurFade>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto sm:p-6 lg:p-0">
        {projects?.map((project, index) => (
          <BlurFade key={project.id} delay={0.25 * (index + 1)} inView>
            <div className="flex flex-col items-center p-5 md:p-5 lg:p-5 bg-zinc-950/50 rounded-3xl shadow-lg shadow-indigo-300/30 overflow-hidden border border-indigo-300 transition-transform duration-500 transform hover:scale-95">
              {/* Project Image */}
              <div className="w-full h-48 md:h-56 lg:h-64 relative rounded-3xl border border-zinc-800 overflow-hidden">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                    priority
                  />
                </a>
              </div>

              {/* Project Info */}
              <div className="w-full mt-4 text-left">
                <h5 className="text-lg font-semibold text-indigo-600 mb-1">
                  {project.title}
                </h5>
                {/* <p className="text-sm text-gray-300 mb-2 font-semibold">
                  {project.techStack}
                </p> */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live preview of ${project.title}`}
                    className="text-gray-300 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <SquareArrowOutUpRight className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-gray-300 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6" />
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
