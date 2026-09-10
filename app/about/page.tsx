'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Compass,
  Palette,
  Film,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Layers,
  CheckCircle2,
  Quote,
  ArrowRight,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<'who' | 'why' | 'what' | 'how'>('who');

  const chapters = [
    {
      num: '01',
      title: 'STRATEGY',
      subtitle: 'THE COMPASS',
      icon: Compass,
      accent: '#DDD8EA',
      desc: 'Before a single frame is filmed or a word is scripted, we uncover the non-fungible commercial and emotional truth of the brand. We architect market positioning, customer discernment models, and defensible narrative moats.',
      bullets: [
        'Brand Positioning & Cultural Resonance',
        'Customer Psychology & Discernment Mapping',
        'Archetypal Architecture & Tone of Voice',
        'Defensible Market Differentiation',
      ],
    },
    {
      num: '02',
      title: 'CREATIVITY',
      subtitle: 'THE FORM',
      icon: Palette,
      accent: '#D5E2EA',
      desc: 'Creativity without strategy is mere ornament; strategy without creativity is invisible. We sculpt distinctive visual identities, bespoke typographic hierarchies, tactile editorial layouts, and immersive digital worlds that command quiet authority.',
      bullets: [
        'Art Direction & Visual Identity Systems',
        'Editorial Typography & Spatial Layout',
        'Tactile Brand World-Building',
        'Digital Interface Craft & Motion Aesthetics',
      ],
    },
    {
      num: '03',
      title: 'CONTENT',
      subtitle: 'THE RESONANCE',
      icon: Film,
      accent: '#E9D6CC',
      desc: 'We reject generic social churn. Every piece of film, photography, and editorial essay produced by KOLPO HOUSE is engineered to respect the audience’s intelligence, generate sustained attention, and build compounding brand equity.',
      bullets: [
        'Cinematic Brand Documentaries & Commercials',
        'High-Retention Editorial Social Architecture',
        'Founders’ In-Depth Thought Leadership',
        'Bespoke Sound Design & Visual Cadence',
      ],
    },
    {
      num: '04',
      title: 'GROWTH',
      subtitle: 'THE COMPOUND ENGINE',
      icon: TrendingUp,
      accent: '#D8DFD5',
      desc: 'Attention that doesn’t translate into commercial resilience is meaningless. We connect brand sentiment with rigorous acquisition mechanics, high-intent funnel conversion, and long-term customer lifetime loyalty.',
      bullets: [
        'Full-Funnel Commerce & Conversion Architecture',
        'High-Intent Performance Media Strategy',
        'Retention & Lifetime Community Cultivation',
        'Measurable Brand Equity Valuation',
      ],
    },
  ];

  const diagnosticQuestions = {
    who: {
      step: '01',
      title: 'WHO',
      question: 'Who are you when no marketing is speaking?',
      detail:
        'We excavate the genuine identity, convictions, internal craftsmanship, and idiosyncratic worldview of the founders and the enterprise. We uncover what makes you non-fungible before creating a public face.',
      metric: 'IDENTITY & INNER DNA',
    },
    why: {
      step: '02',
      title: 'WHY',
      question: 'What commercial and cultural shifts must happen?',
      detail:
        'Brand building cannot exist in an artistic vacuum. We align creative decisions with actual commercial mechanics: margin resilience, client acquisition quality, lifetime goodwill, and long-term enterprise value.',
      metric: 'COMMERCIAL INTENT & HORIZON',
    },
    what: {
      step: '03',
      title: 'WHAT',
      question: 'Who needs what you alone can articulate?',
      detail:
        'We do not treat audiences as faceless demographic spreadsheets. We study their aesthetic sensitivities, emotional anxieties, discernment thresholds, and what causes them to grant deep, sustained trust.',
      metric: 'DISCERNMENT & AUDIENCE TRUST',
    },
    how: {
      step: '04',
      title: 'HOW',
      question: 'What is the most effective way to communicate it?',
      detail:
        'Now, and only now, execution begins. We choose tone, editorial formats, visual styling, cadence, and channels that make the brand impossible to ignore and delightful to follow.',
      metric: 'TRANSLATION & CRAFT EXECUTION',
    },
  };

  const disciplines = [
    {
      title: 'Creative & Strategy',
      badge: 'The Compass & Soul',
      desc: 'Guiding brand positioning, narrative voice, aesthetic art direction, and conceptual vision from inception to delivery.',
    },
    {
      title: 'Operations & Delivery',
      badge: 'The Precision Engine',
      desc: 'Ensuring seamless production timelines, zero-friction client workflows, and uncompromising quality assurance.',
    },
    {
      title: 'Business Development & Client Relations',
      badge: 'The Consultative Partner',
      desc: 'Cultivating intimate, high-trust client relationships, long-term strategic alignment, and bespoke engagement scopes.',
    },
    {
      title: 'Business & Finance',
      badge: 'The Economic Backbone',
      desc: 'Anchoring creative daring in commercial viability, capital efficiency, and sustainable enterprise scale.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#292A28] antialiased selection:bg-[#292A28] selection:text-[#F5F2EA]">
      {/* Liquid Glass Navigation */}
      <Navigation onOpenContact={() => setContactOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-[#292A28]/10">
        {/* Subtle Ambient Refraction Background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(221,216,234,0.35),transparent_60%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[20vw] font-display-luxury whitespace-nowrap text-[#292A28]">
          KOLPO
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb & Stamp */}
          <div className="flex items-center gap-3 pb-8 text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#41413D]">
            <Link href="/" className="hover:text-[#292A28] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#292A28] font-semibold">00 // ABOUT KOLPO HOUSE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#292A28] leading-[0.98] tracking-tight">
                THE ATELIER OF INTENTIONAL BRANDS.
              </h1>
              <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#41413D] italic font-light leading-snug">
                &ldquo;We build brands, not just content.&rdquo;
              </p>
              <p className="text-base sm:text-lg text-[#41413D] leading-relaxed max-w-2xl font-light pt-2">
                KOLPO HOUSE is an independent strategic digital and creative agency headquartered in Kolkata. 
                We exist for ambitious enterprises that refuse algorithmic homogenization and seek to build 
                compounding cultural resonance, commanding visual authority, and enduring commercial equity.
              </p>
            </div>

            {/* Studio Coordinates Bento Card */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl border border-[#292A28]/15 bg-white/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_12px_32px_rgba(41,42,40,0.04)] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#292A28]/10 text-[10px] font-mono tracking-widest text-[#41413D]/70 uppercase">
                <span>STUDIO COORDINATES</span>
                <span className="w-2 h-2 rounded-full bg-[#292A28] animate-pulse" />
              </div>

              <div className="space-y-3.5 text-xs text-[#41413D]">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#41413D]/60 tracking-wider">
                    HEADQUARTERS
                  </div>
                  <div className="font-display-luxury text-base text-[#292A28] font-medium pt-0.5">
                    Kolkata, West Bengal, India
                  </div>
                  <div className="font-mono text-[10px] text-[#41413D]/70 pt-0.5">
                    22.5726° N, 88.3639° E
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#41413D]/60 tracking-wider">
                    FOUNDING PRINCIPLE
                  </div>
                  <div className="font-medium text-[#292A28] pt-0.5">
                    Strategy Before Execution
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#41413D]/60 tracking-wider">
                    THE FOUR DISCIPLINES
                  </div>
                  <div className="text-[11px] text-[#41413D] pt-0.5">
                    Strategy • Creativity • Content • Growth
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setContactOpen(true)}
                    className="w-full py-2.5 px-4 text-center text-[10.5px] tracking-[0.2em] uppercase font-semibold rounded-full bg-[#292A28] text-[#F5F2EA] hover:bg-[#41413D] transition-colors shadow-xs cursor-pointer"
                  >
                    START A CONVERSATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genesis & Meaning of "KOLPO" */}
      <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 border-b border-[#292A28]/10 bg-[#DDD8EA]/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#41413D]">
            <span className="w-2 h-2 rounded-full bg-[#292A28]" />
            <span>01 // GENESIS & ETYMOLOGY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-baseline">
            <div className="md:col-span-5 space-y-4">
              <div className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl text-[#292A28] leading-tight">
                WHAT DOES &ldquo;KOLPO&rdquo; MEAN?
              </div>
              <div className="font-mono text-xs tracking-widest text-[#41413D]/80 uppercase">
                কল্প • [KAL-PA / KOL-PO]
              </div>
            </div>

            <div className="md:col-span-7 space-y-5 text-sm sm:text-base text-[#41413D] font-light leading-relaxed">
              <p>
                In the Bengali and Sanskrit lexicon, <strong className="font-medium text-[#292A28]">Kolpo (কল্প)</strong> denotes 
                imagination, deep conceptualization, the genesis of a grand design, and bringing an unmanifest vision into physical form. 
                It is the architecture of an idea before the first stone is laid.
              </p>
              <p>
                We intentionally paired this with <strong className="font-medium text-[#292A28]">House</strong>: designating an atelier, 
                an enduring sanctuary of craft, and a multidisciplinary guild. We are not a transactional marketing factory with 
                revolving-door accounts. We are a house of thinkers, filmmakers, designers, and commercial strategists who partner 
                with leaders to build enduring brands.
              </p>
              <div className="p-5 rounded-2xl border border-[#292A28]/15 bg-white/50 backdrop-blur-xs text-xs sm:text-sm font-serif-editorial italic text-[#292A28]">
                &ldquo;Rooted in Kolkata’s historic heritage of literature, philosophical enquiry, and cinema — infused with modern global digital velocity.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Dogma / Editorial Manifesto */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-[#292A28]/10 bg-[#F5F2EA]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#292A28]/15 bg-white/40 text-[10px] font-mono tracking-[0.25em] uppercase text-[#41413D]">
              <Sparkles className="w-3 h-3 text-[#292A28]" />
              <span>02 // THE STUDIO MANIFESTO</span>
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28] leading-[1.05]">
              WHAT WE STAND FOR
            </h2>
            <p className="text-sm sm:text-base text-[#41413D] font-light">
              Four fundamental tenets that govern every decision, client engagement, and creative output at KOLPO HOUSE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Tenet 1 */}
            <div className="p-7 sm:p-9 rounded-3xl border border-[#292A28]/15 bg-white/40 backdrop-blur-sm space-y-4 hover:shadow-sm transition-shadow">
              <div className="font-mono text-xs tracking-widest text-[#41413D]/60 uppercase">
                TENET 01 // PRINCIPLE OF ORDER
              </div>
              <div className="font-display-luxury text-2xl sm:text-3xl text-[#292A28]">
                STRATEGY BEFORE EXECUTION.
              </div>
              <p className="text-sm text-[#41413D] leading-relaxed font-light">
                Good content gets momentary attention. Good strategy gives it somewhere to build compounding equity. 
                Too much marketing exhausts itself chasing transient algorithmic micro-trends. We lay down rigorous foundations 
                before producing a single frame.
              </p>
            </div>

            {/* Tenet 2 */}
            <div className="p-7 sm:p-9 rounded-3xl border border-[#292A28]/15 bg-[#DDD8EA]/40 backdrop-blur-sm space-y-4 hover:shadow-sm transition-shadow">
              <div className="font-mono text-xs tracking-widest text-[#41413D]/60 uppercase">
                TENET 02 // PRINCIPLE OF AUTHENTICITY
              </div>
              <div className="font-display-luxury text-2xl sm:text-3xl text-[#292A28]">
                BRANDS SHOULD FEEL LIKE THEMSELVES.
              </div>
              <p className="text-sm text-[#41413D] leading-relaxed font-light">
                There is no universal formula for building a great brand. When an organization stops imitating market competitors 
                and speaks from its own innate authority, it becomes unshakeable. We uncover your irreducible DNA: People, 
                Personality, Ambition, and Story.
              </p>
            </div>

            {/* Tenet 3 */}
            <div className="p-7 sm:p-9 rounded-3xl border border-[#292A28]/15 bg-[#D5E2EA]/40 backdrop-blur-sm space-y-4 hover:shadow-sm transition-shadow">
              <div className="font-mono text-xs tracking-widest text-[#41413D]/60 uppercase">
                TENET 03 // PRINCIPLE OF VALUE
              </div>
              <div className="font-display-luxury text-2xl sm:text-3xl text-[#292A28]">
                COMPOUND EQUITY OVER VANISHING VIRALITY.
              </div>
              <p className="text-sm text-[#41413D] leading-relaxed font-light">
                A viral spike with no retention is commercial vanity. We architect media and brand assets designed to appreciate 
                in value over quarters and years, deepening customer loyalty and elevating gross margins over time.
              </p>
            </div>

            {/* Tenet 4 */}
            <div className="p-7 sm:p-9 rounded-3xl border border-[#292A28]/15 bg-[#E9D6CC]/40 backdrop-blur-sm space-y-4 hover:shadow-sm transition-shadow">
              <div className="font-mono text-xs tracking-widest text-[#41413D]/60 uppercase">
                TENET 04 // PRINCIPLE OF CRAFT
              </div>
              <div className="font-display-luxury text-2xl sm:text-3xl text-[#292A28]">
                RESPECT THE AUDIENCE’S INTELLIGENCE.
              </div>
              <p className="text-sm text-[#41413D] leading-relaxed font-light">
                Audiences are discerning, culturally savvy, and fatigued by condescending sales scripts. 
                We produce work of genuine beauty, narrative depth, and editorial distinction that earns respect and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Master Chapters (Pillars) */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-[#292A28]/10 bg-[#EEE9DE]/40">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#292A28]/15">
            <div>
              <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#41413D] mb-2">
                03 // CORE CAPABILITIES
              </div>
              <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28]">
                THE FOUR CHAPTERS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#41413D] max-w-md font-light">
              How KOLPO HOUSE integrates strategic clarity, artistic brilliance, editorial storytelling, and performance architecture under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {chapters.map((chap) => {
              const Icon = chap.icon;
              return (
                <div
                  key={chap.num}
                  className="p-7 sm:p-10 rounded-3xl border border-[#292A28]/15 bg-white/50 backdrop-blur-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
                  style={{ borderTop: `4px solid ${chap.accent}` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs tracking-widest text-[#41413D]/70">
                        {chap.num} {'//'} {chap.subtitle}
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center border border-[#292A28]/15"
                        style={{ backgroundColor: chap.accent }}
                      >
                        <Icon className="w-5 h-5 text-[#292A28]" />
                      </div>
                    </div>

                    <h3 className="font-display-luxury text-2xl sm:text-3xl text-[#292A28]">
                      {chap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#41413D] leading-relaxed font-light">
                      {chap.desc}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-[#292A28]/10">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#41413D]/60">
                      DELIVERABLES & ARTIFACTS
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#292A28]">
                      {chap.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#292A28]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Kolpo Thinks (Diagnostic Engine) */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-[#292A28]/10 bg-[#F5F2EA]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#41413D]">
              04 // DIAGNOSTIC INQUIRY
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28]">
              HOW KOLPO THINKS
            </h2>
            <p className="text-xs sm:text-sm text-[#41413D] max-w-lg mx-auto font-light">
              We interrogate every brand through four non-negotiable questions before executing.
            </p>
          </div>

          {/* Interactive Question Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 p-1.5 rounded-full bg-white/40 border border-[#292A28]/10 max-w-xl mx-auto backdrop-blur-xs">
            {(['who', 'why', 'what', 'how'] as const).map((qKey) => (
              <button
                key={qKey}
                type="button"
                onClick={() => setActiveQuestion(qKey)}
                className={`flex-1 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer ${
                  activeQuestion === qKey
                    ? 'bg-[#292A28] text-[#F5F2EA] shadow-xs'
                    : 'text-[#41413D] hover:text-[#292A28]'
                }`}
              >
                {diagnosticQuestions[qKey].title}
              </button>
            ))}
          </div>

          {/* Selected Question Card */}
          <motion.div
            key={activeQuestion}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl border border-[#292A28]/15 bg-white/60 backdrop-blur-md shadow-sm space-y-6"
          >
            <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[#41413D]/70 pb-4 border-b border-[#292A28]/10">
              <span>PHASE {diagnosticQuestions[activeQuestion].step}</span>
              <span>{diagnosticQuestions[activeQuestion].metric}</span>
            </div>

            <div className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#292A28] italic font-normal leading-tight">
              &ldquo;{diagnosticQuestions[activeQuestion].question}&rdquo;
            </div>

            <p className="text-sm sm:text-base text-[#41413D] font-light leading-relaxed pt-2">
              {diagnosticQuestions[activeQuestion].detail}
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Four Disciplines. One Team. */}
      <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-12 border-b border-[#292A28]/10 bg-[#DDD8EA]/20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#41413D]">
              05 // INTERNAL ORGANIZATION
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28]">
              FOUR DISCIPLINES. ONE TEAM.
            </h2>
            <p className="text-xs sm:text-sm text-[#41413D] font-light">
              Traditional agencies fracture creative ambition and operational reality. We unite both in an integrated guild.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((d, idx) => (
              <div
                key={d.title}
                className="p-6 rounded-2xl border border-[#292A28]/15 bg-white/60 backdrop-blur-xs flex flex-col justify-between min-h-[220px] hover:shadow-sm transition-all"
              >
                <div>
                  <div className="font-mono text-xs text-[#41413D]/60 mb-2">0{idx + 1} {'//'}</div>
                  <h3 className="font-display-luxury text-xl text-[#292A28] font-medium mb-1.5">
                    {d.title}
                  </h3>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#292A28]/70 mb-3">
                    {d.badge}
                  </div>
                </div>
                <p className="text-xs text-[#41413D] font-light leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model & How We Work */}
      <section className="py-20 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-[#292A28]/10 bg-[#F5F2EA]">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#41413D]">
            06 // PARTNERSHIP MODEL
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-5xl md:text-6xl text-[#292A28] leading-tight">
            BUILT AROUND YOUR BRAND
          </h2>
          <p className="text-sm sm:text-base text-[#41413D] font-light leading-relaxed max-w-2xl mx-auto">
            We partner with a strictly limited roster of founders, brands, and institutions each year. 
            No account executives in the middle, no opaque markups, no churn. 
            You work directly with senior creative directors and strategists who have skin in the outcome.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#292A28] text-[#F5F2EA] text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-[#41413D] shadow-md transition-all cursor-pointer"
            >
              INITIATE A DIALOGUE
            </button>
            <Link
              href="/#work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#292A28]/25 text-[#292A28] text-xs font-mono uppercase tracking-[0.2em] font-medium hover:bg-white/50 transition-all text-center"
            >
              EXPLORE ARCHIVAL WORK
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer mode="move" onOpenContact={() => setContactOpen(true)} />

      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
