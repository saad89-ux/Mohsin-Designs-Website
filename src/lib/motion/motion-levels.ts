/**
 * Motion Intensity Hierarchy.
 * Prevents visual fatigue by defining distinct intensity levels.
 *
 * LEVEL 1 — Hero: Strongest motion, cinematic layering
 * LEVEL 2 — Services/Projects: Medium-heavy, pinned storytelling
 * LEVEL 3 — Testimonials/FAQ: Calmer, softer transitions
 * LEVEL 4 — Footer/Legal: Subtle motion only
 */

export const motionLevels = {
  hero: {
    level: 1,
    label: 'Cinematic',
    opacity: { from: 0, to: 1 },
    y: { from: 60, to: 0 },
    scale: { from: 0.95, to: 1 },
    blur: { from: 8, to: 0 },
    duration: 1.2,
    stagger: 0.08,
  },
  primary: {
    level: 2,
    label: 'Primary',
    opacity: { from: 0, to: 1 },
    y: { from: 40, to: 0 },
    scale: { from: 0.98, to: 1 },
    blur: { from: 4, to: 0 },
    duration: 0.8,
    stagger: 0.1,
  },
  secondary: {
    level: 3,
    label: 'Secondary',
    opacity: { from: 0, to: 1 },
    y: { from: 24, to: 0 },
    scale: { from: 1, to: 1 },
    blur: { from: 0, to: 0 },
    duration: 0.6,
    stagger: 0.08,
  },
  subtle: {
    level: 4,
    label: 'Subtle',
    opacity: { from: 0, to: 1 },
    y: { from: 12, to: 0 },
    scale: { from: 1, to: 1 },
    blur: { from: 0, to: 0 },
    duration: 0.4,
    stagger: 0.05,
  },
} as const;

export type MotionLevel = keyof typeof motionLevels;
