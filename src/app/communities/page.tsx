'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, MapPin, ArrowRight } from 'lucide-react';
import { COMMUNITIES } from '@/data/mockData';
import { CommunityCard } from '@/components/common/CommunityCard';

export default function CommunitiesDirectoryPage() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');

  const filteredCommunities = COMMUNITIES.filter((c) => {
    if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.tagline.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (filterType && !c.propertyTypes.some(t => t.toLowerCase().includes(filterType.toLowerCase()))) {
      return false;
    }
    return true;
  });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Discover Dubai Area Guides</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Dubai Area Guides</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Explore Dubai. Find your place.
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          From tranquil family golf sanctuaries to bustling waterfront marinas and iconic island mansions, discover comprehensive lifestyle guides, rental yields, school ratings, and property market dynamics for Dubai&apos;s leading communities.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-brand-stone p-5 mb-10 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search community name..."
            className="w-full bg-brand-ivory/50 border border-brand-stone/70 px-3.5 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
          />
          <Search className="w-4 h-4 text-brand-charcoal/40 absolute right-3 top-3" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Lifestyle:</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-brand-ivory/50 border border-brand-stone/70 px-3 py-2 text-xs text-brand-charcoal font-medium focus:outline-none focus:border-brand-primary"
          >
            <option value="">All Lifestyles</option>
            <option value="Villa">Villa Communities</option>
            <option value="Apartment">Apartment Districts</option>
            <option value="Penthouse">Waterfront & Luxury</option>
          </select>
        </div>
      </div>

      {/* Community Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCommunities.map((community) => (
          <CommunityCard key={community.slug} community={community} />
        ))}
      </div>
    </div>
  );
}

