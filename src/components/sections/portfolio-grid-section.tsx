'use client';

import Link from 'next/link';

export function PortfolioGridSection() {
  const projects = [
    { title: 'TechCorp Brand Redesign', category: 'Branding', image: '🚀', link: '#' },
    { title: 'E-Commerce Platform', category: 'Web Development', image: '🛍️', link: '#' },
    { title: 'Digital Marketing Campaign', category: 'Marketing', image: '📱', link: '#' },
    { title: 'Mobile App Design', category: 'UI/UX Design', image: '📲', link: '#' },
    { title: 'SEO Optimization Project', category: 'SEO', image: '📈', link: '#' },
    { title: 'Logo Animation Suite', category: 'Motion Design', image: '✨', link: '#' },
  ];

  return (
    <section className="min-h-screen py-20 pt-40 bg-[#0A192F]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#00E5FF] md:text-5xl lg:text-6xl">Portfolio</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Explore our latest projects and case studies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group relative block overflow-hidden rounded-lg border border-slate-700 bg-[#0f2d3f]/40 transition-all hover:border-[#00E5FF]/20 hover:bg-[#0f2d3f] hover:shadow-md shadow-sm"
            >
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#0A192F]/5 to-blue-500/5 text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold text-[#00E5FF]">{project.category}</p>
                <h3 className="font-bold text-[#00E5FF] transition-colors group-hover:text-[#64FFDA]">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
