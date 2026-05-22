import { Metadata } from 'next';
import { LegalPageSection } from '@/components/sections/legal-page-section';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Lumina Motion Labs',
  description: 'Terms and conditions for using Lumina Motion Labs services.',
  robots: {
    index: false,
  },
};

export default function TermsPage() {
  return (
    <LegalPageSection
      title="Terms & Conditions"
      lastUpdated="January 2024"
      sections={[
        {
          heading: 'Agreement to Terms',
          content: `By accessing this website, you agree to be bound by these terms and conditions. If you do not agree to abide by any portion of these terms and conditions, then you have no right to use this site.`,
        },
        {
          heading: 'License to Use Website',
          content: `Lumina Motion Labs grants you a limited, non-exclusive, non-transferable license to access and use our website for lawful purposes only. You may not:
- Reproduce or copy content without permission
- Use the site for any illegal purpose
- Attempt to gain unauthorized access
- Engage in any conduct that restricts or inhibits use of the website`,
        },
        {
          heading: 'Intellectual Property Rights',
          content: `All content, features, and functionality on our website are owned by Lumina Motion Labs, unless otherwise stated. Unauthorized use of this material is prohibited.`,
        },
        {
          heading: 'Limitation of Liability',
          content: `In no event shall Lumina Motion Labs be liable for any damages arising out of or relating to your use of the website, including but not limited to indirect, incidental, special, or consequential damages.`,
        },
        {
          heading: 'Indemnification',
          content: `You agree to indemnify and hold harmless Lumina Motion Labs from any claims, damages, losses, or expenses arising from your use of the website or violation of these terms.`,
        },
        {
          heading: 'Service Modifications',
          content: `We reserve the right to modify or discontinue our services at any time, with or without notice.`,
        },
        {
          heading: 'Governing Law',
          content: `These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction.`,
        },
      ]}
    />
  );
}
