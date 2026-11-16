import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  TrendingUp, 
  Headphones, 
  Calculator, 
  Building, 
  ChevronRight, 
  ArrowRight,
  BookOpen,
  PieChart
} from 'lucide-react';
import { GUIDES, NEWS_ARTICLES, MARKET_REPORTS, PODCAST_EPISODES } from '@/data/mockData';

export default function ResourcesHubPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Resources & Intelligence</span>
      </nav>

      {/* Header */}
      <div className="border-b border-brand-stone/60 pb-10">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Market Intelligence & Research
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Knowledge that moves you forward.
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Access verified quarterly real estate transaction data, comprehensive legal buying playbooks, financial yield calculators, and in-depth discussions with leading UAE developers.
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          href="/resources/guides"
          className="card-luxury p-6 flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 bg-brand-stone/30 group-hover:bg-brand-primary transition-colors flex items-center justify-center text-brand-primary group-hover:text-white mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
              Real Estate Guides
            </h2>
            <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed">
              Step-by-step handbooks: Buyers Guide, Tenants Guide, Landlords Guide, and Investment Playbooks.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
            <span>Explore Guides</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link
          href="/resources/market-reports"
          className="card-luxury p-6 flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 bg-brand-stone/30 group-hover:bg-brand-primary transition-colors flex items-center justify-center text-brand-primary group-hover:text-white mb-4">
              <PieChart className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
              Market Reports
            </h2>
            <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed">
              Quarterly macro-level transaction audits analyzing capital appreciation and rental yield trends.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
            <span>Read Reports</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link
          href="/calculators/rental-yield"
          className="card-luxury p-6 flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 bg-brand-stone/30 group-hover:bg-brand-primary transition-colors flex items-center justify-center text-brand-primary group-hover:text-white mb-4">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
              Property Calculators
            </h2>
            <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed">
              Live interactive tools: Rental Yield Calculator & Buy vs Rent comparative financial analysis.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
            <span>Calculate Yields</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link
          href="/resources/podcast"
          className="card-luxury p-6 flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 bg-brand-stone/30 group-hover:bg-brand-primary transition-colors flex items-center justify-center text-brand-primary group-hover:text-white mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
              Property Podcast
            </h2>
            <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed">
              Conversations with founders, managing directors, and top industry guests on market realities.
            </p>
          </div>
          <div className="mt-6 pt-3 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
            <span>Listen Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Featured Market Intelligence Section */}
      <div className="bg-brand-sand/40 border border-brand-stone p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Latest Intelligence</span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal mt-1">
              Recent News & Articles
            </h2>
          </div>
          <Link href="/resources/news" className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary">
            View All News ({NEWS_ARTICLES.length}) &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/news/${article.slug}`}
              className="card-luxury p-6 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">
                  {article.category} &bull; {article.readTime}
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors mt-2">
                  {article.title}
                </h3>
                <p className="text-xs text-brand-charcoal/70 line-clamp-3 mt-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

