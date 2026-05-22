import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { TrustedBrandsSection } from '@/components/sections/trusted-brands-section';
import { ServicesOverviewSection } from '@/components/sections/services-overview-section';
import { ResultsSection } from '@/components/sections/results-section';
import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ProcessSection } from '@/components/sections/process-section';
import { CTASection } from '@/components/sections/cta-section';
import { FAQSection } from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Home - Lumina Motion Labs',
  description:
    'Transform your brand with cutting-edge digital solutions. Award-winning agency specializing in web design, branding, and digital marketing.',
  openGraph: {
    title: 'Home - Lumina Motion Labs',
    description:
      'Transform your brand with cutting-edge digital solutions. Award-winning agency specializing in web design, branding, and digital marketing.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      <ServicesOverviewSection />
      <ResultsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
