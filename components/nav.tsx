"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const chapters = [
  { id: "colophon", num: "01", label: "Colophon" },
  { id: "workshop", num: "02", label: "Workshop" },
  { id: "field-notes", num: "03", label: "Field Notes" },
  { id: "shipped", num: "04", label: "Shipped" },
  { id: "correspondence", num: "05", label: "Correspondence" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => !!el);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const idx = parseInt(e.key, 10);
      if (idx >= 1 && idx <= chapters.length) {
        const target = document.getElementById(chapters[idx - 1].id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-mono text-[10px] uppercase tracking-widest2 text-muted transition-colors hover:text-ink"
        >
          AM — <span className="text-ink">Aniket Mandloi</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {chapters.map((c) => {
            const isActive = active === c.id;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group relative flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2"
                aria-current={isActive ? "location" : undefined}
              >
                <span
                  className={`transition-colors ${
                    isActive ? "text-ember" : "text-muted group-hover:text-ink"
                  }`}
                >
                  {c.num}
                </span>
                <span
                  className={`transition-colors ${
                    isActive ? "text-ink" : "text-muted group-hover:text-ink"
                  }`}
                >
                  {c.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-[2px] h-px bg-ember"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-widest2 text-muted md:inline">
            Press 1–5
          </span>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
