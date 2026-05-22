import { Metadata } from 'next';
import { ServiceDetailSection } from '@/components/sections/service-detail-section';

export const metadata: Metadata = {
  title: 'Technical SEO Service - Lumina Motion Labs',
  description:
    'Advanced technical SEO services to improve your website visibility and organic search rankings.',
};

export default function TechnicalSEOPage() {
  return (
    <ServiceDetailSection
      title="Technical SEO"
      subtitle="Optimize your website for search engines"
      description="We conduct comprehensive technical audits and implement strategic optimizations to boost your search visibility."
      features={[
        'Site speed optimization',
        'Mobile responsiveness',
        'XML sitemap & robots.txt',
        'Structured data markup',
        'SSL certificate setup',
        'Core Web Vitals optimization',
      ]}
      cta="Request Free Audit"
      processSteps={[
        { title: 'Audit', description: 'Comprehensive technical analysis' },
        { title: 'Strategy', description: 'Develop optimization roadmap' },
        { title: 'Implementation', description: 'Execute technical fixes' },
        { title: 'Monitoring', description: 'Track performance improvements' },
      ]}
      pricing={[
        { name: 'Starter', price: '$399/mo', features: ['Site audit', '5 optimizations', 'Monthly reports'] },
        { name: 'Professional', price: '$799/mo', features: ['Deep audit', 'Full optimization', 'Weekly reports', 'CMS integration'] },
        { name: 'Enterprise', price: 'Custom', features: ['24/7 support', 'Custom solutions', 'API integration', 'Consulting'] },
      ]}
    />
  );
}
