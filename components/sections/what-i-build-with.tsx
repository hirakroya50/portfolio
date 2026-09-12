import { TechIcon } from "@/components/sections/tech-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBuildWithTech } from "@/lib/content";

export function WhatIBuildWith() {
  const tech = getBuildWithTech();

  return (
    <section className="border-b border-border bg-secondary/20 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading title="What I build with" />

        <ul className="overflow-hidden rounded-xl border border-border bg-secondary/40">
          {tech.map((item, index) => (
            <li
              key={item.slug}
              className={`flex items-center gap-4 px-4 py-4 transition-colors hover:bg-secondary/80 sm:px-6 ${
                index !== tech.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-muted)] text-accent">
                <TechIcon icon={item.icon} className="h-5 w-5" />
              </span>
              <span className="text-base font-medium text-foreground">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
