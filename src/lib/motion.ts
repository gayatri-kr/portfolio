/**
 * Centralized animation system.
 * Use prefers-reduced-motion aware variants via useReducedMotion().
 */
import type { Variants } from "framer-motion";

const duration = 0.5;
const staggerDelay = 0.08;

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotateY: -15 },
  visible: { opacity: 1, rotateY: 0 },
};

export const hoverLift = {
  y: -6,
  scale: 1.02,
  transition: { duration: 0.2 },
};

export const hoverLiftSubtle = {
  y: -4,
  transition: { duration: 0.2 },
};

export const magneticHover = (x: number, y: number) => ({
  x: x * 4,
  y: y * 4,
  transition: { type: "spring", stiffness: 300, damping: 20 },
});

export const transition = {
  duration,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const transitionFast = {
  duration: 0.2,
  ease: "easeOut" as const,
};

export const springBouncy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 20,
};

export const springSmooth = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export const scrollReveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-50px" },
  transition,
};

export const staggerChildren = (delay = staggerDelay) => ({
  staggerChildren: delay,
  delayChildren: 0.1,
});

/** Reduced-motion variants (instant or minimal) */
export const reducedContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const reducedItem: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const reducedFadeUp: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
