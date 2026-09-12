import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSkillGroups } from "@/lib/content";

export function Skills() {
  const skillGroups = getSkillGroups();

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          title="Skills"
          description="Technologies I use to build and ship production software."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.category}>
              <CardHeader>
                <CardTitle className="text-base">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
