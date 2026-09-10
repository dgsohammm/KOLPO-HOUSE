'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProcessJourneyProps {
  mode?: 'think' | 'move';
}

interface ProcessStage {
  step: string;
  name: string;
  sub: string;
  objective: string;
  deliverables: string[];
  philosophy: string;
  image: string;
  color: string;
}

const processStages: ProcessStage[] = [
  {
    step: '01',
    name: 'DISCOVER',
    sub: 'IMMERSION & LISTENING',
    objective:
      'Uncovering the authentic character, operational strengths, and underlying truth of the business.',
    deliverables: [
      'Founder and leadership deep-interviews',
      'Historical brand and asset audit',
      'Audience qualitative sentiment mapping',
      'Competitor whitespace and cultural landscape review',
    ],
    philosophy:
      'You cannot prescribe medicine before accurate diagnosis. We listen with relentless curiosity.',
    image:
      'https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&q=85',
    color: '#DDD8EA', // Pale Lavender
  },
  {
    step: '02',
    name: 'DEFINE',
    sub: 'STRATEGY & ARCHITECTURE',
    objective:
      'Translating discovery insights into an ironclad positioning stance, distinct voice, and editorial roadmap.',
    deliverables: [
      'Core brand positioning narrative',
      'Verbal identity & tone-of-voice manual',
      'Strategic content pillars and thematic cadence',
      'Digital communication architecture',
    ],
    philosophy:
      'Strategy is deliberate sacrifice. Choosing what NOT to do is the essence of brand clarity.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    color: '#D5E2EA', // Soft Blue
  },
  {
    step: '03',
    name: 'CREATE',
    sub: 'CONCEPT & ART DIRECTION',
    objective:
      'Designing unmistakable visual identities, campaign worlds, and narrative content pieces.',
    deliverables: [
      'Visual identity system & typography guidance',
      'Campaign concepts and serialized storytelling',
      'Art direction guidelines & photo/video treatments',
      'Content templates & design systems',
    ],
    philosophy:
      'Craft makes strategy tangible. We create work that commands attention without screaming.',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=85',
    color: '#E9D6CC', // Soft Peach
  },
  {
    step: '04',
    name: 'EXECUTE',
    sub: 'ORCHESTRATION & LAUNCH',
    objective:
      'Bringing the creative world to life across all digital touchpoints with seamless craftsmanship.',
    deliverables: [
      'Multichannel campaign rollout and scheduling',
      'High-fidelity content production and publishing',
      'Brand touchpoint integration',
      'Stakeholder alignment and brand governance',
    ],
    philosophy:
      'Precision in the small moments builds enduring trust in the large ones.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    color: '#D8DFD5', // Pale Sage
  },
  {
    step: '05',
    name: 'OPTIMISE',
    sub: 'ANALYSIS & COMPOUND GROWTH',
    objective:
      'Refining creative resonance and strategic distribution to drive compounding commercial equity.',
    deliverables: [
      'Qualitative and quantitative resonance analysis',
      'Iterative content adjustments and hook evolution',
      'Audience community feedback synthesis',
      'Long-term brand value tracking',
    ],
    philosophy:
      'True brand building is never finished. It is an evolving cultural dialogue.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
    color: '#DDD4C7', // Warm Beige
  },
];

