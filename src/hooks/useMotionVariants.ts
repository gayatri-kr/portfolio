"use client";

import { usePerformantContext } from "@/contexts/PerformantContext";
import {
  container,
  item,
  fadeUp,
  fadeLeft,
  reducedContainer,
  reducedItem,
  reducedFadeUp,
} from "@/lib/motion";

export function useMotionVariants() {
  const { reducedMotion } = usePerformantContext();

  return {
    container: reducedMotion ? reducedContainer : container,
    item: reducedMotion ? reducedItem : item,
    fadeUp: reducedMotion ? reducedFadeUp : fadeUp,
    fadeLeft: reducedMotion ? reducedFadeUp : fadeLeft,
  };
}
