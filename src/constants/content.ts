// Language-neutral metadata (URLs, stacks, IDs).
// Translatable strings live in src/i18n/translations.ts.

export const siteConfig = {
  name: "Lucas Barreto",
  email: "lucasbs.code@gmail.com",
  github: "https://github.com/lucasbarreto-dev",
  linkedin: "https://www.linkedin.com/in/lucasbarreto-dev/",
  upwork: "https://www.upwork.com/freelancers/~01849be61777eaf50b",
  resumeUrl: "#",
};

export interface CaseStudyMeta {
  id: string;
  stack: string[];
  github?: string;
  demo?: string;
  video?: string;
  videoExternalUrl?: string;
  status?: "COMPLETED" | "ACTIVE";
}

export const caseStudiesMeta: CaseStudyMeta[] = [
  {
    id: "habilita",
    status: "ACTIVE",
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
      "Lovable",
    ],
    demo: "https://www.instagram.com/habilitamais.app/reel/DWb-I_JkcPs/",
  },
  {
    id: "compliance",
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
    videoExternalUrl: "https://youtu.be/PtnFZQmGtwA",
  },
  {
    id: "learning-ops",
    stack: [
      "Google Apps Script",
      "JavaScript",
      "Google Sheets",
      "Google Drive",
      "Google Meet",
    ],
  },
  {
    id: "class-automator",
    stack: [
      "Google Apps Script",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Sheets",
    ],
  },
];

export interface ExperienceMeta {
  id: string;
  stack: string[];
}

export const experienceMeta: ExperienceMeta[] = [
  {
    id: "dtwo",
    stack: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "Stripe", "Lovable", "Git"],
  },
  {
    id: "strides",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "Google Apps Script", "Make", "n8n", "Cursor", "Git"],
  },
];

export interface SkillGroupMeta {
  id: string;
  skills: string[];
}

export const skillGroupsMeta: SkillGroupMeta[] = [
  {
    id: "frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Responsive Design"],
  },
  {
    id: "backend",
    skills: ["Node.js", "Express", "REST APIs", "Supabase", "JWT", "Python"],
  },
  {
    id: "data",
    skills: ["PostgreSQL", "Supabase", "Data Modeling", "Migrations", "Query Optimization", "Sequelize", "MongoDB", "Mongoose"],
  },
  {
    id: "automation",
    skills: ["Google Apps Script", "Make", "n8n", "Webhooks", "API Integrations", "Workflow Automation"],
  },
  {
    id: "ai",
    skills: ["Cursor", "Lovable", "Antigravity", "Prompt Engineering", "AI Workflow Prototyping"],
  },
  {
    id: "testing",
    skills: ["Vitest", "Jest", "React Testing Library", "Integration Testing", "Playwright", "Manual QA"],
  },
  {
    id: "devtools",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Linux"],
  },
];

export interface TestimonialMeta {
  id: string;
  linkedinUrl?: string;
}

export const testimonialsMeta: TestimonialMeta[] = [
  { id: "liliane" },
  { id: "pedro" },
];

export const navItems = [
  { key: "about", href: "#about" },
  { key: "work", href: "#work" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "testimonials", href: "#testimonials" },
  { key: "contact", href: "#contact" },
] as const;
