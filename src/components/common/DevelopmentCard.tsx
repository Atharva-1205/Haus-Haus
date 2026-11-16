'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, CreditCard, MapPin, ArrowUpRight } from 'lucide-react';
import { Development } from '@/types';

interface DevelopmentCardProps {
  development: Development;
}

export const DevelopmentCard: React.FC<DevelopmentCardProps> = ({ development }) => {
  return (
    <div className="card-luxury flex flex-col group overflow-hidden">
      {/* Hero Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-stone/20">
        <img
          src={development.heroImage}
          alt={development.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
            {development.status}
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-brand-charcoal text-[10px] font-semibold px-2 py-1">
            {development.developer.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-xs text-brand-charcoal/70 mb-1">
            <MapPin className="w-3.5 h-3.5 mr-1 text-brand-sage flex-shrink-0" />
            <span>{development.community}</span>
          </div>

          <Link href={`/off-plan/${development.slug}`}>
            <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors line-clamp-1">
              {development.name}
            </h3>
          </Link>

          <p className="text-xs text-brand-charcoal/60 mt-1 line-clamp-2">
            {development.description}
          </p>

          <div className="mt-4 pt-3 border-t border-brand-stone/40">
            <span className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/50 block">
              Prices Starting From
            </span>
            <span className="font-serif text-xl font-bold text-brand-primary">
              AED {development.startingPrice.toLocaleString()}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-brand-stone/40 text-[11px] text-brand-charcoal/80">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
              <span>Handover: {development.handoverDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
              <span className="truncate">{development.paymentPlan}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-brand-stone/40 flex items-center justify-between">
          <span className="text-xs text-brand-secondary font-medium">
            {development.bedroomRange}
          </span>
          <Link
            href={`/off-plan/${development.slug}`}
            className="text-xs font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wider flex items-center"
          >
            Explore <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

