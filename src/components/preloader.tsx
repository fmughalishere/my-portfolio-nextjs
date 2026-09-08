"use client";
import { motion } from "framer-motion";

export default function Preloader({ isFadingOut }: { isFadingOut: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 flex items-center justify-center bg-neutral-900 text-white z-50 pointer-events-none"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        className="relative flex items-center justify-center text-6xl font-bold"
      >
        {/* Left "<" moving in */}
        <motion.span
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {"<"}
        </motion.span>

        {/* "/" appearing in center */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          /
        </motion.span>

        {/* Right ">" moving in */}
        <motion.span
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {">"}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
