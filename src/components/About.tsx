"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Gavel, ArrowUpRight } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F7F4ED] text-[#17191D] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Composition with Multiple Editorial Photographs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main Primary Image: Law Library / Research Setting */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200 shadow-2xl border-4 border-white">
                <Image
                  src={SITE_DATA.attorney.libraryImage}
                  alt="Law library and legal research archives"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-[#101B2C]/10 mix-blend-multiply" />
              </div>

              {/* Overlapping Secondary Image: Elegant Courthouse Architecture */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-3/5 aspect-square overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
                <Image
                  src={SITE_DATA.attorney.courtroomImage}
                  alt="Courthouse columns and judicial architecture"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>

              {/* Decorative Gold Accent Badge */}
              <div className="absolute -top-5 -left-5 bg-[#101B2C] text-[#D6BD8A] p-3.5 shadow-xl border border-[#B89A62]/30 flex flex-col items-center justify-center text-center">
                <Gavel className="w-5 h-5 mb-1 text-[#B89A62]" />
                <span className="font-serif text-sm font-bold leading-tight">Judge&apos;s Court</span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-300">Chittagong</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography & Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-[#B89A62]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
                  About the Lawyer
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101B2C] leading-tight">
                Committed to Justice. <br />
                <span className="italic font-light">Guided by Unwavering Integrity.</span>
              </h2>
            </div>

            {/* Philosophy Pull Quote */}
            <div className="border-l-2 border-[#B89A62] pl-6 py-2 bg-[#EFECE3]/50 italic font-serif text-lg text-[#101B2C]/90 leading-relaxed">
              &ldquo;{SITE_DATA.attorney.philosophy}&rdquo;
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              {SITE_DATA.attorney.biography.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Education & Court Admissions Accordion / Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-300">
              
              {/* Education & Legal Training */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#101B2C]">
                  <GraduationCap className="w-4 h-4 text-[#B89A62]" />
                  <span>Academic & Legal Training</span>
                </div>
                <div className="space-y-3 text-xs">
                  {SITE_DATA.attorney.qualifications.map((item, idx) => (
                    <div key={idx} className="pb-2.5 border-b border-neutral-200/60">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-neutral-900 block text-xs sm:text-sm">
                          {item.degree}
                        </span>
                        {item.period && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#B89A62]/10 text-[#8C6D37] border border-[#B89A62]/30 font-medium whitespace-nowrap">
                            {item.period}
                          </span>
                        )}
                      </div>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 font-medium text-[#8C6D37] hover:text-[#101B2C] transition-colors mt-0.5"
                        >
                          <span>{item.institution}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#B89A62]" />
                        </a>
                      ) : (
                        <span className="font-medium text-[#8C6D37] block mt-0.5">
                          {item.institution}
                        </span>
                      )}
                      <span className="text-neutral-600 block mt-1 leading-relaxed">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admissions */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#101B2C]">
                  <CheckCircle2 className="w-4 h-4 text-[#B89A62]" />
                  <span>Court Standing & Affiliations</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-600">
                  {SITE_DATA.attorney.admissions.map((adm, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62] mt-1.5 shrink-0" />
                      <span>{adm}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* CTA Link */}
            <div className="pt-2 flex items-center space-x-6">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#101B2C] hover:text-[#B89A62] transition-colors group"
              >
                <span>Discuss Your Legal Matter Directly</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B89A62]" />
              </a>
              <span className="text-xs text-neutral-500 font-serif italic">
                Signature Counsel: {SITE_DATA.attorney.signatureText}
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
