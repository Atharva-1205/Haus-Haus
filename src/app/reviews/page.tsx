'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '@/data/mockData';

export default function ClientReviewsPage() {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Residential Sales', 'Residential Leasing', 'Property Management'];

  const filteredReviews = selectedDept === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.department === selectedDept);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/about" className="hover:text-brand-primary">About</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Client Reviews</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Verified Feedback & Testimonials
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Relationships built on trust.
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Read authentic client experiences from homeowners, international investors, family offices, and corporate tenants who have bought, leased, and managed their Dubai properties through haus & haus.
        </p>
      </div>

      {/* Aggregate Satisfaction Banner */}
      <div className="bg-brand-primary text-white p-8 sm:p-10 border border-brand-secondary flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-5xl font-bold text-brand-sage">4.9</p>
            <div className="flex items-center space-x-1 text-amber-400 mt-1 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-[11px] text-brand-stone/70 mt-1">Over 2,400+ Verified Reviews</p>
          </div>
          <div className="hidden sm:block h-16 w-px bg-brand-secondary" />
          <div className="space-y-1 text-xs text-brand-stone/80">
            <p className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-sage" /> RERA Licensed Agency Verification</p>
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-sage" /> Google & Property Finder Verified Client Testimonials</p>
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-sage" /> 98.4% Client Recommendation Index</p>
          </div>
        </div>

        <Link href="/contact" className="btn-ivory text-xs uppercase tracking-wider font-bold py-3 px-6 whitespace-nowrap">
          Work With Us &rarr;
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-brand-stone/40 pb-4">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedDept === dept
                ? 'bg-brand-primary text-white'
                : 'bg-white border border-brand-stone/60 text-brand-charcoal hover:border-brand-primary'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredReviews.map((rev) => (
          <div key={rev.id} className="card-luxury p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="badge-sage">{rev.department}</span>
              </div>

              <p className="font-serif text-base italic text-brand-charcoal leading-relaxed my-4">
                &ldquo;{rev.text}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-brand-stone/40 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-brand-charcoal">{rev.reviewerName}</p>
                <p className="text-[11px] text-brand-charcoal/60">{rev.community} &bull; {rev.date}</p>
              </div>
              {rev.consultantName && (
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-brand-secondary block">Consultant</span>
                  <span className="font-semibold text-brand-charcoal">{rev.consultantName}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

