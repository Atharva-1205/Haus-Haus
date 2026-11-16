import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowRight, 
  Award, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Tv,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function AboutPage() {
  const milestones = [
    { year: '2013', title: 'Founded in Dubai', desc: 'Three UK friends and property specialists — James Perry, Luke Remington, and Simon Baker — establish haus & haus with a commitment to British agency ethics and transparent client relationships.' },
    { year: '2016', title: 'Expansion to Gold & Diamond Park', desc: 'Acquisition of our flagship headquarters on Sheikh Zayed Road, scaling to over 100 dedicated brokers and introducing dedicated Property Management and Conveyancing divisions.' },
    { year: '2019', title: 'Property Finder Agency of the Year', desc: 'Recognized with multiple real estate industry accolades for sales volume, customer retention, and digital innovation.' },
    { year: '2022', title: "BBC Three 'Dubai Hustle' Broadcast", desc: 'Featured globally across two seasons of BBC Three’s factual documentary Dubai Hustle, capturing the work ethic, culture, and high-stakes transactions of our advisory teams.' },
    { year: '2024+', title: '360+ Experts Across 13 Divisions', desc: 'Now managing billions in real estate transactions annually, spanning sales, leasing, commercial advisory, short-term holiday homes, and cross-border currency services.' }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
          <span className="text-brand-primary font-semibold">About Us</span>
        </nav>

        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Our Heritage & Ethos
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-charcoal mt-1 max-w-4xl leading-tight">
          Real estate is about people. Always.
        </h1>
        <p className="text-sm sm:text-base text-brand-charcoal/70 mt-4 max-w-3xl leading-relaxed">
          From three UK property experts in 2013 to an award-winning organization of 360+ professionals, discover the founding values that have positioned haus & haus as Dubai&apos;s most trusted agency.
        </p>
      </section>

      {/* Hero Visual Split */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">Founding Story</span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal">
              Built on Transparency. Sustained by Trust.
            </h2>
            <div className="space-y-4 text-sm text-brand-charcoal/80 leading-relaxed">
              <p>
                In 2013, James Perry, Luke Remington, and Simon Baker arrived in Dubai with extensive UK property brokerage backgrounds. They recognized that while Dubai was expanding at an astonishing speed, the property brokerage landscape often lacked the transparency, client-first empathy, and long-term fiduciary duty standard in mature European capitals.
              </p>
              <p>
                They established <strong>haus & haus</strong> with a single foundational commitment: to build relationships, not merely conclude transactions. This philosophy guided the recruitment of top international talent, investment in world-class training, and the creation of integrated in-house legal and property management departments.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/team" className="btn-primary text-xs uppercase tracking-wider font-bold">
                Meet the Leadership Team &rarr;
              </Link>
              <Link href="/about/why-choose-us" className="btn-secondary text-xs uppercase tracking-wider font-bold">
                Why Choose Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-brand-stone/30 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="haus & haus Dubai Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Verified Company Statistics Bar */}
      <section className="bg-brand-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl sm:text-5xl font-bold text-brand-sage">{COMPANY_INFO.stats.yearsInDubai}</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Years Operating in Dubai</p>
          </div>
          <div>
            <p className="font-serif text-4xl sm:text-5xl font-bold text-brand-sage">{COMPANY_INFO.stats.agentsCount}</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Licensed Property Experts</p>
          </div>
          <div>
            <p className="font-serif text-4xl sm:text-5xl font-bold text-brand-sage">{COMPANY_INFO.stats.totalTransactions}</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Transaction Volume</p>
          </div>
          <div>
            <p className="font-serif text-4xl sm:text-5xl font-bold text-brand-sage">{COMPANY_INFO.stats.clientSatisfaction}</p>
            <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Verified Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Executive Leadership</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mt-1">
            Meet the Founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'James Perry',
              role: 'Managing Director & Co-Founder',
              image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
              bio: 'Co-founder driving operational strategy, group governance, and ultra-high-net-worth investor relations across the GCC and Europe.'
            },
            {
              name: 'Luke Remington',
              role: 'Managing Director & Co-Founder',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
              bio: 'Co-founder spearheading residential sales, luxury villa brokerage, and regular spokesperson on BBC Three’s Dubai Hustle.'
            },
            {
              name: 'Simon Baker',
              role: 'Managing Director & Co-Founder',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
              bio: 'Co-founder leading brand development, digital innovation, commercial real estate, and recruitment of world-class brokers.'
            }
          ].map((founder) => (
            <div key={founder.name} className="card-luxury p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-brand-stone/20 mb-4 border-2 border-brand-primary">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-charcoal">{founder.name}</h3>
              <p className="text-xs text-brand-secondary font-semibold mt-1">{founder.role}</p>
              <p className="text-xs text-brand-charcoal/70 mt-3 leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-t border-brand-stone/40 pt-16">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Evolution</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mt-1">
              Key Milestones in Our Journey
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-brand-stone/40">
            {milestones.map((m) => (
              <div key={m.year} className="relative flex items-start gap-6 pl-10">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-brand-primary border-4 border-white shadow" />
                <div className="bg-white border border-brand-stone p-6 shadow-subtle flex-1">
                  <span className="font-serif text-2xl font-bold text-brand-primary">{m.year}</span>
                  <h4 className="font-serif text-xl font-bold text-brand-charcoal mt-1">{m.title}</h4>
                  <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BBC Dubai Hustle Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-brand-charcoal text-white p-8 sm:p-12 border border-brand-stone/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage flex items-center gap-1.5">
              <Tv className="w-4 h-4" /> Global Television Feature
            </span>
            <h3 className="font-serif text-3xl font-bold text-brand-ivory">
              As Seen on BBC Three&apos;s &ldquo;Dubai Hustle&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-brand-stone/80 leading-relaxed max-w-2xl">
              Following the day-to-day excitement, resilience, and ambition of haus & haus property consultants as they navigate Dubai’s fast-moving luxury real estate arena across two broadcast seasons.
            </p>
          </div>
          <div className="lg:col-span-4 text-center lg:text-right">
            <Link href="/careers" className="btn-primary text-xs uppercase tracking-wider font-bold py-3.5 px-6">
              Join Our Team in Dubai &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

