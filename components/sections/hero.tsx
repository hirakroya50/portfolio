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

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="shrink-0">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={80}
              height={80}
              className="h-16 w-16 rounded-full border-2 border-accent object-cover sm:h-20 sm:w-20"
              priority
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-2 text-sm font-medium text-accent">
              {profile.availability}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-primary sm:text-xl">
              {profile.title}
            </p>
            <p className="mt-1 text-sm text-muted">
              <span className="text-4xl font-bold text-white">
              {profile.yearsExperience} years of experience
                </span> · {profile.location}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-secondary-foreground">
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
        </div>
      </div>
    </section>
  );
}
