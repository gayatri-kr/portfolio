"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl md:text-4xl font-bold mb-12"
        >
          Publications
        </motion.h2>
        <div className="space-y-6">
          {profile.publications.map((pub, i) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ x: 8, y: -4, transition: { type: "spring", stiffness: 400 } }}
              className="rounded-2xl p-6 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/80 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
            >
              <h3 className="text-lg font-semibold text-violet-400 mb-2">
                {pub.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-3">{pub.venue}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-violet-400 hover:underline"
              >
                {pub.link.includes("proquest.com")
                  ? "View on ProQuest →"
                  : pub.link.includes("springer.com")
                    ? "Read on Springer →"
                    : "Read more →"}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
