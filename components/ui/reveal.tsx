"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealChild, revealParent, viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "p" | "h1" | "h2" | "h3" | "span" | "li";
  stagger?: boolean;
  delay?: number;
};

export function Reveal({
  children,
  className,
  as = "div",
  stagger = false,
  delay = 0,
}: Props) {
  const Comp = motion[as] as typeof motion.div;
  if (stagger) {
    return (
      <Comp
        className={className}
        variants={revealParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={{ delayChildren: delay }}
      >
        {children}
      </Comp>
    );
  }
  return (
    <Comp
      className={className}
      variants={revealChild}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: Omit<Props, "stagger" | "delay">) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp variants={revealChild} className={className}>
      {children}
    </Comp>
  );
}

/**
 * Word-level reveal for prose — splits children into words, each fades/rises in sequence.
 */
export function RevealWords({
  text,
  className,
  as = "p",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  delay?: number;
}) {
  const Comp = motion[as] as typeof motion.p;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.035, delayChildren: delay } },
      }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={revealChild}
          className="inline-block"
          style={{ marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </Comp>
  );
}
