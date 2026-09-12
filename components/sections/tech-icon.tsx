import { FaAws } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiCircleci,
  SiDocker,
  SiElasticsearch,
  SiFastapi,
  SiGithubactions,
  SiGraphql,
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
  docker: SiDocker,
  redis: SiRedis,
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
  graphql: SiGraphql,
  bullmq: SiRabbitmq,
  llm: RiOpenaiFill,
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
