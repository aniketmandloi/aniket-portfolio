"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { technicalSkills } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.35);
  const executionThemes = [
    {
      title: "Create resilient APIs",
      detail:
        "Schema-validated auth, strict contracts, and transaction-safe workflows from the resume experience.",
    },
    {
      title: "Ship cross-platform systems",
      detail:
        "Web + mobile delivery with shared contracts across Next.js, React Native, and typed backend services.",
    },
    {
      title: "Design for unreliable networks",
      detail:
        "Offline-first patterns, differential sync, caching, and observability tuned for real field conditions.",
    },
  ];

  return (
    <section id="skills" ref={ref} className="scroll-mt-28 border-b-2 border-[var(--line)] bg-[var(--bg)]">
      <div className="mx-auto w-[min(100%,102rem)] px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <SectionHeading label="Technical">Skills</SectionHeading>
      </div>

      <div className="border-t-2 border-[var(--line)]">
        <div className="mx-auto grid w-[min(100%,102rem)] lg:grid-cols-[1fr_1fr]">
          <div className="bg-[var(--blue)] p-5 sm:p-8 lg:p-10">
            <h3 className="text-2xl leading-tight text-black sm:text-3xl">Technical stack</h3>

            <div className="mt-6 space-y-5">
              {technicalSkills.map((group, index) => (
                <div key={group.category} className={index === 0 ? "" : "border-t-2 border-black/45 pt-5"}>
                  <div className="grid gap-3 sm:grid-cols-[12rem_1fr] sm:items-start">
                    <p className="text-sm font-semibold uppercase tracking-wide text-black sm:text-base">
                      {group.category}
                    </p>
                    <p className="text-sm leading-relaxed text-black/85 sm:text-lg">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gm-line-top bg-black p-5 text-[var(--blue)] sm:p-8 lg:border-l-2 lg:border-t-0 lg:border-[var(--line)] lg:p-10">
            <h3 className="text-3xl leading-[0.95] sm:text-4xl">Execution focus</h3>

            <div className="mt-6 space-y-6">
              {executionThemes.map((item, index) => (
                <div key={`execution-theme-${index}`} className={index === 0 ? "" : "border-t-2 border-white/20 pt-6"}>
                  <p className="text-xl leading-tight sm:text-2xl">{item.title}</p>
                  <p className="mt-3 text-base leading-relaxed text-white/88 sm:text-lg">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/80 sm:text-base">
              Resume-backed: TypeScript, Go, PostgreSQL, React Native, AWS, and production observability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
