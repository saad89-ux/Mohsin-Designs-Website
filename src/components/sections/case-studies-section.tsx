'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const cases = [
    {
      category: 'E-commerce',
      title: 'Redefining the online shopping experience',
      result: '+300% Conversion',
      href: '/portfolio/ecommerce',
      color: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      category: 'SaaS',
      title: 'Complete brand identity for a tech unicorn',
      result: '+150% Recognition',
      href: '/portfolio/saas',
      color: 'from-purple-500/10 to-pink-500/10',
    },
    {
      category: 'Healthcare',
      title: 'Technical SEO campaign for medical group',
      result: '#1 Search Rankings',
      href: '/portfolio/healthcare',
      color: 'from-teal-500/10 to-emerald-500/10',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.case-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0305a8] md:text-4xl lg:text-5xl mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600">
              We don't just create beautiful designs; we engineer solutions that deliver measurable business impact.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0305a8]/20 text-[#0305a8] font-semibold hover:bg-[#0305a8]/5 transition-colors shrink-0"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <Link key={i} href={item.href} className="case-card group block">
              <div className={`relative aspect-[4/5] rounded-2xl bg-gradient-to-br ${item.color} border border-slate-100 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#0305a8]/20`}>
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#0305a8]/10 text-xs font-semibold text-[#0305a8]">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white border border-[#0305a8]/10 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#0305a8]" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="mb-6 h-[1px] w-0 bg-[#0305a8]/20 group-hover:w-full transition-all duration-500" />
                  <h3 className="text-2xl font-bold text-[#0305a8] mb-4 group-hover:-translate-y-2 transition-transform duration-300">{item.title}</h3>
                  <div className="inline-block bg-white px-4 py-2 rounded-lg border border-[#0305a8]/10 text-sm font-bold text-[#3b82f6] shadow-sm transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                    {item.result}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
