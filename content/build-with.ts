export const buildWithCategories = [
  {
    category: "Infrastructure",
    description: "Cloud, containers, and deployment pipelines",
    items: [
      { name: "AWS", slug: "aws" },
      { name: "Docker", slug: "docker" },
      { name: "Redis", slug: "redis" },
      { name: "GitHub Actions", slug: "github-actions" },
      { name: "CI/CD", slug: "cicd" },
    ],
  },
  {
    category: "Mobile",
    description: "Cross-platform apps for iOS and Android",
    items: [{ name: "React Native", slug: "react-native" }],
  },
  {
    category: "Frontend",
    description: "Interfaces and client-side applications",
    items: [
      { name: "Next.js", slug: "nextjs" },
      { name: "React.js", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwind" },
    ],
  },
  {
    category: "Backend",
    description: "APIs, jobs, and data behind the apps",
    items: [
      { name: "Node.js", slug: "nodejs" },
      { name: "Python", slug: "python" },
      { name: "NestJS", slug: "nestjs" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "GraphQL", slug: "graphql" },
      { name: "BullMQ", slug: "bullmq" },
    ],
  },
  {
    category: "AI",
    description: "LLM tooling and intelligent product features",
    items: [
      { name: "LLM Integration", slug: "llm" },
      { name: "Vector Search", slug: "vector-search" },
      { name: "Embeddings", slug: "embeddings" },
    ],
  },
];
