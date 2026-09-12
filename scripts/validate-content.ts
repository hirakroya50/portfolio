import { buildWithCategories } from "../content/build-with";
import { profile } from "../content/profile";
import { experience, education } from "../content/experience";
import { projects } from "../content/projects";
import { skillGroups } from "../content/skills";
import { contentSchema } from "../lib/schemas";

try {
  contentSchema.parse({
    profile,
    experience,
    education,
    skillGroups,
    projects,
    buildWithCategories,
  });
  console.log("Content validation passed.");
} catch (error) {
  console.error("Content validation failed:");
  console.error(error);
  process.exit(1);
}
