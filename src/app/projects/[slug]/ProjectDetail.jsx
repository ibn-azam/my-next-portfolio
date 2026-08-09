"use client";

import { motion } from "framer-motion";
import { Oxanium, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { projects } from "@/lib/projects";

const oxanium = Oxanium({ subsets: ["latin"], weight: ["800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

function GithubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function BackIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 } }),
};

export default function ProjectDetail() {
     const { slug } = useParams();
     console.log("slug:", slug);
console.log("all slugs:", projects.map(p => p.slug));
  const project = projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!project) return <div className="text-white text-center py-40">Project not found.</div>;

  return (
    <div className={`min-h-screen bg-[#060d1a] text-white ${inter.className}`}>

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-700/15 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 lg:px-28 py-24">

        {/* Back button */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium mb-10 transition-colors duration-200 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200"><BackIcon /></span>
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden border border-white/[0.07] mb-10"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/80 to-transparent" />

          {/* Badges over image */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-widest uppercase text-blue-300 bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm rounded-full px-3 py-1">
              {project.category}
            </span>
            {project.live && (
              <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            )}
          </div>
        </motion.div>

        {/* Title + tagline */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2} className="mb-8">
          <h1 className={`text-3xl md:text-5xl font-extrabold tracking-tight leading-none mb-2 ${oxanium.className}`}>
            {project.name}
          </h1>
          <p className="text-blue-400/80 text-base font-medium">{project.tagline}</p>
        </motion.div>

        {/* Action buttons */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap gap-3 mb-12">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 hover:border-white/20 text-white text-sm font-semibold rounded-full px-6 py-3 transition-all duration-200"
          >
            <GithubIcon /> GitHub Repo
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full px-6 py-3 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_28px_rgba(37,99,235,0.6)] transition-all duration-200"
            >
              <ExternalIcon /> Live Demo
            </a>
          )}
        </motion.div>

        {/* Content sections — same card style as AboutMe/Skills */}
        <div className="flex flex-col gap-5">

          {/* Description */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl mb-5 transition-all duration-300">📝</div>
            <h2 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors duration-200">About This Project</h2>
            <p className="text-white/55 text-sm leading-relaxed">{project.description}</p>
            <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl mb-5 transition-all duration-300">🛠️</div>
            <h2 className="text-white font-bold text-lg mb-4 group-hover:text-blue-300 transition-colors duration-200">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={t} className="text-sm font-medium text-blue-300/80 bg-blue-500/[0.08] border border-blue-500/20 rounded-full px-4 py-2">
                  {project.techIcons[i]} {t}
                </span>
              ))}
            </div>
            <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
          </motion.div>

          {/* Challenges */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}
            className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl mb-5 transition-all duration-300">⚡</div>
            <h2 className="text-white font-bold text-lg mb-4 group-hover:text-blue-300 transition-colors duration-200">Challenges Faced</h2>
            <ul className="flex flex-col gap-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0 mt-2" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
          </motion.div>

          {/* Future Improvements */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={7}
            className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl mb-5 transition-all duration-300">🚀</div>
            <h2 className="text-white font-bold text-lg mb-4 group-hover:text-blue-300 transition-colors duration-200">Future Improvements</h2>
            <ul className="flex flex-col gap-3">
              {project.improvements.map((imp, i) => (
                <li key={i} className="flex items-start gap-3 text-white/55 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 flex-shrink-0 mt-2" />
                  {imp}
                </li>
              ))}
            </ul>
            <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
          </motion.div>

        </div>

        {/* Other Projects */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={8} className="mt-16">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">Other Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.filter((p) => p.slug !== project.slug).slice(0, 2).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex items-center gap-4 bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-white/[0.07]">
                  <Image src={p.image} alt={p.name} fill className="object-cover" unoptimized />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors duration-200 truncate">{p.name}</p>
                  <p className="text-white/35 text-xs mt-0.5 truncate">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}