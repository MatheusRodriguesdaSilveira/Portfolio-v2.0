"use client";
import { Body } from "../components/Body/Body";
import { NavBar } from "../components/Header/Navbar";
import { Step } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import Hr from "../components/ui/hr";
import BlurFade from "@/components/magicui/blur-fade";
import { ActionsGrid } from "../components/About/Techs";
import { Projects } from "@/components/Works/Projects";

export default function Page() {
  return (
    <>
      <BlurFade delay={0.25 * 0.07} inView>
        <NavBar />
        <Body />
      </BlurFade>
      <Hr />

      <BlurFade delay={0.25 * 1} inView>
        <Step />
        <BlurFade delay={0.25 * 1} inView>
          <ActionsGrid />
        </BlurFade>
      </BlurFade>
      <Hr />

      <BlurFade delay={0.25 * 2.2} inView>
        <Projects />
      </BlurFade>
      <Hr />
      <BlurFade delay={0.25 * 1} inView>
        <Footer />
      </BlurFade>
    </>
  );
}
