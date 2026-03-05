"use client";

import React, { createContext, useContext, useState } from "react";
import ResumeModal from "@/components/ResumeModal";

const ResumeContext = createContext<{
  openResume: () => void;
} | null>(null);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ResumeContext.Provider value={{ openResume: () => setOpen(true) }}>
      {children}
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  return ctx ?? { openResume: () => window.open("/resume.pdf", "_blank") };
}
