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
    title: "Internal Operations Dashboard",
    type: "Internal Tool",
    context:
      "A growing company relied on disconnected spreadsheets to manage daily operations across multiple departments.",
    problem:
      "Three separate spreadsheets tracked overlapping data with no validation or sync. Teams spent 30+ minutes daily reconciling information manually, leading to frequent data inconsistencies and delayed reporting.",
    solution:
      "Built a centralized admin panel with role-based access, real-time data views, and structured input forms. Designed a modular component architecture to support future feature additions without refactoring existing modules. Implemented server-side validation and audit logging for data integrity.",
    role: "Designed and implemented the full system — frontend, backend API, database schema, and deployment pipeline.",
    outcome:
      "Replaced 3 disconnected spreadsheets with a single source of truth. Eliminated daily manual data consolidation across departments. Reduced data entry errors through server-side validation and structured forms.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Meeting Recording Pipeline",
    type: "Automation",
    context:
      "An operations team needed meeting recordings transcribed and distributed to relevant stakeholders after each session.",
    problem:
      "Recordings were manually downloaded, transcribed using separate tools, and shared via email — a process that took 20–30 minutes per meeting and was frequently skipped due to time constraints.",
    solution:
      "Designed an automated pipeline using n8n that triggers on new recordings, sends audio to a transcription service, formats the output, and distributes summaries to the appropriate channels. Built error handling and retry logic for failed transcriptions.",
    role: "Designed and built the complete automation workflow, including trigger configuration, API integrations, and error handling.",
    outcome:
      "Automated transcription and distribution for 20+ weekly meetings. Removed a recurring 8–10 hour/week manual process. Ensured consistent delivery of meeting summaries to all stakeholders.",
    stack: ["n8n", "REST APIs", "Webhooks", "Google Drive", "Slack API"],
  },
  {
    title: "CRM Data Sync Integration",
    type: "Integration",
    context:
      "A sales team used two platforms — a CRM and an internal client management tool — with overlapping but unsynchronized client data.",
    problem:
      "Client records drifted out of sync between platforms, causing sales reps to work with outdated information. A weekly manual sync took 2+ hours and still missed edge cases like deleted or merged records.",
    solution:
      "Built a bidirectional sync service with conflict resolution logic, handling create/update/delete events across both platforms via their APIs. Implemented idempotent processing and detailed sync logs for debugging and auditing.",
    role: "Built the backend integration layer, API connectors, conflict resolution logic, and monitoring dashboard.",
    outcome:
      "Ensured real-time data consistency across 2 platforms. Eliminated the weekly 2-hour manual sync process entirely. Reduced client data discrepancies to near-zero through automated conflict resolution.",
    stack: ["Node.js", "REST APIs", "PostgreSQL", "Cron Jobs", "Docker"],
  },
  {
    title: "Product Workflow Automation",
    type: "Process Automation",
    context:
      "An operations team managed approval workflows and internal notifications through manual steps across multiple tools.",
    problem:
      "Approval requests were tracked in spreadsheets, notifications were sent manually via email, and status updates required switching between 3 different tools — leading to delays and missed steps.",
    solution:
      "Developed a webhook-driven automation system using Google Apps Script that listens for form submissions, routes approval requests to the right managers, sends notifications, and updates status across connected tools. Built with modular handlers for each workflow step.",
    role: "Developed automation scripts, webhook handlers, and integration connectors. Defined workflow logic with the operations team.",
    outcome:
      "Reduced approval turnaround time from days to hours. Automated repetitive notification and status-update steps across 3 tools. Freed up approximately 5 hours/week of manual operations work.",
    stack: [
      "Google Apps Script",
      "Webhooks",
      "Google Sheets API",
      "Gmail API",
      "REST APIs",
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
    role: "Mid-Level Full Stack Developer",
    period: "2023 — Present",
    bullets: [
      "Designed and maintained mobile-first web applications using React and TypeScript, serving internal and client-facing products",
      "Architected backend services and database models using PostgreSQL (Supabase), ensuring scalable data access patterns",
      "Developed automation workflows integrating internal systems and third-party services, reducing manual operational steps",
      "Refactored legacy modules to improve maintainability, reducing coupling between components and simplifying future development",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Node.js", "Tailwind CSS"],
  },
  {
    company: "STRIDES",
    role: "Software Engineer Jr.",
    period: "2022 — 2023",
    bullets: [
      "Built and shipped product features across frontend and backend layers, contributing to core platform functionality",
      "Implemented API integrations connecting internal tools to external platforms, enabling automated data flows",
      "Contributed to system architecture decisions impacting scalability and data flow across the application",
      "Collaborated with product and operations teams to translate business requirements into well-structured technical solutions",
    ],
    stack: ["React", "JavaScript", "Node.js", "REST APIs", "Git"],
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
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Vercel", "Linux"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
