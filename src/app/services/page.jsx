"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

const services = [
  {
    id: 1,
    number: "01",
    title: "Frontend Development",
    shortDesc: "Pixel-perfect UIs built with React & Next.js",
    description:
      "I build fast, responsive, and accessible web interfaces using React, Next.js, and Tailwind CSS. From landing pages to complex dashboards — every pixel is intentional.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: 2,
    number: "02",
    title: "UI/UX Design",
    shortDesc: "Designs that feel as good as they look",
    description:
      "I craft user experiences that balance aesthetics with function. Clean wireframes, interactive prototypes, and design systems that scale — built with Figma and a deep eye for detail.",
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/>
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
      </svg>
    ),
  },
  {
    id: 3,
    number: "03",
    title: "Web Performance",
    shortDesc: "Blazing fast load times & Core Web Vitals",
    description:
      "Slow websites lose users. I audit, optimize, and rebuild web apps for peak performance — achieving top Lighthouse scores through code splitting, lazy loading, and smart caching strategies.",
    tags: ["Lighthouse", "Core Web Vitals", "SEO", "Optimization"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    id: 4,
    number: "04",
    title: "API Integration",
    shortDesc: "Connect your frontend to any backend or service",
    description:
      "I integrate REST APIs, GraphQL endpoints, and third-party services seamlessly. Authentication, real-time data, payment gateways — I make the pieces talk to each other.",
    tags: ["REST API", "GraphQL", "Axios", "React Query"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
  },
  {
    id: 5,
    number: "05",
    title: "Responsive Design",
    shortDesc: "Flawless on every screen size",
    description:
      "Every project I deliver works perfectly from 320px mobile screens to 4K displays. Mobile-first approach, fluid layouts, and thorough cross-browser testing are my standard.",
    tags: ["Mobile First", "CSS Grid", "Flexbox", "Cross-browser"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    id: 6,
    number: "06",
    title: "Consultation & Code Review",
    shortDesc: "Expert eyes on your existing codebase",
    description:
      "Need a second opinion? I review codebases, identify bottlenecks, and provide actionable feedback. Whether it's architecture decisions or refactoring legacy code — I've got you covered.",
    tags: ["Code Review", "Architecture", "Mentoring", "Best Practices"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your goals, users, and technical constraints." },
  { step: "02", title: "Design", desc: "Wireframes and prototypes before a single line of code." },
  { step: "03", title: "Build", desc: "Clean, scalable code with regular progress updates." },
  { step: "04", title: "Deliver", desc: "Tested, optimized, and deployed — ready to scale." },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`min-h-screen bg-[#060d1a] text-white ${inter.className}`}>

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-125 h-125 rounded-full bg-blue-800/15 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] w-100 h-100 rounded-full bg-blue-700/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-87.5 h-87.5 rounded-full bg-indigo-900/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-28 py-24">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            What I Offer
          </span>
          <div className="flex flex-col gap-6">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${oxanium.className}`}>
              My{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                Services
              </span>
            </h1>
            <p className="text-white/45 text-base max-w-sm leading-relaxed">
              End-to-end frontend solutions — from design to deployment, tailored to your needs.
            </p>
          </div>
        </motion.div>

        {/* ── SERVICE CARDS ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex flex-col p-7 rounded-2xl border transition-all duration-300 cursor-default
                ${hovered === service.id
                  ? "bg-blue-600/10 border-blue-500/40 shadow-[0_8px_40px_rgba(37,99,235,0.15)] -translate-y-1"
                  : "bg-white/3 border-white/[0.07] hover:border-white/15"
                }`}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-[11px] font-bold tracking-widest text-white/15">
                {service.number}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300
                ${hovered === service.id ? "bg-blue-600/20 text-blue-400" : "bg-white/6 text-white/50"}`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-lg font-bold mb-1.5 transition-colors duration-200
                ${hovered === service.id ? "text-blue-300" : "text-white"}`}>
                {service.title}
              </h3>

              {/* Short desc */}
              <p className="text-white/40 text-xs font-medium mb-3">{service.shortDesc}</p>

              {/* Full desc */}
              <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-all duration-200
                      ${hovered === service.id
                        ? "text-blue-300/80 bg-blue-500/10 border-blue-500/20"
                        : "text-white/35 bg-white/4 border-white/8"
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PROCESS SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
              How I Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              My Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white/3 border border-white/[0.07] rounded-2xl p-6 hover:bg-white/5 hover:border-blue-500/20 transition-all duration-300"
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/10 z-10" />
                )}
                <span className="text-3xl font-extrabold text-blue-500/20 mb-3 block">{item.step}</span>
                <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-linear-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/20 rounded-3xl p-10 md:p-14 text-center"
        >
          {/* BG decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-30%] left-[50%] -translate-x-1/2 w-100 h-100 rounded-full bg-blue-600/10 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Ready to build something{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-300">
                great?
              </span>
            </h2>
            <p className="text-white/50 text-base mb-8 max-w-md mx-auto leading-relaxed">
              Let&apos;s turn your idea into a polished, production-ready product. I&apos;m available for freelance projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full px-8 py-3.5 shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_36px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Let&apos;s Work Together
              </a>
              <Link
                href="/projects"
                className="bg-white/6 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm rounded-full px-8 py-3.5 hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}