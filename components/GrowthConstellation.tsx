'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Compass } from 'lucide-react';

interface GrowthConstellationProps {
  mode: 'think' | 'move';
}

interface SystemNode {
  id: string;
  name: string;
  angle: number; // in degrees for radial distribution
  category: string;
  role: string;
  connection: string;
  bg: string;
}

const systemNodes: SystemNode[] = [
  {
    id: 'node-brand',
    name: 'BRAND',
    angle: 0,
    category: 'FOUNDATION',
    role: 'The sovereign identity, philosophical point of view, and enduring reputation.',
    connection: 'Directly informs communication tone, campaign audacity, and audience trust.',
    bg: '#DDD8EA',
  },
  {
    id: 'node-audience',
    name: 'AUDIENCE',
    angle: 40,
    category: 'RESONANCE',
    role: 'The discerning individuals whose respect and loyalty the brand cultivates.',
    connection: 'Receives strategic content and provides qualitative feedback loops.',
    bg: '#D5E2EA',
  },
  {
    id: 'node-content',
    name: 'CONTENT',
    angle: 80,
    category: 'EXPRESSION',
    role: 'The editorial publishing machine expressing values, ideas, and stories.',
    connection: 'Bridges internal strategy with public daily attention.',
    bg: '#E9D6CC',
  },
  {
    id: 'node-digital',
    name: 'DIGITAL',
    angle: 120,
    category: 'TOUCHPOINTS',
    role: 'The digital architecture and interactive environment where conversions happen.',
    connection: 'Hosts campaigns and captures qualified community interest.',
    bg: '#D8DFD5',
  },
  {
    id: 'node-campaigns',
    name: 'CAMPAIGNS',
    angle: 160,
    category: 'MOMENTUM',
    role: 'Episodic bursts of cultural attention around launches and key milestones.',
    connection: 'Amplifies content across broader cultural spheres.',
    bg: '#DDD4C7',
  },
  {
    id: 'node-partnerships',
    name: 'PARTNERSHIPS',
    angle: 200,
    category: 'ALIGNMENT',
    role: 'Collaborations with complementary cultural figures and institutional allies.',
    connection: 'Expands credibility through mutual affinity.',
    bg: '#DDD8EA',
  },
  {
    id: 'node-communication',
    name: 'COMMUNICATION',
    angle: 240,
    category: 'DIALOGUE',
    role: 'The nuanced cadence, copywriting, and clarity of ongoing discourse.',
    connection: 'Preserves tone-of-voice across customer service and press.',
    bg: '#D5E2EA',
  },
  {
    id: 'node-optimisation',
    name: 'OPTIMISATION',
    angle: 280,
    category: 'REFINEMENT',
    role: 'The empirical analysis and continuous improvement of messaging performance.',
    connection: 'Informs strategic iteration and creative refinement.',
    bg: '#E9D6CC',
  },
  {
    id: 'node-growth',
    name: 'GROWTH',
    angle: 320,
    category: 'OUTCOME',
    role: 'Compounding brand equity, margin strength, and commercial momentum.',
    connection: 'Re-invests in further creative and strategic excellence.',
    bg: '#D8DFD5',
  },
];

