'use client';

import React from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  ExternalLink, 
  ShieldAlert, 
  FileCheck, 
  AlertTriangle, 
  Clock, 
  Camera, 
  Hash, 
  Building2, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function ReportFraudPage() {
  const { language } = useLanguage();

  const evidenceChecklist = [
    {
      title: '1. Record 12-Digit UPI Reference Number (UTR)',
      description: 'Find the 12-digit transaction ID or UTR number from your UPI app transaction history.',
      icon: Hash,
    },
    {
      title: '2. Take Full Device Screenshots',
      description: 'Capture complete screenshots of incoming messages, payment requests, call history, or phishing links.',
      icon: Camera,
    },
    {
      title: '3. Note Exact Incident Timestamp & Amount',
      description: 'Write down the exact date, time (down to the minute), and the exact amount debited.',
      icon: Clock,
    },
    {
      title: '4. Note Suspect Phone Number & UPI ID',
      description: 'Copy the sender phone number, WhatsApp contact, or recipient UPI VPA (e.g. name@okhdfcbank).',
      icon: FileCheck,
    },
    {
      title: '5. Contact Bank Emergency Line',
      description: 'Dial the official emergency helpline number printed on the back of your debit card to freeze UPI access.',
      icon: Building2,
    },
    {
      title: '6. Dial National Cybercrime Helpline 1930',
      description: 'Report the financial fraud to 1930 to initiate the Citizen Financial Cyber Fraud Reporting and Management System.',
      icon: PhoneCall,
    },
  ];

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8F7] text-[#B83232] border border-[#B83232]/20 text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Official Reporting Guidance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#142B3B]">
          {language === 'ta' ? 'சைபர் மோசடி புகார் வழிகாட்டி' : 'How to Report UPI & Cyber Fraud'}
        </h1>
        <p className="text-base text-[#65727D] leading-relaxed max-w-2xl">
          If you have been targeted or lost funds in an unauthorized transaction, follow these official Indian cybercrime reporting protocols promptly.
        </p>
      </div>

      {/* Immediate Dual Action Block */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#142B3B] text-white shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E85D4A]">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Priority Emergency Step: Act Within The Golden Hours</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Two Immediate Actions to Take Right Now
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            When financial fraud occurs, the initial 2 to 4 hours are known as the &ldquo;Golden Hours&rdquo;. Prompt reporting allows the National Cyber Crime Reporting Portal to trigger an automatic lien and freeze suspected recipient accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Action 1: Dial 1930 */}
          <div className="p-5 rounded-xl bg-white/10 border border-white/15 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#E85D4A] uppercase tracking-wider block mb-1">
                Option A — Immediate Call
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                Dial Helpline: 1930
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                National Cybercrime Helpline operated by the Ministry of Home Affairs (MHA) and I4C. Toll-free in India.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="tel:1930"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E85D4A] hover:bg-[#d54e3c] text-white text-xs font-bold transition-all shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 1930 Now</span>
              </a>
            </div>
          </div>

          {/* Action 2: Online Portal */}
          <div className="p-5 rounded-xl bg-white/10 border border-white/15 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Option B — Official Online Portal
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                cybercrime.gov.in
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submit an official citizen cyber fraud complaint with transaction details, bank account numbers, and evidence.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/15 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20"
              >
                <span>Visit Official Cybercrime Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence Preserving Checklist */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] shadow-sm space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#142B3B] flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#247A55]" />
            <span>Essential Evidence Preparation Checklist</span>
          </h2>
          <p className="text-xs text-[#65727D]">
            Have these six details ready before dialing 1930 or filling the government portal form:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {evidenceChecklist.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8F7F3] border border-[#E5E5DF] flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5DF] text-[#142B3B] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#E85D4A]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#142B3B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#65727D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Complaint Helper */}
        <div className="pt-3 border-t border-[#E5E5DF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#65727D]">
            Need help structuring your incident notes before filing?
          </div>
          <Link
            href="/complaint-helper"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#142B3B] text-white text-xs font-bold hover:bg-[#1C3A50] transition-colors"
          >
            <FileText className="w-4 h-4 text-[#E85D4A]" />
            <span>Open Complaint Preparation Tool</span>
          </Link>
        </div>
      </div>

      {/* Crucial Integrity & Regulatory Disclaimers */}
      <div className="p-5 rounded-2xl bg-[#FFF8F7] border border-[#E85D4A]/25 text-xs text-[#65727D] space-y-2">
        <div className="flex items-center gap-2 text-[#B83232] font-bold">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>Strict Application Integrity Disclaimers</span>
        </div>
        <ul className="space-y-1 text-xs text-[#142B3B] leading-relaxed list-disc list-inside">
          <li>UPI Safety Coach is an independent educational tool. We do NOT have direct access to bank databases, police systems, or government complaint registries.</li>
          <li>We will never generate fake FIR or complaint acknowledgment reference numbers. Official complaint acknowledgment numbers are solely generated by cybercrime.gov.in or your local police station.</li>
          <li>Filing a report or calling 1930 does not guarantee the recovery of stolen funds; however, it is the legally mandated first step to track and block the financial flow.</li>
        </ul>
      </div>
    </div>
  );
}
