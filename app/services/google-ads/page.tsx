import { Metadata } from 'next';
import { ServiceDetailSection } from '@/components/sections/service-detail-section';

export const metadata: Metadata = {
  title: 'Google Ads Management - Lumina Motion Labs',
  description:
    'Expert Google Ads management to maximize ROI and drive qualified leads to your business.',
};

export default function GoogleAdsPage() {
  return (
    <ServiceDetailSection
      title="Google Ads Management"
      subtitle="Drive qualified leads with precision targeting"
      description="Our PPC specialists create and manage high-performing Google Ads campaigns that deliver measurable ROI."
      features={[
        'Campaign strategy & planning',
        'Keyword research & optimization',
        'A/B testing & optimization',
        'Landing page optimization',
        'Conversion tracking setup',
        'Monthly performance reports',
      ]}
      cta="Get a Custom Quote"
      processSteps={[
        { title: 'Strategy', description: 'Define goals and target audience' },
        { title: 'Setup', description: 'Create optimized campaigns' },
        { title: 'Optimization', description: 'Continuous testing and improvement' },
        { title: 'Scaling', description: 'Increase ROI and scale campaigns' },
      ]}
      pricing={[
        { name: 'Starter', price: '$500 + Ad Spend', features: ['1 campaign', 'Daily optimization', 'Monthly reports'] },
        { name: 'Professional', price: '$1,500 + Ad Spend', features: ['5 campaigns', 'A/B testing', 'Weekly optimization', 'Advanced reporting'] },
        { name: 'Enterprise', price: 'Custom + Ad Spend', features: ['Unlimited campaigns', 'Multi-channel', '24/7 management', 'Strategic consulting'] },
      ]}
    />
  );
}
