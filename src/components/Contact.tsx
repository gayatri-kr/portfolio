"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl md:text-4xl font-bold mb-12"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
          className="rounded-2xl p-8 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800/80"
        >
          <p className="text-zinc-400 mb-6">
            Get in touch for opportunities, collaboration, or just to say hi.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <CopyEmail />
            <motion.a
              href={`tel:${profile.phone}`}
              className="text-violet-400 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {profile.phone}
            </motion.a>
            <motion.a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
