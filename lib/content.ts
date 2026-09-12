import { profile } from "@/content/profile";
import { experience, education } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { contentSchema, type Experience, type Project, type Profile } from "@/lib/schemas";

const validated = contentSchema.parse({
  profile,
  experience,
  education,
  skillGroups,
  projects,
});

export function getProfile(): Profile {
  return validated.profile;
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
