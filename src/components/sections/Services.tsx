import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Compass, MapPin, ShoppingBag, Palette, Layout, Code2, Megaphone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Search, tag: "01 · Discovery", title: "SEO that compounds", body: "Technical, content and authority systems built to win category-defining keywords — not chase them.", accent: "from-[oklch(0.65_0.22_250)] to-[oklch(0.78_0.18_220)]" },
  { icon: Compass, tag: "02 · Technical SEO", title: "Crawl. Render. Rank.", body: "Edge-rendered architectures, schema graphs, and core-web-vitals engineering shipped in weeks.", accent: "from-[oklch(0.62_0.18_260)] to-[oklch(0.72_0.20_230)]" },
  { icon: MapPin, tag: "03 · Local SEO", title: "Own your geography", body: "GBP optimization, local citations and review velocity that turns map packs into your storefront.", accent: "from-[oklch(0.58_0.20_245)] to-[oklch(0.75_0.18_215)]" },
  { icon: ShoppingBag, tag: "04 · Ecommerce SEO", title: "Catalog → Cashflow", body: "Programmatic landing systems for Shopify, Webflow and headless stacks. Built for scale.", accent: "from-[oklch(0.66_0.22_255)] to-[oklch(0.80_0.16_210)]" },
  { icon: Palette, tag: "05 · Branding", title: "Identity with intent", body: "Strategy, naming, visual systems and motion DNA — the operating system of your brand.", accent: "from-[oklch(0.60_0.20_250)] to-[oklch(0.72_0.20_225)]" },
  { icon: Layout, tag: "06 · Website Design", title: "Interfaces that sell", body: "Conversion-led design systems engineered around your funnel, not a template.", accent: "from-[oklch(0.62_0.22_250)] to-[oklch(0.80_0.18_225)]" },
  { icon: Code2, tag: "07 · Development", title: "Performance as polish", body: "Next-gen front-ends, headless CMS pipelines and CMS-less microsites with sub-second LCP.", accent: "from-[oklch(0.60_0.22_245)] to-[oklch(0.78_0.20_220)]" },
  { icon: Megaphone, tag: "08 · Paid & Social", title: "Distribution that scales", body: "Google Ads, Meta, and creator partnerships orchestrated as one growth motion.", accent: "from-[oklch(0.62_0.22_252)] to-[oklch(0.76_0.18_218)]" },
];

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".svc-card");
      const total = cards.length;

      // Pin the section and step through cards
      const trig = ScrollTrigger.create({
        trigger: root.current!,
        start: "top top",
        end: () => `+=${total * 80}%`,
        pin: ".svc-pin",
        scrub: 1,
      });

      cards.forEach((card, i) => {
        gsap.set(card, { yPercent: i === 0 ? 0 : 100, scale: 1, opacity: i === 0 ? 1 : 0.4, filter: "blur(0px)" });
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current!,
            start: () => `top+=${(i - 1) * (window.innerHeight * 0.8)} top`,
            end: () => `+=${window.innerHeight * 0.8}`,
            scrub: 1,
          },
        });
        // Push previous card back
        tl.to(cards[i - 1], { scale: 0.92, yPercent: -8, filter: "blur(6px)", opacity: 0.5, ease: "none" }, 0);
        // Bring this card up
        tl.fromTo(card, { yPercent: 100, opacity: 0.4 }, { yPercent: 0, opacity: 1, ease: "none" }, 0);
      });

      // Progress dots
      const dots = gsap.utils.toArray<HTMLElement>(".svc-dot");
      ScrollTrigger.create({
        trigger: root.current!,
        start: "top top",
        end: () => `+=${total * 80}%`,
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(total - 1, Math.floor(self.progress * total));
          dots.forEach((d, di) => d.classList.toggle("is-active", di === idx));
        },
      });

      return () => trig.kill();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="relative">
      <div className="svc-pin relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 pt-28">
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-electric">What we do</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                  A full-stack growth studio, <span className="text-electric italic">composed.</span>
                </h2>
              </Reveal>
            </div>
            <ol className="hidden gap-1.5 md:flex">
              {services.map((_, i) => (
                <li key={i} className="svc-dot h-1.5 w-6 rounded-full bg-white/10 transition-all data-[active=true]:bg-electric [&.is-active]:bg-electric [&.is-active]:w-12" />
              ))}
            </ol>
          </div>

          <div className="relative mt-10 flex-1">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="svc-card absolute inset-x-0 bottom-0 mx-auto h-[62vh] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-card"
                  style={{ zIndex: i + 1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-30`} />
                  <div className="absolute inset-0 noise opacity-30" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  <div className="relative grid h-full grid-cols-1 gap-10 p-10 md:grid-cols-12 md:p-14">
                    <div className="md:col-span-7">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/80">
                        <span className="h-1 w-1 rounded-full bg-electric shadow-glow" />
                        {s.tag}
                      </span>
                      <h3 className="font-display mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                        {s.title}
                      </h3>
                      <p className="mt-5 max-w-xl text-base text-foreground/80 sm:text-lg">{s.body}</p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {["Audit", "Strategy", "Sprint", "Scale"].map((t) => (
                          <span key={t} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs text-foreground/80">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="relative md:col-span-5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-44 w-44 rounded-3xl bg-white/[0.06] backdrop-blur-md">
                          <div className="absolute inset-0 rounded-3xl shadow-glow" />
                          <Icon className="absolute inset-0 m-auto h-20 w-20 text-foreground" strokeWidth={1.1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
