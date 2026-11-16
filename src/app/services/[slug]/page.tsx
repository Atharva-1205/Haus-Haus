'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Building,
  Phone,
  MessageSquare
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '@/data/mockData';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Service Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-12 px-4 sm:px-6 lg:px-8 bg-brand-charcoal text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <nav className="flex items-center text-xs text-brand-stone/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <span className="text-brand-sage font-semibold">{service.name}</span>
          </nav>

          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-sage">
            haus & haus Specialist Division
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-ivory mt-2">
            {service.name}
          </h1>

          <p className="text-xs sm:text-base text-brand-stone/80 mt-2 max-w-2xl leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content & Sticky Form */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Editorial breakdown */}
          <div className="lg:col-span-8 space-y-12">
            {/* Full Description */}
            <div className="bg-white border border-brand-stone p-8 sm:p-10 shadow-subtle space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">
                About our {service.name} Division
              </h2>
              <div className="space-y-3 text-sm text-brand-charcoal/80 leading-relaxed">
                {service.fullDescription.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-brand-stone/40">
                <h3 className="text-xs uppercase font-bold tracking-wider text-brand-charcoal/70 mb-3">
                  Scope of Services Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-brand-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Strategic Benefits */}
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">The haus & haus Advantage</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
                Key Strategic Benefits
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {service.benefits.map((b) => (
                  <div key={b.title} className="bg-white border border-brand-stone p-6 shadow-subtle">
                    <h4 className="font-serif text-lg font-bold text-brand-charcoal mb-2">{b.title}</h4>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works: Step-by-Step Process */}
            <div className="bg-brand-sand/50 border border-brand-stone p-8 sm:p-10 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Methodical Delivery</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal">
                How It Works: Our Process
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.process.map((step) => (
                  <div key={step.step} className="bg-white p-5 border border-brand-stone/50 space-y-2">
                    <span className="font-serif text-3xl font-bold text-brand-sage">{step.step}</span>
                    <h5 className="font-serif text-base font-bold text-brand-charcoal">{step.title}</h5>
                    <p className="text-[11px] text-brand-charcoal/70 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-primary" />
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-brand-stone/40 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-serif text-base font-bold text-brand-charcoal mb-1.5">{faq.question}</h4>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Enquiry Desk */}
          <div id="enquire" className="lg:col-span-4 sticky top-24 space-y-6">
            <EnquiryForm
              defaultDepartment={service.name}
              title={service.ctaText}
            />

            <div className="bg-brand-primary text-white p-6 border border-brand-secondary space-y-3 text-xs">
              <p className="text-brand-sage font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Official haus & haus Division
              </p>
              <p className="text-brand-stone/80 text-[11px] leading-relaxed">
                Direct phone inquiries answered 7 days a week by licensed consultants located in our Gold & Diamond Park headquarters.
              </p>
              <div className="pt-2 border-t border-brand-secondary flex items-center justify-between text-xs font-semibold">
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-sage flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> Call Direct
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

