'use client';

import { useEffect, useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Testimonial data ─── */
const TESTIMONIALS = [
  {
    quote: 'Lumina transformed our brand identity and increased qualified leads by 300%. Their team is relentlessly professional and creative.',
    author: 'Sarah Johnson',
    role: 'CEO, TechCorp Inc.',
    rating: 5,
    accentFrom: '#3B82F6',
    accentTo: '#6366F1',
    initials: 'SJ',
  },
  {
    quote: 'The website they built is blazing fast, beautifully designed, and converts like crazy. Best investment we made all year.',
    author: 'Michael Chen',
    role: 'Founder, Digital Solutions',
    rating: 5,
    accentFrom: '#8B5CF6',
    accentTo: '#EC4899',
    initials: 'MC',
  },
  {
    quote: 'Our SEO rankings shot to position 1 across 40 keywords within 3 months. The team really knows their craft.',
    author: 'Emma Williams',
    role: 'Marketing Director, Global Brands',
    rating: 5,
    accentFrom: '#10B981',
    accentTo: '#0EA5E9',
    initials: 'EW',
  },
  {
    quote: 'A truly world-class agency. Every deliverable came on time and exceeded our expectations — no exceptions.',
    author: 'David Miller',
    role: 'COO, NextGen Startup',
    rating: 5,
    accentFrom: '#0EA5E9',
    accentTo: '#3B82F6',
    initials: 'DM',
  },
  {
    quote: 'The logo animation they created is stunning. It instantly elevated the premium feel across all of our video content.',
    author: 'Jessica Lee',
    role: 'Content Director',
    rating: 5,
    accentFrom: '#F59E0B',
    accentTo: '#EF4444',
    initials: 'JL',
  },
];

const N = TESTIMONIALS.length;

/* ─── Component ─── */
export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [order, setOrder]       = useState<number[]>(Array.from({ length: N }, (_, i) => i));
  const [isFlipping, setFlipping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Auto-flip every 3.5 s ── */
  const handleNext = () => {
    if (isFlipping) return;
    setFlipping(true);
    setTimeout(() => {
      setOrder(prev => { const next = [...prev]; next.push(next.shift()!); return next; });
      setFlipping(false);
    }, 420);
  };

  const handlePrev = () => {
    if (isFlipping) return;
    setFlipping(true);
    setTimeout(() => {
      setOrder(prev => { const next = [...prev]; next.unshift(next.pop()!); return next; });
      setFlipping(false);
    }, 420);
  };

  useEffect(() => {
    timerRef.current = setInterval(handleNext, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  /* ── GSAP heading entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );
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

      <div className="relative z-10 w-full px-6">
        {/* ── Heading ── */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">
            Success Stories
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
            What Our{' '}
            <span
              style={{
                backgroundColor: '#1B7EFC',
                color: '#ffffff',
                padding: '2px 20px 8px 20px',
                borderRadius: '20px',
                display: 'inline-block',
              }}
            >
              Partners Say
            </span>
          </h2>
          <p className="mt-6 text-[#9CA3AF] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            See how we've helped ambitious companies compound their digital growth and brand value.
          </p>
        </div>

        {/* ── Stacked card deck ── */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{ width: '100%', maxWidth: 680, height: 310 }}
          onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
          onMouseLeave={() => { timerRef.current = setInterval(handleNext, 3500); }}
        >
          {order.map((tIdx, posIdx) => {
            if (posIdx > 2) return null;
            const t      = TESTIMONIALS[tIdx];
            const isFront  = posIdx === 0;
            const isMid    = posIdx === 1;

            return (
              <motion.div
                key={tIdx}
                onClick={isFront ? handleNext : undefined}
                animate={{
                  scale:   isFront ? (isFlipping ? 0.9 : 1) : isMid ? 0.94 : 0.88,
                  y:       isFront ? (isFlipping ? -20 : 0)  : isMid ? 18   : 36,
                  x:       isFront && isFlipping ? 220 : 0,
                  rotate:  isFront && isFlipping ? 8   : 0,
                  opacity: isFront ? (isFlipping ? 0 : 1) : isMid ? 0.7 : 0.4,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                style={{ zIndex: 10 - posIdx, cursor: isFront ? 'pointer' : 'default' }}
                className="absolute w-full"
              >
                {/* Card */}
                <div
                  className="w-full rounded-2xl flex flex-col justify-between overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, #1c1c1c 0%, #161616 55%, #111111 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isFront
                      ? `0 28px 70px rgba(0,0,0,0.6), 0 0 0 1px ${t.accentFrom}20`
                      : '0 14px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Top accent bar */}
                  <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${t.accentFrom}, ${t.accentTo})` }} />

                  <div className="px-8 py-7">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm md:text-base text-white/80 leading-relaxed italic mb-7">
                      "{t.quote}"
                    </blockquote>

                    {/* Author row */}
                    <div className="flex items-center gap-4 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                      {/* Avatar */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                        style={{ background: `linear-gradient(135deg, ${t.accentFrom}, ${t.accentTo})` }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{t.author}</p>
                        <p className="text-xs text-white/40 mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom shimmer */}
                  <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${t.accentFrom}40, transparent)` }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => {
              const active = order[0] === i;
              return (
                <button
                  key={i}
                  onClick={() => {
                    const newOrder = [i, ...Array.from({ length: N }, (_, j) => j).filter(j => j !== i)];
                    setOrder(newOrder);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active ? 24 : 8, height: 8,
                    background: active ? 'linear-gradient(90deg,#3B82F6,#60A5FA)' : 'rgba(255,255,255,0.15)',
                  }}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
