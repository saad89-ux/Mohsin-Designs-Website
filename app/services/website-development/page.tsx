import { Metadata } from 'next';
import { ServiceDetailSection } from '@/components/sections/service-detail-section';

export const metadata: Metadata = {
  title: 'Website Development - Lumina Motion Labs',
  description:
    'Custom website development services with modern technologies and exceptional user experience design.',
};

export default function WebsiteDevelopmentPage() {
  return (
    <ServiceDetailSection
      title="Website Development"
      subtitle="Build powerful digital experiences"
      description="We develop high-performance websites with cutting-edge technology, SEO optimization, and stunning design."
      features={[
        'Responsive design',
        'SEO optimized',
        'Fast performance',
        'Mobile-first approach',
        'Security & SSL',
        'CMS integration',
      ]}
      cta="Get a Custom Quote"
      processSteps={[
        { title: 'Strategy', description: 'Plan site architecture' },
        { title: 'Design', description: 'Create stunning visuals' },
        { title: 'Development', description: 'Build with modern tech' },
        { title: 'Launch', description: 'Deploy & optimize' },
      ]}
      pricing={[
        { name: 'Starter', price: '$2,499', features: ['5-10 pages', 'Responsive design', 'Basic SEO', 'Contact form'] },
        { name: 'Professional', price: '$4,999', features: ['10-20 pages', 'CMS integration', 'Advanced SEO', 'E-commerce basics'] },
        { name: 'Enterprise', price: '$8,000+', features: ['Custom build', 'Full e-commerce', 'API integration', 'Support & maintenance'] },
      ]}
    />
  );
}
