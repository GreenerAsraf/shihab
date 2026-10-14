"use client";

import { motion } from "framer-motion";
import { FolderGit2, Info, ArrowUpRight } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#17191D] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Ethics Clarification */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#B89A62]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
                Representative Record
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F4ED]">
              Selected Matters & Advisory Experience
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Illustrating strategic approaches and problem-solving structures applied across complex commercial circumstances.
            </p>
          </div>

          {/* Ethics / Placeholder Notice */}
          <div className="bg-[#101B2C] border border-[#B89A62]/30 p-4 max-w-sm rounded-none">
            <div className="flex items-start space-x-2.5">
              <Info className="w-4 h-4 text-[#B89A62] shrink-0 mt-0.5" />
              <p className="text-[11px] text-neutral-300 leading-normal">
                <strong>Ethics Note:</strong> The matters below represent sample structural case illustrations. Real client representations maintain absolute anonymity pursuant to client privilege.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Matters Editorial Table/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.selectedMatters.map((matter, index) => (
            <motion.div
              key={matter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-[#101B2C] border border-white/10 p-8 flex flex-col justify-between hover:border-[#B89A62]/60 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#B89A62] bg-[#B89A62]/10 px-2.5 py-1 border border-[#B89A62]/20">
                    {matter.category}
                  </span>
                  <FolderGit2 className="w-4 h-4 text-neutral-500 group-hover:text-[#B89A62] transition-colors" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#D6BD8A] transition-colors">
                  {matter.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#B89A62]/80 font-medium">
                  {matter.role}
                </p>

                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {matter.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                <div className="text-[11px] text-neutral-400 bg-white/[0.02] p-3 border border-white/5">
                  <span className="font-semibold text-white block mb-0.5">Disposition / Framework:</span>
                  {matter.outcomeNote}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#B89A62] hover:text-white transition-colors pt-2 font-medium"
                >
                  <span>Request Specific Precedents</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Discretion statement */}
        <div className="mt-12 text-center text-xs text-neutral-400">
          Prior results do not guarantee a similar outcome. Individual cases turn strictly on their specific factual and statutory merits.
        </div>

      </div>
    </section>
  );
}
