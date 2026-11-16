'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-primary text-white border-t border-brand-secondary/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-brand-secondary/50 items-center">
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-sage">Stay Ahead of the Market</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-ivory mt-2">
              Subscribe to the Dubai Property Digest
            </h3>
            <p className="text-xs sm:text-sm text-brand-stone/80 mt-2 max-w-xl leading-relaxed">
              Receive verified monthly market transaction reports, off-plan investment allocations, and macroeconomic insights directly to your inbox.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-brand-secondary/40 border border-brand-sage/40 p-4 flex items-center space-x-3 text-brand-ivory">
                <CheckCircle2 className="w-5 h-5 text-brand-sage flex-shrink-0" />
                <span className="text-xs">Thank you for subscribing. You will receive our next quarterly intelligence bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-brand-secondary/50 border border-brand-stone/30 px-4 py-3.5 text-xs text-white placeholder-brand-stone/50 focus:outline-none focus:border-brand-sage flex-grow"
                />
                <button
                  type="submit"
                  className="bg-brand-sage text-brand-primary px-6 py-3.5 text-xs uppercase tracking-wider font-bold hover:bg-white transition-colors flex items-center justify-center flex-shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-brand-stone/60 mt-2">
              By subscribing, you agree to our <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>. You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-14 border-b border-brand-secondary/50 text-xs">
          {/* Col 1: Properties */}
          <div>
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-brand-sage mb-4">Properties</h4>
            <ul className="space-y-2.5 text-brand-stone/80">
              <li><Link href="/buy" className="hover:text-white transition-colors">Properties for Sale</Link></li>
              <li><Link href="/buy?type=Apartment" className="hover:text-white transition-colors">Apartments for Sale</Link></li>
              <li><Link href="/buy?type=Villa" className="hover:text-white transition-colors">Villas for Sale</Link></li>
              <li><Link href="/buy?type=Penthouse" className="hover:text-white transition-colors">Luxury Penthouses</Link></li>
              <li><Link href="/rent" className="hover:text-white transition-colors">Properties for Rent</Link></li>
              <li><Link href="/rent?type=Apartment" className="hover:text-white transition-colors">Apartments for Rent</Link></li>
              <li><Link href="/rent?type=Villa" className="hover:text-white transition-colors">Villas for Rent</Link></li>
              <li><Link href="/services/holiday-rentals" className="hover:text-white transition-colors">Holiday & Short-Term</Link></li>
            </ul>
          </div>

          {/* Col 2: Developments & Commercial */}
          <div>
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-brand-sage mb-4">Off Plan & Commercial</h4>
            <ul className="space-y-2.5 text-brand-stone/80">
              <li><Link href="/off-plan" className="hover:text-white transition-colors">New Developments</Link></li>
              <li><Link href="/developers" className="hover:text-white transition-colors">Master Developers</Link></li>
              <li><Link href="/developers/emaar" className="hover:text-white transition-colors">Emaar Properties</Link></li>
              <li><Link href="/developers/nakheel" className="hover:text-white transition-colors">Nakheel</Link></li>
              <li><Link href="/commercial" className="hover:text-white transition-colors">Commercial Real Estate</Link></li>
              <li><Link href="/commercial?type=Office" className="hover:text-white transition-colors">Offices for Lease & Sale</Link></li>
              <li><Link href="/commercial?type=Retail" className="hover:text-white transition-colors">Retail & Showrooms</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-brand-sage mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-brand-stone/80">
              <li><Link href="/services/residential-sales" className="hover:text-white transition-colors">Residential Sales</Link></li>
              <li><Link href="/services/residential-leasing" className="hover:text-white transition-colors">Residential Leasing</Link></li>
              <li><Link href="/services/holiday-rentals" className="hover:text-white transition-colors">Holiday Rentals</Link></li>
              <li><Link href="/services/property-management" className="hover:text-white transition-colors">Property Management</Link></li>
              <li><Link href="/services/mortgages" className="hover:text-white transition-colors">Mortgage Advisory</Link></li>
              <li><Link href="/services/conveyancing" className="hover:text-white transition-colors">Conveyancing & Transfer</Link></li>
              <li><Link href="/services/home-maintenance" className="hover:text-white transition-colors">Home Maintenance</Link></li>
              <li><Link href="/services/currency-services" className="hover:text-white transition-colors">Currency Exchange</Link></li>
            </ul>
          </div>

          {/* Col 4: Communities & Resources */}
          <div>
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-brand-sage mb-4">Discover & Learn</h4>
            <ul className="space-y-2.5 text-brand-stone/80">
              <li><Link href="/communities" className="hover:text-white transition-colors">Dubai Area Guides</Link></li>
              <li><Link href="/communities/dubai-hills-estate" className="hover:text-white transition-colors">Dubai Hills Estate</Link></li>
              <li><Link href="/communities/palm-jumeirah" className="hover:text-white transition-colors">Palm Jumeirah</Link></li>
              <li><Link href="/communities/downtown-dubai" className="hover:text-white transition-colors">Downtown Dubai</Link></li>
              <li><Link href="/calculators/rental-yield" className="hover:text-white transition-colors">Rental Yield Calculator</Link></li>
              <li><Link href="/calculators/buy-vs-rent" className="hover:text-white transition-colors">Buy vs Rent Calculator</Link></li>
              <li><Link href="/resources/market-reports" className="hover:text-white transition-colors">Quarterly Market Reports</Link></li>
              <li><Link href="/resources/podcast" className="hover:text-white transition-colors">Dubai Property Podcast</Link></li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-brand-sage mb-4">About haus & haus</h4>
            <ul className="space-y-2.5 text-brand-stone/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Founding Story</Link></li>
              <li><Link href="/about/why-choose-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Meet the Team (360+)</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Client Reviews</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers at haus & haus</Link></li>
              <li><Link href="/valuation" className="hover:text-white transition-colors">Property Valuation</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Corporate Details & Legal */}
        <div className="pt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-xs text-brand-stone/70">
          <div className="space-y-2">
            <div className="flex items-baseline space-x-1">
              <span className="font-serif text-xl font-bold lowercase text-white">haus</span>
              <span className="font-serif text-lg font-light text-brand-sage italic px-0.5">&</span>
              <span className="font-serif text-xl font-bold lowercase text-white">haus</span>
            </div>
            <p className="text-[11px] text-brand-stone/60 max-w-md">
              Building 7, Gold & Diamond Park, Sheikh Zayed Road, Dubai, United Arab Emirates.
            </p>
            <p className="text-[11px] text-brand-stone/50">
              RERA ORN: {COMPANY_INFO.reraOrn} &bull; DLD Trade License No: {COMPANY_INFO.tradeLicense} &bull; DET Tourism License
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-secondary/60 hover:bg-white hover:text-brand-primary transition-colors text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-secondary/60 hover:bg-white hover:text-brand-primary transition-colors text-white" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-secondary/60 hover:bg-white hover:text-brand-primary transition-colors text-white" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-secondary/60 hover:bg-white hover:text-brand-primary transition-colors text-white" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Contact links */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-sage" /> {COMPANY_INFO.phone}
              </a>
              <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-400" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-8 pt-6 border-t border-brand-secondary/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-stone/50 gap-4">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Featured on BBC Three&apos;s Dubai Hustle.</p>
          <div className="flex items-center space-x-5">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

