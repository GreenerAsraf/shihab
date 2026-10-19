"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Shield,
  Award,
  Landmark,
  Scale,
  Sparkles,
  Maximize2,
  Columns,
} from "lucide-react";
import { HERO_SLIDES } from "@/lib/hero-slides";

const SLIDE_DURATION = 6500; // 6.5 seconds per slide

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<"split" | "cinematic">("split");
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentSlide = HERO_SLIDES[currentIndex];

  const goToSlide = useCallback(
    (newIndex: number, newDirection: number = 1) => {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
      setProgress(0);
      startTimeRef.current = Date.now();
    },
    []
  );

  const nextSlide = useCallback(() => {
    const nextIdx = (currentIndex + 1) % HERO_SLIDES.length;
    goToSlide(nextIdx, 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIdx =
      (currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToSlide(prevIdx, -1);
  }, [currentIndex, goToSlide]);

  // Autoplay timer and progress tracker
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION;

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        nextSlide();
      }
    }, 50);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, isHovered, currentIndex, nextSlide, progress]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === " " && document.activeElement?.tagName !== "INPUT") {
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Synchronized animation variants
  const textVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 25 : -25,
      filter: "blur(6px)",
    }),
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -20 : 20,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const imageVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      scale: 1.06,
      x: dir > 0 ? 35 : -35,
      filter: "blur(8px)",
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.96,
      x: dir > 0 ? -30 : 30,
      filter: "blur(6px)",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="home"
      aria-label="Homepage Hero Carousel"
      className="relative min-h-screen bg-[#050505] text-white pt-32 pb-16 md:pt-36 lg:pt-40 lg:pb-24 flex flex-col justify-start overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Ambient Background reacting to current slide */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 scale-110 filter blur-[90px] saturate-150 transform-gpu"
          >
            <Image
              src={currentSlide.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle grid pattern & vignette overlays */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent lg:block hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Top Control Bar: Slide Counter, View Mode Toggle, and Play/Pause */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-2 text-white/70 font-mono tracking-widest uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Chambers Showcase</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-white/50">
              <span className="text-white font-semibold text-sm">
                {currentSlide.number}
              </span>{" "}
              / 0{HERO_SLIDES.length}
            </span>
            <span className="hidden sm:inline-block text-white/30 text-[11px] uppercase tracking-wider pl-2">
              • {currentSlide.shortLabel}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* View Mode Toggle: Split vs Cinematic */}
            <button
              onClick={() =>
                setViewMode((prev) => (prev === "split" ? "cinematic" : "split"))
              }
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all text-[11px]"
              title="Toggle View Presentation Mode"
            >
              {viewMode === "split" ? (
                <>
                  <Maximize2 className="w-3 h-3" />
                  <span className="hidden md:inline">Cinematic View</span>
                </>
              ) : (
                <>
                  <Columns className="w-3 h-3" />
                  <span className="hidden md:inline">Split View</span>
                </>
              )}
            </button>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              className="p-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
              title={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Prev / Next Buttons */}
            <div className="flex items-center space-x-1 pl-1">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="p-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="p-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Split Layout or Cinematic Overlay */}
        <div
          className={`grid items-center gap-10 lg:gap-14 ${
            viewMode === "split"
              ? "grid-cols-1 lg:grid-cols-12"
              : "grid-cols-1 lg:grid-cols-12 relative min-h-[580px]"
          }`}
        >
          {/* LEFT COLUMN: Synchronized Text & Information */}
          <div
            className={`space-y-6 ${
              viewMode === "split"
                ? "lg:col-span-7"
                : "lg:col-span-8 relative z-20 bg-[#050505]/85 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl border border-white/10 lg:border-none"
            }`}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Eyebrow badge */}
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-white to-white/20" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/70 font-semibold flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-white/50" />
                    {currentSlide.tag}
                  </span>
                </div>

                {/* Main Headline with Synchronized Typography */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.1rem] leading-[1.08] tracking-tight font-bold text-white">
                  <span>{currentSlide.titlePrefix} </span>
                  <br className="hidden sm:inline" />
                  <span className="bw-gradient-text">
                    {currentSlide.titleHighlight}
                  </span>{" "}
                  <span className="font-light text-white/60">
                    {currentSlide.titleSuffix}
                  </span>
                </h1>

                {/* Lead Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl font-light leading-relaxed">
                  {currentSlide.description}
                </p>

                {/* Practice Area Scope Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  <span className="uppercase tracking-wider font-medium text-[11px]">
                    Focus: {currentSlide.practiceCategory}
                  </span>
                </div>

                {/* Call To Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={currentSlide.primaryCta.href}
                    className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white hover:bg-white/90 text-black text-xs uppercase tracking-[0.18em] font-bold transition-all duration-200 shadow-2xl shadow-white/10 hover:shadow-white/25 active:scale-[0.98]"
                  >
                    <span>{currentSlide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={currentSlide.secondaryCta.href}
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white/50 text-white/80 hover:text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-200 bg-white/[0.02] hover:bg-white/5"
                  >
                    {currentSlide.secondaryCta.label}
                  </a>
                </div>

                {/* Dynamic 3-Metric Highlight Grid synchronizing with slide */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6">
                  {currentSlide.metrics.map((metric, idx) => (
                    <motion.div
                      key={metric.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                      className="space-y-1"
                    >
                      <div className="flex items-center space-x-1.5">
                        {idx === 0 && <Shield className="w-3.5 h-3.5 text-white/50 shrink-0" />}
                        {idx === 1 && <Landmark className="w-3.5 h-3.5 text-white/50 shrink-0" />}
                        {idx === 2 && <Award className="w-3.5 h-3.5 text-white/50 shrink-0" />}
                        <span className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">
                          {metric.value}
                        </span>
                      </div>
                      <span className="block text-[11px] font-medium text-white/60 uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <span className="block text-[10px] text-white/35 truncate">
                        {metric.sub}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Synchronized Picture & Frame */}
          <div
            className={`${
              viewMode === "split"
                ? "lg:col-span-5 relative"
                : "lg:col-span-12 absolute inset-0 z-10 pointer-events-none opacity-40 lg:opacity-70"
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative architectural frames */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-white/15 pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-3 -right-3 w-28 h-28 border-r-2 border-b-2 border-white/40 pointer-events-none hidden sm:block" />

              {/* Glowing accent backdrop behind portrait */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-none blur-xl opacity-50" />

              {/* Main Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#111] shadow-2xl border border-white/20 group">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide.id}
                    custom={direction}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover object-center filter contrast-[1.04] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Subtle gradient vignette to blend base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/25 to-transparent opacity-90" />
                  </motion.div>
                </AnimatePresence>

                {/* Slide Number Watermark */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-[#050505]/80 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-white/80">
                    SLIDE {currentSlide.number}
                  </span>
                </div>

                {/* Slide Category Pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#050505]/80 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-wider text-white font-medium">
                    <Scale className="w-3 h-3 text-white/70" />
                    <span>{currentSlide.badge}</span>
                  </span>
                </div>

                {/* Floating Glassmorphism Caption Card */}
                <div className="absolute bottom-5 left-5 right-5 z-20 p-4 sm:p-5 bg-[#050505]/90 backdrop-blur-md border border-white/15 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-center justify-between"
                    >
                      <div className="pr-3">
                        <p className="text-base sm:text-lg text-white font-semibold tracking-tight">
                          Shihab Uddin
                        </p>
                        <p className="text-[11px] uppercase tracking-wider text-white/60">
                          {currentSlide.caption}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block text-[10px] uppercase tracking-wider text-white/75 bg-white/10 px-2.5 py-1 border border-white/15">
                          {currentSlide.locationTag}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Sub-label footer below photo */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-white/40 italic">
                <span>Apprentice Lawyer • Judge&apos;s Court, Ctg</span>
                <span className="font-mono text-[10px]">Photo {currentSlide.number} / 05</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SLIDESHOW CONTROLLER & THUMBNAIL NAVIGATOR */}
        <div className="mt-12 lg:mt-16 pt-6 border-t border-white/10">
          {/* Thumbnail / Segmented Progress Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx, idx > currentIndex ? 1 : -1)}
                  className={`relative text-left p-2.5 sm:p-3 transition-all duration-300 border flex items-center gap-3 overflow-hidden group cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-white/40 shadow-lg shadow-white/5"
                      : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/5"
                  }`}
                  aria-label={`Jump to slide ${slide.number}: ${slide.shortLabel}`}
                >
                  {/* Miniature Image Thumbnail */}
                  <div className="relative w-9 h-11 sm:w-10 sm:h-12 shrink-0 overflow-hidden bg-black/60 border border-white/15">
                    <Image
                      src={slide.image}
                      alt={slide.shortLabel}
                      fill
                      sizes="48px"
                      className={`object-cover transition-transform duration-300 ${
                        isActive ? "scale-105" : "opacity-50 group-hover:opacity-90"
                      }`}
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-white/10" />
                    )}
                  </div>

                  {/* Active Slide Timer Progress Fill */}
                  {isActive && isPlaying && !isHovered && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none"
                      style={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  )}

                  <div className="relative z-10 flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span
                        className={`font-mono text-[10px] tracking-wider ${
                          isActive ? "text-white font-bold" : "text-white/40"
                        }`}
                      >
                        {slide.number}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm" />
                      )}
                    </div>
                    <span
                      className={`block text-xs tracking-tight truncate ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/70 font-normal"
                      }`}
                    >
                      {slide.shortLabel}
                    </span>
                    <span className="block text-[10px] text-white/30 truncate mt-0.5">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Top indicator bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] transition-colors ${
                      isActive ? "bg-white" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Downward Scroll indicator */}
      <div className="relative mt-8 flex justify-center">
        <a
          href="#trust-strip"
          className="group flex flex-col items-center space-y-1.5 text-white/30 hover:text-white/70 transition-colors focus:outline-none"
          aria-label="Scroll to details"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Explore Overview
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
