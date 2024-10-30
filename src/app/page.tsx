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

  return (
    <>
      <BlurFade delay={0.25 * 2} inView>
        <NavBar
          scrollToAbout={scrollToAbout}
          scrollToProjects={scrollToProjects}
        />{" "}
        <Body scrollToProjects={scrollToProjects} />
      </BlurFade>
      <Hr />

      <BlurFade delay={0.25 * 1} inView>
        <div ref={aboutRef}>
          <AboutPage />
        </div>
      </BlurFade>
      <Hr />

      <BlurFade delay={0.25 * 2.2} inView>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade delay={0.25 * 2.2} inView>
        <ContactPage />
      </BlurFade>
      <Hr />
      <BlurFade delay={0.25 * 1} inView>
        <Footer />
      </BlurFade>
    </>
  );
}
