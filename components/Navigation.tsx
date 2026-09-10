'use client';

import React, { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [kolkataTime, setKolkataTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
    { label: 'WORK', href: '#story' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'PROCESS', href: '#process' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'DISCIPLINES', href: '#disciplines' },
    { label: 'ABOUT', href: '#manifesto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-8 py-3.5 sm:py-4 ${
          scrolled
            ? 'bg-[#F5F2EA]/85 backdrop-blur-2xl border-b border-[#292A28]/15 shadow-[0_12px_40px_rgba(41,42,40,0.06)]'
            : 'bg-[#F5F2EA]/45 backdrop-blur-md border-b border-[#292A28]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand & Rotating Monogram */}
          <a
            href="#"
            id="nav-logo"
            className="group flex items-center gap-3.5 focus:outline-none shrink-0"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-[#292A28]/35 group-hover:border-[#292A28] transition-colors"
              />
              <span className="text-[11px] font-medium tracking-tighter text-[#292A28]">
                KH
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-display-luxury text-lg md:text-xl tracking-[0.18em] text-[#292A28] font-semibold transition-transform group-hover:translate-x-0.5 duration-300">
                KOLPO HOUSE
              </span>
              <span className="hidden sm:inline-block text-[9px] tracking-[0.25em] text-[#41413D]/70 font-sans uppercase -mt-0.5">
                Kolkata • {kolkataTime || 'IST'}
              </span>
            </div>
          </a>

          {/* Desktop Links with generous spacing */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="relative text-[11px] tracking-[0.22em] font-medium text-[#41413D] hover:text-[#292A28] transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#292A28] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Studio Coordinates & Contact */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:7003497348"
              className="hidden xl:inline-block font-mono text-[11px] tracking-wider text-[#41413D] hover:text-[#292A28] transition-colors"
            >
              +91 7003497348
            </a>

            {/* Contact Trigger */}
            <button
              type="button"
              id="nav-contact-button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] tracking-[0.18em] font-medium uppercase rounded-full border border-[#292A28] bg-[#292A28] text-[#F5F2EA] hover:bg-[#41413D] transition-all duration-300 shadow-xs hover:shadow-sm cursor-pointer group"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#292A28] hover:bg-[#EEE9DE] rounded-full transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F2EA]/98 backdrop-blur-xl pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden border-b border-[#292A28]/10"
          >
            <div className="space-y-6">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#41413D]/60 pb-2 border-b border-[#292A28]/10">
                Navigation
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display-luxury text-2xl tracking-[0.1em] text-[#292A28] hover:text-[#41413D] transition-colors"
                  >
                    <span className="text-xs font-sans tracking-widest text-[#41413D]/50 mr-3">
                      0{idx + 1}
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#292A28]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 text-center text-xs tracking-[0.2em] font-medium uppercase bg-[#292A28] text-[#F5F2EA] rounded-full transition-colors hover:bg-[#41413D] cursor-pointer"
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
