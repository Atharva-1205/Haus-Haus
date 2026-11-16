'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Calculator, CheckCircle2, TrendingUp, Info } from 'lucide-react';

export default function BuyVsRentCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState<number>(2500000);
  const [monthlyRent, setMonthlyRent] = useState<number>(14000);
  const [depositPercent, setDepositPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(25);
  const [durationYears, setDurationYears] = useState<number>(5);
  const [annualMaintenance, setAnnualMaintenance] = useState<number>(12000);

  // Financial calculations
  const totalRentOverDuration = monthlyRent * 12 * durationYears;

  // Buying costs:
  // Upfront purchase fees: 4% DLD + 2% agency + ~AED 10,000 trustee/valuation
  const upfrontFees = purchasePrice * 0.065;
  const loanAmount = purchasePrice * (1 - depositPercent / 100);

  // Monthly mortgage payment (P&I formula)
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;
  const monthlyMortgage = monthlyRate > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : loanAmount / totalMonths;

  const totalMortgagePaidOverDuration = monthlyMortgage * 12 * durationYears;
  const totalMaintenanceOverDuration = annualMaintenance * durationYears;

  // Approximate equity built over duration (simplified amortization estimate)
  // roughly 30% of mortgage payments over first 5 years go to principal reduction
  const approximatePrincipalRepaid = totalMortgagePaidOverDuration * 0.35;
  
  // Total net cost of buying (interest + upfront fees + maintenance - principal repaid)
  const netOwnershipCost = (totalMortgagePaidOverDuration - approximatePrincipalRepaid) + upfrontFees + totalMaintenanceOverDuration;

  const savingsBuying = totalRentOverDuration - netOwnershipCost;
  const buyIsBetter = savingsBuying > 0;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Buy vs Rent Calculator</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Financial Decision Modeling
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Buy vs Rent in Dubai Calculator
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Compare the true long-term financial implications of purchasing a home versus continuing to pay annual rent in Dubai, taking into account DLD fees, mortgage interest, and home equity accumulation.
        </p>
      </div>

      {/* Main Form & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form */}
        <div className="lg:col-span-7 bg-white border border-brand-stone p-8 sm:p-10 shadow-subtle space-y-6">
          <h2 className="font-serif text-2xl font-bold text-brand-primary pb-3 border-b border-brand-stone/40">
            Comparison Parameters
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Target Purchase Price (AED)
                </label>
                <input
                  type="number"
                  step="50000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Equivalent Monthly Rent (AED)
                </label>
                <input
                  type="number"
                  step="500"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Deposit ({depositPercent}%)
                </label>
                <select
                  value={depositPercent}
                  onChange={(e) => setDepositPercent(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-xs text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                >
                  <option value={20}>20% (Resident Min)</option>
                  <option value={25}>25%</option>
                  <option value={40}>40% (Non-Resident)</option>
                  <option value={50}>50%</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Mortgage Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Horizon (Years)
                </label>
                <select
                  value={durationYears}
                  onChange={(e) => setDurationYears(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-xs text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                >
                  <option value={3}>3 Years</option>
                  <option value={5}>5 Years</option>
                  <option value={7}>7 Years</option>
                  <option value={10}>10 Years</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                Estimated Annual Service & Maintenance (AED)
              </label>
              <input
                type="number"
                step="1000"
                value={annualMaintenance}
                onChange={(e) => setAnnualMaintenance(Number(e.target.value))}
                className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-5 bg-brand-primary text-white p-8 sm:p-10 shadow-float border border-brand-secondary space-y-6">
          <div className="border-b border-brand-secondary pb-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">
              {durationYears}-Year Analysis
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-1">
              Comparative Outcome
            </h3>
          </div>

          <div className={`p-5 border ${buyIsBetter ? 'bg-emerald-900/60 border-emerald-400/40' : 'bg-amber-900/60 border-amber-400/40'} space-y-1`}>
            <p className="text-xs uppercase font-bold tracking-wider text-brand-sage">Verdict</p>
            <p className="font-serif text-xl sm:text-2xl font-bold text-white">
              {buyIsBetter ? `Buying Saves AED ${Math.abs(Math.round(savingsBuying)).toLocaleString()}` : `Renting is AED ${Math.abs(Math.round(savingsBuying)).toLocaleString()} more cost-effective`}
            </p>
            <p className="text-[11px] text-brand-stone/80">
              Over a {durationYears}-year period in Dubai, factoring in equity generation.
            </p>
          </div>

          <div className="space-y-3 pt-2 text-xs border-t border-brand-secondary">
            <div className="flex justify-between">
              <span className="text-brand-stone/80">Total Rent Paid ({durationYears} Yrs):</span>
              <span className="font-bold">AED {totalRentOverDuration.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-stone/80">Estimated Monthly Mortgage:</span>
              <span className="font-bold">AED {Math.round(monthlyMortgage).toLocaleString()}/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-stone/80">Upfront DLD & Trustee Fees:</span>
              <span className="font-bold">AED {Math.round(upfrontFees).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-brand-sage font-semibold">
              <span>Principal Equity Accumulated:</span>
              <span>+ AED {Math.round(approximatePrincipalRepaid).toLocaleString()}</span>
            </div>
          </div>

          <div className="p-4 bg-brand-secondary/40 border border-brand-sage/20 text-[11px] text-brand-stone/80 leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 text-brand-sage flex-shrink-0 mt-0.5" />
            <span>Assumes 0% capital appreciation for conservative comparison. Over past 5-year cycles, prime Dubai real estate has appreciated significantly.</span>
          </div>

          <Link
            href="/services/mortgages"
            className="w-full btn-ivory text-xs uppercase tracking-wider font-bold py-3 text-center block"
          >
            Explore Pre-Approved Mortgage Rates
          </Link>
        </div>
      </div>
    </div>
  );
}

