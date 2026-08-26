"use client";
import React, { useEffect, useRef, useState } from "react";
import { Body } from "../components/Body/Body";
import { NavBar } from "../components/Header/Navbar";
import { Footer } from "../components/Footer/Footer";
import ActionsGrid from "../components/About/components/Techs";
import Hr from "../components/ui/hr";
import BlurFade from "@/components/ui/blur-fade";
import AboutPage from "@/components/About/About";
import ContactPage from "@/components/Contact/Contact";
import ButtonScroll from "@/components/ui/ButtonScrollToTop";
import { ArrowUp } from "lucide-react";
import { Experience } from "@/components/Trajectory/Experience";
import { AgentsSection } from "@/components/Agents/Agents";

export default function Page() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const techsRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const agentsRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibile = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibile);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", toggleVisibile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Elemento de referência para contato não encontrado.");
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
  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Elemento de referência para Experience não encontrado.");
    }
  };

  const scrollToAgents = () => {
    if (agentsRef.current) {
      agentsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Elemento de referência para Agentes não encontrado.");
    }
  };

  return (
    <>
      <NavBar
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToTechs={scrollToTechs}
        scrollToExperience={scrollToExperience}
        scrollToAgents={scrollToAgents}
      />

      {isVisible && (
        <ButtonScroll onClick={scrollToTop}>
          <ArrowUp className="text-yellow-300 size-6 " />
        </ButtonScroll>
      )}

      <Body scrollToContact={scrollToContact} />
      <Hr />

      <BlurFade key="about" delay={0.25 * 2.1} inView>
        <div ref={aboutRef} id="about">
          <AboutPage />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="techs" delay={0.25 * 2.1} inView>
        <div ref={techsRef} id="skills">
          <ActionsGrid />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="experience" delay={0.25 * 2.1} inView>
        <div ref={experienceRef} id="journey">
          <Experience />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="agents" delay={0.25 * 2.1} inView>
        <div ref={agentsRef} id="agentes">
          <AgentsSection />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="contact" delay={0.25 * 2.2} inView>
        <div ref={contactRef} id="contact">
          <ContactPage />
        </div>
      </BlurFade>
      <Hr />
      <BlurFade key="footer" delay={0.25 * 1} inView>
        <Footer />
      </BlurFade>
    </>
  );
}
