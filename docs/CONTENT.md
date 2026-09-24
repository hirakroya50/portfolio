# Content Editing Guide

All site copy lives in the `content/` directory. UI components read from these files via `lib/content.ts`.

## Files

| File | What to edit |
|------|--------------|
| `content/profile.ts` | Name, title, bio, yearsExperience (single source), contact & social links, avatar |
| `content/build-with.ts` | Categories and tech pills for "What I build with" section |
| `content/experience.ts` | Jobs, highlights, education |
| `content/projects.ts` | Case studies, tech stack, GitHub/demo links |
| `content/skills.ts` | Skill groups shown on the home page |

## Rules

1. **Experience years** — edit `yearsExperience` in `content/profile.ts` only. Summary text is auto-generated.
2. **No placeholder URLs** — `demo` must be a real URL or `null`. The build fails on `https://`.
2. **GitHub links** — must be valid `https://` URLs.
3. **Project slugs** — lowercase, hyphen-separated (used in `/projects/[slug]`).
4. **Resume** — keep `public/resume.pdf` in sync when you update `profile.resumePath`.

## Validate before deploy

```bash
pnpm validate
pnpm build
```

## Adding a new project

1. Add an entry to `content/projects.ts` with all required fields.
2. Add an image to `public/projects/`.
3. Run `pnpm validate` and `pnpm build`.
4. The new page appears at `/projects/your-slug` automatically.

## Adding a new job

1. Add an entry to `content/experience.ts`.
2. Use a unique `slug` field.
3. Run `pnpm validate`.
