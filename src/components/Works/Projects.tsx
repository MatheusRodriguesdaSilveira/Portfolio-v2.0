"use client";
import React from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full md:h-screen py-16 md:py-40 xl:py-32 2xl:py-40">
      <h2 className="px-2 max-w-7xl mx-auto text-3xl xl:text-4xl 2xl:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {"<My Projects💻/>"}
      </h2>

      <div>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const data = [
  {
    id: 12,
    thumb: "/AgentforceIcon.png",
    image: "/AgentforceIcon.png",
    alt: "agente de suporte técnico IT",
    title: "Agente de Suporte Técnico (IT)🛠️",
    description:
      "Agente de IA integrado ao Google Chat para diagnóstico e resolução de problemas técnicos, com automação de abertura de chamados e gestão de escalonamento.",
    techStack: "Agentforce | Apex | Flows | Google Chat | WhatsApp API",
    liveLink: "",
    repoLink: "",
    frontLink: "",
    content:
      "Agente de IA integrado ao Google Chat para diagnóstico e resolução de problemas técnicos, com automação de abertura de chamados e gestão de escalonamento. Inclui arquitetura multiagente para controle do ciclo de vida de dispositivos e logística via WhatsApp.",
  },
  {
    id: 13,
    thumb: "/AgentforceIcon.png",
    image: "/AgentforceIcon.png",
    alt: "agente SDR de vendas",
    title: "Agente SDR de Vendas📈",
    description:
      "Agente de qualificação de leads usando a metodologia BANT, com validação de CNPJ via API e agendamento automático de reuniões.",
    techStack: "Agentforce | Prompt Builder | REST APIs | Flows",
    liveLink: "",
    repoLink: "",
    frontLink: "",
    content:
      "Agente de qualificação de leads usando a metodologia BANT, com validação de CNPJ via API e agendamento automático de reuniões — aumentando a escalabilidade do funil de vendas.",
  },
  {
    id: 14,
    thumb: "/AgentforceIcon.png",
    image: "/AgentforceIcon.png",
    alt: "agente de recuperação de crédito",
    title: "Agente de Recuperação de Crédito💳",
    description:
      "Agente financeiro para atendimento em larga escala via WhatsApp: renegociação de dívidas, simulação de parcelamentos e escolha de forma de pagamento.",
    techStack: "Agentforce | Apex | WhatsApp API | Data Cloud",
    liveLink: "",
    repoLink: "",
    frontLink: "",
    content:
      "Agente financeiro para atendimento em larga escala via WhatsApp: renegociação de dívidas, simulação de parcelamentos e escolha de forma de pagamento (Pix/Boleto), com regras de negócio e explicação de conceitos financeiros para aumentar a taxa de acordos.",
  },
  {
    id: 15,
    thumb: "/AgentforceIcon.png",
    image: "/AgentforceIcon.png",
    alt: "Agent Guigo - Agentforce World Tour SP",
    title: "Agent Guigo (Agentforce World Tour SP)🎪",
    description:
      "Agente desenvolvido para o Agentforce World Tour São Paulo: triagem personalizada, quizzes interativos e diagnóstico de perfil.",
    techStack: "Agentforce | IA Generativa | Data Cloud",
    liveLink: "",
    repoLink: "",
    frontLink: "",
    content:
      "Agente desenvolvido para o Agentforce World Tour São Paulo: triagem personalizada, quizzes interativos, diagnóstico de perfil e portfólio de agentes. Levou mais de 500 visitantes ao stand da Gentrop para interagir com a solução.",
  },
  {
    id: 1,
    thumb: "/devblog thumb.jpeg",
    image: "/devblog.jpeg",
    alt: "devblog",
    title: "DevBlog📚",
    description:
      "O projeto é uma plataforma web que combina funcionalidades de blog e rede social, permitindo que os usuários criem postagens com fotos e descrições, interajam por meio de curtidas e comentários.",
    techStack:
      "Next Js | React | Node.js | Prisma | PostgreSQL | TypeScript | TailwindCss",
    liveLink: "https://dev-blog-frontend-umber.vercel.app",
    repoLink: "https://github.com/MatheusRodriguesdaSilveira/DevBlog-Backend",
    frontLink: "https://github.com/MatheusRodriguesdaSilveira/DevBlog-Frontend",
    content:
      "O DevBlog é uma plataforma web que combina funcionalidades de blog e rede social, permitindo que desenvolvedores criem postagens com textos e compartilhem conhecimentos sobre tecnologia. Além disso, os usuários poderão interagir por meio de curtidas e salvar postagens para leitura posterior. Atualmente, o projeto está em versão Beta e continua em desenvolvimento, com melhorias sendo implementadas para aprimorar a experiência do usuário, otimizar a arquitetura do código e tornar a plataforma mais acessível e responsiva.",
  },
  {
    id: 2,
    thumb: "/agendamentoDeServicos.jpeg",
    image: "/agendamentoDeServicos.jpeg",
    alt: "agendamentoDeServicos",
    title: "💇‍♀️ Agendamento de Serviços - API",
    description:
      "Mini aplicação Node.js voltada para gestão de agendamentos de uma profissional autônoma (ex: manicure). Utiliza boas práticas de arquitetura, testes, validações, autenticação e documentação via Swagger.",
    techStack:
      "Node.js | TypeScript | Jest | PostgreSQL | Swagger | Fastify | Design-Patterns | Prisma | Zod | JWT | Bcrypt",
    liveLink: "",
    repoLink:
      "https://github.com/MatheusRodriguesdaSilveira/user-api-test-practice-pre-stage",
    frontLink: "",
    content:
      "Mini aplicação Node.js voltada para gestão de agendamentos de uma profissional autônoma (ex: manicure). Utiliza boas práticas de arquitetura, testes, validações, autenticação e documentação via Swagger.",
  },
  {
    id: 3,
    thumb: "/system pizza thumb.jpeg",
    image: "/system pizza.jpeg",
    alt: "pizzaria",
    title: "System Pizza🍕",
    description:
      "Sistema completo para uma aplicação de pedidos em uma pizzaria, com funcionalidades de autenticação, gerenciamento de pedidos e criação de produtos.",
    techStack:
      "Next Js | React | Node.js | Prisma | PostgreSQL | TypeScript | TailwindCss",
    liveLink: "https://system-pizza-frontend.vercel.app",
    repoLink:
      "https://github.com/MatheusRodriguesdaSilveira/SystemPizza-Backend",
    frontLink:
      "https://github.com/MatheusRodriguesdaSilveira/SystemPizza-Frontend",
    content:
      "O System Pizza é um sistema completo para gestão de pedidos em pizzarias, oferecendo funcionalidades como autenticação de usuários, gerenciamento de pedidos e criação de produtos. Com uma interface intuitiva, o sistema permite que clientes personalizem seus pedidos e finalizem a compra de forma prática, enquanto o restaurante recebe e administra os pedidos em tempo real.",
  },
  {
    id: 4,
    thumb: "/api-vendas-thumb.png",
    image: "/api-vendas.png",
    alt: "api-vendas",
    title: "API-Vendas🛒",
    description:
      "Meu projeto API-Vendas é uma API que desenvolvi para gerenciar um sistema de vendas, permitindo o cadastro, consulta, edição e remoção de produtos, clientes e pedidos. A ideia é criar uma solução eficiente para controlar transações de um e-commerce ou qualquer sistema que envolva vendas.",
    techStack:
      "Node.js | TypeScript | TypeORM | ExpressJS | PostgreSQL | Redis | Docker | Swagger",
    liveLink: "",
    repoLink:
      "https://github.com/MatheusRodriguesdaSilveira/API-Vendas-Backend",
    frontLink: "",
    content:
      "Desenvolvi a API-Vendas com o objetivo de criar um sistema eficiente para gerenciar vendas, permitindo o cadastro, consulta, edição e remoção de produtos, clientes e pedidos. A ideia surgiu da necessidade de um controle mais organizado e automatizado para transações comerciais, seja em um e-commerce ou em qualquer sistema que envolva vendas.",
  },
  {
    id: 5,
    thumb: "/in orbit thumb.jpeg",
    image: "/in orbit.jpeg",
    alt: "in orbit",
    title: "In.Orbit📅",
    description:
      "Aplicação web que permite aos usuários adicionar metas com base nos dias da semana, onde essa apliação usa um backend feito em Node Js.",
    techStack: "React | Node.js | TypeScript | TailwindCss",
    liveLink: "https://in-orbit-frontend-one.vercel.app",
    repoLink: "https://github.com/MatheusRodriguesdaSilveira/In.Orbit-Backend",
    frontLink:
      "https://github.com/MatheusRodriguesdaSilveira/In.Orbit-Frontend",
    content:
      "O In.Orbit é uma aplicação web que permite aos usuários adicionar e gerenciar metas com base nos dias da semana, ajudando na organização e acompanhamento de objetivos. O projeto conta com um backend desenvolvido em Node.js, garantindo uma estrutura robusta para o armazenamento e manipulação dos dados. Além do gerenciamento de metas, a aplicação oferece uma interface intuitiva e moderna, permitindo que os usuários visualizem seu progresso ao longo da semana. Novas funcionalidades estão sendo planejadas para tornar a experiência ainda mais completa e dinâmica. 🚀",
  },
  {
    id: 6,
    thumb: "/gd sports thumb.jpeg",
    image: "/gd sports.jpeg",
    alt: "project clothing store",
    title: "Project Clothing Store⚽",
    description:
      "Este projeto é uma loja virtual dinâmica, na qual os pedidos são redirecionados diretamente para o contato no WhatsApp com todos os itens inseridos no carrinho.",
    techStack: "Html | JavaScript | TailwindCss",
    liveLink: "https://project-gd-sports.vercel.app",
    repoLink: "",
    frontLink:
      "https://github.com/MatheusRodriguesdaSilveira/Project-GD-Sports",
    content:
      "O GD Sport é uma loja virtual dinâmica que permite aos usuários navegar por uma variedade de produtos esportivos e realizar pedidos de forma prática. O diferencial do projeto é que todos os pedidos são redirecionados diretamente para o WhatsApp, com todos os itens inseridos no carrinho, facilitando o processo de compra e comunicação com o vendedor. A plataforma foi desenvolvida para proporcionar uma experiência de compra rápida e eficiente, com uma interface intuitiva e fácil de usar, visando atender tanto clientes quanto lojistas de forma direta e sem complicação.",
  },
  {
    id: 7,
    thumb: "/hamburgueria.jpeg",
    image: "/hamburgueria.jpeg",
    alt: "hamburgueria",
    title: "Project Burger🍔",
    description:
      "Trabalho focado na criação de um site para uma hamburgueria, com diversas funcionalidades, onde o pedido feito é redirecionado para o WhatsApp com todos os detalhes do pedido.",
    techStack: "Html | JavaScript | TailwindCss",
    liveLink: "https://project-burger-alpha.vercel.app",
    repoLink: "",
    frontLink: "https://github.com/MatheusRodriguesdaSilveira/Project-Burger",
    content:
      "O Project Burger é um site desenvolvido para uma hamburgueria, oferecendo uma experiência interativa e prática para os clientes realizarem seus pedidos. A plataforma conta com diversas funcionalidades, permitindo que os usuários escolham seus lanches, personalizem os pedidos e enviem diretamente para o WhatsApp da hamburgueria, com todos os detalhes necessários para um atendimento rápido e eficiente. O projeto foi pensado para otimizar o processo de pedidos, tornando-o mais dinâmico e acessível, proporcionando uma navegação intuitiva e visual atraente para os clientes. 🚀🍔",
  },
  {
    id: 8,
    thumb: "/sushi.jpeg",
    image: "/sushi.jpeg",
    alt: "sushi shop",
    title: "Project Sushi Shop🍣",
    description:
      "Projeto de um e-commerce, com diversas funcionalidades, como exibição de produtos, carrinho de compras e o redirecionamento para o WhatsApp.",
    techStack: "React | Next | TypeScript | TailwindCss",
    liveLink: "https://sushi-shop-six.vercel.app",
    repoLink: "",
    frontLink: "https://github.com/MatheusRodriguesdaSilveira/Sushi-Shop",
    content:
      "O Project Sushi Shop é um e-commerce desenvolvido para restaurantes de sushi, proporcionando uma experiência prática e eficiente para os clientes realizarem seus pedidos online. A plataforma permite a exibição detalhada dos produtos, onde os usuários podem visualizar opções de sushis, combos e acompanhamentos disponíveis. Além disso, o sistema conta com um carrinho de compras, onde os clientes podem adicionar ou remover itens antes de finalizar o pedido. Após a escolha dos produtos, o pedido é redirecionado automaticamente para o WhatsApp do restaurante, contendo todos os detalhes necessários para agilizar o atendimento e garantir uma comunicação direta com o estabelecimento.",
  },
  {
    id: 9,
    thumb: "/task list.png",
    image: "/task list.png",
    alt: "task list",
    title: "Task List✔️",
    description:
      "Aplicação web que permite aos usuários adicionar tarefas, com funcionalidades para editar, concluir, excluir e reorganizar a posição das tarefas dentro da lista.",
    techStack: "React | Next | TypeScript | TailwindCss",
    liveLink: "https://task-list-black-six.vercel.app",
    repoLink: "",
    frontLink: "https://github.com/MatheusRodriguesdaSilveira/Task-List",
    content:
      "O Task List é uma aplicação web desenvolvida para auxiliar os usuários na organização de suas atividades diárias. A plataforma permite adicionar tarefas de forma prática, contando com funcionalidades como edição, conclusão, exclusão e reorganização da posição das tarefas dentro da lista, garantindo maior flexibilidade e controle sobre as atividades. Com uma interface intuitiva e dinâmica, o Task List facilita o gerenciamento de tarefas, proporcionando uma experiência fluida e eficiente para acompanhar e organizar compromissos de maneira simples e acessível. ✅🚀",
  },
  {
    id: 10,
    thumb: "/student list.png",
    image: "/student list.png",
    alt: "student list",
    title: "Project Student List App👨‍🎓",
    description:
      "Aplicação web que permite aos usuários adicionar tarefas, com funcionalidades para editar, concluir, excluir e reorganizar a posição das tarefas .",
    techStack: "React | Next | TypeScript | TailwindCss",
    liveLink: "https://grade-table.vercel.app",
    repoLink: "",
    frontLink: "https://github.com/MatheusRodriguesdaSilveira/Grade-Table",
    content:
      "O Project Student List App 👨‍🎓 é uma aplicação web desenvolvida para facilitar o gerenciamento de estudantes em uma lista interativa. A plataforma permite adicionar estudantes e conta com funcionalidades como edição, remoção e reorganização da posição dos alunos na lista, proporcionando um controle mais eficiente e organizado. Com uma interface intuitiva e responsiva, o Project Student List App torna a gestão de estudantes mais simples e prática, permitindo uma navegação fluida e dinâmica para acompanhar e administrar as informações com facilidade. 🎓🚀",
  },
  {
    id: 11,
    thumb: "/weather app.jpeg",
    image: "/weather app.jpeg",
    alt: "weather app",
    title: "Project Weather App☀️",
    description:
      "Este projeto é um aplicativo de clima em tempo real, consumindo uma api pública de tempo chamada OpenWeatherMap.",
    techStack: "Html | JavaScript | TailwindCss",
    liveLink: "https://project-weatherapp.vercel.app",
    repoLink: "",
    frontLink: "https://github.com/MatheusRodriguesdaSilveira/Weather-App",
    content:
      "O Project Weather App é um aplicativo de clima em tempo real que fornece informações meteorológicas precisas para qualquer localização. O sistema consome dados da API pública OpenWeatherMap, exibindo detalhes como temperatura, umidade, velocidade do vento e condições climáticas atuais. Com uma interface simples e intuitiva, o Project Weather App permite que os usuários busquem rapidamente o clima de qualquer cidade, oferecendo uma experiência prática e acessível para o acompanhamento das condições meteorológicas em tempo real. ☁️🌍🚀",
  },
];
