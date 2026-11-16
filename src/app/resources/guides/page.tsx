'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GUIDES } from '@/data/mockData';

export default function GuidesDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Investment Playbook', 'Buyers Guide', 'Tenants Guide'];

  const filteredGuides = selectedCategory === 'All'
    ? GUIDES
    : GUIDES.filter((g) => g.category === selectedCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Real Estate Guides</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Educational Resource Library
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Dubai Property Guides
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Comprehensive, legally verified guides authored by haus & haus brokers and conveyancing experts. Master the nuances of property acquisitions, tenancies, mortgage structuring, and off-plan investments.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-brand-stone/40 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === cat
                ? 'bg-brand-primary text-white'
                : 'bg-white border border-brand-stone/60 text-brand-charcoal hover:border-brand-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/resources/guides/${guide.slug}`}
            className="card-luxury flex flex-col group overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-stone/20">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-brand-primary text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1">
                  {guide.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-brand-charcoal/60 mb-2">
                  <span>{guide.publishedDate}</span>
                  <span>{guide.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
                  {guide.title}
                </h3>

                <p className="text-xs text-brand-charcoal/70 line-clamp-3 mt-2 leading-relaxed">
                  {guide.description}
                </p>

                <div className="mt-4 pt-3 border-t border-brand-stone/40 text-[11px] text-brand-charcoal/80 space-y-1">
                  <p className="font-semibold text-brand-charcoal">Key Topics Covered:</p>
                  {guide.tableOfContents.slice(0, 3).map((toc) => (
                    <p key={toc} className="truncate text-brand-charcoal/70">&bull; {toc}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

