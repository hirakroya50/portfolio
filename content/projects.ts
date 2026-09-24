export const projects = [
  {
    slug: "ai-spa-generation-platform",
    title: "AI SPA Generation Platform",
    featured: true,
    problem:
      "Non-technical teams needed weeks to prototype web applications, slowing product validation and increasing engineering overhead.",
    solution:
      "Built an AI-driven platform that converts natural language prompts into production-ready single-page applications with real-time build telemetry over WebSockets.",
    role:
      "Led full-stack implementation: FastAPI backend, LLM orchestration, WebSocket telemetry, and frontend integration.",
    outcome: "Reduced prototyping time for non-technical teams by 60%.",
    description:
      "AI platform that transforms natural language into deployable SPAs with live build feedback and modular backend APIs.",
    tech: ["Python", "FastAPI", "LLM APIs", "WebSockets", "React", "TypeScript"],
    github: "https://github.com/hirakroya50",
    demo: null,
    image: "/projects/ai-spa-platform.svg",
  },
  {
    slug: "enterprise-email-automation",
    title: "Enterprise Email Management Tool",
    featured: true,
    problem:
      "Enterprise teams struggled with high-volume email triage, manual categorization, and slow routing across departments.",
    solution:
      "Developed an intelligent email management system with LLM-powered categorization, contextual routing workflows, and automated prioritization.",
    role:
      "Designed backend services in Python, integrated LLM APIs for classification, and built routing workflow logic.",
    outcome:
      "Automated email categorization and routing, significantly reducing manual triage effort.",
    description:
      "LLM-powered email management with automated categorization and smart routing for enterprise teams.",
    tech: ["Python", "FastAPI", "LLM APIs", "PostgreSQL", "Redis"],
    github: "https://github.com/hirakroya50",
    demo: null,
    image: "/projects/email-automation.svg",
  },
  {
    slug: "saas-microservices-platform",
    title: "SaaS Microservices Platform",
    featured: true,
    problem:
      "A growing SaaS product needed scalable auth, faster APIs, and reliable background processing under increasing load.",
    solution:
      "Architected NestJS microservices with JWT/RBAC, GraphQL optimization, Redis caching, and BullMQ job queues deployed on AWS.",
    role:
      "Owned backend business logic, API design, database indexing, and production deployment configuration.",
    outcome: "Improved API response time by 35% and reduced production bugs by 50%.",
    description:
      "Production SaaS backend with auth, GraphQL APIs, caching, and async job processing at scale.",
    tech: [
      "Next.js",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "AWS S3",
      "Docker",
    ],
    github: "https://github.com/hirakroya50",
    demo: null,
    image: "/projects/saas-platform.svg",
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    featured: false,
    problem:
      "Needed a fast, credible personal site to showcase work and make it easy for recruiters to evaluate experience.",
    solution:
      "Built a Next.js portfolio with validated content layer, static case-study pages, and performance-focused Server Components.",
    role: "Designed architecture, content schema, UI, and deployment pipeline.",
    outcome: "Sub-second load times with type-safe content and zero broken links.",
    description:
      "Professional portfolio site built with Next.js 16, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    github: "https://github.com/hirakroya50/portfolio",
    demo: "https://hirakroy.dev",
    image: "/projects/portfolio.svg",
  },
];
