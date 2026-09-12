import {
  Braces,
  Cloud,
  Container,
  Server,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Terminal,
  Cloud,
  Container,
  Braces,
  Smartphone,
};

type TechIconProps = {
  icon: string;
  className?: string;
};

export function TechIcon({ icon, className = "h-5 w-5" }: TechIconProps) {
  const Icon = iconMap[icon];

  if (!Icon) {
    return null;
  }

  return <Icon className={className} aria-hidden="true" />;
}
