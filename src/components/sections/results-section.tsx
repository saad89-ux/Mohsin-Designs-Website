'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: 500, label: 'Projects Completed', icon: CheckCircle, suffix: '+' },
    { number: 95, label: 'Client Satisfaction', icon: Users, suffix: '%' },
    { number: 12, label: 'Years Experience', icon: Clock, suffix: '+' },
    { number: 150, label: 'Active Clients', icon: Award, suffix: '+' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.result-number');
      
      counters.forEach((counter: any) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0');
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });
      });

      gsap.fromTo('.result-card', 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-[#f7f8fc] border-y border-[#0305a8]/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="result-card group rounded-2xl border border-[#0305a8]/10 bg-white p-8 shadow-sm transition-all hover:shadow-[0_0_30px_rgba(3,5,168,0.1)] hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-32 h-32 text-[#0305a8]" />
              </div>
              <div className="relative z-10">
                <stat.icon className="w-8 h-8 text-[#3b82f6] mb-4" />
                <div className="flex items-baseline gap-1 text-[#0305a8] mb-2">
                  <span className="result-number text-5xl font-bold tracking-tight" data-target={stat.number}>0</span>
                  <span className="text-3xl font-bold">{stat.suffix}</span>
                </div>
                <p className="font-medium text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
