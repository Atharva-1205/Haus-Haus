'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Calendar, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { GUIDES } from '@/data/mockData';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = GUIDES.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources/guides" className="hover:text-brand-primary">Guides</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold truncate max-w-xs">{guide.title}</span>
      </nav>

      {/* Hero Header */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 text-xs text-brand-secondary font-semibold mb-3">
          <span className="bg-brand-sage/20 border border-brand-sage/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-brand-primary font-bold">
            {guide.category}
          </span>
          <span className="flex items-center gap-1 text-brand-charcoal/60">
            <Calendar className="w-3.5 h-3.5" /> {guide.publishedDate}
          </span>
          <span className="flex items-center gap-1 text-brand-charcoal/60">
            <Clock className="w-3.5 h-3.5" /> {guide.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal leading-tight">
          {guide.title}
        </h1>

        <p className="text-sm sm:text-base text-brand-charcoal/80 mt-4 leading-relaxed">
          {guide.description}
        </p>
      </div>

      {/* Featured Header Image */}
      <div className="aspect-[21/9] w-full overflow-hidden bg-brand-charcoal shadow-card">
        <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
      </div>

      {/* Two Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Content Body */}
        <div className="lg:col-span-8 space-y-10">
          {/* Table of Contents */}
          <div className="bg-brand-sand/50 border border-brand-stone p-6 sm:p-8 space-y-3">
            <h3 className="font-serif text-xl font-bold text-brand-charcoal">Table of Contents</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-primary font-medium">
              {guide.tableOfContents.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:underline">
                  <span className="text-brand-sage font-bold">0{idx + 1}.</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Structured Sections */}
          <div className="space-y-8">
            {guide.contentSections.map((sec, idx) => (
              <div key={idx} className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
                <h2 className="font-serif text-2xl font-bold text-brand-primary">
                  0{idx + 1}. {sec.heading}
                </h2>
                <div className="space-y-3 text-sm text-brand-charcoal/80 leading-relaxed">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Guide FAQs */}
          {guide.faqs.length > 0 && (
            <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-primary" />
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-4">
                {guide.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="border-b border-brand-stone/40 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-serif text-base font-bold text-brand-charcoal mb-1.5">{faq.question}</h4>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Advisory */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <EnquiryForm
            title="Speak to an Expert Advisor"
            propertyTitle={guide.title}
            defaultDepartment="Residential Sales"
          />
        </div>
      </div>
    </div>
  );
}

