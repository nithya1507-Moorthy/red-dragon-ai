'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff, Server, AlertTriangle, Trash2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function PrivacyPage() {
  const { language } = useLanguage();

  const handleClearSession = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      alert('Local browser preferences and session data have been cleared.');
      window.location.reload();
    } catch {
      alert('Unable to clear local storage in this environment.');
    }
  };

  return (
    <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#247A55] text-xs font-bold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          <span>Privacy & Data Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#142B3B]">
          {language === 'ta' ? 'தனியுரிமைக் கொள்கை' : 'Privacy Policy & Architecture Safeguards'}
        </h1>
        <p className="text-base text-[#65727D] leading-relaxed">
          At UPI Safety Coach, data minimization is our core design principle. Here is an exact, transparent account of what data is handled, where it travels, and how your privacy is defended.
        </p>
      </div>

      {/* Core Privacy Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-white border border-[#E5E5DF] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#DCEFE5] text-[#247A55] flex items-center justify-center mb-2">
            <EyeOff className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-[#142B3B]">
            Zero Account Registration
          </h2>
          <p className="text-xs text-[#65727D] leading-relaxed">
            We require no sign-ups, no email addresses, no phone numbers, and no passwords. Anyone in India can use this platform anonymously without creating a profile.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#E5E5DF] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#DCEFE5] text-[#247A55] flex items-center justify-center mb-2">
            <Server className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-[#142B3B]">
            Zero Database Storage
          </h2>
          <p className="text-xs text-[#65727D] leading-relaxed">
            There is no persistent database. Your chat conversations exist solely in temporary browser session memory and are eliminated when you refresh or close the tab.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#E5E5DF] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#FFF8F7] text-[#E85D4A] flex items-center justify-center mb-2">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-[#142B3B]">
            Client-Side Complaint Builder
          </h2>
          <p className="text-xs text-[#65727D] leading-relaxed">
            The Complaint Preparation tool processes all incident notes locally in your browser JavaScript runtime. We never transmit your complaint drafts to our servers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#E5E5DF] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-xl bg-[#DCEFE5] text-[#247A55] flex items-center justify-center mb-2">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-sm font-bold text-[#142B3B]">
            Pre-Flight Secret Redaction
          </h2>
          <p className="text-xs text-[#65727D] leading-relaxed">
            Incoming chat inputs are scanned both client-side and server-side to detect potential 4-to-6 digit PINs, OTPs, or CVVs, blocking them before they can reach third-party AI APIs.
          </p>
        </div>
      </div>

      {/* Detailed Technical Sections */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] shadow-sm space-y-6 text-sm text-[#142B3B] leading-relaxed">
        <section className="space-y-2">
          <h3 className="text-base font-bold text-[#142B3B]">
            1. External AI Provider Interactions
          </h3>
          <p className="text-xs text-[#65727D] leading-relaxed">
            When you ask questions in the AI Safety Assistant and the server is configured with an active AI provider (such as Google Gemini), your conversational prompt (with sensitive passcodes scrubbed) is transmitted over secure HTTPS to generate safety advice. If the API key is unconfigured, the application runs in local Demonstration Mode where requests are processed by our offline knowledge engine without any external API calls.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-[#142B3B]">
            2. Limitations of Automated Secret Detection
          </h3>
          <p className="text-xs text-[#65727D] leading-relaxed">
            While our regex filters actively block common UPI PIN patterns, OTPs, and card sequences, automated pattern detection cannot guarantee 100% prevention of all secret disclosures (such as obfuscated numbers or words). Therefore, <strong>users must remain vigilant</strong> and never type or paste their actual credentials into any conversational interface.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-[#142B3B]">
            3. Server Logging & Rate Limiting
          </h3>
          <p className="text-xs text-[#65727D] leading-relaxed">
            To protect our server endpoints against abuse and denial of service, temporary IP addresses and request timestamps are stored in volatile server memory for up to 60 seconds (rate limiting sliding window). We do <strong>not</strong> log full message bodies, payment transaction details, or personal names.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-base font-bold text-[#142B3B]">
            4. Third-Party Analytics and Cookies
          </h3>
          <p className="text-xs text-[#65727D] leading-relaxed">
            UPI Safety Coach does not use invasive advertising trackers, Facebook Pixels, or third-party marketing cookies. Only minimal functional preferences (such as your chosen language toggle) are saved in your browser&apos;s localStorage.
          </p>
        </section>

        {/* Clear Data Button */}
        <div className="pt-4 border-t border-[#E5E5DF] flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs text-[#65727D]">
            Want to erase all locally stored preferences from this browser?
          </div>
          <button
            onClick={handleClearSession}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#B83232] text-[#B83232] hover:bg-red-50 text-xs font-semibold transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Local Browser Storage</span>
          </button>
        </div>
      </div>
    </div>
  );
}
