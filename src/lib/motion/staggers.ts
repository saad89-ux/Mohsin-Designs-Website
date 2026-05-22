/**
 * Stagger timing presets for cascading animations.
 * Values in seconds — used with GSAP stagger and Framer Motion delays.
 */
export const staggers = {
  /** Character-level stagger — split text reveals */
  char: 0.02,
  /** Word-level stagger — heading reveals */
  word: 0.05,
  /** Line-level stagger — paragraph reveals */
  line: 0.08,
  /** Card-level stagger — grid items */
  card: 0.1,
  /** Section-level stagger — large element sequences */
  section: 0.15,
  /** Slow cascade — dramatic reveal sequences */
  cascade: 0.2,
} as const;

export type StaggerKey = keyof typeof staggers;
