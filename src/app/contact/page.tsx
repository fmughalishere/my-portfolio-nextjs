"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_0c8hu2u",
        "template_ojy3xoc",
        form.current,
        "cGJ5R_Z3F_IMfwldv"
      )
      .then(() => {
        setStatus("success");
        form.current?.reset();

        setToastMessage("Message sent successfully!");
        setToastType("success");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {
        setStatus("error");

        setToastMessage("Oops! Something went wrong.");
        setToastType("error");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I’d love to hear about your ideas, opportunities, or just have a friendly chat. Let’s connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10  items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Mail className="w-5 h-5" />
                  <Link href="mailto:fizamuneer0101@gmail.com" className="hover:underline">
                    fizamuneer0101@gmail.com
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>+92 3174084110</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Linkedin className="w-5 h-5" />
                  <Link
                    href="https://www.linkedin.com/in/fizza-munir-aa054a316/"
                    target="_blank"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Github className="w-5 h-5" />
                  <Link
                    href="https://github.com/fmughalishere"
                    target="_blank"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* EmailJS Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                name="name"
                id="name"
                required
                className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                required
                className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              {status === "loading" ? "Sending..." : "Send Message ✉️"}
            </button>

            {status === "success" && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">Oops! Something went wrong.</p>
            )}
          </motion.form>
        </div>
      </div>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className={`fixed bottom-6 right-6 z-[9999] px-6 py-4 rounded-lg shadow-lg text-white text-sm font-medium ${toastType === "success" ? "bg-green-600" : "bg-red-600"
              }`}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
