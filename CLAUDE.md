# CLAUDE.md

Guia de contexto para o Claude Code trabalhar neste repositório. Leia antes de editar.

## Sobre o projeto

Portfólio pessoal de **Matheus Rodrigues da Silveira** — Analista Agentforce Jr / Desenvolvedor Salesforce & Agentforce. Site de página única (one-page) em português (PT-BR), voltado a recrutadores e ao ecossistema Salesforce, publicado na Vercel em `portfolio-matheussilveira.vercel.app`.

## Stack

Confirmado em `package.json` em 2026-07-31:

- **Next.js 14.2.16** (App Router, `src/app/`)
- **React 18** + **TypeScript 5** (componentes `.tsx`)
- **Tailwind CSS 3.4.10** (estilização principal, via classes utilitárias) + `tailwindcss-animate`
- **framer-motion 11.11.10** / **motion 12.4.2** (animações)
- **lucide-react 0.438.0** e **react-icons 5.3.0** (ícones); **boxicons** também presente
- **next/image** (todas as imagens)
- **next/font** (fontes locais, `src/app/fonts/`)
- **@emailjs/browser** / **emailjs-com** (envio do formulário de contato)
- **react-hook-form** (formulário de contato)
- Deploy: **Vercel** (push na branch principal dispara o build)

Observação: `@mantine/core` e `@mantine/hooks` estão no `package.json`, mas **não há nenhum import de `@mantine/*` em `src/`** — é dependência residual não utilizada, não remover sem confirmar com o usuário.

## Comandos

Confirmado em `package.json`:

```bash
npm run dev      # next dev — ambiente de desenvolvimento
npm run build    # next build (roda "prebuild": next telemetry disable, antes)
npm run start    # next start — roda o build localmente
npm run lint     # next lint — ESLint
```

## Estrutura

```
docs/
└─ Plano portifolio.md
public/
├─ agendamentoDeServicos.jpeg
├─ agentblazer.png
├─ AgentforceIcon.png
├─ api-vendas-thumb.png
├─ api-vendas.png
├─ b7Icon.jpeg
├─ better agents.jfif
├─ certified_Agentforce-Specialist.png
├─ code.png
├─ CV_MatheusSilveira.pdf
├─ devblog thumb.jpeg
├─ devblog.jpeg
├─ etecIcon.jpeg
├─ favicon.png
├─ FlowIcon.png
├─ gd sports thumb.jpeg
├─ gd sports.jpeg
├─ gentrop_logo.png
├─ hamburgueria.jpeg
├─ ImageCode.png
├─ imageCode.svg
├─ imageCode2.svg
├─ imageDev.svg
├─ in orbit thumb.jpeg
├─ in orbit.jpeg
├─ matheus.png
├─ metoIcon.jpeg
├─ robots.txt
├─ SalesforceIcon.png
├─ student list.png
├─ sushi.jpeg
├─ system pizza thumb.jpeg
├─ system pizza.jpeg
├─ task list.png
└─ weather app.jpeg
src/
├─ app/
│  ├─ fonts/
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ ActionsGrid.module.css
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ sitemap.ts
├─ assets/
│  ├─ Mail_custom_icon.json
│  └─ Mail.svg
├─ components/
│  ├─ Agents/
│  │  └─ Agents.tsx
│  ├─ About/
│  │  ├─ components/
│  │  │  ├─ ImageBorder.tsx
│  │  │  └─ Techs.tsx
│  │  └─ About.tsx
│  ├─ Body/
│  │  ├─ components/
│  │  │  ├─ ArrowDown.tsx
│  │  │  ├─ ButtonContact.tsx
│  │  │  ├─ ButtonCv.tsx
│  │  │  └─ IconColumn.tsx
│  │  └─ Body.tsx
│  ├─ Contact/
│  │  └─ Contact.tsx
│  ├─ Footer/
│  │  └─ Footer.tsx
│  ├─ Header/
│  │  └─ Navbar.tsx
│  ├─ hooks/
│  │  └─ useOutsideClick.tsx
│  ├─ Trajectory/
│  │  └─ Experience.tsx
│  ├─ ui/
│  │  ├─ Icons/
│  │  │  └─ IconMail.tsx
│  │  ├─ apple-cards-carousel.tsx
│  │  ├─ blur-fade.tsx
│  │  ├─ Button.tsx
│  │  ├─ ButtonMotion.tsx
│  │  ├─ ButtonScrollToTop.tsx
│  │  ├─ gradual-spacing.tsx
│  │  ├─ hr.tsx
│  │  ├─ hyper-text.tsx
│  │  ├─ outline-button.tsx
│  │  ├─ RotatingText.tsx
│  │  ├─ SpotlightCard .tsx
│  │  ├─ TextCounter.tsx
│  │  └─ timeline.tsx
│  └─ Works/
│     └─ Projects.tsx
└─ lib/
   ├─ projects.ts
   └─ utils.ts

```

Seções da página, em ordem: **Header → Hero → About → Proficiência (Skills) → Journey → Agentes Agentforce → Contact → Footer**.

