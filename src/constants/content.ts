export const siteConfig = {
  name: "Lucas Barreto",
  title: "Full Stack Software Engineer",
  tagline:
    "Building scalable web applications, internal tools, and automation workflows for product-driven teams.",
  email: "lucasbs.code@gmail.com",
  github: "https://github.com/lucasbarreto-dev",
  linkedin: "https://www.linkedin.com/in/lucasbarreto-dev/",
  upwork: "https://www.upwork.com/freelancers/~01849be61777eaf50b",
  resumeUrl: "#",
};

export const trustSignals = [
  "Open to Remote",
  "Based in Brazil",
  "English Proficient",
];

export const about = {
  paragraphs: [
    "I'm a Full Stack Software Engineer focused on building maintainable, scalable systems that solve real operational and product problems. My work spans backend services, internal tools, API integrations, and automation workflows — always with an emphasis on clean architecture and long-term maintainability.",
    "I've worked across early-stage and growing companies, taking ownership of systems end-to-end — from database modeling and API design to frontend implementation and deployment. I'm most effective when I can connect engineering decisions to business outcomes.",
  ],
};

export interface CaseStudy {
  title: string;
  type: string;
  context: string;
  problem: string;
  solution: string;
  role: string;
  outcome: string;
  stack: string[];
  github?: string;
  demo?: string;
  video?: string;
}

export const caseStudies: CaseStudy[] = [
  {
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
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js (Lovable Cloud)",
      "PostgreSQL",
      "Stripe",
      "RevenueCat",
      "AWS Amplify Liveness",
      "Web Speech API",
      "TanStack Query",
      "AI APIs (OpenAI / Google models)",
    ],
    demo: "https://www.instagram.com/habilitamais.app/reel/DWb-I_JkcPs/",
  },
  {
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
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "E2B",
      "Groq AI",
      "MCP",
    ],
    github: "https://github.com/lucasbarreto-dev/ai-compliance-copilot",
    video: "https://www.youtube.com/embed/PtnFZQmGtwA",
  },
  {
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
    stack: [
      "Google Apps Script",
      "JavaScript",
      "Google Sheets",
      "Google Drive",
      "Google Meet",
    ],
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "DTWO TECNOLOGIA",
    role: "Full Stack Developer",
    period: "2025 — Present",
    bullets: [
      "Build and maintain web and mobile applications using TypeScript, React, and Tailwind CSS",
      "Contribute to Habilita+, a platform for the driver’s license acquisition journey",
      "Develop full stack features across frontend, backend, and service integrations",
      "Integrate external APIs, including payment solutions such as Stripe",
      "Investigate and resolve technical issues to enhance application stability and product evolution",
      "Support deployment routines, environment maintenance, and workflow improvements",
      "Leverage AI-assisted development tools (Lovable, Antigravity) to accelerate feature delivery",
      "Participate in code reviews and promote engineering best practices",
    ],
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "Stripe"],
  },
  {
    company: "STRIDES",
    role: "Software Engineer Jr.",
    period: "2023 — 2025",
    bullets: [
      "Developed software features, automation workflows, and internal process improvements",
      "Built automations using Google Apps Script and no-code/low-code platforms like Make",
      "Implemented system and API integrations to automate operational processes",
      "Structured and maintained operational data flows and internal process logic",
      "Optimized internal routines to reduce manual work and improve team efficiency",
      "Applied AI-assisted automations for communication workflows and data processing",
      "Identified bottlenecks and proposed technical improvements to enhance productivity",
      "Supported setup and management of 40+ educational cohorts and certificate workflows",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Google Apps Script", "Make"],
  },
];

export const skillGroups = [
  {
    label: "Frontend Engineering",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Responsive Design",
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Supabase",
      "JWT",
      "Python",
    ],
  },
  {
    label: "Data & Persistence",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Data Modeling",
      "Migrations",
      "Query Optimization",
    ],
  },
  {
    label: "Automation & Integrations",
    skills: [
      "Google Apps Script",
      "Make",
      "n8n",
      "Webhooks",
      "API Integrations",
      "Workflow Automation",
    ],
  },
  {
    label: "AI-Assisted Development",
    skills: [
      "Cursor",
      "Lovable",
      "Antigravity",
      "Prompt Engineering",
      "AI Workflow Prototyping",
    ],
  },
  {
    label: "Testing & Reliability",
    skills: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Integration Testing",
      "Playwright",
      "Manual QA",
    ],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Linux"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
