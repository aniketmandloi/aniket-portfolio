"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { aboutParagraphs, operatingPrinciples, profileData } from "@/lib/data";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About", 0.35);

  return (
    <section ref={ref} id="about" className="scroll-mt-28 border-b-2 border-[var(--line)] bg-[var(--panel-soft)]">
      <div className="mx-auto w-[min(100%,102rem)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <SectionHeading label="Background">About</SectionHeading>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="pt-2">
            <div className="space-y-4 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={`about-paragraph-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="gm-line-top mt-6 bg-[var(--yellow)] px-4 pb-6 pt-6 sm:px-6 lg:mt-0 lg:border-l-2 lg:border-t-0 lg:border-[var(--line)] lg:px-10 lg:pt-2">
            <p className="gm-kicker text-black/70">Operating principles</p>
            <ul className="mt-4 space-y-3">
              {operatingPrinciples.map((principle, index) => (
                <li
                  key={`about-principle-${index}`}
                  className="text-sm leading-relaxed text-black/85 sm:text-base"
                >
                  • {principle}
                </li>
              ))}
            </ul>

            <div className="gm-line-top mt-6 pt-5">
              <p className="gm-kicker text-black/70">Education</p>
              <h3 className="mt-2 text-lg leading-tight text-black sm:text-xl">
                {profileData.education.school}
              </h3>
              <p className="mt-2 text-sm text-black/85 sm:text-base">
                {profileData.education.degree}
              </p>
              <p className="mt-1 text-sm text-black/85 sm:text-base">
                {profileData.education.duration}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
