"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const shortExperiences = [
    {
        role: "Software Engineer — Android & iOS Developer",
        company: "TLC Med Clinics",
        period: "Aug 2026 - Present",
        description: [
            "Owning end-to-end web + mobile development — design, build, test, and ship.",
            "Building a bilingual healthcare platform with telemedicine at its core.",
        ],
    },
    {
        role: "Associate Software Engineer",
        company: "Kreatorz.co",
        period: "Nov 2024 - Oct 2025",
        description: [
            "Developed scalable APIs and database solutions with Node.js, Express, and MySQL.",
            "Building modern, fast, and accessible web applications with Next.js, TypeScript, Redux, TailwindCSS, etc.",
        ],
    },
];

export default function ShortExperience() {
    return (
        <section className="relative py-10 bg-white dark:bg-neutral-950 transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden dark:block">
                <div className="absolute top-0 left-1/3 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl" />
                <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl" />
            </div>
            <div className="relative z-10 container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                    Experiences
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-5 md:mb-10">
                    A journey of learning, building, and solving problems with modern technologies.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {shortExperiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group p-[2px] rounded-2xl bg-gradient-to-br from-teal-400/50 via-teal-500/30 to-teal-500/30 transition duration-300 hover:shadow-[0_0_40px_4px_rgba(20,184,166,0.3)]"
                        >
                            <div className="bg-white dark:bg-white/5 dark:backdrop-blur-xl p-6 rounded-[inherit] border border-gray-200 dark:border-white/10 transition-colors duration-300 h-full flex flex-col">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                                        <Briefcase className="text-teal-600 dark:text-teal-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {exp.company}{" "}
                                            <span className="text-sm text-gray-500">| {exp.period}</span>
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-1 text-gray-700 dark:text-gray-400 flex-1">
                                    {exp.description.map((point, j) => (
                                        <li key={j} className="flex items-start">
                                            <span className="text-teal-500 dark:text-teal-400 mr-2">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/experience"
                        className="inline-block text-teal-600 dark:text-teal-400 font-semibold hover:underline transition"
                    >
                        View Full Experience →
                    </Link>
                </div>
            </div>
        </section>
    );
}