export default function GrowthConstellation({ mode }: GrowthConstellationProps) {
  const [activeNodeId, setActiveNodeId] = useState<string>('node-brand');
  const activeNode = systemNodes.find((n) => n.id === activeNodeId) || systemNodes[0];

  const stageRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState<number>(360);

  useEffect(() => {
    if (!stageRef.current) return;
    const updateSize = () => {
      if (stageRef.current) {
        setStageWidth(stageRef.current.clientWidth);
      }
    };
    updateSize();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setStageWidth(entry.contentRect.width);
        }
      }
    });

    ro.observe(stageRef.current);
    window.addEventListener('resize', updateSize, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  // Responsive device categorization
  const isMobile = stageWidth < 460;
  const isTablet = stageWidth >= 460 && stageWidth < 768;
  const is4K = stageWidth >= 1200;

  // Compute safe dynamic radius:
  // Farthest edge of labels ("PARTNERSHIPS", "COMMUNICATION") must fit within stageWidth/2 with safe margin
  const maxLabelHalfWidth = isMobile ? 42 : isTablet ? 50 : 62;
  const safeEdgePadding = isMobile ? 8 : 16;
  const maxSafeRadius = (stageWidth / 2) - maxLabelHalfWidth - safeEdgePadding;

  const radius = Math.max(
    Math.min(maxSafeRadius, is4K ? 240 : isTablet ? 170 : 185),
    isMobile ? 88 : 120
  );

  // Nucleus sizing proportional to constellation radius
  const nucleusSize = isMobile ? 74 : isTablet ? 94 : is4K ? 154 : 124;

  return (
    <section
      id="growth-system"
      className="py-20 md:py-32 3xl:py-44 px-3 sm:px-6 md:px-8 lg:px-12 bg-[#EEE9DE] transition-colors duration-1000 border-t border-b border-[#292A28]/10 overflow-hidden"
    >
      <div className="tv-container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 md:pb-10 border-b border-[#292A28]/15 mb-8 md:mb-12">
          <div>
            <div className="text-[10px] 3xl:text-xs tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
              <span>10 // THE CONNECTIVE CONSTELLATION</span>
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl 3xl:text-7xl text-[#292A28] leading-[0.98]">
              THE GROWTH SYSTEM
            </h2>
          </div>
          <div className="max-w-md 3xl:max-w-xl text-xs sm:text-sm 3xl:text-base text-[#41413D] leading-relaxed font-light">
            Brand growth is an organic ecosystem, not an assembly line. Select any node around KOLPO HOUSE to reveal its strategic role within the wider constellation.
          </div>
        </div>

        {/* Interactive Constellation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Constellation Visual Stage */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              ref={stageRef}
              className="relative w-full flex items-center justify-center p-2 sm:p-6 min-h-[340px] sm:min-h-[420px] md:min-h-[500px] 3xl:min-h-[620px] rounded-3xl border border-[#292A28]/15 bg-[#F5F2EA]/85 backdrop-blur-xs overflow-hidden select-none"
            >
              {/* Dashed Orbital Path: Dynamically sized to exact radius */}
              <div
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                }}
                className="absolute rounded-full border border-dashed border-[#292A28]/25 pointer-events-none transition-all duration-300"
              />

              {/* Inner Harmonic Guide Ring */}
              <div
                style={{
                  width: `${radius * 1.32}px`,
                  height: `${radius * 1.32}px`,
                }}
                className="absolute rounded-full border border-[#292A28]/10 pointer-events-none transition-all duration-300"
              />

              {/* Central Nucleus Node: KOLPO HOUSE */}
              <motion.div
                style={{
                  width: `${nucleusSize}px`,
                  height: `${nucleusSize}px`,
                }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 rounded-full bg-[#292A28] text-[#F5F2EA] flex flex-col items-center justify-center text-center p-1.5 sm:p-2 shadow-lg border-2 border-[#F5F2EA] transition-all duration-300"
              >
                <span className="text-[7px] sm:text-[9px] 3xl:text-xs font-mono tracking-[0.16em] opacity-70 uppercase">
                  THE NUCLEUS
                </span>
                <span className="font-display-luxury text-[9.5px] sm:text-xs md:text-sm 3xl:text-base tracking-wider font-semibold mt-0.5 leading-tight">
                  KOLPO HOUSE
                </span>
                <span className="text-[6.5px] sm:text-[8px] 3xl:text-[10px] tracking-widest text-[#DDD8EA] mt-0.5 font-mono uppercase">
                  INTEGRATOR
                </span>
              </motion.div>

              {/* Orbiting Satellite Nodes: Mathematically centered with calc(-50% + x) */}
              {systemNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const isSelected = node.id === activeNodeId;

                return (
                  <button
                    key={node.id}
                    type="button"
                    id={`constellation-node-${node.id}`}
                    onClick={() => setActiveNodeId(node.id)}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${
                        isSelected ? 1.08 : 1
                      })`,
                    }}
                    className={`absolute z-20 whitespace-nowrap transition-all duration-300 cursor-pointer rounded-full border font-mono tracking-wider ${
                      isMobile
                        ? 'px-2 py-0.5 text-[8.5px]'
                        : isTablet
                        ? 'px-2.5 py-1 text-[10px]'
                        : 'px-3.5 py-1.5 text-xs 3xl:text-sm'
                    } ${
                      isSelected
                        ? 'bg-[#292A28] text-[#F5F2EA] border-[#292A28] shadow-md ring-2 ring-[#292A28]/25 z-30 font-semibold'
                        : 'bg-[#EEE9DE] text-[#292A28] border-[#292A28]/25 hover:border-[#292A28] hover:bg-[#F5F2EA] shadow-xs'
                    }`}
                  >
                    {node.name}
                  </button>
                );
              })}
            </div>

            {/* Mobile & Tablet Quick-Select Ribbon */}
            <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto no-scrollbar py-3 px-1 mt-2">
              <span className="text-[8.5px] font-mono uppercase tracking-widest text-[#41413D]/70 shrink-0 mr-1">
                QUICK NODE:
              </span>
              {systemNodes.map((node) => (
                <button
                  key={`ribbon-${node.id}`}
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  className={`px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider shrink-0 transition-colors cursor-pointer border ${
                    node.id === activeNodeId
                      ? 'bg-[#292A28] text-[#F5F2EA] border-[#292A28] font-semibold'
                      : 'bg-[#EEE9DE] text-[#292A28] border-[#292A28]/20 hover:bg-[#F5F2EA]'
                  }`}
                >
                  {node.name}
                </button>
              ))}
            </div>
          </div>

          {/* Node Insight Inspector */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-8 md:p-10 3xl:p-14 rounded-3xl border border-[#292A28]/20 flex flex-col justify-between h-full shadow-xs transition-colors duration-500"
                style={{ backgroundColor: activeNode.bg }}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] 3xl:text-xs font-mono tracking-[0.25em] uppercase text-[#41413D] pb-4 border-b border-[#292A28]/15 mb-6">
                    <span>SECTOR // {activeNode.category}</span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#292A28] animate-pulse" />
                      ACTIVE INSPECTION
                    </span>
                  </div>

                  <h3 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl text-[#292A28] leading-tight mb-4">
                    {activeNode.name}
                  </h3>

                  <p className="text-sm md:text-base 3xl:text-lg text-[#292A28] leading-relaxed font-light mb-6">
                    {activeNode.role}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#292A28]/15 space-y-2">
                  <div className="text-[10px] 3xl:text-xs font-mono tracking-widest uppercase text-[#292A28] font-bold">
                    SYSTEMIC INTERPLAY:
                  </div>
                  <p className="text-xs 3xl:text-sm text-[#41413D] leading-relaxed font-light">
                    {activeNode.connection}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
