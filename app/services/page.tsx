import { Metadata } from 'next';
import { ServicesGridSection } from '@/components/sections/services-grid-section';

export const metadata: Metadata = {
  title: 'Services - Lumina Motion Labs',
  description:
    'Explore our comprehensive digital services designed to transform your brand and drive growth.',
};

export default function ServicesPage() {
  return <ServicesGridSection />;
}
