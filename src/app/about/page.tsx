"use client";

import MovingBorderButton from "@/components/button/moving-border-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLocationArrow,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import Footer from "@/components/footer/footer";
import { About } from "@/components/pages/about/about";

export default function AboutPage() {
  return (
    <div>
      <About />
      <section className="min-h-screen py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              <Image
                src="/images/fiza.jpeg"
                alt="Fizza Munir"
                fill
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Hey! I&apos;m{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Fizza Munir
              </span>
              , a passionate{" "}
              <span className="font-semibold">MERN Stack Developer</span> and
              freelance web developer focused on building modern, responsive,
              and high-performance web applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I specialize in React, Next.js, Node.js, and MongoDB, and I love
              turning ideas into real-world digital products. I also build clean
              UI/UX designs that are user-friendly and conversion-focused.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              As a freelancer, I work with clients worldwide to deliver scalable
              websites, dashboards, and full-stack solutions. I am always
              learning new technologies and improving my development skills.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/projects"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-2 rounded-full transition"
              >
                View My Projects
              </Link>
              <Link href="/contact">
                <MovingBorderButton
                  title="Contact Me"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <FaGraduationCap /> Education
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              🎓 Bachelors of Science in Computer Science
              <br />
              📍 University of the Punjab, Lahore Pakistan
              <br />
              📅 Graduation: July 2025
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <FaMapMarkerAlt /> Location
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              📍 Lahore, Pakistan
              <br />
              Available for Onsite, remote & freelance opportunities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <BiCodeAlt /> Skills
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-y-2 list-disc list-inside">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>MySQL / MongoDB</li>
              <li>Tailwind CSS / Framer Motion</li>
              <li>REST APIs / Firebase / JWT </li>
              <li>Wordpress</li>
              <li>Flutter Development</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <FaBriefcase /> Experience
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              💼 Frontend Developer @ Kreatorz.co
              <br />
              And MERN Stack Developer @ Techxum.com
              <br />
              🚀 Built scalable dashboards, APIs, and responsive UIs with React
              & Node.js.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
