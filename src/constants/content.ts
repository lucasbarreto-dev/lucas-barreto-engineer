export const siteConfig = {
  name: "Lucas Barreto",
  title: "Full Stack Software Engineer",
  tagline:
    "Building scalable web applications, internal tools, and automation workflows for product-driven teams.",
  email: "lucas@example.com",
  github: "https://github.com/lucasbarreto",
  linkedin: "https://linkedin.com/in/lucasbarreto",
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
}

export const caseStudies: CaseStudy[] = [
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
      "Build and maintain web and mobile applications using TypeScript, React, and Node.js",
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
    stack: ["React", "JavaScript", "Node.js", "REST APIs", "Google Apps Script", "Make"],
  },
];
export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Supabase", "Authentication", "Server-side Logic"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "Supabase", "Data Modeling", "Migrations", "Query Optimization"],
  },
  {
    label: "Automation & Integrations",
    skills: ["n8n", "Google Apps Script", "Webhooks", "API Integrations", "Cron Jobs", "Make"],
  },
  {
    label: "Testing",
    skills: ["Vitest", "Jest", "React Testing Library", "Integration Testing", "Manual QA"],
  },
  {
    label: "DevOps & Tools",
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
