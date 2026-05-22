/**
 * GSAP ScrollTrigger configuration presets.
 * Standardized trigger configs for scroll-driven animations.
 */

export const scrollConfig = {
  /** Default section reveal — triggers when 20% visible */
  sectionReveal: {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse' as const,
  },

  /** Scrub-based progression — smooth scroll-linked animation */
  scrubSmooth: {
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: false,
  },

  /** Pinned section — stays fixed during scroll */
  pinned: {
    start: 'top top',
    pin: true,
    scrub: 1,
    anticipatePin: 1,
  },

  /** Parallax layer — subtle depth movement */
  parallax: {
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },

  /** Text reveal — triggers slightly earlier */
  textReveal: {
    start: 'top 85%',
    end: 'bottom 60%',
    toggleActions: 'play none none reverse' as const,
  },

  /** Counter/stats — trigger once */
  counter: {
    start: 'top 75%',
    toggleActions: 'play none none none' as const,
  },
} as const;

export type ScrollConfigKey = keyof typeof scrollConfig;
