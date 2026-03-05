"use client";

/**
 * Space-themed background inspired by Figma space portfolio designs.
 * Uses pure CSS for nebula clouds - no WebGL shaders for reliability.
 */
export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base deep space */}
      <div className="absolute inset-0 bg-[#0d0d24]" />
      {/* Nebula cloud 1 - purple/pink */}
      <div
        className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] opacity-40"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
        }}
      />
      {/* Nebula cloud 2 - blue */}
      <div
        className="absolute w-[120%] h-[120%] -top-[10%] -right-[20%] opacity-30"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(99, 102, 241, 0.35) 0%, transparent 50%)",
        }}
      />
      {/* Nebula cloud 3 - pink accent */}
      <div
        className="absolute w-[100%] h-[100%] bottom-0 left-0 opacity-25"
        style={{
          background: "radial-gradient(ellipse 70% 40% at 50% 90%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
        }}
      />
      {/* Cosmic dust - subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
