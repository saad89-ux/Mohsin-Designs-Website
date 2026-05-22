import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Lumina Motion Labs',
  description:
    'Comprehensive digital services including web design, branding, SEO, and digital marketing.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
