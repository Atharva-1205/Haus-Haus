'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  Mail, 
  Award, 
  MapPin, 
  Globe, 
  Clock, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import { CONSULTANTS, PROPERTIES, TESTIMONIALS } from '@/data/mockData';
import { PropertyCard } from '@/components/common/PropertyCard';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function ConsultantDetailPage({ params }: { params: { slug: string } }) {
  const consultant = CONSULTANTS.find((c) => c.slug === params.slug || c.id === params.slug);

  if (!consultant) {
    notFound();
  }

  // Active listings by this consultant
  const consultantProperties = PROPERTIES.filter((p) => p.agent.name.toLowerCase() === consultant.name.toLowerCase());
  // Reviews for this consultant
  const consultantReviews = TESTIMONIALS.filter((t) => t.consultantName === consultant.name);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/team" className="hover:text-brand-primary">Our Team</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">{consultant.name}</span>
      </nav>

      {/* Profile Overview Card */}
      <div className="bg-white border border-brand-stone p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-brand-sage shadow-float">
            <img src={consultant.image} alt={consultant.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-sage">{consultant.department}</span>
            <span className="text-xs text-brand-charcoal/60 font-medium">
              {consultant.experienceYears} Years Dubai Real Estate Experience
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">
            {consultant.name}
          </h1>

          <p className="text-sm font-semibold text-brand-secondary">
            {consultant.title}
          </p>

          <p className="text-sm text-brand-charcoal/80 leading-relaxed">
            {consultant.bio}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-stone/40 text-xs text-brand-charcoal">
            <div>
              <p className="font-bold uppercase tracking-wider text-brand-secondary text-[10px]">Languages</p>
              <p className="mt-0.5 font-medium">{consultant.languages.join(', ')}</p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-wider text-brand-secondary text-[10px]">Specialist Areas</p>
              <p className="mt-0.5 font-medium">{consultant.communities.join(', ')}</p>
            </div>
            {consultant.awards && consultant.awards.length > 0 && (
              <div>
                <p className="font-bold uppercase tracking-wider text-brand-secondary text-[10px]">Accolade</p>
                <p className="mt-0.5 font-medium">{consultant.awards[0]}</p>
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${consultant.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello ${consultant.name}, I would like to enquire about properties you represent.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-5 flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp {consultant.name.split(' ')[0]}
            </a>
            <a
              href={`tel:${consultant.phone}`}
              className="btn-secondary text-xs py-3 px-5 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Direct
            </a>
            <a
              href={`mailto:${consultant.email}`}
              className="btn-secondary text-xs py-3 px-5 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Active Listings by Consultant */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-brand-stone/40 mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
            Active Listings Managed by {consultant.name} ({consultantProperties.length})
          </h2>
          <span className="text-xs text-brand-secondary font-semibold">Verified Portfolio</span>
        </div>

        {consultantProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultantProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-brand-stone p-8 text-center text-xs text-brand-charcoal/70">
            {consultant.name} is currently advising on off-market opportunities in {consultant.communities.join(', ')}. Contact directly for private allocations.
          </div>
        )}
      </div>

      {/* Client Reviews */}
      {consultantReviews.length > 0 && (
        <div className="bg-brand-sand/40 border border-brand-stone p-8 sm:p-10 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
            Client Testimonials for {consultant.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultantReviews.map((rev) => (
              <div key={rev.id} className="bg-white p-6 border border-brand-stone/50 space-y-2">
                <p className="font-serif text-sm italic text-brand-charcoal">&ldquo;{rev.text}&rdquo;</p>
                <div className="pt-2 text-[11px] text-brand-charcoal/60 flex justify-between">
                  <span><strong>{rev.reviewerName}</strong></span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Direct Contact Form */}
      <div className="bg-white border border-brand-stone p-8 sm:p-12 shadow-card max-w-3xl mx-auto">
        <EnquiryForm
          agentName={consultant.name}
          defaultDepartment={consultant.department}
          title={`Enquire Directly with ${consultant.name}`}
        />
      </div>
    </div>
  );
}

