/**
 * Centralized duration presets (in seconds).
 * Ensures consistent timing across the entire animation system.
 */
export const durations = {
  /** Micro interactions — hover, focus, toggle */
  instant: 0.15,
  /** Fast feedback — button clicks, icon transitions */
  fast: 0.3,
  /** Standard transitions — card reveals, element entrances */
  normal: 0.6,
  /** Medium transitions — section reveals, staggered content */
  medium: 0.8,
  /** Slow cinematic — hero entrances, page transitions */
  slow: 1.2,
  /** Dramatic — opening sequences, major reveals */
  dramatic: 1.8,
  /** Marquee cycle (seconds per full loop) */
  marquee: 30,
} as const;

export type DurationKey = keyof typeof durations;
