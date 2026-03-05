"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-6 rounded-full bg-zinc-700 dark:bg-zinc-600 p-1"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white shadow"
        animate={{ x: theme === "dark" ? 16 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </motion.button>
  );
}
