import { Metadata } from 'next';
import { BlogListSection } from '@/components/sections/blog-list-section';

export const metadata: Metadata = {
  title: 'Blog - Lumina Motion Labs',
  description:
    'Read our latest insights on digital marketing, SEO, design trends, and agency updates.',
};

export default function BlogPage() {
  return <BlogListSection />;
}
