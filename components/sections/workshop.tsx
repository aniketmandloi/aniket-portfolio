"use client";

import { motion } from "framer-motion";
import { Rule } from "@/components/ui/rule";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/lib/content";
import { easeOutExpo, viewportOnce } from "@/lib/motion";

export function Workshop() {
  return (
    <section id="workshop" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Rule number="Ch. 02" label="The Workshop" className="mb-12 md:mb-20" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <h2 className="font-display text-chapter">
                Tools of <span className="italic text-ember">the trade</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md font-sans text-base text-muted md:text-lg">
                A working inventory — chosen for the job, not collected. Some get
                daily use, some are kept sharp for when the situation demands them.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="divide-y divide-ink/[0.12]">
              {skillGroups.map((group, groupIdx) => (
                <SkillGroupRow key={group.label} group={group} idx={groupIdx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroupRow({
  group,
  idx,
}: {
  group: { label: string; items: string[] };
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: easeOutExpo, delay: idx * 0.06 }}
      className="grid grid-cols-12 gap-x-4 py-6 md:py-8"
    >
      <div className="col-span-12 md:col-span-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-ember">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
            {group.label}
          </p>
        </div>
      </div>
      <div className="col-span-12 mt-4 md:col-span-9 md:mt-0">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-display text-xl md:text-2xl">
          {group.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.5,
                ease: easeOutExpo,
                delay: idx * 0.05 + i * 0.025,
              }}
              className="group relative"
            >
              <span className="relative tracking-tight text-ink transition-colors duration-300 hover:text-ember">
                {item}
              </span>
              {i < group.items.length - 1 && (
                <span className="ml-5 text-muted" aria-hidden>
                  ·
                </span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
