'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bed, Bath, Maximize2, Heart, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Property } from '@/types';
import { COMPANY_INFO } from '@/data/mockData';

interface PropertyCardProps {
  property: Property;
  viewMode?: 'grid' | 'list';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, viewMode = 'grid' }) => {
  const [isSaved, setIsSaved] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AE').format(price);
  };

  if (viewMode === 'list') {
    return (
      <div className="card-luxury flex flex-col md:flex-row group overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-brand-stone/20">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              {property.status}
            </span>
            {property.luxury && (
              <span className="bg-brand-sage text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                Luxury
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-brand-charcoal transition-colors"
            aria-label="Save Property"
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-600 text-red-600' : 'text-brand-charcoal'}`} />
          </button>
        </div>

        {/* Details Container */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider text-brand-charcoal/60 font-medium">
                Ref: {property.reference}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-brand-secondary font-semibold">
                {property.type}
              </span>
            </div>

            <p className="font-serif text-2xl font-bold text-brand-primary">
              AED {formatPrice(property.price)}
              {property.rentalFrequency && (
                <span className="text-xs font-sans font-normal text-brand-charcoal/70 ml-1">
                  /{property.rentalFrequency}
                </span>
              )}
            </p>

            <Link href={`/property/${property.id}`}>
              <h3 className="font-serif text-lg font-medium text-brand-charcoal hover:text-brand-primary transition-colors mt-1.5 line-clamp-1">
                {property.title}
              </h3>
            </Link>

            <p className="text-xs text-brand-charcoal/70 flex items-center mt-2">
              <MapPin className="w-3.5 h-3.5 mr-1 text-brand-sage flex-shrink-0" />
              {property.location}
            </p>

            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-brand-stone/40 text-xs text-brand-charcoal/80">
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1.5">
                  <Bed className="w-4 h-4 text-brand-primary" /> {property.bedrooms} Beds
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-brand-primary" /> {property.bathrooms} Baths
              </span>
              <span className="flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-brand-primary" /> {property.bua.toLocaleString()} sq ft
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-brand-stone/40">
            <div className="flex items-center gap-2.5">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="w-9 h-9 rounded-full object-cover border border-brand-stone"
              />
              <div>
                <p className="text-xs font-bold text-brand-charcoal">{property.agent.name}</p>
                <p className="text-[10px] text-brand-charcoal/60">{property.agent.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${property.agent.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hi ${property.agent.name}, I am enquiring about property ref ${property.reference}: ${property.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-brand-stone/60 hover:bg-emerald-50 text-emerald-700 transition-colors"
                title="WhatsApp Agent"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <Link
                href={`/property/${property.id}`}
                className="btn-primary text-xs py-2 px-4"
              >
                View Property
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-luxury flex flex-col group overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-stone/20">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
            {property.status}
          </span>
          {property.luxury && (
            <span className="bg-brand-sage text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1">
              Luxury
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSaved(!isSaved);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-brand-charcoal transition-colors"
          aria-label="Save Property"
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-600 text-red-600' : 'text-brand-charcoal'}`} />
        </button>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase tracking-wider text-brand-charcoal/60 font-medium">
              Ref: {property.reference}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-brand-secondary font-semibold">
              {property.type}
            </span>
          </div>

          <p className="font-serif text-xl sm:text-2xl font-bold text-brand-primary">
            AED {formatPrice(property.price)}
            {property.rentalFrequency && (
              <span className="text-xs font-sans font-normal text-brand-charcoal/70 ml-1">
                /{property.rentalFrequency}
              </span>
            )}
          </p>

          <Link href={`/property/${property.id}`}>
            <h3 className="font-serif text-base font-medium text-brand-charcoal hover:text-brand-primary transition-colors mt-1 line-clamp-1">
              {property.title}
            </h3>
          </Link>

          <p className="text-xs text-brand-charcoal/70 flex items-center mt-1.5">
            <MapPin className="w-3.5 h-3.5 mr-1 text-brand-sage flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </p>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-brand-stone/40 text-xs text-brand-charcoal/80">
            {property.bedrooms > 0 ? (
              <span className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-brand-primary" /> {property.bedrooms} Beds
              </span>
            ) : (
              <span className="text-[11px] text-brand-charcoal/60">Commercial</span>
            )}
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-brand-primary" /> {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5 text-brand-primary" /> {property.bua.toLocaleString()} sq ft
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 pt-3 border-t border-brand-stone/40">
          <div className="flex items-center gap-2">
            <img
              src={property.agent.image}
              alt={property.agent.name}
              className="w-7 h-7 rounded-full object-cover border border-brand-stone"
            />
            <span className="text-xs font-medium text-brand-charcoal truncate max-w-[100px]">
              {property.agent.name.split(' ')[0]}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${property.agent.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hi ${property.agent.name}, I am enquiring about property ref ${property.reference}: ${property.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-emerald-700 hover:bg-emerald-50 transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <Link
              href={`/property/${property.id}`}
              className="text-xs font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wider"
            >
              Details &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

