"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Farhan from "../../public/Farhan-Profile.png";
import { Oxanium , Inter } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-oxanium",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const stats = [
  { value: "1M+", label: "Coding Hours" },
  { value: "140+", label: "Projects Completed" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "10+", label: "Years of Experience" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#060d1a] overflow-hidden ${inter.className}`}>
      {/* Ambient glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-125 h-125 rounded-full bg-blue-700/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-100 h-100 rounded-full bg-blue-900/25 blur-[100px]" />
        <div className="absolute top-[30%] right-[25%] w-75 h-75 rounded-full bg-indigo-800/15 blur-[90px]" />
      </div>

      <main className="relative z-10 container mx-auto px-6 md:px-16 lg:px-28 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">

        {/* ── LEFT CONTENT ── */}
        <motion.div
          className="flex-1 max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow tag */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className={`text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight ${oxanium.className}`}
          >
            Hi! I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
              Farhan Bin Azam
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold text-white/80 mt-3 h-10 flex items-center"
          >
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Developer",
                  "Next.js Developer",
                  "UI Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-base font-light leading-relaxed mt-5 max-w-sm"
          >
            From prototypes to production-ready systems, I turn ideas into
            scalable, user-focused products.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full px-7 py-3.5 shadow-[0_0_24px_rgba(37,99,235,0.5)] hover:shadow-[0_0_36px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
              Let&apos;s Connect
            </button>
            <button className="bg-white/6 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-full px-7 py-3.5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
              See My Work
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.04] border border-white/[0.07] rounded-2xl px-4 py-3 text-center backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-200"
              >
                <p className="text-white text-xl font-bold">{s.value}</p>
                <p className="text-white/40 text-[11px] font-medium mt-0.5 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT IMAGE ── */}
        <motion.div
          className="relative flex-shrink-0 flex items-center justify-center"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl scale-110" />

          {/* Decorative dashed ring */}
          <div className="absolute w-85 h-85 md:w-105 md:h-105 rounded-full border border-dashed border-blue-500/20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-70 h-70 md:w-90 md:h-90 rounded-full border border-blue-400/10" />

          {/* Image with radial gradient mask */}
          <div
            className="relative w-70 h-90 md:w-90 md:h-110"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 90% at 50% 40%, black 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 85% 90% at 50% 40%, black 50%, transparent 100%)",
            }}
          >
            <Image
              src={Farhan}
              alt="Farhan Bin Azam"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Floating badge — top right */}
          <motion.div
            className="absolute top-4 -right-2 md:right-[-20px] bg-[#0d1e3a] border border-white/[0.08] rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-white text-lg font-bold leading-none">500+</p>
            <p className="text-white/45 text-[11px] mt-0.5">Satisfied Clients</p>
          </motion.div>

          {/* Floating badge — bottom left */}
          <motion.div
            className="absolute bottom-12 -left-2 md:left-[-20px] bg-[#0d1e3a] border border-white/[0.08] rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-white text-lg font-bold leading-none">10+</p>
            <p className="text-white/45 text-[11px] mt-0.5">Years of Experience</p>
          </motion.div>
        </motion.div>

      </main>
    </div>
  );
}