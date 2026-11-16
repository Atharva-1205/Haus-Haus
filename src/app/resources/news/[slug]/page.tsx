'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Calendar, Clock, ArrowRight, Share2 } from 'lucide-react';
import { NEWS_ARTICLES } from '@/data/mockData';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = NEWS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources/news" className="hover:text-brand-primary">News</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Header */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 text-xs text-brand-secondary font-semibold mb-3">
          <span className="badge-sage">{article.category}</span>
          <span className="flex items-center gap-1 text-brand-charcoal/60">
            <Calendar className="w-3.5 h-3.5" /> {article.publishedDate}
          </span>
          <span className="flex items-center gap-1 text-brand-charcoal/60">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal leading-tight">
          {article.title}
        </h1>

        <div className="mt-6 flex items-center gap-3 pb-6 border-b border-brand-stone/40">
          <img
            src={article.author.image}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover border border-brand-primary"
          />
          <div>
            <p className="text-xs font-bold text-brand-charcoal">{article.author.name}</p>
            <p className="text-[11px] text-brand-charcoal/60">{article.author.title}</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-[21/9] w-full overflow-hidden bg-brand-charcoal shadow-card">
        <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" />
      </div>

      {/* Main Content Two-Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-brand-stone p-8 sm:p-10 shadow-subtle space-y-4">
            <div className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed space-y-4">
              {article.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-brand-stone/40 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-[11px] bg-brand-ivory border border-brand-stone/60 px-3 py-1 text-brand-charcoal">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <EnquiryForm
            defaultDepartment="Residential Sales"
            title="Subscribe & Speak to our Advisory Team"
          />
        </div>
      </div>
    </div>
  );
}

