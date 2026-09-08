"use client";

import MovingBorderButton from "@/components/button/moving-border-button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export default function ContactSection() {
    return (
        <section className="py-20 bg-gray-100 dark:bg-neutral-950 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
                    Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
                    <Link
                        href="mailto:fizamuneer0101@gmail.com"
                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
                    >
                        <Mail className="w-5 h-5" />
                        fizamuneer0101@gmail.com
                    </Link>
                    <Link
                        href="tel:+923174084110"
                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
                    >
                        <Phone className="w-5 h-5" />
                        +92 317 4084110
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/fizza-munir-aa054a316/"
                        target="_blank"
                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
                    >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/fmughalishere"
                        target="_blank"
                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:underline"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </Link>
                </div>

                <Link
                    href="mailto:fizamuneer0101@gmail.com"
                    className="inline-block "
                >
                    <MovingBorderButton
                        title="Say Hello!"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </Link>
            </div>
        </section>
    );
}
