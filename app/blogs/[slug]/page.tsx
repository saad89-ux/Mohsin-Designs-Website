import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostSection } from '@/components/sections/blog-post-section';

const blogPosts: Record<string, any> = {
  'seo-guide-2024': {
    title: 'Complete SEO Guide for 2024',
    date: 'Mar 15, 2024',
    author: 'Sarah Johnson',
    category: 'SEO',
    content: `
      # The Ultimate SEO Guide for 2024

      Search Engine Optimization continues to evolve. Here's what you need to know...

      ## Core Web Vitals Importance

      Google has made Core Web Vitals a ranking factor. Your site speed and responsiveness matter more than ever.

      ## Content Strategy

      Quality content is still king. Focus on:
      - User intent
      - Comprehensive coverage
      - E-E-A-T (Experience, Expertise, Authority, Trust)
      
      ## Technical SEO

      Ensure your site has:
      - Proper schema markup
      - XML sitemaps
      - Mobile optimization
      - Fast load times

      ## Link Building

      Focus on quality over quantity. Build relationships and earn natural backlinks.
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-adf4198c838f?w=1200&h=600&fit=crop',
  },
  'design-trends-2024': {
    title: 'Web Design Trends Dominating 2024',
    date: 'Mar 20, 2024',
    author: 'Alex Chen',
    category: 'Design',
    content: `
      # 2024 Web Design Trends

      The design landscape is constantly evolving. Here are the trends shaping digital experiences...

      ## Minimalism Returns

      Clean, minimal designs are making a comeback with purpose-driven simplicity.

      ## Dark Mode Everywhere

      Dark mode options have become essential for user comfort and engagement.

      ## Interactive Elements

      Users expect interactivity. Micro-interactions and animations enhance experience.

      ## Accessibility First

      Designing with accessibility in mind is no longer optional - it's essential.
    `,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <BlogPostSection
      {...post}
      slug={slug}
    />
  );
}
