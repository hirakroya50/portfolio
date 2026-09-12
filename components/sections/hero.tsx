import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";

import { HeroSocialLinks } from "@/components/sections/hero-social-links";
import { Button } from "@/components/ui/button";
import { getProfile } from "@/lib/content";

export function Hero() {
  const profile = getProfile();
  const bioParagraphs = profile.bio.split("\n\n").filter(Boolean);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(239,68,68,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(251,191,36,0.08), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-4 text-sm font-medium text-accent">
          {profile.availability}
        </p>

        <div className="flex items-center gap-4">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={72}
            height={72}
            className="h-14 w-14 shrink-0 rounded-full border-2 border-accent object-cover sm:h-16 sm:w-16"
            priority
          />
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {profile.name}
            </h1>
            <p className="mt-1 text-base font-medium text-primary sm:text-lg">
              {profile.title}
            </p>
            <p className="mt-1 text-sm text-muted">
              <span className="text-xl font-semibold text-foreground sm:text-2xl">
                {profile.yearsExperience} years of experience
              </span>
              <span className="text-muted"> · {profile.location}</span>
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-secondary-foreground">
          {bioParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8">
          <HeroSocialLinks profile={profile} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/#contact">
              Contact
              <ArrowDown className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={profile.resumePath} download>
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
