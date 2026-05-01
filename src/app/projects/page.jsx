"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const GITHUB_USERNAME = "ibn-azam";

// ✅ Fixed: removed trailing spaces from repo names
const FEATURED_REPOS = [
  "my-next-portfolio",
  "book-vibe",
  "digitools-platform-react",
  "Github-Issue-Tracker",
  "english-janala",
  "B13-A4-PH-Job-Tracker",
  "payoo",
  "tea-house",
  "B13-A02-TechWave",
  "B13-A01-Knowledge-Vault",
];

const LANGUAGE_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  React: "#61dafb",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
};

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-4V8m10 9V8M7 8a5 5 0 0 0 5 5 5 5 0 0 0 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [languages, setLanguages] = useState(["All"]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        if (!res.ok) throw new Error("Failed to fetch repos");
        const data = await res.json();

        const filtered_data = data
          .filter((r) => FEATURED_REPOS.includes(r.name.trim()))
          .sort((a, b) => FEATURED_REPOS.indexOf(a.name) - FEATURED_REPOS.indexOf(b.name));

        setRepos(filtered_data);

        const langs = ["All", ...new Set(filtered_data.map((r) => r.language).filter(Boolean))];
        setLanguages(langs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const filtered = filter === "All" ? repos : repos.filter((r) => r.language === filter);

  return (
    // ✅ Same layout structure as services page
    <div className={`min-h-screen bg-[#060d1a] text-white ${inter.className}`}>

      {/* ✅ Fixed: proper arbitrary px values instead of w-100/w-75 */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-700/15 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      {/* ✅ Same wrapper as services: px-6 md:px-16 lg:px-28 py-24 + max-w-6xl mx-auto */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-28 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            GitHub Projects
          </span>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-white tracking-tight ${oxanium.className}`}>
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Projects
            </span>
          </h1>
          <p className="text-white/50 text-base mt-3 max-w-xl">
            Real-world projects pulled live from my GitHub — open source and production apps.
          </p>
        </motion.div>

        {/* Language Filter */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  filter === lang
                    ? "bg-blue-600 border-blue-600 text-white shadow-[0_0_16px_rgba(37,99,235,0.4)]"
                    : "bg-white/[0.04] border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {lang}
              </button>
            ))}
          </motion.div>
        )}

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 h-48 animate-pulse">
                <div className="h-4 bg-white/10 rounded-full w-2/3 mb-3" />
                <div className="h-3 bg-white/[0.07] rounded-full w-full mb-2" />
                <div className="h-3 bg-white/[0.07] rounded-full w-4/5" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-20">
            <p className="text-white/40 text-base">Could not load projects. Check your GitHub username.</p>
            <p className="text-white/25 text-sm mt-2 font-mono">{error}</p>
          </div>
        )}

        {/* Project Cards */}
        {!loading && !error && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filtered.map((repo) => (
              <motion.div
                key={repo.id}
                variants={cardVariants}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)]"
              >
                <div>
                  <h3 className="text-white font-bold text-base mb-2 capitalize group-hover:text-blue-300 transition-colors duration-200 pr-4 truncate">
                    {repo.name.replace(/-/g, " ")}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                    {repo.description || "No description provided."}
                  </p>
                  {repo.topics?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span key={topic} className="text-[11px] font-medium text-blue-300/70 bg-blue-500/[0.08] border border-blue-500/15 rounded-full px-2.5 py-0.5">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-white/40">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#888" }} />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <StarIcon />{repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <ForkIcon />{repo.forks_count}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-white/40 hover:text-white transition-colors duration-200 p-1.5 rounded-lg hover:bg-white/[0.06]"
                      title="View on GitHub">
                      <GithubIcon />
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 p-1.5 rounded-lg hover:bg-blue-500/[0.08]"
                        title="Live demo">
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40">No projects found for this filter.</p>
          </div>
        )}

        {/* GitHub CTA */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-14"
          >
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm font-semibold rounded-full px-7 py-3.5 transition-all duration-200"
            >
              <GithubIcon />
              View all on GitHub
            </a>
          </motion.div>
        )}

      </div>
    </div>
  );
}