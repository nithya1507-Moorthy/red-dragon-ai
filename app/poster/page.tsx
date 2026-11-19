 'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, ShieldCheck } from 'lucide-react';
const posters = [
 {id:'pin',title:'NEVER SHARE YOUR UPI PIN',subtitle:'Your PIN authorizes a payment — it does not help you receive money.',rule:'Never tell your PIN, OTP, CVV or password to anyone.',steps:['Reject callers asking for your PIN or OTP.','Enter your PIN only inside your trusted UPI app.','Check the payee name and amount before approving.'],foot:'STOP • THINK • VERIFY'},
 {id:'qr',title:'SCAN QR CODES CAREFULLY',subtitle:'A QR code can send money from your account.',rule:'You do not need to scan a QR code to receive money.',steps:['Check the receiver name shown by your UPI app.','Do not scan codes sent by unknown buyers for “refunds”.','If a shop QR sticker looks changed, stop and verify it.'],foot:'CHECK THE NAME BEFORE YOU PAY'},
 {id:'calls',title:'BEWARE OF FAKE SUPPORT CALLS',subtitle:'Fraudsters may pretend to be bank or UPI customer-care staff.',rule:'Disconnect suspicious calls and contact support from the official app.',steps:['Never install remote-access apps on a caller’s instruction.','Never approve an unexpected collect request.','Do not trust random numbers found in comments or messages.'],foot:'REAL SUPPORT NEVER NEEDS YOUR SECRET PIN'},
 {id:'refund',title:'REFUND? DO NOT RUSH!',subtitle:'Scammers create urgency to make you act without checking.',rule:'A genuine refund does not require you to pay money or share your PIN.',steps:['Check the transaction status in your own app.','Do not click unknown refund links.','Reject requests to “verify” your account with a payment.'],foot:'PAUSE BEFORE YOU APPROVE'},
 {id:'report',title:'ACT FAST. REPORT CYBER FRAUD.',subtitle:'If money is debited without your permission, take action immediately.',rule:'Call India’s cybercrime helpline 1930 and notify your bank.',steps:['Save the transaction ID, messages and screenshots.','Report at cybercrime.gov.in.','Never share your PIN or OTP while seeking help.'],foot:'1930 • cybercrime.gov.in'}
];
export default function PosterPage(){
 const printAll=()=>window.print();
 return <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 space-y-7">
  <div className="flex items-center justify-between gap-3 no-print"><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#65727D]"><ArrowLeft className="w-4 h-4"/>Back to Home</Link><button onClick={printAll} className="inline-flex items-center gap-2 rounded-xl bg-[#142B3B] px-5 py-3 text-white text-sm font-bold"><Printer className="w-4 h-4"/>Print all 5 posters</button></div>
  <header className="text-center space-y-2"><p className="text-xs font-bold uppercase tracking-widest text-[#E85D4A]">Red Dragon AI • Public Awareness</p><h1 className="text-3xl sm:text-4xl font-black text-[#142B3B]">5 UPI Safety Posters</h1><p className="text-sm text-[#65727D]">Each poster is separate and designed to print as its own page.</p></header>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   {posters.map((poster,index)=><article key={poster.id} className="poster-page min-h-[560px] rounded-3xl overflow-hidden border-4 border-[#142B3B] bg-white shadow-lg flex flex-col" style={{breakAfter:'page'}}>
    <div className="bg-[#142B3B] text-white p-6 sm:p-8 text-center"><div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-cyan-400/15 border border-cyan-300/40 flex items-center justify-center"><ShieldCheck className="w-8 h-8 text-cyan-300"/></div><p className="text-xs tracking-[.25em] text-cyan-300 font-bold">RED DRAGON AI • UPI SAFETY {index+1}/5</p><h2 className="text-3xl sm:text-4xl font-black mt-4 leading-tight">{poster.title}</h2><p className="mt-3 text-sm sm:text-base text-white/80">{poster.subtitle}</p></div>
    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6"><div className="rounded-2xl bg-[#FFF3E8] border-2 border-[#E85D4A] p-5 text-center"><p className="text-xs font-black uppercase tracking-widest text-[#B74435]">Remember</p><p className="text-lg sm:text-xl font-black text-[#142B3B] mt-2">{poster.rule}</p></div><ol className="space-y-4">{poster.steps.map((step,i)=><li key={step} className="flex gap-3 items-start"><span className="w-8 h-8 shrink-0 rounded-full bg-[#142B3B] text-white flex items-center justify-center font-black">{i+1}</span><span className="text-sm sm:text-base font-semibold text-[#142B3B] pt-1">{step}</span></li>)}</ol><div className="rounded-xl bg-[#DCEFE5] p-4 text-center text-sm sm:text-base font-black tracking-wide text-[#247A55]">{poster.foot}</div></div>
    <div className="bg-[#142B3B] px-5 py-3 text-center text-[11px] font-bold tracking-wider text-white">THINK BEFORE YOU CLICK • STAY SAFE BEFORE YOU PAY</div>
   </article>)}
  </div>
 </main>
}
