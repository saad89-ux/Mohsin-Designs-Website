import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className={cn(
        "flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 px-3 py-2 transition-all",
        scrolled ? "bg-background/70 backdrop-blur-xl shadow-card" : "bg-background/30 backdrop-blur-md"
      )}>
        <a href="#top" className="flex items-center gap-2 pl-3">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-electric shadow-glow">
            <span className="absolute inset-0 rounded-md bg-electric blur-md opacity-60" />
            <span className="relative font-display text-[13px] font-bold text-primary-foreground">N</span>
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">Nova<span className="text-muted-foreground">/Agency</span></span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">Login</a>
          <MagneticButton href="#contact" className="px-5 py-2 text-sm">Book a call</MagneticButton>
        </div>
      </nav>
    </motion.header>
  );
}
