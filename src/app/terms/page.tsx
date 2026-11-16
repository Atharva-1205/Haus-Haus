import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function TermsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Terms and Conditions</span>
      </nav>

      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">
        Terms & Conditions
      </h1>

      <div className="bg-white border border-brand-stone p-8 sm:p-10 shadow-subtle space-y-6 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
        <p><strong>Effective Date:</strong> January 1, 2024</p>
        <p>
          Welcome to the website of <strong>{COMPANY_INFO.legalName}</strong> (&ldquo;haus & haus&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in the Emirate of Dubai, United Arab Emirates under RERA ORN {COMPANY_INFO.reraOrn} and Commercial License Number {COMPANY_INFO.tradeLicense}.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">1. Use of the Website</h2>
        <p>
          By accessing or using this website (www.hausandhaus.com), you agree to be bound by these terms. If you disagree with any part of these terms, you must not use this website.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">2. Property Listings & Accuracy</h2>
        <p>
          Property particulars, dimensions, prices, images, and descriptions displayed on this website are provided in good faith. While we make every reasonable effort to verify information with landlords and the Dubai Land Department, all figures are subject to change, prior contract, or withdrawal without notice.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">3. Intellectual Property Rights</h2>
        <p>
          All content, photographs, virtual tours, architectural floor plans, trademarks, and design tokens on this website are owned by or licensed to haus & haus. Unauthorized reproduction, distribution, or scraping is strictly prohibited.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">4. Regulatory Compliance & RERA Governance</h2>
        <p>
          haus & haus operates under the regulatory jurisdiction of the Real Estate Regulatory Agency (RERA) and the Dubai Land Department. All agency commissions, Form A/B/F contracts, and tenancy registrations follow UAE federal and Dubai local statutory guidelines.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">5. Governing Law and Jurisdiction</h2>
        <p>
          These terms are governed by the laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the Courts of Dubai.
        </p>
      </div>
    </div>
  );
}

