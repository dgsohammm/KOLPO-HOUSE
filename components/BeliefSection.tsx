'use client';

import React from 'react';
import { motion } from 'motion/react';

interface BeliefSectionProps {
  mode: 'think' | 'move';
}

const fourPillars = [
  {
    title: 'PEOPLE',
    desc: 'The human convictions, craftsmanship, and ethos behind the craft.',
    bg: '#DDD8EA',
  },
  {
    title: 'PERSONALITY',
    desc: 'The distinct cadence, quirks, and unmistakable point of view.',
    bg: '#D5E2EA',
  },
  {
    title: 'AMBITION',
    desc: 'The specific commercial horizon and cultural mark it seeks to leave.',
    bg: '#E9D6CC',
  },
  {
    title: 'STORY',
    desc: 'The authentic lineage that cannot be simulated or bought.',
    bg: '#D8DFD5',
  },
];

export default function BeliefSection({ mode }: BeliefSectionProps) {
  return (
    <section
      id="belief"
      className="py-28 md:py-44 px-4 md:px-8 lg:px-12 transition-colors duration-1000 border-t border-b border-[#292A28]/10 relative overflow-hidden"
      style={{
        backgroundColor: mode === 'think' ? '#F5F2EA' : '#DDD8EA',
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-12 md:space-y-16 relative z-10">
        {/* Editorial Subtitle Stamp */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#292A28]/20 bg-[#EEE9DE]/60 text-[10px] font-mono tracking-[0.25em] uppercase text-[#41413D]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
          <span>09 // CORE CREATIVE CREED</span>
        </motion.div>

        {/* The Quiet Provocation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#41413D] italic font-light">
            &ldquo;There is no universal formula for building a good brand.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[#41413D]/80 font-sans tracking-widest uppercase max-w-md mx-auto">
            Every business has its own irreducible DNA:
          </p>
        </motion.div>

        {/* 4 Pillars of Individual Brand Identity */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {fourPillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-[#292A28]/15 text-left flex flex-col justify-between h-44 hover:shadow-xs transition-shadow"
              style={{ backgroundColor: p.bg }}
            >
              <div className="font-mono text-xs text-[#292A28]/50">0{i + 1} {'//'}</div>
              <div>
                <div className="font-display-luxury text-2xl sm:text-3xl text-[#292A28] mb-1">
                  {p.title}
                </div>
                <div className="text-[11px] text-[#41413D] leading-snug font-light">
                  {p.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Major Visual Climax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 md:pt-16 border-t border-[#292A28]/20 max-w-4xl mx-auto"
        >
          <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#292A28] leading-[1.04] tracking-tight">
            WE BELIEVE BRANDS SHOULD FEEL LIKE THEMSELVES.
          </h2>

          <p className="text-sm md:text-base text-[#41413D] max-w-xl mx-auto mt-6 leading-relaxed font-light">
            When a brand stops attempting to imitate market leaders and speaks from its own innate authority, it becomes unshakeable. That is the only kind of brand we build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
