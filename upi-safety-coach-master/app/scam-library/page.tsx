'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  X, 
  BookOpen, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SCAM_SCENARIOS } from '@/data/scams';
import { ScamCategory } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';

const CATEGORIES: { id: ScamCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Scams (15)' },
  { id: 'payment-requests', label: 'Payment Requests' },
  { id: 'calls-impersonation', label: 'Calls & Impersonation' },
  { id: 'sms-phishing', label: 'SMS & Phishing' },
  { id: 'refunds-rewards', label: 'Refunds & Rewards' },
  { id: 'remote-access', label: 'Remote Access' },
  { id: 'investment-scams', label: 'Investment & Ponzi' },
];

export default function ScamLibraryPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ScamCategory | 'all'>('all');

  const filteredScams = useMemo(() => {
    return SCAM_SCENARIOS.filter((scam) => {
      const matchesCategory =
        selectedCategory === 'all' || scam.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        scam.title.toLowerCase().includes(q) ||
        scam.shortExplanation.toLowerCase().includes(q) ||
        scam.warningSigns.some((w) => w.toLowerCase().includes(q)) ||
        (scam.tamilTitle && scam.tamilTitle.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#247A55] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Threat Knowledge Base</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#142B3B]">
          {language === 'ta' ? 'UPI மோசடி நூலகம்' : 'UPI Scam Education Library'}
        </h1>
        <p className="text-base text-[#65727D] leading-relaxed">
          Explore fifteen documented digital payment scam patterns observed in India. Learn the psychology of urgency, recognize red flags, and know the right defensive action before authorizing any transaction.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-5 rounded-2xl border border-[#E5E5DF] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#65727D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scam name, keyword (e.g. 'QR', 'AnyDesk', 'Police', 'KYC')..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E5DF] text-sm text-[#142B3B] placeholder-[#65727D] focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#65727D] hover:text-[#142B3B]"
                aria-label="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Reset Filters button if active */}
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              onClick={clearFilters}
              className="px-4 py-2.5 rounded-xl border border-[#E5E5DF] text-xs font-semibold text-[#B83232] hover:bg-red-50 transition-colors flex items-center justify-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <Filter className="w-4 h-4 text-[#65727D] flex-shrink-0 mr-1" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#142B3B] text-white shadow-xs'
                  : 'bg-[#F8F7F3] text-[#65727D] hover:text-[#142B3B] hover:bg-[#E5E5DF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-semibold text-[#65727D]">
        <span>
          Showing <strong>{filteredScams.length}</strong> of 15 Scenarios
        </span>
        {filteredScams.length === 0 && (
          <span className="text-[#B83232]">No matching scam scenarios found.</span>
        )}
      </div>

      {/* Grid of Scams */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScams.map((scam) => (
          <div
            key={scam.id}
            className="group rounded-2xl bg-white border border-[#E5E5DF] p-6 hover:border-[#142B3B] shadow-sm hover:shadow transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#F8F7F3] text-[#65727D] border border-[#E5E5DF]">
                  {scam.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-[#65727D]">
                  #{scam.id.split('-')[0]}
                </span>
              </div>

              <h2 className="text-lg font-bold text-[#142B3B] group-hover:text-[#E85D4A] transition-colors leading-snug">
                {language === 'ta' && scam.tamilTitle ? scam.tamilTitle : scam.title}
              </h2>

              <p className="text-xs text-[#65727D] leading-relaxed">
                {language === 'ta' && scam.tamilExplanation ? scam.tamilExplanation : scam.shortExplanation}
              </p>

              {/* Warning Sign Teaser */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-[#FFF8F7] border border-[#E85D4A]/20 text-xs text-[#B83232] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Primary Red Flag</span>
                  </div>
                  <p className="text-[11px] leading-tight text-[#142B3B]">
                    {scam.warningSigns[0]}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 mt-5 border-t border-[#E5E5DF] flex items-center justify-between">
              <Link
                href={`/scam-library/${scam.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142B3B] group-hover:text-[#E85D4A] transition-colors"
              >
                <span>Read Full Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href={`/assistant?q=${encodeURIComponent('Tell me about the ' + scam.title + ' scam and how to protect myself.')}`}
                className="p-1.5 rounded-lg text-[#65727D] hover:text-[#247A55] hover:bg-emerald-50 transition-colors"
                title="Ask AI about this scam"
              >
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
