'use client';

export function AboutStorySection() {
  return (
    <section className="py-20 bg-[#0A192F]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#00E5FF] md:text-4xl">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2012, Lumina Motion Labs started with a simple mission: to
                create exceptional digital experiences that transform brands and drive
                business growth.
              </p>
              <p>
                What began as a small creative team has evolved into a full-service
                digital agency serving clients across various industries and markets
                worldwide.
              </p>
              <p>
                Today, we combine creative excellence with strategic thinking and
                cutting-edge technology to deliver measurable results for our clients.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#00E5FF] md:text-4xl">Our Mission</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-slate-700 bg-[#0f2d3f]/40 p-6 shadow-sm hover:border-[#00E5FF]/20 transition-all hover:shadow-md">
                <h3 className="mb-2 font-semibold text-[#00E5FF]">Vision</h3>
                <p className="text-sm text-gray-300">
                  To be the most trusted digital partner for brands seeking to innovate
                  and grow in the digital landscape.
                </p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-[#0f2d3f]/40 p-6 shadow-sm hover:border-[#00E5FF]/20 transition-all hover:shadow-md">
                <h3 className="mb-2 font-semibold text-[#00E5FF]">Values</h3>
                <p className="text-sm text-gray-300">
                  Excellence, Innovation, Integrity, Collaboration, and Results-driven
                  approach in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
