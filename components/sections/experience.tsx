import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getEducation, getExperience } from "@/lib/content";

export function Experience() {
  const experience = getExperience();
  const education = getEducation();

  return (
    <section id="experience" className="border-y border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          title="Experience"
          description="Production engineering across AI products, SaaS platforms, and microservices."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <Card key={job.slug}>
              <CardHeader className="gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <CardTitle>{job.role}</CardTitle>
                    {job.current ? <Badge variant="success">Current</Badge> : null}
                    <Badge variant="accent">{job.type}</Badge>
                  </div>
                  <p className="text-sm font-medium text-secondary-foreground">
                    {job.company}
                  </p>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
                <p className="text-sm text-muted sm:text-right">{job.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm leading-relaxed text-muted">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">
            Education
          </h3>
          {education.map((edu) => (
            <Card key={edu.degree}>
              <CardHeader className="sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-base">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted">{edu.institution}</p>
                </div>
                <p className="text-sm text-muted">{edu.year}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
