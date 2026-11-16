'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ChevronRight, 
  MapPin, 
  Sparkles, 
  GraduationCap, 
  Car, 
  TrendingUp, 
  Building, 
  Phone, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { COMMUNITIES, PROPERTIES, CONSULTANTS, DEVELOPMENTS } from '@/data/mockData';
import { PropertyCard } from '@/components/common/PropertyCard';
import { ConsultantCard } from '@/components/common/ConsultantCard';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function CommunityDetailPage({ params }: { params: { slug: string } }) {
  const community = COMMUNITIES.find((c) => c.slug === params.slug);

  if (!community) {
    notFound();
  }

  // Active properties in this community
  const communityProperties = PROPERTIES.filter((p) => p.community.toLowerCase() === community.name.toLowerCase());
  // Community specialists
  const communitySpecialists = CONSULTANTS.filter((c) => 
    c.communities.some(comm => comm.toLowerCase().includes(community.name.toLowerCase()))
  );
  // Developments nearby
  const communityDevelopments = DEVELOPMENTS.filter((d) => 
    d.community.toLowerCase().includes(community.name.toLowerCase())
  );

  return (
    <div>
      {/* Hero Visual */}
      <section className="relative min-h-[60vh] flex items-end pb-14 px-4 sm:px-6 lg:px-8 bg-brand-charcoal text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={community.heroImage}
            alt={community.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <nav className="flex items-center text-xs text-brand-stone/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <Link href="/communities" className="hover:text-white">Area Guides</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <span className="text-brand-sage font-semibold">{community.name}</span>
          </nav>

          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-sage">
            {community.tagline}
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-ivory mt-2">
            {community.name}
          </h1>

          <div className="flex flex-wrap gap-4 mt-4 text-xs">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-brand-ivory">
              Avg Rental Yield: <strong>{community.avgRentalYield}</strong>
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-brand-ivory">
              Apt Avg: <strong>{community.avgSalePriceApt}</strong>
            </span>
            {community.avgSalePriceVilla !== 'N/A' && (
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-brand-ivory">
                Villa Avg: <strong>{community.avgSalePriceVilla}</strong>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* Overview & Lifestyle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Neighborhood Character</span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal">
              Welcome to {community.name}
            </h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              {community.description}
            </p>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              <strong>Lifestyle:</strong> {community.lifestyle}
            </p>

            <div className="pt-4 border-t border-brand-stone/40 grid grid-cols-2 gap-4 text-xs text-brand-charcoal">
              <div>
                <p className="font-bold uppercase tracking-wider text-brand-secondary text-[10px]">Property Types</p>
                <p className="mt-1">{community.propertyTypes.join(', ')}</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-brand-secondary text-[10px]">Transport Links</p>
                <p className="mt-1">{community.transport}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-brand-stone p-8 shadow-card space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-primary">Community Highlights</h3>
            <ul className="space-y-3">
              {community.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-xs text-brand-charcoal">
                  <Sparkles className="w-4 h-4 text-brand-sage flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-brand-stone/40">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/70 mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-primary" /> Top Schools Nearby
              </p>
              <ul className="text-xs text-brand-charcoal/80 space-y-1">
                {community.schools.map((school) => (
                  <li key={school}>&bull; {school}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Active Properties in this Community */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-brand-stone/40 mb-8">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Available Homes</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mt-0.5">
                Properties Available in {community.name} ({communityProperties.length})
              </h3>
            </div>
            <Link
              href={`/buy?community=${encodeURIComponent(community.name)}`}
              className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary"
            >
              Search All &rarr;
            </Link>
          </div>

          {communityProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-brand-stone p-8 text-center text-xs text-brand-charcoal/70">
              Currently, new listings in {community.name} are being processed. Contact our community desk for off-market access.
            </div>
          )}
        </div>

        {/* Local Area Consultants */}
        {communitySpecialists.length > 0 && (
          <div className="bg-brand-sand/40 border border-brand-stone p-8 sm:p-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Localized Advisory</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mt-1">
                  haus & haus {community.name} Specialists
                </h3>
              </div>
              <Link href="/team" className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                View All Agents &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communitySpecialists.map((c) => (
                <ConsultantCard key={c.id} consultant={c} />
              ))}
            </div>
          </div>
        )}

        {/* Community Enquiry Form */}
        <div className="bg-white border border-brand-stone p-8 sm:p-12 shadow-card max-w-3xl mx-auto">
          <EnquiryForm
            defaultDepartment="Residential Sales"
            propertyTitle={`${community.name} Community Guide Enquiry`}
            title={`Consult Our ${community.name} Property Team`}
          />
        </div>
      </div>
    </div>
  );
}

