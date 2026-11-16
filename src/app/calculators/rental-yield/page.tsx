'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Calculator, RefreshCw, CheckCircle2, TrendingUp, Info } from 'lucide-react';

export default function RentalYieldCalculatorPage() {
  const [purchasePrice, setPurchasePrice] = useState<number>(2000000);
  const [annualRent, setAnnualRent] = useState<number>(160000);
  const [serviceCharges, setServiceCharges] = useState<number>(18000);
  const [maintenanceCosts, setMaintenanceCosts] = useState<number>(4000);
  const [managementFeeRate, setManagementFeeRate] = useState<number>(5); // 5%
  const [otherExpenses, setOtherExpenses] = useState<number>(2000);

  // Financial calculations
  const managementCosts = Math.round((annualRent * managementFeeRate) / 100);
  const totalOperatingCosts = serviceCharges + maintenanceCosts + managementCosts + otherExpenses;
  const netRentalIncome = annualRent - totalOperatingCosts;

  const grossYield = purchasePrice > 0 ? ((annualRent / purchasePrice) * 100).toFixed(2) : '0.00';
  const netYield = purchasePrice > 0 ? ((netRentalIncome / purchasePrice) * 100).toFixed(2) : '0.00';

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Rental Yield Calculator</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Financial Planning Tool
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Dubai Rental Yield Calculator
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          Accurately calculate gross and net rental yields on your Dubai residential or commercial investment, incorporating developer service charges, maintenance reserves, and professional management fees.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Inputs Column */}
        <div className="lg:col-span-7 bg-white border border-brand-stone p-8 sm:p-10 shadow-subtle space-y-6">
          <h2 className="font-serif text-2xl font-bold text-brand-primary pb-3 border-b border-brand-stone/40">
            Investment Parameters
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                Property Purchase Price (AED)
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
                Expected Annual Rental Income (AED)
              </label>
              <input
                type="number"
                step="5000"
                value={annualRent}
                onChange={(e) => setAnnualRent(Number(e.target.value))}
                className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Annual Service Charges (AED)
                </label>
                <input
                  type="number"
                  step="1000"
                  value={serviceCharges}
                  onChange={(e) => setServiceCharges(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Annual Maintenance Reserve (AED)
                </label>
                <input
                  type="number"
                  step="500"
                  value={maintenanceCosts}
                  onChange={(e) => setMaintenanceCosts(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Management Fee ({managementFeeRate}%)
                </label>
                <select
                  value={managementFeeRate}
                  onChange={(e) => setManagementFeeRate(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-xs text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                >
                  <option value={0}>0% (Self Managed)</option>
                  <option value={5}>5% (Standard Full Management)</option>
                  <option value={8}>8% (Premium Management)</option>
                  <option value={15}>15% (Short-Term / Holiday Home)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1">
                  Other Annual Expenses (AED)
                </label>
                <input
                  type="number"
                  step="500"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(Number(e.target.value))}
                  className="w-full bg-brand-ivory/50 border border-brand-stone/70 p-3 text-sm text-brand-charcoal font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="lg:col-span-5 bg-brand-primary text-white p-8 sm:p-10 shadow-float border border-brand-secondary space-y-6">
          <div className="border-b border-brand-secondary pb-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage">
              Live Investment Output
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-1">
              Calculated Returns
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-secondary/70 p-4 border border-brand-sage/20">
              <p className="text-[10px] uppercase font-bold tracking-wider text-brand-stone/80">Gross Rental Yield</p>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-brand-sage mt-1">
                {grossYield}%
              </p>
              <p className="text-[10px] text-brand-stone/60 mt-1">Before Expenses</p>
            </div>

            <div className="bg-brand-secondary/70 p-4 border border-brand-sage/20">
              <p className="text-[10px] uppercase font-bold tracking-wider text-brand-stone/80">Net Rental Yield</p>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                {netYield}%
              </p>
              <p className="text-[10px] text-brand-stone/60 mt-1">True Take-Home Yield</p>
            </div>
          </div>

          <div className="space-y-3 pt-2 text-xs border-t border-brand-secondary">
            <div className="flex justify-between">
              <span className="text-brand-stone/80">Gross Annual Rent:</span>
              <span className="font-bold">AED {annualRent.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-stone/80">Total Operating Expenses:</span>
              <span className="text-red-300">- AED {totalOperatingCosts.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-brand-secondary/60 text-sm font-bold text-brand-sage">
              <span>Estimated Net Annual Cashflow:</span>
              <span>AED {netRentalIncome.toLocaleString()}</span>
            </div>
          </div>

          <div className="p-4 bg-brand-secondary/40 border border-brand-sage/20 text-[11px] text-brand-stone/80 leading-relaxed flex items-start gap-2">
            <Info className="w-4 h-4 text-brand-sage flex-shrink-0 mt-0.5" />
            <span>Estimates assume 100% occupancy without void periods. Dubai historical average gross yields range between 6.5% and 8.5% across prime freehold zones.</span>
          </div>

          <Link
            href="/services/property-management"
            className="w-full btn-ivory text-xs uppercase tracking-wider font-bold py-3 text-center block"
          >
            Discuss Yield Optimization with Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}

