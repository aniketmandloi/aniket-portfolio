"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Rule } from "@/components/ui/rule";
import { Reveal } from "@/components/ui/reveal";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { projects, type Project } from "@/lib/content";
import { easeOutExpo, viewportOnce } from "@/lib/motion";

export function Shipped() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="shipped" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Rule number="Ch. 04" label="Shipped" className="mb-12 md:mb-20" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <h2 className="font-display text-chapter">
                What's been <span className="italic text-ember">pushed</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base text-muted md:text-lg">
                One current build taking most of the attention, and three
                production systems that shipped and stayed shipped.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Featured */}
        <FeaturedProject project={featured} />

        {/* Grid */}
        <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-32">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, ease: easeOutExpo }}
      className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-ink/[0.16] pt-10"
    >
      <div className="col-span-12 md:col-span-7">
        <PhotoFrame
          src={project.image}
          alt={project.name}
          aspect="wide"
          caption={`Plate 01 · ${project.name}`}
        />
      </div>

      <div className="col-span-12 md:col-span-5">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-ember">
          ★ Featured build · {project.period}
        </p>
        <h3 className="mt-3 font-display text-feature leading-[1.05]">
          {project.name}
        </h3>
        <p className="mt-4 font-display text-xl italic leading-tight text-ember md:text-2xl">
          {project.tagline}
        </p>
        <p className="mt-6 text-base leading-[1.6] text-ink md:text-lg">
          {project.summary}
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-widest2 text-muted">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-ink/15 px-2.5 py-1"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease: easeOutExpo, delay: idx * 0.1 }}
      className="col-span-12 md:col-span-4"
    >
      <PhotoFrame
        src={project.image}
        alt={project.name}
        aspect="portrait"
        caption={`Plate 0${idx + 2} · ${project.name}`}
      />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h4 className="font-display text-2xl leading-tight">
          {project.name}
        </h4>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest2 text-muted">
          {project.period}
        </span>
      </div>
      <p className="mt-3 font-display text-lg italic text-ember/90">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-[1.6] text-muted">
        {project.summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5 font-mono text-[9px] uppercase tracking-widest2 text-muted">
        {project.stack.slice(0, 5).map((s) => (
          <li
            key={s}
            className="rounded-full border border-ink/15 px-2 py-0.5"
          >
            {s}
          </li>
        ))}
      </ul>
      {project.link && (
        <a
          href={project.link.href}
          className="group mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-ink transition-colors hover:text-ember"
        >
          <span className="link-sweep">{project.link.label}</span>
          <ArrowUpRight
            className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.25}
          />
        </a>
      )}
    </motion.article>
  );
}
