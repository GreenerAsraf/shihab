"use client";

import { useState } from "react";
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
    <section id="practice-areas" className="py-24 lg:py-32 bg-[#101B2C] text-white relative">
      {/* Background Decorative subtle lines */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#B89A62_1px,transparent_1px),linear-gradient(to_bottom,#B89A62_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#B89A62]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
              Fields of Legal Practice
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#F7F4ED]">
            Strategic Counsel Across Complex Legal Terrains
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Representing corporations, private clients, and institutions with rigorous attention to detail and trial-ready resolve. All practice areas are configurable to reflect real attorney capabilities.
          </p>
        </div>

        {/* Editorial Layout: Interactive Left Selector & In-Depth Right Focus Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Practice Area List (7 cols) */}
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
                        ? "bg-[#1A283E] border-[#B89A62] shadow-lg shadow-[#B89A62]/5"
                        : "bg-[#17191D]/60 border-white/5 hover:border-white/20 hover:bg-[#17191D]"
                    }`}
                  >
                    <div className="flex items-start space-x-5">
                      <div
                        className={`p-3 transition-colors ${
                          isSelected
                            ? "bg-[#B89A62] text-[#101B2C]"
                            : "bg-white/5 text-[#B89A62] group-hover:bg-[#B89A62]/20"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-[#B89A62]">
                          0{index + 1} • Practice Domain
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#D6BD8A] transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-xs text-neutral-400 line-clamp-2 max-w-xl">
                          {area.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="pl-4 shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                          isSelected
                            ? "border-[#B89A62] text-[#B89A62] translate-x-1"
                            : "border-white/10 text-neutral-500 group-hover:border-white/30 group-hover:text-white"
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

          {/* Right: Detailed Domain Card with Highlights (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#17191D] border border-[#B89A62]/30 p-8 sm:p-10 relative overflow-hidden shadow-2xl"
              >
                {/* Subtle top gold line accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89A62] via-[#D6BD8A] to-[#B89A62]" />

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
                      Featured Representation
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                      {selectedArea.title}
                    </h3>
                    <p className="text-xs text-[#D6BD8A] mt-1 font-medium">
                      {selectedArea.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {selectedArea.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">
                      Key Scope & Capabilities:
                    </span>
                    <ul className="space-y-2.5">
                      {selectedArea.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs text-neutral-300">
                          <Check className="w-4 h-4 text-[#B89A62] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-[#B89A62] hover:bg-[#D6BD8A] text-[#101B2C] text-xs uppercase tracking-widest font-semibold transition-colors"
                    >
                      <span>Inquire About {selectedArea.title.split(" ")[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-neutral-400">
                Additional specialized matters available upon discrete consultation.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
