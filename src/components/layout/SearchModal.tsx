'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, Building, MapPin, User, FileText, ArrowRight } from 'lucide-react';
import { PROPERTIES, COMMUNITIES, CONSULTANTS, SERVICES, GUIDES } from '@/data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedProperties = q
    ? PROPERTIES.filter(p => p.title.toLowerCase().includes(q) || p.community.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)).slice(0, 4)
    : [];

  const matchedCommunities = q
    ? COMMUNITIES.filter(c => c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q)).slice(0, 3)
    : [];

  const matchedConsultants = q
    ? CONSULTANTS.filter(c => c.name.toLowerCase().includes(q) || c.department.toLowerCase().includes(q)).slice(0, 3)
    : [];

  const matchedServices = q
    ? SERVICES.filter(s => s.name.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)).slice(0, 3)
    : [];

  const matchedGuides = q
    ? GUIDES.filter(g => g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q)).slice(0, 2)
    : [];

  const hasResults = matchedProperties.length > 0 || matchedCommunities.length > 0 || matchedConsultants.length > 0 || matchedServices.length > 0 || matchedGuides.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="fixed inset-0 bg-brand-charcoal/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-3xl bg-brand-ivory border border-brand-stone shadow-2xl overflow-hidden z-10 transition-all">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-brand-stone/60 bg-white">
          <Search className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search properties, communities, services, agents, guides..."
            className="w-full bg-transparent text-brand-charcoal placeholder-brand-charcoal/40 text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-brand-charcoal/50 hover:text-brand-charcoal mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="text-xs uppercase tracking-wider text-brand-charcoal/60 hover:text-brand-primary font-medium px-2 py-1">
            ESC
          </button>
        </div>

        {/* Content Area */}
        <div className="max-h-[70vh] overflow-y-auto p-6 space-y-6">
          {!query && (
            <div>
              <p className="text-xs uppercase font-semibold tracking-wider text-brand-charcoal/50 mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Dubai Hills Estate', 'Palm Jumeirah', 'Off-Plan Creek Waters', 'Villas for Sale', 'Commercial Office', 'Rental Yield Calculator', 'Property Valuation'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 text-xs bg-white border border-brand-stone/60 text-brand-charcoal hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-12">
              <p className="text-brand-charcoal/60 text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-brand-charcoal/40 mt-1">Try searching for &lsquo;Palm Jumeirah&rsquo;, &lsquo;Mortgages&rsquo;, or &lsquo;Villa&rsquo;.</p>
            </div>
          )}

          {matchedProperties.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-brand-stone/40 pb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-primary flex items-center">
                  <Building className="w-3.5 h-3.5 mr-1.5" /> Properties ({matchedProperties.length})
                </span>
                <Link href={`/buy?search=${encodeURIComponent(query)}`} onClick={onClose} className="text-xs text-brand-secondary hover:underline flex items-center">
                  View all <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchedProperties.map(p => (
                  <Link
                    key={p.id}
                    href={`/property/${p.id}`}
                    onClick={onClose}
                    className="p-3 bg-white border border-brand-stone/60 hover:border-brand-primary transition-colors group flex gap-3 items-center"
                  >
                    <div className="w-16 h-16 bg-brand-stone/20 flex-shrink-0 overflow-hidden relative">
                      <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-brand-primary">AED {p.price.toLocaleString()} {p.rentalFrequency ? `/${p.rentalFrequency}` : ''}</p>
                      <h4 className="text-xs text-brand-charcoal truncate font-medium mt-0.5">{p.title}</h4>
                      <p className="text-[11px] text-brand-charcoal/60 flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-0.5 flex-shrink-0" /> {p.community}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedCommunities.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-brand-stone/40 pb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-primary flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" /> Communities ({matchedCommunities.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {matchedCommunities.map(c => (
                  <Link
                    key={c.slug}
                    href={`/communities/${c.slug}`}
                    onClick={onClose}
                    className="p-3 bg-white border border-brand-stone/60 hover:border-brand-primary transition-colors block"
                  >
                    <p className="text-xs font-bold text-brand-charcoal">{c.name}</p>
                    <p className="text-[11px] text-brand-charcoal/60 truncate mt-0.5">{c.tagline}</p>
                    <span className="text-[10px] text-brand-secondary font-medium mt-2 inline-block">Yield: {c.avgRentalYield}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedServices.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-brand-stone/40 pb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-primary flex items-center">
                  <FileText className="w-3.5 h-3.5 mr-1.5" /> Services ({matchedServices.length})
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {matchedServices.map(s => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={onClose}
                    className="p-3 bg-white border border-brand-stone/60 hover:border-brand-primary transition-colors block"
                  >
                    <p className="text-xs font-bold text-brand-charcoal">{s.name}</p>
                    <p className="text-[11px] text-brand-charcoal/60 line-clamp-2 mt-0.5">{s.shortDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedConsultants.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-brand-stone/40 pb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-brand-primary flex items-center">
                  <User className="w-3.5 h-3.5 mr-1.5" /> Team & Consultants
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {matchedConsultants.map(c => (
                  <Link
                    key={c.id}
                    href={`/team/${c.slug}`}
                    onClick={onClose}
                    className="p-3 bg-white border border-brand-stone/60 hover:border-brand-primary transition-colors flex items-center gap-3"
                  >
                    <img src={c.image} alt={c.name} className="w-10 h-10 object-cover rounded-full" />
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-brand-charcoal truncate">{c.name}</p>
                      <p className="text-[10px] text-brand-charcoal/60 truncate">{c.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

