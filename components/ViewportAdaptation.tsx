'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Smartphone, Monitor, Laptop, Maximize2, Sparkles, Check, ChevronUp, ChevronDown } from 'lucide-react';

export default function ViewportAdaptation() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth === 0) return null;

  // Determine screen category
  let category = 'DESKTOP';
  let Icon = Laptop;
  let optimalScale = '1.0x Standard';

  if (windowWidth < 640) {
    category = 'MOBILE XS';
    Icon = Smartphone;
    optimalScale = 'Compact Touch Layout';
  } else if (windowWidth < 1024) {
    category = 'TABLET';
    Icon = Smartphone;
    optimalScale = 'Medium Fluid Grid';
  } else if (windowWidth < 1536) {
    category = 'DESKTOP HD';
    Icon = Laptop;
    optimalScale = '1080p Standard Layout';
  } else if (windowWidth < 2560) {
    category = 'ULTRAWIDE 2K';
    Icon = Monitor;
    optimalScale = '1440p Expanded Bento Layout';
  } else {
    category = 'CINEMA 4K / TV';
    Icon = Tv;
    optimalScale = '2160p+ Ultra-Res High Density';
  }

  const loopPromptText = `You are a master creative director and senior WebGL/CSS motion engineer. Generate continuous cinematic loop animations with responsive viewport physics:
1. VIEWPORT FLUIDITY:
   - Scale typography dynamically from 320px mobile to 3840px 4K TV using fluid clamping: clamp(1rem, 0.8rem + 1.2vw, 3.5rem)
   - Preserve aspect ratios and mathematical spacing on ultra-wide screens using container query constraints and .tv-container
2. CONTINUOUS KINETIC LOOPS:
   - Orbital text rings: 360-degree SVG textPath rotation (26s infinite linear ease)
   - Atmospheric ambient blobs: multi-colored elliptical gradients softly breathing between 0.35 and 0.65 opacity with 8s easeInOut sinusoidal loop
   - Horizontal section scrolling: seamlessly translate multi-world carousel driven by sticky container scroll progress (useTransform([0, 1], ['0%', '-75%']))
3. ADAPTIVE CRAFT:
   - Mobile: High-contrast touch targets (min 44px), vertical card stacking, gesture-friendly smooth inertia
   - TV / 4K: Scaled display typography (text-8xl to text-12xl), high visual density, cinematic editorial margins, zero layout breakdown`;

  const copyLoopPrompt = () => {
    navigator.clipboard.writeText(loopPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#F5F2EA]/95 backdrop-blur-xl border border-[#292A28]/20 shadow-[0_20px_60px_rgba(41,42,40,0.18)] p-5 text-[#292A28]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#292A28]/15 mb-3">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#41413D]">
                <Icon className="w-3.5 h-3.5 text-[#292A28]" />
                <span>ACTIVE DISPLAY ENGINE</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#292A28] text-[#F5F2EA] text-[9px] font-mono tracking-wider">
                {category}
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-4 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-[#EEE9DE] border border-[#292A28]/10">
                <span className="text-[9px] uppercase tracking-widest text-[#41413D]/70 block mb-0.5">
                  RESOLUTION
                </span>
                <span className="font-semibold text-[#292A28]">
                  {windowWidth} &times; {windowHeight} px
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#EEE9DE] border border-[#292A28]/10">
                <span className="text-[9px] uppercase tracking-widest text-[#41413D]/70 block mb-0.5">
                  VISUAL MODE
                </span>
                <span className="font-semibold text-[#292A28] text-[11px] truncate block">
                  {optimalScale}
                </span>
              </div>
            </div>

            {/* Loop Prompt Direct Copy Card */}
            <div className="p-3 rounded-xl bg-[#292A28] text-[#F5F2EA] mb-2">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-[#F5F2EA]/80">
                  <Sparkles className="w-3 h-3 text-[#F5F2EA]" />
                  <span>RESPONSIVE LOOP PROMPT</span>
                </div>
                <button
                  type="button"
                  onClick={copyLoopPrompt}
                  className="px-2.5 py-1 rounded-md bg-[#F5F2EA] text-[#292A28] hover:bg-[#EEE9DE] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-2.5 h-2.5" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <span>COPY PROMPT</span>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-[#F5F2EA]/80 line-clamp-2 font-light leading-relaxed">
                Includes multi-screen fluid clamping, 360° orbital textPath kinetics, and scroll-driven sticky timeline synchronization.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Pill */}
      <button
        type="button"
        id="display-adaptation-pill"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#292A28] text-[#F5F2EA] hover:bg-[#41413D] shadow-lg border border-[#292A28] transition-all duration-300 text-xs font-mono tracking-wider cursor-pointer group"
      >
        <Icon className="w-3.5 h-3.5 text-[#F5F2EA]" />
        <span className="text-[10px] tracking-[0.18em] uppercase font-medium">
          {category} &bull; {windowWidth}px
        </span>
        {isOpen ? (
          <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100" />
        ) : (
          <ChevronUp className="w-3 h-3 opacity-60 group-hover:opacity-100" />
        )}
      </button>
    </div>
  );
}
