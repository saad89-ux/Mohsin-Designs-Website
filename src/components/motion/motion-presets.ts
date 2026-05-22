/**
 * Reusable Framer Motion variant presets.
 * Use these with <motion.div variants={fadeInUp} initial="initial" animate="animate" />
 */
import type { Variants } from 'framer-motion';
import { transitions } from '@/lib/motion/transitions';
import { staggers } from '@/lib/motion/staggers';

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.reveal,
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.reveal,
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: transitions.reveal,
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: transitions.reveal,
  },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: transitions.reveal,
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: transitions.staggerChildren(staggers.card),
  },
};
