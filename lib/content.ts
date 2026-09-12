import { buildWithCategories } from "@/content/build-with";
import { profile } from "@/content/profile";
import { experience, education } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import {
  contentSchema,
  type BuildWithCategory,
  type Experience,
  type Profile,
  type Project,
} from "@/lib/schemas";

const validated = contentSchema.parse({
  profile,
  experience,
  education,
  skillGroups,
  projects,
  buildWithCategories,
});

function buildSummary(yearsExperience: string, title: string): string {
  return `${title} with ${yearsExperience} years of experience delivering scalable software using Node.js, Python, AWS, and LLM integrations. I ship AI-driven products, secure APIs, and real-time systems that perform in production.`;
}

export function getProfile(): Profile {
  const p = validated.profile;
  return {
    ...p,
    summary: buildSummary(p.yearsExperience, p.title),
  };
}

export function getExperience(): Experience[] {
  return validated.experience;
}

export function getEducation() {
  return validated.education;
}

export function getSkillGroups() {
  return validated.skillGroups;
}

export function getBuildWithCategories(): BuildWithCategory[] {
  return validated.buildWithCategories;
}

export function getProjects(): Project[] {
  return validated.projects;
}

export function getFeaturedProjects(): Project[] {
  return validated.projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return validated.projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return validated.projects.map((project) => project.slug);
}
