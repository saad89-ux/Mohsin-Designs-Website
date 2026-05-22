const logos = ["Northwind", "Helios", "Lumen", "Quanta", "Pulsefield", "Arclight", "Vector", "Strata", "Orbital", "Mercury"];

export function Marquee() {
  const items = [...logos, ...logos];
  return (
    <section className="relative border-y border-white/5 bg-surface/30 py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="mx-auto mb-6 max-w-7xl px-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by category-defining teams
      </div>
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] items-center gap-16 pr-16">
          {items.map((l, i) => (
            <span key={i} className="font-display whitespace-nowrap text-2xl font-medium text-foreground/40 transition-colors hover:text-foreground">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
