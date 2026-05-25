'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../motion/blur-text';
import BorderGlow from '../motion/border-glow';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content-inner',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-32 overflow-hidden bg-[#050505] font-sans"
    >
      {/* ── Dot grid background ── */}
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

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Interactive BorderGlow Card Wrapper */}
        <BorderGlow
          edgeSensitivity={40}
          glowColor="220 80 60"
          backgroundColor="#0a0a0e"
          borderRadius={32}
          glowRadius={60}
          glowIntensity={0.8}
          coneSpread={30}
          animated={true}
          colors={['#1B7EFC', '#3B82F6', '#60A5FA']}
          className="w-full shadow-2xl"
        >
          <div className="cta-content-inner relative p-10 md:p-20 text-center flex flex-col items-center">
            {/* Inner accent glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#1B7EFC] blur-[100px] opacity-[0.1] pointer-events-none" />

            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[#9CA3AF] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm shadow-xl relative z-10">
              <Sparkles className="w-4 h-4 text-[#1B7EFC]" />
              <span>Initiate Project</span>
            </div>

            {/* Animated Title Text */}
            <div className="min-h-[100px] md:min-h-[140px] flex items-center justify-center relative z-10 w-full">
              <BlurText
                text="Ready to create something extraordinary?"
                className="font-black tracking-tight text-white justify-center text-center leading-[1.05] w-full max-w-4xl text-[clamp(40px,4vw,56px)]"
                delay={100}
                animateBy="words"
                direction="bottom"
              />
            </div>
            
            <p className="mb-12 mx-auto max-w-2xl text-lg md:text-xl text-[#9CA3AF] font-medium leading-relaxed mt-4 relative z-10">
              Join the industry leaders who have already transformed their digital presence and scaled their revenue with Lumina.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row justify-center w-full sm:w-auto relative z-20">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_8px_20px_rgba(27,126,252,0.3)] overflow-hidden"
                style={{ background: '#1B7EFC' }}
              >
                {/* Button shimmer effect hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Start Your Project</span>
                <ArrowUpRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
