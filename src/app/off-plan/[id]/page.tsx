'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Building, 
  MapPin, 
  Calendar, 
  CreditCard, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { DEVELOPMENTS, DEVELOPERS } from '@/data/mockData';
import { EnquiryForm } from '@/components/common/EnquiryForm';
import { DevelopmentCard } from '@/components/common/DevelopmentCard';

export default function DevelopmentDetailPage({ params }: { params: { id: string } }) {
  const development = DEVELOPMENTS.find((d) => d.slug === params.id || d.id === params.id);

  if (!development) {
    notFound();
  }

  const developerInfo = DEVELOPERS.find((dev) => dev.slug === development.developer.slug);
  const relatedProjects = DEVELOPMENTS.filter((d) => d.id !== development.id).slice(0, 2);

  return (
    <div>
      {/* Hero Visual */}
      <section className="relative min-h-[55vh] flex items-end pb-12 px-4 sm:px-6 lg:px-8 bg-brand-charcoal text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={development.heroImage}
            alt={development.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <nav className="flex items-center text-xs text-brand-stone/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <Link href="/off-plan" className="hover:text-white">Off Plan</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <span className="text-brand-sage font-semibold">{development.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              {development.status}
            </span>
            <Link
              href={`/developers/${development.developer.slug}`}
              className="bg-white/90 backdrop-blur-sm text-brand-primary hover:bg-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 transition-colors"
            >
              Developer: {development.developer.name}
            </Link>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-ivory">
            {development.name}
          </h1>

          <p className="text-xs sm:text-sm text-brand-stone/80 flex items-center mt-2">
            <MapPin className="w-4 h-4 mr-1 text-brand-sage flex-shrink-0" />
            <span>{development.community}, Dubai</span>
          </p>
        </div>
      </section>

      {/* Main Body Grid */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Metrics Bar */}
            <div className="bg-white border border-brand-stone p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center shadow-subtle">
              <div className="border-r border-brand-stone/40">
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Starting Price</p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-brand-primary mt-1">
                  AED {development.startingPrice.toLocaleString()}
                </p>
              </div>
              <div className="border-r border-brand-stone/40">
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Handover Date</p>
                <p className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal mt-1">
                  {development.handoverDate}
                </p>
              </div>
              <div className="border-r border-brand-stone/40">
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Payment Plan</p>
                <p className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal mt-1">
                  {development.paymentPlan}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Configurations</p>
                <p className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal mt-1">
                  {development.bedroomRange}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
              <h2 className="font-serif text-2xl font-bold text-brand-primary">Project Overview</h2>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                {development.description}
              </p>
              <div className="pt-4 border-t border-brand-stone/40">
                <p className="text-xs uppercase font-bold tracking-wider text-brand-charcoal/60 mb-2">Key Highlights</p>
                <ul className="space-y-2">
                  {development.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Available Unit Types */}
            <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
              <h2 className="font-serif text-2xl font-bold text-brand-primary">Available Unit Types & Floor Plans</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {development.unitTypes.map((unit) => (
                  <div key={unit} className="p-4 bg-brand-ivory border border-brand-stone/50 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-charcoal">{unit}</span>
                    <span className="text-[11px] text-brand-secondary font-semibold">Available</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
              <h2 className="font-serif text-2xl font-bold text-brand-primary">Resort Amenities & Facilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {development.amenities.map((amen) => (
                  <div key={amen} className="flex items-center gap-2 text-xs text-brand-charcoal">
                    <Sparkles className="w-3.5 h-3.5 text-brand-sage flex-shrink-0" />
                    <span>{amen}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Spotlight */}
            {developerInfo && (
              <div className="bg-brand-sand/50 border border-brand-stone p-8 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Developer Background</span>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">{developerInfo.name}</h3>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                  {developerInfo.description}
                </p>
                <Link
                  href={`/developers/${developerInfo.slug}`}
                  className="text-xs font-semibold text-brand-primary underline hover:text-brand-secondary inline-block pt-1"
                >
                  View complete {developerInfo.name} portfolio ({developerInfo.totalProjects}+ projects) &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* Right Sticky Enquiry */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <EnquiryForm
              defaultDepartment="Off Plan"
              propertyTitle={development.name}
              title={`Register Interest in ${development.name}`}
            />

            <div className="bg-brand-primary text-white p-6 border border-brand-secondary text-xs space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> VIP Buyer Advantage
              </span>
              <p className="text-brand-stone/80 text-[11px] leading-relaxed">
                Enjoy priority unit selection, pre-launch pricing allocations, zero agency commission, and direct developer liaison through haus & haus.
              </p>
            </div>
          </div>
        </div>

        {/* Related Developments */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-brand-stone/40">
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">
              Other Recommended New Developments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((dev) => (
                <DevelopmentCard key={dev.id} development={dev} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