export default function ProcessJourney({}: ProcessJourneyProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
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

    const step = 1 / processStages.length;
    const rawIdx = Math.floor(latest / step);
    const clampedIdx = Math.min(processStages.length - 1, Math.max(0, rawIdx));
    if (clampedIdx !== currentStageIdx) {
      setCurrentStageIdx(clampedIdx);
    }
  });

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const stage = processStages[currentStageIdx];

  const scrollToStage = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (idx / processStages.length) * containerHeight + 20;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative h-[360vh] bg-[#F5F2EA] transition-colors duration-1000"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 3xl:px-20 py-10 md:py-14 3xl:py-20 overflow-hidden">
        <div className="tv-container w-full mx-auto flex flex-col justify-between h-full max-h-[860px] 2xl:max-h-[960px] 3xl:max-h-[1250px] 4xl:max-h-[1550px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#292A28]/15 shrink-0">
            <div>
              <div className="text-[10px] 3xl:text-xs tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
                <span>04 // SPATIAL METHODOLOGY</span>
              </div>
              <h2 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl 3xl:text-7xl text-[#292A28] leading-[0.98]">
                THE PROCESS JOURNEY
              </h2>
            </div>

            {/* Stage Counter & Controls */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#41413D]/70 block">
                  STAGE 0{currentStageIdx + 1} OF 0{processStages.length}
                </span>
                <span className="font-display-luxury text-base text-[#292A28] font-medium">
                  {stage.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToStage(Math.max(0, currentStageIdx - 1))}
                  disabled={currentStageIdx === 0}
                  className="w-9 h-9 rounded-full border border-[#292A28]/25 flex items-center justify-center text-[#292A28] disabled:opacity-25 hover:bg-[#EEE9DE] transition-colors cursor-pointer"
                  aria-label="Previous process stage"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToStage(Math.min(processStages.length - 1, currentStageIdx + 1))
                  }
                  disabled={currentStageIdx === processStages.length - 1}
                  className="w-9 h-9 rounded-full border border-[#292A28] bg-[#292A28] text-[#F5F2EA] flex items-center justify-center disabled:opacity-25 hover:bg-[#41413D] transition-colors cursor-pointer"
                  aria-label="Next process stage"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 5-Step Process Indicator Tabs */}
          <div className="py-4 shrink-0">
            <div className="grid grid-cols-5 gap-2 md:gap-3">
              {processStages.map((st, idx) => {
                const isActive = currentStageIdx === idx;
                return (
                  <button
                    key={st.step}
                    type="button"
                    onClick={() => scrollToStage(idx)}
                    className={`text-left p-2 sm:p-3 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isActive
                        ? 'border-[#292A28] bg-[#EEE9DE] shadow-xs'
                        : 'border-[#292A28]/10 bg-transparent hover:border-[#292A28]/30 hover:bg-[#EEE9DE]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] sm:text-xs text-[#41413D]/70 tracking-wider">
                        {st.step}
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />}
                    </div>
                    <div className="font-display-luxury text-xs sm:text-base md:text-lg text-[#292A28] font-medium tracking-wide truncate mt-0.5">
                      {st.name}
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeProcessBar"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#292A28]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Continuous Timeline Bar */}
            <div className="w-full h-1 bg-[#292A28]/10 rounded-full mt-3 overflow-hidden">
              <motion.div
                style={{ width: progressBarWidth }}
                className="h-full bg-[#292A28] rounded-full transition-all duration-75"
              />
            </div>
          </div>

          {/* Active Process Presentation (One-by-One Transitions) */}
          <div className="flex-1 flex flex-col justify-center min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.step}
                initial={{
                  opacity: 0,
                  y: scrollDirection === 'down' ? 35 : -35,
                  scale: 0.985,
                }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: scrollDirection === 'down' ? -35 : 35,
                  scale: 0.985,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 p-6 md:p-8 lg:p-10 rounded-3xl border border-[#292A28]/15 h-full max-h-[580px] overflow-hidden"
                style={{ backgroundColor: stage.color }}
              >
                {/* Left Description Column */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 overflow-y-auto pr-2 no-scrollbar">
                  <div>
                    <div className="inline-block text-[10px] tracking-[0.25em] font-mono text-[#292A28]/75 uppercase px-3 py-1 rounded-full bg-[#F5F2EA]/80 mb-3">
                      STAGE {stage.step} {'//'} {stage.sub}
                    </div>

                    <h3 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl text-[#292A28] leading-[1.05] tracking-tight mb-3">
                      {stage.name}
                    </h3>

                    <p className="font-serif-editorial text-base sm:text-xl text-[#292A28] italic leading-snug mb-3 font-normal">
                      &ldquo;{stage.philosophy}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-[#41413D] leading-relaxed max-w-xl font-light">
                      {stage.objective}
                    </p>
                  </div>

                  {/* Core Deliverables */}
                  <div className="pt-4 border-t border-[#292A28]/15">
                    <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-semibold mb-2.5">
                      KEY OUTPUTS & DELIVERABLES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stage.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs text-[#292A28]"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-[#292A28] mt-0.5 shrink-0" />
                          <span className="font-light tracking-wide">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
                  <div className="relative w-full h-full max-h-[460px] rounded-2xl overflow-hidden border border-[#292A28]/20 shadow-md">
                    <Image
                      src={stage.image}
                      alt={`KOLPO HOUSE ${stage.name}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292A28]/45 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#F5F2EA] flex items-center justify-between text-[9px] tracking-[0.2em] uppercase font-mono">
                      <span>PROCESS STAGE {stage.step}</span>
                      <span>KOLPO HOUSE METHOD</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Scroll Navigation Prompt */}
          <div className="pt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#41413D]/70 shrink-0">
            <span>SCROLL DOWN &darr; TO ADVANCE PROCESS</span>
            <span>SCROLL UP &uarr; TO REVERSE PROCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
