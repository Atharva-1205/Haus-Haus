'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Community } from '@/types';

interface CommunityCardProps {
  community: Community;
}

export const CommunityCard: React.FC<CommunityCardProps> = ({ community }) => {
  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group relative aspect-[4/5] overflow-hidden bg-brand-charcoal block shadow-subtle hover:shadow-float transition-all duration-500"
    >
      {/* Background Image */}
      <img
        src={community.heroImage}
        alt={community.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
      />

      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />

      {/* Top Tag */}
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-sm text-brand-primary text-[10px] uppercase font-bold tracking-widest px-2.5 py-1">
          Yield: {community.avgRentalYield}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage block mb-1">
          {community.tagline}
        </span>
        <h3 className="font-serif text-2xl font-bold text-white group-hover:text-brand-ivory transition-colors flex items-center justify-between">
          <span>{community.name}</span>
          <ArrowUpRight className="w-5 h-5 text-brand-sage transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </h3>
        
        <p className="text-xs text-brand-stone/80 line-clamp-2 mt-2 leading-relaxed">
          {community.description}
        </p>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-brand-stone/90">
          <span>Apt Avg: {community.avgSalePriceApt}</span>
          <span>{community.propertyTypes.slice(0, 2).join(' & ')}</span>
        </div>
      </div>
    </Link>
  );
};

