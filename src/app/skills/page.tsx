"use client";

import Footer from "@/components/footer/footer";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Settings, Cloud, Smartphone, Sparkles, ShieldCheck } from "lucide-react";

const detailedSkills = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ES6+", "Dart"],
  },
  {
    category: "Frontend (MERN UI Layer)",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Context API",
      "React Query",
      "Framer Motion",
    ],
  },
  {
    category: "Backend (Node/Express)",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Auth",
      "Middleware",
      "Socket.io",
      "MVC",
      "Firebase Authentication",
      "Cloudinary Integration",
      "Multer",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Firebase Firestore",
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Android", "iOS", "Cross-Platform Apps"],
  },
  {
    category: "AI & Modern Technologies",
    icon: Sparkles,
    skills: ["Prompt Engineering", "OpenAI/Gemini API", "LLM Integration", "AI-Powered Applications"],
  },
  {
    category: "QA & Analysis",
    icon: ShieldCheck,
    skills: ["Manual & Functional Testing", "Requirements Analysis", "UI/UX Design Basics", "Bug Tracking"],
  },
  {
    category: "Tools & DevOps",
    icon: Settings,
    skills: ["Git & GitHub", "Docker", "Postman", "VS Code", "Nodemon", "CI/CD Basics"],
  },
  {
    category: "Deployment Platforms",
    icon: Cloud,
    skills: ["Vercel", "Netlify", "AWS", "Hostinger", "Render", "Firebase Hosting"],
  },
];

export default function DetailedSkillsPage() {
  return (
    <div>
      <section className="py-16 sm:py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 sm:mb-4">
            Technical Skills
          </h2>

          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12">
            Explore my MERN stack skills categorized by domain — frontend,
            backend, database, and deployment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {detailedSkills.map((group, i) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div className="p-2 sm:p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                      <Icon className="text-teal-600 dark:text-teal-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mt-4">
                    {group.skills.map((skill, j) => (
                      <div
                        key={j}
                        className="rounded-lg sm:rounded-xl bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 text-center py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm font-medium hover:bg-teal-200 dark:hover:bg-teal-800 transition-colors duration-200 shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-teal-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-300 pointer-events-none rounded-2xl" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
