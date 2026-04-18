"use client";

import { Rule } from "@/components/ui/rule";
import { Reveal, RevealWords } from "@/components/ui/reveal";
import { profile } from "@/lib/content";
import { PhotoFrame } from "@/components/ui/photo-frame";

export function Colophon() {
  return (
    <section id="colophon" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Rule number="Ch. 01" label="Colophon" className="mb-12 md:mb-20" />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <h2 className="font-display text-chapter">
                On <span className="italic text-ember">the maker</span>.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-5">
            <div className="space-y-6 text-lg leading-[1.55] md:text-xl">
              {profile.bio.map((paragraph, i) => (
                <RevealWords
                  key={i}
                  text={paragraph}
                  className={i === 0 ? "drop-cap font-sans" : "font-sans"}
                  as="p"
                  delay={i * 0.1}
                />
              ))}
            </div>

            <Reveal className="mt-12 md:mt-20">
              <blockquote className="border-l border-ember pl-6">
                <p className="font-display text-2xl italic leading-[1.2] md:text-3xl">
                  “{profile.pullQuote}”
                </p>
                <footer className="mt-4 font-mono text-[10px] uppercase tracking-widest2 text-muted">
                  — On craft
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="col-span-12 mt-8 md:col-span-3 md:col-start-10 md:mt-0">
            <PhotoFrame aspect="portrait" caption="Figure 01 · Workspace" />
          </div>
        </div>
      </div>
    </section>
  );
}
