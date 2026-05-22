import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Globe } from "@/components/three/Globe";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SplitWords } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-hero pt-32">
      {/* Grid + noise */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.7]" />
      <div className="absolute inset-0 -z-10 noise opacity-40" />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-32 top-40 -z-10 h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(closest-side, oklch(0.65 0.22 250 / 0.45), transparent)" }}
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 top-1/3 -z-10 h-[380px] w-[380px] rounded-full"
        style={{ background: "radial-gradient(closest-side, oklch(0.78 0.18 220 / 0.35), transparent)" }}
        animate={{ y: [0, 28, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-electric" />
            <span>Award-winning digital growth studio · 2026</span>
          </motion.div>

          <h1 className="font-display text-balance text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-tight">
            <span className="block text-gradient">
              <SplitWords text="We engineer brands" />
            </span>
            <span className="block">
              <SplitWords text="that compound in" delay={0.2} />{" "}
              <span className="text-electric italic">
                <SplitWords text="search & story." delay={0.45} />
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            A senior team of strategists, designers and engineers building SEO,
            brand systems and high-converting websites for ambitious companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#contact">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">View our work</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 text-sm"
          >
            {[
              ["240%", "Avg. organic lift"],
              ["120+", "Brands shipped"],
              ["4.9★", "Client rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-foreground">{n}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[540px]"
          >
            <div className="absolute inset-0 rounded-full bg-electric opacity-20 blur-3xl" />
            <Globe className="absolute inset-0" />
            {/* Floating chips */}
            {[
              { t: "SEO · +312%", x: "-10%", y: "8%" },
              { t: "Brand · v2.0", x: "85%", y: "18%" },
              { t: "Web · 0.4s LCP", x: "-6%", y: "78%" },
              { t: "Ads · 4.2x ROAS", x: "82%", y: "72%" },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.7 }}
                style={{ left: c.x, top: c.y }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="glass rounded-full px-3 py-1.5 text-[11px] font-medium text-foreground shadow-card"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-electric align-middle shadow-glow" />
                  {c.t}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
