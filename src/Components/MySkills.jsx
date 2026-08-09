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

const skillCategories = [
  {
    key: "frontend",
    icon: "🖥️",
    category: "Frontend",
    barColor: "bg-gradient-to-r from-blue-500 to-blue-400",
    accentColor: "group-hover:bg-blue-400/60",
    skills: [
      { name: "HTML",        level: 95, icon: "🌐" },
      { name: "Tailwind CSS",level: 90, icon: "🎨" },
      { name: "JavaScript",  level: 88, icon: "⚡" },
      { name: "React",       level: 85, icon: "⚛️" },
      { name: "Next.js",     level: 82, icon: "▲" },
    ],
  },
  {
    key: "backend",
    icon: "⚙️",
    category: "Backend",
    barColor: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    accentColor: "group-hover:bg-emerald-400/60",
    skills: [
      { name: "Node.js",    level: 80, icon: "🟢" },
      { name: "Express.js", level: 75, icon: "🚀" },
      { name: "MongoDB",    level: 72, icon: "🍃" },
    ],
  },
  {
    key: "tools",
    icon: "🛠️",
    category: "Tools",
    barColor: "bg-gradient-to-r from-purple-500 to-purple-400",
    accentColor: "group-hover:bg-purple-400/60",
    skills: [
      { name: "Git & GitHub", level: 88, icon: "🐙" },
      { name: "VS Code",      level: 95, icon: "💻" },
      { name: "Figma",        level: 70, icon: "🎭" },
      { name: "npm",          level: 85, icon: "📦" },
    ],
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

function SkillBar({ name, level, icon, barColor, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group/bar"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">{icon}</span>
          <span className="text-white/70 text-sm font-medium group-hover/bar:text-white transition-colors duration-200">
            {name}
          </span>
        </div>
        <span className="text-white/30 text-xs font-semibold">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function MySkills() {
  return (
    <section
      id="skills"
      className={`min-h-screen bg-[#060d1a] overflow-hidden ${inter.className}`}
    >
      {/* Ambient blobs — same as AboutMe */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%]  h-[450px] rounded-full bg-blue-800/15 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[350px] h-[350px] rounded-full bg-purple-900/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-28 pt-15">

        {/* Header — same style as AboutMe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            What I Work With
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${oxanium.className}`}>
            My{" "}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 ${oxanium.className}`}>
              Skills
            </span>
          </h1>
          <p className="text-white/50 text-base mt-5 max-w-xl leading-relaxed">
            Technologies and tools I use to bring ideas to life — from pixel-perfect frontends to scalable backends.
          </p>
        </motion.div>

        {/* Cards — same grid/card style as AboutMe */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.key}
              variants={fadeUp}
              className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]"
            >
              {/* Icon — same as AboutMe */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl mb-5 transition-all duration-300">
                {cat.icon}
              </div>

              {/* Title — same as AboutMe */}
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors duration-200">
                {cat.category}
              </h3>
              <p className="text-white/30 text-xs mb-5">{cat.skills.length} skills</p>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    barColor={cat.barColor}
                    delay={i * 0.07}
                  />
                ))}
              </div>

              {/* Footer — avg proficiency */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-white/30 text-xs">Avg. proficiency</span>
                <span className="text-white/60 text-xs font-bold">
                  {Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%
                </span>
              </div>

              {/* Subtle corner accent — same as AboutMe */}
              <div className={`absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 ${cat.accentColor} transition-colors duration-300`} />
            </motion.div>
          ))}

          {/* Full-width tag cloud card — fills the 4th grid slot */}
          <motion.div
            variants={fadeUp}
            className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl mb-5 transition-all duration-300">
              🧩
            </div>
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors duration-200">
              All Technologies
            </h3>
            <p className="text-white/30 text-xs mb-5">Quick overview</p>

            <div className="flex flex-wrap gap-2">
              {skillCategories.flatMap((cat) =>
                cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-xs font-medium text-white/50 bg-white/[0.04] border border-white/[0.07] hover:text-white hover:border-blue-500/30 hover:bg-blue-500/[0.08] rounded-full px-3 py-1.5 transition-all duration-200 cursor-default"
                  >
                    {s.icon} {s.name}
                  </span>
                ))
              )}
            </div>

            <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}