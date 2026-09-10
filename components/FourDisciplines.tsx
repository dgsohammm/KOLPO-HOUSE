'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'motion/react';
import { Compass, Layers, Users, TrendingUp, ArrowLeft, ArrowRight } from 'lucide-react';

interface FourDisciplinesProps {
  mode?: 'think' | 'move';
}

interface Discipline {
  id: string;
  code: string;
  name: string;
  icon: any;
  mandate: string;
  focus: string[];
  synergy: string;
  bg: string;
}

const disciplines: Discipline[] = [
  {
    id: 'creative-strategy',
    code: '01',
    name: 'CREATIVE & STRATEGY',
    icon: Compass,
    mandate:
      'Guiding intellectual rigor, brand world-building, high-level messaging, art direction, and conceptual storytelling.',
    focus: [
      'Brand positioning & verbal identity architecture',
      'Art direction & visual communication frameworks',
      'Campaign concept ideation & narrative pacing',
      'Editorial copywriting & cultural resonance',
    ],
    synergy: 'Injects conceptual clarity into every deliverable before production starts.',
    bg: '#DDD8EA', // Pale Lavender
  },
  {
    id: 'operations-delivery',
    code: '02',
    name: 'OPERATIONS & DELIVERY',
    icon: Layers,
    mandate:
      'Ensuring absolute precision, seamless timelines, uncompromised quality assurance, and frictionless execution.',
    focus: [
      'Production pipeline management & resource orchestration',
      'Creative asset QA & typographic scrutiny',
      'Cross-channel publishing schedules',
      'Digital infrastructure & deployment agility',
    ],
    synergy: 'Translates high-concept creative ideas into impeccably delivered reality.',
    bg: '#D5E2EA', // Soft Blue
  },
  {
    id: 'biz-dev-client',
    code: '03',
    name: 'BUSINESS DEVELOPMENT & CLIENT RELATIONS',
    icon: Users,
    mandate:
      'Cultivating deep, consultative partnerships with client leadership based on mutual trust and transparent dialogue.',
    focus: [
      'Strategic onboarding & ambition alignment',
      'Long-term client advisory & executive communication',
      'Stakeholder immersion workshops',
      'Cultural partnership sourcing & influencer curation',
    ],
    synergy: 'Protects the brand’s highest business priorities across every interaction.',
    bg: '#E9D6CC', // Soft Peach
  },
  {
    id: 'business-finance',
    code: '04',
    name: 'BUSINESS & FINANCE',
    icon: TrendingUp,
    mandate:
      'Aligning creative investments with commercial discipline, capital efficiency, and measurable enterprise value.',
    focus: [
      'Campaign budgeting & commercial viability analysis',
      'Commercial contract governance & transparency',
      'Resource efficiency & ROI stewardship',
      'Sustainable scaling models for brand expansion',
    ],
    synergy: 'Ensures creative audacity is backed by bulletproof commercial logic.',
    bg: '#D8DFD5', // Pale Sage
  },
];

