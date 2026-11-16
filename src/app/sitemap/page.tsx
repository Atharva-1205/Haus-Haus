import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { COMMUNITIES, DEVELOPMENTS, DEVELOPERS, SERVICES, GUIDES, NEWS_ARTICLES } from '@/data/mockData';

export default function SitemapPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Website Sitemap</span>
      </nav>

      <div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">
          Website Sitemap
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-2">
          Complete structural directory of all sections, property hubs, services, and educational resources on haus & haus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Core & Properties */}
        <div className="bg-white border border-brand-stone p-6 space-y-3">
          <h2 className="font-serif text-lg font-bold text-brand-primary border-b border-brand-stone/40 pb-2">Properties</h2>
          <ul className="space-y-1.5 text-xs text-brand-charcoal/80">
            <li><Link href="/" className="hover:text-brand-primary">Homepage</Link></li>
            <li><Link href="/buy" className="hover:text-brand-primary">All Properties for Sale</Link></li>
            <li><Link href="/buy?type=Apartment" className="hover:text-brand-primary">Apartments for Sale</Link></li>
            <li><Link href="/buy?type=Villa" className="hover:text-brand-primary">Villas for Sale</Link></li>
            <li><Link href="/buy?type=Townhouse" className="hover:text-brand-primary">Townhouses for Sale</Link></li>
            <li><Link href="/buy?type=Penthouse" className="hover:text-brand-primary">Luxury Penthouses</Link></li>
            <li><Link href="/rent" className="hover:text-brand-primary">All Properties for Rent</Link></li>
            <li><Link href="/rent?type=Apartment" className="hover:text-brand-primary">Apartments for Rent</Link></li>
            <li><Link href="/rent?type=Villa" className="hover:text-brand-primary">Villas for Rent</Link></li>
            <li><Link href="/commercial" className="hover:text-brand-primary">Commercial Properties</Link></li>
            <li><Link href="/valuation" className="hover:text-brand-primary">Property Valuation</Link></li>
          </ul>
        </div>

        {/* Off Plan & Developers */}
        <div className="bg-white border border-brand-stone p-6 space-y-3">
          <h2 className="font-serif text-lg font-bold text-brand-primary border-b border-brand-stone/40 pb-2">Off Plan & Developers</h2>
          <ul className="space-y-1.5 text-xs text-brand-charcoal/80">
            <li><Link href="/off-plan" className="hover:text-brand-primary">New Developments Hub</Link></li>
            {DEVELOPMENTS.map(d => (
              <li key={d.id}><Link href={`/off-plan/${d.slug}`} className="hover:text-brand-primary">{d.name}</Link></li>
            ))}
            <li><Link href="/developers" className="hover:text-brand-primary">Developers Directory</Link></li>
            {DEVELOPERS.map(dev => (
              <li key={dev.slug}><Link href={`/developers/${dev.slug}`} className="hover:text-brand-primary">{dev.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services & Divisions */}
        <div className="bg-white border border-brand-stone p-6 space-y-3">
          <h2 className="font-serif text-lg font-bold text-brand-primary border-b border-brand-stone/40 pb-2">Services (13 Divisions)</h2>
          <ul className="space-y-1.5 text-xs text-brand-charcoal/80">
            <li><Link href="/services" className="hover:text-brand-primary">Services Directory</Link></li>
            {SERVICES.map(s => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-brand-primary">{s.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Communities, Resources & Company */}
        <div className="bg-white border border-brand-stone p-6 space-y-3">
          <h2 className="font-serif text-lg font-bold text-brand-primary border-b border-brand-stone/40 pb-2">Communities & Company</h2>
          <ul className="space-y-1.5 text-xs text-brand-charcoal/80">
            <li><Link href="/communities" className="hover:text-brand-primary">Area Guides Directory</Link></li>
            {COMMUNITIES.map(c => (
              <li key={c.slug}><Link href={`/communities/${c.slug}`} className="hover:text-brand-primary">{c.name}</Link></li>
            ))}
            <li className="pt-2 border-t border-brand-stone/40 font-bold text-brand-primary">Resources & Tools</li>
            <li><Link href="/resources/guides" className="hover:text-brand-primary">Real Estate Guides</Link></li>
            <li><Link href="/resources/market-reports" className="hover:text-brand-primary">Market Reports</Link></li>
            <li><Link href="/resources/podcast" className="hover:text-brand-primary">Property Podcast</Link></li>
            <li><Link href="/calculators/rental-yield" className="hover:text-brand-primary">Rental Yield Calculator</Link></li>
            <li><Link href="/calculators/buy-vs-rent" className="hover:text-brand-primary">Buy vs Rent Calculator</Link></li>
            <li className="pt-2 border-t border-brand-stone/40 font-bold text-brand-primary">About & Contact</li>
            <li><Link href="/about" className="hover:text-brand-primary">Our Story</Link></li>
            <li><Link href="/about/why-choose-us" className="hover:text-brand-primary">Why Choose Us</Link></li>
            <li><Link href="/team" className="hover:text-brand-primary">Our Team</Link></li>
            <li><Link href="/reviews" className="hover:text-brand-primary">Client Reviews</Link></li>
            <li><Link href="/careers" className="hover:text-brand-primary">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-brand-primary">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

