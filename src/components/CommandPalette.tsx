"use client";

import { profile } from "@/content/profile";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useReduceMotionOverride } from "@/contexts/ReduceMotionContext";
import { useResume } from "@/contexts/ResumeContext";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

const LINKS: { id: string; label: string; href?: string; isResume?: boolean }[] = [
  { id: "linkedin", label: "LinkedIn", href: profile.links.linkedin },
  { id: "github", label: "GitHub", href: profile.links.github },
  { id: "resume", label: "Resume", isResume: true },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const { override, setOverride } = useReduceMotionOverride();
  const { openResume } = useResume();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-500 hover:bg-zinc-800 text-sm"
      >
        <kbd className="px-1.5 py-0.5 rounded bg-zinc-700 text-xs">⌘K</kbd>
        Search
      </button>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command palette"
        className="command-palette-dialog"
      >
        <Command.Input placeholder="Jump to section or open link..." className="command-palette-input" />
        <Command.List className="command-palette-list">
              <Command.Empty>No results found.</Command.Empty>
              <Command.Group heading="Sections">
                {SECTIONS.map((s) => (
                  <Command.Item
                    key={s.id}
                    value={s.label}
                    onSelect={() => {
                      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                      setOpen(false);
                    }}
                    className="px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:bg-violet-500/20 data-[selected=true]:bg-violet-500/20"
                  >
                    {s.label}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Links">
                {LINKS.map((l) => (
                  <Command.Item
                    key={l.id}
                    value={l.label}
                    onSelect={() => {
                      if (l.isResume) {
                        openResume();
                      } else if (l.href) {
                        window.open(l.href, "_blank");
                      }
                      setOpen(false);
                    }}
                    className="px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:bg-violet-500/20 data-[selected=true]:bg-violet-500/20"
                  >
                    {l.label} →
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Theme">
                <Command.Item
                  value="Light mode"
                  onSelect={() => {
                    setTheme("light");
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:bg-violet-500/20"
                >
                  Light mode
                </Command.Item>
                <Command.Item
                  value="Dark mode"
                  onSelect={() => {
                    setTheme("dark");
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:bg-violet-500/20"
                >
                  Dark mode
                </Command.Item>
              </Command.Group>
              <Command.Group heading="Motion">
                <Command.Item
                  value="Reduce motion"
                  onSelect={() => {
                    setOverride(true);
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:bg-violet-500/20"
                >
                  {override === true ? "✓ " : ""}Reduce motion
                </Command.Item>
                <Command.Item
                  value="Full motion"
                  onSelect={() => {
                    setOverride(false);
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:bg-violet-500/20"
                >
                  {override === false ? "✓ " : ""}Full motion
                </Command.Item>
                <Command.Item
                  value="Use system preference"
                  onSelect={() => {
                    setOverride(null);
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:bg-violet-500/20"
                >
                  {override === null ? "✓ " : ""}Use system preference
                </Command.Item>
              </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
