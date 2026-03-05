"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { container, item } from "@/lib/motion";
import { useResume } from "@/contexts/ResumeContext";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] to-transparent" />
  ),
});

export default function Hero() {
  const { openResume } = useResume();
  return (
    <>
      <Hero3D />
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={item}
            className="text-violet-400 font-mono text-sm tracking-widest mb-4"
          >
            {profile.location}
          </motion.p>
          <motion.h1
            variants={item}
            className="gradient-text text-4xl md:text-6xl font-bold mb-4"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-zinc-400 mb-4"
          >
            {profile.headline}
          </motion.p>
          <motion.p
            variants={item}
            className="text-zinc-200 font-semibold max-w-2xl mx-auto mb-10 drop-shadow-sm"
          >
            {profile.pitch}
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center"
          >
            {[
              { href: "#projects", label: "Projects", primary: true },
              { href: profile.links.github, label: "GitHub", external: true },
              { href: profile.links.linkedin, label: "LinkedIn", external: true },
              { href: "#contact", label: "Contact" },
            ].map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                whileHover={{
                  scale: 1.05,
                  boxShadow: btn.primary ? "0 0 20px rgba(139, 92, 246, 0.4)" : undefined,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  btn.primary
                    ? "bg-violet-600 hover:bg-violet-500"
                    : "border border-zinc-600 hover:border-violet-500"
                }`}
              >
                {btn.label}
              </motion.a>
            ))}
            <motion.button
              onClick={openResume}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-6 py-3 rounded-lg font-medium border border-zinc-600 hover:border-violet-500 transition"
            >
              View Resume
            </motion.button>
          </motion.div>
          <motion.div
            variants={item}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-zinc-500">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
              className="w-6 h-10 rounded-full border-2 border-violet-500/40 flex justify-center pt-2"
            >
              <motion.span
                className="w-1.5 h-2 rounded-full bg-violet-500"
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
