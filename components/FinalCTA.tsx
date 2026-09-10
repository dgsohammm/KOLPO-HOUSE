'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, Instagram, MapPin } from 'lucide-react';

interface FinalCTAProps {
  mode?: 'think' | 'move';
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export default function FinalCTA({
  onOpenContact,
  onExploreWork,
}: FinalCTAProps) {
  return (
    <section
      id="contact-section"
      className="py-28 md:py-44 px-4 md:px-8 lg:px-12 transition-colors duration-1000 border-t border-[#292A28]/15 relative overflow-hidden bg-[#292A28] text-[#F5F2EA]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-60 mb-6">
          11 // INVITATION TO DIALOGUE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
            >
              LET&apos;S BUILD SOMETHING DISTINCTIVE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base leading-relaxed opacity-80 max-w-2xl font-light"
            >
              Whether a brand is finding its voice, strengthening its digital presence or looking for its next stage of growth, we approach every engagement with curiosity, clarity and intent.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer bg-[#F5F2EA] text-[#292A28] hover:bg-[#DDD8EA] shadow-md hover:shadow-lg group"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="px-8 py-4 rounded-full border text-xs font-mono tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer border-[#F5F2EA]/30 hover:border-[#F5F2EA] hover:bg-[#41413D]"
              >
                EXPLORE THE WORK
              </button>
            </div>
          </div>

          {/* Real Contact Channel Cards */}
          <div className="lg:col-span-4 space-y-4 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-current/15 lg:pl-10">
            <div className="text-[10px] font-mono tracking-widest uppercase opacity-60 mb-2">
              DIRECT CHANNELS
            </div>

            <a
              href="mailto:kolpohouse@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl border border-current/15 hover:bg-current/5 transition-colors group"
            >
              <Mail className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              <div>
                <div className="text-[10px] font-mono opacity-50 uppercase">EMAIL</div>
                <div className="text-sm font-medium tracking-wide">
                  kolpohouse@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:7003497348"
              className="flex items-center gap-3 p-4 rounded-xl border border-current/15 hover:bg-current/5 transition-colors group"
            >
              <Phone className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              <div>
                <div className="text-[10px] font-mono opacity-50 uppercase">PHONE</div>
                <div className="text-sm font-medium tracking-wide">
                  7003497348
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com/kolpo.house"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-current/15 hover:bg-current/5 transition-colors group"
            >
              <Instagram className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              <div>
                <div className="text-[10px] font-mono opacity-50 uppercase">INSTAGRAM</div>
                <div className="text-sm font-medium tracking-wide">
                  @kolpo.house
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-current/15">
              <MapPin className="w-4 h-4 opacity-70" />
              <div>
                <div className="text-[10px] font-mono opacity-50 uppercase">LOCATION</div>
                <div className="text-sm font-medium tracking-wide">
                  Kolkata, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
