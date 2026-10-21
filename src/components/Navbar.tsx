"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Scale } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Practice Areas", href: "#practice-areas" },
  // { name: "Approach", href: "#approach" },
  { name: "Experience", href: "#experience" },
  // { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-center space-x-3 text-left focus:outline-none"
            aria-label="Shihab Uddin - Home"
          >
            <div className="w-10 h-10 border border-white/20 bg-white/5 flex items-center justify-center transition-colors group-hover:border-white/50">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="block text-xl tracking-wider text-white font-semibold group-hover:text-white/80 transition-colors">
                {SITE_DATA.attorney.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">
                {SITE_DATA.attorney.credentials} • {SITE_DATA.attorney.firmName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors font-medium py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* <a
              href={`tel:${SITE_DATA.contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center space-x-2 text-xs text-white/50 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-white/40" />
              <span className="tracking-wider">{SITE_DATA.contactInfo.phone}</span>
            </a> */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-white text-black hover:bg-white/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/60 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-xl pt-28 px-8 pb-12 flex flex-col justify-between lg:hidden border-b border-white/10"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 border-b border-white/10 pb-3">
                Navigation Menu
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white/80 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/30" />
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="text-xs text-white/40">
                <span className="block font-medium text-white mb-1">Direct Inquiries:</span>
                <p>{SITE_DATA.contactInfo.phone}</p>
                <p>{SITE_DATA.contactInfo.email}</p>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-white/90 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
