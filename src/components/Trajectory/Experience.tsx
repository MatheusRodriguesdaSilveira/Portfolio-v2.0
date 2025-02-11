import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2022/2023",
      date: "Jan. de 2022 - Jul. de 2023",
      image: "/etecIcon.jpeg",
      content: "Etec Lauro Gomes 👨‍🎓🎓",
      description:
        "Durante o curso técnico em Informática para Internet na Etec Lauro Gomes, desenvolvi meu Trabalho de Conclusão de Curso (TCC) criando uma plataforma para academias, utilizando HTML5, CSS3, JavaScript, PHP e SQL. O projeto tem como objetivo facilitar a aquisição de planos de treino personalizados e oferecer acompanhamento profissional aos usuários. Além de permitir a compra de planos, a plataforma conta com um sistema de avaliações feitas por personal trainers, que analisam o progresso dos alunos e fornecem feedback sobre os exercícios. Essa experiência me proporcionou um aprendizado prático em desenvolvimento full stack, banco de dados e usabilidade, reforçando minha capacidade de criar soluções funcionais e intuitivas para o mercado fitness.",
      techStack:
        "Next Js | React | Node Js | Prisma | PostgreSQL | TypeScript | TailwindCss",
    },
    {
      title: "2024",
      date: "Jan. de 2022 - Jul. de 2023",
      image: "/etecIcon.jpeg",
      content: "Etec Lauro Gomes 👨‍🎓🎓",
      description:
        "Durante o curso técnico em Informática para Internet na Etec Lauro Gomes, desenvolvi meu Trabalho de Conclusão de Curso (TCC) criando uma plataforma para academias, utilizando HTML5, CSS3, JavaScript, PHP e SQL. O projeto tem como objetivo facilitar a aquisição de planos de treino personalizados e oferecer acompanhamento profissional aos usuários. Além de permitir a compra de planos, a plataforma conta com um sistema de avaliações feitas por personal trainers, que analisam o progresso dos alunos e fornecem feedback sobre os exercícios. Essa experiência me proporcionou um aprendizado prático em desenvolvimento full stack, banco de dados e usabilidade, reforçando minha capacidade de criar soluções funcionais e intuitivas para o mercado fitness.",
      techStack:
        "Next Js | React | Node Js | Prisma | PostgreSQL | TypeScript | TailwindCss",
    },
    {
      title: "2025",
      date: "Jan. de 2022 - Jul. de 2023",
      image: "/etecIcon.jpeg",
      content: "Etec Lauro Gomes 👨‍🎓🎓",
      description:
        "Durante o curso técnico em Informática para Internet na Etec Lauro Gomes, desenvolvi meu Trabalho de Conclusão de Curso (TCC) criando uma plataforma para academias, utilizando HTML5, CSS3, JavaScript, PHP e SQL. O projeto tem como objetivo facilitar a aquisição de planos de treino personalizados e oferecer acompanhamento profissional aos usuários. Além de permitir a compra de planos, a plataforma conta com um sistema de avaliações feitas por personal trainers, que analisam o progresso dos alunos e fornecem feedback sobre os exercícios. Essa experiência me proporcionou um aprendizado prático em desenvolvimento full stack, banco de dados e usabilidade, reforçando minha capacidade de criar soluções funcionais e intuitivas para o mercado fitness.",
      techStack:
        "Next Js | React | Node Js | Prisma | PostgreSQL | TypeScript | TailwindCss",
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
