import { z } from "zod";

const urlSchema = z.string().url();
const optionalUrlSchema = z.union([urlSchema, z.null()]);

const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  featured: z.boolean(),
  problem: z.string().min(1),
  solution: z.string().min(1),
  role: z.string().min(1),
  outcome: z.string().min(1),
  description: z.string().min(1),
  tech: z.array(z.string()).min(1),
  github: urlSchema,
  demo: optionalUrlSchema.refine(
    (value) => value === null || (value.startsWith("http") && value !== "https://"),
    { message: "Demo URL must be a valid URL or null — no placeholder links." },
  ),
  image: z.string().min(1),
});

const experienceSchema = z.object({
  slug: z.string().min(1),
  company: z.string().min(1),
  role: z.string().min(1),
  type: z.string().min(1),
  period: z.string().min(1),
  location: z.string().min(1),
  current: z.boolean(),
  highlights: z.array(z.string()).min(1),
  tech: z.array(z.string()).min(1),
});

const profileInputSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  yearsExperience: z.string().min(1),
  tagline: z.string().min(1),
  bio: z.string().min(1),
  avatar: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  telegram: urlSchema,
  location: z.string().min(1),
  availability: z.string().min(1),
  linkedin: urlSchema,
  x: urlSchema,
  github: urlSchema,
  leetcode: urlSchema,
  portfolio: urlSchema,
  resumePath: z.string().min(1),
});

const buildWithItemSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
});

const buildWithCategorySchema = z.object({
  category: z.string().min(1),
  description: z.string().min(1),
  items: z.array(buildWithItemSchema).min(1),
});

export const contentSchema = z.object({
  profile: profileInputSchema,
  experience: z.array(experienceSchema).min(1),
  education: z.array(
    z.object({
      degree: z.string().min(1),
      institution: z.string().min(1),
      year: z.string().min(1),
    }),
  ),
  skillGroups: z.array(
    z.object({
      category: z.string().min(1),
      skills: z.array(z.string()).min(1),
    }),
  ),
  projects: z.array(projectSchema).min(1),
  buildWithCategories: z.array(buildWithCategorySchema).min(1),
});

export type ProfileInput = z.infer<typeof profileInputSchema>;
export type Profile = ProfileInput & { summary: string };
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type BuildWithItem = z.infer<typeof buildWithItemSchema>;
export type BuildWithCategory = z.infer<typeof buildWithCategorySchema>;
export type SkillGroup = {
  category: string;
  skills: string[];
};
