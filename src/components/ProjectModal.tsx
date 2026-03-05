"use client";

import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/content/profile";
import { getSkillIcon, hasRealIcon } from "@/lib/skillIcons";
import Image from "next/image";

type Project = (typeof profile.projects)[number];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence mode="wait">
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto border-violet-500/30 shadow-2xl shadow-violet-500/10"
          >
            <p className="text-xs text-zinc-500 mb-2">{project.dates}</p>
            <h3 className="text-xl font-semibold text-violet-400 mb-3">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => {
                const iconUrl = getSkillIcon(t);
                const isRealIcon = hasRealIcon(t);
                return (
                  <span
                    key={t}
                    className="text-xs text-zinc-500 px-2 py-1 rounded bg-white/5 flex items-center gap-1.5"
                  >
                    {isRealIcon ? (
                      <Image
                        src={iconUrl}
                        alt={t}
                        width={14}
                        height={14}
                        className="w-[14px] h-[14px]"
                        unoptimized
                      />
                    ) : (
                      <span className="w-1 h-1 rounded-full bg-violet-500" />
                    )}
                    {t}
                  </span>
                );
              })}
            </div>
            <ul className="list-disc list-inside text-zinc-500 text-sm space-y-1 mb-4">
              {project.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-violet-400 hover:underline inline-block"
              >
                View on GitHub →
              </a>
            )}
            <button
              onClick={onClose}
              className="mt-4 text-sm text-zinc-500 hover:text-white"
            >
              Close
            </button>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
