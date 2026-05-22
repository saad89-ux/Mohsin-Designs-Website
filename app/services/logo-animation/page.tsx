import { Metadata } from 'next';
import { ServiceDetailSection } from '@/components/sections/service-detail-section';

export const metadata: Metadata = {
  title: 'Logo Animation - Lumina Motion Labs',
  description:
    'Professional logo animation services that bring your brand to life with stunning motion graphics.',
};

export default function LogoAnimationPage() {
  return (
    <ServiceDetailSection
      title="Logo Animation"
      subtitle="Bring your brand to life"
      description="Our motion designers create engaging logo animations perfect for videos, websites, and social media."
      features={[
        'Custom animation design',
        'Multiple animation styles',
        'Multiple file formats',
        'Storyboard creation',
        'Sound design integration',
        'Unlimited revisions',
      ]}
      cta="Get a Custom Quote"
      processSteps={[
        { title: 'Concept', description: 'Define animation style' },
        { title: 'Storyboard', description: 'Plan animation sequence' },
        { title: 'Animation', description: 'Create smooth motion' },
        { title: 'Delivery', description: 'Multiple formats & quality' },
      ]}
      pricing={[
        { name: 'Starter', price: '$599', features: ['1 animation', '3 revisions', 'MP4 & GIF'] },
        { name: 'Professional', price: '$1,199', features: ['3 animations', 'Unlimited revisions', 'All formats', 'Sound design'] },
        { name: 'Enterprise', price: '$2,499+', features: ['Custom package', 'Team animations', 'Priority support', 'Extended license'] },
      ]}
    />
  );
}
