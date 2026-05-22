'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { easings } from '@/lib/motion/easings';
import { staggers } from '@/lib/motion/staggers';
import { durations } from '@/lib/motion/durations';
import { scrollConfig } from '@/lib/motion/scroll-config';

gsap.registerPlugin(ScrollTrigger);

type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface TextRevealProps {
  text: string;
  tag?: TagType;
  className?: string;
  delay?: number;
  splitBy?: 'word' | 'char';
}

export function TextReveal({
  text,
  tag: Tag = 'h2',
  className = '',
  delay = 0,
  splitBy = 'word',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Show all text immediately
      const spans = container.querySelectorAll<HTMLElement>('.text-reveal-item');
      spans.forEach((span) => {
        span.style.transform = 'translateY(0%)';
        span.style.opacity = '1';
      });
      return;
    }

    const spans = container.querySelectorAll<HTMLElement>('.text-reveal-item');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: durations.medium,
          stagger: splitBy === 'char' ? staggers.char : staggers.word,
          ease: easings.cinematic,
          delay,
          scrollTrigger: {
            trigger: container,
            ...scrollConfig.textReveal,
          },
        }
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, [text, delay, splitBy]);

  const items =
    splitBy === 'word'
      ? text.split(/(\s+)/)
      : text.split('');

  return (
    <Tag ref={containerRef as React.Ref<never>} className={className}>
      {items.map((item, i) => {
        // Preserve whitespace
        if (/^\s+$/.test(item)) {
          return <span key={i}>{item}</span>;
        }

        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
          >
            <span
              className="text-reveal-item inline-block"
              style={{ opacity: 0, transform: 'translateY(100%)' }}
            >
              {splitBy === 'char' && item === ' ' ? '\u00A0' : item}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
