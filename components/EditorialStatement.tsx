'use client';

import React from 'react';
import { motion } from 'motion/react';

interface EditorialStatementProps {
  mode?: 'think' | 'move';
}

export default function EditorialStatement({}: EditorialStatementProps) {
  return (
    <section
      id="philosophy"
      className="relative py-24 md:py-40 px-4 md:px-8 lg:px-12 overflow-hidden transition-colors duration-1000 border-t border-b border-[#292A28]/10 bg-[#DDD8EA]"
    >
      {/* Decorative Editorial Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.04] text-[18vw] font-display-luxury whitespace-nowrap text-[#292A28]">
        KOLPO HOUSE
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header Stamp */}
        <div className="flex items-center justify-between pb-10 md:pb-16 border-b border-[#292A28]/15 text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-[#41413D]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#292A28]" />
            <span>01 // EDITORIAL THESIS</span>
          </div>
          <div className="font-mono text-[9px] tracking-widest text-[#41413D]/70">
            THE ANATOMY OF RESONANCE
          </div>
        </div>

        {/* The 3 Staggered Emotional Peaks */}
        <div className="space-y-12 md:space-y-20 pt-12 md:pt-20">
          {/* Phase 1: Attention */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline justify-between gap-4"
          >
            <span className="text-xs font-mono tracking-widest text-[#41413D]/70 uppercase shrink-0">
              PHASE I // ATTENTION
            </span>
            <div className="overflow-hidden">
              <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#292A28] leading-[1.05] tracking-tight max-w-4xl">
                GOOD CONTENT CAN GET ATTENTION.
              </h2>
            </div>
          </motion.div>

          {/* Phase 2: Direction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pl-0 md:pl-16"
          >
            <span className="text-xs font-mono tracking-widest text-[#41413D]/70 uppercase shrink-0">
              PHASE II // DIRECTION
            </span>
            <div className="overflow-hidden">
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#292A28] italic leading-[1.08] tracking-tight max-w-4xl">
                GOOD STRATEGY GIVES IT SOMEWHERE TO GO.
              </h2>
            </div>
          </motion.div>

          {/* Phase 3: The Climax / Core Rule */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pt-10 md:pt-16 border-t border-[#292A28]/20"
          >
            <div className="flex items-center gap-3 mb-4 text-[11px] tracking-[0.3em] uppercase text-[#292A28] font-semibold">
              <span className="w-6 h-[1px] bg-[#292A28]" />
              <span>THE FIRST PRINCIPLE</span>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '20%', opacity: 0.5 }}
                whileInView={{ y: '0%', opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-display-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#292A28] tracking-[-0.03em] leading-[0.9] font-normal"
              >
                STRATEGY BEFORE EXECUTION.
              </motion.div>
            </div>

            <div className="mt-8 max-w-xl text-sm md:text-base text-[#41413D] leading-relaxed font-light">
              Too much digital marketing exhausts itself on transient noise. At KOLPO HOUSE, we construct rigorous foundations before producing a single frame — so that creativity and performance work towards compound brand value.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
