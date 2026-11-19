'use client';

import React from 'react';
import { PhoneCall, ExternalLink, AlertOctagon, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function EmergencyBanner() {
  const { t } = useLanguage();

  return (
    <section className="my-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#142B3B] to-[#1C3A50] text-white p-6 sm:p-8 lg:p-10 border border-[#142B3B] shadow-sm">
        {/* Subtle decorative grid/accent without tacky blobs */}
        <div className="absolute top-0 right-0 w-64 h-full bg-white/[0.02] pointer-events-none transform -skew-x-12" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E85D4A]/20 text-[#E85D4A] border border-[#E85D4A]/30 text-xs font-bold tracking-wide uppercase">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>Priority Incident Protocol</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {t.emergency.heading}
            </h2>

            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              {t.emergency.subheading}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>
                <strong>The Golden Hours:</strong> Reaching out to 1930 within the initial 2 to 4 hours drastically enhances law enforcement&apos;s ability to freeze recipient accounts before funds are laundered.
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              href="tel:1930"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-white bg-[#E85D4A] hover:bg-[#d54e3c] transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E85D4A] text-center"
            >
              <PhoneCall className="w-5 h-5" />
              <span>{t.emergency.call1930}</span>
            </a>

            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{t.emergency.portalButton}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-6 pt-5 border-t border-white/10 text-xs text-slate-400">
          <p>
            {t.emergency.explanation} Filing a report does not guarantee monetary recovery, but it is the required official legal action to initiate financial tracing and freeze compromised recipient accounts.
          </p>
        </div>
      </div>
    </section>
  );
}
