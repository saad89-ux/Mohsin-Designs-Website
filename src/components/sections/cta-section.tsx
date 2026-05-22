'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white px-6">
      <div className="mx-auto max-w-5xl">
        <div className="cta-content relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0305a8] to-[#1e3a8a] p-12 md:p-20 text-center shadow-2xl">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
              <span className="text-[#fff35c]">Ready to create something</span> <span className="text-white">extraordinary?</span>
            </h2>
            <p className="mb-10 mx-auto max-w-2xl text-xl text-blue-100">
              Join the industry leaders who have already transformed their digital presence with Lumina Motion Labs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#fff35c] px-8 py-4 font-bold text-[#0305a8] transition-all hover:bg-white hover:scale-105"
              >
                Start Your Project
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
