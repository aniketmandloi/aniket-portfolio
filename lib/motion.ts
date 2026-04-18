import type { Variants, Transition } from "framer-motion";

export const ease = [0.25, 0.1, 0.25, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const revealParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

export const revealChild: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const viewportOnce = { once: true, margin: "-10% 0% -10% 0%" } as const;

export const hoverLift: Transition = { duration: 0.4, ease: easeOutExpo };
