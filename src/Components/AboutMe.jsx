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
const cards = [
  {
    icon: "💻",
    title: "My Programming Journey",
    desc: "My journey into programming started when I wrote my first 'Hello World' — what began as messing around with code turned into a genuine obsession with figuring out how things work under the hood, and then rebuilding them better.",
  },
  {
    icon: "🛠️",
    title: "What I Love Working On",
    desc: "I enjoy building web apps and UI experiences — projects where I can see the direct impact of what I build. There's something satisfying about taking a messy problem and shipping a clean, working solution for it.",
  },
  {
    icon: "🎯",
    title: "Beyond the Code",
    desc: "Outside of programming, you'll usually find me playing football or sketching. Stepping away from the screen actually makes me a better problem-solver — it's where a lot of my best ideas show up.",
  },
  {
    icon: "✨",
    title: "A Bit About My Personality",
    desc: "I'm big on curiosity, clean code, and terrible puns. I take the work seriously, but not myself. If you're looking for someone who's easy to collaborate with and genuinely enjoys the process — let's talk. 🚀",
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

export default function AboutMe() {
  return (
    <section id="about" className={`min-h-screen bg-[#060d1a] overflow-hidden ${inter.className}`}>

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-blue-800/15 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-5%]  h-[350px] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-28 ">

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
            Get to know me
          </span>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${oxanium.className}`}>
            About{" "}
            <span className={`text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 ${oxanium.className}`}>
              Me
            </span>
          </h1>
          <p className="text-white/50 text-base mt-5 max-w-xl leading-relaxed">
            Hey, I&apos;m <span className="text-white font-semibold">Farhan Bin Azam</span> — a developer who loves turning ideas into things people can actually click on. Here&apos;s a bit more about who I am, on and off the keyboard.
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
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="group relative bg-white/[0.03] hover:bg-blue-600/[0.07] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] group-hover:bg-blue-600/15 flex items-center justify-center text-2xl mb-5 transition-all duration-300">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors duration-200">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {card.desc}
              </p>

              {/* Subtle corner accent */}
              <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-400/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mt-12"
        >
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full px-7 py-3.5 shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_36px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Let&apos;s Work Together
          </a>
          <a
            href="/projects"
            className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white text-sm font-semibold rounded-full px-7 py-3.5 hover:-translate-y-0.5 transition-all duration-200"
          >
            See My Projects
          </a>
        </motion.div> */}

      </div>
    </section>
  );
}