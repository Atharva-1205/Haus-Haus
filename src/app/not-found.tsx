import React from 'react';
import Link from 'next/link';
import { Building, Search, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl text-center space-y-6">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-secondary">
          Error 404
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-charcoal">
          Property Not Found
        </h1>

        <p className="text-sm sm:text-base text-brand-charcoal/70 leading-relaxed">
          The property, area guide, or page you were looking for may have been relocated, sold, or updated to reflect recent market movements.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary text-xs uppercase tracking-wider font-bold py-3 px-6 flex items-center gap-2"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>
          <Link
            href="/buy"
            className="btn-secondary text-xs uppercase tracking-wider font-bold py-3 px-6"
          >
            Browse Properties for Sale
          </Link>
        </div>

        <div className="pt-8 border-t border-brand-stone/40">
          <p className="text-xs text-brand-charcoal/60 mb-3">Popular Destinations:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/rent" className="px-3 py-1.5 bg-white border border-brand-stone/60 text-xs text-brand-charcoal hover:border-brand-primary">Properties for Rent</Link>
            <Link href="/off-plan" className="px-3 py-1.5 bg-white border border-brand-stone/60 text-xs text-brand-charcoal hover:border-brand-primary">Off Plan Developments</Link>
            <Link href="/communities" className="px-3 py-1.5 bg-white border border-brand-stone/60 text-xs text-brand-charcoal hover:border-brand-primary">Discover Dubai Communities</Link>
            <Link href="/valuation" className="px-3 py-1.5 bg-white border border-brand-stone/60 text-xs text-brand-charcoal hover:border-brand-primary">Property Valuation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

