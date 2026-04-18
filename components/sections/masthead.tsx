"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { profile } from "@/lib/content";
import { easeOutExpo } from "@/lib/motion";

export function Masthead() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32"
    >
      {/* soft ember spotlight — only design gradient in the entire site */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[90vh] w-[80vw] -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgb(var(--ember) / 0.85), transparent)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-x-6 px-6 md:px-10">
        {/* Top strip: issue line */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.25 }}
          className="col-span-12 mb-10 flex items-baseline justify-between border-b border-ink/[0.16] pb-3 font-mono text-[10px] uppercase tracking-widest2 text-muted md:mb-16"
        >
          <span>{profile.issue}</span>
          <span className="hidden sm:inline">A portfolio, published continuously</span>
          <span>The Craft Review</span>
        </motion.div>

        {/* Name block */}
        <motion.div
          style={{ y: nameY }}
          className="col-span-12 md:col-span-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.4 }}
            className="mb-4 font-mono text-[11px] uppercase tracking-widest2 text-ember md:mb-6"
          >
            ✦ Feature · Folio 01
          </motion.p>

          <h1 className="font-display text-masthead font-light leading-[0.92] tracking-tight">
            <MaskedLine delay={0.55}>Aniket</MaskedLine>
            <MaskedLine delay={0.75} italic>
              Mandloi.
            </MaskedLine>
          </h1>
        </motion.div>

        {/* Photo slot */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.55 }}
          className="col-span-12 mt-10 md:col-span-4 md:mt-0"
        >
          {/* Drop an image at /public/portrait.jpg and pass src="/portrait.jpg" to activate */}
          <PhotoFrame
            aspect="portrait"
            caption="Portrait · 2026 · A. Mandloi"
            priority
          />
        </motion.div>

        {/* Footer meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="col-span-12 mt-12 grid grid-cols-12 gap-6 border-t border-ink/[0.16] pt-6 md:mt-24"
        >
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              The Subject
            </p>
            <p className="mt-2 font-display text-xl italic">
              A software engineer.
            </p>
          </div>
          <div className="col-span-6 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              Dateline
            </p>
            <p className="mt-2 font-sans text-sm text-ink">{profile.locationLine}</p>
          </div>
          <div className="col-span-6 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
              In this issue
            </p>
            <p className="mt-2 font-sans text-sm text-ink">
              Avalon DEX · 2careAI · HallGuard · Manabu
            </p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="col-span-12 mt-12 flex items-center justify-center md:mt-16"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-muted"
          >
            <span>Read on</span>
            <span className="h-5 w-px bg-ink/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MaskedLine({
  children,
  delay = 0,
  italic = false,
}: {
  children: React.ReactNode;
  delay?: number;
  italic?: boolean;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "101%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: easeOutExpo, delay }}
        className={`inline-block font-display ${italic ? "italic text-ember" : ""}`}
        style={{
          fontVariationSettings: italic
            ? '"opsz" 144, "SOFT" 100'
            : '"opsz" 144, "SOFT" 30',
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
