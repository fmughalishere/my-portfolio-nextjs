"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Layout,
    Server,
    Database,
    Settings,
    Cloud,
} from "lucide-react";

const categorizedSkills = [
    {
        category: "Programming Languages",
        icon: Code2,
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Dart"],
    },
    {
        category: "Frontend Frameworks",
        icon: Layout,
        skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux"],
    },
    {
        category: "Backend Frameworks",
        icon: Server,
        skills: ["Node.js", "Express.js"],
    },
    {
        category: "Databases",
        icon: Database,
        skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
        category: "Tools & DevOps",
        icon: Settings,
        skills: ["GitHub", "Docker"],
    },
    {
        category: "Deployment Platforms",
        icon: Cloud,
        skills: ["Vercel", "Netlify", "AWS", "Hostinger"],
    },
];

export default function SkillsSection() {
    return (
        <section className="py-12 md:py-16 bg-white dark:bg-black transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">
                    Skills
                </h2>

                <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 text-sm sm:text-base">
                    A breakdown of the tools and technologies I use across the stack.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {categorizedSkills.map((group, i) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                    <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                                        <Icon className="text-blue-600 dark:text-blue-300 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                        {group.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                                    {group.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className="rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 text-xs sm:text-sm font-medium py-1.5 px-3 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-300 pointer-events-none rounded-2xl" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}