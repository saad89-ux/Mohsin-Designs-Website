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
    <section className="min-h-screen py-20 pt-40 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#0305a8] md:text-5xl lg:text-6xl">Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Insights and strategies on digital marketing, design, and technology
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group block rounded-lg border border-slate-100 bg-[#f7f8fc]/40 p-8 shadow-sm transition-all hover:border-[#0305a8]/20 hover:bg-white hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="text-5xl">{post.image}</div>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-[#0305a8] transition-colors group-hover:text-[#3b82f6]">{post.title}</h2>
              <p className="mb-4 text-gray-600">{post.excerpt}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-[#0305a8]" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4 text-[#0305a8]" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4 text-[#0305a8]" />
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
