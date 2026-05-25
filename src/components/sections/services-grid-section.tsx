'use client';

import Link from 'next/link';

export function ServicesGridSection() {
  const services = [
    {
      title: 'Logo Design',
      description: 'Custom logo designs that represent your brand identity',
      href: '/services/logo-design',
    },
    {
      title: 'Technical SEO',
      description: 'Advanced SEO optimization for better search rankings',
      href: '/services/technical-seo',
    },
    {
      title: 'Google Ads',
      description: 'High-converting PPC campaigns and ads management',
      href: '/services/google-ads',
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand system from concept to guidelines',
      href: '/services/brand-identity',
    },
    {
      title: 'Logo Animation',
      description: 'Motion graphics and animated branding elements',
      href: '/services/logo-animation',
    },
    {
      title: 'Website Development',
      description: 'Custom websites built with modern technology',
      href: '/services/website-development',
    },
  ];

  return (
    <section className="min-h-screen py-20 pt-40 bg-[#0A192F]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#00E5FF] md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block rounded-lg border border-slate-700 bg-[#0f2d3f]/40 p-6 shadow-sm transition-all hover:border-[#00E5FF]/20 hover:bg-[#0f2d3f] hover:shadow-md"
            >
              <h3 className="mb-2 text-xl font-bold text-[#00E5FF] transition-colors group-hover:text-[#64FFDA]">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-sm font-semibold text-[#00E5FF] flex items-center gap-1 group-hover:underline">
                Explore Service &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
