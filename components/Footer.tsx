'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  mode: 'think' | 'move';
  onOpenContact: () => void;
}

export default function Footer({ mode, onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F2EA] text-[#292A28] border-t border-[#292A28]/15 px-4 md:px-8 lg:px-12 py-16 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block font-display-luxury text-3xl md:text-4xl font-semibold tracking-wider hover:opacity-85 transition-opacity">
              KOLPO HOUSE
            </Link>
            <p className="font-serif-editorial text-lg md:text-xl text-[#41413D] italic max-w-md font-light">
              &ldquo;We build brands, not just content.&rdquo;
            </p>
            <div className="text-xs font-mono tracking-widest text-[#41413D]/70 uppercase">
              STRATEGY. CREATIVITY. CONTENT. GROWTH.
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#41413D]/60">
              EXPLORATION
            </div>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/about" className="font-medium text-[#292A28] hover:text-[#41413D] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#292A28]" />
                  About Kolpo House
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-[#41413D] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="hover:text-[#41413D] transition-colors">
                  Four Visual Worlds
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#41413D] transition-colors">
                  Process Journey
                </Link>
              </li>
              <li>
                <Link href="/#disciplines" className="hover:text-[#41413D] transition-colors">
                  Four Disciplines
                </Link>
              </li>
              <li>
                <Link href="/#belief" className="hover:text-[#41413D] transition-colors">
                  Studio Belief
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#41413D]/60">
              COORDINATES & REACH
            </div>
            <div className="text-xs space-y-1 text-[#41413D] font-light">
              <div>
                <a href="mailto:kolpohouse@gmail.com" className="hover:text-[#292A28] transition-colors">
                  kolpohouse@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:7003497348" className="hover:text-[#292A28] transition-colors font-mono">
                  +91 7003497348
                </a>
              </div>
              <div>
                <a href="https://instagram.com/kolpo.house" target="_blank" rel="noreferrer" className="hover:text-[#292A28] transition-colors">
                  Instagram: @kolpo.house
                </a>
              </div>
              <div className="pt-2 font-mono text-[10px] text-[#292A28]">
                22.5726° N, 88.3639° E • Kolkata, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 border-t border-[#292A28]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#41413D]/70 uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} KOLPO HOUSE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>INDEPENDENT DIGITAL & BRAND STUDIO</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#292A28] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
