"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Shield, Award } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

const stepIcons = [Compass, Shield, Award];

export default function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-[#050505] text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
              Legal Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Strategic Counsel.{" "}
            <br />
            <span className="font-light text-white/50">Thoughtful Representation.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/40 font-light leading-relaxed">
            Our engagement model is anchored on rigorous intellectual discipline, rapid responsiveness, and uncompromising fidelity to our clients&apos; core business and personal goals.
          </p>
        </div>

        {/* Three-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-12 right-12 h-[1px] bg-white/10 -z-0" />

          {SITE_DATA.approachSteps.map((step, index) => {
            const IconComponent = stepIcons[index] || Compass;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-[#111] p-8 sm:p-10 border border-white/10 shadow-md hover:shadow-xl hover:border-white/25 transition-all duration-300 z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-bold text-white/20">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-white/5 border border-white/15 flex items-center justify-center text-white">
                      <IconComponent className="w-5 h-5 text-white/50" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-medium block mb-4">
                    {step.lead}
                  </span>
                  <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center text-xs text-white/50 font-medium">
                  <span className="mr-2">Protocol Stage 0{index + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-white text-black flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-black">Absolute Confidentiality Under Attorney-Client Privilege</h4>
            <p className="text-xs text-black/60 font-light max-w-2xl">
              All initial discussions and preliminary case inquiries are held under strict legal ethics and confidentiality protocols.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 bg-black hover:bg-black/80 text-white text-xs uppercase tracking-widest font-bold transition-colors"
          >
            Initiate Inquiry
          </a>
        </div>

      </div>
    </section>
  );
}
