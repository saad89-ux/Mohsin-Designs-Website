import { Metadata } from 'next';
import { PortfolioGridSection } from '@/components/sections/portfolio-grid-section';

export const metadata: Metadata = {
  title: 'Portfolio - Lumina Motion Labs',
  description:
    'Explore our latest projects and case studies showcasing successful brand transformations.',
};

export default function PortfolioPage() {
  return <PortfolioGridSection />;
}
