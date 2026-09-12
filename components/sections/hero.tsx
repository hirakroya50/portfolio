import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/github-icon";
import { getProfile } from "@/lib/content";

export function Hero() {
  const profile = getProfile();

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-4 text-sm font-medium text-accent">
          {profile.availability}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl text-secondary-foreground sm:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}{" "}
          <span className="font-medium text-foreground text-3xl lg:text-4xl">
            {profile.yearsExperience} years of experience
          </span>{" "}
          shipping production systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/#work">
              View Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={profile.resumePath} download>
              Download Resume
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={profile.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
