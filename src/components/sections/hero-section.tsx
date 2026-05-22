'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MagneticButton } from '../motion/magnetic-button';
import { AmbientParticles } from '../three/ambient-particles';
import { easings } from '@/lib/motion/easings';
import { durations } from '@/lib/motion/durations';
import { staggers } from '@/lib/motion/staggers';

gsap.registerPlugin(ScrollTrigger);

/* ─── SSR-safe dynamic imports ─── */
const InteractiveGlobe = dynamic(() => import('../three/interactive-globe'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const FloatingLines = dynamic(() => import('../three/floating-lines'), {
  ssr: false,
});

/* ─── Stats data ─── */
const stats = [
  { value: 500, suffix: '+', label: 'Projects Shipped' },
  { value: 95, suffix: '%', label: 'Client Retention' },
  { value: 12, suffix: 'y', label: 'Experience' },
];

/* ─── Component ─── */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const globeColRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Master entrance timeline ── */
      const tl = gsap.timeline({
        defaults: { ease: easings.cinematic },
        delay: 0.3,
      });

      // 1. Eyebrow reveal
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 16, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: durations.medium }
      );

      // 2. Heading — word-by-word blur-to-clear stagger
      const words = headingRef.current?.querySelectorAll('.hero-word') || [];
      tl.fromTo(
        words,
        { opacity: 0, y: 50, filter: 'blur(12px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: durations.slow,
          stagger: staggers.word * 1.5,
        },
        '-=0.5'
      );

      // 3. Paragraph reveal
      tl.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: durations.medium },
        '-=0.7'
      );

      // 4. CTA buttons
      const ctaChildren = ctaRef.current?.children || [];
      tl.fromTo(
        ctaChildren,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: durations.medium, stagger: staggers.card },
        '-=0.5'
      );

      // 5. Stats counter
      const statEls = statsRef.current?.children || [];
      tl.fromTo(
        statEls,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: durations.medium, stagger: staggers.card },
        '-=0.5'
      );

      // Animate stat numbers from 0
      const counters = statsRef.current?.querySelectorAll('.stat-num') || [];
      counters.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        gsap.fromTo(
          el,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: durations.dramatic,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            delay: 1.2,
          }
        );
      });

      // 6. Globe fade-in
      tl.fromTo(
        globeColRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: durations.dramatic, ease: 'power2.out' },
        '-=1.4'
      );

      /* ── Scroll parallax exit ── */
      gsap.to(contentRef.current, {
        y: -80,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(globeColRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
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
      style={{ background: 'linear-gradient(160deg, #0a1628 0%, #050914 40%, #0b0d1a 100%)' }}
    >
      {/* ═══ BACKGROUND LAYERS ═══ */}

      {/* Radial ambient lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-[#1e3a8a] opacity-[0.07] blur-[120px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[60%] h-[70%] rounded-full bg-[#3b82f6] opacity-[0.05] blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#fff35c] opacity-[0.02] blur-[80px]" />
      </div>

      {/* Subtle animated grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)',
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay bg-noise" />

      {/* FloatingLines shader — very subtle, screen blend */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]">
        <FloatingLines
          linesGradient={['#3b82f6', '#6366f1', '#1e3a8a']}
          enabledWaves={['top', 'bottom']}
          lineCount={[4, 3]}
          lineDistance={[5, 6]}
          animationSpeed={0.25}
          interactive={false}
          parallax={false}
          mixBlendMode="screen"
        />
      </div>

      {/* Ambient particles */}
      <AmbientParticles count={25} />

      {/* ═══ CONTENT ═══ */}
      <div ref={contentRef} className="relative z-10 mx-auto max-w-[1360px] w-full px-6 sm:px-8 lg:px-12 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="mb-8 flex items-center gap-3 opacity-0"
            >
              <span className="block w-10 h-px bg-gradient-to-r from-[#fff35c] to-[#fff35c]/0" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Award-Winning Digital Agency · 2026
              </span>
            </div>

            {/* Giant Heading */}
            <h1
              ref={headingRef}
              className="mb-8 flex flex-wrap gap-x-[0.3em] gap-y-1 text-[clamp(2.8rem,6vw,7rem)] font-black leading-[0.92] tracking-[-0.03em] text-white"
              style={{ willChange: 'transform' }}
            >
              {/* Each word wrapped for stagger — overflow hidden clips the blur reveal */}
              <span className="overflow-hidden inline-flex"><span className="hero-word inline-block opacity-0">We</span></span>
              <span className="overflow-hidden inline-flex"><span className="hero-word inline-block opacity-0">engineer</span></span>
              <span className="overflow-hidden inline-flex">
                <span className="hero-word inline-block opacity-0 text-[#fff35c] relative">
                  brands
                  {/* Subtle glow behind highlighted word */}
                  <span className="absolute inset-0 bg-[#fff35c] blur-[40px] opacity-[0.12] pointer-events-none rounded-full" />
                </span>
              </span>
              <span className="overflow-hidden inline-flex"><span className="hero-word inline-block opacity-0">that</span></span>
              <span className="overflow-hidden inline-flex"><span className="hero-word inline-block opacity-0">dominate</span></span>
              <span className="overflow-hidden inline-flex">
                <span className="hero-word inline-block opacity-0 text-white/40">search.</span>
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p
              ref={paragraphRef}
              className="mb-12 max-w-[480px] text-[1.05rem] md:text-lg leading-[1.75] text-white/50 font-medium opacity-0"
            >
              We architect premium digital experiences — SaaS-grade frontends,
              cinematic motion systems, and data-driven growth pipelines
              engineered for measurable dominance.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-5 mb-14">
              <MagneticButton strength={0.25}>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-[15px] font-bold text-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.6)]"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)',
                  }}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowUpRight className="relative z-10 h-[18px] w-[18px] text-[#fff35c] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {/* Hover overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm px-8 py-4 text-[15px] font-semibold text-white/70 transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                >
                  View Case Studies
                </Link>
              </MagneticButton>
            </div>

            {/* Stats / Trust Indicators */}
            <div ref={statsRef} className="flex gap-10 md:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="opacity-0">
                  <div className="flex items-baseline gap-0.5 text-white">
                    <span
                      className="stat-num text-3xl md:text-4xl font-black tabular-nums"
                      data-target={stat.value}
                    >
                      0
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-[#fff35c]/80">{stat.suffix}</span>
                  </div>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Globe ─── */}
          <div
            ref={globeColRef}
            className="lg:col-span-5 relative w-full flex items-center justify-center opacity-0"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Ambient glow behind globe */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] rounded-full bg-[#1e3a8a] opacity-[0.08] blur-[80px]" />
            </div>

            {/* Globe container */}
            <div className="relative w-full aspect-square max-w-[520px] lg:max-w-none">
              <InteractiveGlobe />
            </div>

            {/* Single floating stat chip — restrained, not cluttered */}
            <motion.div
              className="absolute top-[12%] right-[5%] z-20 hidden lg:block pointer-events-none"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' } as const}
            >
              <div className="rounded-xl border border-white/[0.06] bg-[#0a1628]/70 backdrop-blur-xl px-4 py-3 shadow-2xl">
                <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-white/30 mb-1">Lighthouse</span>
                <span className="flex items-center gap-2 text-sm font-black text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                  100 / 100
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ═══ BOTTOM GRADIENT FADE ═══ */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-20"
        style={{ background: 'linear-gradient(to top, #050914, transparent)' }}
      />
    </section>
  );
}
