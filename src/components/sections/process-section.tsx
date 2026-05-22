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

  // Calculate dynamic active step (1 to 6) based on scroll progress
  // progress goes from 0 to 1. There are 6 steps.
  const activeStepRaw = useTransform(scrollYProgress, [0, 1], [1, 6.99]);
  
  // Create a height transform for the vertical progress bar
  const progressBarHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#050914] text-white selection:bg-blue-500/30"
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#0305a8]/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start relative pb-32">
          
          {/* LEFT: Sticky Column */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-0 pt-24 lg:pt-40 lg:h-screen flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Execution Protocol</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 tracking-tight leading-[1.05] mb-6">
                Engineered<br />to Perform.
              </h2>
              
              <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-md mb-12">
                We don't just build websites. We deploy high-performance digital engines engineered to dominate search rankings and maximize conversion rates.
              </p>

              {/* Progress Indicator */}
              <div className="hidden lg:flex items-start gap-8">
                {/* Vertical Track */}
                <div className="relative w-1.5 h-64 bg-slate-800/50 rounded-full overflow-hidden">
                  <motion.div 
                    style={{ height: progressBarHeight }}
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                  />
                </div>
                
                {/* Dynamic Step Display */}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Current Phase</span>
                  <div className="text-7xl font-black tabular-nums text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-600">
                    <motion.span>
                      {useTransform(activeStepRaw, (v) => `0${Math.floor(v)}`)}
                    </motion.span>
                    <span className="text-3xl text-slate-700">/06</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Scrollable Cards Column */}
          <div className="w-full lg:w-7/12 pt-16 lg:pt-40 lg:pb-40 relative z-20">
            <div className="flex flex-col gap-24 lg:gap-40">
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
      <div className="flex items-center justify-between mb-8 relative z-10">
        <span className="text-6xl md:text-8xl font-black text-white/5 select-none transition-colors duration-500 group-hover:text-white/10">
          {step.id}
        </span>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 shadow-lg`}>
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
