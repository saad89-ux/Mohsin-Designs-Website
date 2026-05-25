'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { easings } from '@/lib/motion/easings';
import { durations } from '@/lib/motion/durations';

gsap.registerPlugin(ScrollTrigger);

/* ─── Service data ─── */
const services = [
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with our advanced ML models.',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #1a5c2e 0%, #2d8a4e 40%, #e74c3c 60%, #f1c40f 80%, #e67e22 100%)',
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance on implementing AI solutions for your business needs.',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #F59E0B 100%)',
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure for ML operations.',
    icon: '🗄️',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #94A3B8 100%)',
  },
  {
    title: 'Machine Learning',
    description: 'Custom ML model development and deployment for production-grade systems.',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F43F5E 100%)',
  },
  {
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure design optimized for AI/ML workloads.',
    icon: '☁️',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #6366F1 100%)',
  },
  {
    title: 'Data Visualization',
    description: 'Interactive dashboards and real-time analytics for actionable insights.',
    icon: '📈',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)',
  },
  {
    title: 'NLP Solutions',
    description: 'Natural language processing for chatbots, sentiment analysis, and text mining.',
    icon: '💬',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #EC4899 100%)',
  },
  {
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and visual AI for enterprise applications.',
    icon: '👁️',
    gradient: 'linear-gradient(135deg, #14B8A6 0%, #0EA5E9 50%, #6366F1 100%)',
  },
];

const VISIBLE_COUNT = 3;
const AUTO_SLIDE_INTERVAL = 2000; // ms

/* ─── Component ─── */
export function ServicesOverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Get the 3 visible cards ── */
  const getVisibleCards = useCallback(() => {
    const cards = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const idx = (currentIndex + i) % services.length;
      cards.push({ ...services[idx], originalIndex: idx });
    }
    return cards;
  }, [currentIndex]);

  /* ── Auto-slide logic ── */
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, AUTO_SLIDE_INTERVAL);
  }, []);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  /* ── Start/stop auto-slide based on viewport visibility ── */
  useEffect(() => {
    if (isInView) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
    return () => stopAutoSlide();
  }, [isInView, startAutoSlide, stopAutoSlide]);

  /* ── GSAP scroll-triggered entrance + viewport observer ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading entrance */
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: durations.slow,
          ease: easings.smooth,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      /* Track in-view state for auto-slide */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        onEnter: () => setIsInView(true),
        onLeave: () => setIsInView(false),
        onEnterBack: () => setIsInView(true),
        onLeaveBack: () => setIsInView(false),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const visibleCards = getVisibleCards();
  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#050505] font-sans"
    >
      {/* ── Background dot grid ── */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ── Section heading ── */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
          <h2
            className="text-white font-black"
            style={{
              fontSize: 'clamp(40px, 4vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            Our Ultimate Set of Services
            <br />
            for Your Ideas Implementation
          </h2>
        </div>

        {/* ── Auto-sliding cards ── */}
        <div
          className="relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={() => isInView && startAutoSlide()}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((service, i) => (
                <motion.div
                  key={`${service.title}-${currentIndex}-${i}`}
                  initial={{ opacity: 0, x: 120, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -120, scale: 0.92 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: i * 0.08,
                  }}
                  className="group"
                >
                  {/* Card */}
                  <div
                    className="relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
                    style={{
                      background: 'linear-gradient(145deg, #111111 0%, #0a0a0a 100%)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Hover border glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(145deg, rgba(27,126,252,0.12), transparent 60%)',
                      }}
                    />

                    {/* ── Icon / illustration area ── */}
                    <div
                      className="relative flex items-center justify-center py-14 md:py-16 overflow-hidden"
                    >
                      {/* Soft background gradient glow */}
                      <div
                        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ background: service.gradient, filter: 'blur(40px)' }}
                      />

                      {/* Icon */}
                      <div
                        className="relative z-10 text-7xl md:text-8xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                        style={{
                          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.5))',
                        }}
                      >
                        {service.icon}
                      </div>
                    </div>

                    {/* ── Card info ── */}
                    <div className="relative z-10 px-7 pb-8 pt-2 text-center">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-[15px] text-[#9CA3AF] leading-[1.8]">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out mx-auto"
                      style={{ background: 'linear-gradient(90deg, transparent, #1B7EFC, transparent)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ── Progress dots ── */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {services.map((_, idx) => {
              const isActive =
                idx >= currentIndex && idx < currentIndex + VISIBLE_COUNT
                  ? true
                  : currentIndex + VISIBLE_COUNT > services.length &&
                    idx < (currentIndex + VISIBLE_COUNT) % services.length;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: isActive ? 24 : 8,
                    height: 8,
                    background: isActive
                      ? '#1B7EFC'
                      : 'rgba(255,255,255,0.15)',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
