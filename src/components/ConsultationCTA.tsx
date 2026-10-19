"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative py-24 lg:py-28 bg-white text-black overflow-hidden border-t border-black/10">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,0,0,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">

        {/* Eyebrow */}
        <div className="inline-flex items-center justify-center space-x-3">
          <span className="w-8 h-[1px] bg-black/30" />
          <span className="text-xs uppercase tracking-[0.25em] text-black/50 font-medium">
            Confidential Consultation
          </span>
          <span className="w-8 h-[1px] bg-black/30" />
        </div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black"
        >
          Every Legal Challenge Deserves{" "}
          <br />
          <span className="font-light text-black/50">A Thoughtful Approach.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base text-black/60 font-light max-w-2xl mx-auto leading-relaxed">
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
            className="inline-flex items-center space-x-3 px-9 py-4 bg-black hover:bg-black/85 text-white text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl hover:scale-[1.02]"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Trust pillars */}
        <div className="pt-8 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div className="flex items-center space-x-3">
            <Lock className="w-4 h-4 text-black/40 shrink-0" />
            <span className="text-xs text-black/60">Protected by Privilege</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="w-4 h-4 text-black/40 shrink-0" />
            <span className="text-xs text-black/60">Prompt 24h Response</span>
          </div>
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-4 h-4 text-black/40 shrink-0" />
            <span className="text-xs text-black/60">Direct Partner Attention</span>
          </div>
        </div>

      </div>
    </section>
  );
}
