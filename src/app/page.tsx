"use client";
import React, { useRef } from "react";
import { Body } from "../components/Body/Body";
import { NavBar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import { ActionsGrid } from "../components/About/components/Techs";
import Hr from "../components/ui/hr";
import BlurFade from "@/components/ui/blur-fade";
import Projects from "@/components/Works/Projects";
import AboutPage from "@/components/About/About";
import ContactPage from "@/components/Contact/Contact";

export default function Page() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const techsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Elemento de referência para projetos não encontrado.");
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Elemento de referência para About não encontrado.");
    }
  };

  const scrollToTechs = () => {
    if (techsRef.current) {
      techsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Elemento de referência para Techs não encontrado.");
    }
  };

  return (
    <>
      <NavBar
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToTechs={scrollToTechs}
      />

      <Body scrollToProjects={scrollToProjects} />
      <Hr />
      <BlurFade key="about" delay={0.25 * 2.1} inView>
        <div ref={aboutRef}>
          <AboutPage />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="techs" delay={0.25 * 2.1} inView>
        <div ref={techsRef}>
          <ActionsGrid />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="projects" delay={0.25 * 2.2} inView>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="contact" delay={0.25 * 2.2} inView>
        <ContactPage />
      </BlurFade>
      <Hr />
      <BlurFade key="footer" delay={0.25 * 1} inView>
        <Footer />
      </BlurFade>
    </>
  );
}
