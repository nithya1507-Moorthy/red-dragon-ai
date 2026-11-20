'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

interface SampleCase {
  tag: string;
  sender: string;
  time: string;
  messageText: string;
  riskBadge: 'Likely Scam' | 'Suspicious — Verify Independently';
  redFlags: string[];
  actionAdvice: string;
  assistantPrompt: string;
}

const SAMPLE_CASES: SampleCase[] = [
  {
    tag: 'Fictional Marketplace Scam',
    sender: '+91 98000 XXXXX (Buyer)',
    time: '2 mins ago',
    messageText: 'Hello sir, I will buy your dining table for Rs. 14,000 without bargaining. I have generated a special UPI QR Code. Scan this QR in your Google Pay or PhonePe to claim the Rs. 14,000 credit into your bank.',
    riskBadge: 'Likely Scam',
    redFlags: [
      'Scanning a QR code never receives money into your account.',
      'Entering your UPI PIN always debits money.',
      'Buyer insists on unconventional payment methods.'
    ],
    actionAdvice: 'Do not scan or enter PIN. Block the buyer immediately.',
    assistantPrompt: 'Someone asked me to scan a QR code to receive money for an item I am selling.'
  },
  {
    tag: 'Fictional Urgent KYC Threat',
    sender: 'TX-VERIFY (Spoofed SMS)',
    time: '15 mins ago',
    messageText: 'ALERT: Your Bank Account & UPI services have been suspended due to expired PAN KYC. Click http://online-kyc-update-portal.biz or call 91234xxxxx to prevent permanent account closure.',
    riskBadge: 'Likely Scam',
    redFlags: [
      'Banks never suspend accounts over SMS with unverified web links.',
      'Suspicious non-bank web domain (.biz) instead of official bank portal.',
      'Aggressive urgency designed to trigger panic.'
    ],
    actionAdvice: 'Never click links in SMS. Verify directly on your banking app.',
    assistantPrompt: 'I received a message saying my bank account will be blocked today for KYC.'
  }
];

export default function MessageInspectorPreview() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCase = SAMPLE_CASES[activeCaseIndex];

  const toggleCase = () => {
    setActiveCaseIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="relative rounded-2xl bg-white border border-[#E5E5DF] shadow-sm overflow-hidden flex flex-col">
      {/* Top Bar simulating a security inspector */}
      <div className="px-5 py-3.5 bg-[#F8F7F3] border-b border-[#E5E5DF] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E85D4A]" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#247A55]" />
          <span className="ml-2 text-xs font-semibold text-[#142B3B] uppercase tracking-wider">
            Live Risk Assessment Model
          </span>
        </div>
        <button
          onClick={toggleCase}
          className="inline-flex items-center gap-1.5 text-xs text-[#65727D] hover:text-[#142B3B] font-medium transition-colors"
          title="Switch sample scenario"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Switch Sample</span>
        </button>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Fictional Sample Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#E5E5DF]/60 text-[#142B3B]">
            {activeCase.tag}
          </span>
          <span className="text-[11px] font-medium text-[#65727D] italic">
            Fictional Demonstration Data
          </span>
        </div>

        {/* Incoming Message Bubble */}
        <div className="p-4 rounded-xl bg-[#F8F7F3] border border-[#E5E5DF]/80 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#65727D]">
            <span className="font-semibold text-[#142B3B]">{activeCase.sender}</span>
            <span>{activeCase.time}</span>
          </div>
          <p className="text-sm text-[#142B3B] font-mono leading-relaxed bg-white/70 p-3 rounded-lg border border-[#E5E5DF]">
            &ldquo;{activeCase.messageText}&rdquo;
          </p>
        </div>

        {/* Risk Assessment Result Panel */}
        <div className="p-4 rounded-xl bg-[#FFF8F7] border border-[#E85D4A]/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#E85D4A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#65727D]">
                Threat Evaluation
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#E85D4A] text-white">
              {activeCase.riskBadge}
            </span>
          </div>

          {/* Highlighted Red Flags */}
          <div className="space-y-1.5 pt-1">
            <span className="text-xs font-semibold text-[#142B3B]">
              Key Warning Signs:
            </span>
            <ul className="space-y-1">
              {activeCase.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#65727D] leading-tight">
                  <AlertCircle className="w-3.5 h-3.5 text-[#E85D4A] flex-shrink-0 mt-0.5" />
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actionable Next Step */}
          <div className="pt-2 border-t border-[#E85D4A]/15 flex items-start gap-2 text-xs text-[#142B3B] font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#247A55] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Immediate Recommendation:</strong> {activeCase.actionAdvice}
            </span>
          </div>
        </div>

        {/* Interactive Try in Assistant button */}
        <div className="pt-1">
          <Link
            href={`/assistant?q=${encodeURIComponent(activeCase.assistantPrompt)}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#142B3B] bg-[#DCEFE5] hover:bg-[#c9e7d6] transition-colors border border-[#c9e7d6]"
          >
            <Sparkles className="w-4 h-4 text-[#247A55]" />
            <span>Analyze Your Own Message in AI Assistant</span>
            <ArrowRight className="w-4 h-4 text-[#247A55]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
