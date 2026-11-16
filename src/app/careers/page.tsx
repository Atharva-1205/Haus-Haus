'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  Tv, 
  MapPin, 
  CheckCircle2, 
  Award,
  Users
} from 'lucide-react';
import { JOB_VACANCIES, COMPANY_INFO } from '@/data/mockData';

export default function CareersPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Careers Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
          <Link href="/about" className="hover:text-brand-primary">About</Link>
          <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
          <span className="text-brand-primary font-semibold">Careers</span>
        </nav>

        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Join Our 360+ Specialists
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-charcoal mt-1 max-w-4xl leading-tight">
          Find your place in our haus.
        </h1>
        <p className="text-sm sm:text-base text-brand-charcoal/70 mt-4 max-w-3xl leading-relaxed">
          At haus & haus, we have built Dubai&apos;s most collaborative, ambitious, and ethically grounded real estate culture. Discover exceptional training, unencumbered lead allocations, and uncapped commission structures.
        </p>
      </section>

      {/* Culture & Offices Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">The haus & haus Academy</span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal">
              World-Class Training and Mentorship
            </h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Whether you are an established broker in London, Dublin, or Sydney considering a move to Dubai, or a seasoned UAE practitioner seeking a more supportive platform, our proprietary in-house academy provides structured mentoring directly from founding partners Luke Remington and Simon Baker.
            </p>
            <ul className="space-y-2 text-xs text-brand-charcoal/80 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700" /> Intensive RERA certification and legal conveyancing mastery</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700" /> Dedicated digital marketing budgets allocated to every broker</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700" /> In-house telemarketing and verified international lead generation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700" /> Comprehensive medical insurance, residency visa, and relocation assistance</li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-brand-stone/30 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="haus & haus Team Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BBC Three Dubai Hustle Banner */}
      <section className="bg-brand-primary text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage flex items-center gap-1.5">
              <Tv className="w-4 h-4" /> As Seen on BBC Three
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory">
              Star in Your Own Success Story
            </h3>
            <p className="text-xs sm:text-sm text-brand-stone/80 leading-relaxed">
              haus & haus was the exclusive focus of BBC Three’s documentary series <em>Dubai Hustle</em>. We celebrate ambition, resilience, and true teamwork.
            </p>
          </div>
          <a
            href="#vacancies"
            className="btn-ivory text-xs uppercase tracking-widest font-bold py-3.5 px-6 whitespace-nowrap"
          >
            View Open Vacancies &darr;
          </a>
        </div>
      </section>

      {/* Current Vacancies Section */}
      <section id="vacancies" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-4 border-b border-brand-stone/40 mb-8">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Opportunities</span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal mt-0.5">
              Current Vacancies ({JOB_VACANCIES.length})
            </h2>
          </div>
          <span className="text-xs text-brand-secondary font-semibold">Immediate Starts Available</span>
        </div>

        <div className="space-y-6">
          {JOB_VACANCIES.map((job) => (
            <div key={job.slug} className="card-luxury p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge-sage">{job.department}</span>
                  <span className="text-xs text-brand-charcoal/60 font-medium">{job.type}</span>
                  <span className="text-xs text-brand-charcoal/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-primary" /> {job.location}
                  </span>
                </div>

                <Link href={`/careers/${job.slug}`}>
                  <h3 className="font-serif text-2xl font-bold text-brand-charcoal hover:text-brand-primary transition-colors">
                    {job.title}
                  </h3>
                </Link>

                <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                  {job.summary}
                </p>

                <p className="text-[11px] text-brand-secondary font-semibold">
                  Required: {job.experienceLevel}
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <Link
                  href={`/careers/${job.slug}`}
                  className="btn-primary w-full md:w-auto text-xs py-3 px-6 text-center block"
                >
                  View Details & Apply &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

