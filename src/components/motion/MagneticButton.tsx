import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}

export function MagneticButton({ children, className, href, variant = "primary", onClick }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * 0.25); y.set(my * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const base = "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors will-change-transform";
  const variants = {
    primary: "bg-electric text-primary-foreground shadow-glow hover:brightness-110",
    ghost: "glass text-foreground hover:bg-white/[0.06]",
  } as const;

  const content = (
    <motion.span style={{ x, y }} className="contents">
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(120px 60px at var(--mx,50%) var(--my,50%), oklch(0.95 0.05 230 / 0.35), transparent 60%)" }} />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a ref={ref as never} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={cn(base, variants[variant], className)}>
        {content}
      </a>
    );
  }
  return (
    <button ref={ref as never} onClick={onClick} onMouseMove={onMove} onMouseLeave={onLeave} className={cn(base, variants[variant], className)}>
      {content}
    </button>
  );
}
