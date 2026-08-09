"use client";

import { motion } from "framer-motion";
import { Inter, Oxanium } from "next/font/google";

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

const education = [
  {
    icon: "🎓",
    degree: "Bachelor of Arts in Islamic History and Culture",
    institution: "Sylhet M.C College,Sylhet",
    duration: "2021 — 2026",
    grade: "CGPA: 3.80 / 4.00",
    status: "Running",
    statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    desc: "Studying Islamic history, civilization, culture, and heritage, with a focus on the development of Muslim societies, major historical periods, and the intellectual and cultural contributions of the Islamic world.",
     subjects: [
    "Islamic History",
    "Islamic Civilization",
    "Islamic Culture",
    "History of the Muslim World",
    "Islamic Heritage"
  ],
  },
  {
    icon: "📘",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sylhet Government College,Sylhet",
    duration: "2019 — 2021",
    grade: "GPA: 4.25 / 5.00",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
     desc: "Completed HSC in the Arts/Humanities group with a focus on developing knowledge of history, society, culture, and human civilization.",
  subjects: [
    "History",
    "Islamic History",
    "Civics",
    "Economics",
    "ICT"
  ],
  },
  {
    icon: "📗",
    degree: "Secondary School Certificate (SSC)",
    institution: "The Aided High School Sylhet",
    duration: "2014 — 2018",
    grade: "GPA: 4.25 / 5.00",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    desc: "Completed SSC in the Science group with a strong foundation in scientific concepts, mathematics, and analytical thinking.",
    subjects: ["Mathematics", "Science", "ICT", "English", "Bangladesh Studies"],
  },
  {
    icon: "📜",
    degree: "Certifications & Courses",
    institution: "Programming Hero",
    duration: "Present",
    // grade: "10+ Certificates",
    status: "Running",
    statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    desc: "Completed several professional courses on React, Next.js, Node.js, and UI/UX Design from platforms like Programming Hero, Udemy, and freeCodeCamp.",
    subjects: ["React", "Next.js", "Node.js", "UI/UX", "Tailwind CSS"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function MyEducation() {
  return (
    <section
      id="education"
      className={`min-h-screen bg-[#060d1a] overflow-hidden ${inter.className}`}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-blue-800/15 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-5%]  h-[350px] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-28 pt-15">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Academic Background
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${oxanium.className}`}>
            My{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 ${oxanium.className}`}>
              Education
            </span>
          </h1>
          <p className="text-white/50 text-base mt-5 max-w-xl leading-relaxed">
            My academic journey that shaped my thinking, problem-solving, and passion for building things with technology.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={fadeUp}
              className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] flex flex-col"
            >
              {/* Top row — icon + status badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl transition-all duration-300 flex-shrink-0">
                  {edu.icon}
                </div>
                <span className={`text-[11px] font-bold tracking-widest uppercase border rounded-full px-3 py-1 ${edu.statusColor}`}>
                  {edu.status}
                </span>
              </div>

              {/* Degree */}
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-blue-300 transition-colors duration-200 leading-snug">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-blue-400/80 text-sm font-medium mb-1">{edu.institution}</p>

              {/* Duration + Grade */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white/30 text-xs flex items-center gap-1">
                  🗓️ {edu.duration}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-white/30 text-xs flex items-center gap-1">
                  ⭐ {edu.grade}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                {edu.desc}
              </p>

              {/* Subject tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-white/[0.06]">
                {edu.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="text-[11px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.07] hover:text-blue-300 hover:border-blue-500/20 rounded-full px-2.5 py-1 transition-all duration-200 cursor-default"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}