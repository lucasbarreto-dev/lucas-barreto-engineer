export type Lang = "en" | "pt-BR";

export interface CaseStudyText {
  id: string;
  title: string;
  type: string;
  context: string;
  problem: string;
  solution: string;
  role: string;
  outcome: string;
}

export interface ExperienceText {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface TestimonialText {
  id: string;
  name: string;
  role: string;
  text: string;
}

export interface SkillGroupText {
  id: string;
  label: string;
}

export interface Dictionary {
  nav: {
    about: string;
    work: string;
    experience: string;
    skills: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    name: string;
    tagline: string;
    cta: string;
    microcopy: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  caseStudies: {
    heading: string;
    subtitle: string;
    labels: {
      problem: string;
      solution: string;
      role: string;
      outcome: string;
      watchDemo: string;
      openYoutube: string;
    };
    list: CaseStudyText[];
  };
  experience: {
    heading: string;
    list: ExperienceText[];
  };
  skills: {
    heading: string;
    groups: SkillGroupText[];
  };
  testimonials: {
    heading: string;
    subtitle: string;
    list: TestimonialText[];
  };
  contact: {
    heading: string;
    subtext: string;
    cta: string;
    replyNote: string;
    emailSubject: string;
    emailBody: string;
  };
}

const en: Dictionary = {
  nav: {
    about: "About",
    work: "Works",
    experience: "Experience",
    skills: "Skills",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  hero: {
    title: "Full Stack Software Engineer",
    name: "Lucas Barreto",
    tagline:
      "Building scalable web applications, internal tools, and automation workflows for product-driven teams.",
    cta: "Get in Touch",
    microcopy: "Open to Remote • Based in Brazil • English Proficient",
  },
  about: {
    heading: "About",
    paragraphs: [
      "I'm a Full Stack Software Engineer focused on building maintainable, scalable systems that solve real operational and product problems. My experience spans backend services, internal tools, API integrations, and automation workflows — with an emphasis on clean architecture and long-term maintainability.",
      "I've worked across early-stage and growing companies, taking ownership of systems end-to-end — from database modeling and API design to frontend implementation and deployment.",
    ],
  },
  caseStudies: {
    heading: "Selected Works",
    subtitle:
      "Engineering-focused case studies from internal tools, automation workflows, system integrations and apps.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      role: "Role & Contribution",
      outcome: "Outcome",
      watchDemo: "Watch Demo",
      openYoutube: "Open on YouTube",
    },
    list: [
      {
        id: "habilita",
        title: "Habilita+ — AI-Powered Driver Education Platform",
        type: "Full-Stack EdTech SaaS + Marketplace",
        context:
          "Habilita+ is a full-stack educational platform designed to simulate the complete journey of obtaining a driver's license, combining theoretical learning, gamified assessments, AI assistance, and a marketplace of certified driving instructors.",
        problem:
          "Traditional driving education is fragmented, low-engagement, and heavily dependent on in-person instruction with limited personalization. Students often struggle with theory retention, lack practice simulation, and have no centralized system to connect with instructors or track learning progress.",
        solution:
          "Built a unified SaaS platform integrating structured learning modules, adaptive quizzes, competitive simulations, and an AI assistant embedded in the learning flow. Developed a dual marketplace system for instructors with geolocation-based discovery, scheduling, real-time chat, and Stripe-powered payments. Implemented role-based access control, subscription management, identity verification with liveness detection, and automated certificate generation with QR-based validation.",
        role:
          "Led full-stack architecture and implementation of core product systems, including authentication flows, subscription engine, AI integration, marketplace logic, and educational content delivery system.",
        outcome:
          "Delivered a production-grade EdTech platform integrating multiple complex systems (AI, payments, marketplace, identity verification, and gamification). Designed for scalability, modularity, and multi-role access (student, instructor, admin), simulating a real-world SaaS ecosystem with end-to-end user journeys.",
      },
      {
        id: "compliance",
        title: "AI Compliance Copilot",
        type: "Developer Tooling",
        context:
          "Open-source project built for the E2B + MCP Hackathon — an AI-powered compliance assistant for GitHub pull requests.",
        problem:
          "Engineering teams lack automated, centralized compliance checks during code review. Security vulnerabilities, license violations, and code quality issues are often caught too late — or not at all — leading to costly fixes and audit risks.",
        solution:
          "Built a full-stack compliance bot that hooks into GitHub PRs via webhooks, spins up isolated E2B sandboxes to run security scanners, and uses Groq AI (LLaMA 3.1 70B) to analyze findings. The system detects hardcoded secrets, SQL injection, XSS, GPL violations, weak cryptography, and enforces custom company rules — all with configurable severity levels and a real-time dashboard.",
        role:
          "Designed and implemented the complete system architecture — backend API, E2B sandbox orchestration, Groq AI integration, GitHub App webhook handlers, compliance rules engine, and the Next.js dashboard.",
        outcome:
          "Delivered a production-ready tool that automatically scans PRs for 4 compliance categories (security, licensing, code quality, custom rules), provides inline PR comments with actionable findings, and supports manual commands for on-demand scanning and automated fixes.",
      },
      {
        id: "learning-ops",
        title: "Learning Operations Automation Pipeline",
        type: "Back-Office Automation",
        context:
          "The learning platform update process depended on repetitive manual work to organize and publish session assets for educational cohorts.",
        problem:
          "Operations relied on a time-consuming workflow to locate meeting recordings, organize folders, rename files, export materials, and prepare content for platform publishing. This process created inconsistencies, increased execution time, and introduced avoidable operational errors.",
        solution:
          "Built a daily automation workflow using Google Apps Script to process session assets end-to-end. The system identified session metadata, created standardized folder structures, copied and renamed meeting recordings, exported supporting materials to PDF, generated metadata files, and logged execution to ensure traceability and idempotent processing.",
        role:
          "Designed and implemented the full automation workflow, including business logic, file processing rules, Google Workspace integrations, and operational structure.",
        outcome:
          "Automated the processing of 9–11 sessions per week, saving approximately 12–15 minutes per session (~2–3 hours weekly). Reduced operational errors to near zero while improving standardization, reliability, and scalability of the publishing workflow.",
      },
    ],
  },
  experience: {
    heading: "Experience",
    list: [
      {
        id: "dtwo",
        company: "DTWO TECNOLOGIA",
        role: "Full Stack Developer",
        period: "2025 — Present",
        bullets: [
          "Build and maintain web and mobile applications using TypeScript, React, and Tailwind CSS",
          "Contribute to Habilita+, a platform for the driver's license acquisition journey",
          "Develop full stack features across frontend, backend, and service integrations",
          "Integrate external APIs, including payment solutions such as Stripe",
          "Investigate and resolve technical issues to enhance application stability and product evolution",
          "Support deployment routines, environment maintenance, and workflow improvements",
          "Leverage AI-assisted development tools (Lovable, Antigravity) to accelerate feature delivery",
          "Participate in code reviews and promote engineering best practices",
        ],
      },
      {
        id: "strides",
        company: "STRIDES",
        role: "Software Engineer Jr.",
        period: "2023 — 2025",
        bullets: [
          "Supported setup and management of 40+ educational cohorts and certificate workflows",
          "Applied AI-assisted automations for communication workflows and data processing",
          "Built automations using Google Apps Script and no-code/low-code platforms like Make and n8n",
          "Developed software features, automation workflows, and internal process improvements",
          "Implemented system and API integrations to automate operational processes",
          "Structured and maintained operational data flows and internal process logic",
          "Optimized internal routines to reduce manual work and improve team efficiency",
          "Identified bottlenecks and proposed technical improvements to enhance productivity",
        ],
      },
    ],
  },
  skills: {
    heading: "Skills",
    groups: [
      { id: "frontend", label: "Frontend Engineering" },
      { id: "backend", label: "Backend & APIs" },
      { id: "data", label: "Data & Persistence" },
      { id: "automation", label: "Automation & Integrations" },
      { id: "ai", label: "AI-Assisted Development" },
      { id: "testing", label: "Testing & Reliability" },
      { id: "devtools", label: "Developer Tools" },
    ],
  },
  testimonials: {
    heading: "What people say about my work",
    subtitle:
      "Feedback from people I've worked with across different projects and teams.",
    list: [
      {
        id: "liliane",
        name: "Liliane Silva",
        role: "Process & Operations Specialist | Worked with Lucas at Strides",
        text: "Lucas is a technically strong developer with a solid ability to turn requirements into efficient solutions. He builds well-structured and reliable systems with a strong focus on real business impact. He also stands out for his collaboration and willingness to share knowledge, consistently raising the technical level of the team around him.",
      },
      {
        id: "pedro",
        name: "Pedro Caldas",
        role: "Machine Learning | GenAI | AI Engineer @ Santander | Studied with Lucas at Trybe",
        text: "Lucas is an extremely hardworking person who cares a lot about being organized to achieve his goals. I studied with him during our programming course and that was undoubtedly his trait that caught my attention the most. Anyone lucky enough to work with Lucas can be sure to have someone very competent at their side.",
      },
    ],
  },
  contact: {
    heading: "Looking for someone who automates processes and delivers results?",
    subtext:
      "I can help your team reduce manual work and build more efficient systems using Node.js, integrations, and AI.",
    cta: "Let's Talk",
    replyNote: "Usually replies within 24 hours",
    emailSubject: "Opportunity",
    emailBody: "Hi Lucas, I saw your portfolio and would like to talk about an opportunity.",
  },
};

const ptBR: Dictionary = {
  nav: {
    about: "Sobre",
    work: "Projetos",
    experience: "Experiência",
    skills: "Habilidades",
    testimonials: "Depoimentos",
    contact: "Contato",
  },
  hero: {
    title: "Engenheiro de Software Full Stack",
    name: "Lucas Barreto",
    tagline:
      "Construindo aplicações web escaláveis, ferramentas internas e fluxos de automação para times orientados a produto.",
    cta: "Entrar em Contato",
    microcopy: "Disponível para trabalho remoto • Atuando no Brasil • Inglês Avançado",
  },
  about: {
    heading: "Sobre",
    paragraphs: [
      "Sou Engenheiro de Software Full Stack focado em construir sistemas escaláveis e de fácil manutenção que resolvem problemas reais de produto e operação. Minha experiência abrange serviços de backend, ferramentas internas, integrações de APIs e fluxos de automação — sempre com foco em arquitetura limpa e manutenção a longo prazo.",
      "Já trabalhei em startups em estágio inicial e em crescimento, assumindo a responsabilidade dos sistemas de ponta a ponta — desde a modelagem de banco de dados e design de APIs até a implementação de frontend e deploy.",
    ],
  },
  caseStudies: {
    heading: "Projetos Selecionados",
    subtitle:
      "Estudos de caso com foco em engenharia: ferramentas internas, fluxos de automação, integrações de sistemas e apps.",
    labels: {
      problem: "Problema",
      solution: "Solução",
      role: "Função e Contribuição",
      outcome: "Resultado",
      watchDemo: "Assistir Demo",
      openYoutube: "Abrir no YouTube",
    },
    list: [
      {
        id: "habilita",
        title: "Habilita+ — Plataforma de Educação para Motoristas com IA",
        type: "SaaS EdTech Full-Stack + Marketplace",
        context:
          "Habilita+ é uma plataforma educacional full-stack projetada para simular toda a jornada de obtenção da CNH, combinando aprendizado teórico, avaliações gamificadas, assistência por IA e um marketplace de instrutores credenciados.",
        problem:
          "A educação tradicional para motoristas é fragmentada, com baixo engajamento e fortemente dependente de instrução presencial, com pouca personalização. Alunos têm dificuldade de retenção da teoria, falta de simulação prática e nenhum sistema centralizado para se conectar com instrutores ou acompanhar o progresso.",
        solution:
          "Desenvolvi uma plataforma SaaS unificada integrando módulos de aprendizado estruturados, quizzes adaptativos, simulações competitivas e um assistente de IA embutido no fluxo de aprendizagem. Criei um marketplace duplo para instrutores com descoberta por geolocalização, agendamento, chat em tempo real e pagamentos via Stripe. Implementei controle de acesso por papéis, gestão de assinaturas, verificação de identidade com detecção de liveness e geração automatizada de certificados com validação por QR.",
        role:
          "Liderei a arquitetura full-stack e a implementação dos sistemas centrais do produto, incluindo fluxos de autenticação, motor de assinaturas, integração com IA, lógica do marketplace e sistema de entrega de conteúdo educacional.",
        outcome:
          "Entreguei uma plataforma EdTech em nível de produção integrando múltiplos sistemas complexos (IA, pagamentos, marketplace, verificação de identidade e gamificação). Projetada para escalabilidade, modularidade e acesso multi-papel (aluno, instrutor, admin), simulando um ecossistema SaaS real com jornadas completas de usuário.",
      },
      {
        id: "compliance",
        title: "AI Compliance Copilot",
        type: "Ferramenta para Desenvolvedores",
        context:
          "Projeto open-source criado para o E2B + MCP Hackathon — um assistente de compliance com IA para pull requests no GitHub.",
        problem:
          "Times de engenharia carecem de verificações automatizadas e centralizadas de compliance durante o code review. Vulnerabilidades de segurança, violações de licença e problemas de qualidade muitas vezes são detectados tarde demais — ou nunca — gerando correções caras e riscos de auditoria.",
        solution:
          "Desenvolvi um bot full-stack de compliance que se conecta a PRs do GitHub via webhooks, sobe sandboxes isoladas no E2B para rodar scanners de segurança e usa Groq AI (LLaMA 3.1 70B) para analisar os achados. O sistema detecta credenciais expostas diretamente no código, SQL injection, XSS, violações GPL, criptografia fraca e aplica regras customizadas — tudo com níveis de severidade configuráveis e dashboard em tempo real.",
        role:
          "Como um dos desenvolvedores, desenhei e implementei toda a arquitetura do sistema — API de backend, orquestração de sandboxes E2B, integração com Groq AI, handlers de webhooks do GitHub App, motor de regras de compliance e o dashboard em Next.js.",
        outcome:
          "Entreguei uma ferramenta pronta para produção que escaneia PRs em 4 categorias de compliance (segurança, licenciamento, qualidade de código e regras customizadas), fornece comentários inline no PR com achados acionáveis e suporta comandos manuais para scans sob demanda e correções automatizadas.",
      },
      {
        id: "learning-ops",
        title: "Pipeline de Automação para Operações Educacionais",
        type: "Automação de Back-Office",
        context:
          "O processo de atualização da plataforma de ensino dependia de trabalho manual repetitivo para organizar e publicar os ativos de sessões para turmas em uma edTech.",
        problem:
          "A operação dependia de um fluxo demorado para localizar gravações de reuniões, consultar planilhas, organizar pastas, renomear arquivos, exportar materiais e preparar conteúdo para publicação. Esse processo gerava inconsistências, aumentava o tempo de execução e introduzia erros operacionais evitáveis.",
        solution:
          "Construí um fluxo de automação diário usando Google Apps Script para processar os ativos das sessões de ponta a ponta. O sistema identificava metadados da sessão, criava estruturas de pasta padronizadas, copiava e renomeava as gravações, exportava materiais de apoio para PDF, gerava arquivos de metadados e registrava a execução para garantir rastreabilidade e processamento idempotente.",
        role:
          "Desenhei e implementei todo o fluxo de automação, incluindo regras de negócio, processamento de arquivos, integrações com o Google Workspace e estrutura operacional.",
        outcome:
          "Automatizei o processamento de 9 a 11 sessões por semana, economizando cerca de 12 a 15 minutos por sessão (~2 a 3 horas semanais). Reduzi os erros operacionais a praticamente zero, melhorando a padronização, confiabilidade e escalabilidade do fluxo de publicação.",
      },
    ],
  },
  experience: {
    heading: "Experiência",
    list: [
      {
        id: "dtwo",
        company: "DTWO TECNOLOGIA",
        role: "Desenvolvedor Full Stack",
        period: "2025 — Presente",
        bullets: [
          "Construção e manutenção de aplicações web e mobile usando TypeScript, React e Tailwind CSS",
          "Contribuição com o Habilita+, plataforma para a jornada de obtenção da CNH",
          "Desenvolvimento de features fullstack abrangendo frontend, backend e integrações",
          "Integração de APIs externas, incluindo soluções de pagamento como Stripe",
          "Investigação e resolução de problemas técnicos para melhorar a estabilidade da aplicação e a evolução do produto",
          "Apoio em rotinas de deploy, manutenção de ambientes e melhoria de fluxos",
          "Utilização ferramentas de desenvolvimento assistido por IA (Lovable, Antigravity) para acelerar a entrega",
          "Participação em code reviews, mentorando e promovendo boas práticas de engenharia e carreira",
        ],
      },
      {
        id: "strides",
        company: "STRIDES",
        role: "Engenheiro de Software Jr.",
        period: "2023 — 2025",
        bullets: [
          "Apoiei o setup e a gestão de mais de 40 turmas educacionais e emissão de certificados",
          "Apliquei automações com IA em fluxos de comunicação e processamento de dados",
          "Construí automações com Google Apps Script e plataformas no-code/low-code como Make e n8n",
          "Desenvolvi features de software, fluxos de automação e melhorias de processos internos",
          "Implementei integrações de sistemas e APIs para automatizar processos operacionais",
          "Estruturei e mantive fluxos de dados operacionais e lógicas de processos internos",
          "Otimizei rotinas internas para reduzir trabalho manual e melhorar a eficiência do time",
          "Identifiquei gargalos e propus melhorias técnicas para aumentar a produtividade",
        ],
      },
    ],
  },
  skills: {
    heading: "Habilidades",
    groups: [
      { id: "frontend", label: "Engenharia Frontend" },
      { id: "backend", label: "Backend e APIs" },
      { id: "data", label: "Dados e Persistência" },
      { id: "automation", label: "Automação e Integrações" },
      { id: "ai", label: "Desenvolvimento Assistido por IA" },
      { id: "testing", label: "Testes e Confiabilidade" },
      { id: "devtools", label: "Ferramentas de Desenvolvimento" },
    ],
  },
  testimonials: {
    heading: "O que dizem sobre meu trabalho",
    subtitle:
      "Feedback de pessoas com quem trabalhei em diferentes projetos e times.",
    list: [
      {
        id: "liliane",
        name: "Liliane Silva",
        role: "Especialista em Processos e Operações | Trabalhou com o Lucas na Strides",
        text: "O Lucas é um desenvolvedor tecnicamente forte, com sólida capacidade de transformar requisitos em soluções eficientes. Ele constrói sistemas bem estruturados e confiáveis, com forte foco em impacto real para o negócio. Também se destaca pela colaboração e disposição em compartilhar conhecimento, elevando consistentemente o nível técnico do time ao seu redor.",
      },
      {
        id: "pedro",
        name: "Pedro Caldas",
        role: "Machine Learning | GenAI | AI Engineer @ Santander | Estudou com o Lucas na Trybe",
        text: "O Lucas é uma pessoa extremamente dedicada e que se preocupa muito em ser organizado para alcançar seus objetivos. Estudei com ele durante o curso de programação e essa foi, sem dúvida, a característica que mais me chamou a atenção. Quem tiver a sorte de trabalhar com o Lucas pode ter certeza de que terá ao seu lado alguém muito competente.",
      },
    ],
  },
  contact: {
    heading: "Procurando alguém que automatize processos e entregue resultados?",
    subtext:
      "Posso ajudar seu time a reduzir trabalho manual e construir sistemas mais eficientes usando Node.js, integrações e IA.",
    cta: "Vamos Conversar",
    replyNote: "Costumo responder em até 24 horas",
    emailSubject: "Oportunidade",
    emailBody: "Olá Lucas, vi seu portfólio e gostaria de conversar sobre uma oportunidade.",
  },
};

export const translations: Record<Lang, Dictionary> = {
  en,
  "pt-BR": ptBR,
};
