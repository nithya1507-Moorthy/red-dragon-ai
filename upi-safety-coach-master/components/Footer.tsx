'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ExternalLink, PhoneCall, ShieldAlert } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // On the AI assistant chat workspace, do not render the static page footer
  if (pathname === '/assistant') {
    return null;
  }

  return (
    <footer className="bg-[#142B3B] text-white pt-14 pb-10 border-t border-[#142B3B]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#E85D4A]" />
              </div>
              <span className="text-xl font-bold tracking-tight">UPI Safety Coach</span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              {t.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              An independent public digital safety education initiative designed to help users recognize payment fraud, deceptive QR requests, and cyber threats in India.
            </p>
          </div>

          {/* Core Tools */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              Core Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/assistant" className="text-slate-300 hover:text-white transition-colors">
                  {t.nav.assistant}
                </Link>
              </li>
              <li>
                <Link href="/scam-library" className="text-slate-300 hover:text-white transition-colors">
                  {t.nav.scamLibrary}
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-slate-300 hover:text-white transition-colors">
                  {t.nav.quiz}
                </Link>
              </li>
              <li>
                <Link href="/complaint-helper" className="text-slate-300 hover:text-white transition-colors">
                  {t.nav.complaintHelper}
                </Link>
              </li>
              <li>
                <Link href="/poster" className="text-slate-300 hover:text-white transition-colors">
                  {t.nav.poster}
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Portals & Assistance */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">
              Official Reporting
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>National Cybercrime Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="tel:1930"
                  className="inline-flex items-center gap-1.5 text-[#E85D4A] hover:text-[#f07b6b] font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>National Helpline: 1930</span>
                </a>
              </li>
              <li>
                <a
                  href="https://sancharsaathi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>DoT Chakshu (Fraud SMS Reporting)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>Reserve Bank of India (RBI)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

          {/* Safety & Disclaimers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">
              Privacy & Safeguards
            </h4>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#E85D4A] font-medium">
                <ShieldAlert className="w-4 h-4" />
                <span>Zero Secret Storage</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                We never store passwords, card CVVs, OTPs, or UPI PINs. All session chats stay in memory.
              </p>
            </div>
            <div className="pt-2">
              <Link href="/privacy" className="text-xs text-slate-300 underline underline-offset-4 hover:text-white">
                {t.nav.privacy}
              </Link>
            </div>
          </div>
        </div>

        {/* Legal & Educational Disclaimer */}
        <div className="pt-8 text-xs text-slate-400 space-y-3">
          <p className="leading-relaxed">
            {t.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 border-t border-white/5 pt-4">
            <p>{t.footer.rights}</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <span>•</span>
              <Link href="/report-fraud" className="hover:text-white transition-colors">Reporting</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
