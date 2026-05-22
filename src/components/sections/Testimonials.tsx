import { Reveal } from "@/components/motion/Reveal";

const items = [
  { q: "They didn't redesign our website — they rewrote our growth curve.", a: "Sara Chen", r: "CMO, Helios" },
  { q: "Sub-second pages, schema that prints, and a brand that finally feels like us.", a: "Marcus Vale", r: "Founder, Quanta" },
  { q: "Engineering quality you'd expect from a product team, not an agency.", a: "Aiko Tanaka", r: "Head of Design, Arclight" },
  { q: "Three months in, organic outpaced our paid spend for the first time.", a: "David Park", r: "VP Growth, Northwind" },
  { q: "Every interaction feels intentional. Every metric moved.", a: "Lina Roth", r: "CEO, Pulsefield" },
];

function Row({ reverse }: { reverse?: boolean }) {
  const list = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 items-stretch gap-5 pr-5 ${reverse ? "animate-[marquee_70s_linear_infinite_reverse]" : "animate-[marquee_55s_linear_infinite]"}`}>
        {list.map((t, i) => (
          <figure key={i} className="w-[360px] shrink-0 rounded-2xl border border-white/10 bg-surface/70 p-6 backdrop-blur">
            <blockquote className="font-display text-lg leading-snug text-foreground">"{t.q}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-electric shadow-glow" />
              <div>
                <div className="text-sm font-medium">{t.a}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto mb-14 max-w-7xl px-6">
        <Reveal><p className="mb-3 text-xs uppercase tracking-[0.25em] text-electric">Clients</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Quiet partners to <span className="text-electric italic">loud results.</span>
          </h2>
        </Reveal>
      </div>
      <div className="space-y-5">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
