"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import { container, item } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl md:text-4xl font-bold mb-12"
        >
          Experience
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {profile.experience.map((exp, i) => (
            <motion.article
              key={exp.company}
              variants={item}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="rounded-2xl p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/80 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-violet-400">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--text)] font-medium">{exp.company}</p>
                  <p className="text-sm text-zinc-500">
                    {exp.location} · {exp.dates}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.03 }}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 text-sm">
                {exp.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05 }}
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
