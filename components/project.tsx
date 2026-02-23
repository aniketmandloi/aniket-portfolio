"use client";

import { projectsData } from "@/lib/data";
import clsx from "clsx";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  isFirst: boolean;
};

export default function Project({
  title,
  label,
  description,
  impact,
  tags,
  index,
  isFirst,
}: ProjectProps) {
  const primaryTone = index % 2 === 0;

  return (
    <article className={clsx(!isFirst && "gm-line-top")}>
      <div
        className={clsx(
          "p-5 sm:p-8 lg:p-10",
          primaryTone ? "bg-black text-white" : "bg-[var(--pink)] text-black"
        )}
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className={clsx("gm-kicker", primaryTone ? "text-white/75" : "text-black/70")}>{label}</p>
            <h3 className={clsx("mt-2 text-xl leading-tight sm:text-2xl", primaryTone ? "text-[var(--yellow)]" : "text-black")}>
              {title}
            </h3>

            <p className={clsx("mt-3 text-sm leading-relaxed sm:text-lg", primaryTone ? "text-white/90" : "text-black/85")}>
              {description}
            </p>

            <ul className={clsx("mt-4 space-y-2 text-sm leading-relaxed sm:text-base", primaryTone ? "text-white/90" : "text-black/85")}>
              {impact.map((point, impactIndex) => (
                <li key={`${title}-impact-${impactIndex}`} className="relative pl-4">
                  <span
                    className={clsx(
                      "absolute left-0 top-2 h-2 w-2 rounded-full",
                      primaryTone ? "bg-[var(--yellow)]" : "bg-black"
                    )}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={clsx(
              "rounded-2xl border-2 p-4",
              primaryTone
                ? "border-white/40 bg-white/10"
                : "border-black/40 bg-white/55"
            )}
          >
            <p className={clsx("gm-kicker", primaryTone ? "text-white/75" : "text-black/70")}>Core stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <span
                  key={`${title}-tag-${tagIndex}`}
                  className={clsx(
                    "gm-pill",
                    primaryTone ? "!border-white bg-white/10 text-white" : "bg-[var(--panel-soft)] text-black"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
