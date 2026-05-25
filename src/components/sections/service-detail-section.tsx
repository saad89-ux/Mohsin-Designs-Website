'use client';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  processSteps: Array<{ title: string; description: string }>;
  pricing: Array<{ name: string; price: string; features: string[] }>;
}

export function ServiceDetailSection({
  title,
  subtitle,
  description,
  features,
  cta,
  processSteps,
  pricing,
}: ServiceDetailProps) {
  return (
    <section className="min-h-screen py-20 pt-40 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#0A192F] md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mb-4 text-xl text-[#0A192F] font-semibold">{subtitle}</p>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{description}</p>
        </div>

        {/* Features */}
        <div className="mb-20 rounded-lg border border-slate-100 bg-[#0f2d3f]/40 p-8 shadow-sm">
          <h2 className="mb-8 text-2xl font-bold text-[#0A192F]">What's Included</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-gray-700">
                <div className="h-2 w-2 rounded-full bg-[#0A192F] flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-[#0A192F]">Our Process</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-lg border border-slate-100 bg-[#0f2d3f]/40 p-6 shadow-sm hover:border-[#0A192F]/20 hover:bg-white hover:shadow-md transition-all">
                <h3 className="mb-2 font-bold text-[#0A192F]">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-[#0A192F]">Pricing Plans</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className="rounded-lg border border-slate-100 bg-[#0f2d3f]/40 p-8 shadow-sm hover:border-[#0A192F]/20 hover:bg-white hover:shadow-md transition-all"
              >
                <h3 className="mb-2 text-xl font-bold text-[#0A192F]">{plan.name}</h3>
                <div className="mb-6 text-3xl font-bold text-[#0A192F]">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-2 w-2 rounded-full bg-[#0A192F] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="rounded-lg bg-[#0A192F] px-8 py-4 font-semibold text-[#64FFDA] transition-all hover:bg-[#0A192F]/90 hover:shadow-lg hover:shadow-[#0A192F]/20">
            {cta}
          </button>
        </div>
      </div>
    </section>
  );
}
