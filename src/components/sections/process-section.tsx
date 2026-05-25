'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Activity, CheckCircle2, Terminal } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery & Analytics Audit',
    desc: 'Deep technical analysis of your infrastructure, competitive landscape, and audience behavioral data to inform the structural roadmap.',
    deliverables: ['Performance Baseline Report', 'Audience Cohort Mapping', 'Tech Stack Evaluation'],
    accent: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/20',
  },
  {
    id: '02',
    title: 'Architecture & UX Blueprint',
    desc: 'We engineer the skeleton of your digital product, focusing on high-conversion funnels, rapid indexing, and intuitive user flows.',
    deliverables: ['Wireframe Schematics', 'Information Architecture', 'Conversion Funnel Mapping'],
    accent: 'from-purple-500 to-pink-500',
    shadow: 'shadow-purple-500/20',
  },
  {
    id: '03',
    title: 'High-Fidelity Visual Design',
    desc: 'Applying striking, brand-aligned aesthetics with modular component systems and cinematic motion guidelines.',
    deliverables: ['Interactive Prototypes', 'Global Design System', 'Motion Graphics Storyboard'],
    accent: 'from-pink-500 to-rose-400',
    shadow: 'shadow-pink-500/20',
  },
  {
    id: '04',
    title: 'Frontend & WebGL Engineering',
    desc: 'Translating designs into ultra-performant React architectures with custom WebGL shaders and headless API integrations.',
    deliverables: ['Next.js App Router Codebase', 'Custom Three.js Shaders', 'Headless CMS Integration'],
    accent: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/20',
  },
  {
    id: '05',
    title: 'QA & Lighthouse Tuning',
    desc: 'Rigorous automated testing, security auditing, and extreme performance tuning to guarantee 100/100 Core Web Vitals.',
    deliverables: ['Lighthouse 100/100 Certification', 'Cross-Device QA Report', 'Security Hardening'],
    accent: 'from-amber-400 to-orange-500',
    shadow: 'shadow-amber-500/20',
  },
  {
    id: '06',
    title: 'Deployment & Scaling',
    desc: 'Zero-downtime deployment pipelines with real-time monitoring, ensuring your infrastructure scales automatically with traffic surges.',
    deliverables: ['Zero-Downtime Launch', 'Analytics Dashboard Setup', 'CI/CD Pipeline Integration'],
    accent: 'from-indigo-500 to-blue-600',
    shadow: 'shadow-indigo-500/20',
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });



  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] font-sans text-white selection:bg-blue-500/30"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0',
        }} />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-overlay bg-noise" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* TOP SECTION: Heading */}
        <div className="mb-24 pt-24 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h2
              className="text-white font-black mx-auto mb-8"
              style={{
                fontSize: 'clamp(40px, 4vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#ffffff',
              }}
            >
              Engineered{' '}
              <span
                style={{
                  backgroundColor: '#1B7EFC',
                  color: '#ffffff',
                  padding: '2px 20px 8px 20px',
                  borderRadius: '20px',
                  display: 'inline-block',
                }}
              >
                to Perform
              </span>
            </h2>

            <p className="text-lg text-[#9CA3AF] font-medium leading-relaxed max-w-2xl mx-auto text-center">
              We don't just build websites. We deploy high-performance digital engines engineered to dominate search rankings and maximize conversion rates.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center relative pb-32">

          {/* Scrollable Cards Column - Centered */}
          <div className="w-full max-w-5xl pt-8 lg:pt-16 lg:pb-24 relative z-20 mx-auto">
            <div className="flex flex-col gap-24 lg:gap-32">
              {steps.map((step, index) => (
                <ProcessCard key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }: { step: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Card local scroll progress
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 85%', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(12px)', 'blur(0px)']);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y, filter: blur }}
      className={`relative group rounded-[2rem] border border-white/5 bg-[#0a0f1c]/80 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-2xl ${step.shadow}`}
    >
      {/* Dynamic Glow Background */}
      <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${step.accent} rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* Card Header */}
      <div className="flex items-center justify-start mb-8 relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shadow-lg`}>
          <Activity className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-br ${step.accent}`} style={{ color: 'white' }} />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
          {step.title}
        </h3>

        <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
          {step.desc}
        </p>

        {/* Deliverables List */}
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-slate-400" />
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest">
              Core Deliverables
            </h4>
          </div>

          <ul className="flex flex-col gap-3">
            {step.deliverables.map((item: string, i: number) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                viewport={{ once: true, margin: '-50px' }}
                className="flex items-start gap-3 text-slate-400 font-medium"
              >
                <CheckCircle2 className={`w-5 h-5 shrink-0 text-transparent bg-clip-text bg-gradient-to-br ${step.accent}`} style={{ color: 'white' }} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
