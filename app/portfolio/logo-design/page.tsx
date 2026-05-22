import { Metadata } from 'next';
import { PortfolioDetailSection } from '@/components/sections/portfolio-detail-section';

export const metadata: Metadata = {
  title: 'Logo Design Portfolio - Lumina Motion Labs',
  description:
    'View our professional logo design projects and brand identity case studies.',
};

export default function LogoDesignPortfolioPage() {
  return <PortfolioDetailSection category="Logo Design" />;
}
