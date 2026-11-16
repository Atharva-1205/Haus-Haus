'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  TrendingUp,
  FileText
} from 'lucide-react';
import { DEVELOPMENTS, DEVELOPERS, CONSULTANTS } from '@/data/mockData';
import { DevelopmentCard } from '@/components/common/DevelopmentCard';
import { EnquiryForm } from '@/components/common/EnquiryForm';

export default function OffPlanPage() {
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('');
  const offPlanConsultant = CONSULTANTS.find((c) => c.department === 'Off Plan') || CONSULTANTS[4];

  const filteredDevelopments = selectedDeveloper
    ? DEVELOPMENTS.filter((d) => d.developer.slug === selectedDeveloper)
    : DEVELOPMENTS;

  return (
    <div>
      {/* Off-Plan Hero */}
      <section className="bg-brand-primary text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2000&q=80"
            alt="Dubai Off-Plan Developments"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <nav className="flex items-center justify-center text-xs text-brand-stone/60 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <span className="text-brand-sage font-semibold">Off Plan Division</span>
          </nav>

          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-sage">
            New Launches & Master Developments
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-ivory mt-2 max-w-4xl mx-auto leading-tight">
            Discover what&apos;s next in Dubai.
          </h1>

          <p className="text-sm sm:text-base text-brand-stone/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            Explore new developments and capital allocation opportunities with expert, unbiased guidance from our dedicated Off Plan team. Direct developer VIP access with 0% buyer commission.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#developments"
              className="px-8 py-4 bg-brand-sage text-brand-primary text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-md"
            >
              Browse Developments
            </a>
            <Link
              href="/resources/guides/dubai-investment-playbook"
              className="px-8 py-4 border border-brand-sage text-brand-ivory text-xs uppercase tracking-widest font-bold hover:bg-brand-sage hover:text-brand-primary transition-all"
            >
              Read Investment Playbook
            </Link>
          </div>
        </div>
      </section>

      {/* Developer Filter Bar */}
      <div id="developments" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-brand-stone/40 gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Curated Portfolio</span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal mt-1">
              Featured New Developments
            </h2>
          </div>

          {/* Developer selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-charcoal/60 uppercase font-semibold text-[10px]">Developer:</span>
            <select
              value={selectedDeveloper}
              onChange={(e) => setSelectedDeveloper(e.target.value)}
              className="bg-white border border-brand-stone/70 px-3 py-2 text-xs text-brand-charcoal font-medium focus:outline-none focus:border-brand-primary"
            >
              <option value="">All Developers</option>
              {DEVELOPERS.map((dev) => (
                <option key={dev.slug} value={dev.slug}>{dev.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Development Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDevelopments.map((dev) => (
            <DevelopmentCard key={dev.id} development={dev} />
          ))}
        </div>

        {/* Explore Master Developers Section */}
        <div className="mt-20 pt-16 border-t border-brand-stone/40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Master Creators</span>
              <h3 className="font-serif text-3xl font-bold text-brand-charcoal mt-1">
                Dubai&apos;s Trusted Developers
              </h3>
            </div>
            <Link href="/developers" className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary">
              View All Master Developers &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEVELOPERS.map((dev) => (
              <Link
                key={dev.slug}
                href={`/developers/${dev.slug}`}
                className="card-luxury p-6 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">
                    Est. {dev.founded}
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors mt-2">
                    {dev.name}
                  </h4>
                  <p className="text-xs text-brand-charcoal/70 line-clamp-3 mt-3 leading-relaxed">
                    {dev.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
                  <span>{dev.totalProjects}+ Delivered Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Off Plan Investment Benefits Grid */}
        <div className="mt-20 bg-brand-sand/50 p-8 sm:p-14 border border-brand-stone/50">
          <div className="max-w-3xl mb-10">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Strategic Advantage</span>
            <h3 className="font-serif text-3xl font-bold text-brand-charcoal mt-1">
              Why Invest in Dubai Off-Plan Properties?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 text-brand-primary" />
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">Capital Growth Potential</h4>
              <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                Securing initial release launch pricing typically enables investors to capture 15% to 35% capital appreciation by construction completion.
              </p>
            </div>
            <div className="space-y-2">
              <CreditCard className="w-8 h-8 text-brand-primary" />
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">Flexible Payment Plans</h4>
              <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                Staged milestone payments linked to independent RERA construction milestones spread cash-flow requirements across 3 to 5 years.
              </p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="w-8 h-8 text-brand-primary" />
              <h4 className="font-serif text-xl font-bold text-brand-charcoal">RERA Escrow Law Protection</h4>
              <p className="text-xs text-brand-charcoal/70 leading-relaxed">
                All buyer funds are deposited directly into government-regulated project escrow accounts, released to developers strictly upon construction audit verification.
              </p>
            </div>
          </div>
        </div>

        {/* Off Plan Consultation Section */}
        <div className="mt-20 bg-white border border-brand-stone p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Dedicated Off-Plan Desk</span>
            <div className="flex items-center gap-4">
              <img
                src={offPlanConsultant.image}
                alt={offPlanConsultant.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-brand-primary"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">{offPlanConsultant.name}</h3>
                <p className="text-xs text-brand-secondary font-semibold">{offPlanConsultant.title}</p>
                <p className="text-[11px] text-brand-charcoal/60 mt-1">Specialist in Waterfront & Master Launches</p>
              </div>
            </div>
            <p className="text-xs text-brand-charcoal/70 leading-relaxed">
              &ldquo;With hundreds of off-plan launches across Dubai each quarter, data-driven discernment is critical. We review developer balance sheets, past delivery track records, and realistic rental yield models before recommending any allocation.&rdquo;
            </p>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm
              defaultDepartment="Off Plan"
              title="Request VIP Off-Plan Allocation & Brochure"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

