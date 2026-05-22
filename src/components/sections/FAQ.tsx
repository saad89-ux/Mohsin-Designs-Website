import { Reveal } from "@/components/motion/Reveal";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "How fast can we start?", a: "Most engagements kick off within 7–10 days. Sprints can start sooner — we keep one slot open monthly." },
  { q: "Do you replace our in-house team?", a: "No. We embed alongside founders, marketing and product leaders as a senior strike team." },
  { q: "What stacks do you ship on?", a: "Next.js, Astro, Webflow, Shopify Hydrogen, Sanity, Contentful and headless WordPress when it's the right tool." },
  { q: "How do you measure success?", a: "Quarterly OKRs tied to pipeline, organic growth, conversion and brand equity — never vanity metrics." },
  { q: "Where are you based?", a: "A distributed senior team across NYC, London and Lahore — overlap with most timezones." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal><p className="mb-3 text-xs uppercase tracking-[0.25em] text-electric">FAQ</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Answers before <span className="text-electric italic">you ask.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-muted-foreground">Still curious? Book a 20-minute call — no decks, no fluff.</p>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-foreground"
                  >
                    <span className="font-display text-lg font-medium sm:text-xl">{f.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 transition-transform ${isOpen ? "rotate-45 bg-electric text-primary-foreground" : ""}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
