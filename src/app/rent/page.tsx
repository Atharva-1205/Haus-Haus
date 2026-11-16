'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronRight, 
  Grid, 
  List, 
  X, 
  RotateCcw, 
  Building,
  KeyRound 
} from 'lucide-react';
import { PropertyCard } from '@/components/common/PropertyCard';
import { PROPERTIES, COMMUNITIES } from '@/data/mockData';

function RentListingsContent() {
  const searchParams = useSearchParams();

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
  const [furnished, setFurnished] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (p.status !== 'For Rent') return false;
      if (p.commercial) return false;

      if (search) {
        const q = search.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesComm = p.community.toLowerCase().includes(q);
        const matchesRef = p.reference.toLowerCase().includes(q);
        if (!matchesTitle && !matchesComm && !matchesRef) return false;
      }

      if (community && p.community !== community) return false;
      if (propertyType && p.type !== propertyType) return false;
      if (bedrooms && p.bedrooms < parseInt(bedrooms)) return false;
      if (maxPrice && p.price > parseInt(maxPrice)) return false;
      if (furnished && p.furnished !== furnished) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [search, community, propertyType, bedrooms, maxPrice, furnished, sortBy]);

  const resetFilters = () => {
    setSearch('');
    setCommunity('');
    setPropertyType('');
    setBedrooms('');
    setMaxPrice('');
    setFurnished('');
    setSortBy('featured');
  };

  const hasActiveFilters = Boolean(search || community || propertyType || bedrooms || maxPrice || furnished);

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Properties for Rent</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Dubai Residential Leasing</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Properties for Rent in Dubai
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Explore vetted residential tenancies in Downtown Dubai, Dubai Marina, Palm Jumeirah, and master villa developments. With verified title deeds and direct Ejari support, our leasing consultants ensure transparent, stress-free relocations.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-brand-stone p-4 sm:p-6 mb-8 shadow-subtle">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end">
          {/* Keyword Search */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Keywords..."
                className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-2.5 top-2.5 text-brand-charcoal/50 hover:text-brand-charcoal">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Community */}
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

          {/* Type */}
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
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Bedrooms
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
            </select>
          </div>

          {/* Furnishing */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Furnishing
            </label>
            <select
              value={furnished}
              onChange={(e) => setFurnished(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">Any Furnishing</option>
              <option value="Furnished">Furnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Max Rent (AED/Yr)
            </label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">No Limit</option>
              <option value="150000">AED 150,000</option>
              <option value="250000">AED 250,000</option>
              <option value="400000">AED 400,000</option>
            </select>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-brand-stone/40">
            <span className="text-xs text-brand-charcoal/60 font-medium">Active Filters:</span>
            {community && <span className="badge-sage">{community}</span>}
            {propertyType && <span className="badge-sage">{propertyType}</span>}
            {furnished && <span className="badge-sage">{furnished}</span>}
            <button onClick={resetFilters} className="text-xs text-red-700 hover:underline flex items-center gap-1 ml-auto font-medium">
              <RotateCcw className="w-3 h-3" /> Reset All
            </button>
          </div>
        )}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-brand-stone/40 gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
            Showing <span className="text-brand-primary">{filteredProperties.length}</span> Properties for Rent
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-brand-charcoal/60 uppercase font-semibold text-[10px]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-brand-stone/60 px-2.5 py-1.5 text-xs text-brand-charcoal font-medium"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          <div className="hidden sm:flex items-center border border-brand-stone/60 bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-brand-primary text-white' : 'text-brand-charcoal'}`}
              aria-label="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-brand-primary text-white' : 'text-brand-charcoal'}`}
              aria-label="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredProperties.length > 0 ? (
        <div className={`mt-8 ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}`}>
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-brand-stone p-12 text-center my-10 space-y-4 shadow-subtle">
          <Building className="w-12 h-12 text-brand-sage mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-brand-charcoal">No Rental Properties Match</h3>
          <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-md mx-auto">
            Try resetting your price or community preferences.
          </p>
          <button onClick={resetFilters} className="btn-primary text-xs uppercase tracking-wider font-bold">
            Clear Filters
          </button>
        </div>
      )}

      {/* Landlord & Holiday Rentals Support Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-primary text-white p-8 border border-brand-secondary">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">Landlord Support</span>
          <h3 className="font-serif text-2xl font-bold mt-1 text-brand-ivory">Professional Property Management</h3>
          <p className="text-xs text-brand-stone/80 mt-2 leading-relaxed">
            Hands-off asset stewardship with zero-vacancy focus, punctual rent collections, and 24/7 maintenance dispatch.
          </p>
          <Link href="/services/property-management" className="btn-ivory text-xs py-2.5 px-4 uppercase tracking-wider font-bold mt-6 inline-block">
            Explore Property Management &rarr;
          </Link>
        </div>

        <div className="bg-brand-secondary text-white p-8 border border-brand-secondary/80">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">Short Term Leasing</span>
          <h3 className="font-serif text-2xl font-bold mt-1 text-brand-ivory">Holiday Rentals & Vacation Homes</h3>
          <p className="text-xs text-brand-stone/80 mt-2 leading-relaxed">
            Licensed by DET to transform prime residences into high-yielding holiday homes generating up to 30% higher net revenue.
          </p>
          <Link href="/services/holiday-rentals" className="btn-ivory text-xs py-2.5 px-4 uppercase tracking-wider font-bold mt-6 inline-block">
            Explore Holiday Rentals &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function RentPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-brand-charcoal/60">Loading rental properties...</div>}>
      <RentListingsContent />
    </Suspense>
  );
}

