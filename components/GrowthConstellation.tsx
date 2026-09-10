'use client';

import React, { useState } from 'react';
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

  return (
    <section
      id="growth-system"
      className="py-24 md:py-36 px-4 md:px-8 lg:px-12 bg-[#EEE9DE] transition-colors duration-1000 border-t border-b border-[#292A28]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#292A28]/15 mb-12">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-2">
              10 // THE CONNECTIVE CONSTELLATION
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28] leading-[0.98]">
              THE GROWTH SYSTEM
            </h2>
          </div>
          <div className="max-w-md text-xs sm:text-sm text-[#41413D] leading-relaxed font-light">
            Brand growth is an organic ecosystem, not an assembly line. Select any node around KOLPO HOUSE to reveal its strategic role within the wider constellation.
          </div>
        </div>

        {/* Interactive Constellation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Constellation Visual Stage */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-6 sm:p-12 min-h-[460px] md:min-h-[520px] rounded-3xl border border-[#292A28]/15 bg-[#F5F2EA]/80 backdrop-blur-xs">
            {/* Ambient Concentric Rings */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-dashed border-[#292A28]/15 pointer-events-none" />
            <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-[#292A28]/10 pointer-events-none" />

            {/* Central Node: KOLPO HOUSE */}
            <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#292A28] text-[#F5F2EA] flex flex-col items-center justify-center text-center p-2 shadow-lg border-2 border-[#F5F2EA]">
              <span className="text-[9px] font-mono tracking-[0.2em] opacity-70 uppercase">
                THE NUCLEUS
              </span>
              <span className="font-display-luxury text-xs md:text-sm tracking-wider font-semibold mt-0.5">
                KOLPO HOUSE
              </span>
              <span className="text-[8px] tracking-widest text-[#DDD8EA] mt-1 font-mono uppercase">
                INTEGRATOR
              </span>
            </div>

            {/* Orbiting Satellite Nodes */}
            {systemNodes.map((node, i) => {
              const radius = 170; // px
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isSelected = node.id === activeNodeId;

              return (
                <motion.button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className={`absolute z-20 px-3 py-1.5 rounded-full border text-[10px] md:text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer shadow-xs ${
                    isSelected
                      ? 'bg-[#292A28] text-[#F5F2EA] border-[#292A28] scale-110 shadow-md ring-2 ring-[#292A28]/20'
                      : 'bg-[#EEE9DE] text-[#292A28] border-[#292A28]/25 hover:border-[#292A28] hover:bg-[#F5F2EA]'
                  }`}
                >
                  {node.name}
                </motion.button>
              );
            })}
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
                className="p-8 md:p-10 rounded-3xl border border-[#292A28]/20 flex flex-col justify-between h-full"
                style={{ backgroundColor: activeNode.bg }}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] uppercase text-[#41413D] pb-4 border-b border-[#292A28]/15 mb-6">
                    <span>SECTOR // {activeNode.category}</span>
                    <span>ACTIVE INSPECTION</span>
                  </div>

                  <h3 className="font-display-luxury text-3xl sm:text-4xl md:text-5xl text-[#292A28] leading-tight mb-4">
                    {activeNode.name}
                  </h3>

                  <p className="text-sm md:text-base text-[#292A28] leading-relaxed font-light mb-6">
                    {activeNode.role}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#292A28]/15 space-y-2">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#292A28] font-bold">
                    SYSTEMIC INTERPLAY:
                  </div>
                  <p className="text-xs text-[#41413D] leading-relaxed font-light">
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
