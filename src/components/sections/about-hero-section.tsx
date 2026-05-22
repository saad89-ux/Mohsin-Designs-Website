'use client';

import { ArrowUpRight } from 'lucide-react';

export function AboutHeroSection() {
  return (
    <section className="relative isolate min-h-[70svh] overflow-hidden bg-background py-20 pt-40">
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.7]" />
      <div className="absolute inset-0 -z-10 noise opacity-40" />

      <div
        aria-hidden
        className="absolute -left-32 top-40 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.65 0.22 250 / 0.45), transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold text-[#0305a8] md:text-5xl lg:text-6xl">
            About Lumina Motion <span className="text-[#3b82f6]">Labs</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We are an award-winning digital agency dedicated to transforming brands
            through innovative design and strategic digital solutions.
          </p>
        </div>

        <div className="relative h-[400px] rounded-2xl border border-slate-100 bg-gradient-to-br from-[#0305a8]/5 to-blue-500/5 p-8 overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
          <div className="relative h-full rounded-xl bg-white border border-[#0305a8]/5 flex items-center justify-center shadow-inner">
            <div className="text-center">
              <div className="mb-4 text-6xl">🎯</div>
              <p className="text-gray-700 font-medium">Creative Excellence Since 2012</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
