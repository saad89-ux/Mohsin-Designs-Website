'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Logo Design',
    description: 'Custom, high-impact logo concepts that represent your core brand identity and differentiate you in competitive markets.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    features: ['Multiple Design Directions', 'Vector Master Files', 'Mini Brand Guidelines', 'Full Copyright Transfer'],
    href: '/services/logo-design',
  },
  {
    title: 'Technical SEO',
    description: 'Deep site architecture audit and optimization designed for search engine crawlers and rapid core web vitals load speeds.',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d33e402?auto=format&fit=crop&w=600&q=80',
    features: ['Performance & Page Speed Tuning', 'Structured Schema Markup', 'Full Indexing Audit', 'Mobile Usability Design'],
    href: '/services/technical-seo',
  },
  {
    title: 'Google Ads PPC',
    description: 'Data-guided search engine marketing campaigns precision-targeted to maximize marketing ROI and attract qualified leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    features: ['In-Depth Keyword Research', 'Copywriting & A/B Experiments', 'Advanced Conversion Tracking', 'Landing Page Auditing'],
    href: '/services/google-ads',
  },
  {
    title: 'Brand Identity Systems',
    description: 'End-to-end holistic brand frameworks that establish standard style guides, values, and strong client relationships.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    features: ['Curated Color Systems', 'Modern Typography Matrix', 'Comprehensive Brand Guidelines', 'Unified Copywriting Voice'],
    href: '/services/brand-identity',
  },
  {
    title: 'Kinetic Logo Animation',
    description: 'Sleek, fluid custom motion graphics that bring brand visual logos to life across premium video assets & applications.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    features: ['Fluid 2D & 3D WebGL Motion', 'Custom Audio & Sound Design', 'High-Fidelity Transparent Formats', 'Intro & Outro Sequencing'],
    href: '/services/logo-animation',
  },
  {
    title: 'Web & App Development',
    description: 'Ultra-fast Next.js React applications built with modern headless CMS setups and robust server infrastructures.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    features: ['Next.js React Ecosystem', 'Modern Headless API Integrations', 'E-Commerce Infrastructure', 'Lighthouse Optimization'],
    href: '/services/website-development',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ServicesOverviewSection() {
  return (
    <section className="py-28 bg-[#fdfdfe] relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0305a8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-3 py-1.5 rounded-full bg-[#0305a8]/5 text-[#0305a8] font-bold text-xs uppercase tracking-wider mb-4 border border-[#0305a8]/10">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0305a8] tracking-tight mb-6">
            Digital Capabilities Built to Scale
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed">
            We merge premium, world-class modern aesthetic design with advanced engineering to launch systems that command attention and drive conversion.
          </p>
        </div>

        {/* Services Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl border border-slate-100 hover:border-[#0305a8]/15 overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(3,5,168,0.08)] flex flex-col justify-between group"
            >
              <div>
                {/* Service Visual representation */}
                <div className="relative h-56 w-full overflow-hidden select-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#0305a8] text-[#fff35c] font-black text-xs uppercase tracking-widest shadow-md">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#0305a8] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0 mt-auto">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-[#0305a8]/10 text-sm font-black text-[#0305a8] bg-gray-50/50 hover:bg-[#0305a8] hover:text-[#fff35c] transition-all duration-300 shadow-sm"
                >
                  Explore Service
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
