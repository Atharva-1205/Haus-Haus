'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  FileSearch, 
  TrendingUp, 
  Award,
  Phone,
  MessageSquare
} from 'lucide-react';
import { COMMUNITIES, COMPANY_INFO } from '@/data/mockData';

export default function ValuationPage() {
  const [formData, setFormData] = useState({
    community: 'Dubai Hills Estate',
    propertyType: 'Villa',
    bedrooms: '4',
    sizeSqFt: '5200',
    ownerName: '',
    email: '',
    phone: '',
    timeline: 'Within 3 months',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Property Valuation</span>
      </nav>

      {/* Hero Header */}
      <div className="max-w-3xl">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Free Market Appraisal
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Discover what your property could be worth.
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 leading-relaxed">
          Receive an objective, data-backed comparative market valuation benchmarked against recent verified Dubai Land Department transactions and live buyer demand across your specific community.
        </p>
      </div>

      {/* Main Grid: Form & Methodology */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Column */}
        <div className="lg:col-span-7 bg-white border border-brand-stone p-8 sm:p-10 shadow-card">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-primary">Appraisal Request Logged</h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold">{formData.ownerName}</span>. A senior {formData.community} valuation specialist is cross-referencing your property details ({formData.bedrooms} Bed {formData.propertyType}) against official Dubai Land Department sales records. We will contact you via WhatsApp / Phone within 2 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-wider font-bold text-brand-primary underline hover:text-brand-secondary"
              >
                Submit another property
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-serif text-2xl font-bold text-brand-primary pb-3 border-b border-brand-stone/40">
                Property & Owner Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                    Community / Location *
                  </label>
                  <select
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                    className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
                  >
                    {COMMUNITIES.map((c) => (
                      <option key={c.slug} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Other Dubai Area">Other Dubai Area</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                    Property Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
                  >
                    <option value="Villa">Villa / Mansion</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Commercial">Commercial Office/Retail</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                    Bedrooms
                  </label>
                  <select
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                    className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
                  >
                    <option value="Studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                    Estimated Size (Sq Ft)
                  </label>
                  <input
                    type="text"
                    value={formData.sizeSqFt}
                    onChange={(e) => setFormData({ ...formData, sizeSqFt: e.target.value })}
                    placeholder="e.g. 2,400"
                    className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-brand-stone/40 space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Arthur Pendelton"
                    className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arthur@example.com"
                      className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                    Selling / Leasing Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-brand-ivory/40 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
                  >
                    <option value="Immediate (Next 30 days)">Immediate (Next 30 days)</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Curious about current value">Curious about current value only</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary text-xs py-3.5 uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                {loading ? 'Processing Appraisal Request...' : 'Request Comparative Market Valuation'}
              </button>
            </form>
          )}
        </div>

        {/* Methodology & Process Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-brand-sand/50 border border-brand-stone p-8 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Our Valuation Process</span>
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
              How We Accurately Value Your Property
            </h3>

            <div className="space-y-4 text-xs text-brand-charcoal/80 pt-2">
              <div className="flex items-start gap-3">
                <span className="font-serif text-xl font-bold text-brand-primary">01</span>
                <div>
                  <p className="font-bold text-brand-charcoal">Dubai Land Department Transaction Audit</p>
                  <p className="text-[11px] text-brand-charcoal/70 mt-0.5">We extract official executed deed transfers within your exact building or sub-community from the past 90 days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-serif text-xl font-bold text-brand-primary">02</span>
                <div>
                  <p className="font-bold text-brand-charcoal">View, Layout & Condition Weighting</p>
                  <p className="text-[11px] text-brand-charcoal/70 mt-0.5">We factor in high floor premiums, lagoon/sea orientation, bespoke upgrades, and current tenancy status.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-serif text-xl font-bold text-brand-primary">03</span>
                <div>
                  <p className="font-bold text-brand-charcoal">Active Buyer Database Matching</p>
                  <p className="text-[11px] text-brand-charcoal/70 mt-0.5">We assess immediate ready-capital interest across our network of pre-approved buyers and institutional investors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-primary text-white p-6 border border-brand-secondary space-y-2 text-xs">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Transparency Statement
            </span>
            <p className="text-brand-stone/80 text-[11px] leading-relaxed">
              We provide genuine market appraisals based on empirical transaction records. We do not inflate valuations to win listings — our objective is achieving the highest realized sales price in the optimal timeframe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

