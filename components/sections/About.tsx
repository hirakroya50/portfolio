"use client";

import { profile } from "@/data/profile";
import { coreCompetencies } from "@/data/skills";
import { FadeIn, StaggerContainer } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            badge="About"
            title="Crafting Systems That Scale"
            subtitle="From frontend pixels to backend pipelines — I build end-to-end."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>{profile.summary}</p>
              <p>
                I thrive in fast-paced startup environments where shipping quality code at velocity matters. My approach combines deep technical expertise with AI-assisted workflows to deliver robust, maintainable systems.
              </p>

              {/* Contact details */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                  { label: "Location", value: profile.location, href: null },
                  { label: "GitHub", value: "@hirakroy", href: profile.github },
                  { label: "LinkedIn", value: "hirakroy", href: profile.linkedin },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-lg px-4 py-3 border border-white/[0.06]">
                    <div className="text-xs text-white/30 font-mono uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-white/70">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Core competencies */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <div className="text-xs text-white/30 font-mono uppercase tracking-widest mb-4">
                Core Competencies
              </div>
              <StaggerContainer className="flex flex-col gap-2" staggerDelay={0.05}>
                {coreCompetencies.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 glass glass-hover border border-white/[0.06] rounded-lg px-4 py-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 group-hover:bg-purple-400 transition-colors" />
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
