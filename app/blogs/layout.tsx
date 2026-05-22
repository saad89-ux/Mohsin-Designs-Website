import { Metadata } from 'next';
import { BlogListSection } from '@/components/sections/blog-list-section';

export const metadata: Metadata = {
  title: 'Blog - Lumina Motion Labs',
  description:
    'Insights and strategies on digital marketing, SEO, branding, and web design trends.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
