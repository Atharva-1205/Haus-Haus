import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Cookie Policy</span>
      </nav>

      <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal">
        Cookie Policy
      </h1>

      <div className="bg-white border border-brand-stone p-8 sm:p-10 shadow-subtle space-y-6 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
        <p>
          This Cookie Policy explains how haus & haus uses cookies and similar tracking technologies when you visit our website.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device to ensure our property search filters, saved listings, and user preferences function seamlessly across sessions.
        </p>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">Types of Cookies We Use</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> Required for site navigation, security, and search filters.</li>
          <li><strong>Performance & Analytics Cookies:</strong> Help us measure site traffic and optimize user experience.</li>
          <li><strong>Functional Cookies:</strong> Remember your currency preference and saved property selections.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-brand-primary pt-2">Managing Your Cookie Preferences</h2>
        <p>
          You can adjust your browser settings at any time to block or delete cookies. Please note that certain features, such as saved properties and persistent filter preferences, may not function as intended without cookies enabled.
        </p>
      </div>
    </div>
  );
}

