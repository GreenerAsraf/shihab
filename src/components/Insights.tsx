"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-[#101B2C] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#B89A62]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
                Insights & Thought Leadership
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F4ED]">
              Legal Commentary & Analysis
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Timely perspectives on statutory shifts, regulatory developments, and commercial risk factors impacting modern leadership.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs text-neutral-400">
            <BookOpen className="w-4 h-4 text-[#B89A62]" />
            <span>Ready for CMS / Headless Blog Integration</span>
          </div>
        </div>

        {/* 3-Article Editorial Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-[#17191D] border border-white/10 group overflow-hidden flex flex-col justify-between hover:border-[#B89A62]/60 transition-colors"
            >
              <div>
                {/* Article Image with Zoom effect */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-800">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-105 brightness-95"
                  />
                  <div className="absolute top-4 left-4 bg-[#101B2C]/90 backdrop-blur-sm border border-[#B89A62]/30 px-3 py-1 text-[10px] uppercase tracking-widest text-[#D6BD8A]">
                    {article.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[11px] text-neutral-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#B89A62]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white group-hover:text-[#D6BD8A] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-3 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#B89A62] group-hover:text-white transition-colors font-medium"
                >
                  <span>Read Full Perspective</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
