# hirakroy.dev — Portfolio

Professional portfolio for **Hirak Roy**, Full Stack & AI Engineer.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Zod](https://zod.dev/) for build-time content validation
- Deployed on [Vercel](https://vercel.com/)

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Validate content and build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript checks |
| `pnpm validate` | Validate `content/` files with Zod |

## Project Structure

```
content/          # All copy, experience, projects, skills
lib/              # Content loaders and Zod schemas
components/       # UI, layout, and page sections
app/              # Next.js routes and SEO files
public/           # Resume PDF, project images
docs/CONTENT.md   # Guide for updating site content
```

## Updating Content

Edit files in `content/` — no component changes needed for copy updates. See [docs/CONTENT.md](docs/CONTENT.md).

Run `pnpm validate` before committing to catch broken links or missing fields.

## Deploy

Connect the GitHub repository to Vercel. Production deploys run automatically on push to `main`.

## License

Private — all rights reserved.
