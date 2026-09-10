'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'motion/react';
import { ArrowRight, CircleDot } from 'lucide-react';

interface HowKolpoThinksProps {
  mode?: 'think' | 'move';
}

interface Pillar {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  question: string;
  deepDive: string;
  coordinates: string;
  accent: string;
}

const pillars: Pillar[] = [
  {
    id: 'who',
    step: '01',
    title: 'WHO',
    subtitle: 'THE BRAND AND ITS PEOPLE',
    question: 'Who are you when no marketing is speaking?',
    deepDive:
      'We excavate the genuine identity, convictions, internal culture, and idiosyncratic worldview of the founders and the enterprise. We uncover what makes you non-fungible before creating a public face.',
    coordinates: 'ORIGIN // 22° N',
    accent: '#DDD8EA', // Pale lavender
  },
  {
    id: 'why',
    step: '02',
    title: 'WHY',
    subtitle: 'PURPOSE AND BUSINESS GOALS',
    question: 'What commercial and cultural shifts must happen?',
    deepDive:
      'Brand building cannot exist in an artistic vacuum. We align marketing decisions with actual commercial mechanics: margin resilience, client acquisition quality, lifetime goodwill, and long-term brand equity.',
    coordinates: 'INTENT // 88° E',
    accent: '#D5E2EA', // Soft blue
  },
  {
    id: 'what',
    step: '03',
    title: 'WHAT',
    subtitle: 'THE AUDIENCE',
    question: 'Who needs what you alone can articulate?',
    deepDive:
      'We do not treat audiences as faceless demographic spreadsheets. We study their aesthetic sensitivities, emotional anxieties, discernment thresholds, and what causes them to grant deep, sustained trust.',
    coordinates: 'RESONANCE // 03',
    accent: '#D8DFD5', // Pale sage
  },
  {
    id: 'how',
    step: '04',
    title: 'HOW',
    subtitle: 'THE STORY WORTH TELLING',
    question: 'What is the most effective way to communicate it?',
    deepDive:
      'Now, and only now, execution begins. We choose tone, editorial formats, visual styling, cadence, and channels that make the brand impossible to ignore and delightful to follow.',
    coordinates: 'TRANSLATION // 04',
    accent: '#E9D6CC', // Soft peach
  },
];

export default function HowKolpoThinks({}: HowKolpoThinksProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const prevProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const isDown = latest >= prevProgressRef.current;
    setScrollDirection(isDown ? 'down' : 'up');
    prevProgressRef.current = latest;

    const step = 1 / pillars.length;
    const rawIdx = Math.floor(latest / step);
    const clampedIdx = Math.min(pillars.length - 1, Math.max(0, rawIdx));
    if (clampedIdx !== activePillarIndex) {
      setActivePillarIndex(clampedIdx);
    }
  });

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const activePillar = pillars[activePillarIndex];

  const scrollToPillar = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (idx / pillars.length) * containerHeight + 20;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative h-[320vh] bg-[#EEE9DE] transition-colors duration-1000 border-t border-b border-[#292A28]/10"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 py-10 md:py-14 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-between h-full max-h-[860px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#292A28]/15 shrink-0">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
                <span>03 // COGNITIVE ARCHITECTURE</span>
              </div>
              <h2 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl text-[#292A28] leading-[0.98]">
                STRATEGY BEFORE EXECUTION
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[#41413D]">
                STAGE 0{activePillarIndex + 1} OF 0{pillars.length}
              </span>
              <div className="w-28 h-1 bg-[#292A28]/15 rounded-full overflow-hidden">
                <motion.div style={{ width: progressBarWidth }} className="h-full bg-[#292A28]" />
              </div>
            </div>
          </div>

          {/* Main Visual System: 4 Connected Nodes & Active Detail Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch my-auto py-4">
            {/* Left Column: 4 Sequential Steps (Highlights on Scroll) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 relative">
              {/* Desktop Vertical Connecting Line */}
              <div className="hidden lg:block absolute left-7 top-8 bottom-8 w-[1px] bg-[#292A28]/20 z-0" />

              {pillars.map((pillar, index) => {
                const isSelected = pillar.id === activePillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => scrollToPillar(index)}
                    className={`relative z-10 w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-400 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#292A28] bg-[#F5F2EA] shadow-sm translate-x-1.5'
                        : 'border-[#292A28]/15 bg-[#EEE9DE]/60 hover:bg-[#F5F2EA]/60 hover:border-[#292A28]/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-colors duration-300 ${
                          isSelected
                            ? 'bg-[#292A28] text-[#F5F2EA]'
                            : 'bg-[#292A28]/10 text-[#292A28]'
                        }`}
                      >
                        {pillar.step}
                      </div>
                      <div>
                        <div className="font-display-luxury text-xl sm:text-2xl text-[#292A28] leading-none">
                          {pillar.title}
                        </div>
                        <div className="text-[9px] tracking-[0.2em] uppercase text-[#41413D]/70 font-sans mt-1">
                          {pillar.subtitle}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'translate-x-1 text-[#292A28]' : 'opacity-25'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Visual Reveal Panel (Smooth One-by-One Transitions) */}
            <div className="lg:col-span-7 flex flex-col min-h-[320px] lg:min-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.id}
                  initial={{
                    opacity: 0,
                    y: scrollDirection === 'down' ? 30 : -30,
                    scale: 0.985,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: scrollDirection === 'down' ? -30 : 30,
                    scale: 0.985,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#292A28]/15 flex flex-col justify-between"
                  style={{ backgroundColor: activePillar.accent }}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#292A28]/60 uppercase pb-4 border-b border-[#292A28]/15 mb-6">
                      <span>STEP {activePillar.step} OF 04</span>
                      <span>{activePillar.coordinates}</span>
                    </div>

                    <div className="text-xs tracking-[0.25em] uppercase text-[#41413D] font-mono mb-2">
                      {activePillar.subtitle}
                    </div>

                    <h3 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl text-[#292A28] leading-tight mb-5">
                      &ldquo;{activePillar.question}&rdquo;
                    </h3>

                    <p className="text-xs sm:text-base text-[#292A28] leading-relaxed font-light max-w-xl">
                      {activePillar.deepDive}
                    </p>
                  </div>

                  {/* Micro Status Diagram */}
                  <div className="pt-6 mt-6 border-t border-[#292A28]/15 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-[#41413D]">
                      <CircleDot className="w-3.5 h-3.5 text-[#292A28]" />
                      <span className="tracking-wide text-[11px]">
                        Discipline Status:{' '}
                        <span className="font-medium text-[#292A28] uppercase">
                          {activePillar.title} Synchronized
                        </span>
                      </span>
                    </div>

                    <div className="text-[9px] font-mono tracking-widest text-[#41413D]/60 uppercase">
                      KOLPO HOUSE METHOD
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Footer Navigation Hints */}
          <div className="pt-3 border-t border-[#292A28]/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#41413D]/70 shrink-0">
            <span>SCROLL DOWN &darr; TO ADVANCE TO NEXT STAGE</span>
            <span>SCROLL UP &uarr; TO RETURN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
