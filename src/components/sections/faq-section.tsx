'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: 'How long does a typical project take?', answer: 'Project timelines vary based on complexity. Most projects take 4-12 weeks from start to finish. We provide a detailed timeline during the initial consultation.' },
    { question: 'Do you offer ongoing support?', answer: 'Yes! We offer various support packages including maintenance, updates, and optimization services to keep your digital assets running smoothly.' },
    { question: 'What is your pricing model?', answer: 'We offer flexible pricing based on project scope. We provide custom quotes after understanding your specific requirements and business goals.' },
    { question: 'Can you work with my existing website?', answer: 'Absolutely! We can optimize, redesign, or enhance your existing website. We work with modern tech stacks like Next.js, React, and Webflow.' },
  ];

  return (
    <section className="py-24 bg-[#f7f8fc]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0305a8] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className="overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg text-[#0305a8]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-[#f7f8fc] flex items-center justify-center text-[#0305a8]"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
