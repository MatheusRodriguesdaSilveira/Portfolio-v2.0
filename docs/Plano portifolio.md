# Plano de Atualização — Portfólio Matheus

Base: export do LinkedIn (Profile.pdf) + 4 postagens recentes, comparado com o conteúdo atual de `portfolio-matheussilveira.vercel.app`.

Ordem sugerida: do maior impacto/menor esforço para o maior esforço. Cada item diz **o quê**, **onde** e traz **texto pronto** + um **prompt para o Claude Code**.

---

## 🔴 Prioridade 0 — Corrigir o cargo (rápido e crítico)

**Problema:** Hero e About dizem _"estagiário na área de desenvolvimento"_. O LinkedIn mostra que você é **Analyst Agentforce Jr na Gentrop desde abril/2026**. Hoje o próprio site se contradiz (a Journey já fala "Analista", o topo não).

**Onde:** componente do Hero e componente do About.

**Texto novo sugerido (Hero, parágrafo de intro):**

> 👋 Meu nome é **Matheus**, tenho 20 anos e sou **Desenvolvedor de Software** especializado em **Salesforce e Agentforce**. Atualmente atuo como **Analista Agentforce Jr na Gentrop**, criando e escalando **agentes autônomos de IA** que transformam operações de negócio.

**Prompt Claude Code:**

> No Hero e no About, substitua todas as menções a "estagiário" por "Analista Agentforce Jr na Gentrop". Ajuste o texto para refletir que atuo efetivamente (não mais estágio), mantendo o tom e a marcação de destaque atuais. Mostre o diff antes de aplicar.

---

## 🔴 Prioridade 1 — Adicionar os 4 projetos Agentforce reais

Este é o maior ganho de posicionamento. Sua headline é Agentforce, mas a seção Projects só tem projetos web. Adicione estes casos (pode anonimizar clientes).

**Onde:** array/lista de projetos da seção "My Projects".

### Card A — Agente de Suporte Técnico (IT) 🛠️

> Agente de IA integrado ao Google Chat para diagnóstico e resolução de problemas técnicos, com automação de abertura de chamados e gestão de escalonamento. Inclui arquitetura multiagente para controle do ciclo de vida de dispositivos e logística via WhatsApp.
> **Stack:** Agentforce · Apex · Flows · Google Chat · WhatsApp API

### Card B — Agente SDR de Vendas 📈

> Agente de qualificação de leads usando a metodologia BANT, com validação de CNPJ via API e agendamento automático de reuniões — aumentando a escalabilidade do funil de vendas.
> **Stack:** Agentforce · Prompt Builder · REST APIs · Flows

### Card C — Agente de Recuperação de Crédito 💳

> Agente financeiro para atendimento em larga escala via WhatsApp: renegociação de dívidas, simulação de parcelamentos e escolha de forma de pagamento (Pix/Boleto), com regras de negócio e explicação de conceitos financeiros para aumentar a taxa de acordos.
> **Stack:** Agentforce · Apex · WhatsApp API · Data Cloud

### Card D — Agent Guigo (Agentforce World Tour SP) 🎪

> Agente desenvolvido para o Agentforce World Tour São Paulo: triagem personalizada, quizzes interativos, diagnóstico de perfil e portfólio de agentes. Levou mais de 500 visitantes ao stand da Gentrop para interagir com a solução.
> **Stack:** Agentforce · IA Generativa · Data Cloud

**Observação:** como esses projetos não têm link público de repositório, considere trocar o botão "Acesse o Projeto!" por "Ver detalhes" (abrindo um modal/descrição) ou por um link para a postagem no LinkedIn quando houver (ex.: o Agent Guigo tem post).

**Prompt Claude Code:**

> Na seção de projetos, adicione 4 novos projetos de Salesforce/Agentforce no mesmo formato dos existentes (título, descrição, imagem, tags de stack). Use os textos que vou colar. Para projetos sem link de repositório, adapte o card para não exibir o botão "Acesse o Projeto!" ou trocá-lo por um link opcional. Coloque esses 4 projetos no início do carrossel, antes dos projetos web.

