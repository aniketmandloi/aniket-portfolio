"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.35);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 border-b-2 border-[var(--line)] bg-[var(--bg)]">
      <div className="mx-auto w-[min(100%,102rem)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <SectionHeading label="SaaS">Projects</SectionHeading>

        <div className="overflow-hidden border-2 border-[var(--line)]">
          {projectsData.map((project, index) => (
            <Project
              key={`${project.title}-${index}`}
              {...project}
              index={index}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
