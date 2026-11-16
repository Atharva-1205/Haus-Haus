import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY_INFO } from '@/data/mockData';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hausandhaus.com'),
  title: {
    default: 'haus & haus | Leading Dubai Real Estate Agency | Buy, Rent, Off Plan & Commercial',
    template: '%s | haus & haus Dubai'
  },
  description: "haus & haus is an award-winning Dubai real estate agency founded in 2013 with 360+ property experts. Specializing in luxury residential sales, leasing, off-plan developments, commercial property, and property management.",
  keywords: [
    'Dubai Real Estate',
    'Dubai Properties for Sale',
    'Dubai Apartments for Rent',
    'Dubai Hills Estate Villas',
    'Palm Jumeirah Luxury Real Estate',
    'Off Plan Dubai',
    'Commercial Real Estate Dubai',
    'haus and haus'
  ],
  authors: [{ name: 'haus & haus Real Estate' }],
  creator: 'haus & haus',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.hausandhaus.com',
    siteName: 'haus & haus Real Estate Dubai',
    title: 'haus & haus | Leading Dubai Real Estate Agency',
    description: 'Expert advice. Exceptional properties. Over 360 property specialists across 13 integrated real estate divisions in Dubai.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'haus & haus Dubai Real Estate'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'haus & haus | Leading Dubai Real Estate Agency',
    description: 'Expert advice. Exceptional properties. Over 360 property specialists across 13 integrated real estate divisions in Dubai.',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80']
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: 'https://www.hausandhaus.com',
    logo: 'https://www.hausandhaus.com/logo.png',
    description: COMPANY_INFO.tagline,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Building 7, Gold & Diamond Park, Sheikh Zayed Road',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '478418',
      addressCountry: 'AE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.1219,
      longitude: 55.2078
    },
    foundingDate: '2013',
    founders: COMPANY_INFO.founders.map(f => ({
      '@type': 'Person',
      name: f.name,
      jobTitle: f.role
    }))
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-ivory text-brand-charcoal">
        <Header />
        <main className="flex-grow pt-[68px] sm:pt-[76px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

