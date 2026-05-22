import { Metadata } from 'next';
import { ServiceDetailSection } from '@/components/sections/service-detail-section';

export const metadata: Metadata = {
  title: 'Brand Identity Design - Lumina Motion Labs',
  description:
    'Complete brand identity design services that establish a strong and cohesive brand presence.',
};

export default function BrandIdentityPage() {
  return (
    <ServiceDetailSection
      title="Brand Identity Design"
      subtitle="Build a complete brand presence"
      description="From logo to brand guidelines, we create comprehensive brand identities that resonate with your audience."
      features={[
        'Logo design & variations',
        'Color palette development',
        'Typography system',
        'Brand guidelines document',
        'Business card & letterhead',
        'Marketing collateral templates',
      ]}
      cta="Get a Custom Quote"
      processSteps={[
        { title: 'Discovery', description: 'Deep dive into your brand' },
        { title: 'Strategy', description: 'Define brand positioning' },
        { title: 'Design', description: 'Create visual identity system' },
        { title: 'Guidelines', description: 'Document brand standards' },
      ]}
      pricing={[
        { name: 'Starter', price: '$1,499', features: ['Logo & colors', 'Basic guidelines', 'Digital assets'] },
        { name: 'Professional', price: '$2,999', features: ['Complete identity', 'Comprehensive guidelines', 'Collateral designs', 'Brand book'] },
        { name: 'Enterprise', price: '$5,000+', features: ['Full brand strategy', 'Custom illustrations', 'Animation assets', 'Ongoing support'] },
      ]}
    />
  );
}
