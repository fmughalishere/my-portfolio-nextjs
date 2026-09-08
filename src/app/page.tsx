"use client";

// import { useEffect, useState } from "react";
import { Header } from "@/components/pages/header/header";
// import { ArrowDown, ArrowUp } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { About } from "@/components/pages/about/about";
import WhatIDo from "@/components/pages/what-i-do/what-i-do";
import Footer from "@/components/footer/footer";
import ShortExperience from "@/components/pages/short-experience/short-experience";
import Skills from "@/components/pages/skills/skills";
import ProjectSection from "@/components/pages/projects/projects";
import ContactSection from "@/components/pages/contact/contact";
import Stats from "@/components/pages/stats/stats";

export default function Home() {
  // const [atBottom, setAtBottom] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setAtBottom(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollTo = (position: "top" | "bottom") => {
  //   window.scrollTo({
  //     top: position === "top" ? 0 : document.body.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="dark:bg-neutral-900 pb-20 relative">
      {/* Header Section */}
      <Header />
      {/* About Section */}
      {/* <About/> */}

      {/* Stats + Trusted By */}
      <Stats />

      {/* what i do  */}
      <WhatIDo />

      {/* Experience Section */}
      <ShortExperience />
      {/* Scroll Button */}

      {/* Skills Section */}
      <Skills />

      {/* projects section  */}
      <ProjectSection />


      {/* get in touch section  */}
      <ContactSection />

      {/* footer  */}
      <Footer />
      {/* <button
        onClick={() => scrollTo(atBottom ? "top" : "bottom")}
        className="fixed bottom-6 right-6 bg-teal-500 text-black p-3 rounded-full shadow-lg transition-all hover:bg-teal-400 flex items-center justify-center"
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
      </button> */}
    </div>
  );
}
