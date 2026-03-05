"use client";

import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/content/profile";

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl h-[90vh] flex flex-col bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-700 bg-zinc-900/95">
              <h3 className="font-semibold text-white">Resume Preview</h3>
              <div className="flex gap-2">
                <a
                  href={profile.links.resume}
                  download
                  className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition"
                >
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white text-sm transition"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <iframe
                src={`${profile.links.resume}#toolbar=0`}
                className="w-full h-full"
                title="Resume preview"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
