'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import { MagneticButton } from '../motion/magnetic-button';
import { AmbientParticles } from '../three/ambient-particles';
import { easings } from '@/lib/motion/easings';
import { durations } from '@/lib/motion/durations';
import { staggers } from '@/lib/motion/staggers';
import herobg from '../../../app/public/images/robot-area.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── SSR-safe dynamic imports ─── */
const FloatingLines = dynamic(() => import('../three/floating-lines'), { ssr: false });

/* ─── Stats data ─── */
const stats = [
  { value: '500+', label: 'Projects Shipped' },
  { value: '95%', label: 'Client Retention' },
  { value: '12y', label: 'Experience' },
];

/* ─── Component ─── */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: easings.cinematic }, delay: 0.3 });

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 16, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: durations.medium }
      );

      tl.fromTo(headingRef.current,
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: durations.slow },
        '-=0.4'
      );

      tl.fromTo(paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: durations.medium },
        '-=0.6'
      );

      tl.fromTo(Array.from(ctaRef.current?.children ?? []),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: durations.medium, stagger: staggers.card },
        '-=0.4'
      );

      tl.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: durations.medium },
        '-=0.3'
      );

      tl.fromTo(robotRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: durations.dramatic, ease: 'power2.out' },
        '-=1.2'
      );

      /* ── Scroll parallax exit ── */
      gsap.to(contentRef.current, {
        y: -80, opacity: 0.3, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top', end: 'bottom top', scrub: 1.5,
        },
      });

      gsap.to(robotRef.current, {
        y: 60, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top', end: 'bottom top', scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #060d1a 50%, #0a1628 100%)' }}
    >
      {/* ═══ DOT GRID BACKGROUND ═══ */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.13) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />

      {/* ═══ AMBIENT GLOW LAYERS ═══ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top-left blue glow */}
        <div className="absolute" style={{
          top: '-15%', left: '-10%', width: '65%', height: '65%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,80,220,0.22) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }} />
        {/* Bottom-right glow */}
        <div className="absolute" style={{
          bottom: '-20%', right: '-5%', width: '55%', height: '55%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,60,180,0.18) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }} />
        {/* Right-center glow (behind robot) */}
        <div className="absolute" style={{
          top: '5%', right: '0%', width: '50%', height: '75%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,90,255,0.28) 0%, transparent 60%)',
          filter: 'blur(55px)',
        }} />
      </div>

      {/* FloatingLines — subtle */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.12]">
        <FloatingLines
          linesGradient={['#3B82F6', '#3B82F6', '#3B82F6']}
          enabledWaves={['top', 'bottom']}
          lineCount={[3, 2]}
          lineDistance={[6, 7]}
          animationSpeed={0.2}
          interactive={false}
          parallax={false}
          mixBlendMode="screen"
        />
      </div>

      {/* Ambient particles */}
      <AmbientParticles count={20} />

      {/* ═══ MAIN CONTENT ═══ */}
      <div
        ref={contentRef}
        className="relative z-10 w-full mx-auto px-14"
        style={{ maxWidth: 1280 }}
      >
        <div className="min-h-[100vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">

            {/* ── LEFT: Copy ── */}
            <div className="flex flex-col items-start">


              <h1
                ref={headingRef}
                className="text-white"
                style={{
                  fontSize: 'clamp(40px, 5vw, 62px)',
                  lineHeight: 1.06,
                  letterSpacing: '-0.03em',
                  marginTop: '150px',

                }}
              >
                <span className="text-white">
                  Transforming Data

                  into
                </span>{' '}

                <span
                  style={{

                     
                    color: '#ffffff',
                    padding: '2px 14px',
                    borderRadius: '14px',
                    display: 'inline-block',
                  
                  }}
                >
                  Decisions
                </span>
              </h1>

              {/* Subtext */}
              <p
                ref={paragraphRef}
                className="mt-5"
                style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: 430 }}
              >
                Leverage the power of machine learning and AI to unlock insights
                and drive business growth across your entire organization.
              </p>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton strength={0.25}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-bold text-white"
                    style={{
                      height: 52, padding: '0 28px', borderRadius: 12,
                      background: '#1E88FF', fontSize: 15,
                      boxShadow: '0 8px 28px rgba(30,136,255,0.38)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  >
                    {/* Calendar icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book a Meeting
                  </Link>
                </MagneticButton>

                <Link
                  href="/demo"
                  className="inline-flex items-center font-semibold"
                  style={{
                    height: 52, padding: '0 24px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.8)', fontSize: 15,
                    transition: 'background 0.2s',
                  }}
                >
                  Request Demo
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-7 flex items-center gap-3">
                <div className="flex" style={{ marginRight: 4 }}>
                  {[
                    { initials: 'AK', bg: 'linear-gradient(135deg,#f97316,#fb923c)' },
                    { initials: 'SR', bg: 'linear-gradient(135deg,#8b5cf6,#a78bfa)' },
                    { initials: 'MJ', bg: 'linear-gradient(135deg,#10b981,#34d399)' },
                  ].map((av) => (
                    <div
                      key={av.initials}
                      className="flex items-center justify-center text-white font-bold"
                      style={{
                        width: 34, height: 34, borderRadius: '50%',
                        border: '2.5px solid #000',
                        marginRight: -10,
                        background: av.bg,
                        fontSize: 11,
                      }}
                    >
                      {av.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-[2px] mb-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: '#F59E0B', fontSize: 13 }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                    Over <span className="text-white font-semibold">100+</span> clients have worked with us
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div ref={statsRef} className="mt-10 flex items-center gap-8">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    <div className="flex flex-col gap-1">
                      <span className="font-extrabold text-white" style={{ fontSize: 26, letterSpacing: '-0.03em' }}>
                        {s.value}
                      </span>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.02em' }}>
                        {s.label}
                      </span>
                    </div>
                    {i < stats.length - 1 && (
                      <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.1)' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Robot Visual ── */}
            <div ref={robotRef} className="relative flex items-center justify-center w-[110%]" style={{ padding: '60px 90px' }} >
              {/* Outer glow pulse */}
              <div className="absolute" style={{
                width: 440, height: 440, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(20,100,255,0.35) 0%, rgba(10,60,180,0.1) 45%, transparent 70%)',
                filter: 'blur(28px)',
                animation: 'heroGlowPulse 4s ease-in-out infinite',
              }} />
              {/* Inner floor glow */}
              <div className="absolute bottom-10" style={{
                width: 220, height: 80, borderRadius: '50%',
                background: 'rgba(0,120,255,0.25)',
                filter: 'blur(22px)',
              }} />
              {/* Robot image */}
              <img
                src={herobg.src}
                alt="AI Robot mascot"
                style={{
                  position: 'relative', zIndex: 2,
                  width: 520, height: '540px',
                  filter: 'drop-shadow(0 24px 48px rgba(0,100,255,0.45)) drop-shadow(0 8px 20px rgba(0,0,0,0.6))',
                  animation: 'heroFloat 1s ease-in-out nite',
                }}
              />
            </div>
            infi
          </div>
        </div>
      </div>

      {/* ═══ BOTTOM FADE ═══ */}
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to top, #000000, transparent)' }}
      />

      {/* ═══ KEYFRAMES ═══ */}
      <style jsx>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(0.82); }
        }
        @keyframes heroGlowPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.65; transform: scale(0.94); }
        }
      `}</style>
    </section>
  );
}