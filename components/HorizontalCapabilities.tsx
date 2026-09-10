'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HorizontalCapabilitiesProps {
  mode?: 'think' | 'move';
}

interface World {
  id: string;
  title: string;
  essence: string;
  narrative: string;
  capabilities: string[];
  image: string;
  bg: string;
}

const worlds: World[] = [
  {
    id: 'world-brand',
    
    title: 'BRAND',
    essence: 'Identity & Foundational Architecture',
    narrative:
      'We forge brand identities that withstand ephemeral trends. From competitive positioning to internal lexicons, we build the core soul of the enterprise.',
    capabilities: [
      'Market & Competitive Positioning',
      'Verbal Identity & Nomenclature',
      'Tone of Voice Systems',
      'Core Brand Narrative & Manifesto',
      'Visual Expression & Brand Guidelines',
    ],
    image:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=85',
    bg: '#DDD8EA', // Pale Lavender
  },
  {
    id: 'world-digital',
    
    title: 'DIGITAL',
    essence: 'Immersive Touchpoints & Spatial Presence',
    narrative:
      'Digital presence is not merely having an address online; it is an orchestrated world where every scroll, frame, and micro-interaction telegraphs quality.',
    capabilities: [
      'Digital Brand Presence & Web Architecture',
      'Art Direction for Interactive Media',
      'Editorial Digital Storytelling',
      'Omnichannel Social Communication',
      'Digital Experience Strategy',
    ],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    bg: '#D5E2EA', // Soft Blue
  },
  {
    id: 'world-creative',

    title: 'CREATIVE',
    essence: 'Editorial Direction & Provocative Distinction',
    narrative:
      'Where commerce meets culture. We compose memorable campaigns, art direct editorial imagery, and craft stories that capture human imagination.',
    capabilities: [
      'Creative Direction & Concept Development',
      'Serialized Content Production',
      'Campaign Storyboards & Copywriting',
      'Still & Motion Art Direction',
      'Custom Editorial Publications',
    ],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    bg: '#E9D6CC', // Soft Peach
  },
  {
    id: 'world-growth',

    title: 'GROWTH',
    essence: 'Audience Cultivation & Strategic Momentum',
    narrative:
      'Making attention convert into compound goodwill, customer loyalty, and sustainable enterprise valuation. Strategy meeting measurable growth.',
    capabilities: [
      'Targeted Digital Launches',
      'Audience Behavioral Insights',
      'Performance-Led Editorial Content',
      'Strategic Partnerships & Collabs',
      'Continuous Optimisation Loops',
    ],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    bg: '#D8DFD5', // Pale Sage
  },
];

