import { useEffect, useRef } from "react";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.18; y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 14}px, ${y - 14}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-7 w-7 rounded-full md:block"
      style={{ background: "radial-gradient(closest-side, oklch(0.85 0.18 230 / 0.55), transparent 70%)", mixBlendMode: "screen" }}
    />
  );
}
