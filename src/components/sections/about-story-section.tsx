'use client';

export function AboutStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0305a8] md:text-4xl">Our Story</h2>
            <div className="space-y-4 text-gray-600">
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
            <h2 className="mb-6 text-3xl font-bold text-[#0305a8] md:text-4xl">Our Mission</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-slate-100 bg-[#f7f8fc]/40 p-6 shadow-sm hover:border-[#0305a8]/20 transition-all hover:shadow-md">
                <h3 className="mb-2 font-semibold text-[#0305a8]">Vision</h3>
                <p className="text-sm text-gray-600">
                  To be the most trusted digital partner for brands seeking to innovate
                  and grow in the digital landscape.
                </p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-[#f7f8fc]/40 p-6 shadow-sm hover:border-[#0305a8]/20 transition-all hover:shadow-md">
                <h3 className="mb-2 font-semibold text-[#0305a8]">Values</h3>
                <p className="text-sm text-gray-600">
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
