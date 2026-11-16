'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Download, FileText, CheckCircle2, TrendingUp } from 'lucide-react';
import { MARKET_REPORTS } from '@/data/mockData';

export default function MarketReportsPage() {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (reportId: string, title: string) => {
    setDownloadSuccess(reportId);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-brand-charcoal/60">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <Link href="/resources" className="hover:text-brand-primary">Resources</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-brand-stone" />
        <span className="text-brand-primary font-semibold">Market Reports</span>
      </nav>

      {/* Header */}
      <div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary">
          Verified Economic Research
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-charcoal mt-1">
          Quarterly Dubai Property Market Reports
        </h1>
        <p className="text-sm text-brand-charcoal/70 mt-3 max-w-3xl leading-relaxed">
          In-depth macroeconomic and hyper-local data audits compiled by the haus & haus Research & Advisory Division. Examining Dubai Land Department transaction volumes, rental index revisions, and yield benchmarks.
        </p>
      </div>

      {/* Latest Featured Report Banner */}
      {MARKET_REPORTS.length > 0 && (
        <div className="bg-brand-primary text-white p-8 sm:p-12 border border-brand-secondary grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="bg-brand-sage text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
              Latest Release &bull; {MARKET_REPORTS[0].quarter} {MARKET_REPORTS[0].year}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory">
              {MARKET_REPORTS[0].title}
            </h2>
            <p className="text-xs sm:text-sm text-brand-stone/80 leading-relaxed max-w-2xl">
              {MARKET_REPORTS[0].summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-brand-secondary">
              {MARKET_REPORTS[0].keyStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[10px] uppercase tracking-wider text-brand-stone/70">{stat.label}</p>
                  <p className="font-serif text-xl font-bold text-brand-sage mt-0.5">{stat.value}</p>
                  {stat.trend && <span className="text-[10px] text-emerald-400 font-medium">{stat.trend}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-brand-secondary/60 p-6 border border-brand-sage/30 text-center space-y-4">
            <FileText className="w-12 h-12 text-brand-sage mx-auto" />
            <p className="text-xs text-brand-stone font-medium">Verified PDF Document &bull; {MARKET_REPORTS[0].fileSize}</p>
            <button
              onClick={() => handleDownload(MARKET_REPORTS[0].id, MARKET_REPORTS[0].title)}
              className="btn-ivory w-full text-xs uppercase tracking-wider font-bold py-3 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess === MARKET_REPORTS[0].id ? 'Downloaded Report' : 'Download Complete Report'}</span>
            </button>
            {downloadSuccess === MARKET_REPORTS[0].id && (
              <p className="text-emerald-400 text-xs flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Market report downloaded successfully.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Historical Report Archive */}
      <div>
        <h3 className="font-serif text-2xl font-bold text-brand-charcoal mb-6">Historical Intelligence Archive</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MARKET_REPORTS.map((report) => (
            <div key={report.id} className="card-luxury p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary">
                  {report.quarter} {report.year} Edition
                </span>
                <h4 className="font-serif text-2xl font-bold text-brand-charcoal mt-1">{report.title}</h4>
                <p className="text-xs text-brand-charcoal/70 mt-2 leading-relaxed">{report.summary}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-stone/40 flex items-center justify-between">
                <span className="text-xs text-brand-charcoal/60">{report.fileSize}</span>
                <button
                  onClick={() => handleDownload(report.id, report.title)}
                  className="btn-primary text-xs py-2 px-3 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

