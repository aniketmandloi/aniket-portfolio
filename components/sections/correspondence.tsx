"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Rule } from "@/components/ui/rule";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/content";
import { easeOutExpo, viewportOnce } from "@/lib/motion";
import { LiveClock } from "@/components/ui/live-clock";

const links = [
  {
    label: "Email",
    value: profile.contacts.email,
    href: `mailto:${profile.contacts.email}`,
  },
  {
    label: "Phone",
    value: profile.contacts.phone,
    href: `tel:${profile.contacts.phoneDigits}`,
  },
  {
    label: "LinkedIn",
    value: "in/aniketmandloi",
    href: profile.contacts.linkedin,
  },
  {
    label: "GitHub",
    value: "@aniketmandloi",
    href: profile.contacts.github,
  },
];

export function Correspondence() {
  return (
    <section id="correspondence" className="relative pt-28 md:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Rule
          number="Ch. 06"
          label="Correspondence"
          className="mb-12 md:mb-20"
        />

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <h2 className="font-display text-chapter leading-[1]">
                Write.
                <br />
                <span className="italic text-ember">Build.</span>
                <br />
                Reply.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base text-muted md:text-lg">
                Open to full-time roles, interesting contracts, and conversations
                about systems that are hard to keep standing.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ul className="divide-y divide-ink/[0.16] border-y border-ink/[0.16]">
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.6,
                    ease: easeOutExpo,
                    delay: i * 0.06,
                  }}
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative grid grid-cols-12 items-center gap-4 py-6 md:py-8"
                  >
                    <span className="col-span-3 font-mono text-[10px] uppercase tracking-widest2 text-muted md:col-span-2">
                      {String(i + 1).padStart(2, "0")} / {link.label}
                    </span>
                    <span className="col-span-7 font-display text-2xl transition-[transform,color] duration-500 ease-out group-hover:translate-x-2 group-hover:text-ember md:col-span-9 md:text-4xl">
                      {link.value}
                    </span>
                    <span className="col-span-2 flex justify-end md:col-span-1">
                      <ArrowUpRight
                        className="h-5 w-5 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ember"
                        strokeWidth={1.25}
                      />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer colophon */}
      <footer className="mt-28 border-t border-ink/[0.16]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-6 gap-y-6 px-6 py-10 md:px-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              Colophon
            </p>
            <p className="mt-3 text-sm text-ink">
              Set in <span className="font-display italic">Fraunces</span>,{" "}
              <span className="font-sans">Instrument Sans</span>, and{" "}
              <span className="font-mono">JetBrains Mono</span>. Built with
              Next.js, Tailwind CSS, and Framer Motion. Published from Kolkata.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              Local Time
            </p>
            <p className="mt-3 font-mono text-xs text-ink">
              <LiveClock timeZone={profile.timezone} />
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              Issue
            </p>
            <p className="mt-3 font-mono text-xs text-ink">{profile.issue}</p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              © 2026 — {profile.name}
            </p>
            <p className="mt-3 font-mono text-xs text-muted">
              Press <kbd className="rounded border border-ink/20 px-1">1</kbd>–
              <kbd className="rounded border border-ink/20 px-1">5</kbd> to jump
              chapters.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
