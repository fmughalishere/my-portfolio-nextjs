"use client";
import { useState, useEffect } from "react";
import Preloader from "@/components/preloader";
import Navbar from "@/components/navbar/navbar";
import ThemeProvider from "@/providers/ThemeProviders";
import ScrollToggleButton from "./scroll-button/ScrollToggleButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoaded(true), 500); // Wait for fade-out
    }, 2000); // Preloader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Content is always rendered */}
      <ThemeProvider>
        <Navbar />
        <div className="w-full bg-slate-100 dark:bg-neutral-900">{children}</div>
        <ScrollToggleButton/>
      </ThemeProvider>

      {/* Preloader with fade-out effect */}
      {!isLoaded && (
        <Preloader isFadingOut={isFadingOut} />
      )}
    </div>
  );
}
