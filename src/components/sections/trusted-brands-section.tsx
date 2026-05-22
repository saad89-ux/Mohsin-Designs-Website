'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { easings } from '@/lib/motion/easings';
import { durations } from '@/lib/motion/durations';

gsap.registerPlugin(ScrollTrigger);

export function TrustedBrandsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const topBrands = ['Google', 'Microsoft', 'Adobe', 'Spotify', 'Airbnb'];
  const bottomBrands = ['Netflix', 'Stripe', 'Figma', 'Tesla', 'Apple'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: durations.medium,
          ease: easings.smooth,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden border-b border-[#0305a8]/5">
      <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
        <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Trusted by Industry Leaders</h2>
      </div>

      <div className="relative flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Top Marquee */}
        <div className="flex w-[200%] animate-[marquee_30s_linear_infinite]">
          <div className="flex w-1/2 justify-around items-center">
            {topBrands.map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-[#0305a8]/20 hover:text-[#0305a8]/40 transition-colors px-8">
                {brand}
              </span>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center">
            {topBrands.map((brand, i) => (
              <span key={`dup-${i}`} className="text-2xl md:text-4xl font-bold text-[#0305a8]/20 hover:text-[#0305a8]/40 transition-colors px-8">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Marquee (Reverse) */}
        <div className="flex w-[200%] animate-[marquee_35s_linear_infinite_reverse]">
          <div className="flex w-1/2 justify-around items-center">
            {bottomBrands.map((brand, i) => (
              <span key={i} className="text-2xl md:text-4xl font-bold text-[#0305a8]/20 hover:text-[#0305a8]/40 transition-colors px-8">
                {brand}
              </span>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center">
            {bottomBrands.map((brand, i) => (
              <span key={`dup-${i}`} className="text-2xl md:text-4xl font-bold text-[#0305a8]/20 hover:text-[#0305a8]/40 transition-colors px-8">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
