"use client";

import { experience, education } from "@/data/experience";
import { FadeIn, StaggerContainer } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            badge="Experience"
            title="Where I've Worked"
            subtitle="Building production systems at the intersection of SaaS and Web3."
          />
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent hidden sm:block ml-6" />

          <StaggerContainer
            className="flex flex-col gap-6 sm:pl-16"
            staggerDelay={0.15}
          >
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.role}`}
                className="relative glass glass-hover border border-white/[0.07] rounded-2xl p-6 sm:p-8 overflow-hidden group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#050508] -translate-x-[calc(50%+4rem+2px)] hidden sm:block group-hover:bg-purple-400 transition-colors" />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(600px at 50% 0%, rgba(99,102,241,0.04), transparent 70%)",
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {job.role}
                      </h3>
                      {job.current && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-mono text-green-400 border border-green-500/20 bg-green-500/5">
                          Current
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full text-xs font-mono text-indigo-300 border border-indigo-500/20 bg-indigo-500/5">
                        {job.type}
                      </span>
                    </div>
                    <div className="text-white/60 font-medium">
                      {job.company}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="text-sm text-white/40 font-mono">
                      {job.period}
                    </div>
                    <div className="text-xs text-white/30 mt-1">
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {job.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/55"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500/60 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md glass border border-white/[0.07] text-white/50 hover:text-indigo-300 hover:border-indigo-500/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </StaggerContainer>
        </div>

        {/* Education */}
        <FadeIn delay={0.3} className="mt-12">
          <div className="glass border border-white/[0.07] rounded-2xl p-6 sm:p-8">
            <div className="text-xs text-white/30 font-mono uppercase tracking-widest mb-4">
              Education
            </div>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <h3 className="text-white font-semibold">{edu.degree}</h3>
                  <p className="text-white/50 text-sm">{edu.institution}</p>
                </div>
                <div className="text-white/30 font-mono text-sm">
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
