"use client";

import { profile } from "@/content/profile";
import Link from "next/link";
import { motion } from "framer-motion";
import StatusPill from "./StatusPill";
import CommandPalette from "./CommandPalette";
import ScrollProgress from "./ScrollProgress";
import { useResume } from "@/contexts/ResumeContext";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { openResume } = useResume();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300 ${
          scrolled
            ? "bg-zinc-900/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/50"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-[var(--text)]">
            {profile.name.split(" ")[0]}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition ${
                  scrolled
                    ? "text-zinc-200 hover:text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <StatusPill />
          </div>
          <div className="flex items-center gap-3">
            <CommandPalette />
            <motion.button
              onClick={openResume}
              className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-400/30 to-violet-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
