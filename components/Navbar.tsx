"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#music", label: "Music" },
  { href: "#about", label: "About" },
  { href: "#media", label: "Media" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["home", "music", "about", "media", "contact"];
      for (const id of sections.reverse()) {
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

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Animated Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3"
          aria-label="Tony Lenta - Go to top"
        >
          <div className="relative h-16 w-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-16 w-auto"
              aria-hidden="true"
            >
              <source src="/logo-animated.webm" type="video/webm" />
              <source src="/logo-animated.mp4" type="video/mp4" />
            </video>
          </div>
          <span className="hidden sm:block font-syne font-800 text-gold-300 tracking-[0.2em] uppercase text-sm">
            Tony Lenta
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`nav-link text-white/80 hover:text-gold-300 ${
                activeSection === link.href.replace("#", "") ? "active text-gold-300" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://open.spotify.com/artist/16lcPccJgIjtOWEwVMyA6Z"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-gold px-5 py-2 rounded-full text-xs font-syne tracking-widest"
          >
            <span>Stream Now</span>
          </a>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass-dark px-6 py-6 flex flex-col gap-5 mt-2 mx-4 rounded-xl">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="nav-link text-left text-white/80 hover:text-gold-300 text-sm"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://open.spotify.com/artist/16lcPccJgIjtOWEwVMyA6Z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-3 rounded-full text-xs font-syne tracking-widest text-center mt-2"
          >
            <span>Stream Now</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
