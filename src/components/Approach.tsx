"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Shield, Award } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

const stepIcons = [Compass, Shield, Award];

export default function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-[#F7F4ED] text-[#17191D] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#B89A62]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
              Legal Methodology
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#101B2C]">
            Strategic Counsel. <br />
            <span className="italic font-light">Thoughtful Representation.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Our engagement model is anchored on rigorous intellectual discipline, rapid responsiveness, and uncompromising fidelity to our clients&apos; core business and personal goals.
          </p>
        </div>

        {/* Three-Stage Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle connecting decorative horizontal rule for desktop */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-[1px] bg-[#B89A62]/30 -z-0" />

          {SITE_DATA.approachSteps.map((step, index) => {
            const IconComponent = stepIcons[index] || Compass;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-white p-8 sm:p-10 border border-neutral-200/80 shadow-md hover:shadow-xl transition-shadow duration-300 z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-4xl font-light text-[#B89A62]">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-[#F7F4ED] border border-[#B89A62]/30 flex items-center justify-center text-[#101B2C]">
                      <IconComponent className="w-5 h-5 text-[#B89A62]" />
                    </div>
                  </div>

                  {/* Stage Headline */}
                  <h3 className="font-serif text-2xl font-normal text-[#101B2C] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[#B89A62] font-semibold block mb-4">
                    {step.lead}
                  </span>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center text-xs text-[#101B2C] font-medium">
                  <span className="mr-2">Protocol Stage 0{index + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89A62]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#101B2C] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#B89A62]/30">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl text-[#F7F4ED]">Absolute Confidentiality Under Attorney-Client Privilege</h4>
            <p className="text-xs text-neutral-400 font-light max-w-2xl">
              All initial discussions and preliminary case inquiries are held under strict legal ethics and confidentiality protocols.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 bg-[#B89A62] hover:bg-[#D6BD8A] text-[#101B2C] text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            Initiate Inquiry
          </a>
        </div>

      </div>
    </section>
  );
}
