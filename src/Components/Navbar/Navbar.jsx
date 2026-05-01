"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../../../public/Logo-transparent.png"
import { Playwrite_DE_SAS } from "next/font/google";
import { Inter } from "next/font/google";

const playwrite = Playwrite_DE_SAS({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});


const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const links = <>
  <li className=""><Link className={pathName === "/" ? "text-blue-700 font-bold" : ""} href="/">Home</Link></li>
  <li><Link className={pathName === "/projects" ? "text-blue-700 font-bold" : ""} href="/projects">Projects</Link></li>
  <li><Link className={pathName === "/services" ? "text-blue-700 font-bold" : ""} href="/services">Services</Link></li>
  <li><Link className={pathName === "/contact" ? "text-blue-700 font-bold" : ""} href="/contact">Contact</Link></li>
</>

  return (
    <div className="flex flex-col items-center px-6 py-5 bg-[#060d1a] ">
      {/* Navbar Pill */}
      <nav className="relative flex items-center justify-between w-full max-w-190 bg-[#0a1223]/85 backdrop-blur-xl border border-white/[0.07] rounded-full px-6 pr-2.5 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

        {/* Brand */}
        {/* <span className={`text-white text-[16px] font-bold tracking-[0.18em] uppercase select-none whitespace-nowrap ${playwrite.className}`}>
          Farhan
        </span> */}
        <Link href="/">
  <Image  src={Logo} alt="Logo" width={44} height={44} />
</Link>

        {/* Desktop Nav Links */}
        <ul className={`hidden sm:flex items-center gap-4 list-none ${inter.className}`}>
         {links}
           
        </ul>

        {/* CTA Button - Desktop */}
        <Link href="/contact" className={`hidden sm:block bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-semibold rounded-full px-5.5 py-2.75 shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_28px_rgba(37,99,235,0.65)] hover:-translate-y-px active:translate-y-0 transition-all duration-200 whitespace-nowrap cursor-pointer ${inter.className}`}>
          Book a call
        </Link>

        {/* Hamburger - Mobile */}
        <button
          className="sm:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-x-[5px] translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white/70 rounded-sm transition-all duration-200 ${
              menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden w-full max-w-[760px] mt-2 bg-[#0a1223] backdrop-blur-xl border border-white/[0.07] rounded-[20px] p-4 flex flex-col gap-1 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <ul className={`flex flex-col gap-3 list-none ${inter.className}`}>
         {links}
           
        </ul>
          <Link href="/contact" className={`mt-2 bg-blue-600 text-white text-[13px] font-semibold rounded-full px-5 py-3 shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer ${inter.className}`}>
            Book a call
          </Link>
        </div>
      )}
    </div>
  );
}