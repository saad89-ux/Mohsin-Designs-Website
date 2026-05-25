'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, X } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isHovered, setIsHovered] = useState(false);

  const faqs = [
    { question: 'How long until we deliver your first blog post?', answer: 'Project timelines vary based on complexity. Most projects take 4-12 weeks from start to finish. We provide a detailed timeline during the initial consultation.' },
    { question: 'Do you offer ongoing support?', answer: 'Yes! We offer various support packages including maintenance, updates, and optimization services to keep your digital assets running smoothly.' },
    { question: 'What is your pricing model?', answer: 'We offer flexible pricing based on project scope. We provide custom quotes after understanding your specific requirements and business goals.' },
    { question: 'Can you work with my existing website?', answer: 'Absolutely! We can optimize, redesign, or enhance your existing website. We work with modern tech stacks like Next.js, React, and Webflow.' },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setOpenIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % faqs.length;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered, faqs.length]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#050505] font-sans">
      {/* Background dot grid to match Hero */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-black text-white mb-16 md:mb-24 tracking-tight">
          Frequently Ask Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Accordion */}
          <div 
            className="flex flex-col gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#111111] rounded-[10px] border border-white/5 overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <Plus className="w-5 h-5 text-[#9CA3AF]" />
                      <span className="font-semibold text-lg text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
                      style={{
                        backgroundColor: isOpen ? '#1B7EFC' : '#ffffff',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                      ) : (
                        <Plus className="w-4 h-4 text-black" strokeWidth={3} />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-0 pl-[52px] text-[#9CA3AF] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Blob & Input Area */}
          <div className="flex flex-col items-center justify-center pt-4">
            {/* Abstract Blob with ? */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full transform -rotate-12">
                <path 
                  fill="#000000" 
                  stroke="#ffffff" 
                  strokeWidth="4"
                  d="M45.7,-76.1C58.9,-69.3,69.2,-55.4,78.3,-41.2C87.4,-27,95.3,-12.5,93.4,1.1C91.5,14.7,79.8,27.4,68.4,37.3C57,47.2,46,54.4,34.1,62.1C22.2,69.8,9.4,78.1,-3.8,80.7C-17.1,83.3,-30.7,80.2,-42.6,72.7C-54.5,65.2,-64.7,53.4,-72.1,40.4C-79.5,27.4,-84.1,13.2,-83.4,-0.6C-82.7,-14.4,-76.7,-27.8,-69.2,-39.7C-61.7,-51.6,-52.7,-62,-41.2,-69.2C-29.7,-76.4,-15.8,-80.4,-0.7,-79.3C14.4,-78.2,28.8,-71.9,45.7,-76.1Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              {/* Outer stroke blob */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-[105%] h-[105%] transform rotate-6 opacity-30">
                <path 
                  fill="none" 
                  stroke="#ffffff" 
                  strokeWidth="3"
                  d="M45.7,-76.1C58.9,-69.3,69.2,-55.4,78.3,-41.2C87.4,-27,95.3,-12.5,93.4,1.1C91.5,14.7,79.8,27.4,68.4,37.3C57,47.2,46,54.4,34.1,62.1C22.2,69.8,9.4,78.1,-3.8,80.7C-17.1,83.3,-30.7,80.2,-42.6,72.7C-54.5,65.2,-64.7,53.4,-72.1,40.4C-79.5,27.4,-84.1,13.2,-83.4,-0.6C-82.7,-14.4,-76.7,-27.8,-69.2,-39.7C-61.7,-51.6,-52.7,-62,-41.2,-69.2C-29.7,-76.4,-15.8,-80.4,-0.7,-79.3C14.4,-78.2,28.8,-71.9,45.7,-76.1Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              <span className="relative z-10 text-8xl md:text-[120px] font-black text-white" style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}>
                ?
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Any Question?</h3>
              <p className="text-[#9CA3AF]">You can ask anything you want to know Feedback</p>
            </div>

            <div className="w-full max-w-md">
              <p className="text-sm font-semibold text-white mb-2 text-left">Let me know</p>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter Here" 
                  className="w-full bg-transparent border border-[#333] rounded-lg px-4 py-3 text-white placeholder:text-[#555] focus:outline-none focus:border-[#1B7EFC] transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#555] hover:text-white transition-colors">
                  <X className="w-5 h-5" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
