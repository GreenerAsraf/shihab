"use client";

import { motion } from "framer-motion";
import { Quote, AlertCircle } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#F7F4ED] text-[#17191D] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="w-8 h-[1px] bg-[#B89A62]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
              Client Perspectives
            </span>
            <span className="w-8 h-[1px] bg-[#B89A62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101B2C]">
            Trusted by Leaders Through Critical Moments
          </h2>
          <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-xl mx-auto">
            Reflecting our dedication to clarity, strategic foresight, and relentless client advocacy.
          </p>

          {/* Development Placeholder Banner */}
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200/80 px-4 py-1.5 text-xs text-amber-800">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Demonstration sample quotes. Easily replaced or toggled in site configuration.</span>
          </div>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-8 sm:p-10 border border-neutral-200 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B89A62]/40 mb-6" />
                <p className="font-serif text-lg sm:text-xl text-[#101B2C] italic leading-relaxed font-light mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <p className="text-xs font-semibold text-[#101B2C] uppercase tracking-wider">
                  {t.author}
                </p>
                <p className="text-[11px] text-neutral-500">
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
