"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type ReduceMotionOverride = boolean | null; // null = use system

const ReduceMotionContext = createContext<{
  override: ReduceMotionOverride;
  setOverride: (v: ReduceMotionOverride) => void;
} | null>(null);

export function ReduceMotionProvider({ children }: { children: React.ReactNode }) {
  const [override, setOverride] = useState<ReduceMotionOverride>(null);
  return (
    <ReduceMotionContext.Provider value={{ override, setOverride }}>
      {children}
    </ReduceMotionContext.Provider>
  );
}

export function useReduceMotionOverride() {
  const ctx = useContext(ReduceMotionContext);
  return ctx ?? { override: null, setOverride: () => {} };
}
