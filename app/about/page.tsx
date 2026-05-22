import { Metadata } from 'next';
import { AboutHeroSection } from '@/components/sections/about-hero-section';
import { AboutStorySection } from '@/components/sections/about-story-section';
import { TeamSection } from '@/components/sections/team-section';
import { AchievementsSection } from '@/components/sections/achievements-section';

export const metadata: Metadata = {
  title: 'About Us - Lumina Motion Labs',
  description:
    'Learn about our award-winning agency, our mission to transform brands, and the talented team behind Lumina Motion Labs.',
  openGraph: {
    title: 'About Us - Lumina Motion Labs',
    description:
      'Learn about our award-winning agency, our mission to transform brands, and the talented team behind Lumina Motion Labs.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <TeamSection />
      <AchievementsSection />
    </>
  );
}
