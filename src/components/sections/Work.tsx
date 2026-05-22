import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { t: "Helios Energy", c: "Brand & Web", k: "+312% organic", g: "from-[oklch(0.55_0.20_245)] to-[oklch(0.30_0.10_260)]" },
  { t: "Quanta Health", c: "SEO & Content", k: "4.2x pipeline", g: "from-[oklch(0.60_0.22_250)] to-[oklch(0.25_0.08_260)]" },
  { t: "Northwind Retail", c: "Ecom · Shopify", k: "+186% AOV", g: "from-[oklch(0.62_0.18_235)] to-[oklch(0.22_0.06_260)]" },
  { t: "Arclight Studios", c: "Identity System", k: "Awwwards SOTD", g: "from-[oklch(0.65_0.22_255)] to-[oklch(0.28_0.10_260)]" },
];

export function Work() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal><p className="mb-3 text-xs uppercase tracking-[0.25em] text-electric">Selected work</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                Outcomes, <span className="text-electric italic">not deliverables.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="#" className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
              View all case studies <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 0.1}>
              <motion.a
                href="#"
                whileHover="hover"
                className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-surface"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.g}`} />
                <div className="absolute inset-0 noise opacity-30" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <motion.div
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/[0.06] backdrop-blur-md shadow-glow" />
                </motion.div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-8">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-foreground/70">{p.c}</div>
                    <div className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{p.t}</div>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-foreground/90 backdrop-blur">
                    {p.k}
                  </div>
                </div>
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] backdrop-blur transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
