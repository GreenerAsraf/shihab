"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative py-24 lg:py-28 bg-[#101B2C] text-white overflow-hidden border-t border-[#B89A62]/30">
      {/* Background Architectural Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B89A62_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
      
      {/* Subtle gold center gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B89A62]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center space-x-3">
          <span className="w-8 h-[1px] bg-[#B89A62]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
            Confidential Consultation
          </span>
          <span className="w-8 h-[1px] bg-[#B89A62]" />
        </div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#F7F4ED]"
        >
          Every Legal Challenge Deserves <br />
          <span className="italic font-light text-[#D6BD8A]">A Thoughtful Approach.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          Start a discrete conversation about your legal needs and explore the appropriate next steps. Whether you require strategic advisory or courtroom representation, we are prepared.
        </p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 px-9 py-4 bg-[#B89A62] hover:bg-[#D6BD8A] text-[#101B2C] text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl shadow-[#B89A62]/20 hover:scale-[1.02]"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Three discrete trust pillars */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div className="flex items-center space-x-3">
            <Lock className="w-4 h-4 text-[#B89A62] shrink-0" />
            <span className="text-xs text-neutral-300">Protected by Privilege</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-4 h-4 text-[#B89A62] shrink-0" />
            <span className="text-xs text-neutral-300">Prompt 24h Response</span>
          </div>
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-4 h-4 text-[#B89A62] shrink-0" />
            <span className="text-xs text-neutral-300">Direct Partner Attention</span>
          </div>
        </div>

      </div>
    </section>
  );
}
