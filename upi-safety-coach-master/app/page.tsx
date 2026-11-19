'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Search, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  QrCode, 
  PhoneCall, 
  KeyRound, 
  HelpCircle,
  CheckCircle2,
  Lock,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import MessageInspectorPreview from '@/components/MessageInspectorPreview';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function HomePage() {
  const { t } = useLanguage();

  // Five prominent scam examples as required
  const prominentScams = [
    {
      id: 'fake-refund-calls',
      title: 'Fake Refund Offers',
      explanation: 'Scammers claim an overcharge or failed e-commerce delivery requires an instant UPI refund.',
      warningTag: 'Demands entering UPI PIN to receive money',
      icon: RefreshCwIcon,
    },
    {
      id: 'qr-code-receive-money',
      title: 'Suspicious QR Codes',
      explanation: 'Fraudulent buyers on marketplaces ask you to scan a code to "approve" incoming payments.',
      warningTag: 'Scanning QR always sends money, never receives',
      icon: QrCode,
    },
    {
      id: 'fake-customer-care-numbers',
      title: 'Fake Customer Care',
      explanation: 'Fraudsters post their personal mobile numbers on search engines claiming to be UPI support.',
      warningTag: 'Ordinary 10-digit mobile number instead of toll-free',
      icon: PhoneCall,
    },
    {
      id: 'otp-kyc-scams',
      title: 'OTP & KYC Threats',
      explanation: 'Urgent threats claiming your account or SIM card will be deactivated unless you share an OTP.',
      warningTag: 'Banks never demand OTP or PIN for KYC updates',
      icon: KeyRound,
    },
    {
      id: 'unexpected-collect-requests',
      title: 'Unexpected Payment Requests',
      explanation: 'Random collect requests pushed to your UPI app hoping you will carelessly authorize them.',
      warningTag: 'Unprompted approval requests with high amounts',
      icon: ShieldAlert,
    },
  ];

  function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E5DF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DCEFE5] text-[#247A55] text-xs font-bold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-[#247A55]" />
                <span>{t.hero.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#142B3B] leading-[1.12]">
                {t.hero.headline}
              </h1>

              <p className="text-lg sm:text-xl text-[#65727D] leading-relaxed max-w-xl">
                {t.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/assistant"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-[#E85D4A] hover:bg-[#d54e3c] transition-all shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E85D4A]"
                >
                  <Search className="w-5 h-5" />
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/scam-library"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-[#142B3B] bg-white hover:bg-slate-50 border border-[#E5E5DF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B3B]"
                >
                  <BookOpen className="w-5 h-5 text-[#65727D]" />
                  <span>{t.hero.secondaryCta}</span>
                </Link>
              </div>

              {/* Small Trust Message */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#65727D]">
                <Lock className="w-3.5 h-3.5 text-[#247A55]" />
                <span>{t.hero.trustMessage}</span>
              </div>
            </div>

            {/* Right Column: Bespoke Product Visual */}
            <div className="lg:col-span-6">
              <MessageInspectorPreview />
            </div>
          </div>
        </div>
      </section>

      {/* RED DRAGON AI FUTURISTIC VISUAL */}
      <section className="py-10 bg-[#071326]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-cyan-400/40 shadow-2xl shadow-cyan-950/30">
            <img src="/red-dragon-ai-futuristic.png" alt="Red Dragon AI futuristic UPI fraud awareness assistant, safety posters and quiz dashboard" className="w-full h-auto object-cover" />
          </div>
          <p className="text-center text-xs text-cyan-100/70 mt-3">Red Dragon AI — Your smart UPI fraud protection assistant</p>
        </div>
      </section>

      {/* QUICK ACTIONS SECTION */}
      <section className="py-16 bg-white border-b border-[#E5E5DF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#E85D4A] uppercase tracking-wider">
              Immediate Guidance
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#142B3B] mt-2">
              {t.quickActions.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Action 1 */}
            <Link
              href="/assistant"
              className="group p-6 rounded-2xl bg-[#F8F7F3] border border-[#E5E5DF] hover:border-[#142B3B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5DF] flex items-center justify-center mb-5 text-[#142B3B] group-hover:bg-[#142B3B] group-hover:text-white transition-colors">
                  <Sparkles className="w-6 h-6 text-[#E85D4A] group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#142B3B] mb-2">
                  {t.quickActions.checkMsgTitle}
                </h3>
                <p className="text-sm text-[#65727D] leading-relaxed">
                  {t.quickActions.checkMsgDesc}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#142B3B] group-hover:translate-x-1 transition-transform">
                <span>Start Analysis</span>
                <ChevronRight className="w-4 h-4 text-[#E85D4A]" />
              </div>
            </Link>

            {/* Action 2 */}
            <Link
              href="/scam-library"
              className="group p-6 rounded-2xl bg-[#F8F7F3] border border-[#E5E5DF] hover:border-[#142B3B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5DF] flex items-center justify-center mb-5 text-[#142B3B] group-hover:bg-[#142B3B] group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6 text-[#247A55] group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#142B3B] mb-2">
                  {t.quickActions.learnScamTitle}
                </h3>
                <p className="text-sm text-[#65727D] leading-relaxed">
                  {t.quickActions.learnScamDesc}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#142B3B] group-hover:translate-x-1 transition-transform">
                <span>Explore 15 Scenarios</span>
                <ChevronRight className="w-4 h-4 text-[#247A55]" />
              </div>
            </Link>

            {/* Action 3 */}
            <Link
              href="/report-fraud"
              className="group p-6 rounded-2xl bg-[#FFF8F7] border border-[#E85D4A]/30 hover:border-[#E85D4A] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E85D4A]/30 flex items-center justify-center mb-5 text-[#E85D4A] group-hover:bg-[#E85D4A] group-hover:text-white transition-colors">
                  <PhoneCall className="w-6 h-6 text-[#E85D4A] group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#142B3B] mb-2">
                  {t.quickActions.reportFraudTitle}
                </h3>
                <p className="text-sm text-[#65727D] leading-relaxed">
                  {t.quickActions.reportFraudDesc}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#E85D4A] group-hover:translate-x-1 transition-transform">
                <span>Helpline 1930 & Portal</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Action 4 */}
            <Link
              href="/complaint-helper"
              className="group p-6 rounded-2xl bg-[#F8F7F3] border border-[#E5E5DF] hover:border-[#142B3B] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5DF] flex items-center justify-center mb-5 text-[#142B3B] group-hover:bg-[#142B3B] group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6 text-[#142B3B] group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#142B3B] mb-2">
                  {t.quickActions.prepareComplaintTitle}
                </h3>
                <p className="text-sm text-[#65727D] leading-relaxed">
                  {t.quickActions.prepareComplaintDesc}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#142B3B] group-hover:translate-x-1 transition-transform">
                <span>Organize Details</span>
                <ChevronRight className="w-4 h-4 text-[#142B3B]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SCAM AWARENESS SECTION */}
      <section className="py-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-[#E85D4A] uppercase tracking-wider">
              Pattern Recognition
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#142B3B] mt-1">
              {t.scamSection.heading}
            </h2>
          </div>
          <Link
            href="/scam-library"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#142B3B] hover:text-[#E85D4A] transition-colors"
          >
            <span>{t.scamSection.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prominentScams.map((scam) => {
            const Icon = scam.icon;
            return (
              <div
                key={scam.id}
                className="p-6 rounded-2xl bg-white border border-[#E5E5DF] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F8F7F3] border border-[#E5E5DF] flex items-center justify-center text-[#142B3B]">
                    <Icon className="w-5 h-5 text-[#E85D4A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#142B3B]">
                    {scam.title}
                  </h3>
                  <p className="text-sm text-[#65727D] leading-relaxed">
                    {scam.explanation}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E5E5DF] space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFF8F7] text-[#B83232] text-xs font-medium border border-[#B83232]/20">
                    <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{scam.warningTag}</span>
                  </div>
                  <div>
                    <Link
                      href={`/scam-library/${scam.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142B3B] hover:text-[#E85D4A] transition-colors"
                    >
                      <span>{t.scamSection.learnMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-[#F8F7F3] border-y border-[#E5E5DF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#247A55] uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#142B3B] mt-2">
              {t.howItWorks.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-7 rounded-2xl border border-[#E5E5DF] relative">
              <span className="text-3xl font-extrabold text-[#E85D4A]/25 mb-4 block">
                01
              </span>
              <h3 className="text-xl font-bold text-[#142B3B] mb-2">
                {t.howItWorks.step1Title.replace('01 — ', '')}
              </h3>
              <p className="text-sm text-[#65727D] leading-relaxed">
                {t.howItWorks.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-7 rounded-2xl border border-[#E5E5DF] relative">
              <span className="text-3xl font-extrabold text-[#247A55]/25 mb-4 block">
                02
              </span>
              <h3 className="text-xl font-bold text-[#142B3B] mb-2">
                {t.howItWorks.step2Title.replace('02 — ', '')}
              </h3>
              <p className="text-sm text-[#65727D] leading-relaxed">
                {t.howItWorks.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-7 rounded-2xl border border-[#E5E5DF] relative">
              <span className="text-3xl font-extrabold text-[#142B3B]/25 mb-4 block">
                03
              </span>
              <h3 className="text-xl font-bold text-[#142B3B] mb-2">
                {t.howItWorks.step3Title.replace('03 — ', '')}
              </h3>
              <p className="text-sm text-[#65727D] leading-relaxed">
                {t.howItWorks.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <EmergencyBanner />

      {/* QUIZ SECTION */}
      <section className="py-16 bg-white border-b border-[#E5E5DF]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#DCEFE5]/60 rounded-3xl p-8 sm:p-12 border border-[#DCEFE5] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#247A55] text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Interactive Safety Challenge</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#142B3B]">
                {t.learning.heading}
              </h2>
              <p className="text-base text-[#65727D] leading-relaxed">
                {t.learning.subheading} Ten realistic payment scenarios to sharpen your radar against digital traps.
              </p>
            </div>

            <Link
              href="/quiz"
              className="px-8 py-4 rounded-xl text-base font-bold text-white bg-[#142B3B] hover:bg-[#1c3a50] transition-all shadow-sm flex-shrink-0 inline-flex items-center gap-2"
            >
              <span>{t.learning.cta}</span>
              <ArrowRight className="w-5 h-5 text-[#E85D4A]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
