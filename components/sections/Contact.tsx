"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { FadeIn } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            badge="Contact"
            title="Hire Me For AI + Full Stack Roles"
            subtitle="Open to immediate opportunities in AI SaaS, full-stack engineering, and product-focused teams."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* CTA card */}
          <FadeIn direction="left" delay={0.1} className="lg:col-span-3">
            <div
              className="relative glass rounded-2xl p-8 sm:p-10 overflow-hidden border border-indigo-500/20"
              style={{ boxShadow: "0 0 40px rgba(99,102,241,0.08)" }}
            >
              {/* Ambient glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, #a855f7, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-white/60 text-base leading-relaxed mb-8">
                  I&apos;m actively looking for strong product engineering teams
                  where I can build AI-first SaaS experiences, production OpenAI
                  integrations, and scalable full-stack systems. If you&apos;re
                  hiring, I can join quickly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={`mailto:${profile.email}`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #a855f7)",
                      boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                    }}
                  >
                    Send Email
                  </motion.a>
                  <motion.a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white/70 glass border border-white/10 hover:border-indigo-500/30 hover:text-white transition-all"
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick links */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-2">
            <div className="flex flex-col gap-3 h-full">
              {[
                {
                  label: "Email",
                  value: profile.email,
                  action: handleCopyEmail,
                  actionLabel: copied ? "Copied!" : "Copy",
                  href: `mailto:${profile.email}`,
                },
                {
                  label: "GitHub",
                  value: "github.com/hirakroya50",
                  href: profile.github,
                  external: true,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/royhirakp",
                  href: profile.linkedin,
                  external: true,
                },
                {
                  label: "Phone",
                  value: profile.phone,
                  href: `tel:${profile.phone}`,
                },
                {
                  label: "WhatsApp",
                  value: profile.whatsapp,
                  href: "https://wa.me/919002297603",
                  external: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass glass-hover border border-white/[0.07] rounded-xl p-4 flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs text-white/30 font-mono uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-white/60">{item.value}</div>
                  </div>
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                        copied
                          ? "text-green-400 border-green-500/30"
                          : "text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/10"
                      }`}
                    >
                      {item.actionLabel}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/10 transition-all"
                    >
                      Visit →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
