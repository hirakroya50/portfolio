import { TechIcon } from "@/components/sections/tech-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBuildWithCategories } from "@/lib/content";

export function WhatIBuildWith() {
  const categories = getBuildWithCategories();

  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading title="What I build with" />

        <div className="divide-y divide-border border-y border-border">
          {categories.map((category) => (
            <div
              key={category.category}
              className="grid gap-5 py-8 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8 lg:grid-cols-[minmax(0,260px)_1fr]"
            >
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {category.category}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted/80">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {category.items.map((item) => (
                  <span
                    key={item.slug}
                    className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-secondary/70 px-3.5 py-0 text-sm font-medium leading-none text-foreground shadow-sm transition-colors hover:border-[var(--accent-border)] hover:bg-secondary"
                  >
                    <TechIcon slug={item.slug} />
                    <span className="leading-none">{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
