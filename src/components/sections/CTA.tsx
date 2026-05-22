import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-[600px] max-w-5xl rounded-[40px] bg-electric opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-electric">Let's build</p>
        </Reveal>
        <h2 className="font-display text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-[88px]">
          <span className="block text-gradient"><SplitWords text="Ready when" /></span>
          <span className="block text-electric italic"><SplitWords text="you are." delay={0.2} /></span>
        </h2>
        <Reveal delay={0.6}>
          <p className="mx-auto mt-7 max-w-xl text-muted-foreground sm:text-lg">
            Tell us about your team, your timeline, and the metric you need to move. We'll respond within one business day.
          </p>
        </Reveal>
        <Reveal delay={0.8}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <MagneticButton href="mailto:hello@nova.agency">
              hello@nova.agency <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#" variant="ghost">Book a discovery call</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
