import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  PhoneCall, 
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SCAM_SCENARIOS } from '@/data/scams';

export function generateStaticParams() {
  return SCAM_SCENARIOS.map((scam) => ({
    id: scam.id,
  }));
}

export default async function ScamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const scam = SCAM_SCENARIOS.find((s) => s.id === id);

  if (!scam) {
    notFound();
  }

  const relatedScams = SCAM_SCENARIOS.filter(
    (s) => s.category === scam.category && s.id !== scam.id
  ).slice(0, 3);

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back to Library Navigation */}
      <div>
        <Link
          href="/scam-library"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#65727D] hover:text-[#142B3B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Scam Library</span>
        </Link>
      </div>

      {/* Main Header */}
      <div className="space-y-4 border-b border-[#E5E5DF] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DCEFE5] text-[#247A55]">
            {scam.categoryLabel}
          </span>
          <span className="text-xs text-[#65727D]">
            Standard Pattern Ref #{scam.id}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#142B3B]">
          {scam.title}
        </h1>

        <p className="text-base sm:text-lg text-[#65727D] leading-relaxed max-w-3xl">
          {scam.shortExplanation}
        </p>

        {/* Ask AI CTA banner */}
        <div className="pt-2">
          <Link
            href={`/assistant?q=${encodeURIComponent('I want to check if I am being targeted by the ' + scam.title + ' scam: ' + scam.fictionalScenario)}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#142B3B] text-white hover:bg-[#1C3A50] text-xs font-bold transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#E85D4A]" />
            <span>Ask AI Assistant About This Specific Threat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Fictional Case Study */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#142B3B] uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#E85D4A]" />
            <span>What This Scam Looks Like</span>
          </h2>
          <span className="text-[11px] font-medium text-[#65727D] italic">
            Fictional Case Study (No real numbers)
          </span>
        </div>
        <p className="text-sm text-[#142B3B] leading-relaxed bg-[#F8F7F3] p-4 rounded-xl border border-[#E5E5DF] font-sans">
          {scam.fictionalScenario}
        </p>
      </section>

      {/* Four-part scam explanation requested for every scenario */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="bg-white p-6 rounded-2xl border border-[#E5E5DF] space-y-3">
          <h2 className="text-base font-bold text-[#142B3B]">1. What Happens?</h2>
          <p className="text-sm text-[#65727D] leading-relaxed">{scam.whatHappens}</p>
        </article>
        <article className="bg-white p-6 rounded-2xl border border-[#E5E5DF] space-y-3">
          <h2 className="text-base font-bold text-[#142B3B]">2. Why Does It Happen?</h2>
          <p className="text-sm text-[#65727D] leading-relaxed">{scam.whyItHappens}</p>
        </article>
        <article className="bg-white p-6 rounded-2xl border border-[#E5E5DF] space-y-3">
          <h2 className="text-base font-bold text-[#142B3B]">3. What Are the Causes?</h2>
          <p className="text-sm text-[#65727D] leading-relaxed">{scam.causes}</p>
        </article>
        <article className="bg-[#F0F8F3] p-6 rounded-2xl border border-[#B9DDC8] space-y-3">
          <h2 className="text-base font-bold text-[#247A55]">4. How Can We Prevent It?</h2>
          <p className="text-sm text-[#315D46] leading-relaxed">{scam.howToPrevent}</p>
        </article>
      </section>

      {/* Warning Signs (Red Flags) */}
      <section className="bg-[#FFF8F7] p-6 sm:p-8 rounded-2xl border border-[#E85D4A]/30 space-y-4">
        <div className="flex items-center gap-2 text-[#B83232]">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <h2 className="text-lg font-bold">
            Identified Warning Signs (Red Flags)
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          {scam.warningSigns.map((sign, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E85D4A]/15 text-xs text-[#142B3B] leading-relaxed"
            >
              <AlertTriangle className="w-4 h-4 text-[#E85D4A] flex-shrink-0 mt-0.5" />
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why it is suspicious */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] space-y-3">
        <h2 className="text-base font-bold text-[#142B3B]">
          Underlying Mechanics: Why This Is Fraudulent
        </h2>
        <p className="text-sm text-[#65727D] leading-relaxed">
          {scam.whySuspicious}
        </p>
      </section>

      {/* Action Contrast Grid: What NOT to do vs What to do instead */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* What NOT to do */}
        <div className="p-6 rounded-2xl bg-white border border-red-200 space-y-4">
          <div className="flex items-center gap-2 text-[#B83232]">
            <XCircle className="w-5 h-5 flex-shrink-0" />
            <h3 className="text-base font-bold">What NOT to Do</h3>
          </div>
          <ul className="space-y-2 text-xs text-[#65727D] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#B83232] font-bold">•</span>
              <span>Do not enter your 4-digit or 6-digit UPI PIN to &ldquo;receive&rdquo; funds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B83232] font-bold">•</span>
              <span>Do not scan QR codes sent via WhatsApp or marketplace chats.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B83232] font-bold">•</span>
              <span>Do not download remote control software like AnyDesk or QuickSupport.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#B83232] font-bold">•</span>
              <span>Do not stay on continuous high-pressure calls under emotional intimidation.</span>
            </li>
          </ul>
        </div>

        {/* What to do instead */}
        <div className="p-6 rounded-2xl bg-white border border-emerald-200 space-y-4">
          <div className="flex items-center gap-2 text-[#247A55]">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <h3 className="text-base font-bold">What to Do Instead</h3>
          </div>
          <ul className="space-y-2 text-xs text-[#65727D] leading-relaxed">
            {scam.immediateActions.map((action, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#247A55] font-bold">✓</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* If Money Has Already Been Lost (Emergency Protocol) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#142B3B] text-white space-y-4">
        <div className="flex items-center gap-2 text-[#E85D4A]">
          <PhoneCall className="w-5 h-5 flex-shrink-0" />
          <h2 className="text-lg font-bold">
            If You Have Already Lost Money
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Act immediately — every minute matters. Time is critical to freeze beneficiary accounts in the Indian banking system before the money is moved to mule accounts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#E85D4A] uppercase tracking-wider">Step 1: Bank Freeze</span>
            <p className="text-xs text-slate-300">
              Call your bank&apos;s verified customer care or use their mobile banking app immediately to block UPI access and freeze your debit card.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#E85D4A] uppercase tracking-wider">Step 2: Dial 1930</span>
            <p className="text-xs text-slate-300">
              Dial India&apos;s National Cybercrime Helpline <strong>1930</strong> or submit an immediate incident report at cybercrime.gov.in.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href="tel:1930"
            className="px-5 py-2.5 rounded-xl bg-[#E85D4A] hover:bg-[#d54e3c] text-white text-xs font-bold transition-colors inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call 1930 Now</span>
          </a>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors inline-flex items-center gap-2 border border-white/20"
          >
            <span>Visit Official Cybercrime Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] space-y-4">
        <h2 className="text-base font-bold text-[#142B3B] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#247A55]" />
          <span>Long-term Prevention Guidelines</span>
        </h2>
        <ul className="space-y-2.5 text-xs text-[#65727D]">
          {scam.preventionTips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#247A55] font-bold mt-0.5">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Verified Source References */}
      <section className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#E5E5DF] space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727D]">
          Verified Regulatory References
        </h3>
        <ul className="space-y-2 text-xs">
          {scam.sourceReferences.map((ref, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[#142B3B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142B3B]" />
              {ref.url ? (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 font-medium"
                >
                  <span>{ref.title}</span>
                  <ExternalLink className="w-3 h-3 text-[#65727D]" />
                </a>
              ) : (
                <span className="font-medium">{ref.title}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Related Scams */}
      {relatedScams.length > 0 && (
        <section className="pt-6 border-t border-[#E5E5DF] space-y-4">
          <h3 className="text-lg font-bold text-[#142B3B]">
            Related Scam Patterns in {scam.categoryLabel}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedScams.map((rel) => (
              <Link
                key={rel.id}
                href={`/scam-library/${rel.id}`}
                className="p-4 rounded-xl bg-white border border-[#E5E5DF] hover:border-[#142B3B] transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#142B3B] mb-1">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#65727D] line-clamp-2">
                    {rel.shortExplanation}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#E85D4A] mt-3 inline-flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
