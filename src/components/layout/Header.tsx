'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageSquare, 
  ArrowUpRight,
  Calculator,
  Compass,
  Building,
  KeyRound,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Wrench,
  Coins
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';
import { SearchModal } from './SearchModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-ivory/95 backdrop-blur-md shadow-sm border-b border-brand-stone/60 py-3.5'
            : 'bg-brand-ivory border-b border-brand-stone/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-baseline space-x-1 group">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-primary lowercase group-hover:text-brand-secondary transition-colors">
                haus
              </span>
              <span className="font-serif text-xl sm:text-2xl font-light text-brand-sage italic px-0.5">
                &
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-primary lowercase group-hover:text-brand-secondary transition-colors">
                haus
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-brand-charcoal/60 font-semibold ml-2 hidden sm:inline-block border-l border-brand-stone pl-2">
                Dubai
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {/* Buy */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('buy')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/buy"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/buy') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>Buy</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'buy' && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-brand-stone shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-brand-stone/40 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Residential Sales</span>
                    </div>
                    <Link href="/buy" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">All Properties for Sale</Link>
                    <Link href="/buy?type=Apartment" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Apartments for Sale</Link>
                    <Link href="/buy?type=Villa" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Villas for Sale</Link>
                    <Link href="/buy?type=Townhouse" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Townhouses for Sale</Link>
                    <Link href="/buy?type=Penthouse" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Luxury Penthouses</Link>
                    <div className="border-t border-brand-stone/40 my-1 pt-1">
                      <Link href="/valuation" className="block px-4 py-2 text-xs text-brand-secondary font-medium hover:bg-brand-ivory">Property Valuation</Link>
                      <Link href="/resources/guides/dubai-buyers-guide" className="block px-4 py-2 text-xs text-brand-secondary font-medium hover:bg-brand-ivory">Dubai Buyers Guide</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Rent */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('rent')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/rent"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/rent') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>Rent</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'rent' && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-brand-stone shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-brand-stone/40 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Residential Leasing</span>
                    </div>
                    <Link href="/rent" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">All Properties for Rent</Link>
                    <Link href="/rent?type=Apartment" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Apartments for Rent</Link>
                    <Link href="/rent?type=Villa" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Villas for Rent</Link>
                    <Link href="/services/holiday-rentals" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Short-Term & Holiday Rentals</Link>
                    <div className="border-t border-brand-stone/40 my-1 pt-1">
                      <Link href="/resources/guides/dubai-tenants-guide" className="block px-4 py-2 text-xs text-brand-secondary font-medium hover:bg-brand-ivory">Tenants Guide</Link>
                      <Link href="/services/property-management" className="block px-4 py-2 text-xs text-brand-secondary font-medium hover:bg-brand-ivory">Landlord Property Management</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Off Plan */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('offplan')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/off-plan"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/off-plan') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>Off Plan</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'offplan' && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-brand-stone shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-brand-stone/40 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">New Developments</span>
                    </div>
                    <Link href="/off-plan" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Featured Off-Plan Projects</Link>
                    <Link href="/developers" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Master Developers (Emaar, Nakheel, Sobha...)</Link>
                    <Link href="/resources/guides/dubai-investment-playbook" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Off-Plan Investment Playbook</Link>
                    <Link href="/calculators/rental-yield" className="block px-4 py-2 text-xs text-brand-secondary font-medium hover:bg-brand-ivory">Rental Yield Calculator</Link>
                  </div>
                )}
              </div>

              {/* Commercial */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('commercial')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/commercial"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/commercial') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>Commercial</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'commercial' && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-brand-stone shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-brand-stone/40 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Commercial Division</span>
                    </div>
                    <Link href="/commercial" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">All Commercial Properties</Link>
                    <Link href="/commercial?status=For+Sale" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Commercial for Sale</Link>
                    <Link href="/commercial?status=For+Rent" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Commercial for Rent</Link>
                    <Link href="/commercial?type=Office" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Grade A Offices</Link>
                    <Link href="/commercial?type=Retail" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Retail & Showrooms</Link>
                  </div>
                )}
              </div>

              {/* Services (Mega Dropdown) */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/services') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full -left-20 w-[540px] bg-white border border-brand-stone shadow-xl p-5 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-brand-stone/40 mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Our 13 Integrated Property Divisions</span>
                      <Link href="/services" className="text-xs text-brand-secondary hover:underline flex items-center">
                        All Services <ArrowUpRight className="w-3 h-3 ml-0.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link href="/services/residential-sales" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <Building className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Residential Sales
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">High-end villa & apartment advisory</p>
                      </Link>
                      <Link href="/services/residential-leasing" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <KeyRound className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Residential Leasing
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">Tenant placement & landlord representation</p>
                      </Link>
                      <Link href="/services/holiday-rentals" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <Compass className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Holiday Rentals
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">Licensed DET short-term management</p>
                      </Link>
                      <Link href="/services/property-management" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Property Management
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">Complete hands-off asset stewardship</p>
                      </Link>
                      <Link href="/services/mortgages" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <TrendingUp className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Mortgages & Finance
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">Independent 20+ bank comparisons</p>
                      </Link>
                      <Link href="/services/conveyancing" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <FileCheck className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Conveyancing
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">Title deed transfers & Land Dept. liaison</p>
                      </Link>
                      <Link href="/services/home-maintenance" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <Wrench className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Home Maintenance
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">24/7 emergency response & annual AMCs</p>
                      </Link>
                      <Link href="/services/currency-services" className="p-2.5 rounded hover:bg-brand-ivory transition-colors group">
                        <p className="text-xs font-bold text-brand-charcoal group-hover:text-brand-primary flex items-center">
                          <Coins className="w-3.5 h-3.5 mr-1.5 text-brand-primary" /> Currency Exchange
                        </p>
                        <p className="text-[11px] text-brand-charcoal/60 mt-0.5">Bank-beating international wire transfers</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Discover Dubai */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('discover')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/communities"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/communities') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>Discover Dubai</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'discover' && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-brand-stone shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-brand-stone/40 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Dubai Community Guides</span>
                    </div>
                    <Link href="/communities" className="block px-4 py-2 text-xs font-medium text-brand-primary hover:bg-brand-ivory">Explore All Communities</Link>
                    <Link href="/communities/dubai-hills-estate" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Dubai Hills Estate</Link>
                    <Link href="/communities/palm-jumeirah" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Palm Jumeirah</Link>
                    <Link href="/communities/downtown-dubai" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Downtown Dubai</Link>
                    <Link href="/communities/dubai-marina" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Dubai Marina</Link>
                    <Link href="/communities/arabian-ranches" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Arabian Ranches</Link>
                    <Link href="/communities/business-bay" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Business Bay</Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/resources"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/resources') || pathname?.startsWith('/calculators') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-brand-stone shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-brand-stone/40 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Market Intelligence & Tools</span>
                    </div>
                    <Link href="/resources/market-reports" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Quarterly Market Reports</Link>
                    <Link href="/resources/guides" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Real Estate Guides</Link>
                    <Link href="/resources/news" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">News & Market Insights</Link>
                    <Link href="/resources/podcast" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Dubai Property Podcast</Link>
                    <div className="border-t border-brand-stone/40 my-1 pt-1">
                      <Link href="/calculators/rental-yield" className="flex items-center justify-between px-4 py-2 text-xs text-brand-secondary font-medium hover:bg-brand-ivory">
                        <span>Rental Yield Calculator</span>
                        <Calculator className="w-3.5 h-3.5 text-brand-secondary" />
                      </Link>
                      <Link href="/calculators/buy-vs-rent" className="flex items-center justify-between px-4 py-2 text-xs text-brand-secondary font-medium hover:bg-brand-ivory">
                        <span>Buy vs Rent Calculator</span>
                        <Calculator className="w-3.5 h-3.5 text-brand-secondary" />
                      </Link>
                      <Link href="/valuation" className="block px-4 py-2 text-xs text-brand-primary font-semibold hover:bg-brand-ivory">
                        Free Property Valuation
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/about"
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    pathname?.startsWith('/about') || pathname?.startsWith('/team') || pathname?.startsWith('/careers') || pathname?.startsWith('/reviews') ? 'text-brand-primary font-bold' : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Link>

                {activeDropdown === 'about' && (
                  <div className="absolute top-full right-0 w-64 bg-white border border-brand-stone shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="px-4 py-2 border-b border-brand-stone/40 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">Company & People</span>
                    </div>
                    <Link href="/about" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Our Story & Founders</Link>
                    <Link href="/about/why-choose-us" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Why Choose haus & haus</Link>
                    <Link href="/team" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Meet Our 360+ Experts</Link>
                    <Link href="/reviews" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Client Reviews & Ratings</Link>
                    <Link href="/careers" className="block px-4 py-2 text-xs text-brand-charcoal hover:bg-brand-ivory hover:text-brand-primary">Careers at haus & haus</Link>
                    <Link href="/contact" className="block px-4 py-2 text-xs font-medium text-brand-primary hover:bg-brand-ivory">Contact & Office Locations</Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-brand-charcoal hover:text-brand-primary transition-colors hover:bg-brand-stone/20 rounded-full"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* WhatsApp Link */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent("Hello haus & haus, I'd like to speak with a property consultant.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-charcoal hover:text-emerald-700 transition-colors hover:bg-brand-stone/20 rounded-full"
                title="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* Phone quick call */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-xs font-semibold text-brand-charcoal hover:text-brand-primary flex items-center space-x-1 tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                <span>+971 4 302 5800</span>
              </a>

              {/* Primary CTA */}
              <Link
                href="/contact"
                className="btn-primary text-xs py-2.5 px-4 uppercase tracking-wider font-semibold"
              >
                Speak to an Expert
              </Link>
            </div>

            {/* Mobile Actions and Hamburger */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-brand-charcoal hover:text-brand-primary"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-800"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-charcoal hover:text-brand-primary"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 bg-brand-ivory border-t border-brand-stone/40 overflow-y-auto lg:hidden">
          <div className="p-5 space-y-4 pb-24">
            {/* Quick action bar */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-brand-stone/60">
              <Link
                href="/valuation"
                className="text-center py-2.5 px-3 bg-white border border-brand-stone/60 text-xs font-semibold text-brand-primary"
              >
                Property Valuation
              </Link>
              <Link
                href="/contact"
                className="text-center py-2.5 px-3 bg-brand-primary text-white text-xs font-semibold"
              >
                Speak to Expert
              </Link>
            </div>

            {/* Accordion Categories */}
            <div className="space-y-1">
              {/* Buy */}
              <div>
                <button
                  onClick={() => toggleMobileSection('buy')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>Buy</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'buy' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'buy' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/buy" className="block py-1 text-brand-charcoal hover:text-brand-primary">All Properties for Sale</Link>
                    <Link href="/buy?type=Apartment" className="block py-1 text-brand-charcoal hover:text-brand-primary">Apartments for Sale</Link>
                    <Link href="/buy?type=Villa" className="block py-1 text-brand-charcoal hover:text-brand-primary">Villas for Sale</Link>
                    <Link href="/buy?type=Townhouse" className="block py-1 text-brand-charcoal hover:text-brand-primary">Townhouses for Sale</Link>
                    <Link href="/resources/guides/dubai-buyers-guide" className="block py-1 text-brand-primary font-medium">Dubai Buyers Guide</Link>
                  </div>
                )}
              </div>

              {/* Rent */}
              <div>
                <button
                  onClick={() => toggleMobileSection('rent')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>Rent</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'rent' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'rent' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/rent" className="block py-1 text-brand-charcoal hover:text-brand-primary">All Properties for Rent</Link>
                    <Link href="/rent?type=Apartment" className="block py-1 text-brand-charcoal hover:text-brand-primary">Apartments for Rent</Link>
                    <Link href="/rent?type=Villa" className="block py-1 text-brand-charcoal hover:text-brand-primary">Villas for Rent</Link>
                    <Link href="/services/holiday-rentals" className="block py-1 text-brand-charcoal hover:text-brand-primary">Holiday Rentals</Link>
                    <Link href="/resources/guides/dubai-tenants-guide" className="block py-1 text-brand-primary font-medium">Tenants Guide</Link>
                  </div>
                )}
              </div>

              {/* Off Plan */}
              <div>
                <button
                  onClick={() => toggleMobileSection('offplan')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>Off Plan</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'offplan' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'offplan' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/off-plan" className="block py-1 text-brand-charcoal hover:text-brand-primary">New Developments</Link>
                    <Link href="/developers" className="block py-1 text-brand-charcoal hover:text-brand-primary">Developers Directory</Link>
                    <Link href="/resources/guides/dubai-investment-playbook" className="block py-1 text-brand-primary font-medium">Investment Playbook</Link>
                  </div>
                )}
              </div>

              {/* Commercial */}
              <div>
                <button
                  onClick={() => toggleMobileSection('commercial')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>Commercial</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'commercial' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'commercial' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/commercial" className="block py-1 text-brand-charcoal hover:text-brand-primary">All Commercial Properties</Link>
                    <Link href="/commercial?type=Office" className="block py-1 text-brand-charcoal hover:text-brand-primary">Offices</Link>
                    <Link href="/commercial?type=Retail" className="block py-1 text-brand-charcoal hover:text-brand-primary">Retail Spaces</Link>
                  </div>
                )}
              </div>

              {/* Services */}
              <div>
                <button
                  onClick={() => toggleMobileSection('services')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'services' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/services" className="block py-1 font-bold text-brand-primary">All 13 Divisions</Link>
                    <Link href="/services/residential-sales" className="block py-1 text-brand-charcoal">Residential Sales</Link>
                    <Link href="/services/residential-leasing" className="block py-1 text-brand-charcoal">Residential Leasing</Link>
                    <Link href="/services/holiday-rentals" className="block py-1 text-brand-charcoal">Holiday Rentals</Link>
                    <Link href="/services/property-management" className="block py-1 text-brand-charcoal">Property Management</Link>
                    <Link href="/services/mortgages" className="block py-1 text-brand-charcoal">Mortgages & Finance</Link>
                    <Link href="/services/home-maintenance" className="block py-1 text-brand-charcoal">Home Maintenance</Link>
                    <Link href="/services/conveyancing" className="block py-1 text-brand-charcoal">Conveyancing</Link>
                    <Link href="/services/currency-services" className="block py-1 text-brand-charcoal">Currency Services</Link>
                  </div>
                )}
              </div>

              {/* Discover Dubai */}
              <div>
                <button
                  onClick={() => toggleMobileSection('discover')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>Discover Dubai</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'discover' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'discover' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/communities" className="block py-1 font-bold text-brand-primary">All Area Guides</Link>
                    <Link href="/communities/dubai-hills-estate" className="block py-1 text-brand-charcoal">Dubai Hills Estate</Link>
                    <Link href="/communities/palm-jumeirah" className="block py-1 text-brand-charcoal">Palm Jumeirah</Link>
                    <Link href="/communities/downtown-dubai" className="block py-1 text-brand-charcoal">Downtown Dubai</Link>
                    <Link href="/communities/dubai-marina" className="block py-1 text-brand-charcoal">Dubai Marina</Link>
                    <Link href="/communities/arabian-ranches" className="block py-1 text-brand-charcoal">Arabian Ranches</Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <div>
                <button
                  onClick={() => toggleMobileSection('resources')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>Resources & Tools</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'resources' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/resources/market-reports" className="block py-1 text-brand-charcoal">Market Reports</Link>
                    <Link href="/resources/guides" className="block py-1 text-brand-charcoal">Real Estate Guides</Link>
                    <Link href="/resources/news" className="block py-1 text-brand-charcoal">News & Insights</Link>
                    <Link href="/resources/podcast" className="block py-1 text-brand-charcoal">Property Podcast</Link>
                    <Link href="/calculators/rental-yield" className="block py-1 text-brand-primary font-medium">Rental Yield Calculator</Link>
                    <Link href="/calculators/buy-vs-rent" className="block py-1 text-brand-primary font-medium">Buy vs Rent Calculator</Link>
                  </div>
                )}
              </div>

              {/* About */}
              <div>
                <button
                  onClick={() => toggleMobileSection('about')}
                  className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wider text-brand-charcoal border-b border-brand-stone/30"
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpandedSection === 'about' && (
                  <div className="pl-4 py-2 space-y-2 bg-white/50 text-xs">
                    <Link href="/about" className="block py-1 text-brand-charcoal">Our Story & Founders</Link>
                    <Link href="/about/why-choose-us" className="block py-1 text-brand-charcoal">Why Choose haus & haus</Link>
                    <Link href="/team" className="block py-1 text-brand-charcoal">Our Team Directory</Link>
                    <Link href="/reviews" className="block py-1 text-brand-charcoal">Client Reviews</Link>
                    <Link href="/careers" className="block py-1 text-brand-charcoal">Careers</Link>
                    <Link href="/contact" className="block py-1 text-brand-primary font-semibold">Contact Us</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Direct Contact details */}
            <div className="pt-4 border-t border-brand-stone/60 space-y-2 text-xs text-brand-charcoal/70">
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-brand-primary" /> +971 4 302 5800
              </p>
              <p className="text-[11px]">Gold & Diamond Park, Sheikh Zayed Road, Dubai</p>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

