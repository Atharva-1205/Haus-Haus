import React from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, ArrowRight } from 'lucide-react';
import { NEWS_ARTICLES } from '@/data/mockData';

export default function NewsDirectoryPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">News & Insights</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Market Intelligence & Analysis
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Dubai Property News & Market Insights
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Stay informed on capital transaction volumes, rental index regulations, macroeconomic migrations, and key updates from the haus & haus leadership team.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {NEWS_ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/news/${article.slug}`}
            className="card-luxury flex flex-col group overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-stone/20">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-brand-primary text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-brand-charcoal/60 mb-2">
                  <span>{article.publishedDate}</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
                  {article.title}
                </h2>

                <p className="text-xs text-brand-charcoal/70 line-clamp-3 mt-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-stone/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-[11px] font-semibold text-brand-charcoal">{article.author.name}</span>
                </div>
                <span className="text-xs font-bold text-brand-primary group-hover:text-brand-secondary flex items-center gap-1">
                  Read &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

