'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  PhoneCall, 
  BookOpen, 
  FileText, 
  AlertCircle,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function ResourcesPage() {
  const { language } = useLanguage();

  const officialSources = [
    {
      title: 'National Cyber Crime Reporting Portal (NCRP)',
      organization: 'Ministry of Home Affairs (MHA), Government of India',
      url: 'https://cybercrime.gov.in',
      description: 'The official national portal for citizens to register complaints regarding all forms of cybercrimes, particularly financial frauds and digital extortion.',
      tag: 'Verified Government Portal',
    },
    {
      title: 'Reserve Bank of India (RBI) — BE(A)WARE',
      organization: 'Reserve Bank of India',
      url: 'https://www.rbi.org.in',
      description: 'Comprehensive booklets and official circulars detailing modus operandi used by financial scammers and precautions required while using electronic payment modes.',
      tag: 'Verified Regulatory Source',
    },
    {
      title: 'National Cybercrime Helpline: 1930',
      organization: 'Indian Cyber Crime Coordination Centre (I4C)',
      url: 'tel:1930',
      description: 'Dedicated national helpline for victims of financial cyber fraud to immediately alert enforcement authorities during the crucial golden hours.',
      tag: 'Verified Emergency Service',
    },
    {
      title: 'DoT Sanchar Saathi & Chakshu Facility',
      organization: 'Department of Telecommunications (DoT)',
      url: 'https://sancharsaathi.gov.in',
      description: 'Official citizen centric facility to report suspected fraudulent communications received through calls, SMS, or WhatsApp regarding fake KYC and lottery claims.',
      tag: 'Verified Government Portal',
    },
    {
      title: 'National Payments Corporation of India (NPCI) UPI Safety',
      organization: 'NPCI',
      url: 'https://www.npci.org.in',
      description: 'Safety guidelines, consumer dispute resolution frameworks, and UPI merchant verification standards.',
      tag: 'Payment System Operator',
    },
  ];

  const bankContactGuide = [
    {
      bank: 'State Bank of India (SBI)',
      tollFree: '1800 1234 / 1800 2100',
      upiBlock: 'Send SMS "BLOCK <A/C No>" or use YONO App',
    },
    {
      bank: 'HDFC Bank',
      tollFree: '1800 1600 / 1800 2600',
      upiBlock: 'NetBanking / Mobile App > Manage Cards > Block',
    },
    {
      bank: 'ICICI Bank',
      tollFree: '1800 1080',
      upiBlock: 'iMobile Pay App > Services > Block UPI',
    },
    {
      bank: 'Axis Bank',
      tollFree: '1860 419 5555 / 1860 500 5555',
      upiBlock: 'Open Axis Mobile > Security Center > Instant Freeze',
    },
  ];

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#247A55] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Official Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#142B3B]">
          {language === 'ta' ? 'அதிகாரப்பூர்வ பாதுகாப்பு வளங்கள்' : 'Verified Safety & Reporting Resources'}
        </h1>
        <p className="text-base text-[#65727D] leading-relaxed max-w-2xl">
          Always rely on authenticated government and banking channels. Here are the primary official portals, regulatory authorities, and dispute mechanisms in India.
        </p>
      </div>

      {/* Official Government & Regulatory Resources */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#142B3B] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#247A55]" />
          <span>Verified Government & Regulatory Portals</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {officialSources.map((source, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E5E5DF] shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#F8F7F3] text-[#247A55] border border-[#E5E5DF]">
                  {source.tag}
                </span>
                <h3 className="text-base font-bold text-[#142B3B]">
                  {source.title}
                </h3>
                <p className="text-xs text-[#65727D] font-medium">
                  {source.organization}
                </p>
                <p className="text-xs text-[#65727D] leading-relaxed pt-1">
                  {source.description}
                </p>
              </div>

              <div>
                <a
                  href={source.url}
                  target={source.url.startsWith('http') ? '_blank' : undefined}
                  rel={source.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E85D4A] hover:underline"
                >
                  <span>{source.url.startsWith('tel:') ? 'Call Helpline Directly' : 'Visit Official Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Bank Emergency Directory Guidelines */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] shadow-sm space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#142B3B] flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#142B3B]" />
            <span>Emergency Banking Assistance Guidelines</span>
          </h2>
          <p className="text-xs text-[#65727D]">
            Official toll-free contacts for major Indian banks. Always verify by looking at the back of your physical debit card before dialing.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E5E5DF] bg-[#F8F7F3] text-[#142B3B]">
                <th className="p-3 font-bold">Bank Name</th>
                <th className="p-3 font-bold">Verified National Helpline</th>
                <th className="p-3 font-bold">Instant Freeze Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5DF]">
              {bankContactGuide.map((bank, idx) => (
                <tr key={idx} className="hover:bg-[#F8F7F3]/50">
                  <td className="p-3 font-bold text-[#142B3B]">{bank.bank}</td>
                  <td className="p-3 font-mono text-[#65727D]">{bank.tollFree}</td>
                  <td className="p-3 text-[#65727D]">{bank.upiBlock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 rounded-xl bg-[#F8F7F3] border border-[#E5E5DF] text-[11px] text-[#65727D] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Safety Warning on Google Numbers:</strong> Never search &ldquo;XYZ Bank customer care number&rdquo; on search engines without cross-referencing against the physical debit card or official mobile banking app. Scammers actively pay for sponsored ads with fake phone numbers.
          </span>
        </div>
      </section>

      {/* Classification of Information Quality */}
      <section className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#E5E5DF] space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#65727D]">
          Our Information Standards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white border border-[#E5E5DF] space-y-1">
            <span className="font-bold text-[#247A55] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Official
            </span>
            <p className="text-[#65727D]">Information directly referenced from RBI circulars, MHA/I4C guidelines, and NPCI protocols.</p>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#E5E5DF] space-y-1">
            <span className="font-bold text-[#142B3B] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Educational Advice
            </span>
            <p className="text-[#65727D]">Defensive best practices derived from observed social engineering threat patterns.</p>
          </div>
          <div className="p-3 rounded-xl bg-white border border-[#E5E5DF] space-y-1">
            <span className="font-bold text-[#A86417] flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" /> Bank-Specific Variation
            </span>
            <p className="text-[#65727D]">Specific UI steps may vary slightly across different mobile banking and UPI app versions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
