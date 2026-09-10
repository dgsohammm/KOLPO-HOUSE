'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ChaptersProps {
  mode?: 'think' | 'move';
}

interface Chapter {
  id: string;
  number: string;
  name: string;
  tagline: string;
  quote: string;
  description: string;
  capabilities: string[];
  image: string;
  accentBg: string;
  themeNote: string;
}

const chapters: Chapter[] = [
  {
    id: 'strategy',
    number: '01',
    name: 'STRATEGY',
    tagline: 'KNOW WHAT MATTERS.',
    quote: 'Before a brand speaks, it must know who it is speaking to and what it genuinely stands for.',
    description:
      'We deconstruct the brand landscape to identify authentic territory. Strategic rigor ensures creative output is not merely aesthetic ornamentation, but an enduring business asset.',
    capabilities: [
      'Brand positioning & market whitespace',
      'Brand communication & narrative architecture',
      'Brand language & lexicon formulation',
      'Tone of voice & behavioral guidelines',
      'Editorial storytelling frameworks',
      'Content pillars & thematic matrices',
      'Visual communication direction',
    ],
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#DDD8EA',
    themeNote: 'Atmosphere: Lavender & Warm Cream',
  },
  {
    id: 'creativity',
    number: '02',
    name: 'CREATIVITY',
    tagline: 'MAKE IT DISTINCTIVE.',
    quote: 'Distinctive craft creates an emotional moat that competitors cannot easily duplicate.',
    description:
      'We develop creative ideas that arrest the eye and linger in the mind. From overarching campaign concepts to artisanal typography and art direction, we cultivate unmistakable presence.',
    capabilities: [
      'Creative direction & brand aesthetics',
      'Concept development & world-building',
      'Multichannel campaign concepts',
      'Copywriting & editorial communication',
      'Art direction & visual curation',
      'Content production & craft execution',
    ],
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#E9D6CC',
    themeNote: 'Atmosphere: Soft Peach & Pale Sage',
  },
  {
    id: 'content',
    number: '03',
    name: 'CONTENT',
    tagline: 'GIVE THE BRAND A VOICE.',
    quote: 'Content is where strategic intent meets daily audience attention.',
    description:
      'Content is not filler; it is the living publication of your brand. We design repeatable editorial content systems that maintain high visual standards across every consumer touchpoint.',
    capabilities: [
      'Editorial content strategy & calendar design',
      'Social communication & digital storytelling',
      'Scalable content systems & stylebooks',
      'High-fidelity visual communication',
      'Campaign-specific serialized content',
      'Audience resonance & discourse design',
    ],
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#C8D9E3',
    themeNote: 'Atmosphere: Mist Blue & Pale Sage',
  },
  {
    id: 'growth',
    number: '04',
    name: 'GROWTH',
    tagline: 'MAKE ATTENTION GO SOMEWHERE.',
    quote: 'Attention without destination is vanity; disciplined growth converts interest into momentum.',
    description:
      'We connect storytelling to measurable commercial outcomes. Through strategic distribution, cultural partnerships, and audience insights, we make brand distinction compound.',
    capabilities: [
      'Digital campaigns & orchestrated launches',
      'Audience insight & qualitative behavioral mapping',
      'Competitor whitespace analysis',
      'Performance-led editorial content',
      'Strategic partnerships & brand collaborations',
      'Iterative communication optimisation',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#DDD4C7',
    themeNote: 'Atmosphere: Warm Beige & Soft Blue',
  },
];

export default function Chapters({}: ChaptersProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const prevProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track scroll direction and calculate active slide index
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const isDown = latest >= prevProgressRef.current;
    setScrollDirection(isDown ? 'down' : 'up');
    prevProgressRef.current = latest;

    const step = 1 / chapters.length;
    const rawIdx = Math.floor(latest / step);
    const clampedIdx = Math.min(chapters.length - 1, Math.max(0, rawIdx));
    if (clampedIdx !== activeChapterIndex) {
      setActiveChapterIndex(clampedIdx);
    }
  });

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const activeChapter = chapters[activeChapterIndex];

  // Helper to scroll to a specific chapter smoothly
  const scrollToChapter = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const containerHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (idx / chapters.length) * containerHeight + 20;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative h-[320vh] bg-[#F5F2EA] transition-colors duration-1000"
    >
      {/* Sticky Cinematic Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-4 md:px-8 lg:px-12 py-10 md:py-14 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-between h-full max-h-[880px]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#292A28]/15 shrink-0">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
                <span>02 // THE FOUR CHAPTERS</span>
              </div>
              <h2 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl text-[#292A28] leading-[0.98]">
                THE KOLPO HOUSE STORY
              </h2>
            </div>

            {/* Live Progress Indicator & Quick Controls */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[9px] tracking-[0.2em] font-mono uppercase text-[#41413D]/70">
                  SCROLL DRIVEN PROGRESSION
                </span>
                <span className="text-xs font-mono text-[#292A28] font-semibold">
                  CHAPTER 0{activeChapterIndex + 1} OF 0{chapters.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToChapter(Math.max(0, activeChapterIndex - 1))}
                  disabled={activeChapterIndex === 0}
                  className="w-9 h-9 rounded-full border border-[#292A28]/25 flex items-center justify-center text-[#292A28] disabled:opacity-25 hover:bg-[#EEE9DE] transition-colors cursor-pointer"
                  aria-label="Previous chapter"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToChapter(Math.min(chapters.length - 1, activeChapterIndex + 1))
                  }
                  disabled={activeChapterIndex === chapters.length - 1}
                  className="w-9 h-9 rounded-full border border-[#292A28] bg-[#292A28] text-[#F5F2EA] flex items-center justify-center disabled:opacity-25 hover:bg-[#41413D] transition-colors cursor-pointer"
                  aria-label="Next chapter"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Chapter Tabs / Progress Bar */}
          <div className="py-4 shrink-0">
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {chapters.map((chapter, idx) => {
                const isActive = activeChapterIndex === idx;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => scrollToChapter(idx)}
                    className={`text-left p-2.5 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isActive
                        ? 'border-[#292A28] bg-[#EEE9DE] shadow-xs'
                        : 'border-[#292A28]/10 bg-transparent hover:border-[#292A28]/30 hover:bg-[#EEE9DE]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] sm:text-xs text-[#41413D]/70 tracking-wider">
                        {chapter.number}
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />}
                    </div>
                    <div className="font-display-luxury text-sm sm:text-lg md:text-xl text-[#292A28] font-medium tracking-wide truncate mt-0.5">
                      {chapter.name}
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activeChapterBar"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#292A28]"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Continuous Scroll Timeline Bar */}
            <div className="w-full h-1 bg-[#292A28]/10 rounded-full mt-3 overflow-hidden">
              <motion.div
                style={{ width: progressBarWidth }}
                className="h-full bg-[#292A28] rounded-full transition-all duration-75"
              />
            </div>
          </div>

          {/* Active Chapter Visual Presentation (One-by-one automatic enter/exit) */}
          <div className="flex-1 flex flex-col justify-center min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
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
                style={{ backgroundColor: activeChapter.accentBg }}
              >
                {/* Left Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 overflow-y-auto pr-2 no-scrollbar">
                  <div>
                    <div className="inline-block text-[10px] tracking-[0.25em] font-mono text-[#292A28]/75 uppercase px-3 py-1 rounded-full bg-[#F5F2EA]/80 mb-3">
                      CHAPTER {activeChapter.number} {'//'} {activeChapter.name}
                    </div>

                    <h3 className="font-display-luxury text-2xl sm:text-4xl md:text-5xl text-[#292A28] leading-[1.05] tracking-tight mb-3">
                      {activeChapter.tagline}
                    </h3>

                    <p className="font-serif-editorial text-base sm:text-xl text-[#292A28] italic leading-snug mb-3 font-normal">
                      &ldquo;{activeChapter.quote}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-[#41413D] leading-relaxed max-w-xl font-light">
                      {activeChapter.description}
                    </p>
                  </div>

                  {/* Core Practices & Deliverables */}
                  <div className="pt-4 border-t border-[#292A28]/15">
                    <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-semibold mb-2.5">
                      CORE PRACTICES & DELIVERABLES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeChapter.capabilities.map((cap) => (
                        <div
                          key={`${activeChapter.id}-${cap}`}
                          className="flex items-start gap-2 text-xs text-[#292A28]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#292A28] mt-1 shrink-0" />
                          <span className="font-light tracking-wide">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
                  <div className="relative w-full h-full max-h-[460px] rounded-2xl overflow-hidden border border-[#292A28]/20 shadow-md">
                    <Image
                      src={activeChapter.image}
                      alt={`KOLPO HOUSE ${activeChapter.name}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292A28]/45 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-[#F5F2EA] flex items-center justify-between text-[9px] tracking-[0.2em] uppercase font-mono">
                      <span>DISPATCH {activeChapter.number}</span>
                      <span>KOLPO HOUSE ARCHIVE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Section Footer Scroll Hint */}
          <div className="pt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#41413D]/70 shrink-0">
            <span>SCROLL DOWN &darr; TO ADVANCE</span>
            <span>SCROLL UP &uarr; TO REVERSE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
