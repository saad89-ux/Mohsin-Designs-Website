'use client';

export function TeamSection() {
  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Creative Director',
      specialty: 'Brand Strategy & Design',
      icon: '👨‍💼',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      specialty: 'Web Development & Tech',
      icon: '👩‍💻',
    },
    {
      name: 'Marcus Johnson',
      role: 'SEO Specialist',
      specialty: 'Digital Marketing & SEO',
      icon: '👨‍🔬',
    },
    {
      name: 'Emma Williams',
      role: 'UI/UX Designer',
      specialty: 'User Experience Design',
      icon: '👩‍🎨',
    },
    {
      name: 'James Lee',
      role: 'Project Manager',
      specialty: 'Client Relations & Strategy',
      icon: '👨‍💼',
    },
    {
      name: 'Lisa Anderson',
      role: 'Content Strategist',
      specialty: 'Content & Copywriting',
      icon: '👩‍✈️',
    },
  ];

  return (
    <section className="border-y border-[#0A192F]/5 bg-[#0f2d3f]/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#00E5FF] md:text-4xl lg:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Meet the talented professionals behind Lumina Motion Labs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border border-slate-700 bg-[#0f2d3f]/40 p-6 text-center shadow-sm hover:border-[#00E5FF]/20 hover:bg-[#0f2d3f] hover:shadow-md transition-all"
            >
              <div className="mb-4 text-5xl">{member.icon}</div>
              <h3 className="mb-1 font-bold text-[#00E5FF]">{member.name}</h3>
              <p className="mb-2 text-sm text-[#64FFDA] font-semibold">{member.role}</p>
              <p className="text-xs text-gray-400">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
