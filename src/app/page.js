"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Farhan from "../../public/Farhan-Profile.png";
import { Oxanium, Inter } from "next/font/google";

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

// ── Icons ──
function GithubIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M15 8h-1.5A1.5 1.5 0 0 0 12 9.5V11h3l-.5 3H12v7" />
    </svg>
  );
}

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });


const stats = [
  { key: "github",    icon: <GithubIcon />,    label: "GitHub",    href: "https://github.com/ibn-azam" },
  { key: "linkedin",  icon: <LinkedInIcon />,   label: "LinkedIn",  href: "https://linkedin.com/in/farhan-bin-azam" },
  { key: "instagram", icon: <InstagramIcon />,  label: "Instagram", href: "https://instagram.com/farhan" },
  { key: "facebook",  icon: <FacebookIcon />,   label: "Facebook",  href: "https://www.facebook.com/Farhanbinazam" },
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
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-700/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-900/25 blur-[100px]" />
        <div className="absolute top-[30%] right-[25%] w-[300px] h-[300px] rounded-full bg-indigo-800/15 blur-[90px]" />
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

          
          <motion.h1
            variants={fadeUp}
            className={`text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight ${oxanium.className}`}
          >
            Hi! I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
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
            <button className="bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-full px-7 py-3.5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
              See My Work
            </button>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-4 gap-3 mt-12"
          >
            {stats.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="bg-white/4 border border-white/[0.07] rounded-2xl px-2 py-4 text-center backdrop-blur-sm hover:bg-blue-600/10 hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="text-white/50 group-hover:text-blue-400 transition-colors duration-200">
                  {s.icon}
                </span>
                <span className="text-white/30 text-[10px] font-medium group-hover:text-white/60 transition-colors duration-200">
                  {s.label}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT IMAGE ── */}
        <motion.div
          className="relative shrink-0 flex items-center justify-center"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl scale-110" />

          {/* Decorative dashed ring */}
          <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-blue-500/20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-blue-400/10" />

          {/* Image with radial gradient mask */}
          <div
            className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px]"
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
            className="absolute top-4 -right-2 md:right-[-20px]  border border-white/[0.08] rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-white text-lg font-bold leading-none">500+</p>
            <p className="text-white/45 text-[11px] mt-0.5">Satisfied Clients</p>
          </motion.div>

          {/* Floating badge — bottom left */}
          <motion.div
            className="absolute bottom-12 -left-2 md:left-[-20px]  border border-white/[0.08] rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-white text-lg font-bold leading-none">5+</p>
            <p className="text-white/45 text-[11px] mt-0.5">Years of Experience</p>
          </motion.div>
        </motion.div>

      </main>
    </div>
  );
}