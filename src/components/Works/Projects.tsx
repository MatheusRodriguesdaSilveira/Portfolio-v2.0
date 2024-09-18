import React, { forwardRef, Ref } from "react";
import { projects } from "@/lib/projects";
import { SquareArrowOutUpRight, Github } from "lucide-react";
import Image from "next/image";
import { OutlineButton } from "../ui/outline-button";
import BlurFade from "../magicui/blur-fade";

interface ProjectsProps {
  // funcinando mesmo sem as props
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <div
      ref={ref}
      id="projects"
      className="p-5 sm:p-16 m-4 sm:m-16 flex flex-col items-center"
    >
      <div className="text-5xl mb-8 max-sm:text-3xl text-nowrap max-sm:m-10 flex gap-2">
        <h2 className="pb-2 bg-gradient-to-r from-sky-500 via-sky-300 to-sky-800 bg-clip-text text-transparent">
          My
        </h2>
        <h2 className="text-zinc-400">Projects💻</h2>
      </div>

      <BlurFade delay={0.25 * 2} inView>
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-10 justify-center w-full sm:w-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full">
            {projects?.map((project) => (
              <div key={project.id} className="portfolio-content">
                <div className="row">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={400}
                    height={300}
                    className="animate-none"
                    priority
                  />
                  <div className="layer max-sm:text-xs">
                    <h5 className="font-bold text-xl">{project.title}</h5>
                    <p>{project.description}</p>
                    <p className="font-bold">{project.techStack}</p>
                    <div className="flex">
                      <OutlineButton className="m-3">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          aria-label={`Live preview of ${project.title}`}
                        >
                          <SquareArrowOutUpRight className="size-5 hover:text-zinc-800 hover:scale-110 duration-300" />
                        </a>
                      </OutlineButton>
                      <OutlineButton className="m-3">
                        <a
                          href={project.repoLink}
                          target="_blank"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github className="size-5 hover:text-zinc-800 hover:scale-110 duration-300" />
                        </a>
                      </OutlineButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      <div className="portfolio-content text-nowrap">
        <div className="justify-center items-center">
          <p className="m-5 text-3xl text-center text-gray-400">
            Projects in progress
          </p>
          <div className="items-center justify-center flex">
            <div className="h-11 w-11 animate-spin rounded-full border-4 border-gray-500 border-t-cyan-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
