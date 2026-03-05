"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import { getSkillIcon, hasRealIcon } from "@/lib/skillIcons";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import ProjectModal from "./ProjectModal";
import { container, item } from "@/lib/motion";

export default function Projects() {
  const [modalProject, setModalProject] = useState<(typeof profile.projects)[number] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-text text-3xl md:text-4xl font-bold mb-12"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {profile.projects.map((proj, i) => (
              <ProjectCard
                key={proj.slug}
                project={proj}
                index={i}
                onOpen={() => setModalProject(proj)}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: (typeof profile.projects)[number];
  index: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y });
    },
    []
  );

  return (
    <motion.article
      ref={cardRef}
      variants={item}
      whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 20 } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight({ x: 50, y: 50 })}
      onClick={onOpen}
      className="relative rounded-2xl p-6 cursor-pointer overflow-hidden group bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800/80 hover:border-violet-500/50 transition-all"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10">
        <p className="text-xs text-zinc-500 mb-2">{project.dates}</p>
        <h3 className="text-lg font-semibold text-violet-400 mb-2">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, j) => {
            const iconUrl = getSkillIcon(t);
            const isRealIcon = hasRealIcon(t);
            return (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + j * 0.05 }}
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
              </motion.span>
            );
          })}
        </div>
        <ul className="list-disc list-inside text-zinc-500 text-sm space-y-1 mb-4">
          {project.highlights.slice(0, 2).map((h, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: j * 0.05 }}
            >
              {h}
            </motion.li>
          ))}
        </ul>
        <span className="text-sm text-violet-400 group-hover:underline">
          View details →
        </span>
      </div>
    </motion.article>
  );
}
