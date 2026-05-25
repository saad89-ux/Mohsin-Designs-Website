'use client';

import Link from 'next/link';
import { ArrowUpRight, Calendar, User, Tag } from 'lucide-react';

export function BlogListSection() {
  const posts = [
    {
      slug: 'seo-guide-2024',
      title: 'Complete SEO Guide for 2024',
      excerpt: 'Master the latest SEO strategies and techniques to improve your search visibility.',
      date: 'Mar 15, 2024',
      author: 'Sarah Johnson',
      category: 'SEO',
      image: '📚',
    },
    {
      slug: 'design-trends-2024',
      title: 'Web Design Trends Dominating 2024',
      excerpt: 'Discover the hottest web design trends that are shaping the digital landscape.',
      date: 'Mar 20, 2024',
      author: 'Alex Chen',
      category: 'Design',
      image: '🎨',
    },
  ];

  return (
    <section className="min-h-screen py-20 pt-40 bg-[#0A192F]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#64FFDA] md:text-5xl lg:text-6xl">Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-[#64FFDA]/70">
            Insights and strategies on digital marketing, design, and technology
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block rounded-lg border border-[#64FFDA]/20 bg-[#0f2d3f]/40 p-8 shadow-sm transition-all hover:border-[#64FFDA]/50 hover:bg-[#0f2d3f]/80 hover:shadow-md hover:shadow-[#64FFDA]/10"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="text-5xl">{post.image}</div>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-[#64FFDA] transition-colors group-hover:text-[#00E5FF]">{post.title}</h2>
              <p className="mb-4 text-[#64FFDA]/70">{post.excerpt}</p>
              <div className="flex flex-wrap gap-4 text-sm text-[#64FFDA]/60">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-[#64FFDA]" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4 text-[#64FFDA]" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4 text-[#64FFDA]" />
                  {post.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
