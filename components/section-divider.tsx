"use client";

import React from "react";

export default function SectionDivider() {
  return (
    <section className="border-b-2 border-[var(--line)] bg-[var(--panel-soft)]">
      <div className="mx-auto w-[min(100%,102rem)] px-4 py-7 text-center sm:px-6 sm:py-8 lg:px-8">
        <p className="text-lg leading-relaxed text-[var(--ink)] sm:text-xl">
          Full-stack engineer shipping resilient systems across fintech, healthcare, NGO, and SaaS.
        </p>
      </div>
    </section>
  );
}
