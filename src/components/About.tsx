"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Gavel, ArrowUpRight } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#050505] text-white relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#111] shadow-2xl border border-white/10">
                <Image
                  src={SITE_DATA.attorney.libraryImage}
                  alt="Law library and legal research archives"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover grayscale filter contrast-[1.1] brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Overlapping secondary image */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-3/5 aspect-square overflow-hidden shadow-2xl border border-white/10 bg-[#111]">
                <Image
                  src={SITE_DATA.attorney.courtroomImage}
                  alt="Courthouse columns and judicial architecture"
                  fill
                  sizes="30vw"
                  className="object-cover grayscale filter brightness-70"
                />
              </div>

              {/* Badge */}
              <div className="absolute -top-5 -left-5 bg-[#0F0F0F] text-white p-3.5 shadow-xl border border-white/15 flex flex-col items-center justify-center text-center">
                <Gavel className="w-5 h-5 mb-1 text-white/60" />
                <span className="text-sm font-bold leading-tight">Judge&apos;s Court</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40">Chittagong</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-white/40" />
                <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
                  About the Lawyer
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Committed to Justice.{" "}
                <br />
                <span className="font-light text-white/50">Guided by Unwavering Integrity.</span>
              </h2>
            </div>

            {/* Philosophy Quote */}
            <div className="border-l-2 border-white/30 pl-6 py-2 bg-white/[0.03] italic text-lg text-white/70 leading-relaxed">
              &ldquo;{SITE_DATA.attorney.philosophy}&rdquo;
            </div>

            {/* Biography */}
            <div className="space-y-4 text-sm sm:text-base text-white/50 leading-relaxed font-light">
              {SITE_DATA.attorney.biography.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Education & Admissions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-white/60">
                  <GraduationCap className="w-4 h-4 text-white/40" />
                  <span>Academic &amp; Legal Training</span>
                </div>
                <div className="space-y-3 text-xs">
                  {SITE_DATA.attorney.qualifications.map((item, idx) => (
                    <div key={idx} className="pb-2.5 border-b border-white/10">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-white block text-xs sm:text-sm">
                          {item.degree}
                        </span>
                        {item.period && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/60 border border-white/15 font-medium whitespace-nowrap">
                            {item.period}
                          </span>
                        )}
                      </div>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 font-medium text-white/50 hover:text-white transition-colors mt-0.5"
                        >
                          <span>{item.institution}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="font-medium text-white/50 block mt-0.5">
                          {item.institution}
                        </span>
                      )}
                      <span className="text-white/35 block mt-1 leading-relaxed">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-white/40" />
                  <span>Court Standing &amp; Affiliations</span>
                </div>
                <ul className="space-y-2.5 text-xs text-white/40">
                  {SITE_DATA.attorney.admissions.map((adm, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                      <span>{adm}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-2 flex items-center space-x-6">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-white/70 transition-colors group"
              >
                <span>Discuss Your Legal Matter Directly</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/50" />
              </a>
              <span className="text-xs text-white/30 italic">
                Signature Counsel: {SITE_DATA.attorney.signatureText}
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
