"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Scale,
  FileText,
  Building2,
  ShieldCheck,
  Landmark,
  ArrowRight,
  ChevronRight,
  Check,
} from "lucide-react";
import { SITE_DATA, PracticeArea } from "@/lib/site-data";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Scale,
  FileText,
  Building2,
  ShieldCheck,
  Landmark,
};

export default function PracticeAreas() {
  const [selectedArea, setSelectedArea] = useState<PracticeArea>(SITE_DATA.practiceAreas[0]);

  return (
    <section id="practice-areas" className="py-24 lg:py-32 bg-[#0d1624] text-white relative overflow-hidden">
      {/* Background Image: pic3.jpeg with balanced semi-transparent overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/picture/pic3.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.08] brightness-[0.50] saturate-[0.95]"
        />
        {/* Semi-transparent dark overlay: keeps picture clearly visible while protecting text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1624]/92 via-[#0d1624]/80 to-[#0d1624]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1624] via-transparent to-[#0d1624]/70" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
              Fields of Legal Practice
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Strategic Counsel Across Complex Legal Terrains
          </h2>
          <p className="text-sm sm:text-base text-white/40 font-light leading-relaxed">
            Representing corporations, private clients, and institutions with rigorous attention to detail and trial-ready resolve.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left List */}
          <div className="lg:col-span-7 space-y-3">
            {SITE_DATA.practiceAreas.map((area, index) => {
              const IconComponent = iconMap[area.iconName] || Scale;
              const isSelected = selectedArea.id === area.id;

              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <button
                    onClick={() => setSelectedArea(area)}
                    className={`w-full text-left p-6 transition-all duration-300 border flex items-center justify-between group ${
                      isSelected
                        ? "bg-white/10 border-white/40 shadow-lg shadow-white/5"
                        : "bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-start space-x-5">
                      <div
                        className={`p-3 transition-colors ${
                          isSelected
                            ? "bg-white text-black"
                            : "bg-white/5 text-white/50 group-hover:bg-white/10"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-white/30">
                          0{index + 1} • Practice Domain
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-semibold transition-colors ${isSelected ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                          {area.title}
                        </h3>
                        <p className="text-xs text-white/35 line-clamp-2 max-w-xl">
                          {area.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="pl-4 shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                          isSelected
                            ? "border-white/50 text-white translate-x-1"
                            : "border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white/60"
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right Detail Card */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#111] border border-white/15 p-8 sm:p-10 relative overflow-hidden shadow-2xl"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium">
                      Featured Representation
                    </span>
                    <h3 className="text-2xl sm:text-3xl text-white font-semibold mt-1">
                      {selectedArea.title}
                    </h3>
                    <p className="text-xs text-white/50 mt-1 font-medium">
                      {selectedArea.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {selectedArea.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <span className="text-xs uppercase tracking-wider text-white/30 block font-medium">
                      Key Scope &amp; Capabilities:
                    </span>
                    <ul className="space-y-2.5">
                      {selectedArea.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs text-white/50">
                          <Check className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-white hover:bg-white/90 text-black text-xs uppercase tracking-widest font-bold transition-colors"
                    >
                      <span>Inquire About {selectedArea.title.split(" ")[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-white/25">
                Additional specialized matters available upon discrete consultation.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
