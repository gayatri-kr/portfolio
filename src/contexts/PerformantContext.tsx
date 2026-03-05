"use client";

import React, { createContext, useContext } from "react";
import { usePerformant, type PerformantConfig } from "@/hooks/usePerformant";
import { useReduceMotionOverride } from "./ReduceMotionContext";

const PerformantContext = createContext<PerformantConfig | null>(null);

const defaultConfig: PerformantConfig = {
  reducedMotion: false,
  isMobile: false,
  lowMemory: false,
  dpr: 1.5,
  particleCount: 4000,
  enableCursorGlow: true,
  enableHeavyParticles: true,
};

export function PerformantProvider({ children }: { children: React.ReactNode }) {
  const config = usePerformant();
  const { override } = useReduceMotionOverride();

  const effectiveConfig: PerformantConfig = {
    ...config,
    reducedMotion: override !== null ? override : config.reducedMotion,
    enableCursorGlow: override === true ? false : config.enableCursorGlow,
    enableHeavyParticles: override === true ? false : config.enableHeavyParticles,
  };

  return (
    <PerformantContext.Provider value={effectiveConfig}>
      {children}
    </PerformantContext.Provider>
  );
}

export function usePerformantContext(): PerformantConfig {
  const ctx = useContext(PerformantContext);
  return ctx ?? defaultConfig;
}
