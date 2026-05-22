import { Metadata } from 'next';
import { LegalPageSection } from '@/components/sections/legal-page-section';

export const metadata: Metadata = {
  title: 'Cookie Policy - Lumina Motion Labs',
  description: 'Cookie policy for Lumina Motion Labs website.',
  robots: {
    index: false,
  },
};

export default function CookiePage() {
  return (
    <LegalPageSection
      title="Cookie Policy"
      lastUpdated="January 2024"
      sections={[
        {
          heading: 'What Are Cookies?',
          content: `Cookies are small files stored on your device that contain information about your browsing habits and preferences. They help websites remember your preferences and improve your experience.`,
        },
        {
          heading: 'Types of Cookies We Use',
          content: `We use the following types of cookies:
- Essential Cookies: Required for the website to function properly
- Performance Cookies: Help us analyze how visitors use our site
- Functional Cookies: Remember your preferences
- Marketing Cookies: Track your activity for targeted advertising`,
        },
        {
          heading: 'Cookie Retention',
          content: `Essential cookies are retained for the duration of your session. Performance and functional cookies may be retained for longer periods to improve your experience.`,
        },
        {
          heading: 'Managing Cookies',
          content: `You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, blocking cookies may affect your ability to use certain features of our website.`,
        },
        {
          heading: 'Third-Party Cookies',
          content: `Some cookies are set by third-party services, including:
- Google Analytics for website analytics
- Social media platforms for integration
- Advertising networks for personalized content`,
        },
        {
          heading: 'Your Consent',
          content: `By using our website, you consent to our use of cookies as described in this policy. You can withdraw consent at any time by adjusting your browser settings.`,
        },
        {
          heading: 'EU Users',
          content: `If you are in the EU, you have specific rights under GDPR regarding cookies. We obtain your consent before setting non-essential cookies.`,
        },
      ]}
    />
  );
}
