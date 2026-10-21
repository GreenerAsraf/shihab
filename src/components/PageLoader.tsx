"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale } from "lucide-react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fade out after 1.8 s — adjust to taste
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center gap-8 select-none"
        >
          {/* Decorative top line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent origin-left"
          />

          {/* Scale icon with pulse ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Outer pulse ring */}
            <motion.span
              animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-16 h-16 rounded-full border border-white/20"
            />
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
              <Scale className="w-6 h-6 text-[#B89A62]" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* "Connecting to shihab ..." text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="flex items-center gap-1"
          >
            <span
              className="text-white/85 text-sm sm:text-base tracking-[0.22em] uppercase font-light"
              style={{ fontFamily: "var(--font-sans, Inter, sans-serif)" }}
            >
              Connecting to shihab
            </span>
            {/* Animated ellipsis dots */}
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.22,
                  ease: "easeInOut",
                }}
                className="text-white/85 text-sm sm:text-base font-light leading-none"
              >
                .
              </motion.span>
            ))}
          </motion.div>

          {/* Thin progress bar at bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B89A62]/60 to-transparent origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
