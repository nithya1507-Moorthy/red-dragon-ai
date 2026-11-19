'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X, Globe, AlertTriangle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/assistant', label: t.nav.assistant },
    { href: '/scam-library', label: t.nav.scamLibrary },
    { href: '/quiz', label: t.nav.quiz },
    { href: '/fraud-suppliers', label: 'Fraud Watchlist' },
    { href: '/report-fraud', label: t.nav.reportFraud },
    { href: '/complaint-helper', label: t.nav.complaintHelper },
    { href: '/resources', label: t.nav.resources },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#E5E5DF]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D4A] rounded-lg p-1"
          aria-label="UPI Safety Coach Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#142B3B] text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#E85D4A]" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-[#142B3B] flex items-center gap-2">
              UPI Safety Coach
            </div>
            <p className="text-xs text-[#65727D] font-medium hidden sm:block">
              {t.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#142B3B] bg-[#E5E5DF]/70 font-semibold'
                    : 'text-[#65727D] hover:text-[#142B3B] hover:bg-[#E5E5DF]/40'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Language + CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E5DF] bg-white text-xs font-semibold text-[#142B3B] hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B3B]"
            title="Switch Language / மொழியை மாற்றவும்"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#65727D]" />
            <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          {/* Primary CTA */}
          <Link
            href="/assistant"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#E85D4A] hover:bg-[#d54e3c] rounded-xl transition-all shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E85D4A]"
          >
            <span>{t.nav.checkMessage}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
            className="px-2 py-1 text-xs font-semibold rounded border border-[#E5E5DF] bg-white text-[#142B3B]"
            aria-label="Toggle Language"
          >
            {language === 'en' ? 'தமிழ்' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#142B3B] hover:bg-[#E5E5DF]/50 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B3B]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E5DF] bg-white px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
          <div className="p-3 mb-2 rounded-lg bg-[#DCEFE5] text-[#247A55] text-xs font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#247A55] flex-shrink-0" />
            <span>Emergency Cybercrime Helpline: <strong>1930</strong></span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? 'bg-[#142B3B] text-white'
                    : 'text-[#142B3B] hover:bg-[#F8F7F3]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#65727D] hover:bg-[#F8F7F3] rounded-lg"
            >
              {t.nav.privacy}
            </Link>
            <Link
              href="/poster"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#65727D] hover:bg-[#F8F7F3] rounded-lg"
            >
              {t.nav.poster}
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/assistant"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#E85D4A] rounded-xl shadow-sm text-center"
            >
              <span>{t.nav.checkMessage}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
