import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Users, 
  Building2, 
  TrendingUp, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function WhyChooseUsPage() {
  const reasons = [
    {
      title: 'Client-First Culture',
      desc: 'Founded on British brokerage standards where transparent advice precedes any sales agenda. Over 98% of our clients recommend us to friends and family.',
      icon: HeartHandshake
    },
    {
      title: '360+ Community Specialists',
      desc: 'Rather than generalists, our brokers live and breathe hyper-specific communities. We know every building layout, upcoming supply, and service charge history.',
      icon: Users
    },
    {
      title: '13 Integrated Property Divisions',
      desc: 'From initial search to mortgage pre-approval, in-house conveyancing, property management, holiday home licensing, and home maintenance, you never need a third-party intermediary.',
      icon: Building2
    },
    {
      title: 'Verified Land Department Records',
      desc: 'We rely on empirical Land Department transactions rather than speculative listing prices, ensuring our buyers and sellers transact at peak market value.',
      icon: ShieldCheck
    },
    {
      title: '28+ Industry Awards',
      desc: 'Consistently named Agency of the Year by Property Finder, Bayut, and international property award institutions for our volume, integrity, and client satisfaction.',
      icon: Award
    },
    {
      title: 'Global Outreach & UHNW Network',
      desc: 'With clients in over 60 countries and syndication across major global wealth publications, we present Dubai properties to pre-qualified high-net-worth buyers.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/about" className="hover:text-brand-primary">About</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Why Choose Us</span>
      </nav>

      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          The haus & haus Difference
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Why Discerning Clients Choose haus & haus
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 leading-relaxed">
          In a dynamic property market like Dubai, having a trusted partner with localized data, deep integrity, and full-spectrum service is the key to enduring success.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.title} className="card-luxury p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-brand-stone/30 flex items-center justify-center text-brand-primary mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-2">{r.title}</h3>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Stats Strip */}
      <div className="bg-brand-primary text-white p-8 sm:p-12 border border-brand-secondary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-serif text-4xl font-bold text-brand-sage">{COMPANY_INFO.stats.yearsInDubai}</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Operating in Dubai</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-brand-sage">{COMPANY_INFO.stats.totalTransactions}</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Gross Sales Volume</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-brand-sage">3,200+</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Managed Properties</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-brand-sage">98.4%</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-sand/40 border border-brand-stone p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="font-serif text-3xl font-bold text-brand-charcoal">
          Ready to experience the difference?
        </h3>
        <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-lg mx-auto">
          Connect with one of our 360+ verified property specialists today for an informal, no-obligation conversation.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <Link href="/contact" className="btn-primary text-xs uppercase tracking-wider font-bold">
            Speak to an Advisor
          </Link>
          <Link href="/buy" className="btn-secondary text-xs uppercase tracking-wider font-bold">
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  );
}

