"use client";
import React, { useEffect, useState } from "react";
import { Boxes } from "../../ui/background-boxes";
import Image from "next/image";
import { FloatingDockDemo } from "../../floating-dock/floating-dock";
import ColourfulText from "../../ui/colourful-text";
import MovingBorderButton from "@/components/button/moving-border-button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

function LocalClock() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const update = () => {
            const formatted = new Intl.DateTimeFormat("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Asia/Karachi",
            }).format(new Date());
            setTime(formatted);
        };
        update();
        const interval = setInterval(update, 30000);
        return () => clearInterval(interval);
    }, []);

    if (!time) return null;

    return (
        <span className="text-slate-400 text-xs">{time} in Lahore, PK</span>
    );
}

export function Header() {
    return (
        <div className="h-[760px] relative w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
            {/* Ambient gradient blobs for depth */}
            <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/25 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-teal-500/15 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="relative z-20 flex flex-col md:flex-row items-center w-full max-w-7xl gap-5 md:gap-0">
                <div className="md:w-[40%] w-[95%] flex flex-col justify-center items-center mt-10 md:mt-0 gap-4">
                    <div className="relative">
                        <Image
                            src="/images/fizza's-circle.jpeg"
                            alt="Fizza Munir"
                            width={300}
                            height={300}
                            className="rounded-full shadow-[0_0_60px_-10px_rgba(20,184,166,0.55)] border-4 border-white/90"
                        />
                        <span className="absolute bottom-3 right-4 flex h-5 w-5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-slate-900"></span>
                        </span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="flex items-center gap-2 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            Available for freelance &amp; full-time work
                        </span>
                        <LocalClock />
                    </motion.div>
                </div>
                <div className="md:w-[60%] w-[95%] flex flex-col justify-center items-start text-white">
                    <h1 className="text-2xl md:text-[50px] font-display font-bold text-center md:mb-5 text-neutral-200">Transforming Concepts into <br /> </h1>
                    <h1 className="text-2xl md:text-[56px] font-display font-bold text-center md:mb-5 text-neutral-200"><ColourfulText text="Seamless User Experiences." /></h1>
                    <p className="md:text-3xl text-xl text-neutral-300 mt-4 font-display font-bold">Fizza Munir</p>
                    <p className="text-[18px] text-teal-400 font-display font-semibold">Full-Stack &amp; Mobile App Developer</p>
                    <p className="text-sm text-neutral-400 mt-3">
                        With 3+ years of experience across full-stack (MERN) and cross-platform mobile
                        development, I specialize in Next.js, React Native/Flutter, and Node.js — building
                        production-ready products for clients across Pakistan, the UAE, and the USA. I own
                        everything end-to-end: design, development, testing, and analysis.
                    </p>
                    <div className="mt-5 flex justify-evenly md:w-[80%] w-full mx-auto gap-5">
                        <div className="w-[50%]">
                            <Link href={"/contact"} target="_blank" className="w-full">
                                <button className="w-full h-[45px] md:px-8 px-4 py-2 rounded-full bg-teal-500 text-black font-bold transition duration-200 hover:bg-teal-400 border-2 border-transparent hover:border-teal-300">
                                    Hire Me
                                </button>
                            </Link>
                        </div>
                        <div className="w-[50%]">
                            <Link href={"/projects"} className="w-full">
                                <MovingBorderButton
                                    title="Show my work"
                                    icon={<FaLocationArrow />}
                                    position="right"
                                />
                            </Link>

                        </div>

                    </div>
                    <FloatingDockDemo />
                </div>
            </div>
        </div>
    );
}
