'use client';

import Link from 'next/link';
import { ArrowLeft, Share2 } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
  slug: string;
}

export function BlogPostSection({ title, date, author, category, content, slug }: BlogPostProps) {
  return (
    <section className="min-h-screen py-20 pt-40 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        {/* Navigation */}
        <Link href="/blogs" className="mb-8 inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-[#0305a8]">
          <ArrowLeft className="h-4 w-4 text-[#0305a8]" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="mb-3 inline-block rounded-full bg-[#0305a8]/5 px-3 py-1 text-xs font-semibold text-[#0305a8]">
            {category}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-[#0305a8] md:text-5xl">{title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{date}</span>
            <span>•</span>
            <span>By {author}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="mb-12 rounded-lg border border-slate-100 bg-[#f7f8fc]/40 p-8 max-w-none shadow-sm">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="space-y-4 text-gray-700 leading-relaxed"
          />
        </div>

        {/* Share */}
        <div className="border-t border-slate-100 pt-8">
          <p className="mb-4 font-semibold text-[#0305a8]">Share this post</p>
          <div className="flex gap-4">
            <button className="rounded-lg border border-slate-200 bg-white p-3 text-[#0305a8] transition-all hover:bg-slate-50 hover:shadow-sm">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg border border-[#0305a8]/10 bg-[#f7f8fc]/60 p-8 text-center shadow-sm">
          <h3 className="mb-2 font-bold text-[#0305a8]">Interested in working with us?</h3>
          <p className="mb-4 text-gray-600">Let's discuss how we can help your business grow.</p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#0305a8] px-6 py-3 font-semibold text-[#fff35c] transition-all hover:bg-[#0305a8]/90 hover:shadow-lg hover:shadow-[#0305a8]/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
