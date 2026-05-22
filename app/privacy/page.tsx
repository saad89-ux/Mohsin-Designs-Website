import { Metadata } from 'next';
import { LegalPageSection } from '@/components/sections/legal-page-section';

export const metadata: Metadata = {
  title: 'Privacy Policy - Lumina Motion Labs',
  description: 'Privacy policy for Lumina Motion Labs.',
  robots: {
    index: false,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageSection
      title="Privacy Policy"
      lastUpdated="January 2024"
      sections={[
        {
          heading: 'Introduction',
          content: `At Lumina Motion Labs, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your personal information.`,
        },
        {
          heading: 'Information We Collect',
          content: `We may collect information about you in a variety of ways. The information we may collect on the Site includes:
- Your name, email address, and phone number
- Your company name and website URL
- Information you submit through contact forms
- Usage data and analytics`,
        },
        {
          heading: 'How We Use Your Information',
          content: `We use the information we collect in the following ways:
- To respond to your inquiries
- To send marketing communications
- To improve our website and services
- To analyze usage patterns
- To comply with legal obligations`,
        },
        {
          heading: 'Cookies and Tracking',
          content: `We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect your browsing experience.`,
        },
        {
          heading: 'Third-Party Disclosure',
          content: `We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice.`,
        },
        {
          heading: 'Data Security',
          content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
        },
        {
          heading: 'Contact Us',
          content: `If you have any questions about this Privacy Policy, please contact us at privacy@luminamotionlabs.com.`,
        },
      ]}
    />
  );
}
