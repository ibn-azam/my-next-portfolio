"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "../../../public/Logo-transparent.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects",  href: "#projects" },
  { label: "Services",  href: "#services" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Highlight active nav link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll handler
  function handleNavClick(e, href) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  const linkClass = (href) => {
    const id = href.replace("#", "");
    return activeSection === id
      ? "text-blue-400 font-semibold"
      : "text-white/55 hover:text-white/95";
  };

  return (
    <div className={`sticky top-0 z-50 flex flex-col items-center px-6 py-4 bg-gradient-to-b from-[#060d1a] to-transparent ${inter.className}`}>

      {/* Navbar Pill */}
      <nav className="relative flex items-center justify-between w-full max-w-[900px] bg-[#0a1223]/80 backdrop-blur-xl border border-white/[0.07] rounded-full px-6 pr-2.5 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
          <Image src={Logo} alt="Logo" width={44} height={44} />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-200 capitalize ${linkClass(link.href)}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden sm:block bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold rounded-full px-5 py-2.5 shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_28px_rgba(37,99,235,0.65)] hover:-translate-y-px active:translate-y-0 transition-all duration-200 whitespace-nowrap cursor-pointer"
        >
          Book a call
        </a>

        {/* Hamburger - Mobile */}
        <button
          className="sm:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-200 ${menuOpen ? "rotate-45 translate-x-[5px] translate-y-[7px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-200 ${menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden w-full max-w-[760px] mt-2 bg-[#0a1223] backdrop-blur-xl border border-white/[0.07] rounded-[20px] p-4 flex flex-col gap-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <ul className="flex flex-col gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-400 bg-blue-500/10 font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-2 bg-blue-600 text-white text-[13px] font-semibold rounded-full px-5 py-3 shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer text-center"
          >
            Book a call
          </a>
        </div>
      )}
    </div>
  );
}