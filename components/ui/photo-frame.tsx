"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import type { CSSProperties } from "react";

type Props = {
  src?: string;
  alt?: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "square" | "wide";
  priority?: boolean;
  className?: string;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function PhotoFrame({
  src,
  alt = "",
  caption,
  aspect = "portrait",
  priority = false,
  className = "",
}: Props) {
  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative ${aspectClass[aspect]} w-full overflow-hidden bg-paper-2`}
        style={
          {
            "--frame-inset": "14px",
          } as CSSProperties
        }
      >
        {/* Inner hairline — reads as a photo mount */}
        <div
          className="pointer-events-none absolute z-10"
          style={{
            inset: "var(--frame-inset)",
            border: "1px solid rgb(var(--rule) / 0.22)",
          }}
        />

        {/* Corner registration marks */}
        <CornerMarks />

        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.015]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <Placeholder />
        )}
      </div>

      {caption && (
        <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-widest2 text-muted">
          <span>{caption}</span>
          <span aria-hidden>—</span>
        </figcaption>
      )}
    </figure>
  );
}

function CornerMarks() {
  return (
    <>
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <span
          key={pos}
          aria-hidden
          className="pointer-events-none absolute z-10 h-[10px] w-[10px] text-ink/40"
          style={cornerStyle[pos]}
        >
          <svg viewBox="0 0 10 10" className="h-full w-full">
            <path
              d={cornerPath[pos]}
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </span>
      ))}
    </>
  );
}

const cornerStyle: Record<"tl" | "tr" | "bl" | "br", CSSProperties> = {
  tl: { top: 6, left: 6 },
  tr: { top: 6, right: 6 },
  bl: { bottom: 6, left: 6 },
  br: { bottom: 6, right: 6 },
};

const cornerPath: Record<"tl" | "tr" | "bl" | "br", string> = {
  tl: "M0 5 H5 V0",
  tr: "M5 0 V5 H10",
  bl: "M0 5 H5 V10",
  br: "M5 10 V5 H10",
};

function Placeholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted">
      <motion.div
        className="relative h-20 w-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 80 80" className="h-full w-full opacity-40">
          <circle
            cx="40"
            cy="40"
            r="38"
            stroke="currentColor"
            strokeWidth="0.75"
            fill="none"
            strokeDasharray="2 4"
          />
          <circle cx="40" cy="40" r="2" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.p
        className="font-mono text-[10px] uppercase tracking-widest2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: easeOutExpo }}
      >
        Awaiting image
      </motion.p>
    </div>
  );
}
