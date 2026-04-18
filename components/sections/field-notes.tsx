"use client";

import { motion } from "framer-motion";
import { Rule } from "@/components/ui/rule";
import { Reveal } from "@/components/ui/reveal";
import { experience, type Experience } from "@/lib/content";
import { easeOutExpo, viewportOnce } from "@/lib/motion";

export function FieldNotes() {
  return (
    <section id="field-notes" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Rule number="Ch. 03" label="Field Notes" className="mb-12 md:mb-20" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <h2 className="font-display text-chapter">
                Dispatches from <span className="italic text-ember">the work</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base text-muted md:text-lg">
                Three engagements. Three different shapes of problem. The résumé
                summary — annotated.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="relative border-l border-ink/[0.16]">
              {experience.map((entry, i) => (
                <EntryCard key={entry.company + entry.period} entry={entry} idx={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EntryCard({ entry, idx }: { entry: Experience; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease: easeOutExpo, delay: idx * 0.08 }}
      className="relative pb-14 pl-8 last:pb-0 md:pl-14"
    >
      {/* marker */}
      <span
        aria-hidden
        className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-ember"
      />
      <span
        aria-hidden
        className="absolute -left-[11px] top-[2px] h-[21px] w-[21px] rounded-full border border-ember/30"
      />

      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
            {String(idx + 1).padStart(2, "0")} / Entry
          </p>
          <h3 className="mt-1 font-display text-feature">
            {entry.company}
            {entry.project && (
              <span className="text-ember">
                {" "}
                · <span className="italic">{entry.project}</span>
              </span>
            )}
          </h3>
        </div>
        <div className="text-right font-mono text-[10px] uppercase tracking-widest2 text-muted">
          <div>{entry.period}</div>
          <div>{entry.location}</div>
        </div>
      </header>

      <p className="mb-5 font-sans text-sm uppercase tracking-[0.18em] text-muted">
        {entry.role}
      </p>

      <ul className="space-y-3 text-base leading-[1.55] text-ink md:text-lg">
        {entry.highlights.map((h, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              duration: 0.6,
              ease: easeOutExpo,
              delay: idx * 0.05 + i * 0.06,
            }}
            className="relative pl-5"
          >
            <span
              aria-hidden
              className="absolute left-0 top-[0.7em] h-px w-3 bg-ember/60"
            />
            {h}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}
