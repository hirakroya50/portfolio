import { FaAws } from "react-icons/fa6";
import { RiOpenaiFill, RiRobot2Line } from "react-icons/ri";
import {
  SiCircleci,
  SiCloudflare,
  SiDigitalocean,
  SiDocker,
  SiElasticsearch,
  SiFastapi,
  SiGithubactions,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

const iconMap: Record<string, IconType> = {
  aws: FaAws,
  dynamodb: FaAws,
  docker: SiDocker,
  redis: SiRedis,
  cloudflare: SiCloudflare,
  digitalocean: SiDigitalocean,
  "github-actions": SiGithubactions,
  cicd: SiCircleci,
  "react-native": TbBrandReactNative,
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  python: SiPython,
  nestjs: SiNestjs,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  graphql: SiGraphql,
  bullmq: SiRabbitmq,
  llm: RiOpenaiFill,
  "ai-agents": RiRobot2Line,
  "vector-search": SiElasticsearch,
  embeddings: SiTensorflow,
};

type TechIconProps = {
  slug: string;
  className?: string;
};

export function TechIcon({ slug, className }: TechIconProps) {
  const Icon = iconMap[slug];

  if (!Icon) {
    return null;
  }

  return (
    <span
      className={cn(
        "inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center leading-none",
        className,
      )}
      aria-hidden="true"
    >
      <Icon className="h-full w-full" />
    </span>
  );
}
