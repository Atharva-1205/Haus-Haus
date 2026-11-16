import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Building, Award, CheckCircle } from 'lucide-react';
import { DEVELOPERS, DEVELOPMENTS } from '@/data/mockData';

export default function DevelopersDirectoryPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60 mb-6">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/off-plan" className="hover:text-brand-primary">Off Plan</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Master Developers</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">Dubai Master Developers</span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Accredited Development Partners
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          haus & haus collaborates with the UAE&apos;s leading government-backed and private master developers. We independently analyze developer balance sheets, past delivery track records, and construction speed to recommend sound off-plan investments.
        </p>
      </div>

      {/* Developer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DEVELOPERS.map((dev) => {
          const devProjects = DEVELOPMENTS.filter((d) => d.developer.slug === dev.slug);
          return (
            <div key={dev.slug} className="card-luxury p-8 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">
                    Founded in {dev.founded} &bull; {dev.headquarters}
                  </span>
                  <span className="badge-sage">{dev.totalProjects}+ Projects</span>
                </div>

                <Link href={`/developers/${dev.slug}`}>
                  <h2 className="font-serif text-3xl font-bold text-brand-charcoal group-hover:text-brand-primary transition-colors">
                    {dev.name}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-brand-charcoal/75 mt-3 leading-relaxed">
                  {dev.description}
                </p>

                <div className="mt-4 pt-4 border-t border-brand-stone/40">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-charcoal/70 mb-2">Signature Masterplans</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dev.featuredProjects.map((p) => (
                      <span key={p} className="text-xs bg-brand-ivory border border-brand-stone/60 px-2.5 py-1 text-brand-charcoal">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-stone/40 flex items-center justify-between">
                <span className="text-xs text-brand-charcoal/60">
                  {devProjects.length} Active Launch{devProjects.length === 1 ? '' : 'es'} with haus & haus
                </span>
                <Link
                  href={`/developers/${dev.slug}`}
                  className="btn-primary text-xs py-2.5 px-4"
                >
                  View Profile & Projects &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

