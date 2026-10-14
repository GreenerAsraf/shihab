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
  { name: "Approach", href: "#approach" },
  { name: "Experience", href: "#experience" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#101B2C]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Attorney Brand */}
          <Link
            href="#home"
            className="group flex items-center space-x-3 text-left focus:outline-none"
            aria-label="Shihab Uddin - Home"
          >
            <div className="w-10 h-10 border border-[#B89A62]/40 bg-[#101B2C] flex items-center justify-center transition-colors group-hover:border-[#B89A62]">
              <Scale className="w-5 h-5 text-[#B89A62]" />
            </div>
            <div>
              <span className="block font-serif text-xl tracking-wider text-white font-medium group-hover:text-[#B89A62] transition-colors">
                {SITE_DATA.attorney.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#B89A62]">
                {SITE_DATA.attorney.credentials} • {SITE_DATA.attorney.firmName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-neutral-300 hover:text-[#B89A62] transition-colors font-medium py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B89A62] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={`tel:${SITE_DATA.contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center space-x-2 text-xs text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89A62]" />
              <span className="tracking-wider">{SITE_DATA.contactInfo.phone}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#B89A62] text-[#101B2C] hover:bg-[#D6BD8A] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B89A62] focus:ring-offset-2 focus:ring-offset-[#101B2C]"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-200 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#B89A62]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#101B2C]/98 backdrop-blur-xl pt-28 px-8 pb-12 flex flex-col justify-between lg:hidden border-b border-[#B89A62]/20"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B89A62] border-b border-white/10 pb-3">
                Navigation Menu
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-neutral-100 hover:text-[#B89A62] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B89A62]/60" />
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="text-xs text-neutral-400">
                <span className="block font-medium text-white mb-1">Direct Inquiries:</span>
                <p>{SITE_DATA.contactInfo.phone}</p>
                <p>{SITE_DATA.contactInfo.email}</p>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 text-xs uppercase tracking-widest font-semibold bg-[#B89A62] text-[#101B2C] hover:bg-[#D6BD8A] transition-colors"
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
