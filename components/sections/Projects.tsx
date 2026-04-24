"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { FadeIn, StaggerContainer } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-5 blur-3xl pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(ellipse, #a855f7, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            badge="Projects"
            title="Things I've Built"
            subtitle="Production systems solving real problems at scale."
          />
        </FadeIn>

        {/* Featured projects */}
        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
          staggerDelay={0.1}
        >
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </StaggerContainer>

        {/* Other projects */}
        {rest.length > 0 && (
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            staggerDelay={0.08}
          >
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const hasValidLiveLink =
    project.live &&
    project.live.startsWith("http") &&
    project.live !== "https://";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`relative glass glass-hover border border-white/[0.07] rounded-2xl overflow-hidden group flex flex-col ${
        featured ? "p-6 sm:p-8" : "p-5 sm:p-6"
      }`}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(400px at 50% -20%, rgba(99,102,241,0.06), transparent 70%)",
        }}
      />

      {/* Top: title + links */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3
          className={`font-semibold text-white ${featured ? "text-xl" : "text-base"}`}
        >
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors p-1"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {hasValidLiveLink && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-indigo-300 transition-colors p-1"
              aria-label="Live demo"
            >
              <ExternalLinkIcon size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Steps to test */}
      {featured && project.stepsToTest.length > 0 && (
        <div className="mb-6">
          <div className="text-xs text-white/25 font-mono uppercase tracking-widest mb-2">
            Quick Start
          </div>
          <ol className="space-y-1.5">
            {project.stepsToTest.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-white/40"
              >
                <span className="flex-shrink-0 font-mono text-indigo-500/60">
                  {i + 1}.
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs font-mono rounded glass border border-white/[0.06] text-white/45 hover:text-indigo-300 hover:border-indigo-500/20 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
