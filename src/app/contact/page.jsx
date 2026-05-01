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

// 🔁 Update these with your real info
const CONTACT_INFO = {
  email: "farhan@example.com",
  linkedin: "linkedin.com/in/farhan-bin-azam",
  github: "github.com/ibn-azam",
  instagram: "instagram.com/farhan",
  linkedinUrl: "https://linkedin.com/in/farhan-bin-azam",
  githubUrl: "https://github.com/ibn-azam",
  instagramUrl: "https://instagram.com/farhan",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  );
}

const contactLinks = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: CONTACT_INFO.linkedin,
    href: CONTACT_INFO.linkedinUrl,
  },
  {
    icon: <GithubIcon />,
    label: "GitHub",
    value: CONTACT_INFO.github,
    href: CONTACT_INFO.githubUrl,
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    value: CONTACT_INFO.instagram,
    href: CONTACT_INFO.instagramUrl,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.honeypot) return; // bot trap

    setStatus("sending");

    // 🔁 Replace with your form submission logic (Formspree, EmailJS, API route, etc.)
    // Example with Formspree: change action URL below
    try {
      await new Promise((r) => setTimeout(r, 1500)); // simulate API call
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={`min-h-screen bg-[#060d1a] text-white ${inter.className}`}>

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-800/15 blur-[130px]" />
        <div className="absolute bottom-[0%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-28 py-24">

        {/* ── HEADER ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Let&apos;s work together
          </p>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${oxanium.className}`}>
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              Touch
            </span>
          </h1>
        </motion.div>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT — Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Section title */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>

              <div className="flex flex-col gap-4">
                {contactLinks.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={i * 0.15 + 1.5}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:bg-blue-600/10 hover:border-blue-500/30 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/[0.06] group-hover:bg-blue-600/20 text-white/50 group-hover:text-blue-400 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/40 text-xs font-medium mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium truncate group-hover:text-blue-300 transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="p-5 rounded-xl border border-green-500/20 bg-green-500/[0.06]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 text-xs font-bold uppercase tracking-widest">Current Status</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mt-2">
                Available for freelance work and full-time opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="lg:col-span-3"
          >
            <h2 className="text-xl font-bold text-white mb-6">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Honeypot — hidden from humans */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Farhan Bin Azam"
                    className="bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 focus:bg-blue-500/[0.04] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                    Email Address <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 focus:bg-blue-500/[0.04] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                  Subject <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry, collaboration, etc."
                  className="bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 focus:bg-blue-500/[0.04] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 focus:bg-blue-500/[0.04] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Success / Error messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm font-medium">Message sent! I&apos;ll get back to you soon.</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again.</p>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl px-8 py-4 shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_36px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 mt-1 cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}