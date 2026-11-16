'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ChevronRight, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Send, 
  UploadCloud, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { JOB_VACANCIES, COMPANY_INFO } from '@/data/mockData';

export default function JobVacancyDetailPage({ params }: { params: { slug: string } }) {
  const job = JOB_VACANCIES.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedIn: '',
    experienceYears: '2-5 years',
    coverLetter: '',
    fileName: ''
  });

  const [applied, setApplied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setApplied(true);
    }, 600);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/careers" className="hover:text-brand-primary">Careers</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">{job.title}</span>
      </nav>

      {/* Header */}
      <div className="border-b border-brand-stone/40 pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="badge-sage">{job.department}</span>
          <span className="text-xs text-brand-charcoal/60 font-medium">{job.type}</span>
          <span className="text-xs text-brand-charcoal/60 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-brand-primary" /> {job.location}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">
          {job.title}
        </h1>

        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          {job.summary}
        </p>
      </div>

      {/* Job Details & Application Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Job Requirements & Benefits */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
            <h2 className="font-serif text-2xl font-bold text-brand-primary">Key Responsibilities</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-charcoal/80">
              {job.responsibilities.map((resp) => (
                <li key={resp} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-brand-stone p-8 shadow-subtle space-y-4">
            <h2 className="font-serif text-2xl font-bold text-brand-primary">Candidate Requirements</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-charcoal/80">
              {job.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-sand/50 border border-brand-stone p-8 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-brand-charcoal">What We Offer</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-charcoal/80">
              {job.benefits.map((ben) => (
                <li key={ben} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Application Form */}
        <div className="lg:col-span-5 sticky top-24 bg-white border border-brand-stone p-8 shadow-card">
          {applied ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-primary">Application Submitted</h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                Thank you for applying for the <span className="font-semibold">{job.title}</span> position, {formData.name}. Our recruitment team in Gold & Diamond Park will review your profile and contact qualified applicants within 3 business days.
              </p>
              <Link href="/careers" className="btn-secondary text-xs uppercase tracking-wider font-bold mt-4 inline-block">
                View Other Openings &rarr;
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-brand-primary pb-3 border-b border-brand-stone/40">
                Apply for this Position
              </h3>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Liam Gallagher"
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="liam@example.com"
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
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
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                  LinkedIn Profile / Portfolio Link
                </label>
                <input
                  type="url"
                  value={formData.linkedIn}
                  onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                  Resume / CV (PDF or DOC)
                </label>
                <label className="border border-dashed border-brand-stone/80 p-4 w-full flex flex-col items-center justify-center cursor-pointer hover:bg-brand-ivory/50 transition-colors">
                  <UploadCloud className="w-5 h-5 text-brand-primary mb-1" />
                  <span className="text-[11px] text-brand-charcoal/70 font-medium">
                    {formData.fileName || 'Click to select CV document'}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setFormData({ ...formData, fileName: e.target.files[0].name });
                      }
                    }}
                  />
                </label>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/70 mb-1">
                  Why haus & haus? (Brief Note)
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Tell us about your background and achievements..."
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-2.5 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary text-xs py-3.5 uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                {loading ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

