/**
 * Centralized easing presets for the global motion system.
 * All animations should reference these instead of hardcoding values.
 */

/* GSAP-compatible cubic bezier strings */
export const easings = {
  /** Smooth deceleration — default for most reveals */
  smooth: 'power2.out',
  /** Cinematic ease — hero entrances, major transitions */
  cinematic: 'power4.out',
  /** Elastic snap — interactive feedback, buttons */
  elastic: 'elastic.out(1, 0.5)',
  /** Back overshoot — card entrances, playful elements */
  back: 'back.out(1.7)',
  /** Exponential ease — scroll-triggered reveals */
  expo: 'expo.out',
  /** Sharp in-out — page transitions, overlays */
  sharpInOut: 'power3.inOut',
  /** Linear — marquee, continuous motion */
  linear: 'none',
} as const;

/* Framer Motion compatible cubic bezier arrays */
export const framerEasings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  cinematic: [0.76, 0, 0.24, 1] as const,
  elastic: [0.68, -0.55, 0.265, 1.55] as const,
  sharp: [0.4, 0, 0.2, 1] as const,
  decelerate: [0, 0, 0.2, 1] as const,
  accelerate: [0.4, 0, 1, 1] as const,
} as const;

export type EasingKey = keyof typeof easings;
export type FramerEasingKey = keyof typeof framerEasings;
