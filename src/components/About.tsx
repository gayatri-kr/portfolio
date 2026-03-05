"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { container, item } from "@/lib/motion";

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: -x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl md:text-4xl font-bold mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            ref={photoRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex-shrink-0 hidden md:block"
            style={{
              transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/20 ring-2 ring-violet-500/30 ring-offset-2 ring-offset-[var(--bg)]"
            >
              <Image
                src="/me.jpg"
                alt={profile.name}
                width={200}
                height={200}
                className="rounded-2xl object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:hidden flex-shrink-0"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/20">
              <Image
                src="/me.jpg"
                alt={profile.name}
                width={200}
                height={200}
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="text-zinc-400 leading-relaxed"
          >
            <motion.p variants={item}>{profile.summary}</motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
