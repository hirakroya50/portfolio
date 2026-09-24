import type { Metadata } from "next";

import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies in AI product engineering, backend systems, and full-stack delivery.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          description="Selected work with problem context, technical approach, and measurable outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
