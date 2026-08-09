"use client";

import { motion } from "framer-motion";
import { Oxanium, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

const oxanium = Oxanium({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProjectsPage() {
  return (
    <div className={`min-h-screen bg-[#060d1a] text-white ${inter.className}`}>

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-700/15 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-28 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            My Work
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${oxanium.className}`}>
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Projects
            </span>
          </h1>
          <p className="text-white/50 text-base mt-5 max-w-xl leading-relaxed">
            Real-world projects I&apos;ve built — from digital marketplaces to productivity tools. Each one taught me something new.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-44 bg-white/[0.03] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  unoptimized
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase text-blue-300 bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm rounded-full px-2.5 py-1">
                  {project.category}
                </span>
                {/* Live badge */}
                {project.live && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-blue-400/70 text-xs font-medium mb-3">{project.tagline}</p>
                <p className="text-white/45 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={t} className="text-[11px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.07] rounded-full px-2.5 py-1">
                      {project.techIcons[i]} {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[11px] font-medium text-white/30 bg-white/[0.04] border border-white/[0.07] rounded-full px-2.5 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer buttons */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                  <a
                    href={`/projects/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl px-4 py-2.5 shadow-[0_0_16px_rgba(37,99,235,0.3)] hover:shadow-[0_0_24px_rgba(37,99,235,0.5)] transition-all duration-200"
                  >
                    View Details <ArrowIcon />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 text-xs text-white/40 hover:text-blue-300 bg-white/[0.04] hover:bg-blue-500/[0.08] border border-white/[0.07] hover:border-blue-500/20 rounded-xl px-3 py-2.5 transition-all duration-200"
                      title="Live Demo"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/ibn-azam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm font-semibold rounded-full px-7 py-3.5 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </motion.div>

      </div>
    </div>
  );
}