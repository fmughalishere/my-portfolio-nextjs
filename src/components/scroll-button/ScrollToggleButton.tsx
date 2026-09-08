"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollToggleButton() {
  const [atBottom, setAtBottom] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      setAtBottom(isBottom);
      setShowButton(scrollTop > 10); // Show button after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (position: "top" | "bottom") => {
    window.scrollTo({
      top: position === "top" ? 0 : document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          key="scroll-toggle"
          onClick={() => scrollTo(atBottom ? "top" : "bottom")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-teal-500 text-black p-3 rounded-full shadow-lg transition-all hover:bg-teal-400 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {atBottom ? (
              <motion.span
                key="up"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUp size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="down"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowDown size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
