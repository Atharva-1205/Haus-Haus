'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Building, Bed, DollarSign } from 'lucide-react';
import { COMMUNITIES } from '@/data/mockData';

export const HeroSearchBar: React.FC = () => {
  const router = useRouter();
  const [tab, setTab] = useState<'buy' | 'rent' | 'offplan' | 'commercial'>('buy');
  const [community, setCommunity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [priceMax, setPriceMax] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (community) params.set('community', community);
    if (propertyType) params.set('type', propertyType);
    if (bedrooms) params.set('bedrooms', bedrooms);
    if (priceMax) params.set('maxPrice', priceMax);

    if (tab === 'buy') {
      router.push(`/buy?${params.toString()}`);
    } else if (tab === 'rent') {
      router.push(`/rent?${params.toString()}`);
    } else if (tab === 'offplan') {
      router.push(`/off-plan?${params.toString()}`);
    } else if (tab === 'commercial') {
      router.push(`/commercial?${params.toString()}`);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md shadow-float border border-brand-stone/60">
      {/* Search Tabs */}
      <div className="flex border-b border-brand-stone/40 bg-brand-ivory/50">
        {[
          { id: 'buy', label: 'Buy' },
          { id: 'rent', label: 'Rent' },
          { id: 'offplan', label: 'Off Plan' },
          { id: 'commercial', label: 'Commercial' }
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id as any)}
            className={`flex-1 sm:flex-none px-6 sm:px-8 py-3.5 text-xs uppercase tracking-wider font-bold transition-all relative ${
              tab === item.id
                ? 'bg-white text-brand-primary border-t-2 border-brand-primary shadow-sm'
                : 'text-brand-charcoal/60 hover:text-brand-primary hover:bg-white/40'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Search Form Fields */}
      <form onSubmit={handleSearch} className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
        {/* Location Field */}
        <div>
          <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5 flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-brand-primary" /> Location
          </label>
          <select
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
            className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
          >
            <option value="">All Dubai Communities</option>
            {COMMUNITIES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5 flex items-center">
            <Building className="w-3 h-3 mr-1 text-brand-primary" /> Property Type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
          >
            <option value="">All Types</option>
            {tab === 'commercial' ? (
              <>
                <option value="Office">Office</option>
                <option value="Retail">Retail</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Commercial Building">Commercial Building</option>
              </>
            ) : (
              <>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Duplex">Duplex</option>
              </>
            )}
          </select>
        </div>

        {/* Bedrooms (hide for commercial) */}
        <div>
          <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5 flex items-center">
            <Bed className="w-3 h-3 mr-1 text-brand-primary" /> {tab === 'commercial' ? 'Fit-out' : 'Bedrooms'}
          </label>
          {tab === 'commercial' ? (
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">Any Fit-out</option>
              <option value="Fitted">Fitted</option>
              <option value="Shell & Core">Shell & Core</option>
              <option value="Fully Furnished">Fully Furnished</option>
            </select>
          ) : (
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">Any Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          )}
        </div>

        {/* Price Maximum */}
        <div>
          <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5 flex items-center">
            <DollarSign className="w-3 h-3 mr-1 text-brand-primary" /> Max Price (AED)
          </label>
          <select
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
          >
            <option value="">No Maximum</option>
            {tab === 'rent' ? (
              <>
                <option value="150000">AED 150,000 / yr</option>
                <option value="250000">AED 250,000 / yr</option>
                <option value="500000">AED 500,000 / yr</option>
                <option value="1000000">AED 1,000,000 / yr</option>
              </>
            ) : (
              <>
                <option value="2000000">AED 2,000,000</option>
                <option value="5000000">AED 5,000,000</option>
                <option value="10000000">AED 10,000,000</option>
                <option value="20000000">AED 20,000,000</option>
                <option value="40000000">AED 40,000,000+</option>
              </>
            )}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full btn-primary text-xs py-3 tracking-wider uppercase font-bold flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

