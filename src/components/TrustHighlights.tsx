"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/site-data";

export default function TrustHighlights() {
  return (
    <section
      id="trust-strip"
      className="bg-[#0F0F0F] text-white border-y border-white/10 relative z-20 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {SITE_DATA.trustHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col justify-center ${index !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {item.value}
                </span>
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white/50 mt-1">
                {item.label}
              </h3>
              <p className="text-xs text-white/30 mt-1 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-white/25">
          <span>Official Jurisdiction: Judge&apos;s Court, Chittagong &amp; Bangladesh Legal System</span>
          <span className="italic">* Dedicated legal service across civil, criminal &amp; commercial domains</span>
        </div>
      </div>
    </section>
  );
}
