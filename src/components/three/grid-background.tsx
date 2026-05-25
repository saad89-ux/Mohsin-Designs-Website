export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#64FFDA0a_1px,transparent_1px),linear-gradient(to_bottom,#64FFDA0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
