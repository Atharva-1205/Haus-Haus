'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Search, 
  SlidersHorizontal, 
  Grid, 
  List, 
  X, 
  ChevronRight,
  RotateCcw,
  Building,
  MapPin
} from 'lucide-react';
import { PropertyCard } from '@/components/common/PropertyCard';
import { PROPERTIES, COMMUNITIES } from '@/data/mockData';
import { Property } from '@/types';

function BuyListingsContent() {
  const searchParams = useSearchParams();

  // Search parameters from URL
  const initialSearch = searchParams.get('search') || '';
  const initialCommunity = searchParams.get('community') || '';
  const initialType = searchParams.get('type') || '';
  const initialBedrooms = searchParams.get('bedrooms') || '';
  const initialMaxPrice = searchParams.get('maxPrice') || '';

  const [search, setSearch] = useState(initialSearch);
  const [community, setCommunity] = useState(initialCommunity);
  const [propertyType, setPropertyType] = useState(initialType);
  const [bedrooms, setBedrooms] = useState(initialBedrooms);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'area-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter properties (strictly For Sale residential)
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (p.status !== 'For Sale') return false;
      if (p.commercial) return false;

      if (search) {
        const q = search.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesComm = p.community.toLowerCase().includes(q);
        const matchesRef = p.reference.toLowerCase().includes(q);
        if (!matchesTitle && !matchesComm && !matchesRef) return false;
      }

      if (community && p.community !== community) {
        return false;
      }

      if (propertyType && p.type !== propertyType) {
        return false;
      }

      if (bedrooms && p.bedrooms < parseInt(bedrooms)) {
        return false;
      }

      if (maxPrice && p.price > parseInt(maxPrice)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'area-desc') return b.bua - a.bua;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [search, community, propertyType, bedrooms, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearch('');
    setCommunity('');
    setPropertyType('');
    setBedrooms('');
    setMaxPrice('');
    setSortBy('featured');
  };

  const hasActiveFilters = Boolean(search || community || propertyType || bedrooms || maxPrice);

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Properties for Sale</span>
      </nav>

      {/* Header and SEO Introduction */}
      <div className="mb-10">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Dubai Residential Sales</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Properties for Sale in Dubai
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Discover prestigious residential properties across Dubai&apos;s most coveted master communities. From luxury golf course villas in Dubai Hills Estate to prime beachfront penthouses on Palm Jumeirah, our licensed brokers provide unmatched insight and seamless transaction advisory.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-brand-stone p-4 sm:p-6 mb-8 shadow-subtle">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
          {/* Keyword Search */}
          <div className="lg:col-span-1">
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Search Keyword
            </label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Golf Grove, Villa..."
                className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-2.5 top-2.5 text-brand-charcoal/50 hover:text-brand-charcoal">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Community Filter */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Community
            </label>
            <select
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">All Communities</option>
              {COMMUNITIES.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">All Types</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Min Bedrooms
            </label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">Any Beds</option>
              <option value="1">1+ Bed</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Max Price (AED)
            </label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">No Limit</option>
              <option value="5000000">AED 5,000,000</option>
              <option value="10000000">AED 10,000,000</option>
              <option value="20000000">AED 20,000,000</option>
              <option value="35000000">AED 35,000,000</option>
            </select>
          </div>
        </div>

        {/* Reset & Active Filter Pills */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-brand-stone/40">
            <span className="text-xs text-brand-charcoal/60 font-medium mr-1">Active Filters:</span>
            {community && (
              <span className="badge-sage flex items-center gap-1">
                {community} <button onClick={() => setCommunity('')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {propertyType && (
              <span className="badge-sage flex items-center gap-1">
                {propertyType} <button onClick={() => setPropertyType('')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {bedrooms && (
              <span className="badge-sage flex items-center gap-1">
                {bedrooms}+ Beds <button onClick={() => setBedrooms('')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {maxPrice && (
              <span className="badge-sage flex items-center gap-1">
                Up to AED {parseInt(maxPrice).toLocaleString()} <button onClick={() => setMaxPrice('')}><X className="w-3 h-3" /></button>
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-xs text-red-700 hover:underline flex items-center gap-1 ml-auto font-medium"
            >
              <RotateCcw className="w-3 h-3" /> Reset All
            </button>
          </div>
        )}
      </div>

      {/* Toolbar: Count, Sorting & Grid/List view */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-brand-stone/40 gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Showing <span className="text-brand-primary">{filteredProperties.length}</span> Properties Available for Sale
          </p>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          {/* Sorting */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-brand-charcoal/60 uppercase font-semibold text-[10px]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-brand-stone/60 px-2.5 py-1.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Size: Largest First</option>
            </select>
          </div>

          {/* Grid / List View Toggle */}
          <div className="hidden sm:flex items-center border border-brand-stone/60 bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-brand-primary text-white' : 'text-brand-charcoal hover:text-brand-primary'}`}
              aria-label="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-brand-primary text-white' : 'text-brand-charcoal hover:text-brand-primary'}`}
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Properties Results Grid */}
      {filteredProperties.length > 0 ? (
        <div className={`mt-8 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}`}>
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-brand-stone p-12 text-center my-10 space-y-4 shadow-subtle">
          <Building className="w-12 h-12 text-brand-sage mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-brand-charcoal">No Properties Matched Your Criteria</h3>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-md mx-auto">
            Try adjusting your search criteria, widening the price boundary, or clearing active filters to see available homes.
          </p>
          <button
            onClick={resetFilters}
            className="btn-primary text-xs uppercase tracking-wider font-bold"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Valuation & Advisory Bottom CTA */}
      <div className="mt-20 bg-brand-primary text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-secondary">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">Property Owners</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-1">
            Thinking of selling your Dubai property?
          </h3>
          <p className="text-xs sm:text-sm text-brand-stone/80 mt-2 max-w-xl">
            Obtain a comprehensive market appraisal backed by verified Land Department sales records from our senior community specialists.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
          <Link
            href="/valuation"
            className="px-6 py-3.5 bg-brand-sage text-brand-primary text-xs uppercase tracking-widest font-bold hover:bg-white text-center transition-colors"
          >
            Request Free Valuation
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 border border-brand-sage text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-sage hover:text-brand-primary text-center transition-colors"
          >
            Speak to Sales Lead
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BuyPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-brand-charcoal/60">Loading properties...</div>}>
      <BuyListingsContent />
    </Suspense>
  );
}

