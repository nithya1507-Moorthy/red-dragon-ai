'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Copy, 
  Printer, 
  RotateCcw, 
  Check, 
  ExternalLink, 
  Lock, 
  AlertTriangle, 
  ShieldAlert,
  Info
} from 'lucide-react';
import { SCAM_SCENARIOS } from '@/data/scams';
import { ComplaintData } from '@/lib/types';
import { detectSensitiveData } from '@/lib/sensitive-detector';
import { useLanguage } from '@/lib/language-context';

export default function ComplaintHelperPage() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState<ComplaintData>({
    incidentDescription: '',
    dateTime: '',
    category: 'QR Code Scam',
    amountInvolved: '',
    transactionRef: '',
    evidenceAvailable: '',
    actionsTaken: '',
  });

  const [summaryText, setSummaryText] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [privacyAlert, setPrivacyAlert] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateSummary = (e: React.FormEvent) => {
    e.preventDefault();
    setPrivacyAlert(null);

    // Sensitive Data check on description
    const sensitive = detectSensitiveData(
      formData.incidentDescription + ' ' + formData.transactionRef
    );
    if (sensitive.hasSensitiveData) {
      setPrivacyAlert(
        `Confidential credentials detected (${sensitive.detectedTypes.join(
          ', '
        )}). Please do NOT put your secret PIN, OTP, CVV, or passwords into complaint notes. Officials only need transaction reference IDs (UTR), not secret passcodes.`
      );
      return;
    }

    const generated = `
=========================================
OFFICIAL CYBERCRIME COMPLAINT DRAFT
Prepared via UPI Safety Coach (Organizing Tool)
=========================================

1. INCIDENT OVERVIEW:
   - Suspected Scam Type: ${formData.category || 'Not specified'}
   - Incident Date & Time: ${formData.dateTime || 'Not specified'}
   - Approximate Amount Involved: ${formData.amountInvolved ? `INR ${formData.amountInvolved}` : 'Not applicable / None'}

2. TRANSACTION & TECHNICAL REFERENCES:
   - 12-Digit UPI Ref / UTR / Account: ${formData.transactionRef || 'Not provided'}

3. DETAILED NARRATIVE:
   ${formData.incidentDescription || 'No description provided.'}

4. EVIDENCE PRESERVED:
   ${formData.evidenceAvailable || 'Screenshots of messages and bank debits preserved on device.'}

5. IMMEDIATE ACTIONS ALREADY TAKEN:
   ${formData.actionsTaken || 'Called 1930 and notified bank customer support.'}

-----------------------------------------
NOTICE:
This is an organized personal summary created for filing on the official National Cybercrime Reporting Portal (https://cybercrime.gov.in) or presenting to the bank/police station.
=========================================
`.trim();

    setSummaryText(generated);
  };

  const handleCopySummary = () => {
    if (!summaryText) return;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setFormData({
      incidentDescription: '',
      dateTime: '',
      category: 'QR Code Scam',
      amountInvolved: '',
      transactionRef: '',
      evidenceAvailable: '',
      actionsTaken: '',
    });
    setSummaryText('');
    setPrivacyAlert(null);
  };

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#247A55] text-xs font-bold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          <span>Local Privacy-Conscious Tool</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#142B3B]">
          {language === 'ta' ? 'சைபர் புகார் குறிப்பு தயாரிப்பாளர்' : 'Cybercrime Complaint Organizer'}
        </h1>
        <p className="text-base text-[#65727D] leading-relaxed max-w-2xl">
          Filing a cybercrime complaint requires clear dates, transaction references, and concise explanations. Use this offline-first form to organize your thoughts into an organized brief before submitting to official channels.
        </p>
      </div>

      {/* Mandatory Clarification Notice */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Important Clarification:</strong> This tool helps organize your information locally in your browser. It does <strong>NOT</strong> automatically file a complaint with the police or government. Review your summary and submit it manually at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-950">cybercrime.gov.in</a> or by dialing 1930.
        </p>
      </div>

      {privacyAlert && (
        <div className="p-4 rounded-xl bg-[#FFF8F7] border border-[#B83232]/30 text-xs text-[#B83232] flex items-start gap-2">
          <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#B83232]" />
          <span>{privacyAlert}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Form */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E5DF]">
            <h2 className="text-base font-bold text-[#142B3B]">
              Incident Details
            </h2>
            <div className="flex items-center gap-1.5 text-[11px] text-[#247A55] font-medium">
              <Lock className="w-3.5 h-3.5" />
              <span>Processed in Browser Memory</span>
            </div>
          </div>

          <form onSubmit={handleGenerateSummary} className="space-y-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Suspected Scam Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2.5 rounded-xl border border-[#E5E5DF] text-xs text-[#142B3B] bg-white focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
              >
                {SCAM_SCENARIOS.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other Digital Fraud">Other Digital Fraud</option>
              </select>
            </div>

            {/* Date and Time */}
            <div>
              <label className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Approximate Date & Time
              </label>
              <input
                type="text"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleInputChange}
                placeholder="e.g. 24 Oct 2026 at 3:15 PM"
                className="w-full p-2.5 rounded-xl border border-[#E5E5DF] text-xs text-[#142B3B] focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Amount Lost or Demanded (INR)
              </label>
              <input
                type="text"
                name="amountInvolved"
                value={formData.amountInvolved}
                onChange={handleInputChange}
                placeholder="e.g. 15,000"
                className="w-full p-2.5 rounded-xl border border-[#E5E5DF] text-xs text-[#142B3B] focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
              />
            </div>

            {/* UTR / Ref info */}
            <div>
              <label className="block text-xs font-bold text-[#142B3B] mb-1.5">
                12-Digit UPI Reference Number (UTR) or Suspect Handle
              </label>
              <input
                type="text"
                name="transactionRef"
                value={formData.transactionRef}
                onChange={handleInputChange}
                placeholder="e.g. UTR 429182910291 or suspect@upi (Never enter PIN)"
                className="w-full p-2.5 rounded-xl border border-[#E5E5DF] text-xs text-[#142B3B] focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
              />
              <p className="text-[11px] text-[#65727D] mt-1">
                Found on transaction receipt. Never enter your secret PIN or password.
              </p>
            </div>

            {/* Incident Description */}
            <div>
              <label className="block text-xs font-bold text-[#142B3B] mb-1.5">
                What Happened? (Chronological Summary)
              </label>
              <textarea
                name="incidentDescription"
                value={formData.incidentDescription}
                onChange={handleInputChange}
                rows={4}
                placeholder="State the story clearly: Who contacted you, what app did they use, what did they claim, and what actions were requested?"
                className="w-full p-2.5 rounded-xl border border-[#E5E5DF] text-xs text-[#142B3B] focus:outline-none focus:ring-2 focus:ring-[#142B3B] resize-none"
              />
            </div>

            {/* Evidence Available */}
            <div>
              <label className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Evidence Available
              </label>
              <input
                type="text"
                name="evidenceAvailable"
                value={formData.evidenceAvailable}
                onChange={handleInputChange}
                placeholder="e.g. Screenshots of WhatsApp chat, SMS text, call recordings"
                className="w-full p-2.5 rounded-xl border border-[#E5E5DF] text-xs text-[#142B3B] focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
              />
            </div>

            {/* Actions Taken */}
            <div>
              <label className="block text-xs font-bold text-[#142B3B] mb-1.5">
                Actions Already Taken
              </label>
              <input
                type="text"
                name="actionsTaken"
                value={formData.actionsTaken}
                onChange={handleInputChange}
                placeholder="e.g. Blocked UPI in bank app, called 1930, froze debit card"
                className="w-full p-2.5 rounded-xl border border-[#E5E5DF] text-xs text-[#142B3B] focus:outline-none focus:ring-2 focus:ring-[#142B3B]"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-[#E85D4A] hover:bg-[#d54e3c] text-white text-xs font-bold transition-all shadow-sm"
              >
                Generate Complaint Brief
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="p-3 rounded-xl border border-[#E5E5DF] text-[#65727D] hover:text-[#142B3B] hover:bg-[#F8F7F3]"
                title="Reset Form"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Generated Preview */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DF] shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E5DF]">
            <h2 className="text-base font-bold text-[#142B3B]">
              Formatted Complaint Summary
            </h2>
            <div className="flex items-center gap-2">
              {summaryText && (
                <>
                  <button
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E5DF] text-xs font-semibold text-[#142B3B] hover:bg-[#F8F7F3] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#247A55]" />
                        <span className="text-[#247A55]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E5DF] text-xs font-semibold text-[#142B3B] hover:bg-[#F8F7F3] transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {summaryText ? (
            <div className="space-y-4">
              <pre className="p-4 rounded-xl bg-[#F8F7F3] border border-[#E5E5DF] text-xs font-mono text-[#142B3B] whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-[500px]">
                {summaryText}
              </pre>

              {/* Toast when copied */}
              {copied && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-[#247A55] font-semibold flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4" />
                  <span>Summary copied to clipboard. You can now paste it into the official portal form or your notes.</span>
                </div>
              )}

              {/* Next step: Open official portal */}
              <div className="p-4 rounded-xl bg-[#142B3B] text-white flex items-center justify-between gap-4">
                <div className="text-xs space-y-0.5">
                  <span className="font-bold block">Ready to file officially?</span>
                  <span className="text-slate-300">Submit this brief on India&apos;s National Cybercrime Portal.</span>
                </div>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#E85D4A] hover:bg-[#d54e3c] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>cybercrime.gov.in</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center space-y-2">
              <FileText className="w-10 h-10 text-[#65727D] mx-auto opacity-40" />
              <p className="text-xs font-semibold text-[#65727D]">
                Fill in the details on the left and click &ldquo;Generate Complaint Brief&rdquo; to create your organized summary.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
