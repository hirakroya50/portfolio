export const projects = [
  {
    title: "SaaS Web3 Platform",
    description:
      "Scalable multi-tenant SaaS platform with Web3 integrations, microservices backend, JWT auth, and real-time features built with Next.js and NestJS.",
    tech: ["Next.js", "NestJS", "tRPC", "PostgreSQL", "Redis", "AWS S3"],
    github: "https://github.com",
    live: "https://",
    stepsToTest: [
      "Clone the repository",
      "Copy .env.example to .env and fill in values",
      "Run docker-compose up to spin up services",
      "Run pnpm install && pnpm dev",
    ],
    thumbnail: "/projects/saas-web3.png",
    videoDemo: "",
    featured: true,
  },
  {
    title: "Type-Safe API Gateway",
    description:
      "End-to-end type-safe API gateway using tRPC, GraphQL, and Zod validation schemas. Includes RBAC authorization and OTP-based authentication flows.",
    tech: ["Node.js", "tRPC", "GraphQL", "Zod", "JWT", "PostgreSQL"],
    github: "https://github.com",
    live: "https://",
    stepsToTest: [
      "Clone the repo",
      "Run pnpm install",
      "Set DATABASE_URL in .env",
      "Run pnpm prisma migrate dev",
      "Run pnpm dev",
    ],
    thumbnail: "/projects/api-gateway.png",
    videoDemo: "",
    featured: true,
  },
  {
    title: "Real-Time Job Queue System",
    description:
      "Background job processing system with BullMQ, Redis pub/sub, and WebSocket notifications. Handles async tasks with retry logic and monitoring dashboard.",
    tech: ["Node.js", "BullMQ", "Redis", "WebSockets", "Docker"],
    github: "https://github.com",
    live: "https://",
    stepsToTest: [
      "Clone the repository",
      "Run docker-compose up redis",
      "Run pnpm install",
      "Run pnpm dev",
    ],
    thumbnail: "/projects/job-queue.png",
    videoDemo: "",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "This portfolio — a futuristic Next.js 16 App Router site with motion.dev animations, glassmorphism UI, and data-driven content architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "motion.dev"],
    github: "https://github.com",
    live: "https://hirakroy.dev",
    stepsToTest: [
      "Clone the repo",
      "Run pnpm install",
      "Run pnpm dev",
      "Visit http://localhost:3000",
    ],
    thumbnail: "/projects/portfolio.png",
    videoDemo: "",
    featured: false,
  },
];
