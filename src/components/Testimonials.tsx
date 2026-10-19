"use client";

import { motion } from "framer-motion";
import { Quote, AlertCircle } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#050505] text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
              Client Perspectives
            </span>
            <span className="w-8 h-[1px] bg-white/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Trusted by Leaders Through Critical Moments
          </h2>
          <p className="text-sm text-white/40 font-light leading-relaxed max-w-xl mx-auto">
            Reflecting our dedication to clarity, strategic foresight, and relentless client advocacy.
          </p>

          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 text-xs text-white/50">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Demonstration sample quotes. Easily replaced or toggled in site configuration.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#111] p-8 sm:p-10 border border-white/10 shadow-sm relative flex flex-col justify-between hover:border-white/25 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-white/15 mb-6" />
                <p className="text-lg sm:text-xl text-white/70 italic leading-relaxed font-light mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-semibold text-white uppercase tracking-wider">
                  {t.author}
                </p>
                <p className="text-[11px] text-white/35">
                  {t.title} • {t.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
