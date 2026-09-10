'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  mode?: 'think' | 'move';
  onExploreClick: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onExploreClick, onOpenContact }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Reversible scroll transformations: scroll DOWN shifts forward, scroll UP returns naturally
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-24 md:pt-32 pb-10 px-4 md:px-8 lg:px-12 overflow-hidden transition-colors duration-1000 ease-out bg-[#F5F2EA]"
    >
      {/* Background Soft Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [-20, 20, -20],
            y: [10, -15, 10],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl opacity-60 bg-[#E9D6CC]/75 transition-colors duration-1000"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.95, 1.1],
            x: [15, -25, 15],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-32 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full blur-3xl opacity-55 bg-[#DDD8EA]/70 transition-colors duration-1000"
        />
        <motion.div
          animate={{
            scale: [0.95, 1.05, 0.95],
            y: [-10, 15, -10],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/4 w-[650px] h-72 rounded-full blur-3xl opacity-45 bg-[#D5E2EA]/65 transition-colors duration-1000"
        />
      </div>

      {/* Top Editorial Metadata Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-4 pt-2 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#41413D]/70 font-sans border-b border-[#292A28]/10 pb-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#292A28]" />
          <span>INDEPENDENT CREATIVE & DIGITAL STUDIO</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>KOLKATA • 22.5726° N, 88.3639° E</span>
          <span className="opacity-40">/</span>
          <span>AUTONOMOUS PRACTICE</span>
        </div>
        <div className="flex items-center gap-2 text-[#292A28] font-mono font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
          <span>KOLKATA • EST. 2024</span>
        </div>
      </motion.div>

      {/* Main Hero Central Composition */}
      <div className="max-w-7xl w-full mx-auto py-8 md:py-12 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Big Editorial Typography with Staggered 7-Stage Reveal & Scroll Response */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="lg:col-span-8 flex flex-col justify-center"
        >
          <div>
            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292A28]/15 bg-[#EEE9DE]/60 backdrop-blur-xs text-[10px] tracking-[0.25em] uppercase text-[#41413D] mb-5"
            >
              <Sparkles className="w-3 h-3 text-[#292A28]" />
              <span>DIGITAL MARKETING & BRAND ARCHITECTURE</span>
            </motion.div>

            {/* STAGE 01, 02, 03: KOLPO -> HOUSE -> SETTLE */}
            <h1 className="font-display-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.92] text-[#292A28] tracking-[-0.02em] font-normal mb-6 flex flex-wrap items-baseline gap-x-4">
              <span className="inline-block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 1.05,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block tracking-[-0.01em]"
                >
                  KOLPO
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 1.05,
                    delay: 0.38,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block tracking-[0.02em] font-light"
                >
                  HOUSE
                </motion.span>
              </span>
            </h1>

            {/* STAGE 04, 05, 06, 07: Tagline 4-beat sequential entrance & scroll response */}
            <motion.div style={{ y: taglineY }} className="space-y-4 max-w-2xl">
              <div className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#292A28] leading-[1.18] font-normal flex flex-wrap items-center gap-x-2.5">
                {/* Stage 04: "WE BUILD */}
                <span className="inline-block overflow-hidden py-0.5">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    &ldquo;WE BUILD
                  </motion.span>
                </span>

                {/* Stage 05: BRANDS, */}
                <span className="inline-block overflow-hidden py-0.5">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block font-semibold"
                  >
                    BRANDS,
                  </motion.span>
                </span>

                {/* Stage 06: NOT JUST */}
                <span className="inline-block overflow-hidden py-0.5">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block italic font-light text-[#41413D]"
                  >
                    NOT JUST
                  </motion.span>
                </span>

                {/* Stage 07: CONTENT." */}
                <span className="inline-block overflow-hidden py-0.5">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.85,
                      delay: 1.0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block italic font-light text-[#41413D]"
                  >
                    CONTENT.&rdquo;
                  </motion.span>
                </span>
              </div>

              {/* Supporting Editorial Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-[#41413D] leading-relaxed max-w-xl font-light"
              >
                Strategy, creativity, content and growth &mdash; brought together. A
                hands-on creative and digital team in Kolkata crafting enduring brand distinction.
              </motion.p>
            </motion.div>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mt-8 pt-2"
          >
            <button
              type="button"
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-full bg-[#292A28] text-[#F5F2EA] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#41413D] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 group"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              type="button"
              id="hero-conversation-btn"
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-full border border-[#292A28]/30 bg-[#F5F2EA]/80 backdrop-blur-sm text-[#292A28] text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#292A28] hover:bg-[#EEE9DE] transition-all duration-300 cursor-pointer"
            >
              START A CONVERSATION
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Architectural Editorial Frame with Responsive Rotating Circle */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center relative">
          <motion.div
            style={{ scale: imageScale, y: imageY }}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-t-[100px] rounded-b-[18px] overflow-hidden border border-[#292A28]/15 shadow-[0_20px_50px_rgba(41,42,40,0.08)] bg-[#EEE9DE]"
          >
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
              alt="KOLPO HOUSE Creative Direction & Architecture"
              fill
              className="object-cover object-center transition-transform duration-1000 scale-105 saturate-105"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292A28]/60 via-transparent to-transparent" />

            {/* In-image editorial caption */}
            <div className="absolute bottom-4 left-4 right-4 text-[#F5F2EA]">
              <div className="text-[9px] tracking-[0.22em] uppercase opacity-80 mb-1">
                STUDIO DISPATCH // 01
              </div>
              <div className="font-serif-editorial text-lg leading-tight font-light">
                Strategy before execution. Distinction by design.
              </div>
            </div>
          </motion.div>

          {/* Natural Section Circular Element: Travels and rotates with the section scroll */}
          <motion.div
            style={{ y: circleY }}
            className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 md:-left-8 z-10"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center bg-[#F5F2EA]/92 backdrop-blur-md rounded-full border border-[#292A28]/20 shadow-lg">
              <motion.div
                style={{ rotate: circleRotate }}
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center p-1.5 pointer-events-none"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="text-[7.2px] tracking-[0.19em] uppercase fill-[#292A28] font-medium font-sans">
                    <textPath href="#circlePath" startOffset="0%">
                      KOLPO HOUSE • STRATEGY • CREATIVE • CONTENT •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#292A28]/40 flex items-center justify-center text-[9px] sm:text-[10px] font-display-luxury font-bold text-[#292A28]">
                KH
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker / Philosophy Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl w-full mx-auto pt-6 border-t border-[#292A28]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
      >
        <div className="flex items-center gap-6 text-[11px] tracking-[0.16em] uppercase text-[#41413D]/80">
          <span className="font-medium text-[#292A28]">THE NARRATIVE:</span>
          <span>WE THINK</span>
          <span className="text-[#292A28]/40">&rarr;</span>
          <span>WE CREATE</span>
          <span className="text-[#292A28]/40">&rarr;</span>
          <span>WE COMMUNICATE</span>
          <span className="text-[#292A28]/40">&rarr;</span>
          <span>WE GROW</span>
        </div>

        <button
          type="button"
          onClick={onExploreClick}
          className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#292A28] hover:text-[#41413D] transition-colors cursor-pointer group"
        >
          <span>SCROLL TO BEGIN JOURNEY</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
