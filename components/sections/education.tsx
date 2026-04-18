"use client";

import { Rule } from "@/components/ui/rule";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Rule
          number="Ch. 05"
          label="Education & Coursework"
          className="mb-12 md:mb-16"
        />

        <Reveal>
          <div className="grid grid-cols-12 gap-x-6 gap-y-6">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                Institution
              </p>
              <h3 className="mt-2 font-display text-feature leading-tight">
                {education.school}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-muted">
                {education.location}
              </p>
            </div>

            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                Degree
              </p>
              <p className="mt-2 font-display text-xl italic text-ember">
                {education.degree}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-muted">
                {education.period}
              </p>
            </div>

            <div className="col-span-12 md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                Relevant Coursework
              </p>
              <ul className="mt-2 space-y-1 font-display text-xl">
                {education.courses.map((c) => (
                  <li key={c} className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-muted">§</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