---

## 🟠 Prioridade 2 — Segunda certificação (Data 360 Consultant)

**Novo:** _Salesforce Certified Data 360 Consultant_ — emitido em 01/07/2026, Credential ID 7905614. Isso faz de você **"2x Salesforce Certified"**.

**Onde:** seção Journey (novo card em 2026) e, idealmente, uma faixa de credenciais perto do Hero.

**Texto do card (Journey):**

> **Salesforce Certified Data 360 Consultant ☁️📊** — Concluído em Jul. de 2025/2026. Certificação focada em Data Cloud, Customer 360, Identity Resolution, Data Modeling, Segmentation, Activation e Governança de Dados — consolidando a base de dados unificados que fundamenta (grounding) os agentes de IA.
> **Tags:** Data Cloud · Customer 360 · Data Modeling · Segmentation
> Link verificação: sforce.co/verifycerts (ID 7905614)

**Sugestão extra:** troque as menções soltas a "1 certificação" e destaque **"2x Salesforce Certified"** no Hero ou numa faixa logo abaixo, com badges clicáveis (Agentforce Specialist + Data 360 Consultant).

**Prompt Claude Code:**

> Adicione um novo card na seção Journey (ano 2026) para a certificação Salesforce Certified Data 360 Consultant, no mesmo estilo do card da certificação Agentforce Specialist. Inclua as tags e o texto que vou colar. Depois, avalie criar uma pequena faixa de "2x Salesforce Certified" com dois badges perto do Hero.

---

## 🟠 Prioridade 3 — Completar a Journey com o cargo Freelance

**Problema:** a Journey pula de "Metodista (2024)" direto para "Gentrop (2025)". Falta o ano de **Freelance Full Stack (abr/2024 – mar/2025)** — que é exatamente o que dá contexto a todos os projetos web (Pizza, Sushi, Burger, e-commerces).

**Texto do card (Journey, entre 2024 e 2025):**

> **Desenvolvedor Full Stack — Freelance 💻** — Abr. de 2024 a Mar. de 2025. Criação de sites e APIs com React, Node.js, JavaScript e TypeScript. Interfaces dinâmicas e responsivas com Tailwind CSS e back-ends robustos, traduzindo requisitos de clientes em soluções eficientes, otimizadas e de alta qualidade.
> **Tags:** React · Node.js · TypeScript · Tailwind · REST APIs

**Bônus:** também vale **dividir o card atual da Gentrop em dois** para mostrar a progressão:

1. Desenvolvedor de Software (abr/2025 – abr/2026)
2. Analyst Agentforce Jr — promoção (abr/2026 – presente)

**Prompt Claude Code:**

> Adicione um card de "Desenvolvedor Full Stack (Freelance) — abr/2024 a mar/2025" na Journey, posicionado antes da Gentrop. Depois, divida o card atual da Gentrop em dois para mostrar a progressão de Desenvolvedor de Software para Analyst Agentforce Jr (promoção em abril de 2026). Use os textos que vou colar.

---

## 🟡 Prioridade 4 — Atualizar os cards de Skills

Faltam skills que já estão no seu LinkedIn:

- **Salesforce & Agentforce:** adicionar **Data Cloud**, **LWC (Lightning Web Components)** e **Salesforce CLI**.
- Considerar uma linha/tag de **Inglês — Professional Working** (não há menção de idioma no site).

**Prompt Claude Code:**

> No card de Skills "Salesforce & Agentforce", adicione Data Cloud, LWC (Lightning Web Components) e Salesforce CLI, seguindo o mesmo padrão visual de ícone + label dos itens existentes. Se houver ícone oficial disponível no lucide/react-icons, use; senão, use um ícone genérico coerente.

---

## 🟡 Prioridade 5 — Correções de responsividade (bugs reais)

