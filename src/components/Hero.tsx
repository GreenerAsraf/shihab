"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Award, Landmark } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#101B2C] text-white pt-32 pb-20 lg:pt-36 lg:pb-28 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Architectural Watermark / Atmosphere */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#B89A62_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B89A62]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1A283E]/50 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
              {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#B89A62]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#B89A62] font-semibold">
                APPRENTICE LAWYER • JUDGE&apos;S COURT, CHITTAGONG
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight font-normal text-[#F7F4ED]">
              Clarity in Law. <br />
              <span className="italic font-light text-[#D6BD8A]">Confidence</span> in Every Decision.
            </h1>

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl font-light leading-relaxed">
              {SITE_DATA.attorney.bioShort} Partnering with individuals, business owners, and families through diligent litigation, legal drafting, and court representation.
            </p>

            {/* CTAs & Credentials highlight */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#B89A62] hover:bg-[#D6BD8A] text-[#101B2C] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 shadow-lg shadow-[#B89A62]/10"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#practice-areas"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-[#B89A62] text-white hover:text-[#B89A62] text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-200 bg-white/[0.02]"
              >
                Explore Practice Areas
              </a>
            </div>

            {/* Mini Trust Markers Under CTA */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-[#B89A62] shrink-0" />
                <div>
                  <span className="block text-xs font-semibold text-white">Court Practice</span>
                  <span className="block text-[11px] text-neutral-400">Judge&apos;s Court, Ctg</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Landmark className="w-5 h-5 text-[#B89A62] shrink-0" />
                <div>
                  <span className="block text-xs font-semibold text-white">LL.B. (Southern)</span>
                  <span className="block text-[11px] text-neutral-400">Bachelor of Laws</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-[#B89A62] shrink-0" />
                <div>
                  <span className="block text-xs font-semibold text-white">Govt. City College</span>
                  <span className="block text-[11px] text-neutral-400">Chittagong Alumnus</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cinematic Image Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant multi-layered photo frame with gold accent lines */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative borders */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#B89A62]/30 pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#B89A62] pointer-events-none hidden sm:block" />

              {/* Main Photograph Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#17191D] shadow-2xl border border-white/10">
                <Image
                  src={SITE_DATA.attorney.portraitImage}
                  alt={SITE_DATA.attorney.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center filter saturate-[0.92] contrast-[1.05] transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B2C] via-transparent to-transparent opacity-80" />

                {/* Floating caption card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#101B2C]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg text-white font-medium">{SITE_DATA.attorney.name}</p>
                      <p className="text-[11px] uppercase tracking-widest text-[#B89A62]">
                        {SITE_DATA.attorney.title}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[10px] uppercase tracking-wider text-neutral-400 bg-white/5 px-2.5 py-1 border border-white/10">
                        Chambers Practice
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note about photo placeholder for the client */}
              <div className="mt-3 text-right">
                <span className="text-[10px] tracking-wider text-neutral-400 italic">
                  * Chambers of Shihab Uddin • Judge&apos;s Court, Chittagong
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="relative mt-12 flex justify-center">
        <a
          href="#trust-strip"
          className="group flex flex-col items-center space-y-2 text-neutral-400 hover:text-[#B89A62] transition-colors focus:outline-none"
          aria-label="Scroll to details"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Explore Overview</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-[#B89A62]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
