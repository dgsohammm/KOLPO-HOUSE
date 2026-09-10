'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Sparkles, Compass } from 'lucide-react';

interface NavigationProps {
  mode?: 'think' | 'move';
  onToggleMode?: (newMode: 'think' | 'move') => void;
  onOpenContact: () => void;
  activeSection?: string;
}

export default function Navigation({
  onOpenContact,
}: NavigationProps) {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kolkataTime, setKolkataTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Kolkata time live tick
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setKolkataTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'WORK', href: isAboutPage ? '/#story' : '#story', isExternalPage: false },
    { label: 'CAPABILITIES', href: isAboutPage ? '/#capabilities' : '#capabilities', isExternalPage: false },
    { label: 'PROCESS', href: isAboutPage ? '/#process' : '#process', isExternalPage: false },
    { label: 'PHILOSOPHY', href: isAboutPage ? '/#philosophy' : '#philosophy', isExternalPage: false },
    { label: 'DISCIPLINES', href: isAboutPage ? '/#disciplines' : '#disciplines', isExternalPage: false },
    { label: 'ABOUT', href: '/about', isExternalPage: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-3 sm:px-6 md:px-8 3xl:px-16 4xl:px-24 py-2.5 sm:py-3.5 3xl:py-5 overflow-hidden ${
          scrolled
            ? 'bg-[#F5F2EA]/82 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-[#292A28]/12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85),0_16px_40px_-8px_rgba(41,42,40,0.08),0_2px_4px_0_rgba(41,42,40,0.02)]'
            : 'bg-[#F5F2EA]/60 backdrop-blur-xl backdrop-saturate-[160%] border-b border-[#292A28]/8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_8px_24px_-4px_rgba(41,42,40,0.04)]'
        }`}
      >
        {/* Specular Liquid Glass Top Horizon Sheen */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/10 to-transparent opacity-90" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

        <div className="tv-container relative z-10 flex items-center justify-between gap-4">
          {/* Brand & Rotating Monogram */}
          <Link
            href="/"
            id="nav-logo"
            className="group flex items-center gap-3 sm:gap-3.5 3xl:gap-5 focus:outline-none shrink-0"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 3xl:w-12 3xl:h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-xs border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(41,42,40,0.04)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#292A28]/35 group-hover:border-[#292A28] transition-colors"
              />
              <span className="text-[10px] sm:text-[11px] 3xl:text-sm font-medium tracking-tighter text-[#292A28]">
                KH
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-display-luxury text-base sm:text-lg md:text-xl 3xl:text-3xl 4xl:text-4xl tracking-[0.18em] text-[#292A28] font-semibold transition-transform group-hover:translate-x-0.5 duration-300">
                KOLPO HOUSE
              </span>
              <span
                suppressHydrationWarning
                className="hidden sm:inline-block text-[8.5px] sm:text-[9px] 3xl:text-xs tracking-[0.25em] text-[#41413D]/70 font-sans uppercase -mt-0.5"
              >
                Kolkata • {kolkataTime || 'IST'}
              </span>
            </div>
          </Link>

          {/* Desktop Links with liquid glass capsule styling */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 3xl:gap-4 p-1 rounded-full bg-white/25 border border-white/45 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_2px_8px_rgba(41,42,40,0.03)]">
            {navLinks.map((link) => {
              const isActive = (link.label === 'ABOUT' && isAboutPage);
              const isInternalRoute = link.href.startsWith('/');
              const Comp = isInternalRoute ? Link : 'a';

              return (
                <Comp
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`relative text-[10.5px] 3xl:text-sm 4xl:text-base tracking-[0.2em] font-medium px-3.5 py-1.5 3xl:px-5 3xl:py-2 rounded-full transition-all duration-300 group ${
                    isActive
                      ? 'bg-[#292A28] text-[#F5F2EA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_8px_rgba(41,42,40,0.18)]'
                      : 'text-[#41413D] hover:text-[#292A28] hover:bg-white/60 hover:shadow-[0_2px_8px_rgba(41,42,40,0.04)]'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#EEE9DE]" />}
                    {link.label}
                  </span>
                </Comp>
              );
            })}
          </nav>

          {/* Right Action: Studio Coordinates & Liquid Contact Pill */}
          <div className="flex items-center gap-3 sm:gap-4 3xl:gap-6 shrink-0">
            <a
              href="tel:7003497348"
              className="hidden xl:inline-block font-mono text-[11px] 3xl:text-sm tracking-wider text-[#41413D] hover:text-[#292A28] transition-colors py-1 px-2.5 rounded-full hover:bg-white/40"
            >
              +91 7003497348
            </a>

            {/* Liquid Obsidian Contact Capsule */}
            <button
              type="button"
              id="nav-contact-button"
              onClick={onOpenContact}
              className="relative overflow-hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-1.5 3xl:px-7 3xl:py-3 text-[10.5px] sm:text-[11px] 3xl:text-sm tracking-[0.18em] font-medium uppercase rounded-full border border-[#292A28] bg-[#292A28] text-[#F5F2EA] hover:bg-[#41413D] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_6px_20px_rgba(41,42,40,0.16)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_8px_26px_rgba(41,42,40,0.22)] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
            >
              {/* Subtle button sheen line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              <span className="relative z-10">CONTACT</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 3xl:w-4 3xl:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger in Liquid Glass Pill */}
            <button
              type="button"
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#292A28] bg-white/40 hover:bg-white/70 border border-white/60 rounded-full shadow-xs backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Liquid Glass Backing */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F2EA]/92 backdrop-blur-2xl backdrop-saturate-[180%] pt-20 sm:pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden border-b border-[#292A28]/15 shadow-2xl"
          >
            <div className="space-y-6 pt-4">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#41413D]/60 pb-2 border-b border-[#292A28]/10 flex items-center justify-between">
                <span>NAVIGATION</span>
                <span className="font-mono text-[9px]">KOLKATA • {kolkataTime || 'IST'}</span>
              </div>
              <div className="flex flex-col gap-3.5">
                {navLinks.map((link, idx) => {
                  const isInternalRoute = link.href.startsWith('/');
                  const Comp = isInternalRoute ? Link : 'a';
                  const isActive = (link.label === 'ABOUT' && isAboutPage);

                  return (
                    <Comp
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-display-luxury text-xl sm:text-2xl tracking-[0.1em] transition-colors flex items-center justify-between p-2 rounded-xl ${
                        isActive
                          ? 'text-[#292A28] font-bold bg-white/50 border border-white/60 shadow-xs'
                          : 'text-[#292A28] hover:text-[#41413D]'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-[11px] font-mono tracking-widest text-[#41413D]/50 mr-3">
                          0{idx + 1}
                        </span>
                        {link.label}
                      </div>
                      {isActive && (
                        <span className="text-[9px] font-mono tracking-widest uppercase bg-[#292A28] text-[#F5F2EA] px-2 py-0.5 rounded-full">
                          CURRENT
                        </span>
                      )}
                    </Comp>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#292A28]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 text-center text-xs tracking-[0.2em] font-medium uppercase bg-[#292A28] text-[#F5F2EA] rounded-full shadow-md hover:bg-[#41413D] cursor-pointer"
              >
                START A CONVERSATION
              </button>
              <div className="flex flex-col items-center gap-1.5 text-center text-[11px] text-[#41413D] tracking-wider">
                <a href="tel:7003497348" className="font-mono text-[#292A28] font-medium hover:underline">
                  +91 7003497348
                </a>
                <span className="text-[10px] text-[#41413D]/70 font-mono">
                  kolpohouse@gmail.com • Kolkata, India
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
