export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-5">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-electric shadow-glow">
              <span className="relative font-display text-[13px] font-bold text-primary-foreground">N</span>
            </span>
            <span className="font-display text-sm font-semibold">Nova/Agency</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A senior digital studio engineering brand, SEO and product surfaces for category-defining teams.
          </p>
        </div>
        {[
          { h: "Services", l: ["SEO", "Branding", "Web Design", "Development", "Paid Media"] },
          { h: "Company", l: ["About", "Careers", "Process", "Contact"] },
          { h: "Resources", l: ["Case Studies", "Blog", "Pricing", "FAQ"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.h}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {c.l.map((i) => (
                <li key={i}><a href="#" className="text-foreground/80 hover:text-foreground">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Nova Agency. All rights reserved.</span>
        <span>Engineered in the EU · NYC · LHE</span>
      </div>
    </footer>
  );
}
