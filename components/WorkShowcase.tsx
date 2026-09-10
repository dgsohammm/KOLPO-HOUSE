'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown, ChevronUp, X, Sparkles } from 'lucide-react';

interface WorkShowcaseProps {
  mode: 'think' | 'move';
}

interface CaseStudy {
  id: string;
  code: string;
  category: string;
  title: string;
  discipline: string;
  status: string;
  previewImage: string;
  accentBg: string;
  objective: string;
  challenge: string;
  strategy: string;
  creativeDirection: string;
  content: string;
  digitalCommunication: string;
  campaign: string;
  result: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'case-01',
    code: 'KH-ARC-01',
    category: 'BRAND BUILDING & STRATEGY',
    title: 'CASE I // EDITORIAL POSITIONING & VERBAL IDENTITY ARCHITECTURE',
    discipline: 'Strategy • Brand Language • Visual System',
    status: 'PROJECT CONTENT TO BE ADDED',
    previewImage:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#DDD8EA',
    objective:
      'To redefine foundational market positioning, codify distinctive brand language, and establish an enduring voice for a high-discretion enterprise.',
    challenge:
      'Category competitors were relying on interchangeable marketing jargon and visual noise, causing consumer fatigue and commoditized pricing pressure.',
    strategy:
      'Strategy before execution: Conducted qualitative leadership immersion, excavated authentic point-of-view, and eliminated standard category clichés to build a sovereign identity.',
    creativeDirection:
      'Minimalist editorial typography paired with warm, tactile neutrals, spacious layout hierarchy, and bespoke architectural framing.',
    content:
      'Serialized thought-leadership publications, long-form editorial essays, and disciplined content pillars focusing on depth over volume.',
    digitalCommunication:
      'Quiet digital presence with restrained social touchpoints, refined newsletter curation, and bespoke client communications.',
    campaign:
      'Phased rollout starting with internal leadership alignment, followed by invite-only partner communications and a curated digital reveal.',
    result:
      '[PROJECT CONTENT TO BE ADDED — Documented case metrics and archival outcomes will be populated upon client release clearance.]',
  },
  {
    id: 'case-02',
    code: 'KH-ARC-02',
    category: 'CREATIVE DIRECTION & CONTENT',
    title: 'CASE II // MULTICHANNEL EDITORIAL CAMPAIGN & NARRATIVE WORLD',
    discipline: 'Creative Direction • Art Direction • Content Production',
    status: 'PROJECT CONTENT TO BE ADDED',
    previewImage:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#E9D6CC',
    objective:
      'To build a distinctive aesthetic world and episodic storytelling framework that commands genuine cultural attention.',
    challenge:
      'Overcoming ephemeral social algorithm churn to foster deep audience affinity and memorable emotional recall.',
    strategy:
      'Shifted from transactional marketing messages to cinematic brand vignettes and tactile editorial magazine layouts.',
    creativeDirection:
      'High-contrast lighting, film-like color grading, poetic copy pairings, and fluid kinetic typography.',
    content:
      'Bi-weekly serialized video essays, micro-documentaries, and collectible printed brand zines distributed to key cultural tastemakers.',
    digitalCommunication:
      'Seamless digital hub with cinematic scrolling, immersive audio cues, and responsive storytelling.',
    campaign:
      'Seasonal cultural launch orchestrated across digital and physical touchpoints in selected metropolitan hubs.',
    result:
      '[PROJECT CONTENT TO BE ADDED — Detailed resonance statistics and publication distribution to be finalized.]',
  },
  {
    id: 'case-03',
    code: 'KH-ARC-03',
    category: 'DIGITAL PRESENCE & GROWTH',
    title: 'CASE III // DIGITAL ECOSYSTEM & STRATEGIC CONVERSION ARCHITECTURE',
    discipline: 'Digital Strategy • Experience Design • Audience Cultivation',
    status: 'PROJECT CONTENT TO BE ADDED',
    previewImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#D5E2EA',
    objective:
      'To transform an fragmented digital presence into a cohesive, high-converting ecosystem where every visitor understands the brand value immediately.',
    challenge:
      'High traffic acquisition with low brand recall and low qualified inquiry rates due to disjointed digital touchpoints.',
    strategy:
      'Consolidated disparate marketing funnels into an intentional, narrative-first digital experience that qualifies high-intent audiences organically.',
    creativeDirection:
      'Architectural visual rhythm, intuitive navigation gestures, soft atmospheric lighting, and high-performance engineering.',
    content:
      'Precision case studies, interactive strategic tools, and educational guides demonstrating deep domain mastery.',
    digitalCommunication:
      'Direct, frictionless inquiry pathways without intrusive popups, respects visitor time while facilitating high-level engagement.',
    campaign:
      'Strategic search and digital placement targeting high-discernment audiences seeking premium creative partnerships.',
    result:
      '[PROJECT CONTENT TO BE ADDED — Conversion analytics and commercial impact records awaiting client publication approval.]',
  },
];