> A seção **Projects** (carrossel de projetos web) foi removida da página em 2026-07-31 (a pedido do usuário). Os componentes (`src/components/Works/Projects.tsx`, `src/components/ui/apple-cards-carousel.tsx`, `src/lib/projects.ts`) continuam no repositório, só não são mais importados em `src/app/page.tsx` — reintroduzir é só voltar a importar `AppleCardsCarouselDemo` e restaurar `scrollToProjects`/`projectsRef`/o item "Projects" no Navbar.
>
> Em 2026-08-01 foi criada uma seção **própria** para os agentes Agentforce (`src/components/Agents/Agents.tsx`, renderizada em `page.tsx` como `AgentsSection`), diferente do antigo carrossel de Projects — cards maiores, com um bloco "Arquitetura" detalhando o fluxo de cada agente. Os agentes são projetos reais da Gentrop sem deploy público (rodam dentro de um org Salesforce, amarrados a integrações de clientes), então os cards não têm botão de link — só descrição, arquitetura e stack.

## Convenções

- **Idioma:** conteúdo voltado ao usuário em **PT-BR**. Manter consistência (há mistura atual de títulos em inglês como "My Journey" — padronizar quando for editar).
- **Estilização:** usar **Tailwind**; seguir os padrões visuais já existentes (cores `cyan-*`/`zinc-*`, cards com `rounded-3xl border border-neutral-800` e gradientes). Não introduzir bibliotecas de estilo novas sem necessidade.
- **Imagens:** sempre via `next/image`, com `alt` descritivo. Assets em `public/`.
- **Ícones:** preferir `lucide-react`; usar `react-icons` quando não houver equivalente.
- **Responsividade é requisito, não detalhe.** Sempre validar em **375px, 768px, 1024px e 1440px**. Testar comportamento em **Chrome mobile** antes de considerar pronto. Evitar breakpoints que deixem faixas de largura sem navegação ou que escondam conteúdo importante no mobile.
- **Animações:** testar em mobile (especialmente Android Chrome) antes de adotar qualquer biblioteca de animação — priorizar CSS/Tailwind quando possível.
- **Acessibilidade:** links de navegação devem ser âncoras reais (`href="#secao"`); ícones-link precisam de `aria-label`.
- Antes de aplicar mudanças amplas, **mostrar o diff** e explicar o porquê.

## Fonte de verdade do conteúdo (dados profissionais atuais)

Use estes dados ao escrever/atualizar qualquer texto do site. **Não** reintroduzir informações antigas (ex.: "estagiário").

- **Cargo atual:** Analista Agentforce Jr na **Gentrop** (efetivado em 15/04/2026; antes foi estagiário/Desenvolvedor de Software na Gentrop, abr/2025–abr/2026).
- **Certificações:** **2x Salesforce Certified** — _Agentforce Specialist_ (jun/2025) + _Data 360 Consultant_ (emitida em 01/07/2026, ID 7905614, verificação em sforce.co/verifycerts).
- **Trailhead:** Agentblazer **Legend 2025** (conquistado em 2025); **Legend 2026** — trilhas atualizadas do Agent Builder e Data 360 concluídas em 07/04/2026.
- **Formação:** Tecnólogo em Análise e Desenvolvimento de Sistemas — UMESP (fev/2024 – concluído em 03/06/2026); técnico em Informática para Internet — Etec Lauro Gomes (fev/2022 – jun/2023).
- **Experiência anterior:** Desenvolvedor Full Stack (Freelance), abr/2024 – mar/2025.
- **Especialidades:** Agentforce, Data Cloud, Flow Builder, Apex, LWC, Salesforce CLI; back-end em Node.js, TypeScript, REST APIs.
- **Idiomas:** Inglês (Professional Working).
- **Contato:** matheussilveira2005@gmail.com · WhatsApp 5511910346829 · github.com/MatheusRodriguesdaSilveira · linkedin.com/in/matheus-rodrigues-da-silveira

## Plano de atualização

O plano priorizado de melhorias do portfólio está em **`docs/Plano portifolio.md`**. Ele traz, por ordem de impacto: correção do cargo (P0), adição dos projetos Agentforce reais (P1), segunda certificação (P2), cargo freelance na Journey (P3), skills (P4), correções de responsividade (P5) e SEO/acessibilidade (P6). Cada item tem texto pronto e um prompt de execução.

Ao trabalhar em melhorias do portfólio, **consulte `docs/Plano portifolio.md` primeiro** e siga a ordem P0 → P1 → P2 salvo instrução em contrário.

> Para importar o conteúdo do plano automaticamente nas sessões do Claude Code, você pode adicionar a linha abaixo (sintaxe de import do Claude Code):
>
> `@docs/Plano portifolio.md`

## Diretrizes ao editar

- Fazer mudanças focadas e incrementais; preferir atacar um subconjunto do plano por vez.
- Não quebrar a responsividade existente ao adicionar conteúdo.
- Manter o padrão visual e a paleta atuais.
- Ao adicionar projetos sem repositório público (ex.: agentes Agentforce), adaptar o card para não exibir botão de link quebrado.
