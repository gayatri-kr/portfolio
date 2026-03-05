"use client";

import { profile } from "@/content/profile";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={copy}
        className="text-violet-400 hover:underline"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {profile.email}
      </motion.button>
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-emerald-500/90 text-white text-sm font-medium whitespace-nowrap"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
