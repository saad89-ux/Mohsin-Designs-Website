'use client';

import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { transitions } from '@/lib/motion/transitions';

type Direction = 'up' | 'down' | 'left' | 'right';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

function getDirectionOffset(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case 'up':
      return { x: 0, y: 40 };
    case 'down':
      return { x: 0, y: -40 };
    case 'left':
      return { x: -40, y: 0 };
    case 'right':
      return { x: 40, y: 0 };
  }
}

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: SectionRevealProps) {
  const offset = getDirectionOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ...transitions.reveal,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
