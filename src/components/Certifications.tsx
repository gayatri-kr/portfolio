"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import Image from "next/image";
import { container, item } from "@/lib/motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl md:text-4xl font-bold mb-12"
        >
          Certifications
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {profile.certifications.map((cert, i) => (
            <motion.a
              key={`${cert.name}-${cert.issuer}`}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="rounded-xl p-4 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/80 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all block flex gap-3"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.02)",
              }}
            >
              {"logo" in cert && cert.logo && (
                <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-white/15 border-2 border-zinc-600/50 flex items-center justify-center p-2">
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-violet-400">{cert.name}</h3>
                <p className="text-sm text-zinc-300 mt-0.5">{cert.issuer}</p>
                <p className="text-xs text-zinc-500 mt-1">{cert.date}</p>
                <span className="text-xs text-violet-400 mt-2 inline-block hover:underline">
                  View certificate →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
