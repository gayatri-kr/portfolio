"use client";

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import { getSkillIcon, hasRealIcon } from "@/lib/skillIcons";
import { getSkillDescription } from "@/lib/skillDescriptions";
import Image from "next/image";
import { useState } from "react";
import { fadeLeft, container, item, hoverLiftSubtle } from "@/lib/motion";

const FILTER_TABS = [
  "All",
  "Full Stack",
  "Backend",
  "AI",
  "Data",
  "Cloud",
] as const;

const CATEGORY_TO_FILTER: Record<string, string> = {
  "Full Stack": "Full Stack",
  "Backend & APIs": "Backend",
  "Cloud & DevOps": "Cloud",
  "AI / ML": "AI",
  "Data & Analytics": "Data",
  Tools: "All",
};

function SkillChip({
  skill,
  iconUrl,
  isRealIcon,
  isExpanded,
  onToggle,
}: {
  skill: string;
  iconUrl: string;
  isRealIcon: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      variants={item}
      onClick={onToggle}
      whileHover={!isExpanded ? { scale: 1.05, y: -2 } : undefined}
      className="text-left"
    >
      <motion.div
        layout
        animate={{
          minWidth: isExpanded ? 320 : 140,
          minHeight: isExpanded ? 140 : 52,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className={`rounded-xl border overflow-hidden w-fit ${
          isExpanded
            ? "border-violet-500/50 bg-zinc-800/95 shadow-lg shadow-violet-500/20"
            : "border-zinc-700/50 bg-zinc-800/90 hover:border-violet-500/50"
        }`}
      >
        {!isExpanded ? (
          <div className="px-4 py-3 flex items-center gap-2">
            {isRealIcon ? (
              <Image src={iconUrl} alt={skill} width={24} height={24} className="flex-shrink-0 w-6 h-6" unoptimized />
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
            )}
            <span className="text-sm font-semibold text-zinc-200 truncate">{skill}</span>
          </div>
        ) : (
          <div className="p-4">
            <p className="text-sm text-violet-400 font-medium mb-2">{skill}</p>
            <p className="text-sm font-medium text-zinc-300 leading-relaxed">
              {getSkillDescription(skill)}
            </p>
            <span className="text-xs font-medium text-zinc-400 mt-2 block">Click to collapse</span>
          </div>
        )}
      </motion.div>
    </motion.button>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState<string>("All");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const categories = Object.entries(profile.skills).filter(([cat]) => {
    if (filter === "All") return true;
    return CATEGORY_TO_FILTER[cat] === filter;
  });

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Transparent so Hero3D shows through; subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0d0d24]/25 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl md:text-4xl font-bold mb-8"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTER_TABS.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setFilter(tab)}
              whileHover={hoverLiftSubtle}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === tab
                  ? "bg-violet-600 text-white font-semibold"
                  : "bg-zinc-800/90 text-zinc-200 font-semibold hover:bg-zinc-700/90 hover:text-white border border-zinc-700/50"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <div className="space-y-10">
          {categories.map(([category, items], catIdx) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05, delayChildren: catIdx * 0.05 }}
              className="relative"
            >
              <motion.h3
                variants={item}
                className="text-lg font-semibold text-violet-400 mb-4"
              >
                {category}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => {
                  const iconUrl = getSkillIcon(skill);
                  const isRealIcon = hasRealIcon(skill);
                  return (
                    <SkillChip
                      key={skill}
                      skill={skill}
                      iconUrl={iconUrl}
                      isRealIcon={isRealIcon}
                      isExpanded={expandedSkill === skill}
                      onToggle={() => setExpandedSkill(expandedSkill === skill ? null : skill)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
