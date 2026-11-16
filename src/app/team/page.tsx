'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, Users, RotateCcw } from 'lucide-react';
import { CONSULTANTS } from '@/data/mockData';
import { ConsultantCard } from '@/components/common/ConsultantCard';

export default function TeamDirectoryPage() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');
  const [language, setLanguage] = useState('All');

  const departments = ['All', 'Residential Sales', 'Residential Leasing', 'Off Plan', 'Commercial', 'Property Management'];
  const languages = ['All', 'English', 'Arabic', 'French', 'German', 'Spanish'];

  const filteredConsultants = useMemo(() => {
    return CONSULTANTS.filter((c) => {
      if (search) {
        const q = search.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesComm = c.communities.some(comm => comm.toLowerCase().includes(q));
        if (!matchesName && !matchesTitle && !matchesComm) return false;
      }

      if (department !== 'All' && c.department !== department) {
        return false;
      }

      if (language !== 'All' && !c.languages.includes(language)) {
        return false;
      }

      return true;
    });
  }, [search, department, language]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/about" className="hover:text-brand-primary">About</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Our Team</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          360+ Property Specialists
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Meet Our Team of Experts
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          At haus & haus, our people are our cornerstone. Browse our directory of licensed real estate consultants, community leaders, and commercial advisors fluent in over 45 languages.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-brand-stone p-5 sm:p-6 shadow-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
            Search Consultant
          </label>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, area..."
              className="w-full bg-brand-ivory/50 border border-brand-stone/70 px-3 py-2 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary"
            />
            <Search className="w-3.5 h-3.5 text-brand-charcoal/40 absolute right-3 top-2.5" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
            Department
          </label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full bg-brand-ivory/50 border border-brand-stone/70 px-3 py-2 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
          >
            {departments.map((d) => (
              <option key={d} value={d}>{d === 'All' ? 'All Departments' : d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[10px] uppercase font-bold tracking-wider text-brand-charcoal/60 mb-1.5">
            Language Spoken
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-brand-ivory/50 border border-brand-stone/70 px-3 py-2 text-xs text-brand-charcoal focus:outline-none focus:border-brand-primary font-medium"
          >
            {languages.map((l) => (
              <option key={l} value={l}>{l === 'All' ? 'All Languages' : l}</option>
            ))}
          </select>
        </div>

        <div>
          <button
            onClick={() => {
              setSearch('');
              setDepartment('All');
              setLanguage('All');
            }}
            className="w-full py-2 border border-brand-stone/70 text-xs font-semibold uppercase tracking-wider text-brand-charcoal hover:bg-brand-ivory flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3 h-3" /> Reset Filters
          </button>
        </div>
      </div>

      {/* Consultants Grid */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/70 mb-6">
          Showing {filteredConsultants.length} Property Professionals
        </p>

        {filteredConsultants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConsultants.map((c) => (
              <ConsultantCard key={c.id} consultant={c} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-brand-stone p-12 text-center text-xs text-brand-charcoal/60">
            No consultants found matching your filter criteria. Try resetting filters.
          </div>
        )}
      </div>
    </div>
  );
}

