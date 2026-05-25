'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { easings } from '@/lib/motion/easings';
import { durations } from '@/lib/motion/durations';

gsap.registerPlugin(ScrollTrigger);

/* ─── Brand logos rendered as styled text with icon-like prefixes ─── */
const brands = [
  { name: 'Zapier', icon: '⚡' },
  { name: 'Spotify', icon: '●' },
  { name: 'zoom', icon: '' },
  { name: 'Slack', icon: '⊞' },
  { name: 'amazon', icon: '' },
  { name: 'Adobe', icon: '▲' },
  { name: 'Notion', icon: '■' },
  { name: 'Figma', icon: '◆' },
  { name: 'Stripe', icon: '⬡' },
  { name: 'Dropbox', icon: '◇' },
];

export function TrustedBrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: durations.medium,
          ease: easings.smooth,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderBrand = (brand: (typeof brands)[number], idx: number, prefix: string) => (
    <div
      key={`${prefix}-${idx}`}
      className="flex items-center gap-2 px-8 md:px-12 shrink-0 select-none"
    >
      {brand.icon && (
        <span className="text-white/25 text-lg">{brand.icon}</span>
      )}
      <span
        className="text-xl md:text-2xl font-semibold tracking-wide text-white/30 hover:text-white/60 transition-colors duration-300 whitespace-nowrap"
        style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
      >
        {brand.name}
      </span>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 overflow-hidden bg-[#050505] font-sans"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0',
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-overlay bg-noise" />

      {/* Top subtle divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(59,130,246,0.15) 50%, rgba(255,255,255,0.06) 70%, transparent 100%)',
        }}
      />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 mb-10 text-center">
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9CA3AF]">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Marquee container with fade-out edges */}
      <div
        className="relative z-10"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        {/* Single continuous marquee row */}
        <div className="flex w-max animate-[marqueeScroll_35s_linear_infinite]">
          {/* First set */}
          {brands.map((b, i) => renderBrand(b, i, 'a'))}
          {/* Duplicate for seamless loop */}
          {brands.map((b, i) => renderBrand(b, i, 'b'))}
          {/* Third copy ensures no gap on very wide screens */}
          {brands.map((b, i) => renderBrand(b, i, 'c'))}
        </div>
      </div>

      {/* Bottom subtle divider line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(59,130,246,0.12) 50%, rgba(255,255,255,0.06) 70%, transparent 100%)',
        }}
      />

      {/* Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}} />
    </section>
  );
}
