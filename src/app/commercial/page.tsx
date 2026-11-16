'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';
import { PROPERTIES, CONSULTANTS } from '@/data/mockData';
import { Property } from '@/types';
import { EnquiryForm } from '@/components/common/EnquiryForm';

function CommercialContent() {
  const searchParams = useSearchParams();

  const [transactionType, setTransactionType] = useState<'All' | 'For Sale' | 'For Rent'>('All');
  const [assetType, setAssetType] = useState<string>('');
  const [fitOut, setFitOut] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'area-desc'>('featured');

  const commercialConsultant = CONSULTANTS.find((c) => c.department === 'Commercial') || CONSULTANTS[3];

  const commercialProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (!p.commercial) return false;
      if (transactionType !== 'All' && p.status !== transactionType) return false;
      if (assetType && p.type !== assetType) return false;
      if (fitOut && p.fitOut !== fitOut) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'area-desc') return b.bua - a.bua;
      return 0;
    });
  }, [transactionType, assetType, fitOut, sortBy]);

  return (
    <div>
      {/* Editorial Commercial Hero */}
      <section className="bg-brand-charcoal text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial Real Estate Dubai"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center text-xs text-brand-stone/60 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <span className="text-brand-sage font-semibold">Commercial Division</span>
          </nav>

          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-sage">
            Institutional & Corporate Real Estate
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-ivory mt-2 max-w-3xl leading-tight">
            Commercial property. Strategic opportunities.
          </h1>

          <p className="text-sm sm:text-base text-brand-stone/80 mt-4 max-w-2xl leading-relaxed">
            From Grade A corporate office headquarters in Business Bay and DIFC to prime Sheikh Zayed Road retail showrooms and high-yield industrial investments, our commercial advisory team guides corporate occupiers and institutional capital.
          </p>

          {/* Quick Buy vs Rent Mode Selector */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: 'All', label: 'All Commercial Assets' },
              { id: 'For Sale', label: 'Buy Commercial Property' },
              { id: 'For Rent', label: 'Lease Commercial Space' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTransactionType(tab.id as any)}
                className={`px-5 py-3 text-xs uppercase tracking-wider font-bold transition-all ${
                  transactionType === tab.id
                    ? 'bg-brand-primary text-white border border-brand-sage'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="bg-white border border-brand-stone p-5 sm:p-6 mb-10 shadow-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Asset Type
            </label>
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">All Asset Types</option>
              <option value="Office">Corporate Offices</option>
              <option value="Retail">Retail & Showrooms</option>
              <option value="Warehouse">Warehouses & Logistics</option>
              <option value="Commercial Building">Commercial Buildings</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Fit-Out Status
            </label>
            <select
              value={fitOut}
              onChange={(e) => setFitOut(e.target.value)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="">Any Fit-Out Status</option>
              <option value="Fitted">Fully Fitted</option>
              <option value="Shell & Core">Shell & Core</option>
              <option value="Fully Furnished">Fully Furnished</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
              Sort Order
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-brand-ivory/40 border border-brand-stone/70 px-3 py-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Size: Largest Area First</option>
            </select>
          </div>

          <div>
            <button
              onClick={() => {
                setTransactionType('All');
                setAssetType('');
                setFitOut('');
                setSortBy('featured');
              }}
              className="w-full py-2.5 border border-brand-stone/70 text-xs font-semibold uppercase tracking-wider text-brand-charcoal hover:bg-brand-ivory flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3 h-3" /> Reset Filters
            </button>
          </div>
        </div>

        {/* Commercial Property Cards Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-4 border-b border-brand-stone/40 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
              Available Commercial Opportunities ({commercialProperties.length})
            </span>
            <span className="text-xs text-brand-secondary font-medium">Verified DLD Commercial Listings</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialProperties.map((prop) => (
              <div key={prop.id} className="card-luxury flex flex-col group overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-stone/30">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                      {prop.status}
                    </span>
                    <span className="bg-white/95 text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                      {prop.type}
                    </span>
                    {prop.fitOut && (
                      <span className="bg-brand-sage text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                        {prop.fitOut}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">
                        Ref: {prop.reference}
                      </span>
                      <span className="text-xs text-brand-secondary font-semibold">
                        {prop.bua.toLocaleString()} sq ft
                      </span>
                    </div>

                    <p className="font-serif text-2xl font-bold text-brand-primary">
                      AED {prop.price.toLocaleString()}
                      {prop.rentalFrequency && <span className="text-xs font-sans font-normal text-brand-charcoal/70 ml-1">/{prop.rentalFrequency}</span>}
                    </p>

                    <Link href={`/property/${prop.id}`}>
                      <h3 className="font-serif text-xl font-bold text-brand-charcoal hover:text-brand-primary transition-colors mt-1.5">
                        {prop.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-brand-charcoal/70 flex items-center mt-2">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-brand-sage flex-shrink-0" />
                      {prop.location}
                    </p>

                    <p className="text-xs text-brand-charcoal/70 line-clamp-2 mt-3 leading-relaxed">
                      {prop.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-brand-stone/40 grid grid-cols-2 gap-2 text-xs text-brand-charcoal/80">
                      {prop.features.slice(0, 4).map((f) => (
                        <span key={f} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-stone/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={prop.agent.image}
                        alt={prop.agent.name}
                        className="w-8 h-8 rounded-full object-cover border border-brand-stone"
                      />
                      <span className="text-xs font-semibold text-brand-charcoal">{prop.agent.name}</span>
                    </div>
                    <Link
                      href={`/property/${prop.id}`}
                      className="btn-primary text-xs py-2 px-4"
                    >
                      View Specifications &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Advisory Team & Consultation Split */}
        <div className="mt-16 bg-white border border-brand-stone p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Commercial Leadership</span>
            <div className="flex items-center gap-4">
              <img
                src={commercialConsultant.image}
                alt={commercialConsultant.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-brand-primary"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">{commercialConsultant.name}</h3>
                <p className="text-xs text-brand-secondary font-semibold">{commercialConsultant.title}</p>
                <p className="text-[11px] text-brand-charcoal/60 mt-1">{commercialConsultant.experienceYears} Years Commercial Advisory Experience</p>
              </div>
            </div>
            <p className="text-xs text-brand-charcoal/70 leading-relaxed">
              &ldquo;Commercial real estate in Dubai requires deep understanding of zoning laws, fit-out approvals, landlord service charge structures, and yield capitalization. We assist international companies and private family offices in identifying high-value corporate space.&rdquo;
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${commercialConsultant.phone}`}
                className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> Call Advisory
              </a>
              <a
                href={`https://wa.me/${commercialConsultant.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm
              defaultDepartment="Commercial"
              title="Request a Commercial Property Consultation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommercialPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-brand-charcoal/60">Loading commercial properties...</div>}>
      <CommercialContent />
    </Suspense>
  );
}

