import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/schemas";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <Card className="h-full overflow-hidden transition-colors hover:border-zinc-600">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="group-hover:text-indigo-300 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm font-medium text-indigo-400">{project.outcome}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
