# haus & haus Dubai — Complete Website Redesign

A premium, modern, conversion-focused digital real estate experience designed and engineered for **haus & haus Real Estate Dubai**.

---

## 🏛️ Brand Context & Identity

- **Company:** haus & haus Real Estate Broker
- **Headquarters:** Building 7, Gold & Diamond Park, Sheikh Zayed Road, Dubai, UAE
- **Founded:** 2013 by UK property specialists **James Perry**, **Luke Remington**, and **Simon Baker**
- **Scale:** 360+ property specialists across 13 integrated divisions
- **Regulatory Credentials:** RERA ORN: 16618 | DLD Commercial License: 695697
- **Television Recognition:** Featured prominently on BBC Three's *Dubai Hustle*

### Color Tokens

- **Primary Forest Green:** `#0B3828`
- **Secondary Deep Green:** `#174B38`
- **Muted Sage:** `#A9B99D`
- **Warm Ivory:** `#F5F3ED`
- **Warm Stone:** `#D8D2C5`
- **Charcoal Text:** `#252A27`
- **Pure White:** `#FFFFFF`

### Editorial Typography
- **Headings & Display:** Cormorant Garamond & DM Serif Display
- **Body, UI & Property Data:** Manrope & Inter

---

## 🌐 Site Architecture & Routes

### 1. Core Property Experiences
- `/`: Cinematic 14-section homepage featuring real property search, category gateways, developer previews, community showcases, consultant spotlights, verified statistics, and authentic customer testimonials.
- `/buy`: Residential properties for sale with live multi-filter engine (community, property type, min/max price, bedrooms, sorting, grid/list view).
- `/rent`: Residential leasing listings with furnishing filters, rental frequencies, and Ejari guidance.
- `/property/[id]`: Comprehensive property detail page featuring multi-photo gallery, sticky enquiry panel, verified features/amenities, downloadable floor plans, community location, and similar property recommendations.
- `/commercial`: Dedicated corporate real estate portal with Buy vs Rent journeys, Grade A offices, retail storefronts, and commercial advisor directory.

### 2. Off Plan Division & Developers
- `/off-plan`: New launches and master community developments with VIP buyer allocations and payment plan structures.
- `/off-plan/[id]`: Detailed development presentation with starting prices, construction milestones, handover timelines, and floor plan requests.
- `/developers`: Directory of accredited UAE master developers.
- `/developers/[slug]`: In-depth developer portfolios (Emaar, Nakheel, Sobha Realty, Ellington Properties).

### 3. Integrated Property Services (13 Divisions)
- `/services`: Full-spectrum services landing directory.
- Dedicated service pages with scope of work, strategic benefits, 4-step process, and FAQs:
  - `/services/residential-sales`: Luxury property sales & acquisitions
  - `/services/residential-leasing`: Tenant placement & landlord representation
  - `/services/holiday-rentals`: DET-licensed short-term vacation home management
  - `/services/property-management`: Hands-off asset stewardship & maintenance
  - `/services/home-maintenance`: 24/7 emergency response & annual AMCs
  - `/services/mortgages`: Independent comparisons across 20+ UAE banks
  - `/services/conveyancing`: DLD trustee transfers & escrow security
  - `/services/currency-services`: Bank-beating FX rates & international payments

### 4. Discover Dubai Area Guides
- `/communities`: Interactive visual directory of Dubai master communities.
- `/communities/[slug]`: Hyper-local area guides with rental yield benchmarks, average apartment & villa prices, top schools, transport accessibility, and localized brokers:
  - Dubai Hills Estate
  - Palm Jumeirah
  - Downtown Dubai
  - Dubai Marina
  - Arabian Ranches
  - Business Bay

### 5. Research, Market Intelligence & Tools
- `/resources`: Central intelligence hub.
- `/resources/guides`: Educational handbooks (Investment Playbook, Buyers Guide, Tenants Guide).
- `/resources/guides/[slug]`: Structured guide reading experience with table of contents.
- `/resources/news`: Real estate news, economic analysis, and leadership articles.
- `/resources/news/[slug]`: Individual article layout with author credentials and tags.
- `/resources/market-reports`: Downloadable quarterly transaction intelligence reports.
- `/resources/podcast`: The Dubai Property Podcast episodes with playable previews.
- `/valuation`: Dedicated property appraisal portal explaining our 3-step Land Department methodology.
- `/calculators/rental-yield`: Working mathematical rental yield calculator (Gross Yield, Operating Costs, Net Cashflow, Net Yield).
- `/calculators/buy-vs-rent`: Working comparative financial model analyzing ownership costs vs renting in Dubai.

### 6. Company & People
- `/about`: The haus & haus founding story, founders profiles, and historical timeline from 2013 to present.
- `/about/why-choose-us`: The 6 core pillars distinguishing haus & haus in Dubai.
- `/team`: Complete 360+ consultant directory with name search, department filters, and language filters.
- `/team/[slug]`: Individual consultant profile with verified biography, accolades, languages, and active listings.
- `/reviews`: Authentic client testimonials categorized by division and star ratings.
- `/careers`: Employer branding, culture, academy training, and active vacancies.
- `/careers/[slug]`: Career vacancy specifications with online application and CV upload.
- `/contact`: Headquarters contact information, +971 4 302 5800, WhatsApp chat, and interactive map.

### 7. Legal & System Pages
- `/terms`: Terms and conditions complying with UAE real estate regulations.
- `/privacy`: Privacy policy aligned with UAE Federal Personal Data Protection Law.
- `/cookies`: Transparent cookie policy.
- `/sitemap`: Complete visual hierarchy and navigation index.
- `/_not-found`: Custom luxury 404 page with smart recovery navigation.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom brand tokens
- **Icons:** Lucide React
- **Animations:** Subtle CSS transitions and micro-interactions
- **SEO & Schema:** RealEstateAgent JSON-LD structured schema, metadata, Open Graph & Twitter Cards

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

