import { Reveal } from "@/components/motion/Reveal";
import { Check } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";

const tiers = [
  { name: "Sprint", price: "$8k", per: "/ project", desc: "Focused 4-week engagement for landing pages, microsites or SEO foundations.", feat: ["Audit & strategy", "1 conversion surface", "Performance baseline", "Async Slack channel"] },
  { name: "Growth", price: "$14k", per: "/ month", desc: "Our flagship retainer. Brand, SEO, web and content shipped weekly.", feat: ["Quarterly OKR planning", "Weekly design sprints", "Tech SEO + content ops", "Dedicated growth pod"], highlight: true },
  { name: "Scale", price: "Custom", per: "", desc: "Embedded studio for funded teams shipping at venture pace.", feat: ["Dedicated PM + lead", "Multi-region rollout", "Experimentation engine", "Quarterly brand reviews"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <Reveal><p className="mb-3 text-xs uppercase tracking-[0.25em] text-electric">Engagements</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Transparent pricing. <span className="text-electric italic">Senior teams only.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className={`relative h-full overflow-hidden rounded-3xl border p-8 ${t.highlight ? "border-electric/40 bg-surface-2 shadow-glow" : "border-white/10 bg-surface/60"}`}>
                {t.highlight && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent" />
                )}
                <div className="font-display text-sm text-muted-foreground">{t.name}</div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold tracking-tight">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.per}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="my-8 space-y-3">
                  {t.feat.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-electric" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton href="#contact" variant={t.highlight ? "primary" : "ghost"} className="w-full">
                  Start with {t.name}
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
