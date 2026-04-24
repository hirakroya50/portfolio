"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillCategories } from "@/data/skills";
import { FadeIn } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const colorMap: Record<
  string,
  { badge: string; border: string; iconText: string }
> = {
    blue: {
      badge: "text-blue-300 border-blue-500/20 bg-blue-500/5",
      border: "border-blue-500/20",
      iconText: "text-blue-300",
    },
    purple: {
      badge: "text-purple-300 border-purple-500/20 bg-purple-500/5",
      border: "border-purple-500/20",
      iconText: "text-purple-300",
    },
    cyan: {
      badge: "text-cyan-300 border-cyan-500/20 bg-cyan-500/5",
      border: "border-cyan-500/20",
      iconText: "text-cyan-300",
    },
    green: {
      badge: "text-green-300 border-green-500/20 bg-green-500/5",
      border: "border-green-500/20",
      iconText: "text-green-300",
    },
    pink: {
      badge: "text-pink-300 border-pink-500/20 bg-pink-500/5",
      border: "border-pink-500/20",
      iconText: "text-pink-300",
    },
  };

export default function Skills() {
  const [active, setActive] = useState<string>(skillCategories[0].category);
  const activeCategory = skillCategories.find((c) => c.category === active)!;
  const colors = colorMap[activeCategory.color];

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            badge="Skills"
            title="Tech Stack"
            subtitle="Tools and technologies I use to build production systems."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Category tabs */}
          <FadeIn direction="left" delay={0.1}>
            <div className="flex flex-col gap-2">
              {skillCategories.map((cat) => {
                const c = colorMap[cat.color];
                const isActive = cat.category === active;
                return (
                  <button
                    key={cat.category}
                    onClick={() => setActive(cat.category)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      isActive
                        ? `glass border ${c.border} text-white`
                        : "hover:bg-white/[0.04] text-white/50 hover:text-white/80 border border-transparent"
                    }`}
                  >
                    <span
                      className={`text-lg leading-none ${isActive ? c.iconText : "opacity-40"}`}
                    >
                      {cat.icon}
                    </span>
                    <span className="text-sm font-medium">{cat.category}</span>
                    {isActive && (
                      <span
                        className={`ml-auto text-xs font-mono px-1.5 py-0.5 rounded border ${c.badge}`}
                      >
                        {cat.skills.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Skill pills */}
          <FadeIn direction="right" delay={0.15} className="lg:col-span-2">
            <div className="glass border border-white/[0.07] rounded-2xl p-6 sm:p-8 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`text-xl ${colors.iconText}`}>
                      {activeCategory.icon}
                    </span>
                    <h3 className="text-white font-semibold">
                      {activeCategory.category}
                    </h3>
                    <span
                      className={`ml-2 text-xs font-mono px-2 py-0.5 rounded-full border ${colors.badge}`}
                    >
                      {activeCategory.skills.length} skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {activeCategory.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                        className={`px-3 py-1.5 text-sm rounded-lg glass border font-mono transition-all duration-150 cursor-default hover:scale-105 ${colors.border} ${colors.badge}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
