"use client";

import { ThemeProvider } from "next-themes";
import { ReduceMotionProvider } from "@/contexts/ReduceMotionContext";
import { PerformantProvider } from "@/contexts/PerformantContext";
import { ResumeProvider } from "@/contexts/ResumeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <ReduceMotionProvider>
        <PerformantProvider>
          <ResumeProvider>{children}</ResumeProvider>
        </PerformantProvider>
      </ReduceMotionProvider>
    </ThemeProvider>
  );
}
