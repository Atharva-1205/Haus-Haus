import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  KeyRound, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  FileCheck, 
  Wrench, 
  Coins, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '@/data/mockData';

export default function ServicesPage() {
  const iconMap: Record<string, any> = {
    'residential-sales': Building2,
    'residential-leasing': KeyRound,
    'holiday-rentals': Compass,
    'property-management': ShieldCheck,
    'home-maintenance': Wrench,
    'mortgages': TrendingUp,
    'conveyancing': FileCheck,
    'currency-services': Coins,
  };

  return (
    <div>
      {/* Services Hero */}
      <section className="bg-brand-primary text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <nav className="flex items-center justify-center text-xs text-brand-stone/60 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-brand-stone/40" />
            <span className="text-brand-sage font-semibold">Services</span>
          </nav>

          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-brand-sage">
            Full-Spectrum Property Ecosystem
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-ivory mt-2 max-w-4xl mx-auto leading-tight">
            Everything you need for your Dubai property journey.
          </h1>

          <p className="text-sm sm:text-base text-brand-stone/80 mt-4 max-w-2xl mx-auto leading-relaxed">
            From premier luxury sales and certified property management to licensed holiday rentals and in-house conveyancing, haus & haus operates 13 specialized divisions under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.slug] || Building2;
            return (
              <div key={service.slug} className="card-luxury p-8 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-brand-stone/30 group-hover:bg-brand-primary transition-colors flex items-center justify-center text-brand-primary group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">
                      haus & haus Division
                    </span>
                  </div>

                  <Link href={`/services/${service.slug}`}>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
                      {service.name}
                    </h2>
                  </Link>

                  <p className="text-xs font-semibold text-brand-secondary mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-charcoal/70 mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-brand-stone/40 space-y-1.5 text-xs text-brand-charcoal/80">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-stone/40 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-secondary flex items-center gap-1"
                  >
                    <span>Division Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/services/${service.slug}#enquire`}
                    className="btn-primary text-xs py-2 px-3"
                  >
                    Enquire Directly
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

