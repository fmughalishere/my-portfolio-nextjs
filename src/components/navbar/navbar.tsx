"use client";

import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/providers/ThemeProviders";
import Link from "next/link";
import AnimatedButton from "../button/AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);

    const menuVariants = {
        open: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
        closed: { opacity: 0, y: -20, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
    };

    // Detect Scroll Position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <nav
            ref={navRef} // Attach ref to navbar
            className={`fixed top-0 w-full z-50 shadow-md transition-all duration-300 font-gotham
      ${isScrolled ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md" : "bg-white dark:bg-neutral-900"}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl font-lobster font-bold text-gray-900 dark:text-white">
                        Fizza&apos;s Portfolio
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link
                            href={`/`}
                            className="relative group text-gray-900 dark:text-gray-300 hover:text-teal-500 transition-colors duration-300"
                        >
                            Home
                            <span
                                className="absolute left-0 bottom-0 h-[2px] w-full bg-teal-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                            />
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={`${item.toLowerCase()}`}
                                className="relative group text-gray-900 dark:text-gray-300 hover:text-teal-500 transition-colors duration-300"
                            >
                                {item}
                                <span
                                    className="absolute left-0 bottom-0 h-[2px] w-full bg-teal-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition-transform duration-300"
                        >
                            {theme === "light" ? (
                                <MoonIcon className="w-5 h-5 text-gray-800" />
                            ) : (
                                <SunIcon className="w-5 h-5 text-teal-400" />
                            )}
                        </button>
                        <div className="hidden md:flex">
                            <Link href={`/files/Fizza-Munir-CV.pdf`} target="_blank" download>
                                <AnimatedButton text="Download CV" />
                            </Link>
                        </div>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-gray-900 dark:text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed" // Ensures closing animation
                        variants={menuVariants}
                        className="md:hidden bg-white dark:bg-neutral-900 backdrop-blur-md absolute w-full left-0 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-2">
                            <Link
                                href={`/`}
                                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={`${item.toLowerCase()}`}
                                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                        <div className="block md:hidden mx-5 pb-4">
                            <Link href={`/files/Fizza-Munir-CV.pdf`} target="_blank" download>
                                <AnimatedButton text="Download CV" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
