'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EditorialStatement from '@/components/EditorialStatement';
import Chapters from '@/components/Chapters';
import HowKolpoThinks from '@/components/HowKolpoThinks';
import ProcessJourney from '@/components/ProcessJourney';
import HorizontalCapabilities from '@/components/HorizontalCapabilities';
import WorkShowcase from '@/components/WorkShowcase';
import Partnership from '@/components/Partnership';
import FourDisciplines from '@/components/FourDisciplines';
import BeliefSection from '@/components/BeliefSection';
import GrowthConstellation from '@/components/GrowthConstellation';
import FinalCTA from '@/components/FinalCTA';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function HomePage() {
  const mode = 'move' as const;
  const [contactOpen, setContactOpen] = useState(false);

  const handleExploreClick = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#292A28] antialiased selection:bg-[#292A28] selection:text-[#F5F2EA]">
      {/* Floating Minimal Navigation with Stamp */}
      <Navigation
        mode={mode}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Hero Experience */}
      <Hero
        mode={mode}
        onExploreClick={handleExploreClick}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Editorial Opening Statement (Attention -> Strategy -> Strategy Before Execution) */}
      <EditorialStatement mode={mode} />

      {/* The Four Chapters: Strategy, Creativity, Content, Growth */}
      <Chapters mode={mode} />

      {/* How Kolpo Thinks: WHO -> WHY -> WHAT -> HOW */}
      <HowKolpoThinks mode={mode} />

      {/* The Kolpo House Process Journey: DISCOVER -> DEFINE -> CREATE -> EXECUTE -> OPTIMISE (04) */}
      <ProcessJourney mode={mode} />

      {/* Four Visual Worlds Horizontal Exploration: 01 BRAND, 02 DIGITAL, 03 CREATIVE, 04 GROWTH (05) */}
      <HorizontalCapabilities mode={mode} />

      {/* Selected Work & Archival Case Study Dissection */}
      <WorkShowcase mode={mode} />

      {/* Growth System Visual Constellation */}
      <GrowthConstellation mode={mode} />

      {/* Partnership Models: Built Around Your Brand */}
      <Partnership mode={mode} />

      {/* Four Disciplines. One Team. */}
      <FourDisciplines mode={mode} />

      {/* Kolpo House Belief: Brands Should Feel Like Themselves */}
      <BeliefSection mode={mode} />

      {/* Final Cinematic CTA */}
      <FinalCTA
        mode={mode}
        onOpenContact={() => setContactOpen(true)}
        onExploreWork={handleExploreWork}
      />

      {/* Footer */}
      <Footer mode={mode} onOpenContact={() => setContactOpen(true)} />

      {/* Seamless Minimal Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
