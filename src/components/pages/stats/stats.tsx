"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, ShieldCheck, Globe } from "lucide-react";

const stats = [
    { icon: Briefcase, value: "3+", label: "Years of Experience" },
    { icon: Globe, value: "15+", label: "Projects Delivered" },
    { icon: ShieldCheck, value: "100%", label: "Client Satisfaction" },
    { icon: Users, value: "PK · UAE · USA", label: "Clients Served Across" },
];

const trustedBy = [
    "Success Signatures",
    "Kreatorz.co",
    "Etrends Solutions",
    "TLC Med Clinics",
];

export default function Stats() {
    return (
        <section className="relative py-14 bg-white dark:bg-neutral-950 border-y border-gray-100 dark:border-neutral-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-neutral-900/60 transition-colors duration-300"
                            >
                                <div className="p-3 rounded-full bg-gradient-to-br from-teal-500/10 to-teal-500/10 text-teal-500 dark:text-teal-400">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white">
                                    {stat.value}
                                </span>
                                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                    {stat.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12">
                    <p className="text-center text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
                        Trusted by teams &amp; clients at
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {trustedBy.map((name, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-neutral-900/60 hover:border-teal-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
                            >
                                {name}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
