"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 border-b-2 border-[var(--line)] bg-[var(--panel-soft)]"
    >
      <div className="mx-auto w-[min(100%,102rem)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <SectionHeading label="Work">Experience</SectionHeading>

        {experiencesData.map((item, index) => (
          <div
            key={`${item.company}-${item.period}`}
            className={index === 0 ? "pt-2" : "gm-line-top"}
          >
            <div
              className={`grid gap-5 p-5 sm:p-8 lg:grid-cols-[0.36fr_1fr] lg:p-10 ${
                index % 2 === 0 ? "bg-[var(--panel)]" : "bg-[var(--bg)]"
              }`}
            >
              <aside>
                <p className="gm-kicker text-[var(--ink-muted)]">{item.role}</p>
                <h3 className="mt-2 text-xl leading-tight text-[var(--ink)] sm:text-2xl">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--ink-muted)] sm:text-base">{item.project}</p>
                <p className="mt-3 text-sm text-[var(--ink-muted)] sm:text-base">{item.period}</p>
                <p className="text-sm text-[var(--ink-muted)] sm:text-base">{item.location}</p>
              </aside>

              <div>
                <ul className="space-y-2 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li key={`${item.company}-highlight-${highlightIndex}`} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[var(--pink)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((stackItem, stackIndex) => (
                    <span
                      key={`${item.company}-stack-${stackIndex}`}
                      className="gm-pill bg-[var(--panel-soft)] text-[var(--ink-muted)]"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
