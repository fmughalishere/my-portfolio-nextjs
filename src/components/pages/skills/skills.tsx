"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Layout,
    Server,
    Database,
    Settings,
    Cloud,
    Smartphone,
    Sparkles,
} from "lucide-react";

const categorizedSkills = [
    {
        category: "Programming Languages",
        icon: Code2,
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Dart"],
    },
    {
        category: "Frontend Frameworks",
        icon: Layout,
        skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Framer Motion"],
    },
    {
        category: "Backend Frameworks",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.IO"],
    },
    {
        category: "Databases",
        icon: Database,
        skills: ["MongoDB", "MySQL", "Firebase Firestore"],
    },
    {
        category: "Mobile Development",
        icon: Smartphone,
        skills: ["Flutter", "Dart", "Android", "iOS"],
    },
    {
        category: "AI & Modern Tech",
        icon: Sparkles,
        skills: ["Prompt Engineering", "OpenAI/Gemini API", "LLM Integration"],
    },
    {
        category: "Tools & DevOps",
        icon: Settings,
        skills: ["GitHub", "Docker", "Postman", "CI/CD Basics"],
    },
    {
        category: "Deployment Platforms",
        icon: Cloud,
        skills: ["Vercel", "Netlify", "AWS", "Render", "Hostinger"],
    },
];

export default function SkillsSection() {
    return (
        <section className="relative py-12 md:py-16 bg-white dark:bg-neutral-950 transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden dark:block">
                <div className="absolute -top-20 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-3">
                    Skills
                </h2>

                <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 text-sm sm:text-base">
                    A breakdown of the tools and technologies I use across web, mobile, and AI-powered products.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {categorizedSkills.map((group, i) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="group bg-white dark:bg-white/5 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                    <div className="p-2 sm:p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                                        <Icon className="text-teal-600 dark:text-teal-300 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>

                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                                        {group.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                                    {group.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className="rounded-lg bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 text-xs sm:text-sm font-medium py-1.5 px-3 hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-300 pointer-events-none rounded-2xl" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}