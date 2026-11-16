import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function PrivacyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Privacy Policy</span>
      </nav>

      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">
        Privacy Policy
      </h1>

      <div className="bg-white border border-brand-stone p-8 sm:p-10 shadow-subtle space-y-6 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
        <p><strong>Last Updated:</strong> January 2024</p>
        <p>
          At <strong>{COMPANY_INFO.legalName}</strong>, we respect your privacy and are committed to protecting the personal data of our website visitors, clients, and prospective buyers and tenants.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">1. Information We Collect</h2>
        <p>
          When you submit an enquiry, request a property valuation, subscribe to our market reports, or contact a consultant, we collect your name, email address, phone/WhatsApp number, preferred properties, and budget parameters.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To arrange property viewings and provide personalized consultation.</li>
          <li>To formulate required RERA contracts (Form A, Form B, Form F).</li>
          <li>To dispatch market intelligence newsletters when explicitly subscribed.</li>
          <li>To comply with UAE anti-money laundering (AML) and know-your-customer (KYC) statutory obligations.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">3. Data Security & Storage</h2>
        <p>
          We employ enterprise SSL encryption, strict role-based access protocols, and ISO-compliant cloud infrastructure to protect client records against unauthorized access.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">4. Contact Our Data Protection Officer</h2>
        <p>
          If you have questions regarding your data or wish to exercise your rights under UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection, please contact <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-primary underline">{COMPANY_INFO.email}</a>.
        </p>
      </div>
    </div>
  );
}

