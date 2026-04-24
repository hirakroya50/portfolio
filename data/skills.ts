export type SkillCategory = {
  category: string;
  icon: string;
  color: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "◈",
    color: "blue",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "Shadcn UI",
      "Redux",
      "Jotai",
      "TanStack Query",
    ],
  },
  {
    category: "Backend & Databases",
    icon: "⬡",
    color: "purple",
    skills: [
      "Node.js",
      "NestJS",
      "tRPC",
      "GraphQL",
      "REST APIs",
      "Prisma",
      "Drizzle ORM",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Zod",
      "Web Scraping",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "△",
    color: "cyan",
    skills: [
      "AWS (EC2, S3, Lambda, CloudFront)",
      "Cloudflare",
      "Docker",
      "Nginx",
      "PM2",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Netlify",
      "DigitalOcean",
    ],
  },
  {
    category: "Auth & Security",
    icon: "⬟",
    color: "green",
    skills: ["JWT", "RBAC", "OTP Verification", "OAuth2", "Session Management"],
  },
  {
    category: "AI-Augmented Dev",
    icon: "◎",
    color: "pink",
    skills: [
      "Cursor",
      "GitHub Copilot",
      "Claude",
      "OpenAI Codex",
      "ChatGPT",
      "Prompt Engineering",
      "AI Workflows",
    ],
  },
];

export const coreCompetencies = [
  "Full Stack Development (React + Node.js)",
  "Microservices Architecture",
  "API Design (REST, GraphQL, tRPC)",
  "Authentication & Security",
  "Real-Time Systems (WebSockets, Pub/Sub)",
  "Cloud Deployment (AWS, Cloudflare)",
  "CI/CD & DevOps Automation",
  "AI-Assisted Development & Prompt Engineering",
];
