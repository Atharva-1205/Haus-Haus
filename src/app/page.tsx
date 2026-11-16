import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Users, 
  Building2, 
  KeyRound, 
  TrendingUp, 
  Compass, 
  Wrench, 
  FileCheck, 
  Coins, 
  CheckCircle,
  Star
} from 'lucide-react';
import { HeroSearchBar } from '@/components/home/HeroSearchBar';
import { PropertyCard } from '@/components/common/PropertyCard';
import { DevelopmentCard } from '@/components/common/DevelopmentCard';
import { CommunityCard } from '@/components/common/CommunityCard';
import { ConsultantCard } from '@/components/common/ConsultantCard';
import { 
  COMPANY_INFO, 
  PROPERTIES, 
  DEVELOPMENTS, 
  COMMUNITIES, 
  CONSULTANTS, 
  TESTIMONIALS, 
  NEWS_ARTICLES 
} from '@/data/mockData';

export default function HomePage() {
  const featuredProperties = PROPERTIES.filter(p => p.featured).slice(0, 4);
  const featuredDevelopments = DEVELOPMENTS.slice(0, 3);
  const featuredCommunities = COMMUNITIES.filter(c => c.featured).slice(0, 4);
  const featuredConsultants = CONSULTANTS.slice(0, 4);
  const latestArticles = NEWS_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[88vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-brand-charcoal overflow-hidden">
        {/* Background Architectural Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
            alt="Dubai Skyline & Luxury Real Estate"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/60 to-transparent" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-8 sm:pt-14 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-sage animate-ping" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-ivory font-bold">
              Dubai Real Estate &bull; Established 2013
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
            Your Dubai property journey starts here.
          </h1>

          <p className="text-base sm:text-lg text-brand-stone/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Expert advice. Exceptional properties. Over 360 property specialists built around your ambitions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/buy"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-secondary transition-all shadow-md"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-brand-primary transition-all"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>

        {/* Hero Search Component */}
        <div className="relative z-10 w-full mt-4">
          <HeroSearchBar />
        </div>
      </section>

      {/* SECTION 2: BRAND INTRODUCTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Split */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-stone/30 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="haus & haus Head Office Dubai"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stat Overhang Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-brand-primary text-white p-6 sm:p-8 max-w-xs shadow-float border border-brand-sage/20 hidden sm:block">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-brand-sage">360+</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-stone/90 mt-1">
                Verified Property Experts Across 13 Specialist Divisions
              </p>
            </div>
          </div>

          {/* Text Split */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
              More than real estate
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
              Built on relationships. Driven by opportunity.
            </h2>

            <div className="space-y-4 text-sm text-brand-charcoal/80 leading-relaxed">
              <p>
                haus & haus was founded in 2013 by three UK friends and property specialists — James Perry, Luke Remington, and Simon Baker. Their founding purpose was simple: introduce British agency ethics, transparent governance, and unwavering accountability to Dubai&apos;s dynamic property landscape.
              </p>
              <p>
                From our flagship headquarters in Dubai&apos;s Gold & Diamond Park, our group has expanded into an award-winning organization managing over AED 32 Billion in aggregate transactions, featured prominently on BBC Three&apos;s factual entertainment series <em>Dubai Hustle</em>.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/about"
                className="btn-primary text-xs tracking-wider uppercase font-bold flex items-center gap-2"
              >
                <span>Learn Our Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/about/why-choose-us"
                className="btn-secondary text-xs tracking-wider uppercase font-bold"
              >
                Why Choose haus & haus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE PROPERTY CATEGORIES */}
      <section className="bg-brand-sand/50 py-20 px-4 sm:px-6 lg:px-8 border-y border-brand-stone/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Discover Your Path</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal mt-1">
              Four Specialized Gateways
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Buy Card */}
            <Link
              href="/buy"
              className="group relative aspect-[3/4] overflow-hidden bg-brand-charcoal block shadow-subtle hover:shadow-float transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Buy a Property in Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">Residential Sales</span>
                <h3 className="font-serif text-2xl font-bold mt-1 group-hover:text-brand-ivory transition-colors flex items-center justify-between">
                  <span>Buy a Property</span>
                  <ArrowUpRight className="w-5 h-5 text-brand-sage transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-xs text-brand-stone/80 mt-1 line-clamp-2">
                  Prime golf estates, beachfront penthouses, and family villas.
                </p>
              </div>
            </Link>

            {/* Rent Card */}
            <Link
              href="/rent"
              className="group relative aspect-[3/4] overflow-hidden bg-brand-charcoal block shadow-subtle hover:shadow-float transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Rent a Property in Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">Residential Leasing</span>
                <h3 className="font-serif text-2xl font-bold mt-1 group-hover:text-brand-ivory transition-colors flex items-center justify-between">
                  <span>Rent a Property</span>
                  <ArrowUpRight className="w-5 h-5 text-brand-sage transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-xs text-brand-stone/80 mt-1 line-clamp-2">
                  Long-term serviced tenancies and luxury executive residences.
                </p>
              </div>
            </Link>

            {/* Off Plan Card */}
            <Link
              href="/off-plan"
              className="group relative aspect-[3/4] overflow-hidden bg-brand-charcoal block shadow-subtle hover:shadow-float transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
                alt="Explore Off-Plan Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">New Developments</span>
                <h3 className="font-serif text-2xl font-bold mt-1 group-hover:text-brand-ivory transition-colors flex items-center justify-between">
                  <span>Explore Off Plan</span>
                  <ArrowUpRight className="w-5 h-5 text-brand-sage transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-xs text-brand-stone/80 mt-1 line-clamp-2">
                  Direct developer launches with flexible milestone payment plans.
                </p>
              </div>
            </Link>

            {/* Commercial Card */}
            <Link
              href="/commercial"
              className="group relative aspect-[3/4] overflow-hidden bg-brand-charcoal block shadow-subtle hover:shadow-float transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Commercial Real Estate Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">Corporate Real Estate</span>
                <h3 className="font-serif text-2xl font-bold mt-1 group-hover:text-brand-ivory transition-colors flex items-center justify-between">
                  <span>Commercial Property</span>
                  <ArrowUpRight className="w-5 h-5 text-brand-sage transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-xs text-brand-stone/80 mt-1 line-clamp-2">
                  Grade A office headquarters, retail frontage, and investment assets.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PROPERTIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Curated Residences</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mt-1">
              Discover exceptional properties.
            </h2>
          </div>
          <Link
            href="/buy"
            className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary flex items-center gap-1.5"
          >
            <span>View All Properties ({PROPERTIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* SECTION 5: OFF-PLAN DEVELOPMENTS */}
      <section className="bg-brand-primary text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-sage">Off Plan Opportunities</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ivory mt-1">
                A new perspective on Dubai living.
              </h2>
            </div>
            <Link
              href="/off-plan"
              className="text-xs font-bold uppercase tracking-wider text-brand-sage hover:text-white flex items-center gap-1.5"
            >
              <span>Explore All Developments ({DEVELOPMENTS.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDevelopments.map((dev) => (
              <DevelopmentCard key={dev.id} development={dev} />
            ))}
          </div>

          {/* Developer strip */}
          <div className="mt-14 pt-8 border-t border-brand-secondary/40 flex flex-wrap items-center justify-between gap-6 text-xs text-brand-stone/70">
            <span className="uppercase tracking-widest font-semibold text-brand-sage">Direct Developer Access:</span>
            {['Emaar', 'Nakheel', 'Sobha Realty', 'Ellington', 'Meraas', 'Omniyat', 'Damac'].map((devName) => (
              <span key={devName} className="font-serif text-base text-white hover:text-brand-sage transition-colors">
                {devName}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPLORE DUBAI COMMUNITIES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Dubai Area Guides</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mt-1">
              Find the place that feels like home.
            </h2>
          </div>
          <Link
            href="/communities"
            className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary flex items-center gap-1.5"
          >
            <span>Explore All 8 Communities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCommunities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </section>

      {/* SECTION 7: SERVICES GRID */}
      <section className="bg-brand-ivory py-24 px-4 sm:px-6 lg:px-8 border-y border-brand-stone/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Full-Spectrum Real Estate</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mt-1">
              Expertise at every stage of your property journey.
            </h2>
            <p className="text-sm text-brand-charcoal/70 mt-3">
              13 integrated divisions delivering complete peace of mind for buyers, sellers, landlords, and corporate tenants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { slug: 'residential-sales', title: 'Residential Sales', desc: 'Prime villas, apartments, and off-market luxury acquisitions.', icon: Building2 },
              { slug: 'residential-leasing', title: 'Residential Leasing', desc: 'Vetted tenant matching, corporate relocations, and Ejari support.', icon: KeyRound },
              { slug: 'holiday-rentals', title: 'Holiday Rentals', desc: 'Licensed DET vacation home management generating 20-35% higher yields.', icon: Compass },
              { slug: 'property-management', title: 'Property Management', desc: 'Zero vacancy focus, rent collection, and hands-off landlord peace of mind.', icon: ShieldCheck },
              { slug: 'commercial', title: 'Commercial Real Estate', desc: 'Grade A corporate workspaces, retail storefronts, and yield portfolios.', icon: Building2 },
              { slug: 'mortgages', title: 'Mortgages & Finance', desc: 'Independent comparisons across 20+ UAE banks for competitive rates.', icon: TrendingUp },
              { slug: 'home-maintenance', title: 'Home Maintenance', desc: '24/7 emergency response, AC servicing, plumbing, and annual AMCs.', icon: Wrench },
              { slug: 'conveyancing', title: 'Conveyancing & Transfer', desc: 'Clear title deed transfers, DLD trustee coordination, and escrow security.', icon: FileCheck },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-luxury p-6 flex flex-col justify-between group hover:border-brand-primary"
                >
                  <div>
                    <div className="w-12 h-12 bg-brand-stone/30 group-hover:bg-brand-primary transition-colors flex items-center justify-center text-brand-primary group-hover:text-white mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary group-hover:text-brand-secondary">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY HAUS & HAUS (DEEP FOREST GREEN) */}
      <section className="bg-brand-primary text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-sage">Verified Track Record</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-ivory leading-tight">
                People first. Always.
              </h2>
              <p className="text-sm text-brand-stone/80 leading-relaxed">
                Founded in 2013 by three UK property professionals, haus & haus has grown into one of Dubai&apos;s most respected real estate institutions. We reject short-term transactional mindsets in favor of enduring advisory partnerships.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-brand-sage pl-4">
                  <p className="font-serif text-3xl font-bold text-brand-sage">{COMPANY_INFO.stats.yearsInDubai}</p>
                  <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Years Operating in Dubai</p>
                </div>
                <div className="border-l-2 border-brand-sage pl-4">
                  <p className="font-serif text-3xl font-bold text-brand-sage">{COMPANY_INFO.stats.agentsCount}</p>
                  <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Licensed Real Estate Specialists</p>
                </div>
                <div className="border-l-2 border-brand-sage pl-4">
                  <p className="font-serif text-3xl font-bold text-brand-sage">{COMPANY_INFO.stats.totalTransactions}</p>
                  <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Total Transaction Volume</p>
                </div>
                <div className="border-l-2 border-brand-sage pl-4">
                  <p className="font-serif text-3xl font-bold text-brand-sage">{COMPANY_INFO.stats.awardsWon}</p>
                  <p className="text-xs uppercase tracking-wider text-brand-stone/80 mt-1">Industry Awards Won</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-sage text-brand-primary text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
                >
                  <span>Our Full Company Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-secondary shadow-float border border-brand-sage/20">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                  alt="Dubai Hustle BBC Three and haus & haus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 p-4 bg-brand-secondary/60 border border-brand-sage/30 flex items-center justify-between text-xs text-brand-stone">
                <span>Featured internationally on BBC Three&apos;s <em>Dubai Hustle</em></span>
                <span className="font-bold text-white">Series 1 & 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FIND YOUR CONSULTANT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Our Specialists</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mt-1">
              The right expert makes all the difference.
            </h2>
          </div>
          <Link
            href="/team"
            className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary flex items-center gap-1.5"
          >
            <span>Search All 360+ Experts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredConsultants.map((consultant) => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>
      </section>

      {/* SECTION 10: CLIENT TESTIMONIALS */}
      <section className="bg-brand-sand/60 py-24 px-4 sm:px-6 lg:px-8 border-y border-brand-stone/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Verified Client Reviews</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mt-1">
              Trusted by people across Dubai.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="card-luxury p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-amber-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="font-serif text-base italic text-brand-charcoal leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-stone/40 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-brand-charcoal">{testimonial.reviewerName}</p>
                    <p className="text-[11px] text-brand-charcoal/60">{testimonial.community} &bull; {testimonial.department}</p>
                  </div>
                  {testimonial.consultantName && (
                    <span className="text-[10px] text-brand-secondary font-medium">
                      Advisor: {testimonial.consultantName.split(' ')[0]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="btn-secondary text-xs tracking-wider uppercase font-bold"
            >
              Read All Verified Client Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: NEWS & INSIGHTS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Knowledge Hub</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal mt-1">
              Market intelligence and reports.
            </h2>
          </div>
          <Link
            href="/resources/news"
            className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary flex items-center gap-1.5"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/news/${article.slug}`}
              className="card-luxury flex flex-col group overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-stone/20">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-primary text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-brand-charcoal/60 mb-2">
                    <span>{article.publishedDate}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 line-clamp-2 mt-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-brand-stone/40 flex items-center justify-between text-xs font-semibold text-brand-primary">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 12: FINAL EDITORIAL CTA */}
      <section className="bg-brand-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-sage">Begin Today</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-ivory leading-tight">
            Let&apos;s make your next move a confident one.
          </h2>
          <p className="text-sm sm:text-base text-brand-stone/80 max-w-xl mx-auto leading-relaxed">
            Whether you are buying your dream family home, seeking high rental returns, or requesting an honest valuation, our consultants are ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-sage text-brand-primary text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-md"
            >
              Speak to Our Team
            </Link>
            <Link
              href="/buy"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-sage text-brand-ivory text-xs uppercase tracking-widest font-bold hover:bg-brand-sage hover:text-brand-primary transition-all"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

