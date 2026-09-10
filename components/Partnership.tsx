'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface PartnershipProps {
  mode: 'think' | 'move';
}

const partnershipModels = [
  {
    num: '01',
    title: 'BRAND BUILDING',
    essence: 'Foundational Identity & Distinctive Position',
    desc: 'From zero-to-one brand launches to holistic repositioning of heritage organizations, establishing clear market distinction.',
    bg: '#DDD8EA',
  },
  {
    num: '02',
    title: 'CAMPAIGNS',
    essence: 'Episodic Cultural Narrative & Public Launches',
    desc: 'Coordinated multichannel campaigns that capture cultural attention and steer audience sentiment toward decisive action.',
    bg: '#D5E2EA',
  },
  {
    num: '03',
    title: 'DIGITAL PRESENCE',
    essence: 'Immersive Touchpoints & Living Architecture',
    desc: 'Bespoke web experiences, mobile storytelling environments, and digital destinations crafted with uncompromising editorial polish.',
    bg: '#E9D6CC',
  },
  {
    num: '04',
    title: 'CONTENT & CREATIVE',
    essence: 'Serialized Publishing & Continuous Voice',
    desc: 'High-production visual systems, editorial photography, and purposeful copy that give the brand an authentic voice day after day.',
    bg: '#D8DFD5',
  },
  {
    num: '05',
    title: 'LONG-TERM GROWTH',
    essence: 'Compounding Commercial & Cultural Value',
    desc: 'Iterative optimization, audience cultivation, and strategic partnerships that ensure brand momentum compounds over years.',
    bg: '#DDD4C7',
  },
];

export default function Partnership({ mode }: PartnershipProps) {
  return (
    <section className="py-24 md:py-36 px-4 md:px-8 lg:px-12 bg-[#EEE9DE] transition-colors duration-1000 border-t border-b border-[#292A28]/10">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#292A28]/15 mb-16">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-2">
              07 // ENGAGEMENT ARCHITECTURE
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28] leading-[0.98]">
              BUILT AROUND YOUR BRAND.
            </h2>
          </div>
          <div className="max-w-md text-xs sm:text-sm text-[#41413D] leading-relaxed font-light">
            We do not force brands into rigid corporate retainer boxes. Our partnership models scale flexibly to the specific ambitions of your enterprise.
          </div>
        </div>

        {/* Progressive Editorial Strips */}
        <div className="space-y-4">
          {partnershipModels.map((model, idx) => (
            <motion.div
              key={model.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-6 md:p-10 rounded-2xl border border-[#292A28]/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:shadow-md transition-all duration-400 group"
              style={{ backgroundColor: model.bg }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
                <span className="font-mono text-sm text-[#292A28]/60 font-semibold">
                  {model.num} {'//'}
                </span>
                <div>
                  <h3 className="font-display-luxury text-2xl sm:text-4xl text-[#292A28] group-hover:translate-x-1 transition-transform">
                    {model.title}
                  </h3>
                  <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#41413D] mt-1">
                    {model.essence}
                  </div>
                </div>
              </div>

              <div className="max-w-md text-xs sm:text-sm text-[#292A28] font-light leading-relaxed">
                {model.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
