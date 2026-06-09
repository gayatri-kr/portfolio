"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import Image from "next/image";
import { container, item } from "@/lib/motion";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl md:text-4xl font-bold mb-12"
        >
          Education
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {profile.education.map((edu, i) => (
            <motion.article
              key={edu.institution}
              variants={item}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="rounded-2xl p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/80 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-violet-400">{edu.degree}</h3>
                  <p className="text-[var(--text)] font-medium">{edu.institution}</p>
                  <p className="text-sm text-zinc-500">
                    {edu.location ? `${edu.location} · ` : ""}
                    {edu.dates}
                  </p>
                </div>
                {"logo" in edu && edu.logo && (
                  <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-white/15 border-2 border-zinc-600/50 flex items-center justify-center p-2">
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
              </div>
              {edu.notes && edu.notes.length > 0 && (
                <ul className="mt-3 list-disc list-inside space-y-1 text-zinc-400 text-sm">
                  {edu.notes.map((note, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.05 }}
                    >
                      {note}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