export default function WorkShowcase({ mode }: WorkShowcaseProps) {
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCaseId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="py-24 md:py-36 3xl:py-48 px-4 md:px-8 lg:px-12 3xl:px-20 bg-[#F5F2EA] transition-colors duration-1000">
      <div className="tv-container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#292A28]/15 mb-12 3xl:mb-16">
          <div>
            <div className="text-[10px] 3xl:text-xs tracking-[0.3em] uppercase text-[#41413D]/70 font-mono mb-2">
              06 // CURATED ARCHIVE
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl 3xl:text-7xl 4xl:text-8xl text-[#292A28] leading-[0.98]">
              SELECTED WORK & BLUEPRINTS
            </h2>
          </div>
          <div className="max-w-md 3xl:max-w-xl text-xs sm:text-sm 3xl:text-base text-[#41413D] leading-relaxed font-light">
            We preserve absolute client confidentiality. Explore our case study architecture and strategic frameworks below. Click any case to expand into its complete strategic dissection.
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-8">
          {caseStudies.map((item, idx) => {
            const isExpanded = expandedCaseId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-[#292A28]/15 overflow-hidden transition-all duration-500 hover:border-[#292A28]/35 bg-[#EEE9DE]/60"
              >
                {/* Summary Row */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <span className="font-mono text-xs text-[#41413D]/70 tracking-widest">
                      {item.code}
                    </span>
                    <div>
                      <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28]/60 mb-1">
                        {item.category}
                      </div>
                      <h3 className="font-display-luxury text-2xl sm:text-3xl md:text-4xl text-[#292A28] group-hover:text-[#41413D] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#41413D] font-light mt-1">
                        {item.discipline}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-[#292A28]/20 bg-[#F5F2EA] text-[#41413D]">
                      {item.status}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#292A28]/20 flex items-center justify-center text-[#292A28] group-hover:bg-[#292A28] group-hover:text-[#F5F2EA] transition-all">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded In-Page Case Study World */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-[#292A28]/15 p-6 md:p-12"
                      style={{ backgroundColor: item.accentBg }}
                    >
                      {/* Top Visual Banner */}
                      <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10 border border-[#292A28]/20 shadow-md">
                        <Image
                          src={item.previewImage}
                          alt={item.title}
                          fill
                          className="object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#292A28]/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-[#F5F2EA] flex flex-col md:flex-row md:items-end justify-between gap-4">
                          <div>
                            <div className="text-[10px] font-mono tracking-[0.25em] uppercase opacity-80 mb-1">
                              CASE STUDY BLUEPRINT // {item.code}
                            </div>
                            <div className="font-display-luxury text-2xl md:text-3xl">
                              {item.title}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCaseId(null);
                            }}
                            className="px-4 py-2 rounded-full bg-[#F5F2EA] text-[#292A28] text-xs font-mono tracking-widest uppercase hover:bg-[#EEE9DE] transition-colors self-start md:self-auto cursor-pointer"
                          >
                            CLOSE EXPANDED VIEW
                          </button>
                        </div>
                      </div>

                      {/* Structural Dissection Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
                        {/* 01 Objective */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            01 // OBJECTIVE
                          </div>
                          <p className="text-xs sm:text-sm text-[#292A28] leading-relaxed font-light">
                            {item.objective}
                          </p>
                        </div>

                        {/* 02 Challenge */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            02 // CHALLENGE
                          </div>
                          <p className="text-xs sm:text-sm text-[#292A28] leading-relaxed font-light">
                            {item.challenge}
                          </p>
                        </div>

                        {/* 03 Strategy */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            03 // STRATEGY
                          </div>
                          <p className="text-xs sm:text-sm text-[#292A28] leading-relaxed font-light">
                            {item.strategy}
                          </p>
                        </div>

                        {/* 04 Creative Direction */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            04 // CREATIVE DIRECTION
                          </div>
                          <p className="text-xs sm:text-sm text-[#292A28] leading-relaxed font-light">
                            {item.creativeDirection}
                          </p>
                        </div>

                        {/* 05 Content */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            05 // CONTENT
                          </div>
                          <p className="text-xs sm:text-sm text-[#292A28] leading-relaxed font-light">
                            {item.content}
                          </p>
                        </div>

                        {/* 06 Digital Communication */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            06 // DIGITAL COMM
                          </div>
                          <p className="text-xs sm:text-sm text-[#292A28] leading-relaxed font-light">
                            {item.digitalCommunication}
                          </p>
                        </div>

                        {/* 07 Campaign */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            07 // CAMPAIGN
                          </div>
                          <p className="text-xs sm:text-sm text-[#292A28] leading-relaxed font-light">
                            {item.campaign}
                          </p>
                        </div>

                        {/* 08 Result */}
                        <div className="space-y-2">
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#292A28] font-bold pb-1 border-b border-[#292A28]/20">
                            08 // RESULT ARCHIVE
                          </div>
                          <p className="text-xs sm:text-sm font-mono text-[#292A28]/80 leading-relaxed">
                            {item.result}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
