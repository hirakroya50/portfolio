import Link from "next/link";
import { Mail } from "lucide-react";

import { CopyEmailButton } from "@/components/client/copy-email-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProfile } from "@/lib/content";

export function Contact() {
  const profile = getProfile();

  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "LinkedIn", value: "linkedin.com/in/royhirakp", href: profile.linkedin },
    { label: "GitHub", value: "github.com/hirakroya50", href: profile.github },
    { label: "LeetCode", value: "leetcode.com/u/royhirakp", href: profile.leetcode },
  ];

  return (
    <section id="contact" className="border-t border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          title="Contact"
          description="Open to full-time and consulting opportunities in AI and full-stack engineering."
        />

        <Card>
          <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Send Email
                </Link>
              </Button>
              <CopyEmailButton email={profile.email} />
              <Button asChild variant="secondary">
                <Link href={profile.resumePath} download>
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-secondary/50 px-4 py-3 transition-colors hover:border-muted"
                >
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {link.label}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{link.value}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
