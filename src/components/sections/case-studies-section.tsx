'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSwap, { Card } from '@/components/motion/card-swap';

gsap.registerPlugin(ScrollTrigger);

/* ─── Case study data ─── */
const CASES = [
  {
    category: 'E-Commerce',
    title: 'Redefining the Online Shopping Experience',
    result: '+300% Conversion',
    description: 'End-to-end platform rebuild using Next.js and headless commerce, resulting in a 3× lift in purchase conversion within 90 days.',
    href: '/portfolio/ecommerce',
    accentFrom: '#3B82F6',
    accentTo: '#6366F1',
    tag: 'Web · AI · Analytics',
  },
  {
    category: 'SaaS',
    title: 'Complete Brand Identity for a Tech Unicorn',
    result: '+150% Recognition',
    description: 'Full brand system design — logo, color theory, typography and motion guidelines — rolled out across 14 product surfaces.',
    href: '/portfolio/saas',
    accentFrom: '#8B5CF6',
    accentTo: '#EC4899',
    tag: 'Branding · Design · Motion',
  },
  {
    category: 'Healthcare',
    title: 'Technical SEO Campaign for Medical Group',
    result: '#1 Search Rankings',
    description: 'Deep site architecture audit, schema markup and Core Web Vitals optimisation drove the client to position 1 across 40 target keywords.',
    href: '/portfolio/healthcare',
    accentFrom: '#10B981',
    accentTo: '#0EA5E9',
    tag: 'SEO · Performance · Data',
  },
  {
    category: 'FinTech',
    title: 'AI-Powered Risk Analytics Dashboard',
    result: '60% Faster Decisions',
    description: 'Real-time ML pipeline and interactive BI dashboard that cut risk-assessment cycles from hours to minutes for a tier-1 lender.',
    href: '/portfolio/fintech',
    accentFrom: '#F59E0B',
    accentTo: '#EF4444',
    tag: 'ML · Data Eng · BI',
  },
  {
    category: 'Logistics',
    title: 'Smart Route Optimisation Platform',
    result: '22% Cost Reduction',
    description: 'Graph-based routing engine combined with predictive demand models saved a logistics firm millions in annual fleet expenditure.',
    href: '/portfolio/logistics',
    accentFrom: '#0EA5E9',
    accentTo: '#3B82F6',
    tag: 'ML · Cloud · Optimisation',
  },
];

const CARD_W = 560;
const CARD_H = 380;

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const swapWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading entrance */
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      /* Card-swap wrapper fade in */
      gsap.fromTo(
        swapWrapRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: swapWrapRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
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
      {/* ── Dot grid ── */}
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

      <div className="relative z-10 w-full">
        {/* ── Heading ── */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20 px-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9CA3AF] mb-4">
            Featured Work
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
            Case Studies That{' '}
            <span
              style={{
                backgroundColor: '#1B7EFC',
                color: '#ffffff',
                padding: '2px 20px 8px 20px',
                borderRadius: '20px',
                display: 'inline-block',
              }}
            >
              Drive Results
            </span>
          </h2>
          <p className="mt-6 text-[#9CA3AF] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We engineer solutions that deliver measurable business impact across every industry.
          </p>
        </div>

        {/* ── CardSwap centered, full width ── */}
        <div
          ref={swapWrapRef}
          className="flex items-center justify-center w-full"
          style={{ height: CARD_H + 160 }}
        >
          <CardSwap
            width={CARD_W}
            height={CARD_H}
            cardDistance={55}
            verticalDistance={65}
            delay={4500}
            pauseOnHover
            skewAmount={5}
            easing="elastic"
          >
            {CASES.map((c, i) => (
              <Card key={i} customClass="cursor-pointer group">
                {/* Card shell */}
                <div
                  className="w-full h-full flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(145deg, #1a1a1a 0%, #141414 55%, #0f0f0f 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.65)',
                  }}
                >
                  {/* Top gradient accent bar */}
                  <div
                    className="h-[3px] w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, ${c.accentFrom}, ${c.accentTo})` }}
                  />

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between px-9 py-8">
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{
                          color: c.accentFrom,
                          background: `${c.accentFrom}18`,
                          border: `1px solid ${c.accentFrom}30`,
                        }}
                      >
                        {c.category}
                      </span>
                      <span className="text-xs text-white/30 font-medium">{c.tag}</span>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4 tracking-tight">
                        {c.title}
                      </h3>
                      <p className="text-sm text-white/45 leading-relaxed mb-6">
                        {c.description}
                      </p>
                    </div>

                    {/* Bottom row */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-lg font-extrabold tracking-tight"
                        style={{
                          background: `linear-gradient(135deg, ${c.accentFrom}, ${c.accentTo})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {c.result}
                      </span>
                      <Link
                        href={c.href}
                        className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors duration-200"
                        onClick={e => e.stopPropagation()}
                      >
                        View Case
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom shimmer */}
                  <div
                    className="h-px w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, transparent, ${c.accentFrom}40, transparent)` }}
                  />
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-4 px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-colors duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
