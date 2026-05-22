/**
 * Framer Motion transition presets.
 * Composable configs for common patterns.
 */
import { framerEasings } from './easings';
import { durations } from './durations';
import type { Transition } from 'framer-motion';

export const transitions = {
  /** Default reveal transition */
  reveal: {
    duration: durations.normal,
    ease: framerEasings.smooth,
  } satisfies Transition,

  /** Cinematic entrance — hero, major content */
  cinematic: {
    duration: durations.slow,
    ease: framerEasings.cinematic,
  } satisfies Transition,

  /** Fast interactive feedback */
  snap: {
    duration: durations.fast,
    ease: framerEasings.sharp,
  } satisfies Transition,

  /** Spring-based for interactive elements */
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
  },

  /** Gentle spring — softer feel */
  gentleSpring: {
    type: 'spring' as const,
    stiffness: 150,
    damping: 20,
    mass: 1.2,
  },

  /** Staggered children — grid/list items */
  staggerChildren: (stagger = 0.1) => ({
    staggerChildren: stagger,
    delayChildren: 0.1,
  }),
} as const;
