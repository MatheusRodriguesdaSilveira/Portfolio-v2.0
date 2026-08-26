import React from "react";
import Image from "next/image";
import Code2 from "../../../public/ImageCode.png";
import BlurFade from "@/components/ui/blur-fade";
import ShimmerButton from "../ui/ButtonMotion";
import ButtonCv from "./components/ButtonCv";
import Counter from "../ui/TextCounter";
import { IconColumn } from "./components/IconColumn";
import ArrowDown from "./components/ArrowDown";
import RotatingText from "../ui/RotatingText";

interface BodyProps {
  scrollToContact: () => void;
}

export const Body: React.FC<BodyProps> = ({ scrollToContact }) => {
  return (
    <div className="flex flex-col items-center mx-5 md:m-20 md:mt-36 md:min-h-screen lg:mt-20 lg:min-h-screen xl:flex-row-reverse xl:ml-16 xl:mt-5 2xl:mx-16 2xl:mt-0 2xl:p-20 2xl:min-h-screen">
      {/* Imagem Desktop */}
      <div className="hidden xl:flex xl:mt-16 2xl:mt-24">
        <BlurFade delay={0.25 * 5} inView>
          <Image src={Code2} alt="code" className="w-screen h-full" />
        </BlurFade>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-5 xl:gap-1 2xl:gap-1 max-sm:gap-3 max-sm:mt-4">
        {/* Título */}
        <div className="flex flex-col items-start max-sm:items-center">
          <BlurFade duration={0.6} delay={0.2} yOffset={10}>
            <div className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl xl:mt-16 2xl:mt-24">
              <h1 className="text-brand font-semibold">Olá, eu sou</h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white font-bold font-mono">
                <h2 className="text-zinc-100 font-semibold whitespace-nowrap">
                  Desenvolvedor
                </h2>

                <RotatingText
                  texts={["Salesforce", "Agentforce", "Data Cloud"]}
                  mainClassName="
                      mt-1
                      inline-flex
                      items-center
                      h-[1.3em]
                      text-xl
                      md:text-4xl
                      xl:text-5xl
                      2xl:text-7xl
                      px-3
                      bg-brand
                      text-zinc-900
                      rounded-lg
                    "
                  rotationInterval={2200}
                />
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Descrição */}
        <div className="px-10 xl:px-0 xl:pr-[50px] xl:mb-28 max-sm:mb-6">
          <BlurFade delay={0.8} yOffset={10}>
            <p className="text-zinc-200 leading-loose text-sm lg:text-lg">
              👋 Meu nome é{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                Matheus
              </span>
              , tenho{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                20 anos
              </span>{" "}
              e sou{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                Desenvolvedor de Software
              </span>{" "}
              com foco em{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                Salesforce e Agentforce
              </span>
              .
            </p>

            <p className="text-zinc-200 leading-loose text-sm lg:text-lg">
              Atualmente atuo como{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                Analista Agentforce Jr na Gentrop
              </span>
              , criando e escalando{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                agentes autônomos de IA
              </span>{" "}
              que transformam operações de negócio. Trabalho na construção
              desses agentes utilizando{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                Prompt Templates, Instructions e Actions
              </span>{" "}
              integrados a{" "}
              <span className="font-semibold underline underline-offset-2 decoration-2 decoration-brand text-white">
                Flows
              </span>
              , automatizando processos e melhorando a eficiência operacional.
            </p>
          </BlurFade>

          {/* Botões */}
          <div className="flex justify-start mt-6">
            <div className="flex flex-wrap items-center gap-5">
              <BlurFade delay={0.25 * 5.6} inView>
                <ButtonCv />
              </BlurFade>

              <BlurFade delay={0.25 * 5.6} inView>
                <ShimmerButton scrollToContact={scrollToContact} />
              </BlurFade>
            </div>
          </div>

          {/* Certificações */}
          <BlurFade delay={0.25 * 5.8} inView>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://sforce.co/verifycerts"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
                aria-label="Verificar certificação Salesforce Certified Agentforce Specialist"
              >
                <Image
                  src="/certified_Agentforce-Specialist.png"
                  alt="Salesforce Certified Agentforce Specialist"
                  width={40}
                  height={40}
                  className="rounded-full border border-brand/40 bg-white"
                />
              </a>
              <a
                href="https://sforce.co/verifycerts"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
                aria-label="Verificar certificação Salesforce Certified Data 360 Consultant"
              >
                <Image
                  src="/2026-01_Badge_SF-Certified_D360-Con_High-Res.png"
                  alt="Salesforce Certified Data 360 Consultant"
                  width={40}
                  height={40}
                  className="rounded-full border border-brand/40 bg-white"
                />
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/sl5u6l8v3asxo4p7d4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-brand hover:underline underline-offset-2"
              >
                2x Salesforce Certified
              </a>
            </div>
          </BlurFade>

          {/* Stats com Counter */}
          <BlurFade delay={1} inView>
            <div className="grid grid-cols-3 gap-x-2 gap-y-4 mt-10 md:flex md:gap-1">
              <div className="flex items-start text-2xl sm:text-4xl xl:text-6xl font-semibold text-brand">
                +
                <Stat
                  value={2}
                  label="Anos de Experiência"
                  mobileLabel="Anos"
                />
              </div>
              <div className="flex items-start text-2xl sm:text-4xl xl:text-6xl font-semibold text-brand">
                +
                <Stat
                  value={96}
                  label="Badges Trailhead"
                  mobileLabel="Badges"
                />
              </div>
              <div className="flex items-start text-2xl sm:text-4xl xl:text-6xl font-semibold text-brand">
                +
                <Stat
                  value={50}
                  suffix="k"
                  label="Pontos Trailhead"
                  mobileLabel="Pontos"
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Lateral */}
      <BlurFade delay={0.6}>
        <div className="mr-5 xl:mb-[90px]">
          <ArrowDown />
          <IconColumn />
        </div>
      </BlurFade>

      {/* Imagem Mobile */}
      <div className="xl:hidden flex mt-10 w-[250px] md:w-[300px]">
        <Image src={Code2} alt="code" />
      </div>
    </div>
  );
};

const Stat = ({
  value,
  label,
  mobileLabel,
  suffix = "",
}: {
  value: number;
  label: string;
  mobileLabel?: string;
  suffix?: string;
}) => {
  const isDecimal = !Number.isInteger(value);

  return (
    <div className="flex flex-col items-center gap-0.5 sm:flex-row sm:items-end sm:gap-1 sm:min-w-[150px]">
      <div className="flex items-end font-semibold text-brand">
        <span className="text-2xl sm:text-4xl xl:text-6xl tabular-nums">
          {isDecimal ? value : <Counter value={value} direction="up" />}
          {suffix}
        </span>
      </div>

      <h1 className="text-[10px] sm:text-xs xl:text-sm 2xl:text-base text-center sm:text-left sm:w-24 font-semibold text-zinc-400 whitespace-nowrap sm:whitespace-normal">
        <span className="sm:hidden">{mobileLabel ?? label}</span>
        <span className="hidden sm:inline">{label}</span>
      </h1>
    </div>
  );
};
