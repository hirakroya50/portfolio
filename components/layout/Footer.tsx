import Link from "next/link";

import { getProfile } from "@/lib/content";

export function Footer() {
  const profile = getProfile();
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "LeetCode", href: profile.leetcode },
    { label: "Resume", href: profile.resumePath },
  ];

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with Next.js and TypeScript.
        </p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-secondary-foreground transition-colors hover:text-foreground"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : link.label === "Resume"
                  ? { download: true }
                  : {})}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
