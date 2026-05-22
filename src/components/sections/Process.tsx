import { Reveal } from "@/components/motion/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", t: "Diagnose", d: "Audits across SEO, brand, UX and analytics to find the asymmetric bets." },
  { n: "02", t: "Define", d: "Positioning, narrative and a measurable growth roadmap with weekly cadence." },
  { n: "03", t: "Design", d: "Identity systems, motion and product surfaces engineered around conversion." },
  { n: "04", t: "Develop", d: "Edge-rendered builds with monitoring, experimentation and CMS pipelines." },
  { n: "05", t: "Distribute", d: "SEO, paid, partnerships and PR — one orchestrated growth motion." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <Reveal><p className="mb-3 text-xs uppercase tracking-[0.25em] text-electric">Process</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              A senior team, <span className="text-electric italic">five disciplined sprints.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative grid gap-6 md:grid-cols-[120px_1fr]">
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
            <motion.div
              style={{ height: lineH }}
              className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-electric shadow-glow"
            />
          </div>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:bg-surface md:p-8">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.65 0.22 240 / 0.12), transparent 40%)" }} />
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <span className="font-display text-sm text-electric">{s.n}</span>
                    <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">{s.t}</h3>
                    <p className="ml-auto max-w-xl text-sm text-muted-foreground sm:text-base">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
