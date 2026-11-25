"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Body } from "../components/Body/Body";
import { NavBar } from "../components/Header/Navbar";
import Hr from "../components/ui/hr";
import BlurFade from "@/components/ui/blur-fade";
import ButtonScroll from "@/components/ui/ButtonScrollToTop";
import { ArrowUp } from "lucide-react";

// Below-the-fold sections: code-split into their own chunks so the initial
// JS payload only has to cover the Hero/Navbar. ssr stays true so this
// content is still present in the server-rendered HTML for SEO/crawlers.
const ActionsGrid = dynamic(() => import("../components/About/components/Techs"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer/Footer").then((m) => m.Footer), { ssr: true });
const AboutPage = dynamic(() => import("@/components/About/About"), { ssr: true });
const ContactPage = dynamic(() => import("@/components/Contact/Contact"), { ssr: true });
const Experience = dynamic(() => import("@/components/Trajectory/Experience").then((m) => m.Experience), { ssr: true });
const AgentsSection = dynamic(() => import("@/components/Agents/Agents").then((m) => m.AgentsSection), { ssr: true });

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

  // Deep links (e.g. /#agentes shared on LinkedIn): the page renders in PT and
  // may switch to the visitor's saved language right after, which changes the
  // height of everything above the target. Keep it aligned while the layout
  // settles, and let go as soon as the visitor interacts.
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;

    const observer = new ResizeObserver(() =>
      target.scrollIntoView({ block: "start" }),
    );
    const interactions = ["wheel", "touchstart", "pointerdown", "keydown"];
    const stop = () => {
      window.clearTimeout(timer);
      observer.disconnect();
      interactions.forEach((name) => window.removeEventListener(name, stop));
    };
    const timer = window.setTimeout(stop, 3000);
    interactions.forEach((name) =>
      window.addEventListener(name, stop, { passive: true }),
    );
    observer.observe(document.body);
    return stop;
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

      <Body scrollToContact={scrollToContact} scrollToAgents={scrollToAgents} />
      <Hr />

      {/* The live agents are the main draw, so they come right after the hero.
          scroll-mt keeps the title clear of the fixed navbar on desktop. */}
      <BlurFade key="agents" inView>
        <div ref={agentsRef} id="agentes" className="scroll-mt-10 lg:scroll-mt-32">
          <AgentsSection />
        </div>
      </BlurFade>
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
