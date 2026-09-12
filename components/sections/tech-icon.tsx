import {
  Box,
  Braces,
  Brain,
  Cloud,
  Code,
  Container,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Palette,
  Search,
  Server,
  Smartphone,
  Terminal,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Terminal,
  Cloud,
  Container,
  Braces,
  Smartphone,
  Layers,
  Code,
  Palette,
  Box,
  Zap,
  Database,
  Workflow,
  Cpu,
  Brain,
  Search,
  GitBranch,
};

type TechIconProps = {
  icon: string;
  className?: string;
};

export function TechIcon({ icon, className = "h-4 w-4" }: TechIconProps) {
  const Icon = iconMap[icon];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} aria-hidden="true" />;
}
