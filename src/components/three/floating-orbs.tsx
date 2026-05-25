export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#0A192F]/20 to-[#00E5FF]/20 blur-3xl animate-[spin_20s_linear_infinite]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#00E5FF]/20 to-[#64FFDA]/20 blur-3xl animate-[spin_30s_linear_infinite_reverse]" />
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-[#0A192F]/10 to-transparent blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
    </div>
  );
}