export default function FourDisciplines({}: FourDisciplinesProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0);
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

    const step = 1 / disciplines.length;
    const rawIdx = Math.floor(latest / step);
    const clampedIdx = Math.min(disciplines.length - 1, Math.max(0, rawIdx));
    if (clampedIdx !== activeDisciplineIndex) {
      setActiveDisciplineIndex(clampedIdx);
    }
  });

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const activeDiscipline = disciplines[activeDisciplineIndex];
  const IconComponent = activeDiscipline.icon;

  const scrollToDiscipline = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (idx / disciplines.length) * containerHeight + 20;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="disciplines"
      className="relative h-[320vh] bg-[#F5F2EA] transition-colors duration-1000"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 py-10 md:py-14 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-between h-full max-h-[860px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#292A28]/15 shrink-0">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
                <span>08 // INTERNAL ECOSYSTEM</span>
              </div>
              <h2 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl text-[#292A28] leading-[0.98]">
                FOUR DISCIPLINES. ONE TEAM.
              </h2>
            </div>

            {/* Quick Controllers */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs text-[#41413D]">
                DISCIPLINE 0{activeDisciplineIndex + 1} / 0{disciplines.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToDiscipline(Math.max(0, activeDisciplineIndex - 1))}
                  disabled={activeDisciplineIndex === 0}
                  className="w-9 h-9 rounded-full border border-[#292A28]/25 flex items-center justify-center text-[#292A28] disabled:opacity-25 hover:bg-[#EEE9DE] transition-colors cursor-pointer"
                  aria-label="Previous discipline"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToDiscipline(Math.min(disciplines.length - 1, activeDisciplineIndex + 1))
                  }
                  disabled={activeDisciplineIndex === disciplines.length - 1}
                  className="w-9 h-9 rounded-full border border-[#292A28] bg-[#292A28] text-[#F5F2EA] flex items-center justify-center disabled:opacity-25 hover:bg-[#41413D] transition-colors cursor-pointer"
                  aria-label="Next discipline"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Disciplines Selector Tabs */}
          <div className="py-4 shrink-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
              {disciplines.map((d, idx) => {
                const isSelected = activeDisciplineIndex === idx;
                const ItemIcon = d.icon;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => scrollToDiscipline(idx)}
                    className={`text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#292A28] bg-[#EEE9DE] shadow-xs'
                        : 'border-[#292A28]/10 bg-[#F5F2EA] hover:bg-[#EEE9DE]/50 hover:border-[#292A28]/25'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[10px] text-[#41413D]/70 tracking-wider">
                        {d.code} {'//'}
                      </span>
                      <div className="font-display-luxury text-sm sm:text-base text-[#292A28] font-medium tracking-wide truncate mt-0.5">
                        {d.name}
                      </div>
                    </div>
                    <ItemIcon className="w-4 h-4 text-[#292A28] shrink-0 ml-2" />
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

          {/* Active Discipline Reveal Panel */}
          <div className="flex-1 flex flex-col justify-center min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscipline.id}
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
                style={{ backgroundColor: activeDiscipline.bg }}
              >
                {/* Left Discipline Metadata */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 overflow-y-auto pr-2 no-scrollbar">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#292A28]/70 uppercase pb-2 border-b border-[#292A28]/15 mb-3">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>DISCIPLINE {activeDiscipline.code}</span>
                      <span>&bull;</span>
                      <span>COLLABORATIVE CORE</span>
                    </div>

                    <h3 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl text-[#292A28] leading-tight mb-3">
                      {activeDiscipline.name}
                    </h3>

                    <p className="font-serif-editorial text-base sm:text-xl text-[#292A28] italic leading-snug mb-3">
                      {activeDiscipline.mandate}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#F5F2EA]/80 border border-[#292A28]/10 text-xs sm:text-sm text-[#41413D] leading-relaxed">
                      <span className="font-mono text-[10px] uppercase font-semibold text-[#292A28] block mb-1">
                        TEAM SYNERGY:
                      </span>
                      {activeDiscipline.synergy}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="pt-3 border-t border-[#292A28]/15">
                    <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-semibold mb-2">
                      AREAS OF FOCUS & OVERSIGHT:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeDiscipline.focus.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs text-[#292A28]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#292A28] mt-1 shrink-0" />
                          <span className="font-light tracking-wide">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Aesthetic Pillar Graphic */}
                <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
                  <div className="w-full h-full max-h-[460px] rounded-2xl bg-[#F5F2EA]/75 border border-[#292A28]/15 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs font-mono text-[#41413D]/70">
                      <span>INTERNAL PILLAR // {activeDiscipline.code}</span>
                      <IconComponent className="w-5 h-5 text-[#292A28]" />
                    </div>

                    <div className="text-center py-8">
                      <div className="w-20 h-20 rounded-full border border-dashed border-[#292A28]/35 flex items-center justify-center mx-auto mb-4 bg-[#EEE9DE]/60">
                        <IconComponent className="w-8 h-8 text-[#292A28]" />
                      </div>
                      <div className="font-display-luxury text-xl text-[#292A28] font-medium">
                        {activeDiscipline.name}
                      </div>
                      <div className="text-[11px] text-[#41413D]/80 font-light mt-1 max-w-xs mx-auto">
                        Operating in continuous unison across Kolkata studio operations.
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#292A28]/10 flex items-center justify-between text-[10px] font-mono uppercase text-[#41413D]/70">
                      <span>KOLPO HOUSE</span>
                      <span>ONE STUDIO // ONE VISION</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Section Footer Scroll Cue */}
          <div className="pt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#41413D]/70 shrink-0">
            <span>SCROLL DOWN &darr; TO ADVANCE DISCIPLINE</span>
            <span>SCROLL UP &uarr; TO REVERSE DISCIPLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