export default function HorizontalCapabilities({}: HorizontalCapabilitiesProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeWorld, setActiveWorld] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Vertical scroll directly drives horizontal continuous movement
  // (Translating across 4 worlds from 0% to -75%)
  const xTranslate = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const step = 1 / worlds.length;
    const idx = Math.min(worlds.length - 1, Math.max(0, Math.floor(latest / step)));
    setActiveWorld(idx);
  });

  const scrollToWorld = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (idx / worlds.length) * containerHeight + 20;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative h-[350vh] bg-[#EEE9DE] transition-colors duration-1000 border-t border-b border-[#292A28]/10"
    >
      {/* Sticky Cinematic Viewport: Vertical Scroll Drives Continuous Horizontal Exploration */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 3xl:px-20 py-6 md:py-10 3xl:py-16 overflow-hidden">
        <div className="tv-container w-full mx-auto flex flex-col justify-between h-full max-h-[880px] 2xl:max-h-[980px] 3xl:max-h-[1250px] 4xl:max-h-[1550px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#292A28]/15 shrink-0">
            <div>
              <div className="text-[10px] 3xl:text-xs tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
                <span>05 // HORIZONTAL EXPLORATION</span>
              </div>
              <h2 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl 3xl:text-7xl text-[#292A28] leading-[0.98]">
                FOUR VISUAL WORLDS
              </h2>
            </div>

            {/* Quick Controllers & Navigation */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block text-right pr-2">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#41413D]/70 block">
                  VERTICAL SCROLL DRIVES HORIZONTAL WORLD
                </span>
                <span className="font-mono text-xs text-[#292A28] font-semibold">
                  WORLD 0{activeWorld + 1} / 0{worlds.length} &bull; {worlds[activeWorld].title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToWorld(Math.max(0, activeWorld - 1))}
                  disabled={activeWorld === 0}
                  className="w-9 h-9 rounded-full border border-[#292A28]/25 flex items-center justify-center text-[#292A28] disabled:opacity-25 hover:bg-[#F5F2EA] transition-colors cursor-pointer"
                  aria-label="Previous visual world"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToWorld(Math.min(worlds.length - 1, activeWorld + 1))}
                  disabled={activeWorld === worlds.length - 1}
                  className="w-9 h-9 rounded-full border border-[#292A28] bg-[#292A28] text-[#F5F2EA] flex items-center justify-center disabled:opacity-25 hover:bg-[#41413D] transition-colors cursor-pointer"
                  aria-label="Next visual world"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* World Nav Tabs & Timeline */}
          <div className="py-2.5 shrink-0">
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {worlds.map((w, idx) => {
                const isActive = activeWorld === idx;
                return (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => scrollToWorld(idx)}
                    className={`text-left p-2 sm:p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-[#292A28] bg-[#F5F2EA] shadow-xs'
                        : 'border-[#292A28]/10 bg-transparent hover:border-[#292A28]/30 hover:bg-[#F5F2EA]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#41413D]/70">
                      <span>0{idx + 1}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />}
                    </div>
                    <div className="font-display-luxury text-sm sm:text-base text-[#292A28] font-medium truncate mt-0.5">
                      {w.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Continuous Timeline Bar */}
            <div className="w-full h-1 bg-[#292A28]/10 rounded-full mt-2.5 overflow-hidden">
              <motion.div
                style={{ width: progressBarWidth }}
                className="h-full bg-[#292A28] rounded-full transition-all duration-75"
              />
            </div>
          </div>

          {/* Horizontal Exploration Canvas Track */}
          <div className="flex-1 overflow-hidden my-auto py-2">
            <motion.div
              style={{ x: xTranslate }}
              className="flex gap-6 md:gap-8 h-full w-[400%] transition-transform duration-75 ease-out"
            >
              {worlds.map((w, index) => {
                const isFocused = activeWorld === index;
                return (
                  <div
                    key={w.id}
                    className={`w-[100%] max-w-full rounded-3xl border border-[#292A28]/15 p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch justify-between transition-all duration-500 ${
                      isFocused ? 'scale-100 shadow-md' : 'scale-[0.985] opacity-80'
                    }`}
                    style={{ backgroundColor: w.bg }}
                  >
                    {/* Left World Metadata */}
                    <div className="lg:w-1/2 flex flex-col justify-between space-y-4 overflow-y-auto pr-2 no-scrollbar">
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#292A28]/70 uppercase pb-2 border-b border-[#292A28]/15 mb-3">
                          <span>WORLD // 0{index + 1}</span>
                          <span>ATMOSPHERIC DOMAIN</span>
                        </div>

                        <h3 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28] leading-tight mb-2">
                          {w.title}
                        </h3>

                        <p className="font-serif-editorial text-lg sm:text-xl text-[#292A28] italic leading-snug mb-3">
                          {w.essence}
                        </p>

                        <p className="text-xs sm:text-sm text-[#41413D] leading-relaxed max-w-lg font-light">
                          {w.narrative}
                        </p>
                      </div>

                      {/* Capabilities */}
                      <div className="pt-3 border-t border-[#292A28]/15">
                        <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-semibold mb-2">
                          PRACTICE DELIVERABLES:
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#292A28]">
                          {w.capabilities.map((cap) => (
                            <li key={cap} className="flex items-center gap-2 font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#292A28] shrink-0" />
                              <span className="truncate">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right World Visual Image */}
                    <div className="lg:w-1/2 relative min-h-[220px] rounded-2xl overflow-hidden border border-[#292A28]/20 shadow-md">
                      <Image
                        src={w.image}
                        alt={`KOLPO HOUSE ${w.title}`}
                        fill
                        className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#292A28]/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-[#F5F2EA] flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase">
                        <span>SPATIAL CAPABILITY // 0{index + 1}</span>
                        <span>{w.title} DOMAIN</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Section Footer Scroll Cue */}
          <div className="pt-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#41413D]/70 shrink-0">
            <span>SCROLL DOWN &darr; TO GLIDE EAST</span>
            <span>SCROLL UP &uarr; TO GLIDE WEST</span>
          </div>
        </div>
      </div>
    </section>
  );
}
