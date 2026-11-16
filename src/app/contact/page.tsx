'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Building2, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function ContactPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Contact Us</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Connect with Our Experts
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Let&apos;s talk about your next move.
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Whether you are looking to purchase your dream home, sell an existing property, explore new off-plan launches, or request professional property management, our 360+ specialists are ready to guide you.
        </p>
      </div>

      {/* Contact Cards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-luxury p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-brand-stone/30 flex items-center justify-center text-brand-primary mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">Main Office</p>
            <p className="font-serif text-xl font-bold text-brand-charcoal mt-1">{COMPANY_INFO.phone}</p>
            <p className="text-xs text-brand-charcoal/60 mt-1">7 Days a Week, 8:30 AM – 6:30 PM</p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="text-xs font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wider mt-4"
          >
            Call Direct &rarr;
          </a>
        </div>

        <div className="card-luxury p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-brand-stone/30 flex items-center justify-center text-brand-primary mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">WhatsApp Advisory</p>
            <p className="font-serif text-xl font-bold text-brand-charcoal mt-1">Instant Chat</p>
            <p className="text-xs text-brand-charcoal/60 mt-1">Direct broker chat & media exchange</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider mt-4"
          >
            Open WhatsApp &rarr;
          </a>
        </div>

        <div className="card-luxury p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-brand-stone/30 flex items-center justify-center text-brand-primary mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">General Enquiries</p>
            <p className="font-serif text-lg font-bold text-brand-charcoal mt-1 truncate">{COMPANY_INFO.email}</p>
            <p className="text-xs text-brand-charcoal/60 mt-1">Careers: {COMPANY_INFO.careersEmail}</p>
          </div>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="text-xs font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wider mt-4"
          >
            Send Email &rarr;
          </a>
        </div>

        <div className="card-luxury p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-brand-stone/30 flex items-center justify-center text-brand-primary mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-brand-secondary">Dubai Headquarters</p>
            <p className="font-serif text-base font-bold text-brand-charcoal mt-1">Gold & Diamond Park</p>
            <p className="text-xs text-brand-charcoal/60 mt-1">Building 7, Sheikh Zayed Road</p>
          </div>
          <a
            href="https://maps.google.com/?q=Gold+and+Diamond+Park+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-brand-primary hover:text-brand-secondary uppercase tracking-wider mt-4"
          >
            View on Map &rarr;
          </a>
        </div>
      </div>

      {/* Main Grid: Comprehensive Form & Headquarters Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <EnquiryForm
            title="Send an Enquiry to Our Team"
          />
        </div>

        <div className="lg:col-span-5 space-y-6">
          {/* Office Details Card */}
          <div className="bg-white border border-brand-stone p-8 shadow-card space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Office Details</span>
            <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
              Visit our Flagship Office
            </h3>

            <div className="space-y-3 text-xs text-brand-charcoal/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong><br />
                  Building 7, Gold & Diamond Park<br />
                  Sheikh Zayed Road, P.O. Box 478418<br />
                  Dubai, United Arab Emirates
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Opening Hours:</strong><br />
                  Monday – Friday: 8:30 AM – 6:30 PM<br />
                  Saturday – Sunday: 9:00 AM – 5:00 PM
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Metro Access:</strong><br />
                  Equiti (formerly First Abu Dhabi Bank) Metro Station directly opposite building.
                </span>
              </p>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="aspect-[16/10] bg-brand-stone/30 border border-brand-stone relative overflow-hidden flex items-center justify-center text-center p-6 shadow-subtle">
            <div className="z-10 space-y-2">
              <MapPin className="w-8 h-8 text-brand-primary mx-auto animate-bounce" />
              <p className="font-serif text-lg font-bold text-brand-charcoal">haus & haus Headquarters</p>
              <p className="text-xs text-brand-charcoal/70">Building 7, Gold & Diamond Park, Dubai</p>
              <a
                href="https://maps.google.com/?q=Gold+and+Diamond+Park+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4 inline-block mt-2"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0B3828_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

