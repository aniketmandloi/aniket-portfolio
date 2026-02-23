import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  label?: string;
};

export default function SectionHeading({
  children,
  label = "Section",
}: SectionHeadingProps) {
  return (
    <div className="mb-4 sm:mb-5">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl leading-none text-[var(--ink)] sm:text-3xl">{children}</h2>
        <p className="gm-kicker text-[var(--ink-muted)]">{label}</p>
      </div>
      <div className="mt-3 h-[2px] w-full bg-[var(--line)]" />
    </div>
  );
}
