'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Building, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { DEVELOPERS, DEVELOPMENTS } from '@/data/mockData';
import { DevelopmentCard } from '@/components/common/DevelopmentCard';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function DeveloperDetailPage({ params }: { params: { slug: string } }) {
  const developer = DEVELOPERS.find((d) => d.slug === params.slug);

  if (!developer) {
    notFound();
  }

  const developerProjects = DEVELOPMENTS.filter((d) => d.developer.slug === developer.slug);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/off-plan" className="hover:text-brand-primary">Off Plan</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/developers" className="hover:text-brand-primary">Developers</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">{developer.name}</span>
      </nav>

      {/* Developer Header Hero */}
      <div className="bg-white border border-brand-stone p-8 sm:p-12 mb-12 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">
              Founded {developer.founded} &bull; {developer.headquarters}
            </span>
            <span className="badge-sage">{developer.totalProjects}+ Completed Masterplans</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">
            {developer.name}
          </h1>

          <p className="text-sm text-brand-charcoal/80 leading-relaxed">
            {developer.description}
          </p>

          <p className="text-xs text-brand-charcoal/70 leading-relaxed">
            <strong>Portfolio Highlights:</strong> {developer.portfolioHighlights}
          </p>
        </div>

        <div className="lg:col-span-4 bg-brand-ivory p-6 border border-brand-stone/60 space-y-3 text-xs">
          <p className="font-bold uppercase tracking-wider text-brand-primary text-[10px]">haus & haus Developer Advisory</p>
          <p className="text-brand-charcoal/70">
            haus & haus holds VIP tier allocation rights across new launches from {developer.name}, securing priority unit selection and early buyer payment plans.
          </p>
          <a href="#consult" className="btn-primary w-full text-xs py-2.5 text-center mt-2 block">
            Enquire with Specialist
          </a>
        </div>
      </div>

      {/* Active Developments */}
      <div className="mb-16">
        <div className="flex items-center justify-between pb-4 border-b border-brand-stone/40 mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
            Current Projects by {developer.name} ({developerProjects.length})
          </h2>
          <span className="text-xs text-brand-secondary font-semibold">VIP Allocations Available</span>
        </div>

        {developerProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developerProjects.map((dev) => (
              <DevelopmentCard key={dev.id} development={dev} />
            ))}
          </div>
        ) : (
          <div className="p-8 bg-white border border-brand-stone text-center text-xs text-brand-charcoal/60">
            New allocations for {developer.name} will be released shortly. Register interest below for pre-launch notifications.
          </div>
        )}
      </div>

      {/* Developer Consultation Section */}
      <div id="consult" className="bg-brand-sand/50 border border-brand-stone p-8 sm:p-12">
        <div className="max-w-2xl mx-auto">
          <EnquiryForm
            defaultDepartment="Off Plan"
            propertyTitle={`${developer.name} Portfolio`}
            title={`Consult Our ${developer.name} Specialist`}
          />
        </div>
      </div>
    </div>
  );
}

