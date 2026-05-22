'use client';

import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'Lumina Motion Labs transformed our brand identity and increased our leads by 300%. Their team is professional and creative.',
    author: 'Sarah Johnson',
    role: 'CEO, TechCorp Inc',
    rating: 5
  },
  {
    quote: "The website development was exceptional. It's fast, beautiful, and converts. Best investment we made in 2024.",
    author: 'Michael Chen',
    role: 'Founder, Digital Solutions',
    rating: 5
  },
  {
    quote: 'Our SEO rankings improved dramatically within 3 months. The team really knows their stuff. Highly recommended!',
    author: 'Emma Williams',
    role: 'Marketing Director, Global Brands',
    rating: 5
  },
  {
    quote: 'A truly world-class agency. They delivered everything on time and exceeded our expectations in every way.',
    author: 'David Miller',
    role: 'COO, NextGen Startup',
    rating: 5
  },
  {
    quote: 'The logo animation they created for us is stunning. It adds such a premium feel to all our video content.',
    author: 'Jessica Lee',
    role: 'Content Creator',
    rating: 5
  },
];

export function TestimonialsSection() {
  // Array of indices to represent the stack order
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4]);
  const [isFlipped, setIsFlipped] = useState(false);

  // Automatically cycle/flip the card stack every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIsFlipped(true);
    setTimeout(() => {
      setOrder((prev) => {
        const nextOrder = [...prev];
        const first = nextOrder.shift()!;
        nextOrder.push(first);
        return nextOrder;
      });
      setIsFlipped(false);
    }, 400); // match flip animation time
  };

  const handlePrev = () => {
    setIsFlipped(true);
    setTimeout(() => {
      setOrder((prev) => {
        const nextOrder = [...prev];
        const last = nextOrder.pop()!;
        nextOrder.unshift(last);
        return nextOrder;
      });
      setIsFlipped(false);
    }, 400);
  };

  return (
    <section className="py-28 bg-[#f8fafc] border-y border-[#0305a8]/5 overflow-hidden flex flex-col items-center relative">
      {/* Background Decorative Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0305a8_1.5px,transparent_1.5px)] bg-[size:24px_24px] z-0" />

      <div className="mx-auto max-w-4xl px-6 mb-16 text-center z-10">
        <span className="inline-block px-3 py-1.5 rounded-full bg-[#0305a8]/5 text-[#0305a8] font-bold text-xs uppercase tracking-wider mb-4 border border-[#0305a8]/10">
          Success Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-[#0305a8] tracking-tight mb-4">
          What Our Partners Say
        </h2>
        <p className="mx-auto max-w-xl text-base md:text-lg text-gray-600 font-medium leading-relaxed">
          See how we've helped ambitious brands compound their digital search value & branding.
        </p>
      </div>

      {/* Stack Deck Wrapper */}
      <div className="relative w-full max-w-3xl px-6 h-[340px] md:h-[280px] z-10 flex justify-center items-center">
        {order.map((tIndex, positionIndex) => {
          const item = testimonials[tIndex];
          
          // Only render first 3 cards in stack for performance and clean aesthetic
          if (positionIndex > 2) return null;

          // Compute style offsets based on depth position index in the deck
          const isFront = positionIndex === 0;
          const isSecond = positionIndex === 1;
          const isThird = positionIndex === 2;

          return (
            <motion.div
              key={tIndex}
              style={{
                zIndex: 10 - positionIndex,
                cursor: isFront ? 'pointer' : 'default',
              }}
              animate={{
                scale: isFront ? (isFlipped ? 0.88 : 1) : isSecond ? 0.95 : 0.9,
                y: isFront ? (isFlipped ? -25 : 0) : isSecond ? 18 : 36,
                x: isFront && isFlipped ? 200 : 0,
                rotate: isFront && isFlipped ? 10 : 0,
                opacity: isFront ? (isFlipped ? 0.4 : 1) : isSecond ? 0.85 : 0.5,
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 24,
              }}
              onClick={isFront ? handleNext : undefined}
              className="absolute w-[calc(100%-3rem)] md:w-full bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(3,5,168,0.06)] flex flex-col justify-between"
            >
              {/* Star Rating & Quote Mark Icon */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-[#fff35c] text-[#fff35c]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#0305a8]/10" />
              </div>

              {/* Review Text */}
              <blockquote className="text-base md:text-xl font-bold text-gray-700 leading-relaxed italic mb-6">
                "{item.quote}"
              </blockquote>

              {/* Author & Actions Info */}
              <div className="flex justify-between items-end border-t border-slate-100 pt-6">
                <div>
                  <cite className="font-extrabold text-[#0305a8] text-base not-italic">
                    {item.author}
                  </cite>
                  <p className="text-xs md:text-sm text-gray-500 font-bold mt-0.5">
                    {item.role}
                  </p>
                </div>
                
                {/* Visual Indicators */}
                {isFront && (
                  <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest hidden sm:inline-block">
                    Click card to flip
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Manual Control Buttons */}
      <div className="flex gap-4 mt-8 z-10">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-12 h-12 rounded-full border border-[#0305a8]/10 bg-white text-[#0305a8] flex items-center justify-center transition-all hover:bg-[#0305a8] hover:text-[#fff35c] active:scale-95 shadow-md shadow-slate-100 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-12 h-12 rounded-full border border-[#0305a8]/10 bg-white text-[#0305a8] flex items-center justify-center transition-all hover:bg-[#0305a8] hover:text-[#fff35c] active:scale-95 shadow-md shadow-slate-100 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
