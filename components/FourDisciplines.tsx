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
  tabName: string;
  shortName: string;
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
    tabName: 'CREATIVE & STRATEGY',
    shortName: 'CREATIVE',
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
    tabName: 'OPERATIONS & DELIVERY',
    shortName: 'OPERATIONS',
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
    tabName: 'BUSINESS & CLIENTS',
    shortName: 'BIZ DEV',
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
    tabName: 'BUSINESS & FINANCE',
    shortName: 'FINANCE',
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
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-3 sm:px-6 md:px-8 lg:px-12 3xl:px-20 py-4 sm:py-6 md:py-10 3xl:py-16 overflow-hidden">
        <div className="tv-container w-full mx-auto flex flex-col justify-between h-full max-h-[860px] 2xl:max-h-[960px] 3xl:max-h-[1250px] 4xl:max-h-[1550px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-5 border-b border-[#292A28]/15 shrink-0">
            <div>
              <div className="text-[9px] sm:text-[10px] 3xl:text-xs tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
                <span>08 // INTERNAL ECOSYSTEM</span>
              </div>
              <h2 className="font-display-luxury text-xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl text-[#292A28] leading-[0.98]">
                FOUR DISCIPLINES. ONE TEAM.
              </h2>
            </div>

            {/* Quick Controllers */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <span className="font-mono text-[11px] sm:text-xs 3xl:text-sm text-[#41413D]">
                DISCIPLINE 0{activeDisciplineIndex + 1} / 0{disciplines.length}
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => scrollToDiscipline(Math.max(0, activeDisciplineIndex - 1))}
                  disabled={activeDisciplineIndex === 0}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 3xl:w-11 3xl:h-11 rounded-full border border-[#292A28]/25 flex items-center justify-center text-[#292A28] disabled:opacity-25 hover:bg-[#EEE9DE] transition-colors cursor-pointer"
                  aria-label="Previous discipline"
                >
                  <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 3xl:w-4 3xl:h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToDiscipline(Math.min(disciplines.length - 1, activeDisciplineIndex + 1))
                  }
                  disabled={activeDisciplineIndex === disciplines.length - 1}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 3xl:w-11 3xl:h-11 rounded-full border border-[#292A28] bg-[#292A28] text-[#F5F2EA] flex items-center justify-center disabled:opacity-25 hover:bg-[#41413D] transition-colors cursor-pointer"
                  aria-label="Next discipline"
                >
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 3xl:w-4 3xl:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Disciplines Selector Tabs */}
          <div className="py-2 sm:py-3 md:py-4 shrink-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2.5 md:gap-3">
              {disciplines.map((d, idx) => {
                const isSelected = activeDisciplineIndex === idx;
                const ItemIcon = d.icon;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => scrollToDiscipline(idx)}
                    className={`text-left p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden relative group min-h-[58px] sm:min-h-[72px] md:min-h-[82px] 3xl:min-h-[105px] ${
                      isSelected
                        ? 'border-[#292A28] bg-[#EEE9DE] shadow-xs ring-1 ring-[#292A28]/20'
                        : 'border-[#292A28]/15 bg-[#F5F2EA] hover:bg-[#EEE9DE]/60 hover:border-[#292A28]/30'
                    }`}
                  >
                    {/* Top Row: Code and Icon cleanly separated at opposite corners */}
                    <div className="flex items-center justify-between w-full mb-0.5 sm:mb-1">
                      <span className="font-mono text-[8.5px] sm:text-[9.5px] md:text-[10px] 3xl:text-xs text-[#41413D]/70 tracking-wider">
                        {d.code} {'//'}
                      </span>
                      <ItemIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 3xl:w-5 3xl:h-5 text-[#292A28] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Bottom Row: Dynamic Typography that never overflows */}
                    <div className="w-full min-w-0">
                      <div className="font-display-luxury text-[11px] xs:text-xs sm:text-sm lg:text-base 3xl:text-xl text-[#292A28] font-medium tracking-wide leading-[1.15] break-words line-clamp-2">
                        <span className="hidden xs:inline">{d.tabName}</span>
                        <span className="xs:hidden">{d.shortName}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Continuous Timeline Bar */}
            <div className="w-full h-1 bg-[#292A28]/10 rounded-full mt-2 sm:mt-3 overflow-hidden">
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-8 lg:p-10 3xl:p-14 rounded-2xl sm:rounded-3xl border border-[#292A28]/15 h-full max-h-[460px] sm:max-h-[540px] md:max-h-[580px] 3xl:max-h-[800px] overflow-hidden shadow-xs"
                style={{ backgroundColor: activeDiscipline.bg }}
              >
                {/* Left Discipline Metadata */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-4 overflow-y-auto pr-1 sm:pr-2 no-scrollbar">
                  <div>
                    <div className="flex items-center gap-2 text-[9px] sm:text-[10px] 3xl:text-xs font-mono tracking-[0.25em] text-[#292A28]/70 uppercase pb-1.5 sm:pb-2 border-b border-[#292A28]/15 mb-2 sm:mb-3">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>DISCIPLINE {activeDiscipline.code}</span>
                      <span>&bull;</span>
                      <span>COLLABORATIVE CORE</span>
                    </div>

                    <h3 className="font-display-luxury text-xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl text-[#292A28] leading-tight mb-2 sm:mb-3">
                      {activeDiscipline.name}
                    </h3>

                    <p className="font-serif-editorial text-xs sm:text-base md:text-lg lg:text-xl 3xl:text-2xl text-[#292A28] italic leading-snug mb-2 sm:mb-3 line-clamp-3 sm:line-clamp-none">
                      {activeDiscipline.mandate}
                    </p>

                    <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#F5F2EA]/80 border border-[#292A28]/10 text-[11px] sm:text-xs md:text-sm 3xl:text-base text-[#41413D] leading-relaxed">
                      <span className="font-mono text-[9px] sm:text-[10px] 3xl:text-xs uppercase font-semibold text-[#292A28] block mb-0.5 sm:mb-1">
                        TEAM SYNERGY:
                      </span>
                      {activeDiscipline.synergy}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="pt-2.5 sm:pt-3 border-t border-[#292A28]/15">
                    <div className="text-[9px] sm:text-[10px] 3xl:text-xs font-mono tracking-[0.2em] uppercase text-[#292A28] font-semibold mb-1.5 sm:mb-2">
                      AREAS OF FOCUS & OVERSIGHT:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {activeDiscipline.focus.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs 3xl:text-sm text-[#292A28]"
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
                  <div className="w-full h-full max-h-[460px] 3xl:max-h-[600px] rounded-2xl bg-[#F5F2EA]/75 border border-[#292A28]/15 p-6 sm:p-8 3xl:p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs 3xl:text-sm font-mono text-[#41413D]/70">
                      <span>INTERNAL PILLAR // {activeDiscipline.code}</span>
                      <IconComponent className="w-5 h-5 3xl:w-6 3xl:h-6 text-[#292A28]" />
                    </div>

                    <div className="text-center py-6 sm:py-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 3xl:w-28 3xl:h-28 rounded-full border border-dashed border-[#292A28]/35 flex items-center justify-center mx-auto mb-4 bg-[#EEE9DE]/60">
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 3xl:w-12 3xl:h-12 text-[#292A28]" />
                      </div>
                      <div className="font-display-luxury text-lg sm:text-xl 3xl:text-2xl text-[#292A28] font-medium">
                        {activeDiscipline.name}
                      </div>
                      <div className="text-[11px] 3xl:text-xs text-[#41413D]/80 font-light mt-1 max-w-xs mx-auto">
                        Operating in continuous unison across Kolkata studio operations.
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#292A28]/10 flex items-center justify-between text-[10px] 3xl:text-xs font-mono uppercase text-[#41413D]/70">
                      <span>KOLPO HOUSE</span>
                      <span>ONE STUDIO // ONE VISION</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Section Footer Scroll Cue */}
          <div className="pt-2 sm:pt-3 flex items-center justify-between text-[9px] sm:text-[10px] 3xl:text-xs font-mono uppercase tracking-[0.2em] text-[#41413D]/70 shrink-0">
            <span>SCROLL DOWN &darr; TO ADVANCE DISCIPLINE</span>
            <span>SCROLL UP &uarr; TO REVERSE DISCIPLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
