'use client';

interface PortfolioDetailProps {
  category: string;
}

export function PortfolioDetailSection({ category }: PortfolioDetailProps) {
  const projects = [
    { title: 'Project 1', description: 'Professional logo design' },
    { title: 'Project 2', description: 'Complete brand identity' },
    { title: 'Project 3', description: 'Digital marketing campaign' },
  ];

  return (
    <section className="min-h-screen py-20 pt-40 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-4 text-4xl font-bold text-[#0305a8] md:text-5xl lg:text-6xl">{category} Portfolio</h1>
        <p className="mb-12 text-lg text-gray-600">
          View our professional {category.toLowerCase()} projects
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-lg border border-slate-100 bg-[#f7f8fc]/40 p-6 shadow-sm hover:border-[#0305a8]/20 hover:bg-white hover:shadow-md transition-all">
              <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-[#0305a8]/5 to-blue-500/5 flex items-center justify-center text-5xl border border-[#0305a8]/5">
                🎨
              </div>
              <h3 className="mb-2 font-bold text-[#0305a8]">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
