"use client";

import { useEffect, useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const experiences = [
    {
        role: "Software Engineer — Android & iOS Developer",
        company: "TLC Med Clinics",
        period: "Aug 2026 - Present",
        description: [
            "Own end-to-end development of the TLC Med Clinics website and its companion Android & iOS apps — from requirements analysis and UI/UX design to development, QA testing, and deployment.",
            "Built a bilingual (English/Urdu) patient-facing platform presenting physician-led, US-standard care with telemedicine built in as a core experience, not a bolt-on.",
            "Single-handedly manage the full software lifecycle across web and mobile — design, development, testing, and analysis.",
        ],
        projects: [
            {
                name: "TLC Med Clinics | Healthcare Platform (Web, Android & iOS)",
                details: [
                    "Designed and built a bilingual, physician-led healthcare website with an integrated telemedicine flow.",
                    "Extending the experience to native-feeling Android & iOS apps for appointments and patient care.",
                ],
                tech: ["Next.js", "React Native/Flutter", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
            },
        ],
    },
    {
        role: "MERN Stack Developer",
        company: "Etrends Solutions",
        period: "May 2026 - Jul 2026 · Remote",
        description: [
            "Designed and developed a modern, responsive travel business website with AI-driven marketing and lead-generation flows.",
            "Worked fully remote as part of a distributed team, shipping features end-to-end with Next.js and Tailwind CSS.",
        ],
        projects: [
            {
                name: "Etrends Solutions | Travel Business Website",
                details: [
                    "Built the marketing site and lead-capture experience for etrendssolutions.com.",
                    "Implemented smooth page transitions and micro-interactions with Framer Motion.",
                ],
                tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React Router DOM"],
            },
        ],
    },
    {
        role: "MERN Stack Developer",
        company: "Success Signatures",
        period: "Mar 2026 - Jul 2026 · Lahore",
        description: [
            "Developed responsive and scalable full-stack web applications using Next.js, React.js, Node.js, Express.js, TypeScript, and MongoDB.",
            "Built secure RESTful APIs, authentication systems, and database integrations for production-ready applications.",
            "Collaborated with cross-functional teams to deliver high-quality features and improve application performance.",
            "Fixed bugs, optimized code, and enhanced UI/UX to ensure a seamless user experience.",
            "Deployed and maintained applications using Vercel, Netlify, and Render.",
        ],
        projects: [
            {
                name: "",
                details: [
                    "Delivered production-ready full-stack features across multiple client applications.",
                    "Owned deployment and maintenance across Vercel, Netlify, and Render.",
                ],
                tech: ["Next.js", "React.js", "Node.js", "Express.js", "TypeScript", "MongoDB"],
            },
        ],
    },
    {
        role: "Associate Software Engineer",
        company: "Kreatorz.co",
        period: "Nov 2024 - Oct 2025",
        description: [
            "Developed scalable APIs and database solutions with Node.js, Express, and MySQL.",
            "Building modern, fast, and accessible web applications with Next.js, TypeScript, Redux, TailwindCSS, etc.",
            "Collaborate in an agile team using GitHub for version control.",
        ],
        projects: [
            {
                name: "",
                details: [
                    "Built engaging Add to Cart, Wishlist, and Checkout features for a seamless shopping experience.",
                    "Designed dynamic User and Admin Dashboards for efficient management.",
                    "Optimized e-commerce workflows for performance and user satisfaction.",
                ],
                tech: ["Next.js", "TypeScript", "NodeJs", "ExpressJs", "MySQL", "TailwindCSS", "SCSS"],
            },
        ],
    },
    {
        role: "MERN Stack Intern",
        company: "Kreatorz.co",
        period: "May 2024 - Oct 2024",
        description: [
            "Built modern, fast, and accessible web applications with Next.js, TypeScript, and TailwindCSS.",
            "Collaborated with backend and ui teams to improve API performance and UX.",
        ],
        projects: [
            {
                name: "Beauty Here | Ecommerce Beauty Website",
                details: [
                    "Designed and managed functionalities of Add To Cart, Wishlist.",
                    "Implemented order processing, checkout, and user dashboard management.",
                ],
                tech: ["React.js", "JavaScript", "MongoDB", "TailwindCSS", "Netlify"],
            },
        ],
    },
    {
        role: "MERN Stack Developer",
        company: "Techxum.com",
        period: "Dec 2023 - May 2024",
        description: [
            "Developed scalable APIs and database solutions with Node.js, Express, and MySQL.",
            "Building modern, fast, and accessible web applications with Next.js, TypeScript, Redux, TailwindCSS, etc.",
            "Collaborate in an agile team using GitHub for version control.",
        ],
        projects: [
            {
                name: "Techxum.com | IT Services Company Website",
                details: [
                    "Built engaging Add to Cart, Wishlist, and Checkout features for a seamless shopping experience.",
                    "Designed dynamic User and Admin Dashboards for efficient management.",
                ],
                tech: ["Next.js", "TypeScript", "NodeJs", "ExpressJs", "MongoDB", "TailwindCSS", "Wordpress", "Netlify", "Hostinger"],
            },
        ],
    },
];

export default function Experiences() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <section ref={ref} className="relative py-12 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden dark:block">
                <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl" />
            </div>
            <div className="relative z-10 container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
                    Experiences
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-5 md:mb-10">
                    A journey of learning, building, and solving problems with modern technologies.
                </p>
                <div className="relative border-l-4 border-gray-300 dark:border-neutral-800 pl-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={controls}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            className="relative mb-10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-8 top-0 bg-gray-300 dark:bg-neutral-700 rounded-full w-6 h-6 flex items-center justify-center">
                                <Briefcase className="text-gray-900 dark:text-gray-100" size={18} />
                            </div>

                            {/* Experience Card */}
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="p-6 bg-white dark:bg-white/5 dark:backdrop-blur-xl rounded-xl shadow-lg border border-gray-200 dark:border-white/10 transition-all duration-300">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.role}</h2>
                                <h3 className="text-md font-medium text-gray-700 dark:text-gray-400">
                                    {exp.company} <span className="text-gray-500">| {exp.period}</span>
                                </h3>

                                {/* Role Description with Custom Bullet Points */}
                                <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-400">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-teal-500 dark:text-teal-400 mr-2">▹</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Desktop View: Always Show Projects */}
                                <div className="hidden md:block mt-4">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Projects I Worked On:</h4>
                                    {exp.projects.map((project, i) => (
                                        <div key={i} className="mt-2 p-3 bg-gray-100 dark:bg-neutral-800 rounded-lg">
                                            <h5 className="text-md font-medium text-gray-900 dark:text-gray-100">{project.name}</h5>
                                            <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-400">
                                                {project.details.map((point, j) => (
                                                    <li key={j}>{point}</li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Tech Stack:</span>
                                                {project.tech.map((tech, j) => (
                                                    <span
                                                        key={j}
                                                        className="text-xs px-2 py-1 bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-100 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile View: Accordion for Projects */}
                                <div className="md:hidden mt-4">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-neutral-800 rounded-lg"
                                    >
                                        <span>{openIndex === index ? "Hide Details" : "See Details"}</span>
                                        {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>

                                    <motion.div
                                        animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className={`overflow-hidden mt-2 bg-gray-100 dark:bg-neutral-800 rounded-lg ${openIndex === index ? "p-3" : "p-0"
                                            }`}
                                    >
                                        {openIndex === index &&
                                            exp.projects.map((project, i) => (
                                                <div key={i} className="mt-2">
                                                    <h5 className="text-md font-medium text-gray-900 dark:text-gray-100">{project.name}</h5>
                                                    <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-400">
                                                        {project.details.map((point, j) => (
                                                            <li key={j}>{point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