1. **Buraco de navegação entre 768px–1024px:** menu desktop é `hidden lg:flex` e o hambúrguer é `md:hidden` — no intervalo `md`–`lg` não há navegação. Ajuste o hambúrguer para `lg:hidden`.
2. **Estatísticas somem no mobile:** o bloco "+2 Anos / +10 Projetos / +20 Repos / +500 Commits" usa `hidden md:flex`. Exiba em grid 2×2 no celular.
3. **Verificar o dropdown mobile:** no HTML só aparece o ícone do hambúrguer; confirmar se abre e lista todas as seções.
4. **Trocar `h-screen`/`md:h-screen`** por `min-h-screen` nas seções, para não cortar conteúdo em telas baixas ou no modo paisagem.

**Prompt Claude Code:**

> Corrija a responsividade: (1) faça o menu hambúrguer aparecer até o breakpoint lg e o menu desktop a partir de lg, sem nenhum intervalo de largura sem navegação; (2) torne o bloco de estatísticas visível no mobile em grid 2x2; (3) confirme que o dropdown mobile abre e lista todas as seções; (4) substitua h-screen por min-h-screen nas seções onde houver risco de corte de conteúdo. Teste mentalmente em 375px, 768px, 1024px e 1440px.

---

## 🟢 Prioridade 6 — SEO, compartilhamento e polimento

- **Meta tags / Open Graph:** o `<meta description>` está genérico e não há OG/Twitter Card. Ao colar o link no LinkedIn/WhatsApp, não aparece preview. Adicionar `og:title`, `og:description`, `og:image`, `twitter:card`.
  - Sugestão de description: _"Matheus Rodrigues da Silveira — Analista Agentforce Jr | Desenvolvedor Salesforce & Agentforce | 2x Salesforce Certified. Agentes autônomos de IA, Data Cloud e automação."_
- **Acessibilidade:** os itens do menu são `<a>` sem `href` (não navegam por teclado, ruins para SEO) — usar âncoras reais (`#about`, `#skills`...). Ícones sociais sem `aria-label`.
- **Typos:** "Gestão de Progetos" → "Projetos"; "Universidade Metodista de Sao Paulo" → "São"; tag "Tecnológo" → "Tecnólogo".
- **Alinhar Agentblazer:** o post fala em **Legend 2026** (não 2025). Conferir os cards e usar a nomenclatura atual.
- **Datas:** Metodista começa em **fevereiro/2024** (o site diz Jan.).

**Prompt Claude Code:**

> Adicione metatags de SEO e Open Graph (title, description, og:title, og:description, og:image, twitter:card) no layout, com o texto que vou colar. Depois corrija: âncoras reais nos itens do menu, aria-label nos ícones sociais, e os typos "Progetos"→"Projetos", "Sao"→"São", "Tecnológo"→"Tecnólogo".

---

## Resumo do que mudou (LinkedIn × Portfólio)

| Item                 | Portfólio hoje            | LinkedIn (real)                         | Ação                   |
| -------------------- | ------------------------- | --------------------------------------- | ---------------------- |
| Cargo                | Estagiário                | Analyst Agentforce Jr (abr/2026)        | Atualizar Hero + About |
| Certificações        | 1 (Agentforce Specialist) | 2x (+ Data 360 Consultant)              | Novo card + faixa      |
| Projetos Agentforce  | Nenhum                    | 4 casos reais                           | Adicionar ao Projects  |
| Freelance full stack | Ausente                   | Abr/2024–Mar/2025                       | Novo card na Journey   |
| Skills               | Sem Data Cloud/LWC/CLI    | Data Cloud, LWC, Salesforce CLI, Inglês | Completar cards        |
| Data Metodista       | Jan/2024                  | Fev/2024                                | Corrigir               |

---

_Dica de execução: pelo seu gosto de atacar um subconjunto por vez, sugiro fazer na ordem P0 → P1 → P2. Só P0+P1 já elevam muito o portfólio (cargo correto + os agentes reais aparecendo)._
