'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Card data ─── */
const CARDS = [
  {
    metric: '500+', label: 'Projects Completed',
    description: 'Delivered 500+ projects across 30 countries — on time, every time, without compromise.',
    tag: 'Delivery Excellence', accentFrom: '#3B82F6', accentTo: '#6366F1',
  },
  {
    metric: '95%', label: 'Client Satisfaction',
    description: 'Our partners consistently rate us 5 stars for quality, speed, and communication.',
    tag: 'Client Experience', accentFrom: '#6366F1', accentTo: '#8B5CF6',
  },
  {
    metric: '12+', label: 'Years of Expertise',
    description: 'A decade-plus of building scalable AI systems and data pipelines for ambitious teams.',
    tag: 'Proven Track Record', accentFrom: '#0EA5E9', accentTo: '#3B82F6',
  },
  {
    metric: '3×', label: 'Average ROI',
    description: 'Clients report 3× average return on investment within the first year post-launch.',
    tag: 'Business Impact', accentFrom: '#8B5CF6', accentTo: '#EC4899',
  },
  {
    metric: '150+', label: 'Active Partners',
    description: 'From nimble startups to Fortune 500s, powering 150+ companies globally.',
    tag: 'Global Network', accentFrom: '#10B981', accentTo: '#0EA5E9',
  },
  {
    metric: '99.9%', label: 'Uptime Guaranteed',
    description: 'Mission-critical infrastructure with enterprise-grade reliability and 24/7 monitoring.',
    tag: 'Infrastructure', accentFrom: '#F59E0B', accentTo: '#EF4444',
  },
];

const N = CARDS.length;

/* ─── Slot animation config ─── */
// Card is positioned at left:50%, width≈58vw
// translateX is % of element width (58vw)
// left slot  → translateX(-82%): left edge ≈ 2vw  (touches screen left)
// center slot → translateX(-50%): perfectly centered
// right slot  → translateX(-18%): right edge ≈ 98vw (touches screen right)
const SLOTS = {
  'enter':  { x: '-130%', scale: 0.75, opacity: 0,   blur: 10, z: 0 },
  'left':   { x: '-82%',  scale: 0.86, opacity: 0.55, blur: 4,  z: 1 },
  'center': { x: '-50%',  scale: 1,    opacity: 1,   blur: 0,  z: 3 },
  'right':  { x: '-18%',  scale: 0.86, opacity: 0.55, blur: 4,  z: 1 },
  'exit':   { x: '48%',   scale: 0.75, opacity: 0,   blur: 10, z: 0 },
} as const;

type SlotKey = keyof typeof SLOTS;

function getSlot(cardIdx: number, focusIdx: number): SlotKey {
  const diff = ((cardIdx - focusIdx) + N) % N;
  if (diff === 0)     return 'center';
  if (diff === 1)     return 'right';
  if (diff === N - 1) return 'left';
  if (diff === 2)     return 'exit';
  if (diff === N - 2) return 'enter';
  return 'exit';
}

/* ─── Component ─── */
export function ResultsSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const [focusIdx, setFocusIdx]   = useState(0);
  const [inView,   setInView]     = useState(false);
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSlide = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      // decrement → left card becomes center
      setFocusIdx(p => (p - 1 + N) % N);
    }, 2000);
  }, []);

  const stopSlide = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => {
    if (inView) startSlide(); else stopSlide();
    return stopSlide;
  }, [inView, startSlide, stopSlide]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none reverse' } }
      );
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%', end: 'bottom 20%',
        onEnter:     () => setInView(true),
        onLeave:     () => setInView(false),
        onEnterBack: () => setInView(true),
        onLeaveBack: () => setInView(false),
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[#050505] font-sans"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0',
        }} />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-overlay bg-noise" />

      {/* Heading */}
      <div ref={headingRef} className="relative z-10 text-center mb-16 md:mb-20 px-6">
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">
          By the Numbers
        </p>
        <h2
          className="text-white font-black"
          style={{
            fontSize: 'clamp(40px, 4vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
          }}
        >
          Results That Speak{' '}
          <span
            style={{
              backgroundColor: '#1B7EFC',
              color: '#ffffff',
              padding: '2px 20px 8px 20px',
              borderRadius: '20px',
              display: 'inline-block',
            }}
          >
            For Themselves
          </span>
        </h2>
      </div>

      {/* ── Stacked Card Carousel ── */}
      <div
        className="relative w-full z-10"
        style={{ height: 420 }}
        onMouseEnter={stopSlide}
        onMouseLeave={() => inView && startSlide()}
      >
        {CARDS.map((card, idx) => {
          const slot = getSlot(idx, focusIdx);
          const s    = SLOTS[slot];
          const isVisible = slot !== 'exit' || true; // always render, just animate out

          return (
            <motion.div
              key={card.metric + card.label}
              animate={{
                x: s.x,
                scale: s.scale,
                opacity: s.opacity,
                filter: `blur(${s.blur}px)`,
                zIndex: s.z,
              }}
              transition={{ duration: 0.42, ease: [0.4, 0.0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                width: 'min(58vw, 680px)',
                height: 400,
                cursor: slot === 'left' ? 'pointer' : 'default',
              }}
              onClick={() => {
                if (slot === 'left')  setFocusIdx(p => (p - 1 + N) % N);
                if (slot === 'right') setFocusIdx(p => (p + 1) % N);
              }}
            >
              {/* Card body */}
              <div
                className="w-full h-full rounded-2xl flex flex-col justify-between overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg,#1a1a1a 0%,#141414 60%,#101010 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: slot === 'center'
                    ? '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.12)'
                    : '0 16px 40px rgba(0,0,0,0.4)',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full shrink-0"
                  style={{ background: `linear-gradient(90deg, ${card.accentFrom}, ${card.accentTo})` }}
                />

                {/* Content */}
                <div className="flex-1 px-10 py-8 flex flex-col justify-between">
                  {/* Tag */}
                  <span
                    className="self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
                    style={{
                      color: card.accentFrom,
                      background: `${card.accentFrom}18`,
                      border: `1px solid ${card.accentFrom}30`,
                    }}
                  >
                    {card.tag}
                  </span>

                  {/* Metric */}
                  <div>
                    <p
                      className="text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${card.accentFrom}, ${card.accentTo})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {card.metric}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-white/90 mb-3">
                      {card.label}
                    </p>
                    <p className="text-sm md:text-base text-white/45 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom shimmer line */}
                <div
                  className="h-px w-full shrink-0"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accentFrom}40, transparent)` }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-8">
        {CARDS.map((_, i) => {
          const active = i === focusIdx;
          return (
            <button
              key={i}
              onClick={() => setFocusIdx(i)}
              className="rounded-full transition-all duration-400"
              style={{
                width: active ? 28 : 8, height: 8,
                background: active
                  ? 'linear-gradient(90deg,#3B82F6,#60A5FA)'
                  : 'rgba(255,255,255,0.15)',
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
