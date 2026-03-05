"use client";

import { useState, useEffect } from "react";

export interface PerformantConfig {
  reducedMotion: boolean;
  isMobile: boolean;
  lowMemory: boolean;
  dpr: number;
  particleCount: number;
  enableCursorGlow: boolean;
  enableHeavyParticles: boolean;
}

export function usePerformant(): PerformantConfig {
  const [config, setConfig] = useState<PerformantConfig>({
    reducedMotion: false,
    isMobile: false,
    lowMemory: false,
    dpr: 1.5,
    particleCount: 4000,
    enableCursorGlow: true,
    enableHeavyParticles: true,
  });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowMemory = nav.deviceMemory != null ? nav.deviceMemory < 4 : false;

    const dpr = isMobile ? 1 : 1.5;
    const particleCount = isMobile ? 800 : lowMemory ? 2000 : 5000;
    const enableCursorGlow = !isMobile && !reducedMotion;
    const enableHeavyParticles = !reducedMotion && !lowMemory;

    setConfig({
      reducedMotion,
      isMobile,
      lowMemory,
      dpr,
      particleCount,
      enableCursorGlow,
      enableHeavyParticles,
    });
  }, []);

  return config;
}
