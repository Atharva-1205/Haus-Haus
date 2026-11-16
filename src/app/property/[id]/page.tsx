'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  ChevronRight, 
  Heart, 
  Share2, 
  Phone, 
  MessageSquare, 
  Mail, 
  Check, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  Info,
  ChevronDown,
  Building,
  Sparkles
} from 'lucide-react';
import { PROPERTIES } from '@/data/mockData';
import { PropertyCard } from '@/components/common/PropertyCard';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = PROPERTIES.find((p) => p.id === params.id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!property) {
    notFound();
  }

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const similarProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.community === property.community || p.type === property.type)
  ).slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AE').format(price);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href={property.status === 'For Sale' ? '/buy' : '/rent'} className="hover:text-brand-primary">
          {property.status === 'For Sale' ? 'Properties for Sale' : 'Properties for Rent'}
        </Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold truncate max-w-xs">{property.title}</span>
      </nav>

      {/* Property Title & Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b border-brand-stone/60 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              {property.status}
            </span>
            <span className="bg-brand-sage/30 text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1">
              {property.type}
            </span>
            <span className="text-xs text-brand-charcoal/60 font-medium ml-2">
              Ref: {property.reference}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-brand-charcoal">
            {property.title}
          </h1>

          <p className="text-xs sm:text-sm text-brand-charcoal/70 flex items-center mt-2">
            <MapPin className="w-4 h-4 mr-1 text-brand-sage flex-shrink-0" />
            <span>{property.location}</span>
          </p>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:text-right">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Asking Price</p>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary">
              AED {formatPrice(property.price)}
              {property.rentalFrequency && (
                <span className="text-xs font-sans font-normal text-brand-charcoal/70 ml-1">
                  /{property.rentalFrequency}
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className="p-2.5 border border-brand-stone bg-white hover:bg-brand-ivory text-brand-charcoal transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Save Property"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-600 text-red-600' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              onClick={handleShare}
              className="p-2.5 border border-brand-stone bg-white hover:bg-brand-ivory text-brand-charcoal transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Share Property"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: IMAGE GALLERY */}
      <div className="mt-8 space-y-3">
        {/* Main Display Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-brand-charcoal shadow-subtle">
          <img
            src={property.images[activeImageIndex]}
            alt={`${property.title} view ${activeImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute bottom-4 right-4 bg-brand-charcoal/80 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-medium">
            Photo {activeImageIndex + 1} of {property.images.length}
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {property.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`relative w-24 sm:w-32 aspect-[4/3] flex-shrink-0 overflow-hidden border-2 transition-all ${
                activeImageIndex === index ? 'border-brand-primary' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* MAIN TWO-COLUMN CONTENT GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Details, Features, Amenities, Map */}
        <div className="lg:col-span-8 space-y-12">
          {/* Key Specs Bar */}
          <div className="bg-white border border-brand-stone p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center shadow-subtle">
            {property.bedrooms > 0 && (
              <div className="border-r last:border-r-0 border-brand-stone/40">
                <Bed className="w-5 h-5 text-brand-primary mx-auto mb-1.5" />
                <p className="font-serif text-xl font-bold text-brand-charcoal">{property.bedrooms}</p>
                <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Bedrooms</p>
              </div>
            )}
            <div className="border-r last:border-r-0 border-brand-stone/40">
              <Bath className="w-5 h-5 text-brand-primary mx-auto mb-1.5" />
              <p className="font-serif text-xl font-bold text-brand-charcoal">{property.bathrooms}</p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Bathrooms</p>
            </div>
            <div className="border-r last:border-r-0 border-brand-stone/40">
              <Maximize2 className="w-5 h-5 text-brand-primary mx-auto mb-1.5" />
              <p className="font-serif text-xl font-bold text-brand-charcoal">{property.bua.toLocaleString()}</p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Built-Up Area (Sq Ft)</p>
            </div>
            <div>
              <Building className="w-5 h-5 text-brand-primary mx-auto mb-1.5" />
              <p className="font-serif text-xl font-bold text-brand-charcoal">{property.furnished}</p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60">Furnishing</p>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
            <h2 className="font-serif text-2xl font-bold text-brand-primary">Property Description</h2>
            <div className="text-sm text-brand-charcoal/80 leading-relaxed space-y-3">
              <p>{property.description}</p>
              <p>
                As with all exclusive properties managed by haus & haus, this residence has been verified against official Dubai Land Department title records and is available for immediate accompanied viewing.
              </p>
            </div>

            {property.plotSize && (
              <div className="pt-4 border-t border-brand-stone/40 flex items-center gap-6 text-xs text-brand-charcoal/70">
                <span><strong>Plot Size:</strong> {property.plotSize.toLocaleString()} sq ft</span>
                {property.annualServiceCharge && (
                  <span><strong>Est. Service Charge:</strong> AED {property.annualServiceCharge}/sq ft</span>
                )}
              </div>
            )}
          </div>

          {/* Features and Amenities */}
          <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-6">
            <h2 className="font-serif text-2xl font-bold text-brand-primary">Features & Amenities</h2>

            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-brand-charcoal/60 mb-3">Property Features</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-brand-charcoal">
                    <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-stone/40">
              <p className="text-xs uppercase font-bold tracking-wider text-brand-charcoal/60 mb-3">Community Amenities</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.amenities.map((amen) => (
                  <div key={amen} className="flex items-center gap-2 text-xs text-brand-charcoal">
                    <Sparkles className="w-3.5 h-3.5 text-brand-sage flex-shrink-0" />
                    <span>{amen}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floor Plans & Media Section */}
          <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-brand-primary">Floor Plans & Official Brochure</h2>
              <span className="badge-sage">Verified DLD Form</span>
            </div>
            <p className="text-xs text-brand-charcoal/70 leading-relaxed">
              Official architectural layout diagrams, floor distributions, and community masterplans are available for this unit.
            </p>
            <div className="p-6 bg-brand-ivory border border-brand-stone/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-brand-primary" />
                <div>
                  <p className="text-xs font-bold text-brand-charcoal">Architectural Layout & Specification PDF</p>
                  <p className="text-[11px] text-brand-charcoal/60">Verified Floorplan & Dimensions (2.4 MB)</p>
                </div>
              </div>
              <a
                href="#enquiry"
                className="btn-primary text-xs py-2.5 px-4 uppercase tracking-wider font-semibold whitespace-nowrap"
              >
                Request Floor Plan
              </a>
            </div>
          </div>

          {/* Location & Community Information */}
          <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
            <h2 className="font-serif text-2xl font-bold text-brand-primary">Location & Community</h2>
            <p className="text-xs text-brand-charcoal/70 leading-relaxed">
              Situated in <strong>{property.community}</strong>, {property.location}. Close to world-class dining, top international schools, golf clubs, and arterial transport networks.
            </p>
            {/* Interactive Map Visual */}
            <div className="relative aspect-[16/8] bg-brand-stone/30 overflow-hidden border border-brand-stone/60 flex items-center justify-center text-center p-6">
              <div className="space-y-2 z-10">
                <MapPin className="w-8 h-8 text-brand-primary mx-auto animate-bounce" />
                <p className="font-serif text-lg font-bold text-brand-charcoal">{property.community}</p>
                <p className="text-xs text-brand-charcoal/60">Lat: {property.coordinates.lat} &bull; Lng: {property.coordinates.lng}</p>
                <Link
                  href={`/communities/${property.community.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block text-xs font-semibold text-brand-primary underline hover:text-brand-secondary"
                >
                  Explore {property.community} Area Guide &rarr;
                </Link>
              </div>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0B3828_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Enquiry Panel */}
        <div id="enquiry" className="lg:col-span-4 sticky top-24 space-y-6">
          {/* Agent Card */}
          <div className="bg-white border border-brand-stone p-6 shadow-card space-y-5">
            <div className="flex items-center gap-4 pb-4 border-b border-brand-stone/40">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-brand-sage"
              />
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-sage block">
                  Assigned Consultant
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                  {property.agent.name}
                </h3>
                <p className="text-xs text-brand-secondary font-medium">
                  {property.agent.title}
                </p>
              </div>
            </div>

            {/* Quick Agent Actions */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${property.agent.phone}`}
                className="btn-secondary text-xs py-2.5 px-3 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> Call Agent
              </a>
              <a
                href={`https://wa.me/${property.agent.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hi ${property.agent.name}, I am enquiring about property ${property.reference}: ${property.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>

            {/* In-page enquiry form */}
            <EnquiryForm
              compact
              propertyReference={property.reference}
              propertyTitle={property.title}
              agentName={property.agent.name}
              title="Book a Private Viewing"
            />
          </div>

          {/* haus & haus Guarantee Card */}
          <div className="bg-brand-primary text-white p-6 border border-brand-secondary space-y-2 text-xs">
            <div className="flex items-center gap-2 text-brand-sage font-bold uppercase tracking-wider text-[10px]">
              <ShieldCheck className="w-4 h-4" /> haus & haus Verified Listing
            </div>
            <p className="text-brand-stone/80 leading-relaxed text-[11px]">
              Title deed and landlord power-of-attorney cross-verified with RERA registry. Accompanied viewings scheduled 7 days a week.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 8: SIMILAR PROPERTIES */}
      {similarProperties.length > 0 && (
        <div className="mt-24 pt-12 border-t border-brand-stone/60">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Curated Recommendations</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal mt-1">
                Similar Properties You May Like
              </h2>
            </div>
            <Link href="/buy" className="text-xs font-bold text-brand-primary hover:text-brand-secondary uppercase tracking-wider">
              Browse All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

