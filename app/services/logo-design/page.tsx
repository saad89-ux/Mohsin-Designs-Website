import { Metadata } from 'next';
import { ServiceDetailSection } from '@/components/sections/service-detail-section';

export const metadata: Metadata = {
  title: 'Logo Design Service - Lumina Motion Labs',
  description:
    'Professional logo design services that create memorable brand identities for your business.',
};

export default function LogoDesignPage() {
  return (
    <ServiceDetailSection
      title="Logo Design"
      subtitle="Create a memorable brand identity"
      description="Our award-winning designers craft custom logos that perfectly represent your brand's essence and values."
      features={[
        'Custom logo concepts',
        'Brand identity guidelines',
        'Multiple revision rounds',
        '100% original designs',
        'Unlimited concepts',
        'Commercial rights included',
      ]}
      cta="Get a Quote"
      processSteps={[
        { title: 'Discovery', description: 'Understand your brand vision' },
        { title: 'Ideation', description: 'Create multiple concepts' },
        { title: 'Refinement', description: 'Polish your favorite design' },
        { title: 'Delivery', description: 'All file formats & guidelines' },
      ]}
      pricing={[
        { name: 'Starter', price: '$499', features: ['3 concepts', '3 revisions', 'Basic files'] },
        { name: 'Professional', price: '$999', features: ['5 concepts', 'Unlimited revisions', 'All formats', 'Brand guidelines'] },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited concepts', 'Priority support', 'Brand strategy', 'Extended license'] },
      ]}
    />
  );
}
